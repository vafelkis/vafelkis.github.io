let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
if (typeof ignoreloading === 'undefined' || !ignoreloading) {
    document.body.insertAdjacentHTML("afterbegin", `
    <div id="loading" style="position:fixed; scroll:none; display:flex; height: 100%; width: 100%; left: 0; top:0; background: linear-gradient(45deg, #010b29c2 0%, #010b2993 100%); z-index:99999999; text-align: center; font-family: 'Comic Sans MS' !important; font-size: 24px; line-height: 40px">
    <div style="margin: auto auto; font-size:150%" ><img src="/Katvodkalogoaphotos/truelt.jpeg" style="width: 20%; object-fit: contain; filter: drop-shadow(3px 3px 0 black)" id="logo"><br>loading...<br>
    <a style="all:unset; font-size: 80%">do not panic if it looks stuck / site looks broken.<br>the website will look incomplete, while loading.<div style="opacity:0.5; font-size:16px; width: 75%; margin: 0 auto; line-height: 20px">in the case of it freezing, and you see that nothing is loading, please refresh the page. if it still does not work, well... then youre cooked.😭 nah but fr, pls contact katrewkate@gmail.com, or if you can access the poptart page (https:/vafelkis.github.io/poptart) then contact from there please! this pleasant [or horibbel.. :(] experience, has been brought to you by katrewkate/katdustries incorioaprtped induastries in some offshore country that no one knows about ! 
    </a><div id="quote">some fancy ahh quote here 🤓</div><div style="width: 100%; margin: 15px 0 0 0; height: 10px; outline: white 4px solid; background:transparent;"><div id="loadinz" style="background:linear-gradient(45deg, white, pink); width:0%; height:100%;"></div></div>`);
}
//if (typeof ignoremsg === 'undefined' || !ignoremsg) {
//    document.body.insertAdjacentHTML("afterbegin", `
//    <div id="warningxxx" style="all:initial; color:white; position:fixed; mix-blend-mode:color-dodge; scroll:none; height: 155px; width: 200px; left: 0; bottom:0; background: rgba(255,255,255,0.2); border: 3px rgba(255,255,255,0.2) solid; z-index:99999999; text-align: center; font-family: 'Comic Sans MS' !important; font-size: 12px !important; line-height: 18px; text-shadow: none !important; filter: none !important; animation: 30s real infinite linear">
//    <div style="margin: auto auto; text-shadow: 3px 3px 0 black !important;  color:white; font-family: 'Comic Sans MS' !important; font-size: 16px"  ><img src="/katlogowhite.png" style="width: 75px; object-fit: contain; filter: drop-shadow(3px 3px 0 black) !important"><br>warning :D<br>
//    <a style="all:unset; font-size: 12px;  color:white; font-family: 'Comic Sans MS' !important; text-shadow: 3px 3px 0 black !important">the site will likely experience a bit of stagnation, as im personally in a bad spot, so yea, sorry!<br>check these pages for more information: <div class="sigmahover1 grab" onclick="sigma('/poptart/'); return false">poptart</div> / <div class="sigmahover1 grab" onclick="sigma('/kat/wiki/'); return false">wiki</div></div>`);
//}
reset();
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    const total = images.length;

    let loaded = 0;

    const progressBar = document.getElementById("loadinz");

    const update = () => {
        loaded++;
        const percent = Math.round((loaded / total) * 100);

        progressBar.style.width = percent + "%";
    };

    images.forEach(img => {
        if (img.classList.contains("clck")) {
            if (!img.closest("a")) {
                const link = document.createElement("a");
                link.href = "/photo?src=" + encodeURIComponent(img.src);
                img.parentNode.insertBefore(link, img);
                link.appendChild(img);
            }
        }
        if (img.complete) {
            update();
        } else {
            img.addEventListener("load", update);
            img.addEventListener("error", update);
        }
    });

});

