"use client"

import { createContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('/auth/me')
                .then(response => setUser(response.data))
                .catch(() => localStorage.removeItem('token'));
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.result);
    };

    const signup = async (email, password) => {
        const response = await axios.post('/auth/signup', { email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.result);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
