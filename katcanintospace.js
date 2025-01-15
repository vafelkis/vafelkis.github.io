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
  function displayTimeSinceEvent(eventDate, elementId=null, endEventDate = null) {
    const time = calculateTimeSinceEvent(eventDate, endEventDate);
  
    // If the event date is invalid, exit early
    if (!time) return;
  
    const { years, months, days } = time;
    const result = `${years} years, ${months} months, and ${days} days ago`;
    if (elementId == null) return result;
    document.getElementById(elementId).innerText = result;
  }
  
  
  // Auto-run on page load
  window.onload = function () { // Example event date
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
      displayTimeSinceEvent(new Date("2024-09-19"), 'boatcreationdateago');
      displayTimeSinceEvent(new Date("2022-05-30"), 'bccreationdateago');
      for (elementx of document.getElementsByClassName("datex")) {
        console.log(elementx);
        elementx.innerText = displayTimeSinceEvent(elementx.innerText);
      }
    }
  }