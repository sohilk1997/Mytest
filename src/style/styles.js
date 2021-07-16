import {Platform, StyleSheet} from 'react-native';
import {colors} from '../constant/Colors';

export default StyleSheet.create({
  // common styling

  container: {
    flex: 1,
  },
  buttonBtn: {
    color: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 25,
  },

  // BalanceScreen styling

  balanceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  balanceInnerContainer: {
    backgroundColor: colors.grey,
    flex: 0.3,
    width: '100%',
  },
  balText: {
    marginTop: 50,
    fontSize: 18,
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  payBtn: {
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 70,
  },
  balanceTextInNumber: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'center',
  },
  balanceBtnView: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },

  // SendBalanceScreen styling

  input: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    marginLeft: 10,
    flex: 1,
  },
  transferBtn: {
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 70,
  },
  sendBalanceCommonTxt: {
    color: colors.grey,
    fontWeight: 'bold',
    top: Platform.OS === 'android' ? 15 : null,
  },
  commonSendBalanceView: {
    flexDirection: 'row',
    margin: 20,
  },
  sendBalanceInnerContainer: {
    marginTop: 20,
    flex: 1,
  },
});
