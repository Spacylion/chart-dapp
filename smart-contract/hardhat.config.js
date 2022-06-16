require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/B_E1yCnkvk_MK0A_qUShUIEx3Zhkg-48",
      accounts: [
        "919dd1db84a3c77d2abdfbf197f91df771a5dc8f31faf2661e77e22368f2b59a",
      ],
    },
  },
}
