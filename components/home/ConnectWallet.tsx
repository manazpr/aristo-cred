import { FormControlLabel, Switch,Tooltip } from '@material-ui/core';
import {
    WalletConnectButton,
    WalletDialogButton,
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-material-ui';
import { useLocalStorage, WalletProvider } from '@solana/wallet-adapter-react';
import {
    getLedgerWallet,
    getMathWallet,
    getPhantomWallet,
    getSolflareWallet,
    getSolflareWebWallet,
    getSolletWallet,
    getSolongWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import { useSnackbar } from 'notistack';
import{ useCallback, useMemo } from 'react';

const WalletConnect = () => {
    const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);

    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSolflareWallet(),
            getTorusWallet({
                options: {
                    clientId: 'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ',
                },
            }),
            getLedgerWallet(),
            getSolongWallet(),
            getMathWallet(),
            getSolletWallet(),
            getSolflareWebWallet(),
        ],
        []
    );


    return (
        <WalletProvider wallets={wallets} autoConnect={autoConnect}>
            <WalletDialogProvider>
                                <WalletConnectButton /> 
                                <WalletDisconnectButton /> 
                                <WalletDialogButton /> 
                                <WalletMultiButton />
                                <Tooltip title="Only runs if the wallet is ready to connect" placement="left">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name="autoConnect"
                                                color="primary"
                                                checked={autoConnect}
                                                onChange={(event, checked) => setAutoConnect(checked)}
                                            />
                                        }
                                        label="AutoConnect"
                                    />
                                </Tooltip>
            </WalletDialogProvider>
        </WalletProvider>
    );
};

export default WalletConnect;
