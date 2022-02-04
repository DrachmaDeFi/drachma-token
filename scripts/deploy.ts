import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`>>>>>>>>>>>> Deployer: ${deployer.address} <<<<<<<<<<<<\n`);

  const erc20Contract = await hre.ethers.getContractFactory("DRACHMA");
  const erc20 = await erc20Contract.deploy();
  await erc20.deployed();
  console.log("Drachma Token Contract deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });