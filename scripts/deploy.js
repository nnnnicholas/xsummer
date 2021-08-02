// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const XSummer = await ethers.getContractFactory('XSummer');
    console.log('Deploying XSummer...');
    const xsummer = await XSummer.deploy();
    await xsummer.deployed();
    console.log('XSummer deployed to:', xsummer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });