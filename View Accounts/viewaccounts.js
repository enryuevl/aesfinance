document.addEventListener('DOMContentLoaded', function () {
    const accountData = [
        {
            userId: 1,
            fullName: "John Doe",
            email: "johndoe@example.com",
            userLevel: "Admin",
            status: "Active"
        },
        {
            userId: 2,
            fullName: "Jane Smith",
            email: "janesmith@example.com",
            userLevel: "User",
            status: "Inactive"
        },
    ];

    const accountTbody = document.getElementById('account-tbody');

    accountData.forEach(account => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${account.userId}</td>
            <td>${account.fullName}</td>
            <td>${account.email}</td>
            <td class="status ${account.userLevel.toLowerCase()}">${account.userLevel}</td>
            <td class="status ${account.status.toLowerCase()}">${account.status}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editAccount(${account.userId})">Edit</button>
                <button class="action-btn reject-btn" onclick="deleteAccount(${account.userId})">Delete</button>
                <button class="action-btn view-btn" onclick="viewAccount(${account.userId})">View</button>
            </td>
        `;

        accountTbody.appendChild(row);
    });
});

function editAccount(userId) {
    alert(`Edit functionality triggered for User ID: ${userId}`);
    // Implement edit functionality here
}

function deleteAccount(userId) {
    if (confirm(`Are you sure you want to delete User ID: ${userId}?`)) {
        alert(`Delete functionality triggered for User ID: ${userId}`);
        // Implement delete functionality here
    }
}

function viewAccount(userId) {
    alert(`View functionality triggered for User ID: ${userId}`);
    // Implement view functionality here
}


function filterTableByUserLevel() {
    const filterValue = document.getElementById("user-level-filter").value.toLowerCase();
    const rows = document.querySelectorAll("#account-tbody tr");

    rows.forEach(row => {
        const userLevel = row.querySelector(".user-level").innerText.toLowerCase();
        if (filterValue === "all" || userLevel === filterValue) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
