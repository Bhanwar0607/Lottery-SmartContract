const HDwalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const { interface, bytecode } = require("./compile");

const provider = new HDwalletProvider(
  "giggle twice motor rescue left uncover quit interest jacket hat foster gospel",
  "https://rinkeby.infura.io/v3/a7d73143c06f424c8557bf052fdf0bcf"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();
