import React, {useState, useEffect, useCallback} from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getGroceryPlaces, savePrimaryGroceryLocation }  from '../actions/mapActions'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import AddItems from './AddItems'




function SelectStore({navigation, props}) {

  const dispatch = useDispatch();
  const { placesData, isLoading, newData} = useSelector(state => ({
      placesData: state.groceryCoordinates,
      isLoading: state.isLoading,
  }));
  let myValue;
  let markers;
  if (placesData) {
    if (isLoading) {
      myValue = <Text> Loading...</Text>
    }
    else {
      myValue = placesData.map((object) =>
        <View style = {styles.groceryResult}>
          <Text>{object.name}</Text>
          <Text>{object.vicinity}</Text>
        </View>
      )
      markers = placesData.map((object) =>
        <Marker coordinate={{latitude: object.geometry.location.lat, longitude: object.geometry.location.lng}} />
      )
    }
  }


  const handleSubmit = useCallback(() => {
    const groceryProvider = {
      name: 'Trader Joes',
      address: '4 Masonic Avenue, San Francisco'
    }
    savePrimaryGroceryLocation(groceryProvider)
    navigation.navigate('AddItems')
  })


  useEffect(() => {
      async function getLocationStorage() {

      }
      // Update the document title using the browser API
      /* dispatch(getGroceryPlaces()) */
  }, []);


  return (
    <View style={styles.container}>
      <Text style = {styles.headerText}> Select Your Local Grocery Store </Text>
      <MapView
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
          }}
          style = {styles.mapStyles}
        >
      {markers}
      </MapView>
      {myValue}
      <View style={{borderWidth:1,position:'absolute',bottom:100,alignSelf:'center'}}>
          <Button title="Press"
          onPress={handleSubmit}
          color="#841584"
          accessibilityLabel="Press"/>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyles: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height *.5,
  },
  groceryResult: {
    borderWidth: 2,
    margin: 5,
    borderColor: "#20232a"
  },
  headerText: {
    fontSize: 20,
    color:  "#20232a"
  }
});



export default SelectStore
