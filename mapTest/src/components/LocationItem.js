import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { List, SwipeAction } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { saveHistory, removeHistory } from '../actions/place';

const LocationItem = ({ item, type }) => {
    const navigation = useNavigation();
    const { places, searchHistory } = useSelector(state => state);
    const dispatch = useDispatch();

    const action = [
        {
            text: 'Delete',
            onPress: () => deleteHistory(item),
            backgroundColor: 'red',
            color: 'white',
        },
    ]

    const deleteHistory = (history) => {
        console.log("History" + history)
        dispatch(removeHistory(history));
        Alert.alert(history.name + ' has been removed from the search history.')
    }

    const Item = List.Item;
    return (
        <View>
            <SwipeAction
                buttonWidth={80}
                right={action}
            >
                <Item style={styles.placeItem}
                    onPress={() => {

                        if (type == 'Results') {
                            dispatch(saveHistory(item));
                        }
                        navigation.navigate('Map', { locations: item });
                    }}>
                    <Text style={styles.placeName}>{item.name}</Text>
                </Item>
            </SwipeAction>
        </View>

    );
}

const styles = StyleSheet.create({
    placeItem: {
        padding: 15,
    },
    placeName: {
        fontSize: 14,
    }
});

export default LocationItem;