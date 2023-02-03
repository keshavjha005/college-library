console.log("This is index.js");

//constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {


}

//add method to display prototype
Display.prototype.add = Function(book){
    console.log("Ading to UI ");
    tableBody = document.getElementById('tableBody');
    let uistring =         <tr>
                              <td>${book.name}</td>
                             <td>${book.author}</td>
                            <td>${book.type}</td>
                             </tr>;
                             tableBody.innerHTML += uistring;
}
//impliment the clear Form
Display.prototype.clear= Function(){
    let libraryForm = document.getElementById('library Form');
    libraryForm.reset();

}

//impliment the validate Function
Display.prototype.validate= Function(){
    let libraryForm = document.getElementById('library Form');
    libraryForm.reset();
}






//add submit listner to libraryForm    
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryForm() {
    console.log('you have submitted library Form');

    function libraryFormsubmit(e) {
        console.log('you have submitted library Form');
        let book = new book(name, author, type);

        let name = document.getElementById('bookname').value;
        let author = document.getElementById('author').value;
        let type = document.getElementById('cooking').value;


        let civil = document.getElementById('civil');
        let computer = document.getElementById('computer science');
        let mechanical = document.getElementById('mechanical');
        let electrical = document.getElementById('electrical ');
        let communication = document.getElementById('electronic communication');



        if (civil.checked) {
            type = civil.value;
        }
        else if (computer.checked) {
            type = computer.value;
        }

        else if (mechanical.checked) {
            type = mechanical.value;
        }

        else if (electrical.checked) {
            type = electrical.value;
        }

        else if (communication.checked) {
            type = communication.value; 
        }
    }

    let Book = new book(name, author, type);
    console.log(book)

let display =new display();
iF(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('sucess')
    display.show('error')
}
else{
    if else{

}
    x=10;
    y=12;
    iF(x=10);
    (x>10);
    (y<12);


    .book
    //#endregion
    #color:black;
    //#region 
    #background color:blur;
    #year:5;
    #height:10px;
    #width:15px;
    #length:23px;

    .constructor
    //#endregion
    #background color:15px;
    #height:15px;
    margin:10px;
    padding:23px;

    .#height:15;
    .//#region 
    #padding:18px;
    #margin:12px;
    #width:10px
    


#height:23;
#margin:12;
#padding:30
#width:22;
#height:23;



}


    e.preventFault();
}
