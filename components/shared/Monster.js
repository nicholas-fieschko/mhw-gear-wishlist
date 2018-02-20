import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

function Monster({ name, image, style, ...restProps }) {
    return (
        <Image
            source={image}
            style={[styles.monsterIcon, style]}
            {...restProps}
        />
    );
};

const styles = StyleSheet.create({
  monsterIcon: {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
});

export default Monster;