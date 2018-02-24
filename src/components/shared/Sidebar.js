import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import SideMenu from "react-native-side-menu";

const Sidebar = ({ children, navigation }) => {
  const goTo = routeName => () => navigation.navigate(routeName);
  const menu = (
    <View style={styles.container}>
      <TouchableHighlight style={styles.menuItem} onPress={goTo("MonsterGrid")}>
        <Text>Monster Grid</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.menuItem} onPress={goTo("Materials")}>
        <Text>Materials</Text>
      </TouchableHighlight>
    </View>
  );

  return (
    <SideMenu style={styles.container} menu={menu}>
      {children}
    </SideMenu>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  menuItem: {
    margin: 15,
    padding: 15,
    height: 50
  }
});
