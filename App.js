import * as React from 'react';
import { Button, View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as data from './data/datalist.json';
const dataList = data[0];
console.log(dataList); // o

function NavModel() {
  
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    button: {
      padding: 20,
      backgroundColor: '#00aa00',
      width: 180,
      height: 50,
      textAlign: 'center',
    },
  
    navbar: {
      position: 'absolute',
      bottom: 20,
      flexDirection: 'row',
      flex: 1, 
    }
  });

  const colorUnderlay = "#007700";
  
  return (
    <View style={styles.navbar}>
      <TouchableHighlight underlayColor={colorUnderlay} style={styles.button} onPress={()=>navigation.navigate('Overview')}>
        <Text>Overview</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={colorUnderlay} style={styles.button} onPress={()=>navigation.navigate('TopFeature')}>
        <Text>TopFeature</Text>
      </TouchableHighlight>
    </View>
    

  );
}

function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate('Overview')} title="Let' Go" />
    </View>
  );
}

function OverviewScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Overview</Text>
      <NavModel />
    </View>
  );
}

function TopFeature() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TopFeature</Text>
      <NavModel />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="TopFeature" component={TopFeature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;