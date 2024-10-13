import React, { useState, useEffect } from 'react';
import { getBalance, sendTransaction } from '../services/walletService';

const Wallet = ({ wallet, onLogout }) => {
    const [balance, setBalance] = useState(null);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const fetchBalance = async () => {
            const balance = await getBalance(wallet.address);
            setBalance(balance);
        };
        fetchBalance();
    }, [wallet.address]);

    const handleSend = async () => {
        try {
            const txHash = await sendTransaction(wallet.privateKey, recipient, amount);
            alert(`Transaction sent: ${txHash}`);
            const newBalance = await getBalance(wallet.address);
            setBalance(newBalance);
        } catch (error) {
            alert(`Error sending transaction: ${error.message}`);
        }
    };

    return (
        <div className="wallet">
            <h2>Your Wallet</h2>
            <p>Address: <span className="address">{wallet.address}</span></p>
            <p>Balance: <span className="balance">{balance} ETH</span></p>
            <h3>Send Transaction</h3>
            <div className="form">
                <input
                    className="input"
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Recipient Address"
                />
                <input
                    className="input"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount in ETH"
                />
                <button className="button" onClick={handleSend}>Send</button>
            </div>
            <button className="button" onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Wallet;