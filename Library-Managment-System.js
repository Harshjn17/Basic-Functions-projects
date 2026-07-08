let library = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    available: true
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    available: false
  }
];

// Add Book
function addBook(library, id, title, author){
  library.push({
    id,
    title,
    author,
    available: true
  });
  return library;
}

// Remove Book 
function removeBook(library, id){
  for(let i = 0; i < library.length; i++){
    if(library[i].id === id){
      library.splice(i,1);
      break;
    }
  }
  return library;
}

// Search Book
function searchBook(library, title) {
  for(let i = 0; i < library.length; i++){
    if(library[i].title.toLowerCase() === title.toLowerCase()){
      return library[i];
    }
  }
  return "Book not found";
}

// Borrow Book
function borrowBook(library, id){
  for(let i = 0; i < library.length; i++){
    if(library[i].id === id){
      if(library[i].available === true){
        library[i].available = false;
        return "Book Borrowed";
      } else if(library[i].available === false){
        return "Book Not Available";
      }
    }
  }
  return "Book Not Found";
}

// Return Book
function returnBook(library, id){
  for(let i =0; i < library.length; i++){
    if(library[i].id === id){
      library[i].available = true;
      return 'Book Returned';
    }
  }
  return "Book Not Found";
}

// List Available 
function listAvailableBooks(library){
  let newLibrary = [];
  for(let i = 0; i < library.length; i++){
    if(library[i].available === true){
      newLibrary.push(library[i]);
    }
  }
  return newLibrary;
}

// Total Books
function totalBooks(library){
  return library.length;
}

// Available Books Count
function availableBooksCount(library) {
  let count = 0;
  for(let i = 0; i < library.length; i++){
    if(library[i].available === true){
      count++;
    }
  }
  return count;
}

// Print Library Report
function printLibraryReport(library){
  let list = listAvailableBooks(library);
  console.log("------ Library Report ------");
  console.log(`Total Books: ${totalBooks(library)}`);
  console.log(`Available Books: ${availableBooksCount(library)}`);
  console.log(' ');
  console.log("Available:");
  for(let i = 0; i < list.length; i++){
    console.log(`- ${list[i].title}`);
  }
}

printLibraryReport(library);

// Output

// ------ Library Report ------
// Total Books: 3
// Available Books: 2
 
// Available:
// - Atomic Habits
// - Clean Code

