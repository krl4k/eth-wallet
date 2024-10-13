import React, { useState, useEffect } from 'react';
import CreateWallet from './components/CreateWallet';
import Login from './components/Login';
import Wallet from './components/Wallet';
import { getStoredWallet, clearStoredWallet } from './services/walletService';
import './App.css';

const App = () => {
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const storedWallet = getStoredWallet();
        if (storedWallet) {
            setWallet(storedWallet);
        }
    }, []);

    const handleLogin = (loggedInWallet) => {
        setWallet(loggedInWallet);
    };

    const handleLogout = () => {
        clearStoredWallet();
        setWallet(null);
    };

    return (
        <div className="app">
            <h1 className="title">Ethereum Wallet</h1>
            {wallet ? (
                <Wallet wallet={wallet} onLogout={handleLogout} />
            ) : (
                <div>
                    <CreateWallet />
                    <Login onLogin={handleLogin} />
                </div>
            )}
        </div>
    );
};

export default App;