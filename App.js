import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


function App() {
  const users = [
    {id: 1, name: 'mairaj', email: 'mairaj@gmail.com'},
    {id: 2, name: 'aliahmed', email: 'aliahmed@gmail.com'},
    {id: 3, name: 'arsalan', email: 'arsalan@gmail.com'},
    {id: 4, name: 'owais', email: 'owais@gmail.com'},
    {id: 5, name: 'raheel', email: 'raheel@gmail.com'},
    {id: 6, name: 'muzafar', email: 'muzafar@gmail.com'},
    {id: 7, name: 'sameer', email: 'sameer@gmail.com'},
    {id: 8, name: 'aqib', email: 'aqib@gmail.com'},
    {id: 9, name: 'ismail', email: 'ismail@gmail.com'},
    {id: 10, name: 'sami', email: 'sami@gmail.com'},
  ];
  return (
    <View>
      <Text style={{fontSize: 27, color: 'black'}}>List with map function | without flatlist | And With ScrollView</Text>
      <ScrollView style={{marginBottom: 30}}>
        {users.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={{fontSize: 25, color: '#fff'}}>Name: {item.name}</Text>
              <Text style={{fontSize: 25, color: '#fff'}}>Email: {item.email}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default App;