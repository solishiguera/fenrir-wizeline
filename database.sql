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
  department_id SERIAL,
  is_admin BOOLEAN NOT NULL,
  job_title VARCHAR(255),
  profile_picture VARCHAR(255),
  CONSTRAINT fk_department_id 
   FOREIGN KEY (department_id) 
     REFERENCES department(department_id)
);

CREATE TABLE question(
  question_id SERIAL PRIMARY KEY,
  employee_id SERIAL,
  department_id SERIAL,
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
  employee_id SERIAL,
  question_id SERIAL,
  CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id)
      REFERENCES employee(employee_id),
  CONSTRAINT fk_question_id
    FOREIGN KEY (question_id)
      REFERENCES question(question_id)
);

CREATE TABLE comment(
  comment_id SERIAL PRIMARY KEY,
  employee_id SERIAL,
  question_id SERIAL,
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

INSERT INTO department(department_name, is_active) VALUES('Sowftware Engineering Interns', TRUE)
INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture)
VALUES
('Diego', 'Solis Higuera', 1, TRUE, 'Software Engineer Intern', ''),
('Ana Lucía', 'Vea Tellez', 1, TRUE, 'Software Engineer Intern', ''),
('Samuel', 'Ramirez', 1, TRUE, 'Software Engineer Intern', ''),
('Sebastian', 'Rodriguez', 1, TRUE, 'Software Engineer Intern', ''),
('Joaquin Arturo', 'Beltran', 1, TRUE, 'Software Engineer Intern', '');

INSERT INTO question(empoloyee_id, deparment_id, question_text, is_anonymus, date_created, date_last_modifed, like_count, comment_count, is_answer) 
VALUES(1, 1, "¿Cuál es el proceso de aplicación para conseguir un internship?", '0', CURRENT_DATE, CURRENT_DATE, 0, 0, 0);