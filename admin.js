  
  // Handle Edit buttons
  document.querySelectorAll('.your-events-section .event').forEach(eventRow => {
    const editButton = eventRow.querySelector('button:first-of-type');
    const deleteButton = eventRow.querySelector('button:last-of-type');

    editButton.addEventListener('click', () => {
      const spans = eventRow.querySelectorAll('span');

      const title = spans[0].innerText;
      const date = spans[1].innerText;

      // Replace spans with input fields
      spans[0].innerHTML = `<input type="text" value="${title}" />`;
      spans[1].innerHTML = `<input type="text" value="${date}" />`;

      // Change Edit to Save
      editButton.innerText = 'Save';

      editButton.addEventListener('click', () => {
        const newTitle = spans[0].querySelector('input').value;
        const newDate = spans[1].querySelector('input').value;

        spans[0].innerText = newTitle;
        spans[1].innerText = newDate;

        editButton.innerText = 'Edit';
      }, { once: true });
    });

    // Optional: Delete functionality
    deleteButton.addEventListener('click', () => {
      eventRow.remove();
    });
  });
