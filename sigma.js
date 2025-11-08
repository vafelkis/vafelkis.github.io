const quotes = [ "hi", "goodbye", "sigma"];
const srcs = [ "/katvodka logo alt.png", "/eurobeatcanadawhite.png", "/katlogowhite.png"];
const quote = quotes[Math.floor(Math.random() * srcs.length)];
const src = srcs[Math.floor(Math.random() * srcs.length)];
document.getElementById("quote").innerText = quote;
document.getElementById("logo").setAttribute("src", src);

