const transactions = [
    { date: '2024-12-10', description: 'Tuition Fee Payment', category: 'Income', amount: '₱25,000' },
    { date: '2024-12-09', description: 'Office Supplies Purchase', category: 'Expense', amount: '₱3,500' },
    { date: '2024-12-08', description: 'Monthly Rent Payment', category: 'Expense', amount: '₱15,000' },
    { date: '2024-12-07', description: 'Library Fund Donation', category: 'Income', amount: '₱5,000' },
    { date: '2024-12-06', description: 'Internet Bill Payment', category: 'Expense', amount: '₱1,800' },
    { date: '2024-12-05', description: 'Parent Contribution - Sports Fund', category: 'Income', amount: '₱10,000' },
    { date: '2024-12-04', description: 'Electricity Bill Payment', category: 'Expense', amount: '₱8,000' },
    { date: '2024-12-03', description: 'Donation for School Development', category: 'Income', amount: '₱20,000' },
    { date: '2024-12-02', description: 'Teacher Salary Payment', category: 'Expense', amount: '₱50,000' },
    { date: '2024-12-01', description: 'Canteen Revenue', category: 'Income', amount: '₱12,000' },
    ...Array.from({ length: 30 }, (_, i) => ({
        date: `2024-12-${String(Math.max(1, 30 - i)).padStart(2, '0')}`,
        description: `Sample Transaction ${i + 1}`,
        category: i % 2 === 0 ? 'Income' : 'Expense',
        amount: `₱${(i + 1) * 1000}`,
    })),
];

const rowsPerPage = 10;
let currentPage = 1;
let currentCategoryFilter = 'all';

// Render the transaction table with pagination
function renderTable(filter = 'all', page = 1) {
    const tbody = document.getElementById('transaction-tbody');
    tbody.innerHTML = '';

    // Filter transactions based on the category
    const filteredTransactions = filter === 'all'
        ? transactions
        : transactions.filter(transaction => transaction.category.toLowerCase() === filter);

    // Pagination logic
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

    // Generate table rows
    paginatedTransactions.forEach(transaction => {
        const row = `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>${transaction.amount}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });

    renderPagination(filteredTransactions.length, page);
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
            renderTable(currentCategoryFilter, currentPage);
        };
        paginationContainer.appendChild(button);
    }
}

// Filter transactions by category
function filterTransactionsByCategory() {
    const categoryFilter = document.getElementById('category-filter').value.toLowerCase();
    currentCategoryFilter = categoryFilter;
    currentPage = 1; // Reset to first page after filtering
    renderTable(currentCategoryFilter, currentPage);
}

// Generate Report Function
function generateReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title for PDF
    doc.setFontSize(18);
    doc.text('Transaction History Report', 14, 20);

    // Table Headers and Data
    const headers = [['Date', 'Description', 'Category', 'Amount']];
    const filteredTransactions = currentCategoryFilter === 'all'
        ? transactions
        : transactions.filter(t => t.category.toLowerCase() === currentCategoryFilter);

    const rows = filteredTransactions.map(t => [t.date, t.description, t.category, t.amount]);

    // Use autoTable to create the table
    doc.autoTable({
        head: headers,
        body: rows,
        startY: 30,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 3,
        },
        headStyles: {
            fillColor: [13, 7, 117], // Blue theme
            textColor: [255, 255, 255], // White text
        },
    });

    // Save PDF
    doc.save('transaction-report.pdf');
}

// Initial render
renderTable(currentCategoryFilter, currentPage);
