// Example Logs Data
const logsData = [
    { date: '2024-06-01 09:15 AM', user: 'admin', action: 'Login', description: 'Admin logged into the system.' },
    { date: '2024-06-01 09:20 AM', user: 'admin', action: 'Generate Report', description: 'Generated monthly financial report.' },
    { date: '2024-06-01 09:25 AM', user: 'user1', action: 'Add', description: 'Added a new account for client A.' },
    { date: '2024-06-01 09:30 AM', user: 'user2', action: 'Delete', description: 'Deleted transaction #12345.' },
    { date: '2024-06-01 10:00 AM', user: 'user1', action: 'Logout', description: 'User logged out.' },
    ...Array.from({ length: 20 }, (_, i) => ({
        date: `2024-06-${Math.min(30, i + 10)} 0${i % 12 + 1}:00 AM`,
        user: i % 2 === 0 ? 'admin' : `user${i % 3 + 1}`,
        action: i % 2 === 0 ? 'Login' : 'Edit',
        description: `Sample log entry ${i + 1}.`,
    })),
];

const rowsPerPage = 10;
let currentPage = 1;
let currentFilter = 'all';

// Function to Populate Logs Table with Pagination
function populateLogsTable(filter = 'all', page = 1) {
    const tableBody = document.getElementById('logs-tbody'); // Updated to match your HTML ID
    tableBody.innerHTML = ''; // Clear table before adding rows

    // Filter logs by user
    const filteredLogs = filter === 'all' ? logsData : logsData.filter(log => log.user.includes(filter));

    // Pagination logic
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedLogs = filteredLogs.slice(startIndex, endIndex);

    // Populate rows
    paginatedLogs.forEach(log => {
        const row = `
            <tr>
                <td>${log.date}</td>
                <td>${log.user}</td>
                <td>${log.action}</td>
                <td>${log.description}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    renderPagination(filteredLogs.length, page);
}

// Render Pagination Controls
function renderPagination(totalRows, currentPage) {
    const paginationContainer = document.querySelector('.logs-pagination'); // Updated to match your HTML class
    paginationContainer.innerHTML = ''; // Clear pagination buttons

    const totalPages = Math.ceil(totalRows / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        button.onclick = () => {
            currentPage = i;
            populateLogsTable(currentFilter, currentPage);
        };
        paginationContainer.appendChild(button);
    }
}

// Filter Logs by User
function filterLogsByUser() {
    const filter = document.getElementById('user-filter').value.toLowerCase(); // Updated to match your HTML ID
    currentFilter = filter;
    currentPage = 1; // Reset to first page when filter changes
    populateLogsTable(currentFilter, currentPage);
}

// Populate Table on Page Load
document.addEventListener('DOMContentLoaded', () => {
    populateLogsTable();
});
