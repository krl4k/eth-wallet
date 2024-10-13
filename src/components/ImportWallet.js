import React, { useState } from 'react';
import { importWallet } from '../services/walletService';

const ImportWallet = ({ onWalletImported }) => {
    const [mnemonic, setMnemonic] = useState('');

    const handleImport = () => {
        try {
            const wallet = importWallet(mnemonic);
            onWalletImported(wallet);
        } catch (error) {
            alert('Invalid mnemonic phrase');
        }
    };

    return (
        <div className="import-wallet">
            <h2>Import Wallet</h2>
            <input
                className="input"
                type="text"
                value={mnemonic}
                onChange={(e) => setMnemonic(e.target.value)}
                placeholder="Enter your mnemonic phrase"
            />
            <button className="button" onClick={handleImport}>Import</button>
        </div>
    );
};

export default ImportWallet;