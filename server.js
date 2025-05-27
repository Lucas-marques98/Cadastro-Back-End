// Importa o módulo 'express' para criar o servidor e gerenciar rotas
import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Adiciona um middleware para que o Express consiga entender requisições com corpo em JSON
app.use(express.json()); // Middleware para analisar JSON no corpo da requisição

// Cria um array vazio para armazenar os usuários cadastrados em memória
const users = [
];

// Define uma rota POST para '/users' para cadastrar um novo usuário
app.post('/users', (req, res) => {
  // Adiciona o corpo da requisição (os dados do usuário) ao array de usuários
  users.push(req.body);
  // Retorna uma resposta com status 201 (Criado) e uma mensagem de sucesso
  res.status(201).send('Usuário criado com sucesso!');
});

// Define uma rota GET para '/users' para listar todos os usuários cadastrados
app.get('/users', (req, res) => {
    // Retorna o array de usuários em formato JSON
    res.status(200).json(users);
});

// Inicia o servidor na porta 3000 para escutar requisições HTTP
app.listen(3000)

// Comentários explicativos sobre as rotas e objetivos do projeto:
/* as nossas rotas precisa de 2 Coisas:

1 : Tipo de rota / Método HTTP
2 :Endereço da rota

OBJETIVO: Criar API de usuários
Listar usuários
Editar usuários
Deletar usuários
*/