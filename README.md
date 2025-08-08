# 🚀 Lynx - Advanced Solana Trading Bot

A powerful Telegram bot for automated trading on Solana with pump.fun sniper functionality, copy trading, and multi-wallet management.

## 🌟 Features

### 🎯 **Pump.fun Sniper Bot**
- **Real-time Token Detection**: Monitors new token listings on pump.fun
- **Jito Integration**: Advanced MEV protection and faster transaction execution
- **Multi-Wallet Support**: Use up to 20 wallets for sniping operations
- **Auto Buy/Sell**: Configurable automatic trading with take profit and stop loss
- **Slippage Control**: Customizable buy/sell slippage settings
- **Filter System**: Advanced token filtering based on market cap, liquidity, and other metrics

### 📋 **Copy Trading Bot**
- **Target Wallet Monitoring**: Follow specific wallet addresses
- **Real-time Copying**: Automatically copy trades from target wallets
- **Multi-Wallet Distribution**: Distribute copied trades across multiple wallets
- **Risk Management**: Configurable copy trading parameters

### 💼 **Wallet Management**
- **Main Wallet**: Primary wallet for trading operations
- **Multiple Wallets**: Support for up to 20 additional wallets
- **Import/Export**: Easy wallet import and export functionality
- **Balance Tracking**: Real-time SOL balance monitoring
- **Secure Storage**: Encrypted wallet storage in MongoDB

### ⚙️ **Advanced Features**
- **MEV Protection**: Jito integration for transaction protection
- **Volume Trading**: Advanced volume-based trading strategies
- **Limit Orders**: Automated limit order functionality
- **Position Management**: Track and manage open positions
- **Referral System**: Built-in referral tracking

## 🛠 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Solana RPC endpoint
- Telegram Bot Token

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/moonbot777/Token-Sniper-Tg-Bot.git
cd Token-Sniper-Tg-Bot
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Quick Setup (Recommended)**
```bash
npm run setup
```
This will guide you through the setup process and create your `.env` file automatically.

4. **Manual Environment Configuration**
Alternatively, create a `.env` file manually with the following variables:

```env
# Bot Configuration
BOT_TOKEN=your_telegram_bot_token
MONGO_URL=your_mongodb_connection_string

# Solana Configuration
RPC_ENDPOINT=your_solana_rpc_endpoint
RPC_WEBSOCKET_ENDPOINT=your_solana_websocket_endpoint
COMMITMENT=confirmed
COMMITMENT_LEVEL=confirmed
SNIPING_COMMITMENT=confirmed

# Trading Configuration
WALLET_NUM=20
SELL_PERCENT=50
TX_FEE=0.000005
ADDITIONAL_FEE=0.000001

# Sniper Settings
IS_RANDOM=true
SWAP_ROUTING=true
AUTO_SELL=true
AUTO_BUY_DELAY=1000
AUTO_SELL_DELAY=5000
MAX_BUY_RETRIES=3
MAX_SELL_RETRIES=3
BUY_SLIPPAGE=10
SELL_SLIPPAGE=10
TAKE_PROFIT=50
STOP_LOSS=20

# Advanced Sniper Configuration
ONE_TOKEN_AT_A_TIME=true
COMPUTE_UNIT_LIMIT=120000
COMPUTE_UNIT_PRICE=744452
PRE_LOAD_EXISTING_MARKETS=true
CACHE_NEW_MARKETS=true
TRANSACTION_EXECUTOR=default
CUSTOM_FEE=0.000001
QUOTE_MINT=WSOL
PRICE_CHECK_INTERVAL=1000
PRICE_CHECK_DURATION=30000
FILTER_CHECK_INTERVAL=1000
FILTER_CHECK_DURATION=30000
CONSECUTIVE_FILTER_MATCHES=3
CHECK_IF_PUMP_FUN=true
CHECK_IF_SOCIALS=true
MIN_MARKET_CAP=1000
MAX_MARKET_CAP=1000000
USE_SNIPE_LIST=false
SNIPE_LIST_REFRESH_INTERVAL=300000

# Jito Configuration (Optional)
JITO_KEY=your_jito_key
BLOCKENGINE_URL=your_blockengine_url
JITO_FEE=0.000001
```

5. **Run the bot**
```bash
# Development mode
npm run dev

# Production mode
npm start

# Test sniper functionality
npm run test-sniper
```

## 📱 Usage

### Getting Started

1. **Start the bot** by sending `/start` to your Telegram bot
2. **Set up your main wallet** - The bot will generate a new wallet or you can import an existing one
3. **Add SOL** to your wallet address for trading
4. **Configure your trading settings** in the settings menu

### Main Features

#### 🎯 Sniper Bot
- **Add Target Tokens**: Send token addresses to monitor
- **Configure Settings**: Set buy amount, slippage, and other parameters
- **Start Sniping**: Activate the sniper bot to monitor new listings
- **Multi-Wallet Support**: Use multiple wallets for increased success rate

