import React from "react";
import PropTypes from "prop-types";
import { StackNavigator } from "react-navigation";
import { AppRegistry } from "react-native";
import MonsterGrid from "mhw-gear-wishlist/src/components/Views/MonsterGrid";
import MonsterDetailsView from "mhw-gear-wishlist/src/components/Views/MonsterDetailsView";
import MaterialsView from "mhw-gear-wishlist/src/components/Views/MaterialsView";
import Sidebar from "mhw-gear-wishlist/src/components/shared/Sidebar";

const RootStack = StackNavigator(
  {
    MonsterList: { screen: MonsterGrid },
    MonsterDetail: { screen: MonsterDetailsView },
    Materials: { screen: MaterialsView },
    Sidebar: { screen: Sidebar }
  },
  {
    initialRouteName: "MonsterList"
    // initialRouteName: 'Materials',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
