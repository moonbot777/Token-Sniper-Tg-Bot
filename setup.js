#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Lynx Bot Setup Wizard');
console.log('========================\n');

const questions = [
  {
    name: 'BOT_TOKEN',
    question: 'Enter your Telegram Bot Token: ',
    required: true
  },
  {
    name: 'MONGO_URL',
    question: 'Enter your MongoDB connection string: ',
    required: true
  },
  {
    name: 'RPC_ENDPOINT',
    question: 'Enter your Solana RPC endpoint: ',
    required: true,
    default: 'https://api.mainnet-beta.solana.com'
  },
  {
    name: 'RPC_WEBSOCKET_ENDPOINT',
    question: 'Enter your Solana WebSocket endpoint: ',
    required: true,
    default: 'wss://api.mainnet-beta.solana.com'
  }
];

const envVars = {};

function askQuestion(index) {
  if (index >= questions.length) {
    createEnvFile();
    return;
  }

  const question = questions[index];
  rl.question(question.question, (answer) => {
    if (answer.trim() === '' && question.default) {
      envVars[question.name] = question.default;
    } else if (answer.trim() === '' && question.required) {
      console.log('❌ This field is required. Please enter a value.');
      askQuestion(index);
      return;
    } else {
      envVars[question.name] = answer.trim();
    }
    askQuestion(index + 1);
  });
}

function createEnvFile() {
  const envContent = `# Bot Configuration
BOT_TOKEN=${envVars.BOT_TOKEN}
MONGO_URL=${envVars.MONGO_URL}

# Solana Configuration
RPC_ENDPOINT=${envVars.RPC_ENDPOINT}
RPC_WEBSOCKET_ENDPOINT=${envVars.RPC_WEBSOCKET_ENDPOINT}
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
`;

  fs.writeFileSync('.env', envContent);
  
  console.log('\n✅ .env file created successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Review and modify the .env file if needed');
  console.log('2. Install dependencies: npm install');
  console.log('3. Start the bot: npm run dev');
  console.log('\n⚠️  Important: Never share your .env file or private keys!');
  
  rl.close();
}

askQuestion(0);
