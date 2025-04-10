const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt("DoctorAccess", "PASTE_DEPLOYED_DOCTOR_CONTRACT_ADDRESS");
    const patientAddress = "PASTE_PATIENT_WALLET_ADDRESS";
    const data = await contract.viewPatient(patientAddress);
    console.log("Patient Data:", data);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
