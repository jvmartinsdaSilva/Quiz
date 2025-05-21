CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE themes (
    question_theme VARCHAR(50) NOT NULL PRIMARY KEY
);

CREATE TABLE question (
    id UUID NOT NULL PRIMARY KEY UNIQUE DEFAULT gen_random_uuid(),
    title VARCHAR(300) NOT NULL,
    theme VARCHAR(50) NOT NULL,
    right_option VARCHAR(8) NOT NULL,
    option_A VARCHAR(150) NOT NULL,
    option_B VARCHAR(150) NOT NULL,
    option_C VARCHAR(150) NOT NULL,
    option_D VARCHAR(150) NOT NULL,
    FOREIGN KEY (theme) REFERENCES themes(question_theme)
);



CREATE TABLE users (
    id UUID NOT NULL PRIMARY KEY UNIQUE DEFAULT gen_random_uuid(),
    email VARCHAR(300) NOT NULL UNIQUE,
    name_alias VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    user_points INT NOT NULL DEFAULT 0
);