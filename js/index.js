
// ---------------------------< swipper >-----------------------------//
    //-----------< first swipper >-----------//
const slide_1 = document.querySelectorAll(".swipper-one .slide div");
const bollet_1 = document.querySelectorAll(".swipper-one .bollet span");
const right_1 = document.querySelector(".swipper-one .go-right");
const left_1 = document.querySelector(".swipper-one .go-left");
const nbr_1 = slide_1.length;
    //-----------< second swipper >-----------//
const slide_2 = document.querySelectorAll(".swipper-two .slide div");
const bollet_2 = document.querySelectorAll(".swipper-two .bollet span");
const right_2 = document.querySelector(".swipper-two .go-right");
const left_2 = document.querySelector(".swipper-two .go-left");
const nbr_2 = slide_2.length;


//========================================================================
let first_1 = 0;
let second_1 = 1;

right_1.onclick = () =>{
    first_1 = second_1;
    second_1 = (second_1+1)%(nbr_1);
    ClickChangeHandler(".swipper-one",slide_1,bollet_1,first_1,second_1);
}

left_1.onclick = () =>{
    second_1 = first_1;
    if(--first_1 < 0)
        first_1 = nbr_1-1;
    ClickChangeHandler(".swipper-one",slide_1,bollet_1,first_1,second_1);
}

bollet_1.forEach((element,index) =>{
    element.onclick = () =>{
        first_1 = index;
        if(first_1 === nbr_1-1)
            second_1 = 0;
        else
            second_1 = first_1 + 1;
        ClickChangeHandler(".swipper-one",slide_1,bollet_1,first_1,second_1);
    }
})

//========================================================================
let first_2 = 0;
let second_2 = 1;

right_2.onclick = () =>{
    first_2 = second_2;
    second_2 = (second_2+1)%(nbr_2);
    ClickChangeHandler(".swipper-two",slide_2,bollet_2,first_2,second_2);
}

left_2.onclick = () =>{
    second_2 = first_2;
    if(--first_2 < 0)
        first_2 = nbr_2-1;
    ClickChangeHandler(".swipper-two",slide_2,bollet_2,first_2,second_2);
}

bollet_2.forEach((element,index) =>{
    element.onclick = () =>{
        first_2 = index;
        if(first_2 === nbr_2-1)
            second_2 = 0;
        else
            second_2 = first_2 + 1;
        ClickChangeHandler(".swipper-two",slide_2,bollet_2,first_2,second_2);
    }
})


function ClickChangeHandler(sliderName,slide,bollet,first,second){
    slide.forEach((element)=>{
        element.classList.remove("active");
        element.classList.remove("active-secondary");
    });
    bollet.forEach((element)=>{
        element.classList.remove("active");
    });
    bollet[first].classList.add("active");
    slide[first].classList.add("active");
    slide[second].classList.add("active-secondary");
    if(first > second){
        document.querySelector(sliderName+" .slide").style.cssText = "flex-direction: row-reverse;";
    }
}



