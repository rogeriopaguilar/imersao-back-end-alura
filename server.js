import express from 'express';
 
const app = express();

app.listen(3000, () =>{console.log("Servidor express escutando");});

app.get('/api', (req, resp) => {resp.status(200).send("Bem vindo à imersão")});



const jsonLivro = 
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954,
  "genero": "Fantasia"
};


app.get('/api/livro', (req, resp) => {resp.status(200).send(jsonLivro)});