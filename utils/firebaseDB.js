import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBnLSO19BNz78KVKa3xPELQrnh_0FQRLew",
	authDomain: "mcmex-3bd71.firebaseapp.com",
    databaseURL: "https://mcmex-3bd71-default-rtdb.firebaseio.com",
	projectId: "mcmex-3bd71",
	storageBucket: "mcmex-3bd71.appspot.com",
	messagingSenderId: "314483590761",
	appId: "1:314483590761:web:dfcb3b70df779b5abcc4f8",
	measurementId: "G-G1N0P01QR8",
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;