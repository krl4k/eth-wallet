import { ethers } from 'ethers';

const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;
const NETWORK = process.env.REACT_APP_NETWORK;
const WALLET_KEY = 'ETHEREUM_WALLET';

const getProvider = () => {
    return new ethers.providers.JsonRpcProvider(`https://${NETWORK}.infura.io/v3/${INFURA_PROJECT_ID}`);
};

export const generateMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase;
};

export const loginWithMnemonic = (mnemonic) => {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const walletData = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    };
    localStorage.setItem(WALLET_KEY, JSON.stringify(walletData));
    return walletData;
};

export const getStoredWallet = () => {
    const storedWallet = localStorage.getItem(WALLET_KEY);
    return storedWallet ? JSON.parse(storedWallet) : null;
};

export const clearStoredWallet = () => {
    localStorage.removeItem(WALLET_KEY);
};

export const getBalance = async (address) => {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
};

export const sendTransaction = async (privateKey, to, amount) => {
    const provider = getProvider();
    const wallet = new ethers.Wallet(privateKey, provider);

    const tx = await wallet.sendTransaction({
        to: to,
        value: ethers.utils.parseEther(amount)
    });

    return tx.hash;
};