const quotes = [ "hi", "goodbye", "sigma", "have you seen the misc page, m8?", "if you are reading this, you are very sigma.", "\"WHAT THE FUCK DID YOU DO?\"", "\"it is only after we've lost everything that we are free to do anything.\"", "\"NIIIIIIIIIIII\""];
const srcs = [ "/Katvodka logo alt.png", "/eurobeatcanadawhite.png", "/katlogowhite.png"];
const quote = quotes[Math.floor(Math.random() * quotes.length)];
const src = srcs[Math.floor(Math.random() * srcs.length)];


function reset()
{

document.getElementById("logo").setAttribute("src", src);
document.getElementById("quote").innerText = quote;

}

document.getElementById("logo").setAttribute("src", src);
document.getElementById("quote").innerText = quote;