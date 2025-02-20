# EasyA Layer UI React Starter

A starter template for building Web3 applications using the @easya/layer-ui-react library. This template provides pre-built components and state management for interacting with blockchain networks, currently supporting XRPL with Aptos support coming soon.


## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v16 or higher)
- npm or yarn
- A compatible wallet (currently supports Crossmark for XRPL)

## Getting Started 

1. Clone the repository:
```bash
git clone https://github.com/EasyA-Tech/easya-layer-starter-react
cd easya-layer-starter-react
```

2. Install dependencies:
```bash
npm install
```


3. Start the development server:
```bash
npm start
```



## Components Overview

### BlockchainProvider

The root component that manages blockchain connection and state. Wrap your application with this component to enable blockchain functionality:

```jsx
<BlockchainProvider
    config={{
        network: 'testnet',
        blockchain: 'xrpl',
        wallet: 'crossmark'
    }}
>
    {/* Your app content */}
</BlockchainProvider>
```


### ConnectButton
A button component that handles wallet connection/disconnection. Shows different states based on connection status.

### AddressDisplay
Displays the connected wallet's address with copy and refresh functionality.

### BalanceDisplay
Shows the current balance of the connected wallet.

### TransactionForm (Send Token)

Allows users to send tokens to other addresses:
- Select asset from dropdown
- Enter recipient address
- Specify amount
- Execute transaction

### IssueTokenForm

Enables token issuance on the blockchain:
- Set currency code
- Specify amount to issue
- Option to generate cold wallet
- Complete issuance process

### TrustLineForm

Manages trust lines between accounts:
- Enter currency code
- Specify issuer address
- Set trust line limit
- Create/modify trust lines

### BalancesDisplay

Shows all available token balances for the connected wallet:
- Native token balance (XRP)
- Custom token balances
- Refresh functionality
- Displays issuer information and token hex values