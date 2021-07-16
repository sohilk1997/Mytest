import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Strings} from '../strings/Strings';
import styles from '../style/styles';
import {onPressSendBtn} from '../services';

const SendBalanceScreen = props => {
  // State Declaration //
  let [address, setAddress] = useState('');
  let [amount, enterAmount] = useState('');

  // Props //
  let {balance, wallet} = props.route.params;

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
              onPress={() => onPressSendBtn(address, amount, balance, wallet)}
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
