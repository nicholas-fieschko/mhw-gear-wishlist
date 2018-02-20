import React, { Component } from 'react';
import { Text } from 'react-native';

export default class WeaknessRating extends Component {
    render() {
        if (!this.props) return null;
    
        const { elementName, starCount, style } = this.props;
        const stars = Array(starCount).fill("+").join('');
    
        return (
            <Text {...this.props}>
                {`${elementName}: ${stars}`}
            </Text>
        );
    }
}
