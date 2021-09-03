
import { Button } from '@material-ui/core';
import React, {FC, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, Keypair, SystemProgram, Transaction, sendAndConfirmTransaction, clusterApiUrl } from '@solana/web3.js';

const SECRET_KEY = new Uint8Array([
    37, 21, 197, 185, 105, 201, 212, 148, 164, 108, 251, 159, 174, 252, 43, 246,
    225, 156, 38, 203, 99, 42, 244, 73, 252, 143, 34, 239, 15, 222, 217, 91, 132,
    167, 105, 60, 17, 211, 120, 243, 197, 99, 113, 34, 76, 127, 190, 18, 91, 246,
    121, 93, 189, 55, 165, 129, 196, 104, 25, 157, 209, 168, 165, 149,
]);

const SendReward = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const { publicKey } = useWallet();
    
    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            return;
        }

        try{
        const from = Keypair.fromSecretKey(SECRET_KEY);
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: publicKey,
                lamports: 100,
            })
        );

        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );
        console.log("SIGNATURE", signature);
        } catch(error:any){return;}
    
}, [publicKey]);
    
        return (
            <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
                Burn Sol
            </Button>
        );

        };

export default SendReward;