CREATE TABLE clients (
    account_number INT PRIMARY KEY,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    middle_name VARCHAR(50),
    date_of_birth DATE,
    inn VARCHAR(12),
    responsible_person_full_name VARCHAR(150),
    status VARCHAR(50) DEFAULT 'Не в работе'
);

CREATE TABLE users (
    full_name VARCHAR(150),
    login VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50)
);
