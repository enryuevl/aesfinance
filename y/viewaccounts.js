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
