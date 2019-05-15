
var currAnimation;
var delayTime =250;
var myframe;
var index1=0;


document.getElementById("stop").disabled = true;

function startAnimation() {
    myframe = currAnimation.split("=====");
    changeButtonStatu1();
    if (delayTime!==null) {
    setInterval(display, delayTime, index1);}
    else {
        myStopFunction();
    }
}
function display(index1) {
    // alert(delayTime);
    if (this.index1 >=myframe.length){
        this.index1=0;
    }
    document.getElementById("ta").innerHTML =myframe[this.index1];
    this.index1+=1;
}
function stopAnimation (){
    delayTime= null;
    // alert("new alte time" + delayTime);
    changeButtonStatu2();
    document.getElementById("ta").innerHTML =currAnimation;
    changeButtonStatus(stop);
    alert(" the current  annimation" + currAnimation);
}

function myStopFunction() {
    clearInterval(delayTime);
}
function myFunctionForAnimation() {
    var whichOne = document.getElementById("animationType").value;
    document.getElementById("ta").innerHTML =ANIMATIONS[whichOne];
    currAnimation=ANIMATIONS[whichOne];
}
function changeFontSize(){
    var fontSize =  parseFloat(document.getElementById("fontSize").value);
    document.getElementById("ta").style.fontSize= fontSize + "pt";
}
function changeTurboSpeed() {
    clearInterval(delayTime);

    if (document.getElementById("speed").checked){
        delayTime= 50;
        setInterval(display, delayTime, 0);
     }
     else {
        delayTime=250;
        setInterval(display,delayTime, 0);
     }
}

function changeButtonStatu1() {
        document.getElementById("animationType").disabled = true;
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
    }
function changeButtonStatu2() {
        document.getElementById("animationType").disabled = false;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
}
