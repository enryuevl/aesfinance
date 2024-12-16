// Sample payment data
const payments = [
    { paymentId: 1, description: 'Tuition Fee', amount: '₱25,000', dueDate: '2024-12-15', status: 'Not Paid' },
    { paymentId: 2, description: 'Library Fee', amount: '₱2,000', dueDate: '2024-12-10', status: 'Paid' },
    { paymentId: 3, description: 'Sports Fund', amount: '₱1,500', dueDate: '2024-12-20', status: 'Not Paid' },
    { paymentId: 4, description: 'Miscellaneous Fee', amount: '₱3,000', dueDate: '2024-12-30', status: 'Paid' },
    { paymentId: 1, description: 'Tuition Fee', amount: '₱25,000', dueDate: '2024-12-15', status: 'Not Paid' },
    { paymentId: 2, description: 'Library Fee', amount: '₱2,000', dueDate: '2024-12-10', status: 'Paid' },
    { paymentId: 3, description: 'Sports Fund', amount: '₱1,500', dueDate: '2024-12-20', status: 'Not Paid' },
    { paymentId: 4, description: 'Miscellaneous Fee', amount: '₱3,000', dueDate: '2024-12-30', status: 'Paid' },
    { paymentId: 1, description: 'Tuition Fee', amount: '₱25,000', dueDate: '2024-12-15', status: 'Not Paid' },
    { paymentId: 2, description: 'Library Fee', amount: '₱2,000', dueDate: '2024-12-10', status: 'Paid' },
    { paymentId: 3, description: 'Sports Fund', amount: '₱1,500', dueDate: '2024-12-20', status: 'Not Paid' },
    { paymentId: 4, description: 'Miscellaneous Fee', amount: '₱3,000', dueDate: '2024-12-30', status: 'Paid' },
];

// Sample event data
const events = [
    { eventId: 1, title: 'Sports Day', date: '2024-12-20', purpose: 'Sports Fund Contributions' },
    { eventId: 2, title: 'Library Fundraiser', date: '2024-12-15', purpose: 'Library Renovation Contributions' },
    { eventId: 3, title: 'School Development Day', date: '2024-12-25', purpose: 'Miscellaneous Contributions' },
    { eventId: 1, title: 'Sports Day', date: '2024-12-20', purpose: 'Sports Fund Contributions' },
    { eventId: 2, title: 'Library Fundraiser', date: '2024-12-15', purpose: 'Library Renovation Contributions' },
    { eventId: 3, title: 'School Development Day', date: '2024-12-25', purpose: 'Miscellaneous Contributions' },
    { eventId: 1, title: 'Sports Day', date: '2024-12-20', purpose: 'Sports Fund Contributions' },
    { eventId: 2, title: 'Library Fundraiser', date: '2024-12-15', purpose: 'Library Renovation Contributions' },
    { eventId: 3, title: 'School Development Day', date: '2024-12-25', purpose: 'Miscellaneous Contributions' },
];

// Sample pagination settings
const itemsPerPage = 5; // Number of items to display per page
let currentPaymentPage = 1;
let currentEventPage = 1;

// Function to paginate data
function paginateData(data, page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
}

// Render paginated payment cards
function renderPaymentCards(page = 1) {
    const paymentCardsContainer = document.getElementById('payment-cards');
    paymentCardsContainer.innerHTML = '';

    const paginatedPayments = paginateData(payments, page);
    paginatedPayments.forEach(payment => {
        const card = `
            <div class="payment-card">
                <h4>${payment.description}</h4>
                <p><strong>Amount:</strong> ${payment.amount}</p>
                <p><strong>Due Date:</strong> ${payment.dueDate}</p>
                <span class="status ${payment.status.toLowerCase().replace(' ', '-')}">${payment.status}</span>
            </div>
        `;
        paymentCardsContainer.insertAdjacentHTML('beforeend', card);
    });

    renderPaginationControls('payment-pagination', payments.length, page, (newPage) => {
        currentPaymentPage = newPage;
        renderPaymentCards(newPage);
    });
}

// Render paginated event cards
function renderEventCards(page = 1) {
    const eventCardsContainer = document.getElementById('event-cards');
    eventCardsContainer.innerHTML = '';

    const paginatedEvents = paginateData(events, page);
    paginatedEvents.forEach(event => {
        const card = `
            <div class="event-card">
                <h4>${event.title}</h4>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Purpose:</strong> ${event.purpose}</p>
            </div>
        `;
        eventCardsContainer.insertAdjacentHTML('beforeend', card);
    });

    renderPaginationControls('event-pagination', events.length, page, (newPage) => {
        currentEventPage = newPage;
        renderEventCards(newPage);
    });
}

// Render pagination controls
function renderPaginationControls(containerId, totalItems, currentPage, onPageChange) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => onPageChange(i));
        container.appendChild(button);
    }
}

// Initial render with pagination
renderPaymentCards(currentPaymentPage);
renderEventCards(currentEventPage);
