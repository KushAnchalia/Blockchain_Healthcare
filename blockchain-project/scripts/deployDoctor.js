const hre = require("hardhat");

async function main() {
  const patientContractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

  const DoctorAccess = await hre.ethers.getContractFactory("DoctorAccess");
  const doctorAccess = await DoctorAccess.deploy(patientContractAddress);

  await doctorAccess.waitForDeployment(); // ✅

  console.log("✅ DoctorAccess deployed at:", await doctorAccess.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
