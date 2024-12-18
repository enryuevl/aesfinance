
  // Import the functions you need from the Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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


  const submit = document.getElementById("submit");

    submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("repeatpassword").value;

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

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Account successfully created
            const user = userCredential.user;
            alert("Account created successfully! Redirecting to login page...");
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
            // Handle errors during account creation
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error (${errorCode}): ${errorMessage}`);
            alert(`Error: ${errorMessage}`);
        });
});
