import { createContext , useContext, useState} from "react";


const AuthContext = createContext();


const AuthProvider = ({children}) =>{

    const [token , setToken] = useState(localStorage.getItem("token"));
    const [userId , setId] = useState("");


    const IdSet = (id)=>{
        setId(id);
    }


    const isLogin = !! token;

    const Servertoken=(token)=>{
        return localStorage.setItem("token" , token);
    }

    const RemoveToken = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const GetToken = () =>{
        return localStorage.getItem("token");
    }


    return <AuthContext.Provider value={{ Servertoken , RemoveToken , isLogin , userId , IdSet , token , GetToken}}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () =>{
    const a = useContext(AuthContext);
    return a;
}



export {AuthContext , AuthProvider , useAuth};