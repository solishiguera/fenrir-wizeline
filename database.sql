-- heroku pg:psql postgresql-flexible-88396 --app fenrir-wizeline

CREATE TABLE department( 
  department_id SERIAL PRIMARY KEY,
  department_name VARCHAR(255) NOT NULL,
  is_active BOOLEAN NOT NULL
);

CREATE TABLE employee( 
  employee_id SERIAL PRIMARY KEY,
  employee_name VARCHAR(128) NOT NULL,
  employee_last_name VARCHAR(128) NOT NULL,
  department_id INTEGER,
  is_admin BOOLEAN NOT NULL,
  job_title VARCHAR(255),
  profile_picture VARCHAR(255),
  username VARCHAR(128) UNIQUE,
  employee_password VARCHAR(128),
  tsvector full_text_search,
  CONSTRAINT fk_department_id 
   FOREIGN KEY (department_id) 
     REFERENCES department(department_id)
);

CREATE TABLE question(
  question_id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  department_id INTEGER,
  CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id)
      REFERENCES employee(employee_id),
  CONSTRAINT fk_department_id
    FOREIGN KEY (department_id)
      REFERENCES department(department_id),
  question_text VARCHAR(512) NOT NULL,
  is_anonymous BOOLEAN NOT NULL,
  date_created TIMESTAMP, 
  date_last_modified TIMESTAMP,
  like_count INTEGER,
  comment_count INTEGER,
  is_answered BOOLEAN,
  tsvector full_text_search
);

CREATE TABLE likes(  
  like_id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  question_id INTEGER,
  username VARCHAR(128),
  CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id)
      REFERENCES employee(employee_id),
  CONSTRAINT fk_question_id
    FOREIGN KEY (question_id)
      REFERENCES question(question_id),
  CONSTRAINT fk_username
      FOREIGN KEY (username)
        REFERENCES employee(username)
);

CREATE TABLE comment(
  comment_id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  question_id INTEGER,
  CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id)
      REFERENCES employee(employee_id),
  CONSTRAINT fk_question_id
    FOREIGN KEY (question_id)
      REFERENCES question(question_id),
  comment_text VARCHAR(512) NOT NULL,
  date_created TIMESTAMP,
  is_answer BOOLEAN,
  is_anonymous BOOLEAN NOT NULL
);

  -- ~~~~~~~~~~~~~~~~~~~~~
CREATE OR REPLACE FUNCTION increment_comment_count_trigger()
  RETURNS trigger AS
$$
BEGIN 
  UPDATE question q
  SET comment_count = (SELECT comment_count FROM question WHERE question_id = new.question_id) + 1
  WHERE q.question_id = new.question_id;
  RETURN new;
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER update_comment_count
  AFTER INSERT
  ON comment
  FOR EACH ROW 
  EXECUTE PROCEDURE increment_comment_count_trigger();


-- ~~~~~~~~~~~~~~~~~~~~~
-- ~~~~~~~~~~~~~~~~~~~~~
CREATE OR REPLACE FUNCTION increment_like_count_trigger()
  RETURNS trigger AS
$$
BEGIN 
  UPDATE question q
  SET like_count = (SELECT like_count FROM question WHERE question_id = new.question_id) + 1
  WHERE q.question_id = new.question_id;
  RETURN new;
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER update_like_count
  AFTER INSERT
  ON likes
  FOR EACH ROW 
  EXECUTE PROCEDURE increment_like_count_trigger();

-- ~~~~~~~~~
-- It works!
CREATE OR REPLACE FUNCTION decrement_like_count_trigger()
  RETURNS trigger AS
$$
BEGIN 
  UPDATE question q
  SET like_count = (SELECT like_count FROM question WHERE question_id = old.question_id) - 1
  WHERE q.question_id = old.question_id;
  RETURN old;
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER update_decrement_like_count
  AFTER DELETE
  ON likes
  FOR EACH ROW 
  EXECUTE PROCEDURE decrement_like_count_trigger();


ALTER TABLE likes
ADD CONSTRAINT constraint_like UNIQUE (question_id, employee_id);

CREATE TABLE token(
  token_id SERIAL PRIMARY KEY,
  username VARCHAR(128) NOT NULL,
  token VARCHAR(512) NOT NULL,
  date_created TIMESTAMP, 
  expiration_date TIMESTAMP,
  CONSTRAINT fk_username
    FOREIGN KEY (username)
      REFERENCES employee(username)
);