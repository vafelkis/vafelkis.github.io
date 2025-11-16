var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
document.getElementById("generate").addEventListener("click", function (e) {
    document.body.innerHTML = "";
    var p = document.createElement("span");
    p.id = "rusia";
    var bitch = p.innerText;
    for (var i = 0; i < parseInt(document.getElementById("ee").value, 10); i++) {
        for (var j = 0; j < 3; j++) {
            var r = Math.floor(Math.random() * chars.length);
            p.innerText = "".concat(bitch).concat(chars[r]);
        }
        bitch = p.innerText;
    }
});
