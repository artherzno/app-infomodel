import * as React from 'react';
import { Button, View, Text, TouchableHighlight, StyleSheet, FlatList} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as data from './data/datalist.json';
const dataList = data.default;
console.log(dataList); // o

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

function Nav() {
  
  const navigation = useNavigation();

  
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

const listModel = ({item})=>(
  <View>
    <Text style={{color: '#000'}}>{item.type}</Text>
    <FlatList data={item.listmodel} renderItem={listModelBtn} />
  </View>
);

const listModelBtn = ({item}) => (
  <TouchableHighlight underlayColor={colorUnderlay} style={styles.button}>
        <Text>{item.name}</Text>
  </TouchableHighlight>
);


function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate('Overview')} title="Let' Go" />
      <FlatList data={dataList} renderItem={listModel} keyExtractor={item => item.id.toString()} />
    </View>
  );
}

function OverviewScreen() {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Overview {name}</Text>
      <Nav />
    </View>
  );
}

function TopFeature() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TopFeature</Text>
      <Nav />
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