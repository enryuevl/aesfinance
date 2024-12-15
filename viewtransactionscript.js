//CSSVIEWTRANSACTION 
// Sample transaction data
const transactions = [
    { date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' },
	{ date: '2024-12-10', description: 'Office Supplies Purchase', category: 'Office Supplies', amount: '₱5,000', status: 'completed' },
    { date: '2024-12-08', description: 'Monthly Rent', category: 'Rent', amount: '₱20,000', status: 'pending' },
    { date: '2024-12-05', description: 'Client Payment Received', category: 'Income', amount: '₱50,000', status: 'completed' },
    { date: '2024-12-01', description: 'Utilities Payment', category: 'Utilities', amount: '₱12,000', status: 'rejected' },
    { date: '2024-12-11', description: 'Project Expense', category: 'Project', amount: '₱30,000', status: 'pending' },
    { date: '2024-12-09', description: 'Internet Bill', category: 'Utilities', amount: '₱1,500', status: 'completed' }
];

let currentFilter = 'completed';

// Filter and render transactions
function filterTransactions(status) {
    currentFilter = status;
    renderTable();
    updateActiveButton(status);
}

// Update active button
function updateActiveButton(status) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase() === status);
    });
}

// Render filtered transactions
function renderTable() {
    const tbody = document.getElementById('transaction-tbody');
    tbody.innerHTML = '';

    const filteredTransactions = transactions.filter(transaction => transaction.status === currentFilter);

    filteredTransactions.forEach(transaction => {
        const row = `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>${transaction.amount}</td>
                <td class="status ${transaction.status}">${capitalize(transaction.status)}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

// Capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Render filtered transactions with action buttons for pending
function renderTable() {
    const tbody = document.getElementById('transaction-tbody');
    tbody.innerHTML = '';

    const filteredTransactions = transactions.filter(transaction => transaction.status === currentFilter);

    filteredTransactions.forEach(transaction => {
        const actionButtons = transaction.status === 'pending'
            ? `<td>
                   <button class="action-btn confirm-btn" onclick="confirmTransaction('${transaction.date}')">Confirm</button>
                   <button class="action-btn reject-btn" onclick="rejectTransaction('${transaction.date}')">Reject</button>
               </td>`
            : '<td></td>';

        const row = `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>${transaction.amount}</td>
                <td class="status ${transaction.status}">${capitalize(transaction.status)}</td>
                ${actionButtons}
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

// Placeholder functions for Confirm and Reject actions
function confirmTransaction(date) {
    alert(`Transaction on ${date} confirmed.`);
}

function rejectTransaction(date) {
    alert(`Transaction on ${date} rejected.`);
}
function renderTable() {
    const tbody = document.getElementById('transaction-tbody');
    tbody.innerHTML = '';

    const filteredTransactions = transactions.filter(transaction => transaction.status === currentFilter);

    filteredTransactions.forEach(transaction => {
        let actionButtons = '';
        
        if (transaction.status === 'pending') {
            actionButtons = `
                <button class="action-btn confirm-btn" onclick="confirmTransaction('${transaction.date}')">Confirm</button>
                <button class="action-btn reject-btn" onclick="rejectTransaction('${transaction.date}')">Reject</button>
            `;
        } else if (transaction.status === 'completed' || transaction.status === 'rejected') {
            actionButtons = `
                <button class="action-btn edit-btn" onclick="editTransaction('${transaction.date}')">Edit</button>
            `;
        }

        const row = `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>${transaction.amount}</td>
                <td class="status ${transaction.status}">${capitalize(transaction.status)}</td>
                <td>${actionButtons}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

// Placeholder functions for actions
function confirmTransaction(date) {
    alert(`Transaction on ${date} confirmed.`);
}

function rejectTransaction(date) {
    alert(`Transaction on ${date} rejected.`);
}

function editTransaction(date) {
    alert(`Editing transaction on ${date}.`);
}

// Initial render
renderTable();
