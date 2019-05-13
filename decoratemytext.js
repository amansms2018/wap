
function BiggerDecorations()
{alert("Hello, world!");
}

function changeTextArea(element) {
    if (element.checked) {
        document.getElementById("ta").disabled = true;
        document.getElementById("ta").style.color = "green";
        document.getElementById("ta").style.textDecoration = "underline";
    } else {
        document.getElementById("ta").disabled = false;
        document.getElementById("ta").style.color = "black";
        document.getElementById("ta").style.textDecoration = "none";
    }
}