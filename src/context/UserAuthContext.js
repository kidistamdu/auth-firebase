import {createContext, useContext, useState, useEffect} from "react" 
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser

} from "firebase/auth"
import { auth } from "../context/firebase-config"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
           unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: (email, password) => {
                    return signInWithEmailAndPassword(auth, email, password);
                },
                register: (email, password) => {
                    return createUserWithEmailAndPassword(auth, email, password);
                },
                logout: () => {}
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(AuthContext);
}