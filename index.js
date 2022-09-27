const { write } = require("fs");
const http = require("http");
const express = require("express");
const app = express();

var books = [
    {id:1,name:"El-Ayam",description:"The Life Of Author",publishedAt:"1970",author:"Taha Hussien"},
];


app.get('/books',(req,res)=>{
    res.json({
        data:books ,
    });
});

app.post('/books',(req,res)=>{  
    let name, description, publishedAt, author = req.body ;
    let book = {
        id:books.length +1 ,
        name,
        description,
        publishedAt,
        author
    }
    books.push(book) 
    res.json({
        data:book ,
    });
});

app.patch('books/id',(req,res)=>{
    let name, description, publishedAt, author = req.body ;
    let id = req.params ;
    let book = {
        id:books.length +1 ,
        name,
        description,
        publishedAt,
        author
    }
})


app.listen(8000);

