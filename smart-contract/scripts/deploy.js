const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory("DogeCoin")
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log("Dogecoin deployed to:", dogeContract.address)

  const web5Factory = await hre.ethers.getContractFactory("Web5")
  const web5Contract = await web5Factory.deploy()
  await web5Contract.deployed()
  console.log("Web5Token deployed to:", web5Contract.address)

  const daiFactory = await hre.ethers.getContractFactory("Dai")
  const daiContract = await daiFactory.deploy()
  await daiContract.deployed()
  console.log("DaiToken deployed to:", daiContract.address)

  const usdcFactory = await hre.ethers.getContractFactory("Usdc")
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log("UsdcToken deployed to:", usdcContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
