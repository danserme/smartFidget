# Project Name
This project is a playground for testing and development of a blockchain-based Smart Fidget device and frontend app for it.

## Setup
Clone the repo

```bash
cd frontend
npm install --save ethers dotenv johnny-five socket.io vite app-root-path url http express socket.io-client body-parser
```

- Install Live Server Extension on your VS Code
- Open index.html with Live Server in browser

*Note: the browser must have a Wallet installed with a testnet Matic on balance*
### Wallet Setup
1. Install Metamask plugin
2. Create an account
3. Switch to Polygon Mumbai
    - Head over to https://metaschool.so/rpc/mumbai.
    - Click on first “Add to Metamask” button.
    - Click on “Approve” and then “Switch network”.
4. Get fake MATIC
    - Copy your account address from MetaMask.
    - Head over to https://mumbaifaucet.com/.
    - Paste your wallet address.
    - Click on “Send me MATIC”. You will receive 0.2 MATIC.
5. Now you can use your Metamask to test.

## Arduino Setup
1. Install Firmata Library through the explorer of Arduino IDE.
2. Go to Examples > Firmata > StandardFirmata, open this Example and Upload it to Arduino.
3. Assemble hardware.
    - Connect btn to pin 2.
    - Connect potentiometer to pin A0.
    - Connect led to pin 11.

*Note: if you bare using Arduino R4, please, update your /Users/user/Documents/Arduino/libraries/Firmata/Boards.h file to the one included in frontend folder.*

# Start the project
```bash
node index.js
```