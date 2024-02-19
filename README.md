[//]: # (SPDX-License-Identifier: CC-BY-4.0)

# Car Sharing : 24h project group🚗

This project aims to develop a decentralized car sharing system utilizing blockchain technology. By leveraging Hyperledger Fabric, the system ensures secure, transparent, and efficient transactions between car owners and users.

Other participant : [GiorgioSaldana](https://github.com/giorgiosld) and Marta Musso

## Key Features: 🔑

- Decentralized Ownership: Utilizes blockchain to record ownership, allowing for transparent and immutable tracking of vehicle ownership and usage history.
- Smart Contracts: Implements smart contracts to automate and enforce agreements between car owners and users, facilitating seamless transactions.
- Immutable Record Keeping: Ensures that all transactions and interactions within the system are securely recorded on the blockchain, preventing tampering or fraud.
- Transparent Governance: Provides visibility into the governance of the car sharing system, allowing stakeholders to participate in decision-making processes.

### Basic Preview

The following screenshots demo a basic function of the potential SaaS, if you want to simulate the project on your local machine you can follow along with the documentation

![photo1706224521](https://github.com/fres-sudo/Fabric2.5_school_material/assets/65305708/2348390a-658d-4f61-831b-d4b33f015772)
![photo1706224521-2](https://github.com/fres-sudo/Fabric2.5_school_material/assets/65305708/35653db2-253f-46e9-b8db-bce079ee4581)
![photo1706224521-3](https://github.com/fres-sudo/Fabric2.5_school_material/assets/65305708/b92797dc-f585-45ad-a5a7-e22e0021f8ad)
![photo1706224521-4](https://github.com/fres-sudo/Fabric2.5_school_material/assets/65305708/c9747766-f665-44f1-b981-2f5facb01849)

### Core concept 📍

![Screenshot 2024-02-19 alle 20 08 42](https://github.com/fres-sudo/Fabric2.5_school_material/assets/65305708/364b83a2-bdeb-4220-b83d-475d5f1abe8e)=



# Basic commands to interact with the network 💻

- Move inside to the *test-network* folder:
```
cd ./test-network
```

- To start the network:
```
./network.sh up
```

- To create the channels (if you execute this command without `./network.sh up` the script will start the network before creating the channels):
```
./network.sh createChannel
```

- To deploy a chaincode:
```
./network.sh deployCC -ccn chaincode_name
```

- To invoke a method of a chaincode:
  - if the chaincode requires params
```
./network.sh cc invoke -ccn chaincode_name -c channel_name -org organization_number -ccic '"methodName","params1","params2",...,"paramsN"'
```
  - if the chaincode doesn't require any param
```
./network.sh cc invoke -ccn chaincode_name -c channel_name -org organization_number -ccic '"methodName"'
```

- To make a query to the chaincode:
```
./network.sh cc query -ccn chaincode_name -c channel_name -org organization_number -ccqc '"methodName"'
```

- To shut down the network by cleaning it:
```
./network.sh down
```

# Interacting with the application

## Option 1 - Web-App

- Move inside the *application* folder:
```
cd ./application
```

- Open up *application/index.html* and add your codespace address at line 107 :
```
xhr.open("POST", "https://your-codespace-ID-3000.app.github.dev/submitTX", true)
```

- Install the dependencies:
```
npm install
```

- Start the server:
```
npm start
```

The web form for executing the functions will be available at:
```
  https://your-codespace-ID-3000.app.github.dev/home.html
```

## Option 2 - CLI

- Simply invoke the commands.js submit script:
```
node commands.js submit <organization> <channel> <chaincode> <transactionName> [transactionParams..]
```


- For example, to invoke a transaction with parameters:
```
node commands.js submit agency.quotation.com q1channel quotation requestQuotation quotation2 item 20
```
```
node commands.js submit suppliera.quotation.com q1channel quotation getQuotation quotation2
```
