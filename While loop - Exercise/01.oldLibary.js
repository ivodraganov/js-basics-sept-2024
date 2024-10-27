function oldLibary(input) {
    let searchedBook = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let booksChecked = 0;
    while(command !== "No More Books") {
        let bookTitle = command;
        if(bookTitle === searchedBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        }
        booksChecked++;
        command = input[index];
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
    

}