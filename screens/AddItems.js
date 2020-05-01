import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, useCallback} from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';


function AddItems({navigation, props}) {



  useEffect(() => {
      /*Stripe.setOptionsAsync({
        publishableKey: 'pk_test_LVzR107YGNVuPhB3oZv0bK2700cQfZC9Vz'
      })
      // Update the document title using the browser API
      /* dispatch(getGroceryPlaces()) */
  }, []);


  return (
    <View style={styles.container}>
      <Text style = {styles.headerText}> Select Your Preferred Grocery Store </Text>
      <Text style = {styles.headerText}> Grocery Time: </Text>
      <Text style = {styles.headerText}> What Items Do You Need? </Text>
      <Text style = {styles.headerText}> Payment Method</Text>

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
    fontSize: 14,
    color:  "#20232a"
  }
});



const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

export default AddItems
