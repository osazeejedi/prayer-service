const hre = require("hardhat");

async function main() {
 
await hre.run("verify:verify", {
    address: "0xa78cAdC5E817ADda8Cad65f9546d80C7b48446F5",
    constructorArguments: [],
    contract: "contracts/PrayerToken.sol:Token"
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});