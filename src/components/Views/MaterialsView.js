import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight
} from "react-native";
import Materials from "mhw-gear-wishlist/data/materials";

export default class MaterialsView extends React.Component {
  renderMaterialRow = material => {
    console.log({ material });
    debugger;
    return (
      <View
        style={styles.material}
        key={`${material.name} - ${material.rarity} - ${material.location}`}
      >
        <Text>{`${material.name} - ${material.rarity} - ${
          material.location
        }`}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listViewContainer}
          data={Materials}
          initialListSize={20}
          renderItem={this.renderMaterialRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 0,
    marginTop: 0
  },
  listViewContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  material: {
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    height: 50
  }
});
