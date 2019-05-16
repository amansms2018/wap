
var currAnimation;
var delayTime = null;
var myframe= null;
var index1=0;
var delayTime=250;

document.getElementById("stop").disabled = true;

function startAnimation() {
    myframe = currAnimation.split("=====");
    changeButtonStatu1();
    if (this.delayTime!==null) {
    setInterval(display, this.delayTime, index1);}

}
function display(index1) {
    if (this.index1 >=myframe.length){
        this.index1=0;
    }
    document.getElementById("ta").innerHTML =myframe[this.index1];
    this.index1+=1;
}
function stopAnimation (){
    myframe= null;
    this.delayTime= null;
    myStopFunction();
    alert("new alte time" + delayTime);
    changeButtonStatu2();
    document.getElementById("ta").innerHTML =currAnimation;
    changeButtonStatus(stop);
}

function myStopFunction() {
    if (this.delayTime!=null) return this.delayTime;
    else {
       return clearInterval(this.delayTime);
    }

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
