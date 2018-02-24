import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableHighlight,
  Picker
} from "react-native";
import { StackNavigator } from "react-navigation";
import Monster from "mhw-gear-wishlist/src/components/shared/Monster";
import { getAllSortedMonsterData } from "mhw-gear-wishlist/src/repos/monsters";
import Sidebar from "mhw-gear-wishlist/src/components/shared/Sidebar";

export default class MonsterGrid extends React.Component {
  constructor(props) {
    super(props);
    const monsterData = getAllSortedMonsterData();
    // console.log(`in constructor, monsterData: `, { monsterData });
    this.state = {
      sortElement: null,
      monsterData
    };
  }

  renderMonster = props => {
    const { data, item } = props;
    // debugger;
    let monster = data || item;
    monster = monster.title && monster.data ? monster.data : monster;
    
    console.log(`in renderMonster, given: `, { monster });
    if (!monster) return null;
    return (
      <TouchableHighlight onPress={this.openMonsterDetail(monster)}>
        <Monster image={monster.image} name={monster.name} key={monster.key} />
      </TouchableHighlight>
    );
  };

  openMonsterDetail(monster) {
    return () => this.props.navigation.navigate("MonsterDetail", { monster });
  }

  handlePickerValueChange = selectedElement => {
    const sortField =
      selectedElement === "Pls choose" ? undefined : selectedElement;
    const monsterData = getAllSortedMonsterData(sortField);
    console.log("state.monsterData before picker change", {
      state: this.state.monsterData
    });
    const sectionedMonsterData = this.createSectionedList(
      monsterData,
      sortField,
      this.weaknessLevelString
    );
    console.log("handlePickerValueChange", { sectionedMonsterData });
    this.setState({
      sortElement: selectedElement,
      monsterData: sectionedMonsterData
    });
  };

  weaknessLevelString = weaknessLevel =>
    Array(weaknessLevel)
      .fill("+")
      .join("");

  createSectionedList = (sortedData = [], sortField, getTitle = val => val) => {
    const sectionDict = {};
    for (let i = 0; i < sortedData.length; i++) {
      const elementToCategorize = sortedData[i];
      const fieldValue = elementToCategorize[sortField];
      //console.log({ sectionDict });

      if (!(fieldValue in sectionDict))
        sectionDict[fieldValue] = [elementToCategorize];
      else sectionDict[fieldValue].push(elementToCategorize);
    }
    const descendingOrder = (a, b) => b - a;
    const sortedElements = Object.keys(sectionDict).sort(descendingOrder);
    const sectionedList = sortedElements.map(fieldValue => ({
        title: getTitle(fieldValue),
        data: sectionDict[fieldValue]
      }));
    console.log('returning from createSectionedList with list:', {sectionedList});
    return sectionedList;
  };

  renderSectionHeader = ({ section }) => {
    return null;
    // console.log('in renderSectionHeader, received: ', { section });
    // if(!section) return null;
    // debugger;
    // const data = section.data ? data : section;
    // const firstMonster = data & data.length ? data[0] : {};
    // const { sortElement } = this.state;
    // const weaknessToCurrentSort =
    //   sortElement && sortElement in firstMonster
    //     ? firstMonster[sortElement]
    //     : undefined;
    // return weaknessToCurrentSort ? (
    //   <View style={styles.container}>
    //     <Text>{`${weaknessToCurrentSort}`} </Text>
    //   </View>
    // ) : (
    //   <View style={styles.container}>
    //     <Text>No Header</Text>
    //   </View>
    // );
  };

  openSidebar = () => this.props.navigation.navigate("Sidebar");

  render() {
    // console.log('render!s');
    // console.log(this.state.monsterData);

    const { monsterData } = this.state;
    
    const sectionedMonsterData = this.createSectionedList(monsterData);

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.openSidebar}>
          <Text onPress={this.openSidebar}>Sidebar test</Text>
        </TouchableHighlight>
        <Picker
          selectedValue={this.state.sortElement}
          onValueChange={this.handlePickerValueChange}
          style={styles.elementSortPicker}
        >
          <Picker.Item label="Pls choose" value="Pls choose" />
          <Picker.Item label="Fire" value="Fire" />
          <Picker.Item label="Water" value="Water" />
          <Picker.Item label="Thunder" value="Thunder" />
          <Picker.Item label="Ice" value="Ice" />
          <Picker.Item label="Dragon" value="Dragon" />
          <Picker.Item label="Poison" value="Poison" />
          <Picker.Item label="Sleep" value="Sleep" />
          <Picker.Item label="Paralysis" value="Paralysis" />
          <Picker.Item label="Blast" value="Blast" />
          <Picker.Item label="Stun" value="Stun" />
        </Picker>
        {sectionedMonsterData && sectionedMonsterData.length && <SectionList
          contentContainerStyle={styles.listViewContainer}
          sections={monsterData}
          initialListSize={20}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderMonster}
        />}
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  elementSortPicker: {
    marginTop: 0,
    paddingTop: 0,
    height: 50
  },
  elementSortPicker: {
    marginTop: 0,
    paddingTop: 0,
    height: 50
  }
});
