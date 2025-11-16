document.getElementById("form").addEventListener("submit", submit);
var verdict = {
    "Asexual": 0,
    "Gay": 0,
    "Bisexual": 0,
    "Pansexual": 0,
    "Straight": 0,
}

let thing = 0;
let string = ["Who are you the most attracted to?", "Who have you kissed?", "What porn do you watch?", "Done"]
function submit() {
    var audio = new Audio('ding.mp3');
    audio.play();
    if (thing >= 3) {
        var items = Object.keys(verdict).map(function(key) {
            return [key, verdict[key]];
          });
          
          // Sort the array based on the second element
          items.sort(function(first, second) {
            return second[1] - first[1];
          });
        document.body.innerHTML = `<p id="hell">${items[0][0]}</p>`;
        return;
    }
    console.log("submit");
    document.getElementById("hax").innerHTML = string[thing];
    thing++;
    if (document.getElementById('1').checked) {
        console.log('fak ju m8');
        verdict.Gay++;
    }
    else if (document.getElementById('2').checked) {
        console.log('fak ju m8');
        verdict.Pansexual++;
    }
    else if (document.getElementById('3').checked) {
        console.log('fak ju m8');
        verdict.Bisexual++;
    }
    else if (document.getElementById('4').checked) {
        console.log('fak ju m8');
        verdict.Asexual++;
    }
    else if (document.getElementById('5').checked) {
        console.log('fak ju m8');
        verdict.Straight++;
    }

}