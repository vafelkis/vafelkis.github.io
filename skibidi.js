let selected = "ng";
const katlogo = ["katlogo.png","katlogoalt1.png","katlogoalt2.png"];
function skibidi()
{
    if (selected === "ng")
    {
        selected = katlogo[Math.floor(Math.random() * katlogo.length)];
    }
        document.getElementById("katrewkatelogo").setAttribute("src", "/"*(window.location.pathname.split("/").length) + selected);
}
window.onreset = skibidi();