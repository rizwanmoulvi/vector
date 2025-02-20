import React, { useState, useCallback } from 'react';
import { EasyaConfig } from '@easya/layer-js/dist/core/types';
import {
    AddressDisplay,
    BalanceDisplay,
    BalancesDisplay,
    BlockchainProvider,
    ConnectButton,
    IssueTokenForm,
    TransactionForm,
    TrustLineForm
} from '@easya/layer-ui-react';

const App = () => {
    const [blockchainConfig] = useState({
        network: 'testnet',
        blockchain: 'xrpl',
        wallet: 'crossmark',
    });

    const [activeTab, setActiveTab] = useState('tokenBalances'); // Set default tab to 'tokenBalances'

    const handleTabClick = useCallback((tabName) => {
        setActiveTab(tabName);
    }, []);

    const getConfigKey = useCallback((config) => {
        return `${config.network}-${config.blockchain}-${config.wallet}`;
    }, []);

    return (
        <BlockchainProvider
            config={blockchainConfig}
            key={getConfigKey(blockchainConfig)}
        >
            <div className="app-container">
                <div className="app-bar">
                    <div>
                        <div className="app-title">VECTOR PROTOCOL</div>
                        <div className="app-subtitle">Synthetic Assets On Ripple</div>
                    </div>
                    <div className="app-bar-right">
                        <BalanceDisplay />
                        <AddressDisplay className="custom-address-display" />
                        <ConnectButton className="custom-connect-button" />
                    </div>
                </div>
                

                <div className="tab-navigation">
                   
                    <button
                        className={`tab-button ${activeTab === 'issueToken' ? 'active' : ''}`}
                        onClick={() => handleTabClick('issueToken')}
                    >
                        MINT ASSET
                    </button>
                    
                    <button
                        className={`tab-button ${activeTab === 'tokenBalances' ? 'active' : ''}`}
                        onClick={() => handleTabClick('tokenBalances')}
                    >
                        PORTFOLIO
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'trustLines' ? 'active' : ''}`}
                        onClick={() => handleTabClick('trustLines')}
                    >
                        ALLOW ASSET
                    </button>
                </div>

                <div className="content-wrapper">
                    <div className="card-content">
                        <div className="content-section">
                            {activeTab === 'sendToken' && (
                                <TransactionForm />
                            )}
                            {activeTab === 'issueToken' && (
                                <IssueTokenForm />
                            )}
                            {activeTab === 'trustLines' && (
                                <TrustLineForm />
                            )}
                            {activeTab === 'tokenBalances' && (
                                <BalancesDisplay />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </BlockchainProvider>
    );
};

export default App;