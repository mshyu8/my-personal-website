const board = document.getElementById("board");
const head1 = document.getElementById("header1");
const text1 = document.getElementById("text1");

board.addEventListener('click', function() {
    const head1Visibility = window.getComputedStyle(head1).visibility;
    console.log("clocked");
    if(head1Visibility == "hidden") {
        head1.style.visibility = "visible";
        text1.style.visibility = "hidden"; 
    } else {
        head1.style.visibility = "hidden";
        text1.style.visibility = "visible";
    }
});

const board2 = document.getElementById("board2");
const head2 = document.getElementById("header2");
const text2 = document.getElementById("text2");

board2.addEventListener('click', function() {
    const head2Visibility = window.getComputedStyle(head2).visibility;
    console.log("clocked");
    if(head2Visibility == "hidden") {
        head2.style.visibility = "visible";
        text2.style.visibility = "hidden"; 
    } else {
        head2.style.visibility = "hidden";
        text2.style.visibility = "visible";
    }
});