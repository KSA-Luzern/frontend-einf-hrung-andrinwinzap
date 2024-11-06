let state = true;

function go() {
    text = document.getElementById("input").value;

    let color = "yellow";

    if (text.includes("angry")) {
        console.log("angry");
        color = "red";
    }

    document.getElementById("face").style.backgroundColor = color;
}