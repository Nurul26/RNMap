import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { List } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
// import { saveHistory } from '../actions/place';

const LocationItem = ({ item, type }) => {
    const navigation = useNavigation();
    const { places, searchHistory } = useSelector(state => state);
    const dispatch = useDispatch();

    const Item = List.Item;
    return (
        <Item style={styles.placeItem}
            onPress={() => {

                if(type == 'Results') {
                    // dispatch();
                }
                navigation.navigate('Map', { locations: item });
            }}>
            <Text style={styles.placeName}>{item.name}</Text>
        </Item>
    );
}

const styles = StyleSheet.create({
    placeItem: {
        padding: 20,
    },
    placeName: {
        fontSize: 20,
    }
});

export default LocationItem;