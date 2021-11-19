import {ethers} from 'ethers';

const greeterABI = require('../abi/greeter.abi.json');

export const readGetterFromAbi = async () => {
    if (!window.ethereum.selectedAddress) {
        await window.ethereum.enable()
      };

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            "0x7013603DE902cF079F2632FEadB8C1E1c9f57600",
            greeterABI,
            signer
        );

        const res = await contract.greet();
        return res;
    }  catch (err) {
        console.log(err);
    }
}

export const setNewGetterFromAbi = async (greeterText) => {
    if (!window.ethereum.selectedAddress) {
        await window.ethereum.enable()
      };

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            "0x7013603DE902cF079F2632FEadB8C1E1c9f57600",
            greeterABI,
            signer
        );

        const tx = await contract.setGreeting(greeterText);

        const receipt = await tx.wait();
        console.log(receipt);
    }  catch (err) {
        console.log(err);
    }
}