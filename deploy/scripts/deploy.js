const hre = require("hardhat");

async function main(){
    const Dex = await hre.ethers.getContractFactory("CustomDex");
    const dex = await Dex.deploy();

    await dex.deployed();

    console.log(`Dex Address : ${dex.address}`);
}

main()
    .then(() => process.exit(1))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });