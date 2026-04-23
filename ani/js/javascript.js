let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

let fadebox = document.getElementById("fadebox");

let box1First = document.querySelector(".box1 div:first-child");
let box1Second = document.querySelector(".box1 div:nth-child(2)");

let box2First = document.querySelector(".box2 div:first-child");
let box2Second = document.querySelector(".box2 div:nth-child(2)");
let box2Ani = document.querySelector(".box2 .ani");

let box3First = document.querySelector(".box3 div:first-child");

// btn1을 클릭하면 fadebox 부드럽게 사라지기
btn1.addEventListener("click", function() {
    fadebox.style.transition = "all 1s";
    fadebox.style.opacity = 0;
    fadebox.style.visibility = "hidden";
});

// btn2를 클릭하면 fadebox 부드럽게 보이기
btn2.addEventListener("click", function() {
    fadebox.style.transition = "all 1s";
    fadebox.style.opacity = 1;
    fadebox.style.visibility = "visible";
});

// btn3 클릭하면 .box1의 두 번째 박스 보이기/숨기기
btn3.addEventListener("click", function() {
    box1Second.style.transition = "all 0.5s";

    if (box1Second.style.opacity === "0" || box1Second.style.visibility === "hidden") {
        box1Second.style.opacity = 1;
        box1Second.style.visibility = "visible";
    } else {
        box1Second.style.opacity = 0;
        box1Second.style.visibility = "hidden";
    }
});

// btn4를 클릭하면 .box2의 첫째박스 높이 0
btn4.addEventListener("click", function() {
    box2First.style.transition = "all 0.5s";
    box2First.style.height = "0px";
    box2First.style.overflow = "hidden";
});

// btn5를 클릭하면 .box2의 첫째박스 높이 원래대로
btn5.addEventListener("click", function() {
    box2First.style.transition = "all 0.5s";
    box2First.style.height = "200px";
});

// btn6을 클릭하면 .box2의 두번째박스 높이 0 / 원래대로 토글
btn6.addEventListener("click", function() {
    box2Second.style.transition = "all 0.5s";
    box2Second.style.overflow = "hidden";

    if (box2Second.style.height === "0px") {
        box2Second.style.height = "200px";
    } else {
        box2Second.style.height = "0px";
    }
});

// btn7을 클릭하면 .box2의 ani박스 오른쪽으로 이동
btn7.addEventListener("click", function() {
    box2Ani.style.position = "relative";
    box2Ani.style.transition = "all 0.5s";
    box2Ani.style.left = "100px";
});

// btn8을 클릭하면 .box2의 ani박스 원래대로 이동
btn8.addEventListener("click", function() {
    box2Ani.style.position = "relative";
    box2Ani.style.transition = "all 0.5s";
    box2Ani.style.left = "0px";
});

// btn9를 클릭하면 .box3의 첫째박스에 class(bg) 추가
btn9.addEventListener("click", function() {
    box3First.classList.add("bg");
});

// btn10를 클릭하면 .box3의 첫째박스에 class(bg) 삭제
btn10.addEventListener("click", function() {
    box3First.classList.remove("bg");
});