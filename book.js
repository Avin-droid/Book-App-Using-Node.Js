const path=require('path')
const fs=require('fs')
const chalk=require('chalk')

const book_file=path.join(__dirname,'Book.json')
const readBook=()=>{
  try
  {
      let readdata=fs.readFileSync(book_file)
      let jdata=readdata.toString()
      return JSON.parse(jdata)
  }
  catch(e)
  {
    return []
  }
}

const newbook=(b_id,b_name,b_author,b_price,b_publisher,b_type)=>{

  try
  {
    let newbookinfo=readBook()
    let duplicatebook=false
    for(let i=0;i<newbookinfo.length;i++)
    {
      console.log(newbookinfo[i].book_name)
      console.log(b_name)
      if(newbookinfo[i].book_name===b_name && newbookinfo[i].book_id===b_id)
      {
        duplicatebook=true
        break
      }
    }


    if(!duplicatebook)
    {
      let tempbook=
      {
        book_id:b_id,
        book_name:b_name,
        book_author:b_author,
        book_Price:b_price,
        book_Publisher:b_publisher,
        book_Type:b_type
      }
      newbookinfo.push(tempbook)
      addBook(newbookinfo)
      console.log('Book has been Added into the file Successfuly...')
    }
    else
    {
      console.log('Book-Name and Book-Id already exists in the file cannot add...')
    }
  }
  catch(e)
  {
   console.log('Error Occurs While adding the Book')
  }
}

const addBook=(obj)=>{
  try
  {
    fs.writeFileSync(book_file,JSON.stringify(obj))
    console.log('Book Information  has been Added into the file...')
  }
  catch(e)
  {
    console.log('Error Occured while adding book information')
  }
}

const readAllBook=()=>{
  try 
  {
    const readAlldata=fs.readFileSync(book_file)
    const finalread=JSON.parse(readAlldata)

    console.log('-'.repeat(25))
    console.log('All Books Record')
    console.log('-'.repeat(25)) //It will add 25 '-' after executing node command
    for(let i=0;i<finalread.length;i++) 
    {
      console.log('book_id:'+finalread[i].book_id)
      console.log('book_name:'+finalread[i].book_name)
      console.log('book_author:'+finalread[i].book_author)
      console.log('book_Price:'+finalread[i].book_Price)
      console.log('book_Publisher:'+finalread[i].book_Publisher)
      console.log('book_Type:'+finalread[i].book_Type)
      console.log('-'.repeat(25)) //It will add 25 '-' after every output
    }
  } 
  catch(e)
  {
    console.log('Cannot read Book')
  }
}


const readOneBook =(bnm) => {
  try 
  {
    let onebook=readBook()
    let bookFound=false

    console.log('-'.repeat(25))
    console.log('Book Record By Book Name')
    console.log('-'.repeat(25)) //It will add 25 '-' after executing node command
    for(let i=0;i<onebook.length;i++) 
    {
      if(onebook[i].book_name===bnm) 
      {

        console.log('book_id:'+onebook[i].book_id)
        console.log('book_name:'+onebook[i].book_name)
        console.log('book_author:'+onebook[i].book_author)
        console.log('book_Price:'+onebook[i].book_Price)
        console.log('book_Publisher:'+onebook[i].book_Publisher)
        console.log('book_Type:'+onebook[i].book_Type)
        console.log('-'.repeat(25)) //It will add 25 '-' after every output
        bookFound=true
        break
      }
    }

    
    
    if(!bookFound) 
    {
      console.log('Book not found in the Current file for the Book Name:'+book_name+'')
    }
  } 
  catch(e) 
  {
    console.log('Error occurred while reading the book of Specific bookname')
  }
}

const readByAuthor =(bau) => {
  try 
  {
    let bookauthor=readBook()
    let BookAuthor=false

    console.log('-'.repeat(30))
    console.log('Book Record By Author Name')
    console.log('-'.repeat(30)) //It will add 30 '-' after executing node command
    for(let i=0;i<bookauthor.length;i++) 
    {
      if(bookauthor[i].book_author===bau) 
      {
        console.log('book_id:'+bookauthor[i].book_id)
        console.log('book_name:'+bookauthor[i].book_name)
        console.log('book_author:'+bookauthor[i].book_author)
        console.log('book_Price:'+bookauthor[i].book_Price)
        console.log('book_Publisher:'+bookauthor[i].book_Publisher)
        console.log('book_Type:'+bookauthor[i].book_Type)
        console.log('-'.repeat(25)) //It will add 25 '-' after every output
        BookAuthor=true
      }
    }
    if(!BookAuthor) 
    {
      console.log('Book not found for Author Name:'+bookauthor+'')
    }
  } 
  catch(e) 
  {
    console.log('Error occurred while fetching the Book Records of Specific Author Name')
  }
}

const DeleteBook=(bnmm)=>{
  let book_name=bnmm
  try
  {
    let deletebook=readBook()
    let bookdelete=false
    for(let i=0;i<deletebook.length;i++)
    {
      if(deletebook[i].book_name===book_name)
      {
        deletebook.splice(i,1)
        bookdelete=true
        break
      }
    }
    if(bookdelete)
    {
      addBook(deletebook)
      console.log('Book Name:'+book_name+' Deleted from the file Successfully...')
    }
    else
    {
      console.log('Book Name with '+book_name+' Not found...')
    }
  }
  catch(e)
  {
    console.log('Error Occurs While Deleting the book....')
  }
}

const UpdateBook=(booknm,bookid,bookau,bookpr,bookpub,booktp)=>
{
  try
  {
    let updatebook=readBook()
    let BUpdatebook=false

    console.log('Book ID:',bookid)
    console.log('Book Name:',booknm)
    console.log('New Author:',bookau)
    console.log('New Price:',bookpr)
    console.log('New Publisher:',bookpub)
    console.log('New Type:',booktp)


    for(let i=0;i<updatebook.length;i++)
    {
      console.log(updatebook.length)
      if(updatebook[i].book_id===bookid && updatebook[i].book_name===booknm)
      {
        if(bookau !== undefined)
        {
          updatebook[i].book_author=bookau || updatebook[i].book_author
        }
          
        if(bookpr !== undefined)
        {
          updatebook[i].book_Price=bookpr || updatebook[i].book_Price
        }

        if(bookpub !==undefined)
        {
          updatebook[i].book_Publisher=bookpub || updatebook[i].book_Publisher
        }
        
        if(booktp !==undefined)
        {
          updatebook[i].book_Type=booktp || updatebook[i].book_Type
        }
        BUpdatebook=true
        console.log('Success..')
        break
      }
      

    }
    if(BUpdatebook)
    {
      addBook(updatebook)
      console.log('Book Updated in the File Successfully...')
    }
    else
    {
      console.log('Book ID and Book Name Not Found...')
    }
  }
  catch(e)
  {
    console.log('Error Occurs while Updating Book Records...')
  }
}


module.exports=
{
  newbook:newbook,
  readAllBook:readAllBook,
  readOneBook:readOneBook,
  readByAuthor:readByAuthor,
  DeleteBook:DeleteBook,
  UpdateBook:UpdateBook,
}
