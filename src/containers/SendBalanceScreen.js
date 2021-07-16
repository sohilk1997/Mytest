import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Strings} from '../strings/Strings';
import {validationStrings} from '../strings/ValidationStrings';
import styles from '../style/styles';
import {validateNumbers} from '../utils/Validation';

const SendBalanceScreen = props => {
  // State Declaration //
  let [address, setAddress] = useState('');
  let [amount, enterAmount] = useState('');

  // Props //
  let {balance, wallet} = props.route.params;

  /**
   * It works for sending amount to other address if balance is available
   */
  const onPressSendBtn = async () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.sendBalanceInnerContainer}>
        <View style={styles.commonSendBalanceView}>
          <Text style={styles.sendBalanceCommonTxt}>{Strings.to}</Text>
          <TextInput
            placeholder={Strings.ethAddress}
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.commonSendBalanceView}>
          <Text style={styles.sendBalanceCommonTxt}>{Strings.amount}</Text>
          <TextInput
            placeholder={Strings.enterAmt}
            value={amount}
            onChangeText={text => enterAmount(text)}
            keyboardType={'numeric'}
            style={styles.input}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.container}>
          <View style={styles.balanceBtnView}>
            <TouchableOpacity
              onPress={onPressSendBtn}
              style={styles.transferBtn}>
              <Text style={styles.buttonBtn}>{Strings.send}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default SendBalanceScreen;
