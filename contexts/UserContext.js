import { useContext, createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store'
import { TOKEN_KEY, USER_API } from "@/lib/config"

 export const API_URL = USER_API
 const UserContext = createContext({});

export const useUser = () =>{
    return useContext(UserContext)
}


 const UseProvider = ({children}) =>{

    const [userState, setUserState] = useState({
        user: null
    });

    

const getUserInfo = async() =>{
    try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY)
        if (!token) {
            console.warn('No token found for fetching user info');
            return null;
        }
        const response = await fetch(`${API_URL}/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        setUserState({ user: result });
        console.log('User info response:', JSON.stringify(result, null, 2));
        return result;
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
}
    const values = {
        userState,
        getUserInfo
    }

    return(
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
 }

export default UseProvider;