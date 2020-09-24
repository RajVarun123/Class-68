import React from 'react';
import { View } from 'react-native';
import BookTransactionScreen from "./screens/BookTransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:BookTransactionScreen},
  Search: {screen:SearchScreen}
});

const AppContainer = createAppContainer(TabNavigator);