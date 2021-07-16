import {ethers, providers} from 'ethers';
import {PROJECT_ID, NETWORK, KEY} from '../constant/Config';

// This will need for Shims Injected
import '@ethersproject/shims';
import {validateNumbers, validationStrings} from './Validation';
import {Alert} from 'react-native';

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
      return error;
    });
};

/**
 * It works for sending amount to other address if balance is available
 */
export const onPressSendBtn = async (address, amount, balance, wallet) => {
  let error = '';
  if (address.trim() === '' || amount.trim() === '') {
    error = validationStrings.allFieldsReq;
  } else if (!validateNumbers(amount)) {
    error = validationStrings.onlyNumberValid;
  } else if (balance < amount) {
    error = validationStrings.noBalance;
  }
  if (error !== '') {
    Alert.alert(validationStrings.appName, error);
  } else {
    let tx = {
      to: address.trim(),
      value: amount,
    };
    await wallet
      .sendTransaction(tx)
      .then(() => {
        Alert.alert(validationStrings.appName, validationStrings.onSuccess);
      })
      .catch(() => {
        Alert.alert(validationStrings.appName, validationStrings.onError);
      });
  }
};
