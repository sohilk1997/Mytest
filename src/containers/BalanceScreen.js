import React from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getWallet} from '../services';
import {Strings} from '../strings/Strings';
import styles from '../style/styles';

const BalanceScreen = props => {
  // State Declaration
  let [balance, setBalance] = useState('--');
  let [wallet, setWallet] = useState(null);

  // Life cycle method

  useEffect(() => {
    getWallet().then(result => {
      setBalance(result.balance);
      setWallet(result.Wallet);
    });
  }, []);

  /**
   * This fun for navigate for wallet payment
   */
  const onPressPayBtn = useCallback(() => {
    props.navigation.navigate('SendBalanceScreen', {
      balance: balance,
      wallet: wallet,
    });
  }, [props.navigation, balance, wallet]);

  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceInnerContainer}>
        <Text style={styles.balText}>{Strings.ethBalance}</Text>
        <Text style={styles.balanceTextInNumber}>{`${balance}`}</Text>
      </View>
      <View style={styles.balanceBtnView}>
        <TouchableOpacity onPress={onPressPayBtn} style={styles.payBtn}>
          <Text style={styles.buttonBtn}>{Strings.pay}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceScreen;
