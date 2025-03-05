CREATE TABLE question (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    theme VARCHAR(30) NOT NULL,
    right_option VARCHAR(8) NOT NULL,
    option_A VARCHAR(150) NOT NULL,
    option_B VARCHAR(150) NOT NULL,
    option_C VARCHAR(150) NOT NULL,
    option_D VARCHAR(150) NOT NULL
)