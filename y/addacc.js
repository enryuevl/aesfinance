
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
 
 // Optional: Analytics initialization only if required
 // const analytics = getAnalytics(app);
 
 // Initialize Firebase Authentication
 const auth = getAuth(app);
 
 // Initialize Firestore Database
 const db = getFirestore(app);
 
 
function resetInputFields() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    
}


const submit = document.getElementById("submit");
 submit.addEventListener("click", function (event) {
     event.preventDefault(); // Prevent default form submission
 
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const fname = document.getElementById("firstname").value;
     const lname = document.getElementById("lastname").value;
     
 
     // Validate inputs
     if (!email || !password || !fname || !lname) {
         alert("Please fill in all the fields.");
         return;
     }

     
    
 
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         alert("Please enter a valid email address.");
         return;
     }
 
     // Create the user with email and password
     createUserWithEmailAndPassword(auth, email, password)
         .then(async (userCredential) => {
             const user = userCredential.user;
 
             // Update the user's profile
             // await updateProfile(user, {
             //     displayName: `${fname} ${lname}`,
             // });
             alert("Creating Account. Please Wait");
             // Store user data in Firestore
             await addDoc(collection(db, "admins"), {
                 fname,
                 lname,
                 email,
                 createdAt: serverTimestamp(),
             });
 
             alert("Account created successfully!");
             
         })
            .catch((error) => {
                console.error("Error creating user:", error);
                alert("Error creating account. Please try again.");
        });
 });