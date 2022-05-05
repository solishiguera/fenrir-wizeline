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
  is_answered BOOLEAN
);

CREATE TABLE likes( 
  like_id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  question_id INTEGER,
  CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id)
      REFERENCES employee(employee_id),
  CONSTRAINT fk_question_id
    FOREIGN KEY (question_id)
      REFERENCES question(question_id)
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

INSERT INTO department(department_name, is_active) VALUES('Sowftware Engineering Interns', TRUE);
INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture)
VALUES
('Diego', 'Solis Higuera', 1, TRUE, 'Software Engineer Intern', ''),
('Ana Lucía', 'Vea Tellez', 1, TRUE, 'Software Engineer Intern', ''),
('Samuel', 'Ramirez', 1, TRUE, 'Software Engineer Intern', ''),
('Sebastian', 'Rodriguez', 1, TRUE, 'Software Engineer Intern', ''),
('Joaquin Arturo', 'Beltran', 1, TRUE, 'Software Engineer Intern', '');

INSERT INTO question(employee_id,department_id,question_text,is_anonymous,date_created,date_last_modified,like_count,comment_count,is_answered) VALUES(1, 1, '¿Cuál es el proceso para aplicar para un internship?', FALSE, CURRENT_DATE, CURRENT_DATE, 0, 0, FALSE);

INSERT INTO question(employee_id,department_id,question_text,is_anonymous,date_created,date_last_modified,like_count,comment_count,is_answered) VALUES(404, 404, '¿En qué piso se ubica la cafetería?', TRUE, CURRENT_DATE, CURRENT_DATE, 0, 0, FALSE);
INSERT INTO question(employee_id,department_id,question_text,is_anonymous,date_created,date_last_modified,like_count,comment_count,is_answered) VALUES(4, 1, '¿El uso de cubrebocas es obligatorio?', FALSE, CURRENT_DATE, CURRENT_DATE, 0, 0, FALSE);


UPDATE employee
SET username = 'diegosolis' WHERE employee_id = 1;
UPDATE employee
SET username = 'anavea' WHERE employee_id = 2;
UPDATE employee
SET username = 'samramirez' WHERE employee_id = 3;
UPDATE employee
SET username = 'sebasrdz' WHERE employee_id = 4;
UPDATE employee
SET username = 'jackbel' WHERE employee_id = 5;

UPDATE employee
SET employee_password = 'ih8bugs';

INSERT INTO department(department_id, department_name, is_active) VALUES(404, 'Anonymous', TRUE);
INSERT INTO employee(employee_id, employee_name, employee_last_name, department_id, is_admin) VALUES(404, 'Anonymous', 'Anonymous', 404, FALSE);


SELECT question_id AS "Question_ID", COUNT(comment_id) AS "Quantity"
FROM comment
GROUP BY question_id;

/*
CREATE OR REPLACE FUNCTION increment_comment_count_trigger_func(id INTEGER) RETURNS TRIGGER AS $$  
BEGIN 
  UPDATE question
  SET comment_count = comment_count + 1 
  WHERE question_id = id;
RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER increment_comment_count_trigger 
  AFTER INSERT 
  ON question
  EXECUTE PROCEDURE increment_comment_count_trigger_func(NEW.question_id);
*/
  -- ~~~~~~~~~~~~~~~~~~~~~
CREATE OR REPLACE FUNCTION increment_comment_count_trigger()
  RETURNS trigger AS
$func$
BEGIN 
  UPDATE question
  SET comment_count = 100
  WHERE question_id = NEW.question_id;
  RETURN NEW;
END;
$func$
LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER update_comment_count
  AFTER INSERT
  ON comment
  FOR EACH STATEMENT 
  EXECUTE PROCEDURE increment_comment_count_trigger();