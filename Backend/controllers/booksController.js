const Book= require('../model/book');


const getAllBooks=async(req,res,next)=>{
    let books;
    try{
        books= await Book.find();
    }
    catch(err){
        console.log(err);
    }
    if(!books){
       return res.status(404).json({message:"No books found"});
    }
    return res.status(200).json({books:books})
}

const addBook= async(req,res,next)=>{
    const {name,author,description,price,available,image}= req.body;
    let book;
    try{
        book= new Book({name,author,description,price,available,image});
        await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"unable to add book"});
    }
    return res.status(201).json({book:book});
};

const getBookbyID= async(req,res,next)=>{
    let book;
    const id = req.params.id;

    try{
        book= await Book.findById(id);

    }
    catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"No books found"});
     }
     return res.status(200).json({book:book})
}

const update= async (req,res,next)=>{
    let book;
    const id = req.params.id;
    const {name,author,description,price,available,image}= req.body;
    try{
        book= await Book.findByIdAndUpdate(id,{name,author,description,price,available,image});
        book= await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No books found by this id"});
     }
    return res.status(200).json({message:"book updated successfully",
        book:book})
    };

const deleteBook= async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{

        book= await Book.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No books found by this id"});
     }
    return res.status(200).json(
        {message:"book deleted successfully",
    book:book})};

exports.getAllBooks=getAllBooks;
exports.getBookbyID=getBookbyID;
exports.addBook=addBook;
exports.update=update;
exports.deleteBook=deleteBook;

