import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

function App() {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(1);

  const skills = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'NodeJS'},
    {id: 4, name: 'Python'},
    {id: 5, name: 'NestJS'},
  ];

  return (
    <View style={styles.main}>
      <Text style={{fontSize: 28, textAlign: 'center'}}>
        Make radio button in react-native
      </Text>
      
      <TouchableHighlight onPress={() => setSelectedRadioBtn(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadioBtn === 1 ? (
              <View style={styles.radioBg}></View>
            ) : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setSelectedRadioBtn(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadioBtn === 2 ? (
              <View style={styles.radioBg}></View>
            ) : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableHighlight>

      <Text style={{fontSize: 28, color: 'black'}}>Dynamic radio button</Text>
      {skills.map(skill => (
        <TouchableHighlight
          onPress={() => setSelectedRadioBtn(skill.id)}
          key={skill.id}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadioBtn === skill.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{skill.name}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default App;
