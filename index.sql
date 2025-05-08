CREATE TABLE question (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    theme VARCHAR(30) NOT NULL,
    right_option VARCHAR(8) NOT NULL,
    option_A VARCHAR(150) NOT NULL,
    option_B VARCHAR(150) NOT NULL,
    option_C VARCHAR(150) NOT NULL,
    option_D VARCHAR(150) NOT NULL
);


CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY,
    email VARCHAR(300) NOT NULL,
    name_alias VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    user_points INT NOT NULL DEFAULT 0
);

INSERT INTO question (id, title, theme, right_option, option_A, option_B, option_C, option_D) VALUES
(1, 'Em que ano ocorreu a Independência do Brasil?', 'História', 'option_B', '1808', '1822', '1889', '1500'),
(2, 'Quem foi o primeiro presidente do Brasil?', 'História', 'option_C', 'Dom Pedro II', 'Juscelino Kubitschek', 'Deodoro da Fonseca', 'Getúlio Vargas'),
(3, 'Qual foi o marco inicial da Revolução Francesa?', 'História', 'option_A', 'Queda da Bastilha', 'Declaração dos Direitos do Homem', 'Golpe do 18 de Brumário', 'Execução de Luís XVI'),
(4, 'Qual país foi responsável por colonizar o Brasil?', 'História', 'option_D', 'Espanha', 'Inglaterra', 'França', 'Portugal'),
(5, 'Quem foi o líder da Revolução Russa de 1917?', 'História', 'option_A', 'Vladimir Lenin', 'Josef Stalin', 'Leon Trótski', 'Mikhail Gorbachev'),
(6, 'Quanto é 7 + 5?', 'Matemática', 'option_C', '10', '11', '12', '13'),
(7, 'Qual é o resultado de 9 × 6?', 'Matemática', 'option_B', '42', '54', '48', '36'),
(8, 'Qual é a raiz quadrada de 81?', 'Matemática', 'option_A', '9', '8', '7', '6'),
(9, 'Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, ele é um triângulo...', 'Matemática', 'option_D', 'Equilátero', 'Isósceles', 'Obtusângulo', 'Retângulo'),
(10, 'Quanto é 15 dividido por 3?', 'Matemática', 'option_B', '4', '5', '6', '7'),
(11, 'Qual é o maior oceano do mundo?', 'Geografia', 'option_A', 'Oceano Pacífico', 'Oceano Atlântico', 'Oceano Índico', 'Oceano Ártico'),
(12, 'Qual é o país com a maior população do mundo?', 'Geografia', 'option_B', 'Estados Unidos', 'China', 'Índia', 'Brasil'),
(13, 'Qual é o maior deserto do mundo?', 'Geografia', 'option_D', 'Deserto de Gobi', 'Deserto do Kalahari', 'Deserto da Arábia', 'Antártida'),
(14, 'Qual é o rio mais longo do mundo?', 'Geografia', 'option_C', 'Rio Amazonas', 'Rio Mississippi', 'Rio Nilo', 'Rio Yangtzé'),
(15, 'Quantos continentes existem no planeta?', 'Geografia', 'option_B', '5', '7', '6', '8');
