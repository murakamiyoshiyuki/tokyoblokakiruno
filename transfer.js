let contractAddress = "YOUR_CONTRACT_ADDRESS";
let contractABI = [YOUR_CONTRACT_ABI];
let issuerAddress = 'YOUR_WALLET_ADDRESS';

async function transferNFT() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Initialize web3
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      let toAddress = document.getElementById('address').value;

      if (!web3.utils.isAddress(toAddress)) {
        alert('Invalid address');
        return;
      }

      let contract = new web3.eth.Contract(contractABI, contractAddress);

      // Assume tokenId 1 for simplicity. You might want to use a better way to manage token IDs.
      let tokenId = 1;
      let fromAddress = issuerAddress;

      await contract.methods.transferFrom(fromAddress, toAddress, tokenId).send({from: fromAddress});

      alert('Transfer successful');
    } catch (error) {
      console.error("Error occurred: ", error);
      alert('Transfer failed');
    }
  } else {
    alert('Ethereum object does not exist. Do you have a wallet installed such as Metamask?');
  }
}
