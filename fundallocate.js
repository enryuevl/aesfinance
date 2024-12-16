document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-fund-form');
    const eventListContainer = document.querySelector('.event-list');
    const paginationContainer = document.getElementById('pagination');

    let events = [    {
        title: "Sports Day",
        goal: 50000,
        purpose: "Organizing sports and recreational activities for students."
    },
    {
        title: "Community Outreach",
        goal: 80000,
        purpose: "Supporting outreach programs in local communities."
    },
    {
        title: "School Anniversary",
        goal: 100000,
        purpose: "Celebrating the school's 50th anniversary with events and awards."
    },
    {
        title: "Library Expansion",
        goal: 120000,
        purpose: "Expanding the library and adding new learning resources."
    },
    {
        title: "Teacher Training",
        goal: 60000,
        purpose: "Funding professional development and training workshops for teachers."
    }
]; // Array to store event allocations
    let currentPage = 1; // Current page for pagination
    const itemsPerPage = 4; // Number of events to show per page

    // Function to update the event list
    function renderEventList() {
        eventListContainer.innerHTML = ''; // Clear the event list

        // Paginate events
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage);

        // Render each event
        paginatedEvents.forEach((event, index) => {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');

            eventItem.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Goal:</strong> ₱${event.goal.toLocaleString()}</p>
                <p><strong>Purpose:</strong> ${event.purpose}</p>
                <div class="btn-group">
                    <button class="btn edit-btn" data-index="${startIndex + index}">Edit</button>
                    <button class="btn secondary delete-btn" data-index="${startIndex + index}">Delete</button>
                </div>
            `;

            eventListContainer.appendChild(eventItem);
        });

        renderPagination(); // Update pagination buttons
    }

    // Function to render pagination buttons
    function renderPagination() {
        paginationContainer.innerHTML = ''; // Clear existing buttons

        const totalPages = Math.ceil(events.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('btn', 'secondary', 'page-btn');
            button.textContent = i;
            button.dataset.page = i;

            if (i === currentPage) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                currentPage = i;
                renderEventList();
            });

            paginationContainer.appendChild(button);
        }
    }

    // Function to handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const title = form.event_title.value.trim();
        const goal = parseFloat(form.event_goal.value);
        const purpose = form.event_purpose.value.trim();

        // Validate and add the event
        if (title && goal > 0 && purpose) {
            events.push({ title, goal, purpose });
            form.reset(); // Clear the form
            currentPage = Math.ceil(events.length / itemsPerPage); // Jump to the last page
            renderEventList(); // Update the list
        }
    });

    // Event delegation for Edit and Delete buttons
    eventListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            events.splice(index, 1); // Remove the event
            if (currentPage > Math.ceil(events.length / itemsPerPage)) {
                currentPage--; // Adjust current page if necessary
            }
            renderEventList(); // Update the list
        } else if (e.target.classList.contains('edit-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            const event = events[index];

            // Populate the form with event details for editing
            form.event_title.value = event.title;
            form.event_goal.value = event.goal;
            form.event_purpose.value = event.purpose;

            // Remove the old event and reset the list
            events.splice(index, 1);
            currentPage = 1; // Reset to the first page for editing
            renderEventList();
        }
    });

    // Initial render
    renderEventList();
});
