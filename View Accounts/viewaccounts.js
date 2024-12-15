// Sample account data
const accounts = [
    { userId: 1, fullName: 'John Doe', email: 'johndoe@example.com', userLevel: 'Admin', status: 'Active' },
    { userId: 2, fullName: 'Jane Smith', email: 'janesmith@example.com', userLevel: 'User', status: 'Inactive' },
    { userId: 3, fullName: 'Mark Brown', email: 'markbrown@example.com', userLevel: 'Guest', status: 'Active' },
    { userId: 4, fullName: 'Emma Watson', email: 'emmawatson@example.com', userLevel: 'Admin', status: 'Inactive' },
    // Additional rows for demonstration
    ...Array.from({ length: 30 }, (_, i) => ({
        userId: i + 5,
        fullName: `User ${i + 5}`,
        email: `user${i + 5}@example.com`,
        userLevel: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'User' : 'Guest',
        status: i % 2 === 0 ? 'Active' : 'Inactive',
    })),
];

const rowsPerPage = 10;
let currentPage = 1;
let currentFilter = 'all';

// Render accounts table with pagination
function renderAccountsTable(filter = 'all', page = 1) {
    const tbody = document.getElementById('account-tbody');
    tbody.innerHTML = '';

    // Filter accounts based on the user level
    const filteredAccounts = filter === 'all'
        ? accounts
        : accounts.filter(account => account.userLevel.toLowerCase() === filter);

    // Pagination logic
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedAccounts = filteredAccounts.slice(startIndex, endIndex);

    // Generate table rows
    paginatedAccounts.forEach(account => {
        const row = `
            <tr>
                <td>${account.userId}</td>
                <td>${account.fullName}</td>
                <td>${account.email}</td>
                <td>${account.userLevel}</td>
                <td>${account.status}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editAccount(${account.userId})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteAccount(${account.userId})">Delete</button>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });

    renderPagination(filteredAccounts.length, page);
}

// Render pagination controls
function renderPagination(totalRows, currentPage) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalRows / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        button.onclick = () => {
            currentPage = i;
            renderAccountsTable(currentFilter, currentPage);
        };
        paginationContainer.appendChild(button);
    }
}

// Filter accounts by user level
function filterTableByUserLevel() {
    const filterValue = document.getElementById('user-level-filter').value.toLowerCase();
    currentFilter = filterValue;
    currentPage = 1; // Reset to first page after filtering
    renderAccountsTable(currentFilter, currentPage);
}

// Placeholder functions for actions
function editAccount(userId) {
    alert(`Edit account with User ID: ${userId}`);
}

function deleteAccount(userId) {
    alert(`Delete account with User ID: ${userId}`);
}

// Initial render
renderAccountsTable(currentFilter, currentPage);
