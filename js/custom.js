//maintains same image when the first nav bar button is clicked 

//global variables

var counter = 0;

var leftheart = document.getElementById("leftheartimage");
var rightheart = document.getElementById("rightheartimage");

// var heartListLeft = [
//     "./images/left/heartleft1.png",
//     "./images/left/heartleft2.png",
//     "./images/left/heartleft3.png",
//     "./images/left/heartleft4.png",
//     "./images/left/heartleft5.png",
//     "./images/left/heartleft6.png",
//     "./images/left/heartleft7.png",
//     "./images/left/heartleft8.png",
//     "./images/left/heartleft9.png",
//     "./images/left/heartleft10.png",
//     "./images/left/heartleft11.png",
//     "./images/left/heartleft12.png",
//     "./images/left/heartleft13.png"
// ];

// var heartListRight = [
//     "./images/right/heartright1.png",
//     "./images/right/heartright2.png",
//     "./images/right/heartright3.png",
//     "./images/right/heartright4.png",
//     "./images/right/heartright5.png",
//     "./images/right/heartright6.png",
//     "./images/right/heartright7.png",
//     "./images/right/heartright8.png",
//     "./images/right/heartright9.png",
//     "./images/right/heartright10.png",
//     "./images/right/heartright11.png",
//     "./images/right/heartright12.png",
//     "./images/right/heartright13.png"
// ];

var button1 = document.getElementById("bb-nav-first");
var button2 = document.getElementById("bb-nav-prev");
var button3 = document.getElementById("bb-nav-next");
var button4 = document.getElementById("bb-nav-last");

//navigation events

//first button

button1.addEventListener("click", function() {
    counter = 0;
    leftheart.src = "./images/left/heartleft3.png";
    rightheart.src = "./images/right/heartright3.png";
    console.log(counter);
});

//button previous

button2.addEventListener("click", function() {
    // counter = counter - 1;
    if (counter > 0) {
        counter = counter - 1;
    }
    if (0 <= counter && counter <= 0) {
        leftheart.src = "./images/left/heartleft3.png";
        rightheart.src = "./images/right/heartright3.png";
    }
    if (1 <= counter && counter <= 4) {
        leftheart.src = "./images/left/heartleft4.png";
        rightheart.src = "./images/right/heartright4.png";
    }
    if (5 <= counter && counter <= 5) {
        leftheart.src = "./images/left/heartleft3.png";
        rightheart.src = "./images/right/heartright3.png";
    }
    if (6 <= counter && counter <= 10) {
        leftheart.src = "./images/left/heartleft5.png";
        rightheart.src = "./images/right/heartright5.png";
    }
    if (11 <= counter && counter <= 16) {
        leftheart.src = "./images/left/heartleft9.png";
        rightheart.src = "./images/right/heartright9.png";
    }
    if (17 <= counter && counter <= 21) {
        leftheart.src = "./images/left/heartleft10.png";
        rightheart.src = "./images/right/heartright10.png";
    }
    if (22 <= counter && counter <= 22) {
        leftheart.src = "./images/left/heartleft10.png";
        rightheart.src = "./images/right/heartright10.png";
    }
    if (23 <= counter && counter <= 24) {
        leftheart.src = "./images/left/heartleft2.png";
        rightheart.src = "./images/right/heartright2.png";
    }
    if (25 <= counter && counter <= 25) {
        leftheart.src = "./images/left/heartleft6.png";
        rightheart.src = "./images/right/heartright6.png";
    }
    if (26 <= counter && counter <= 30) {
        leftheart.src = "./images/left/heartleft13.png";
        rightheart.src = "./images/right/heartright13.png";
    }
    if (31 <= counter && counter <= 31) {
        leftheart.src = "./images/left/heartleft11.png";
        rightheart.src = "./images/right/heartright11.png";
    }
    if (32 <= counter && counter <= 34) {
        leftheart.src = "./images/left/heartleft7.png";
        rightheart.src = "./images/right/heartright7.png";
    }
    if (35 <= counter && counter <= 35) {
        leftheart.src = "./images/left/heartleft11.png";
        rightheart.src = "./images/right/heartright11.png";
    }

    if (36 <= counter && counter <= 44) {
        leftheart.src = "./images/left/heartleft2.png";
        rightheart.src = "./images/right/heartright2.png";
    }
    if (45 <= counter && counter <= 49) {
        leftheart.src = "./images/left/heartleft1.png";
        rightheart.src = "./images/right/heartright1.png";
    } else {
        counter = counter;
    }
    console.log(counter);
});

