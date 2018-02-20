import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Monster from 'mhw-gear-wishlist/components/shared/Monster';

export default class MonsterDetailsView extends React.Component {
  render() {
    const { params: { monster: { image, name } } } = this.props.navigation.state;
    return (
      <View style={styles.container}>
          <Monster image={image} name={name} />
          <Text>{name}</Text>
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
});
