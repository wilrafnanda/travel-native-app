import { createContext, useContext, useState, useEffect} from "react";
import axios from "axios"
import * as SecureStore from 'expo-secure-store'


const TOKEN_kEY = 'my-jwt'
export const API_URL = "http://localhost:5000/ap/auth/"
const AuthContext = createContext({})

export const useAuth = () =>{
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) =>{
const [authState, setAuthState] = useState({
    token: null,
    authenticated: null
});

useEffect(()=>{
    const loadToken = async () => {
        const token = await SecureStore.getItemAsync(TOKEN_kEY)
        console.log("stoerd:", token);

        if (token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        setAuthState({
            token: token,
            authenticated: true
        })
        
    }
}, [])

const register  = async(name, email , password) =>{
    try {
        return await axios.post(`${API_URL}/register`,
            {name, email, password}
        )
      } catch (e) {
        return {error: true, msg: e}
    }
};
const login = async ( email , password) =>{
    try {
        const result = await axios.post(`${API_URL}/login`,
            {email, password}
        )

        setAuthState({
            token:result.token,
            authenticated:true
        })

        axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
        await SecureStore.setItemAsync(TOKEN_kEY, result.token)

      } catch (e) {
        return {error: true, msg: e}
    }
};

const logout = async() =>{
    //Delete token from secure storage
    await SecureStore.deleteItemAsync(TOKEN_kEY)
    // update http Headers
    axios.defaults.headers.common['Authorization'] = ''
    setAuthState({
            token:null,
            authenticated:false
        })
}

    const value = {
        onRegister:register,
        onLogin: login,
        onLogout: logout,
        authState 
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}