//if (typeof ignoretop === 'undefined' || !ignoretop) {
//
//    document.body.insertAdjacentHTML("afterbegin", "<style>#topmessage {  position: fixed !important;top: 0 !important;left: 0 !important;width: 100% !important;background: linear-gradient(45deg, red, darkred) !important;color: white !important;text-align: center !important;padding: 0px !important;z-index: 999 !important;font-size: 20px !important;}</style><div class='scrolldiv' id='topmessage'><div class='scrolltext' style=\"font-size: 20px !important; font-family: 'Comic Sans MS' !important;\" id='topbannerad' >All projects are currently paused. Please refer to the following pages for more information: <a href='/kat/' class='sigmahover1 grab'>/kat/ page</a>, <a href='/kat/lore/' class='sigmahover1 grab'>/kat/lore/ page</a>, <a href='/newz/' class='sigmahover1 grab'>/newz/ page</a>, <a href='/kat/wiki/' class='sigmahover1 grab'>/kat/wiki/ page</a>; particularly November / December months, and Eurobeat/Buckshot era events. Thank you for the support and understanding and have a great day! :)</div></div>");
//}
const fmt = Intl.DateTimeFormat({ timeZone: 'Europe/Vilnius' });
function calculateTimeSinceEvent(eventDate, endDate = null) {
    let now = new Date();
    let event = new Date(eventDate);
    if (endDate != null) {
        now = new Date(endDate);
    }
    if (isNaN(event.getTime())) {
        console.error("Invalid event date");
        return;
    }
    let years = now.getFullYear() - event.getFullYear();
    let months = now.getMonth() - event.getMonth();
    let days = now.getDate() - event.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
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
    va.volume = 0.4;
    va.play();
    va.onended = function () {
        window.location.assign(window.location.origin + href);
    };
}
function displayTimeSinceEvent(eventDate, elementId = null, endEventDate = null, language = null) {
    const time = calculateTimeSinceEvent(eventDate, endEventDate);

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

const bish = ["whoever reads is 'coustic", "check out Pancair Development Faciltes!", "dont forget to checkout vucic", "have you went to misc?", "good things start with b, boat, blyat.. bodka, bilnius!", "Bilnius", "eurobeat in the 26", "aproved by gogel", "bbbbbb", "welcome to the real world.", "do not support andrwe tate", "ba bla bla bla", "YAPPPPPPPPPP", "welcome from 1984", "if you read, you gey.", "check out new shi bro.", "live, laugh, love vlc", "sigma reader", "wtf bro", "HAHAHAHA", "welcome to amsterdam", "gretting to pacnkar in canda. :)", "Also checkout... huh?", "bro, hi!", "ni-ninja!", "\"sigma site ong fr\""]
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



    setInterval(startclock, 1000);
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
    let splash = document.getElementById("splash");
    splash.innerText = stext;
    date1 = document.getElementById("date1");
    date2 = document.getElementById("date2");


}
if (typeof ignoresidebar === 'undefined' || !ignoresidebar) {

    document.body.insertAdjacentHTML("afterbegin", '<div id="scrollthing" style="position: fixed; top: 0;right: 0;z-index:9999999;width: 1vw;height: 100vh;background: linear-gradient(180deg, rgba(255, 255, 255, 0.19) 80%, rgba(255, 255, 255, 0.56) 100%); margin: 0;padding: 0;box-sizing: border-box; z-index: 9999"><div id="scrollamt" style="background: linear-gradient(45deg, rgba(255,179,186,0.8), rgba(255,223,186,0.8), rgba(255,255,186,0.8), rgba(186,255,201,0.8), rgba(186,225,255,0.8), rgba(201,186,255,0.8), rgba(255,186,255,0.8)); outline: 2px rgba(255, 255, 255, 0.57) solid; outline-offset:-2px; background-size: cover; opacity: 0.7; width:100%; height: 0"></div><div style="position:absolute; transform: rotate(90deg); font-size:1vw; left: 0.55vw; transform-origin: center left; pointer-events: none; white-space: nowrap; cursor:unset">hi, imagine not being able to raed this... WAIT. DONT SCROLL!</div></div>')
}
const scrollbar = document.getElementById('scrollamt');
const scrollthing = document.getElementById('scrollthing');

