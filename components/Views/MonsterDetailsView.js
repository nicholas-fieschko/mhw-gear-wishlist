import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Monster from 'mhw-gear-wishlist/components/shared/Monster';
import ErrorView from 'mhw-gear-wishlist/components/Views/ErrorView';
import MonsterWeaknesses from 'mhw-gear-wishlist/data/monster-weaknesses';
import WeaknessRating from 'mhw-gear-wishlist/components/shared/WeaknessRating';

export default class MonsterDetailsView extends React.Component {
  constructor(props) {
    super(props);
    const { params: { monster: { name: monsterName } } } = props.navigation.state;
    this.state = {
      weaknesses: MonsterWeaknesses ? MonsterWeaknesses[monsterName] : null
    };
  }

  render() {
    if (!this.props.navigation || hasError) return null;
    const { navigation: { state: { params: { monster } } } } = this.props
    const { image, name } = monster || {};
    const { hasError, weaknesses = {} } = this.state;

    if (hasError || !name || !image || !weaknesses) {
      return (<ErrorView
          message={JSON.stringify({ props: this.props, state: this.state })}
        />);
    }

    const elementsList = Object.keys(weaknesses)
                               .sort((a,b) => weaknesses[a] < weaknesses[b]);

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Monster
          image={image}
          style={styles.monsterIcon}
        />
        {elementsList.map(elementName => (
        <WeaknessRating
          elementName={elementName}
          starCount={weaknesses[elementName]}
          style={styles.weaknessText}
          key={`weakness-${elementName}`}
        />)
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  monsterIcon: {
    margin: 30,
    width: 250,
    height: 250,
    backgroundColor: 'white',
  },
  weaknessText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  }
});
