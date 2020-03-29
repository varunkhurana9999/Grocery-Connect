import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';



export default function EntryPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={
            __DEV__
              ? require('../assets/images/happywomen.jpg')
              : require('../assets/images/robot-prod.png')
          }
          style={styles.welcomeImage}
        />
        <Button title="Get Groceries"  onPress={() => navigation.navigate('GetLogin')} />
        <Button title="Help With Groceries" onPress={() => navigation.navigate('RecieveLogin')} />
      </View>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
