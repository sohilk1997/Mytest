import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BalanceScreen from '../containers/BalanceScreen';
import {Strings} from '../strings/Strings';
import SendBalanceScreen from '../containers/SendBalanceScreen';

/**
 * Root Navigator
 */

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BalanceScreen"
        component={BalanceScreen}
        options={{title: Strings.myBalance}}
      />
      <Stack.Screen
        name="SendBalanceScreen"
        component={SendBalanceScreen}
        options={{title: Strings.myWallet}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
