import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, SectionList, TouchableHighlight, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Monster from 'mhw-gear-wishlist/components/shared/Monster';
import { getAllSortedMonsterData } from 'mhw-gear-wishlist/repos/monsters';

export default class MonsterGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      sortElement: null,
      monsterData: [{ data: getAllSortedMonsterData() }],
    };
  }

  renderMonster = monster => {
    return (
      <TouchableHighlight onPress={this.openMonsterDetail(monster)}>
        <Monster
          image={monster.image}
          name={monster.name}
          key={monster.key}
        />
      </TouchableHighlight>
    )
  };

  openMonsterDetail(monster) { return () => this.props.navigation.navigate('MonsterDetail', { monster }) };
  
  renderWeaknessStars = weaknessLevel => Array(weaknessLevel).fill('+').join('');

  handlePickerValueChange = selectedElement => {
    const sortField = selectedElement === "Pls choose" ? undefined : selectedElement;
    const monsterData = getAllSortedMonsterData(sortField);
    const sectionedMonsterData = this.createSectionedList(monsterData, sortField, this.renderWeaknessStars);
    console.log('handlePickerValueChange', { sectionedMonsterData });
    this.setState({
      sortElement: selectedElement,
      monsterData: sectionedMonsterData,
    });
  };

  createSectionedList = (sortedData = [], sortField, renderHeader) => {
    if (!sortedData) return [];
    const sectionDict = {};
    for (let i = 0; i < sortedData.length; i++) {
      const elementToCategorize = sortedData[i];
      const fieldValue = elementToCategorize[sortField];
      //console.log({ sectionDict });
      
      if (!(fieldValue in sectionDict))
        sectionDict[fieldValue] = [ elementToCategorize ];
      else 
        sectionDict[fieldValue].push(elementToCategorize);
    }
    const descendingOrder = (a,b) => b - a;
    return Object.keys(sectionDict)
                 .sort(descendingOrder)
                 .map(fieldValue => ({
                    header: renderHeader(fieldValue),
                    data: sectionDict[fieldValue],
                  }));
  }

  renderSectionHeader = (data) => {
    console.log(data);
    return null;
    // const [ firstMonster ] = sectionData;
    // const { sortElement } = this.state;
    // const weaknessToCurrentSort = sortElement ? firstMonster[sortElement] : undefined;
    // return weaknessToCurrentSort
    //   ? (<Text>Header {`${weaknessToCurrentSort}`} </Text>)
    //   : (<Text>No Header</Text>);
  }

  render() {
    return (
      <View style={styles.container}>
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
        <SectionList
          contentContainerStyle={styles.listViewContainer}
          sections={this.state.monsterData}
          initialListSize={20}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={({ item }) => (item.header && item.data)
            ? this.renderMonster(item.data)
            : this.renderMonster(item)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 0,
    marginTop: 0,
  },
  listViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementSortPicker: {
    marginTop: 0,
    paddingTop: 0,
  }
});
