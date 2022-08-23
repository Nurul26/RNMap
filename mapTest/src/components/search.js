import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import { List,Button } from '@ant-design/react-native';
import { searchLocation } from '../actions/place.js';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../components/LocationItem';

const App =() => {
const { locations } = useSelector(state => state);
const Item = List.Item;
const [search, setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [fetchFlag, setFetchFlag] = useState(false);
const dispatch = useDispatch();

useFocusEffect(
  React.useCallback(() => {
      setSearch('');
      setSearchResults([]);
      // dispatch();
      return () => {
      };
  }, [])
);

useEffect(() => {
  dispatch(searchLocation());
  console.log('location : ' + JSON.stringify(locations));
  setFetchFlag(true);
}, [dispatch]);

const autocomplete = (input) => {
    if (input) {
      const newDataLoc = locations.locations.filter(
        function(item){
          const itemLoc = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textLoc = input.toUpperCase();
          return itemLoc.indexOf(textLoc) > -1;
        });
      setSearchResults(newDataLoc);
      setSearch(input);
    }else{
      setSearchResults([]);
      setSearch(input);
    }
};

    return (
      <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            placeholder="Search Maybank Location.."
            placeholderTextColor="#003f5c"
            value={search}
            onChangeText={(value) => autocomplete(value)}
          />
        <FlatList
        data={searchResults}
          ListEmptyComponent={() => (
            <View style={styles.msg}>
              {/* <Button
                onPress={() => alert('Geolocation error! Please Search diffrence location ^-^!')}
                title="Success"
                // color="#00cc00"
              /> */}
              <Text style={styles.msg} > Please Search Maybank location ^-^!</Text>
            </View>
          )} 
          renderItem = {({item}) => 
              <LocationItem item={item} type='Results' />
          }
          keyExtractor={item => item.name}
        />

      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextInput: {
    marginTop: 100,
    padding: 10,
    // marginLeft: 20,
    fontSize: 17,
    borderWidth:1,
    borderRadius: 10,
    borderColor: '#000'
  },
  msg: {
    // backgroundColor: "#ffffdb",
    marginTop: 15,
    alignItems: "center",
  },
});

export default App;
