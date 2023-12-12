import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

function App() {
  const users = [
    {id: 1, name: 'mairaj', email: 'mairaj@gmail.com'},
    {id: 2, name: 'aliahmed', email: 'aliahmed@gmail.com'},
    {id: 3, name: 'arsalan', email: 'arsalan@gmail.com'},
    {id: 4, name: 'owais', email: 'owais@gmail.com'},
    {id: 5, name: 'raheel', email: 'raheel@gmail.com'},
  ];

  return (
    <View>
      <Text style={{fontSize: 25, color:'black', textAlign:'center'}}>FlatList | Make list in React Native</Text>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={{fontSize: 25, color: '#fff'}}>Id: {item.id}</Text>
              <Text style={{fontSize: 25, color: '#fff'}}>Name: {item.name}</Text>
              <Text style={{fontSize: 25, color: '#fff'}}>Email: {item.email}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
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