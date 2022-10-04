
INSERT INTO department (id, name)
VALUES
    ('1', 'Sales'),
    ('2', 'Engineering'),
    ('3', 'Finance'),
    ('4','Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
    ('1', 'Software Engineer', '122000', '2'),
    ('2', 'Lawyer', '136000', '4'),
    ('3', 'Account Manager', '67000', '3'),
    ('4', 'Sales Lead', '92000', '1');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    ('1', 'Ash', 'Kanto', '2', '2'),
    ('2', 'Raj', 'Sewit', '4', NULL);