//button next

button3.addEventListener('click', function() {
    // counter = counter + 1;
    if (counter + 1 <= 50) {
        counter = counter + 1;
    }
    if (1 <= counter && counter <= 4) {
        leftheart.src = "./images/left/heartleft4.png";
        rightheart.src = "./images/right/heartright4.png";
    }
    if (5 <= counter && counter <= 5) {
        leftheart.src = "./images/left/heartleft3.png";
        rightheart.src = "./images/right/heartright3.png";
    }
    if (6 <= counter && counter <= 10) {
        leftheart.src = "./images/left/heartleft5.png";
        rightheart.src = "./images/right/heartright5.png";
    }
    if (11 <= counter && counter <= 16) {
        leftheart.src = "./images/left/heartleft9.png";
        rightheart.src = "./images/right/heartright9.png";
    }
    if (17 <= counter && counter <= 21) {
        leftheart.src = "./images/left/heartleft10.png";
        rightheart.src = "./images/right/heartright10.png";
    }
    if (22 <= counter && counter <= 22) {
        leftheart.src = "./images/left/heartleft12.png";
        rightheart.src = "./images/right/heartright12.png";
    }
    if (23 <= counter && counter <= 24) {
        leftheart.src = "./images/left/heartleft2.png";
        rightheart.src = "./images/right/heartright2.png";
    }
    if (25 <= counter && counter <= 25) {
        leftheart.src = "./images/left/heartleft6.png";
        rightheart.src = "./images/right/heartright6.png";
    }
    if (26 <= counter && counter <= 30) {
        leftheart.src = "./images/left/heartleft13.png";
        rightheart.src = "./images/right/heartright13.png";
    }
    if (31 <= counter && counter <= 31) {
        leftheart.src = "./images/left/heartleft11.png";
        rightheart.src = "./images/right/heartright11.png";
    }
    if (32 <= counter && counter <= 34) {
        leftheart.src = "./images/left/heartleft7.png";
        rightheart.src = "./images/right/heartright7.png";
    }
    if (35 <= counter && counter <= 35) {
        leftheart.src = "./images/left/heartleft11.png";
        rightheart.src = "./images/right/heartright11.png";
    }
    if (36 <= counter && counter <= 44) {
        leftheart.src = "./images/left/heartleft2.png";
        rightheart.src = "./images/right/heartright2.png";
    }
    if (45 <= counter && counter <= 49) {
        leftheart.src = "./images/left/heartleft1.png";
        rightheart.src = "./images/right/heartright1.png";
    } else {
        counter = counter;
    }
    console.log(counter);
});

//button last

button4.addEventListener("click", function() {
    counter = 49;
    leftheart.src = "./images/left/heartleft3.png";
    rightheart.src = "./images/right/heartright3.png";
    console.log(counter)
});


//keyboard events

//code was found here: http://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery

// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37:

//     if (counter - 1 > 0) {
//         counter = counter - 1;
//     }
//     if (0 <= counter) {
//         leftheart.src = "./images/left/heartleft3.png";
//         rightheart.src = "./images/right/heartright3.png";
//     }
//     if (1 <= counter && counter <= 4) {
//         leftheart.src = "./images/left/heartleft4.png";
//         rightheart.src = "./images/right/heartright4.png";
//     }


//     else {
//         counter = counter;
//     }
//     console.log(counter);
//         break;
//         case 39:
//     if (counter + 1 < 50) {
//         counter = counter + 1;
//     }              
//     if (0 <= counter) {
//         leftheart.src = "./images/left/heartleft3.png";
//         rightheart.src = "./images/right/heartright3.png";
//     }
//     else {
//         counter = counter;
//     }
//     console.log(counter);
//             break;
//     }
// };







// /////////////////////////////////////////////////////////////////////////////////////////







// var whichHeart = document.getElementsByClassName("bb-item");

// for (i = 0; i < whichHeart.length; i++) {
//     if (whichHeart[x].style.display == "block") {

//         var thisHeart = whichHeart[i].getElementsByTagName("img")[0];

//         // var heartNumber = thisHeart.split("image")[1];

//         console.log(thisHeart);

//     }
// }










// console.log (whichHeart);


// var randomnumber = Math.floor(Math.random() * myimageList.length);
// var randomimage = myimageList[randomnumber];

// leftheart.src=randomimage;
// rightheart.src=randomimage;


//split string and then use modulo to
