<<<<<<< HEAD
 // Import the Firebase functions you need from the CDN
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
 
 // Optional: Only import Analytics if needed
 // import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCVv8SMFHuzf4VAKkFrNNJ2mGX0_6taViA",
   authDomain: "aes-financial-management-sys.firebaseapp.com",
   projectId: "aes-financial-management-sys",
   storageBucket: "aes-financial-management-sys.appspot.com",
   messagingSenderId: "371761913826",
   appId: "1:371761913826:web:4456b561c6ab78b98ca3bb",
   measurementId: "G-8LDE2T1PJW"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch and display data from Firestore
async function loadAccounts() {
    const accountsTableBody = document.getElementById("account-tbody");
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = `
            <tr>
                <td>${data.fname}</td>
                <td>${data.lname}</td>
                <td>${data.email}</td>
                <td>${data.createdAt?.toDate().toLocaleString() || "N/A"}</td>
            </tr>
        `;
        accountsTableBody.innerHTML += row;
    });
}

// Load accounts on page load
loadAccounts().catch((error) => {
    console.error("Error loading accounts:", error);
});
=======
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
  
>>>>>>> d3662b2ab78169edc72b60924eea31a887033889
