INSERT INTO department(department_name, is_active) VALUES('Sowftware Engineering Interns', TRUE);
INSERT INTO department(department_id, department_name, is_active) VALUES(404, 'Anonymous', TRUE);

INSERT INTO employee(employee_name, employee_last_name, department_id, is_admin, job_title, profile_picture)
VALUES
('Diego', 'Solis Higuera', 1, TRUE, 'Software Engineer Intern', ''),
('Ana Lucía', 'Vea Tellez', 1, TRUE, 'Software Engineer Intern', ''),
('Samuel', 'Ramirez', 1, TRUE, 'Software Engineer Intern', ''),
('Sebastian', 'Rodriguez', 1, TRUE, 'Software Engineer Intern', ''),
('Joaquin Arturo', 'Beltran', 1, TRUE, 'Software Engineer Intern', ''),
(404, 'Anonymous', 'Anonymous', 404, FALSE);
