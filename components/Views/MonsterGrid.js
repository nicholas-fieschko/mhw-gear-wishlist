import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ListView, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Monster from 'mhw-gear-wishlist/components/shared/Monster';
import MonsterData from 'mhw-gear-wishlist/data/monster-loot';

export default class MonsterGrid extends React.Component {
  openMonsterDetail(monster) {
    return () => this.props.navigation.navigate('MonsterDetail', { monster })
  };

  render() {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listViewContainer}
          dataSource={ds.cloneWithRows(MonsterData)}
          initialListSize={20}
          renderRow={(monster) => (
            <TouchableHighlight onPress={this.openMonsterDetail(monster)}>
              <Monster
                image={monster.image}
                name={monster.name}
                key={monster.key}
              />
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
  },
  listViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
