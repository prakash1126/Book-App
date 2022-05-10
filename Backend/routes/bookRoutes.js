//importing express framework
const express=require('express');

//importing express router
const router=express.Router();


//importing book model 
const Book=require('../model/book');
//importing book controller
const booksController=require('../controllers/booksController');
const { route } = require('express/lib/application');
//all api work of book
router.get("/",booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getBookbyID);
router.put("/:id",booksController.update);
router.delete("/:id",booksController.deleteBook);







module.exports=router;