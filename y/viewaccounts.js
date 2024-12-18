// Reference to the Firebase database
const dbRef = firebase.database().ref("accounts");

// Function to fetch and display account data
function fetchAndDisplayAccounts() {
  const tbody = document.getElementById("account-tbody");
  tbody.innerHTML = ""; // Clear existing table rows

  dbRef.once("value")
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const accountData = childSnapshot.val();
        const row = document.createElement("tr");

        // Create table cells
        row.innerHTML = `
          <td>${accountData.userId || "N/A"}</td>
          <td>${accountData.fullName || "N/A"}</td>
          <td>${accountData.email || "N/A"}</td>
          <td>${accountData.userLevel || "N/A"}</td>
          <td>${accountData.status || "N/A"}</td>
          <td>
            <button onclick="editAccount('${childSnapshot.key}')">Edit</button>
            <button onclick="deleteAccount('${childSnapshot.key}')">Delete</button>
          </td>
        `;

        // Append row to table body
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching accounts:", error);
    });
}

// Call the function when the page loads
window.onload = fetchAndDisplayAccounts;

// Optional: Functions for edit and delete actions
function editAccount(accountId) {
  alert(`Edit functionality for Account ID: ${accountId} is not yet implemented.`);
}

function deleteAccount(accountId) {
  const confirmed = confirm("Are you sure you want to delete this account?");
  if (confirmed) {
    dbRef.child(accountId).remove()
      .then(() => {
        alert("Account deleted successfully!");
        fetchAndDisplayAccounts(); // Refresh the table
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
      });
  }
}

function filterTableByUserLevel() {
    const filter = document.getElementById("user-level-filter").value;
    const tbody = document.getElementById("account-tbody");
    const rows = tbody.getElementsByTagName("tr");
  
    for (let i = 0; i < rows.length; i++) {
      const userLevel = rows[i].getElementsByTagName("td")[3].textContent;
      if (filter === "all" || userLevel === filter) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  