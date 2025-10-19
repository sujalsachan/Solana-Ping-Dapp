# Solana Ping dApp (Next.js)

A Next.js dApp that connects a Solana wallet and sends a minimal “Ping” instruction to a public Devnet program. It uses `@solana/wallet-adapter-react` for wallet connectivity and `@solana/web3.js` for transaction construction and sending. [web:2][web:7]

## Features
- Connect a Solana wallet via Wallet Adapter UI components. [web:2]
- Send a `TransactionInstruction` to program `ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa`. [web:2]
- Write to the data account `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`. [web:2]
- Built with Next.js bootstrapped from `create-next-app`. [web:21]

## Tech Stack
- Next.js for the frontend framework and dev server. [web:21]
- `@solana/wallet-adapter-react` and `@solana/wallet-adapter-react-ui` for wallet state and UI. [web:2]
- `@solana/web3.js` for `Transaction`, `PublicKey`, and `TransactionInstruction`. [web:7]

## Prerequisites
- Node.js LTS and a package manager (npm or yarn). [web:21]
- A Solana wallet that supports Wallet Standard (e.g., Phantom, Solflare) and is set to Devnet. [web:2]
- Some Devnet SOL for fees (use a Devnet faucet). [web:5]

## Getting Started
1. Install dependencies:
   - `npm install` or `yarn` [web:21]
2. Run the development server:
   - `npm run dev` or `yarn dev` [web:21]
3. Open `http://localhost:3000` and connect your wallet using the provided button. [web:2]

## App Wiring
Wrap your app with Solana providers to enable hooks such as `useConnection` and `useWallet`. Example structure with Devnet endpoint:
- `ConnectionProvider` for RPC endpoint. [web:2]
- `WalletProvider` with Wallet Standard-compatible wallets. [web:2]
- `WalletModalProvider` and `WalletMultiButton` for a ready UI. [web:2]

## PingButton Component
The `PingButton`:
- Reads `connection`, `publicKey`, and `sendTransaction` from Wallet Adapter hooks. [web:2]
- Builds an instruction with:
  - `programId = ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa` [web:2]
  - `keys = [{ pubkey: Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod, isSigner: false, isWritable: true }]` [web:2]
  - No instruction data (empty) [web:7]
- Adds the instruction to a `Transaction` and calls `sendTransaction` for user approval in their wallet. [web:7]

## Example Flow
- Click "Ping!" to open the wallet approval modal. [web:2]
- Approve the transaction; the signature will be logged in the console. [web:7]
- View the transaction on a Solana explorer by pasting the signature. [web:7]

## Configuration
- Network: Devnet via `clusterApiUrl('devnet')` or custom RPC endpoint. [web:2]
- UI: Include `@solana/wallet-adapter-react-ui/styles.css`. [web:2]
- Providers should wrap the app’s root layout or `_app.tsx`. [web:5]

## Scripts
- `dev`: Run Next.js development server. [web:21]
- `build`: Build the production bundle. [web:21]
- `start`: Start the production server. [web:21]

## Troubleshooting
- “Wallet not connected”: Ensure the app is wrapped with the providers and the wallet is connected. [web:2]
- “Connection unavailable”: Verify the RPC endpoint and network selection (Devnet). [web:5]
- Transaction fails: Ensure the data account is valid on the selected cluster and that the wallet has Devnet SOL for fees. [web:7]

## Learn More
- Wallet Adapter React cookbook: provider setup and UI components. [web:5]
- Interact with wallets course (connection, modal, sending). [web:2]
- Transactions and instructions overview in Solana docs. [web:7]

## License
MIT. Use at your own risk; Devnet program addresses may change or be rate-limited by public RPCs. [web:7]
