import { useContext, createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store'
import { TOKEN_KEY, USER_API } from "@/lib/config"

 export const API_URL = USER_API
 const UserContext = createContext({});

export const useUser = () =>{
    return useContext(UserContext)
}


 const UserProvider = ({children}) =>{

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

const updatePosition = async (latitude, longitude) => {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const respond = await fetch(`${API_URL}/update-position`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ latitude, longitude })
      });
      const result = await respond.json();
      console.log('Position update response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.log('Error updating position:', error.message);
    }
}

    const values = {
        userState,
        getUserInfo,
        updatePosition
    }

    return(
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
 }

export default UserProvider;