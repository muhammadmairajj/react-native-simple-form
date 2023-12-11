import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <View>
      <Text style={styles.text}>Simple Form in React Native</Text>

      <TextInput
        style={styles.textBox}
        placeholder="Enter Your Name: "
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter Your Email: "
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textBox}
        placeholder="Enter Your Password: "
        value={password}
        onChangeText={password => setPassword(password)}
      />

      <View style={{marginBottom: 10}} >
      <Button color={'green'} title="Submit" onPress={() => setDisplay(true)} />
      </View> 
      <Button title="Clear Text" onPress={resetFormData} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>Name: {name}</Text>
            <Text style={{fontSize: 20}}>Email: {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    height: 50,
    marginBottom: 10,
    padding: 10,
    fontSize: 24,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
  text: {
    fontSize: 27,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
