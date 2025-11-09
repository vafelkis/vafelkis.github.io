let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");

document.body.insertAdjacentHTML("afterbegin", `
    <div id="loading" style="position:fixed; scroll:none; display:flex; height: 100%; width: 100%; left: 0; top:0; background: linear-gradient(45deg, #010b29c2 0%, #010b2993 100%); z-index: 999999; text-align: center;">
    <div style="margin: auto auto; font-size:150%;" ><img src="../Katvodka logo alt.png" style="width: 20%; object-fit: contain; filter: drop-shadow(3px 3px 0 black);" id="logo"><br>loading...<br>
    <a style="all:unset; font-size: 80%;">do not panic if it looks stuck / site looks broken.<br>the website will look incomplete, while loading.<div style="opacity:0.5; font-size:16px; width: 75%; margin: 0 auto;">in the case of it freezing, and you see that nothing is loading, please refresh the page. if it still does not work, well... then youre cooked.😭 nah but fr, pls contact katrewkate@gmail.com, or if you can access the poptart page (https:/vafelkis.github.io/poptart) then contact from there please! this pleasant [or horibbel.. :(] experience, has been brought to you by katrewkate/katdustries incorioaprtped induastries in some offshore country that no one knows about ! 
    </a><div id="quote">some fancy ahh quote here 🤓</div></div>`);

reset();
//document.body.insertAdjacentHTML("afterbegin", "<style>#topmessage {  position: fixed !important;  top: 0 !important;  left: 0 !important;  width: 100% !important;  background: lightblue !important;  color: white !important;  text-align: center !important;  padding: 0px !important;  z-index: 999999 !important;  font-size: 20px !important;}</style><div class='scrolldiv' id='topmessage'><div class='scrolltext' style='font-size: 25px;' id='topbannerad' >katrewdustries is celebrating boat's first anniversary! pls see boat / news pages for more information. 🎂🍰🍰🎂🍥🎉🎉🎉 BIRTHDAY UPDATE CAME OUT ALREADY, GO CHECK IT OUT. REWARDS LIMITED TO A WEEK! 🎂🍰🍰🎂🍥🎉🎉🎉</div></div>");

