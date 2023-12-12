import React from 'react';
import {View, Text, StyleSheet, SectionList, ScrollView} from 'react-native';

function App() {
  const users = [
    {id: 1, name: 'Mairaj', data: ['PHP', 'React', 'NodeJS']},
    {id: 2, name: 'Aliahmed', data: ['Angular', 'React', 'NodeJS']},
    {id: 3, name: 'Arsalan', data: ['PHP', 'Vue', 'Python']},
    {id: 4, name: 'Sameer', data: ['NextJS', 'React', 'Vue']},
    {id: 5, name: 'Salman', data: ['Java', '.Net', 'C++']},
    {id: 6, name: 'Owais', data: ['Python', 'Angular', 'NodeJS']},
  ];

  return (
    <View>
      <Text style={{fontSize: 26, textAlign: 'center', color: 'black'}}>
        Section List with example
      </Text>
     <SectionList
        sections={users}
        style={{margin:35}}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
}


export default App;
