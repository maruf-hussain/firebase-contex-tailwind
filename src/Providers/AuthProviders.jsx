import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



 export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        createUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;