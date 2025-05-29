INSERT INTO themes (question_theme) VALUES ('História'), ('Matemática'), ('Geografia'), ('HTML'), ('CSS'), ('JavaScript'), ('Python'), ('Lógica');

INSERT INTO question (title, theme, right_option, option_A, option_B, option_C, option_D) VALUES 
('Qual tag é usada para criar um link em HTML?', 'HTML', 'option_A', '<a>', '<link>', '<href>', '<url>'),
('Qual tag define um parágrafo em HTML?', 'HTML', 'option_B', '<h1>', '<p>', '<div>', '<span>'),
('Para que serve a tag <head> em um documento HTML?', 'HTML', 'option_C', 'Exibir o conteúdo', 'Criar rodapé', 'Conter metadados', 'Inserir imagem'),
('Qual propriedade CSS altera a cor do texto?', 'CSS', 'option_B', 'background-color', 'color', 'text-color', 'font-color'),
('Como aplicar uma cor de fundo em CSS?', 'CSS', 'option_A', 'background-color: red;', 'color: red;', 'text-color: red;', 'bg-color: red;'),
('Qual seletor aplica estilos a todos os parágrafos?', 'CSS', 'option_D', '#p', '.p', 'body p', 'p'),
('Qual comando exibe uma mensagem no console?', 'JavaScript', 'option_B', 'alert()', 'console.log()', 'prompt()', 'print()'),
('Como se declara uma variável em JavaScript ES6?', 'JavaScript', 'option_C', 'var nome', 'define nome', 'let nome', 'set nome'),
('Qual operador é usado para comparação estrita (valor e tipo)?', 'JavaScript', 'option_D', '=', '==', '<=>', '==='),
('Como se imprime algo na tela em Python?', 'Python', 'option_A', 'print()', 'console.log()', 'echo()', 'write()'),
('Qual palavra-chave define uma função em Python?', 'Python', 'option_B', 'function', 'def', 'func', 'lambda'),
('Como se comenta uma linha em Python?', 'Python', 'option_D', '//', '<!-- -->', '/* */', '#'),
('O que significa o operador lógico && em programação?', 'Lógica', 'option_C', 'OU lógico', 'Negação lógica', 'E lógico', 'Comparação'),
('Qual estrutura repete um bloco de código enquanto uma condição é verdadeira?', 'Lógica', 'option_B', 'if', 'while', 'switch', 'for each'),
('Qual estrutura condicional escolhe entre dois blocos de código?', 'Lógica', 'option_A', 'if-else', 'while', 'switch', 'loop');