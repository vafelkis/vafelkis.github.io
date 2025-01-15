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
    if (this.language == null) {
        language = "en"
    }
    let result = "";
    if (language == "en") {
        result = `${years} years, ${months} months and ${days} days ago`;
    }
    else if (language == "lt") {

        result = `${years} metų, ${months} mėnesių ir ${days} dienų`;
    }
    else if (language == "ru") {

        result = `${years} лет, ${months} месяцев и ${days} дней`;
    }



    if (elementId == null) return result;
    document.getElementById(elementId).innerText = result;
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
    for (elemnt in document.getElementsByName("langel-since").values())
        {
        elemnt.innerText = "от";
        }
    document.getElementById("russianbut").innerText = "русский [выбрано]";
    document.getElementById("lithuanianbut").innerText = "lietuvių";
    document.getElementById("englishbut").innerText = "english";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', language="ru");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', language="ru");
}
function lithuanian() {
    document.getElementById("langel-wip").innerText = "[dar ruošiama...]";
    document.getElementById("langel-bccreation").innerText = "bc sukūrimas";
    document.getElementById("langel-boatcreation").innerText = "boat'o įkūrimas";
    for (elemnt in document.getElementsByName("langel-since").values())
        {
        elemnt.innerText = "nuo";
        }
    document.getElementById("russianbut").innerText = "русский";
    document.getElementById("lithuanianbut").innerText = "lietuvių [pasirinkta]";
    document.getElementById("englishbut").innerText = "english";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', language="lt");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', language="lt");
}
function english() {
    document.getElementById("langel-wip").innerText = "[work in progress...]";
    document.getElementById("langel-bccreation").innerText = "creation of bc";
    document.getElementById("langel-boatcreation").innerText = "creation of boat";
    for (elemnt in document.getElementsByName("langel-since").values())
    {
    elemnt.innerText = "since";
    }
    document.getElementById("russianbut").innerText = "русский";
    document.getElementById("lithuanianbut").innerText = "lietuvių";
    document.getElementById("englishbut").innerText = "english [selected]";
    displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago', language="en");
    displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago', language="en");
}