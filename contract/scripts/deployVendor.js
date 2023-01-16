const hre = require("hardhat");

async function main() {
 
  const Claim = await hre.ethers.getContractFactory("TokenClaim");
  const claim = await Claim.deploy();

  await claim.deployed();

  console.log(
    `TokenVendor is deployed to ${claim.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});