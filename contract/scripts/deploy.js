
const hre = require("hardhat");

async function main() {
 

  const PRT = await hre.ethers.getContractFactory("Token");
  const prt = await PRT.deploy();

  await prt.deployed();

  console.log(
    `PrayerToken is deployed to ${prt.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
