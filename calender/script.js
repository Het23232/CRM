const calendarDays = document.getElementById("calendar-days");
const monthYear = document.getElementById("month-year");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let tasks = {}; // Store tasks for each day

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

function renderCalendar() {
    calendarDays.innerHTML = "";
    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        let dayCell = document.createElement("div");
        dayCell.textContent = day;
        dayCell.onclick = () => openTaskModal(day);

        if (
            day === date.getDate() &&
            currentMonth === date.getMonth() &&
            currentYear === date.getFullYear()
        ) {
            dayCell.classList.add("today");
        }

        if (tasks[`${currentYear}-${currentMonth}-${day}`]) {
            dayCell.classList.add("task-day");
        }

        calendarDays.appendChild(dayCell);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

// Task Modal Functions
function openTaskModal(day) {
    const modal = document.getElementById("task-modal");
    modal.classList.remove("hidden");
    modal.style.display = "block";

    document.getElementById("modal-title").textContent = `Tasks for ${months[currentMonth]} ${day}, ${currentYear}`;
    document.getElementById("task-input").value = tasks[`${currentYear}-${currentMonth}-${day}`] || "";
    
    modal.dataset.selectedDate = `${currentYear}-${currentMonth}-${day}`;
}

function closeModal() {
    document.getElementById("task-modal").style.display = "none";
}

function saveTask() {
    const selectedDate = document.getElementById("task-modal").dataset.selectedDate;
    const taskText = document.getElementById("task-input").value.trim();

    if (taskText) {
        tasks[selectedDate] = taskText;
    } else {
        delete tasks[selectedDate]; // Remove empty tasks
    }

    closeModal();
    renderCalendar();
}

renderCalendar();
