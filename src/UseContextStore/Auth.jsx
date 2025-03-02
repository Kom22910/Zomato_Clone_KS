import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userId, setId] = useState(localStorage.getItem("userID"));

    const Base_url = import.meta.env.VITE_APP_BACKEND_URL;


    const IdSet = (id) => {
        setId(id);
    }


    const isLogin = !!token;

    const Servertoken = (token) => {
        return localStorage.setItem("token", token);
    }

    const UserIDSet = (id) => {
        return localStorage.setItem("userID", id);
    }

    const RemoveToken = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    const RemoveUserID = () => {
        setId("");
        return localStorage.removeItem("userID");
    }

    const GetToken = () => {
        return localStorage.getItem("token");
    }



    return <AuthContext.Provider value={{ Servertoken, RemoveToken, RemoveUserID, isLogin, userId, UserIDSet, token, GetToken , Base_url }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => {
    const a = useContext(AuthContext);
    return a;
}



export { AuthContext, AuthProvider, useAuth };