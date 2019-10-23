(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyDCMoVwdT_i0RwMMlrJLsu-r3Wo-mYSD8I",
        authDomain: "demoproject1-8d939.firebaseapp.com",
        databaseURL: "https://demoproject1-8d939.firebaseio.com",
        projectId: "demoproject1-8d939",
        storageBucket: "demoproject1-8d939.appspot.com",
        messagingSenderId: "280494245704",
        appId: "1:280494245704:web:26959889edd13aaac7957d",
        measurementId: "G-DS1293QPPK"
    };

    // Initialize Firebase
    firebase.initializeAPP(firebaseConfig);

    // Gettting Elements
    const email = document.getElementsByClassName('email');
    const password = document.getElementsByClassName('password'); 
    const logIn = document.getElementsByClassName('logIn');
    const SignUp = document.getElementsByClassName('SignUp');
    const logOut = document.getElementsByClassName('logOut');

    // logIn Event
    logIn.addEventListener(`click` , e => {
    // getting email and pass....
    const email =  email.value;
    const password =  email.password;
    const auth =  email.auth();
    });
    // signIn Event
    auth().signInWithEmailAndPassword(email, password).catch(e => console.log(e.message));

    // signUp Event
    SignUp.addEventListener(`click` , e => {
    // getting email and pass....
    const email =  email.value;
    const password =  email.password;
    const auth =  email.auth();

    // signUp
    auth().createUserWithEmailAndPassword(email, password).catch(e => console.log(e.message));

    });
    
    // logOut event
    logOut.addEventListener(`click` , e => {
        firebase.auth().signOut();
    })

    //realtime listener
    firebase.auth().onAuthStateChanged(firrebaseUser => {
        if(firrebaseUser){
            console.log(firrebaseUser);
            logOut.classList.remove(`hide`);
        }
        else{
            console.log(`not logged in!!`);
            logOut.classList.add(`hide`);
        }

    });

});