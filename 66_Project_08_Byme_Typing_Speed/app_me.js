console.log("Project 08 is by me");
// FOR SPEED TYPING

//WORD AND CHARACTER COUNT FUNCTION📌📌📌
function countString(string) {
    let char_digit_other_Count_withOut_space = 0;
    let charObj = {};

    let spaceCount = 0;

    let word = '';
    let wordObj = {};

    //STORE WORD IN WORD OBJECT
    Array.from(string).forEach((e) => {

        if (e != " " && e != "\n") {
            char_digit_other_Count_withOut_space += 1;
            word += e;
            charObj[char_digit_other_Count_withOut_space] = e;

        }
        else {
            spaceCount += 1;
            wordObj[spaceCount] = word;
            word = '';
        }
        wordObj['last'] = word;
    })

    // console.log("word Object is: ", wordObj);
    // console.log("word is: ", word);
    // console.log(spaceCount);



    //WORD COUNT
    let wordCount = 0;
    for (let key in wordObj) {
        // console.log(wordObj);
        if (wordObj[key] != '') {
            wordCount += 1;
        }
    }
    // console.log("All word count: ", wordCount);
    // console.log("All character, digit, and other Count without space: ", char_digit_other_Count_withOut_space);

    let countOBJ = {
        "All word count: ": wordCount,
        "All character, digit, and other Count without space: ": char_digit_other_Count_withOut_space
    }
    return countOBJ;

}














//GRAB VALUE OF TEXT AREA
let startBtn = document.getElementById("startBtn");




startBtn.addEventListener("click", () => {
    let houseOfTextArea = document.getElementById("houseOfTextArea");
    houseOfTextArea.innerHTML = ` <label for="exampleFormControlTextarea1" class="form-label"><p id="textPara">Started...</p></label>
    <textarea class="form-control" id="textArea" rows="9"></textarea>`


    //SHOW HOW TIME GOING ON 
    forStart = document.getElementById("forStart");
    let div2 = document.createElement("div");


    let second = 0;
    let minute = 0;
    setInterval(() => {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }

        second = (second < 10 ? "0" : '') + second;

        if (minute < 5) {
            div2.innerHTML = `<h3 id="startHeading" > 0${minute}:${second}</h3>`;
        }
        else {
            div2.innerHTML = `<h3 id="startHeading" > 05:00</h3>`
        }

    }, 1000);

    forStart.append(div2);




    setTimeout(() => {
        let textArea = document.getElementById("textArea");
        let str = textArea.value;
        let countWordAndChar = countString(str);
        countWord = countWordAndChar["All word count: "];
        // console.log(countWord);


        houseOfTextArea.innerHTML = `<label for="exampleFormControlTextarea1" class="form-label"><p id="textPara">First Start Then Write</p></label>
        <div id="falseTextArea" class="form-control"> Write here...</div>`


        //SHOW HOW MANY WORD WRITEN BY USER
        let forStart = document.getElementById("forStart");
        let div = document.createElement("div");
        div.innerHTML = `<div> <h3 id="startHeading2" class="text-secondary my-3">You Write "${countWord}" Word Per "5" Minute</h3></div> `;
        forStart.append(div);

        // LOCAL STORAGE
        let counts = localStorage.getItem("count");
        let allCountsArr;
        if (counts === null) {
            allCountsArr = [];
        }
        else {
            allCountsArr = (JSON.parse(counts));
        }
        allCountsArr.push(countWord);
        localStorage.setItem("count", JSON.stringify(allCountsArr));
        console.log(allCountsArr);
    }, 300000);


})


 // COUNTINT BIG
let counts = localStorage.getItem("count");
        let allCountsArr;
        if (counts === null) {
            allCountsArr = [];
        }
        else {
            allCountsArr = (JSON.parse(counts));
        }


       
        let bigCount =0;
        allCountsArr.forEach((e)=>{
            if(e>=bigCount){
                bigCount= e;
            }
        })
        console.log(bigCount);

let hightScore = document.getElementById("hightScore");











// // COUNTING BIG VALUE FROM AN ARRAY📌📌📌
// let aaa= [0,0]; 
// let bigbig =0;
// aaa.forEach((e, index)=>{
//     bigCount= e;
    
//     console.log(bigCount);
//     if(bigCount>=bigbig){
//         bigbig= bigCount;
//     }

// })
// console.log("The big count is:", bigbig);
