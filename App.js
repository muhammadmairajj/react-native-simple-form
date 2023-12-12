import React, { useState } from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';

function App() {
  const [show, setShow] = useState('');

  const display = () => {
    setShow(!show);

  }
  return (
    <View>
      <Text style={{fontSize: 28, color: 'black', textAlign: 'center'}}>
        Activity Indicator (Loader)
      </Text>
      <View style={{marginTop: 50}}>
      {show ? <ActivityIndicator size={70} color={'green'} /> : null}
      <Button title='SHOW/HIDE LOADER' onPress={display} />
      </View>
    </View>
  );
}

export default App;
