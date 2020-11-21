import * as React from 'react';
import { Button, View, Text, TouchableHighlight} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function NavModel() {
  
  const navigation = useNavigation();

  const button = {
    padding: 20,
    backgroundColor: '#00aa00'
  };
  
  return (
    <View>
      <TouchableHighlight style={button} onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight style={button} onPress={()=>navigation.navigate('Overview')}>
        <Text>Overview</Text>
      </TouchableHighlight>
    </View>
    

  );
}

function HomeScreen({ navigation }) {

  // console.log({navigation});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <NavModel />
    </View>
  );
}

function OverviewScreen({ navigation }) {
  // console.log({navigation});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Overview</Text>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;