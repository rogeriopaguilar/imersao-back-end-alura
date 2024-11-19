import express from 'express';
 
const app = express();
app.use(express.json());




app.listen(3000, () =>{console.log("Servidor express escutando");});


const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];

const jsonLivro = 
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954,
  "genero": "Fantasia"
};

app.get('/api', (req, resp) => {resp.status(200).send("Bem vindo à imersão")});
app.get('/api/livro', (req, resp) => {resp.status(200).json(jsonLivro)});
app.get('/api/posts', (req, resp) => {resp.status(200).json(posts)});

app.get('/api/post/:id', (req, resp) => {
    const postIndex = posts.findIndex((post)=>{return post.id == Number(req.params.id)});

    resp.status(200).json(posts[postIndex])
});

