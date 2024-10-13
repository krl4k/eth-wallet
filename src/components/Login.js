import React, { useState } from 'react';
import { loginWithMnemonic } from '../services/walletService';

const Login = ({ onLogin }) => {
    const [mnemonic, setMnemonic] = useState('');

    const handleLogin = () => {
        try {
            const wallet = loginWithMnemonic(mnemonic);
            onLogin(wallet);
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    return (
        <div className="login">
            <h2>Login to Wallet</h2>
            <textarea
                className="input"
                value={mnemonic}
                onChange={(e) => setMnemonic(e.target.value)}
                placeholder="Enter your seed phrase"
                rows="3"
            />
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;