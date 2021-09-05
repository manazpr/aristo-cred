import {
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '../Wallets';
import { useLocalStorage, WalletProvider } from '@solana/wallet-adapter-react';
import {
   
    getPhantomWallet,
   
} from '@solana/wallet-adapter-wallets';
import{ useMemo } from 'react';

const WalletConnect = () => {
    const [autoConnect] = useLocalStorage('autoConnect', true);
    const wallet = useMemo(
        () => [
            getPhantomWallet(),
        ], []
    );


    return (
        <WalletProvider wallets={wallet} autoConnect={autoConnect}>
            <WalletDialogProvider>
                                <WalletMultiButton />
                                <WalletDisconnectButton /> 
                                
            </WalletDialogProvider>
        </WalletProvider>
    );
};

export default WalletConnect;
