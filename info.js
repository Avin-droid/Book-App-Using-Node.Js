const yargs=require('yargs')
const book=require('./book')

yargs.command({
  command:'add',
  description:'It will add new book to the file',
  builder:
  {
    book_id:{
      type:Number,
      demandOption:true
    },
    book_name:{
      type:String,
      demandOption:true,
    },
    book_author:{
      type:String,
      demandOption:true,
    },
    book_Price:{
      type:Number
    },
    book_Publisher:{
      type:String
    },
    book_Type:{
      type:String
    }
  },

  handler:(args)=>
  {
    book.newbook(args.book_id,
      args.book_name,
      args.book_author,
      args.book_Price,
      args.book_Publisher,
      args.book_Type)
      
  }

})

yargs.command({
  command:'read',
  description:'It will read all book record stored in a file',
  builder:
  {

  },
  handler:()=>{
    book.readAllBook()
  }
})

yargs.command({
  command:'readone',
  description:'It will read one book record  which is stored in a file',
  builder:
  {

  },
  handler:(args)=>{
    book.readOneBook(args.book_name)
  }
})

yargs.command({
  command:'readauthor',
  description:'It will fetch record by Author Name',
  builder:
  {

book_author:
    {
      type:String,
      demandOption:true,
    },
  },
  handler:(args)=>{
    book.readByAuthor(args.book_author)
  }
})

yargs.command({
  command:'deletebook',
  description:'It will Delete the book from file',
  builder:
  {
    book_name:
    {
      type:String,
      demandoption:true,
    }

  },
  handler:(args)=>{
    book.DeleteBook(args.book_name)
  }

})

yargs.command({
  command: 'update',
  description: 'It will update a book record in the file',
  builder: {
    book_name: 
    {
      type:String,
      demandOption:true
    },
    book_id:
    {
      type:Number,
      demandOption:true
    },
    book_author: 
    {
      type:String
    },
    book_Price: 
    {
      type:Number
    },
    book_Publisher: 
    {
      type:String
    },
    book_Type: 
    {
      type:String
    }
  },
  handler:(args) => {
    book.UpdateBook(
      args.book_name,
      args.book_id,
      args.book_author,
      args.book_Price,
      args.book_Publisher,
      args.book_Type
    )
  }
})

yargs.parse()