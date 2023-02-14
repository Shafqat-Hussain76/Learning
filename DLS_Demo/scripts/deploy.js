
const hre = require("hardhat");

async function main() {
  const  MintingERC20 = await hre.ethers.getContractFactory("MintingERC20");
  const  mintingERC20 = await MintingERC20.deploy();

  await mintingERC20.deployed();

  console.log(
    `The contract is deplyed at ${mintingERC20.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
