import { ethers } from 'ethers';

const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;
const NETWORK = process.env.REACT_APP_NETWORK;

const getProvider = () => {
    return new ethers.providers.JsonRpcProvider(`https://${NETWORK}.infura.io/v3/${INFURA_PROJECT_ID}`);
};

export const generateMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase;
};

export const loginWithMnemonic = (mnemonic) => {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    };
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