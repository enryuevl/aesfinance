
  // Import the functions you need from the Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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
  const analytics = getAnalytics(app);

  // Initialize Firebase Authentication
  const auth = getAuth(app);

  // Initialize Firestore Database
  const db = getFirestore(app);

  const submit = document.getElementById("login");

    submit.addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email and password inputs
    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        const usersQuery = query(collection(firestore, "users"), where("email", "==", email));
        const adminsQuery = query(collection(firestore, "admins"), where("email", "==", email));
    
        const [usersSnapshot, adminsSnapshot] = await Promise.all([
            getDocs(usersQuery),
            getDocs(adminsQuery),
        ]);
    
        console.log("Users Query Result:", usersSnapshot.docs.map(doc => doc.data()));
        console.log("Admins Query Result:", adminsSnapshot.docs.map(doc => doc.data()));
    
        if (!usersSnapshot.empty) {
            console.log("User exists in users collection");
            alert("Login successful! Redirecting to user dashboard...");
            window.location.href = "aesuserdashboard.html";
        } else if (!adminsSnapshot.empty) {
            console.log("User exists in admins collection");
            alert("Login successful! Redirecting to admin dashboard...");
            window.location.href = "aesdashboard.html";
        } else {
            console.log("Email not found in either collection");
            alert("No valid role found. Please contact support.");
        }
    } catch (error) {
        console.error("Error during login or Firestore query:", error);
        alert("Login unsuccessful, please try again.");
    }
});    