function resizescroll() {
    const scrollPosition = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollbar.style.height = `${scrollPosition / scrollableHeight * 100}%`;
}
window.addEventListener('scroll', resizescroll);
scrollthing.addEventListener('click', function (event) {
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
    document.getElementById("lithuanianbut").innerText = "lietuvių";



    document.getElementById("englishbut").innerText = "english [selected]";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', null, "en");
    displayTimeSinceEvent(new Date("2025-01-15"), 'websitecreationago', null, "en");
    displayTimeSinceEvent(new Date("2007-09-26"), 'katdob', null, "en");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "en");
}

let donottakeshroomz = document.getElementById("2026cont");
let widthchangenx = document.getElementById("sigma1993");

function startclock() {
    const nowvln = new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/Vilnius',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
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
    recheckcount();
}
function recheckcount() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Vilnius' }));
    const current = new Date(now);

    const startOfYear = new Date(current.getFullYear(), 0, 1);
    const endOfYear = new Date(current.getFullYear() + 1, 0, 1);

    const percent = (((current - startOfYear) / (endOfYear - startOfYear)) * 100).toFixed(4);
    donottakeshroomz.innerHTML = `<img src="/pinkhearts.gif"
            class="sng"> ${startOfYear.getFullYear()}... watafak?! <img src="/pinkhearts.gif"
            class="sng">`;
    widthchangenx.style.width = `${percent}%`;
    widthchangenx.innerText = `${percent}%`;

}
const audio = document.getElementById("msc");
const txtaud = document.getElementById("stopmsc");
function startahkurwa(startDate) {
    const target = startDate instanceof Date
        ? startDate.getTime()
        : new Date(startDate).getTime();

    const el = document.getElementById("ahkurwa");
    let complete = false;
    let flashing = false;
    const col = el.style.color || "red";

    function flash() {
        el.style.color = "transparent";
        setTimeout(() => {
            el.style.color = col;
        }, 500);
    }

    function startFlashing() {
        if (flashing) return;
        flashing = true;
        flash();
        setInterval(flash, 1000);
    }

    function tick() {
        if (complete) {
            startFlashing();
            return;
        }

        const now = Date.now();
        let diff = Math.floor((target - now) / 1000);

        if (diff <= 0) {
            diff = 0;
            complete = true;
        }

        const days = Math.floor(diff / 86400);
        diff %= 86400;
        const hours = Math.floor(diff / 3600);
        diff %= 3600;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;

        el.innerText =
            String(days).padStart(2, "0") + " " +
            String(hours).padStart(2, "0") + " " +
            String(minutes).padStart(2, "0") + " " +
            String(seconds).padStart(2, "0");
    }

    tick();
    setInterval(tick, 1000);
}



function playmsc() {
    setTimeout(function () {
        audio.play();
    }, 5000);
    if (txtaud.innerText.trim() !== "") {
        txtaud.innerText = "stop background music:3"
    }
    else {
        let wtv = txtaud.getAttribute("src");
        if (wtv === "/2abc.png") {
            txtaud.setAttribute("src", "/2abc_ntsc.png");
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
            if (wtv === "/2abc.png") {
                txtaud.setAttribute("src", "/2abc_ntsc.png");
            }
        }
    } else {
        audio.pause();
        if (txtaud.innerText.trim() !== "") {
            txtaud.innerText = before || "continue background music:3";
        }
        else {
            let wtv = txtaud.getAttribute("src");
            if (wtv === "/2abc_ntsc.png") {
                txtaud.setAttribute("src", "/2abc.png");
            }
        }
    }
}
const glyphs =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЭЮЯабвгдежзийклмнопрстуфхцчшщыэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω0123456789#$%&*+=?@^";
document.querySelectorAll(".obf").forEach(el => {
    const length = el.textContent.length;

    setInterval(() => {
        let out = "";
        for (let i = 0; i < length; i++) {
            out += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
        el.textContent = out;
    }, 112);
});
