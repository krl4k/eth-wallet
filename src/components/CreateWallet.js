import React, { useState } from 'react';
import { generateMnemonic } from '../services/walletService';

const CreateWallet = () => {
    const [mnemonic, setMnemonic] = useState('');

    const handleCreateWallet = () => {
        const newMnemonic = generateMnemonic();
        setMnemonic(newMnemonic);
    };

    return (
        <div className="create-wallet">
            <h2>Create New Wallet</h2>
            <button className="button" onClick={handleCreateWallet}>Generate Seed Phrase</button>
            {mnemonic && (
                <div>
                    <p>Here is your seed phrase. Please save it securely:</p>
                    <p className="mnemonic">{mnemonic}</p>
                    <p>Use this seed phrase to access your wallet.</p>
                </div>
            )}
        </div>
    );
};

export default CreateWallet;