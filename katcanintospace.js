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

        result = `${years} metų, ${months} mėnesių ir ${days} dienų`;
        console.log("c");
    }
    else if (language == "ru") {

        result = `${years} лет, ${months} месяцев и ${days} дней`;
        console.log("d");
    }



    if (elementId == null) return result;
    document.getElementById(elementId).innerText = result;
    console.log("e");
}


// Auto-run on page load
window.onload = function () { // Example event date
    var path = window.location.pathname;
    var page = path.split("/").pop();
    //if (page == "index.html") {
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago');
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago');
    //for (elementx of document.getElementsByClassName("datex")) {
    //  console.log(elementx);
    //  elementx.innerText = displayTimeSinceEvent(elementx.innerText);
    //}
    //}
}

function russian() {
    document.getElementById("langel-wip").innerText = "[не работает...]";
    document.getElementById("langel-bccreation").innerText = "БК";
    document.getElementById("langel-boatcreation").innerText = "БОАТ";
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
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago',null, "ru");
}
function lithuanian() {
    document.getElementById("langel-wip").innerText = "[dar ruošiama...]";
    document.getElementById("langel-bccreation").innerText = "bc sukūrimas";
    document.getElementById("langel-boatcreation").innerText = "boat'o įkūrimas";
    for (let elemnt of document.getElementsByName("langel-since").values()) {
        elemnt.innerText = "nuo";
    }
    document.getElementById("russianbut").innerText = "русский";
    document.getElementById("langel-vilnius").innerText = "vilnius";
    document.getElementById("lithuanianbut").innerText = "lietuvių [pasirinkta]";
    document.getElementById("langel-introduction").innerHTML = "<h2>įvadas</h2>labas, aš <b>katrewkate</b> <sub>[dažniausiai trumpinima kat; kate; ktrwkat, projektuose užrašyta baltai]</sub>, alternatyviai gali būti <b>vafelkis</b> <sub>[trumpinima vaf, rašoma oranžine spalva]</sub>. kitos pravardės nevartojamos ir todėl nebus minimos. sveiki atvykę, čia rasite daug ko, nuo praeitų projektų iki gal net statistikų, gal foto, kas žino? tai va.</p>";
    document.getElementById("langel-links").innerText = "linkai";
    document.getElementById("englishbut").innerText = "english";

    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago',null, "lt");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "lt");
}
function english() {
    document.getElementById("langel-wip").innerText = "[work in progress...]";
    document.getElementById("langel-bccreation").innerText = "creation of bc";
    document.getElementById("langel-boatcreation").innerText = "creation of boat";
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
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', null, "en");
}
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
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
    date1.innerText = `${year}-${month}-${day}`
    date2.innerText = time;
}
setInterval(startclock, 1000); 
