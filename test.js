"use strict";

let star1 = document.getElementById("star1"),
    star2 = document.getElementById("star2"),
    star3 = document.getElementById("star3"),
    star4 = document.getElementById("star4"),
    star5 = document.getElementById("star5"),
    singlereting = document.getElementById("singlereting"),
    span2 = document.getElementById("span2"),
    calculateAva = 0,
    avarageSection = document.getElementById("avarageSection"),
    allraite = [],
    totalPearsonRaite = 0,
    chekIfUSerRati = true,
    totaleViews = document.getElementById("totaleViews"),
    localArray = [],
    checkToAddLAstRaite = true,
    arrayResult = [],
    avarage = document.getElementById("avarage"),
    TotalArray=0,
    checkIFUserRite = true,
    checkIfNew=true;
if (localStorage.getItem("countOfPersonRating")) {
    totalPearsonRaite = parseInt(localStorage.getItem("countOfPersonRating"));
}
if (localStorage.getItem("myraite")) {
    localArray = JSON.parse(localStorage.getItem("myraite"));
console.log(localArray);
    // localArray.map((i) => {
    //     arrayResult.push(parseInt(i));
    //     console.log(parseInt(i))
    // });
    // TotalArray = arrayResult.reduce((a, b) => {
    //     return a + b;
    //     })    
    //     avarage.innerHTML = TotalArray / totalPearsonRaite;
    //     totaleViews.innerHTML = totalPearsonRaite
 
    calulate();
    checkIfNew=false;
}
else{
    avarageSection.style.display="none"
} 
function chaneColor(one, two, three, four, five) {
    star1.style.color = one;
    star2.style.color = two;
    star3.style.color = three;
    star4.style.color = four;
    star5.style.color = five;
}

star1.addEventListener("mouseover", function () {
    chaneColor("orange", "", "", "", "");
});
star2.addEventListener("mouseover", function () {
    chaneColor("orange", "orange", "", "", "");
});

star3.addEventListener("mouseover", function () {
    chaneColor("orange", "orange", "orange", "", "");
});

star4.addEventListener("mouseover", function () {
    chaneColor("orange", "orange", "orange", "orange", "");
});
star5.addEventListener("mouseover", function () {
    chaneColor("orange", "orange", "orange", "orange", "orange");
});

function recoloorForbask() {
    chaneColor("", "", "", "", "");
}

star5.addEventListener("mouseout", recoloorForbask);
star4.addEventListener("mouseout", recoloorForbask);
star3.addEventListener("mouseout", recoloorForbask);
star2.addEventListener("mouseout", recoloorForbask);
star1.addEventListener("mouseout", recoloorForbask);

star5.addEventListener("click", function () {
    star5.removeEventListener("mouseout", recoloorForbask);
    chaneColor("orange", "orange", "orange", "orange", "orange");
    singlereting.innerHTML = 5;
    allraite.push(singlereting.textContent);
    addLastRaiteToLoacalStorage();
    span2.style.visibility = "visible";
    checkForOneRiet();
if(checkIfNew){
    avarage.innerHTML = singlereting.textContent/ totalPearsonRaite;
    totaleViews.innerHTML = totalPearsonRaite;
    
}
if (chekIfUSerRati) {
        chekIfUSerRati = false;
    }
    if (totalPearsonRaite > 0) {
        avarageSection.style.display = "block";
    }

});

star4.addEventListener("click", function () {
    star4.removeEventListener("mouseout", recoloorForbask);
    chaneColor("orange", "orange", "orange", "orange", "");
    singlereting.textContent = 4;
    allraite.push(singlereting.textContent);
    addLastRaiteToLoacalStorage();
    span2.style.visibility = "visible";
    checkForOneRiet();
    if(checkIfNew){
        avarage.innerHTML = singlereting.textContent/ totalPearsonRaite;
        totaleViews.innerHTML = totalPearsonRaite;
        
    }
    if (chekIfUSerRati) {
        chekIfUSerRati = false;
    }
    if (totalPearsonRaite > 0) {
        avarageSection.style.display = "block";
    }

});

star3.addEventListener("click", function () {
    star3.removeEventListener("mouseout", recoloorForbask);
    chaneColor("orange", "orange", "orange", "", "");
    singlereting.innerHTML = 3;
    allraite.push(singlereting.textContent);
    addLastRaiteToLoacalStorage();

    span2.style.visibility = "visible";
    checkForOneRiet();

    if (chekIfUSerRati) {
        chekIfUSerRati = false;
    }

    if (totalPearsonRaite > 0) {
        avarageSection.style.display = "block";
    }
});
star2.addEventListener("click", function () {
    star2.removeEventListener("mouseout", recoloorForbask);
    chaneColor("orange", "orange", "", "", "");
    singlereting.innerHTML = 2;
    allraite.push(singlereting.textContent);
    addLastRaiteToLoacalStorage();
    span2.style.visibility = "visible";
    checkForOneRiet();
    if(checkIfNew){
        avarage.innerHTML = singlereting.textContent/ totalPearsonRaite;
        totaleViews.innerHTML = totalPearsonRaite;
        
    }
    if (chekIfUSerRati) {
        chekIfUSerRati = false;
    }

    if (totalPearsonRaite > 0) {
        avarageSection.style.display = "block";
    }

});
star1.addEventListener("click", function () {
    star1.removeEventListener("mouseout", recoloorForbask);
    chaneColor("orange", "", "", "", "");
    singlereting.innerHTML = 1;
    allraite.push(singlereting.textContent);
    addLastRaiteToLoacalStorage();
    checkForOneRiet();

    span2.style.visibility = "visible";
    if(checkIfNew){
        avarage.innerHTML = singlereting.textContent/ totalPearsonRaite;
        totaleViews.innerHTML = totalPearsonRaite;
        
    }
    if (chekIfUSerRati) {
        chekIfUSerRati = false;
    }
    if (totalPearsonRaite > 0) {
        avarageSection.style.display = "block";
    }


});

function addLastRaiteToLoacalStorage() {
    if (checkToAddLAstRaite) {
        localArray.push(allraite[allraite.length - 1]);
        localStorage.setItem("myraite", JSON.stringify(localArray));
        checkToAddLAstRaite = false;
    } else if (!checkToAddLAstRaite) {
        localArray.pop();
        localArray.push(allraite[allraite.length - 1]);
        localStorage.setItem("myraite", JSON.stringify(localArray));
        checkToAddLAstRaite = false;
    }
}

function checkForOneRiet() {
    if (checkIFUserRite) {
        totalPearsonRaite = Number(totalPearsonRaite + 1);
        localStorage.setItem("countOfPersonRating", totalPearsonRaite);
        checkIFUserRite = false;
    }
}

function calulate() {
    localArray.map((i) => {
        arrayResult.push(parseInt(i));
        console.log(parseInt(i))
    });
    TotalArray = arrayResult.reduce((a, b) => {
        return a + b;
        })    
        avarage.innerHTML = (TotalArray / totalPearsonRaite).toFixed(1);
        totaleViews.innerHTML = totalPearsonRaite
}

 

    





////////////// calculate locale storage Number//////////////
