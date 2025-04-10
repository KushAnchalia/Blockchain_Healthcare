const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt("PatientRecord", "PASTE_DEPLOYED_ADDRESS_HERE");
    const tx = await contract.addRecord("Kush", "Asthma");
    await tx.wait();
    console.log("Record added");
}

main();
