import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import EntryPage from './screens/EntryPage.js'
import GetGrocery from './screens/GetGroceryLogin.js'
import SelectStore from './screens/SelectStore.js'
import RecieveGrocery from './screens/RecieveGroceryLogin.js'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import AddItems from './screens/AddItems.js'
import useLinking from './navigation/useLinking';
import store from './store'
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={AddItems} />
                <Stack.Screen name="GetLogin" component={GetGrocery} />
                <Stack.Screen name="SelectStore" component={SelectStore} />
                <Stack.Screen name="RecieveLogin" component={RecieveGrocery} />
                <Stack.Screen name="AddItems" component={AddItems} />
              </Stack.Navigator>
            </NavigationContainer>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
