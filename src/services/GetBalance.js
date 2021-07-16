import {ethers, providers} from 'ethers';
import {PROJECT_ID, NETWORK, KEY} from '../utils/Constant';

// This will need for Shims Injected
import '@ethersproject/shims';

export const getWallet = async () => {
  // Fetching provider //
  const infuraProvider = new providers.InfuraProvider(NETWORK, PROJECT_ID);

  // Fetching wallet //
  let randomWallet = new ethers.Wallet(KEY, infuraProvider);

  // Querying the network //
  return await infuraProvider
    .getBalance(randomWallet.address)
    .then(result => {
      return {balance: ethers.utils.formatEther(result), Wallet: randomWallet};
    })
    .catch(error => {
      console.log('Error', error);
      return error;
    });
};
