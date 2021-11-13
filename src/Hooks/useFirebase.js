import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);

            // save user to the database
            saveUser(email, name, 'POST');

            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {}).catch(() => {});
            history.replace('/');
        }).catch(error => {
            const errorMessage = error.message;
            setAuthError(errorMessage);
        }).finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setAuthError(errorMessage);
        }).finally(() => setIsLoading(false));

    };

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch(error => {
            setAuthError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user).then(idToken => setToken(idToken));
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth]);

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
        }).finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://shrouded-caverns-69999.herokuapp.com/users', { 
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then();
    };

    useEffect(() => {
        fetch(`https://shrouded-caverns-69999.herokuapp.com/users/${ user.email }`).then(res => res.json()).then(data => setAdmin(data.admin));
    }, [user.email]);

    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        authError,
        logout
    };
};

export default useFirebase;