const fmt = Intl.DateTimeFormat({ timeZone: 'Europe/Vilnius' });
function calculateTimeSinceEvent(eventDate, endDate = null) {
    let now = new Date();
    let event = new Date(eventDate);
    if (endDate != null) {
        now = new Date(endDate);
    }
    // Check if the event date is valid
    if (isNaN(event.getTime())) {
        console.error("Invalid event date");
        return;
    }
    // Calculate the differences
    let years = now.getFullYear() - event.getFullYear();
    let months = now.getMonth() - event.getMonth();
    let days = now.getDate() - event.getDate();

    // Adjust if needed (for months and days)
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of the previous month
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

function sigma(href) {
    const va = document.getElementById("swoosh")

    va.currentTime = 0;
    va.play();
    va.onended = function () {
        window.location.assign("https://vafelkis.github.io" + href);
    };

}
// Function to display time since event
function displayTimeSinceEvent(eventDate, elementId = null, endEventDate = null, language = null) {
    const time = calculateTimeSinceEvent(eventDate, endEventDate);

    // If the event date is invalid, exit early
    if (!time) return;
    const { years, months, days } = time;
    if (language == null) {
        language = "en"
    }
    let result = "";
    console.log("a");
    if (language == "en") {
        result = `${years} years, ${months} months and ${days} days ago`;
        console.log("b");
    }
    else if (language == "lt") {

        result = `prieš ${years} metų, ${months} mėnesių ir ${days} dienų`;
        console.log("c");
    }
    else if (language == "ru") {

        result = `${years} года, ${months} месяца и ${days} дней назад`;
        console.log("d");
    }



    if (elementId == null) return result;
    document.getElementById(elementId).innerText = result;
    console.log("e");
}

const bish = ["whoever reads is 'coustic", "check out Pancair Development Faciltes!", "dont forget to checkout vucic", "have you went to misc?", "good things start with b, boat, blyat.. bodka, bilnius!", "Bilnius", "eurobeat in the 26", "aproved by gogel", "bbbbbb", "welcome to the real world.", "do not support andrwe tate", "ba bla bla bla", "YAPPPPPPPPPP", "welcome from 1984", "if you read, you gey.", "check out new shi bro.", "live, laugh, love vlc", "sigma reader", "wtf bro", "HAHAHAHA"]
const stext = bish[Math.floor(Math.random() * bish.length)];

window.onload = function () { 
    
    for (element of document.getElementsByClassName("dateagodays")) {
        console.log(element.id);
        el = document.getElementById(`${element.id}-agoel`)
        const time = calculateTimeSinceEvent(element.innerText, new Date());

        if (!time) return;
        const { years, months, days } = time;
        let result = "";
        console.log("a");
        result = `(${years} yrs, ${months} mnths, ${days} d ago)`;
        console.log("b");

        el.innerText = result;
        console.log("e");
    }
    const box = document.getElementById('loading');
    box.classList.add('sigmaxxx');
    console.log("started")
    //if (page === "index.html") {
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago');
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago');
    displayTimeSinceEvent(new Date("2025-01-15"), 'websitecreationago');
    displayTimeSinceEvent(new Date("2007-09-26"), 'katdob');



    setInterval(startclock, 500);
    let maythernggods = new Date();
    let noetter = maythernggods.getHours();
    console.log(noetter);
    if (noetter > 19 || noetter < 5) {
        console.log("oui baguette bonjour")
        document.getElementById("altbodyhtml").style.backgroundImage = "url('nightwatchtower.gif')";
        document.getElementById("katrewkatelogo").setAttribute("src", "katlogo.png");
        document.getElementById("altbodyhtml").style.setProperty('background-image', 'url("nightwatchtower.gif")', 'important');
        document.querySelectorAll('.orangez').forEach((elem) => {
            console.log(elem.innerText);
            elem.classList.remove("orangez");
            elem.classList.add("lightblue");

        });
    }
    //for (elementx of document.getElementsByClassName("datex")) {
    //  console.log(elementx);
    //  elementx.innerText = displayTimeSinceEvent(elementx.innerText);
    //}
    //}
    console.log("sigma");
    document.getElementById("splash").innerText = stext;
    date1 = document.getElementById("date1");
    date2 = document.getElementById("date2");


}
if (!window.location.href.includes("vafelkis.github.io/newz")) {
document.body.insertAdjacentHTML("afterbegin", '<div id="scrollthing" style="position: fixed; top: 0;right: 0;width: 1vw;height: 100vh;background: linear-gradient(180deg, rgba(255, 255, 255, 0.19) 80%, rgba(255, 255, 255, 0.56) 100%); margin: 0;padding: 0;box-sizing: border-box; z-index: 9999;"><div id="scrollamt" style="background: linear-gradient(45deg, rgba(255,179,186,0.8), rgba(255,223,186,0.8), rgba(255,255,186,0.8), rgba(186,255,201,0.8), rgba(186,225,255,0.8), rgba(201,186,255,0.8), rgba(255,186,255,0.8)); outline: 2px rgba(255, 255, 255, 0.57) solid; outline-offset:-2px; background-size: cover; opacity: 0.7; width:100%; height: 0;"></div><div style="position:absolute; transform: rotate(90deg); font-size:1vw; left: 0.55vw; transform-origin: center left; pointer-events: none; white-space: nowrap; cursor:unset;">hi, imagine not being able to raed this... WAIT. DONT SCROLL!</div></div>') }
const scrollbar = document.getElementById('scrollamt');
const scrollthing = document.getElementById('scrollthing');

function resizescroll() {
                const scrollPosition = window.scrollY;
                const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
                scrollbar.style.height = `${scrollPosition / scrollableHeight * 100}%`;
        }
window.addEventListener('scroll', resizescroll);
scrollthing.addEventListener('click', function(event) {
    const rect = scrollthing.getBoundingClientRect();
    const y = event.clientY - rect.top;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = y / rect.height;
    window.scrollTo(0, scrollPercent * scrollableHeight);
    console.log("yes")
});
let isDragging = false;
let startY;
let startScroll;
scrollamt.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startScroll = window.scrollY;
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const trackHeight = window.innerHeight;
    const scrollDelta = (deltaY / trackHeight) * scrollableHeight;

    window.scrollTo(0, startScroll + scrollDelta);
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});
window.addEventListener('resize', resizescroll);

