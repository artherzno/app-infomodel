import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Button, TouchableOpacity} from 'react-native';

import modelList from './data/datalist.json';

export default function App() {
  const itemModel = ({item})=>(
    <View>
      <Text style={styles.p}>{item.model}</Text>
    </View>
  );

  const groupModel = ({item})=>(
    <View style={styles.table}>
      <Text style={styles.p}>{item.type}</Text>
      <FlatList 
        data={item.listmodel}
        renderItem={itemModel}
        keyExtractor={item=> item.id}
      />
    </View>

  );

  return (
    <SafeAreaView style={ styles.container }> 
      <Text style={ styles.h1 }>
        Kawasaki Info Model
      </Text>
      <FlatList 
        data={modelList} 
        renderItem={groupModel} 
        keyExtractor={item=>item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
  }

const colorGreen = 'green';
const colorWhite = 'white';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    color: colorGreen,
    fontSize: 40,
  },
  p: {
    color: '#fff',
    fontSize: 16,
  },
  table: {
    padding: 10,
    backgroundColor: '#0a0a0a',
    borderWidth: 1,
    borderColor: colorGreen,
  }
});