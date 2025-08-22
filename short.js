window.onload = function () { 
console.log("sigma");
    document.getElementById("splash").innerText = stext;
const katlogo = ["katlogo.png","katlogoalt1.png","katlogoalt2.png"];
    document.getElementById("katrewkatelogo").getAttribute("src") = "../" + katlogo[Math.floor(Math.random() * katlogo.length)];
}