#### 📋 Copy Trading
- **Set Target Wallet**: Add wallet addresses to copy trades from
- **Configure Copy Settings**: Set copy amount and risk parameters
- **Start Copy Trading**: Activate copy trading functionality

#### 💼 Wallet Management
- **Import Wallets**: Add existing wallets using private keys
- **Create New Wallets**: Generate new wallets for trading
- **Manage Balances**: Monitor SOL balances across all wallets
- **Delete Wallets**: Remove wallets from your account

### Commands

| Command | Description |
|---------|-------------|
| `/start` | Initialize bot and show main dashboard |
| `🟢 Buy` | Buy tokens manually |
| `🔴 Sell` | Sell tokens from your portfolio |
| `🎯 Sniper` | Access sniper bot settings |
| `📋 Copy Trade` | Access copy trading settings |
| `💳 Manage Wallets` | Manage your wallets |
| `⚙️ Settings` | Configure bot settings |

## 🔧 Configuration

### Sniper Settings
- **Buy Amount**: Amount of SOL to spend per trade
- **Slippage**: Maximum acceptable slippage percentage
- **Take Profit**: Percentage for automatic profit taking
- **Stop Loss**: Percentage for automatic loss protection
- **Auto Buy Delay**: Delay before executing buy orders
- **Auto Sell Delay**: Delay before executing sell orders

### Copy Trading Settings
- **Target Wallets**: List of wallet addresses to copy from
- **Copy Amount**: Amount to copy per trade
- **Risk Management**: Maximum loss limits
- **Delay Settings**: Time delays for copy execution

### Wallet Settings
- **Main Wallet**: Primary trading wallet
- **Additional Wallets**: Up to 20 additional wallets for trading
- **Balance Alerts**: Low balance notifications
- **Security**: Private key encryption and storage

## 🏗 Architecture

### Project Structure
```
├── commands/          # Bot command handlers
├── module/           # Core trading modules
│   ├── sniping/     # Sniper bot functionality
│   └── volume/      # Volume trading features
├── database/         # Database models and helpers
├── config/          # Configuration files
├── constants/       # Application constants
├── utils/           # Utility functions
└── index.ts         # Main bot entry point
```

### Key Components

#### Sniper Module (`module/sniping/`)
- **Real-time Monitoring**: Listens for new token listings
- **Jito Integration**: Advanced transaction execution
- **Filter System**: Token filtering and validation
- **Auto Trading**: Automated buy/sell execution

#### Copy Trading Module
- **Wallet Monitoring**: Tracks target wallet transactions
- **Trade Replication**: Copies trades to user wallets
- **Risk Management**: Implements safety measures

#### Database Layer (`database/`)
- **User Management**: Stores user data and settings
- **Wallet Storage**: Secure wallet information storage
- **Trade History**: Tracks all trading activities

## 🔒 Security Features

- **Private Key Encryption**: Secure storage of wallet keys
- **Jito MEV Protection**: Advanced transaction protection
- **Rate Limiting**: Prevents API abuse
- **Error Handling**: Comprehensive error management
- **Logging**: Detailed activity logging

## 📊 Performance

- **Real-time Execution**: Sub-second trade execution
- **Multi-Wallet Support**: Parallel trading across wallets
- **Jito Integration**: Faster transaction confirmation
- **Optimized RPC Usage**: Efficient blockchain interaction

## 🤝 Contributing

1. Fork the [repository](https://github.com/moonbot777/Token-Sniper-Tg-Bot)
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For support or questions, contact [@greenfoxfun](https://t.me/greenfoxfun) on Telegram.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This bot is for educational and trading purposes only. Trading cryptocurrencies involves significant risk and may result in the loss of your capital. Always do your own research and never invest more than you can afford to lose.

## 🆘 Support

- **Telegram**: [@greenfoxfun](https://t.me/greenfoxfun)
- **GitHub**: [Token-Sniper-Tg-Bot](https://github.com/moonbot777/Token-Sniper-Tg-Bot)
- **Documentation**: Check the README for setup instructions

## 🔧 Troubleshooting

### Common Issues

#### Bot Not Responding
- Check if your bot token is correct
- Ensure the bot is running without errors
- Verify MongoDB connection

#### Sniper Not Working
- Check RPC endpoint connectivity
- Verify wallet has sufficient SOL balance
- Review sniper settings in configuration

#### Database Connection Issues
- Verify MongoDB connection string
- Check network connectivity
- Ensure MongoDB service is running

#### Transaction Failures
- Check wallet balance
- Verify slippage settings
- Review transaction fees

### Getting Help

If you encounter issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Contact [@greenfoxfun](https://t.me/greenfoxfun) on Telegram for support

## 🔄 Updates

Stay updated with the latest features and improvements by checking the [repository](https://github.com/moonbot777/Token-Sniper-Tg-Bot) regularly or following [@greenfoxfun](https://t.me/greenfoxfun) on Telegram.

---

**Built with ❤️ for the Solana community**