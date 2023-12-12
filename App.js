import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import data from './data.json';

function App() {
  return (
    <View>
      <Text style={{fontSize: 35, color: 'black', textAlign:'center'}}>Grid With Dynamic Data</Text>
      <ScrollView style={{marginBottom: 25}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {data.users.map(user => {
            return (
              <View key={user.id}>
                <Text
                  style={
                    style.item
                  }>{`${user.firstName} ${user.lastName}`}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    backgroundColor: 'blue',
    color: '#fff',
    textAlign: 'center',
    width: 120,
    height: 120,
    fontSize: 25,
    textAlignVertical: 'center',
  },
});

export default App;