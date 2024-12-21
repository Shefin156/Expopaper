// JavaScript for changing months and displaying the correct calendar days

let currentMonth = new Date().getMonth(); // Starting with the current month
let currentYear = new Date().getFullYear();

function changeMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth < 0) {
        currentMonth = 11; // Go to December
        currentYear -= 1;  // Previous Year
    } else if (currentMonth > 11) {
        currentMonth = 0;  // Go to January
        currentYear += 1;  // Next Year
    }
    
    // Update the month and year title
    document.getElementById("month-title").textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    
    // Re-render the calendar days
    renderCalendar();
}

function getMonthName(monthIndex) {
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
}

function renderCalendar() {
    const calendarGrid = document.querySelector(".calendar-grid");
    calendarGrid.innerHTML = ""; // Clear previous days

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    
    // Add empty cells for the days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        const emptyCell = document.createElement("div");
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add actual days of the month
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day");
        dayCell.textContent = day;
        calendarGrid.appendChild(dayCell);
    }
}

// Initial render
renderCalendar();
