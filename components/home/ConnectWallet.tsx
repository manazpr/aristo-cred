import { FormControlLabel, Switch,Tooltip } from '@material-ui/core';
import {
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '../Wallets';
import { useLocalStorage, WalletProvider } from '@solana/wallet-adapter-react';
import {
   
    getPhantomWallet,
   
} from '@solana/wallet-adapter-wallets';
import { useSnackbar } from 'notistack';
import{ useCallback, useMemo } from 'react';

const WalletConnect = () => {
    const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
        ],
        []
    );


    return (
        <WalletProvider wallets={wallets} autoConnect={autoConnect}>
            <WalletDialogProvider>
                                <WalletMultiButton />
                                <WalletDisconnectButton /> 
                                
            </WalletDialogProvider>
        </WalletProvider>
    );
};

export default WalletConnect;
