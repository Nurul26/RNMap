import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import { searchLocation, getHistory } from '../actions/place.js';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../components/LocationItem';

const App = () => {
  const { locations } = useSelector(state => state);
    const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fetchFlag, setFetchFlag] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showResults, setShowResults] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setSearch('');
      setSearchResults([]);
      dispatch(getHistory());
      return () => {
      };
    }, [])
  );

  useEffect(() => {
    dispatch(searchLocation());
    console.log('location : ' + JSON.stringify(locations));
    setFetchFlag(true);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHistory());
    console.log('history: ' + JSON.stringify(locations.searchHistory));
}, [fetchFlag]);

  const autocomplete = (input) => {
    if (input) {
      const newDataLoc = locations.locations.filter(
        function (item) {
          const itemLoc = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textLoc = input.toUpperCase();
          return itemLoc.indexOf(textLoc) > -1;
        });
      setSearchResults(newDataLoc);
      setSearch(input);
    } else {
      setSearchResults([]);
      setSearch(input);
    }
  };

  const resetHistory = () => {
    dispatch(resetHistory());
}

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
            <Text style={styles.msg} > Please Search Maybank location ^-^!</Text>
          </View>
        )}
        renderItem={({ item }) =>
          <LocationItem item={item} type='Results' />
        }
        keyExtractor={item => item.name}
      />
      <FlatList
        data={locations.searchHistory}
        ListEmptyComponent={() => (
          <View style={styles.emptyListMsgContainer}>
            <Text style={styles.emptyListMsgText}>No search history.</Text>
          </View>
        )}
        renderItem={({ item }) => <LocationItem item={item} type='History' />}
        keyExtractor={item => item.name}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  TextInput: {
    marginTop: 100,
    padding: 10,
    // marginLeft: 20,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000'
  },
  msg: {
    marginTop: 15,
    alignItems: "center",
  },
  emptyListMsgContainer: {
    // marginTop: 20,
},
emptyListMsgText: {
    fontSize: 14,
    textAlign: 'center',
},
});

export default App;
