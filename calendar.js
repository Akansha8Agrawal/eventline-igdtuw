function generateCalendar(month, year) {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  let html = `<div class="d-flex justify-content-between align-items-center mb-2">
                <button onclick="prevMonth()" class="btn btn-light btn-sm">&lt;</button>
                <strong>${months[month]} ${year}</strong>
                <button onclick="nextMonth()" class="btn btn-light btn-sm">&gt;</button>
              </div>
              <table class="table table-bordered text-center calendar-table">
                <thead class="table-light">
                  <tr>
                    <th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th>
                  </tr>
                </thead>
                <tbody><tr>`;

  let day = 1;

  // blank cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += "<td></td>";
  }

  for (let i = firstDay; i < 7; i++) {
    const isToday = day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();
    const cellClass = isToday ? 'calendar-today' : '';
    html += `<td class="${cellClass}">${day}</td>`;
    day++;
  }
  html += "</tr>";

  while (day <= daysInMonth) {
    html += "<tr>";
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      const isToday = day === today.getDate() &&
                      month === today.getMonth() &&
                      year === today.getFullYear();
      const cellClass = isToday ? 'calendar-today' : '';
      html += `<td class="${cellClass}">${day}</td>`;
      day++;
    }
    html += "</tr>";
  }

  html += "</tbody></table>";
  calendar.innerHTML = html;
}
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
}

generateCalendar(currentMonth, currentYear);




