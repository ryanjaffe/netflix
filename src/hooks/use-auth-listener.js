import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';

//The listener runs once to check firebase context to see if
//the user is logged in and store the user info in authUser
//locally for use.
export default function useAuthListener(){
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    );
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }
            else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        //Clean up listener so it doesn't throw errors
        return () => listener();
    }, []);
    return {user};
}