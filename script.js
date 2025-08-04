document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek'
    },
    dateClick: function (info) {
      window.location.href = `/events/${info.dateStr}`;
    },
    events: [
      { title: 'Orientation Day', start: '2025-08-05', url: '/events/2025-08-05' },
      { title: 'Hackathon Info Session', start: '2025-08-10', url: '/events/2025-08-10' },
      { title: 'Independence Day Celebration', start: '2025-08-14', url: '/events/2025-08-14' },
      { title: 'Debate Competition', start: '2025-08-20', url: '/events/2025-08-20' }
    ]
  });

  calendar.render();
});

