import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';

export default class ShoppingCartRecommendCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        return <Text style={styles.title}>{this.props.item}</Text>;
    }
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 13
    }
});