function russian() {
    document.getElementById("langel-wip").innerText = "[не работает...]";
    document.getElementById("langel-bccreation").innerText = "БК уже";
    document.getElementById("langel-boatcreation").innerText = "БОАТ уже";
    document.getElementById("langel-websitecreation").innerText = "Сайт уже";
    document.getElementById("langel-katdob").innerText = "пизда, кат родился";
    for (let elemnt of document.getElementsByName("langel-since").values()) {
        elemnt.innerText = "от";
    }
    document.getElementById("russianbut").innerText = "русский [выбрано]";
    document.getElementById("lithuanianbut").innerText = "lietuvių";
    document.getElementById("langel-links").innerText = "линки";
    document.getElementById("langel-vilnius").innerText = "вильнюс";
    document.getElementById("englishbut").innerText = "english";
    document.getElementById("langel-introduction").innerHTML = "<h2>введение</h2>привет, я <b>katrewkate</b> <sub>[обычно сокращается до kat; kate; ktrwkat, в проектах обычно пишется белым]</sub>, с альтернативными именами: <b>vafelkis</b> <sub>[сокращается до vaf, в творческих проектах и других работах обычно пишется оранжевым]</sub>. другие псевдонимы устарели или больше не используются, и упоминаться здесь не будут. добро пожаловать на этот сайт, здесь вы найдете много всего, от информации о предыдущих проектах до статистики, возможно, даже фотографии, кто знает? вот так.</p>";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', null, "ru");
    displayTimeSinceEvent(new Date("2007-09-26"), 'katdob', null, "ru");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "ru");
    displayTimeSinceEvent(new Date("2025-01-15"), 'websitecreationago', null, "ru");
}
function lithuanian() {
    document.getElementById("langel-wip").innerText = "[dar ruošiama...]";
    document.getElementById("langel-bccreation").innerText = "bc sukūrimas";
    document.getElementById("langel-boatcreation").innerText = "boat'o įkūrimas";
    document.getElementById("langel-websitecreation").innerText = "puslapio įkūrimas:3";
    document.getElementById("langel-katdob").innerText = "katman1993 gimė";

    for (let elemnt of document.getElementsByName("langel-since").values()) {
        elemnt.innerText = "nuo";
    }
    document.getElementById("russianbut").innerText = "русский";
    document.getElementById("langel-vilnius").innerText = "vilnius";
    document.getElementById("lithuanianbut").innerText = "lietuvių [pasirinkta]";
    document.getElementById("langel-introduction").innerHTML = "<h2>įvadas</h2>labas, aš <b>katrewkate</b> <sub>[dažniausiai trumpinima kat; kate; ktrwkat, projektuose užrašyta baltai]</sub>, alternatyviai gali būti <b>vafelkis</b> <sub>[trumpinima vaf, rašoma oranžine spalva]</sub>. kitos pravardės nevartojamos ir todėl nebus minimos. sveiki atvykę, čia rasite daug ko, nuo praeitų projektų iki gal net statistikų, gal foto, kas žino? tai va.</p>";
    document.getElementById("langel-links").innerText = "linkai";
    document.getElementById("englishbut").innerText = "english";

    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', null, "lt");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "lt");
    displayTimeSinceEvent(new Date("2007-09-26"), 'katdob', null, "lt");
    displayTimeSinceEvent(new Date("2025-01-15"), 'websitecreationago', null, "lt");
}
function english() {
    document.getElementById("langel-wip").innerText = "[work in progress...]";
    document.getElementById("langel-bccreation").innerText = "creation of bc";
    document.getElementById("langel-boatcreation").innerText = "creation of boat";
    document.getElementById("langel-websitecreation").innerText = "creation of this website";
    document.getElementById("langel-katdob").innerText = "birth of katman1993?";
    document.getElementById("langel-vilnius").innerText = "vilnius";
    document.getElementById("langel-links").innerText = "links";
    document.getElementById("langel-introduction").innerHTML = "<h2>introduction</h2>hi, i'm <b>katrewkate</b> <sub>[albeit usually shortened to kat; kate; ktrwkat, in projects usually written in white]</sub>, with alternate names being: <b>vafelkis</b> <sub>[shortened to vaf, on creations and other projects usually written in orange]</sub>. other aliases are discontinued or are obsolete and will not be mentioned here. welcome to this website, here you will find a lot of things, anything ranging from information of previous projects to statistics, maybe even photos, who fucking knows? that's right.</p>";
    for (let elemnt of document.getElementsByName("langel-since").values()) {
        elemnt.innerText = "since";
    }
    document.getElementById("russianbut").innerText = "русский";
    document.getElementById("lithuanianbut").innerText = "lietuvių"; //



    document.getElementById("englishbut").innerText = "english [selected]";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', null, "en");
    displayTimeSinceEvent(new Date("2025-01-15"), 'websitecreationago', null, "en");
    displayTimeSinceEvent(new Date("2007-09-26"), 'katdob', null, "en");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "en");
}

function startclock() {
    const nowvln = new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/Vilnius',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format
    });
    const [date, time] = nowvln.split(', ');
    const [day, month, year] = date.split('/');
    if (Math.floor(Math.random() * 100) === 18) {
        date1.innerText = `hi, world :)`
        date2.innerText = "bilnius on top";
    }
    else {

        date1.innerText = `${year}-${month}-${day}`
        date2.innerText = time;
    }
    console.log(`${year}-${month}-${day}` + " " + time)

}
const audio = document.getElementById("msc");
const txtaud = document.getElementById("stopmsc");

function playmsc() {
    setTimeout(function () {
        // Code you want to run after 5 seconds
        audio.play();
    }, 5000);
    if (txtaud.innerText.trim() !== "") {
        txtaud.innerText = "stop background music:3"
    }
    else {
        let wtv = txtaud.getAttribute("src");
        if (wtv === "../2abc.png") {
            txtaud.setAttribute("src", "../2abc_ntsc.png");
        }
    }

}

function stopmsc(before = null, after = null) {

    if (audio.paused) {
        audio.play();
        if (txtaud.innerText.trim() !== "") {
            txtaud.innerText = after || "stop background music:3";
        }
        else {
            let wtv = txtaud.getAttribute("src");
            if (wtv === "../2abc.png") {
                txtaud.setAttribute("src", "../2abc_ntsc.png");
            }
        }
    } else {
        audio.pause();
        if (txtaud.innerText.trim() !== "") {
            txtaud.innerText = before || "continue background music:3";
        }
        else {
            let wtv = txtaud.getAttribute("src");
            if (wtv === "../2abc_ntsc.png") {
                txtaud.setAttribute("src", "../2abc.png");
            }
        }
    }
}
