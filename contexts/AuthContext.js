import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { TOKEN_KEY, AUTH_API } from "@/lib/config";

export const API_URL = AUTH_API;
const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    user: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stoerd:", token);

      if (token) {
        const headers = {
          "          Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        };
      }
      setAuthState({
        token: token,
        authenticated: true,
      });
    };
  }, []);

  const register = async (username, email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      });

      return await response.json();
    } catch (e) {
      return { error: true, msg: e.message };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();

      console.log("Login response:", JSON.stringify(result, null, 2));

      if (!result.success || !result.data?.token) {
        console.warn("Login failed:", result);
        return result;
      }

      // Store token securely
      const tokenToStore = result.data.token;
      await SecureStore.setItemAsync(TOKEN_KEY, tokenToStore);
      console.log("Token stored successfully");

      // Update auth state
      setAuthState({
        token: result.data.token,
        authenticated: true,
        user: result.data,
      });

      return result;
    } catch (e) {
      console.error("Login error:", e);
      return {
        success: false,
        message: e.message || "Network error or unexpected issue.",
      };
    }
  };

  const logout = async () => {
    //Delete token from secure storage
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    // update http Headers
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
      user: null,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
