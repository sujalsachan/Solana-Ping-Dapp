import { FC, useState } from 'react'
import styles from '../styles/PingButton.module.css'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction } from '@solana/web3.js';

export const PingButton: FC = () => {

	const PROGRAM_ID = 'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa'
	const DATA_ACCOUNT_PUBKEY = 'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod'

	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

    const onClick = async () => {
		if( !connection ) {
			console.error("Wallet not connected");
			return;
		}
		if( !publicKey ) {
			console.error("Connection unavaliable");
			return;
		}

		try {

			console.log("Wallet Address : ", publicKey.toBase58());
			const programId = new PublicKey(PROGRAM_ID);
			const programDataAccount = new PublicKey(DATA_ACCOUNT_PUBKEY);
			const transaction = new Transaction();

			const instruction = new TransactionInstruction({
				keys: [
					{
						pubkey: programDataAccount,
						isSigner:false,
						isWritable: true,
					},
				],
				programId,
			});

			transaction.add(instruction);

			console.log("Awaiting User Confirmation");

			const signature = await sendTransaction(transaction, connection);
			console.log(`Transaction Signature : ${signature}`);
			
			console.log("Transaction Successful.");
		}

		catch (error) {
			console.log(`Transaction Failed : ${error}`);
		}
    };
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}

