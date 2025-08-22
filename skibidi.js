let selected = "ng";
const katlogo = ["katlogo.png","katlogoalt1.png","katlogoalt2.png"];
function skibidi()
{
    if (selected === "ng")
    {
        selected = katlogo[Math.floor(Math.random() * katlogo.length)];
    }
        document.getElementById("katrewkatelogo").setAttribute("src", "../"*(path.split("/").length-1) + selected);
}
window.onreset = skibidi();