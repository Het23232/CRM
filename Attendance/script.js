document.addEventListener("DOMContentLoaded", loadAttendance);

function markAttendance() {
    const name = document.getElementById("employee-name").value.trim();
    const status = document.getElementById("attendance-status").value;
    const date = new Date().toLocaleDateString();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const attendanceData = {
        date,
        name,
        status
    };

    // Save to Local Storage
    let attendanceRecords = JSON.parse(localStorage.getItem("attendance")) || [];
    attendanceRecords.push(attendanceData);
    localStorage.setItem("attendance", JSON.stringify(attendanceRecords));

    // Update table
    appendToTable(attendanceData);
}

function loadAttendance() {
    let attendanceRecords = JSON.parse(localStorage.getItem("attendance")) || [];
    attendanceRecords.forEach(record => appendToTable(record));
}

function appendToTable(record) {
    const table = document.getElementById("attendance-log");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${record.date}</td>
        <td>${record.name}</td>
        <td>${record.status}</td>
    `;

    table.appendChild(row);
}
