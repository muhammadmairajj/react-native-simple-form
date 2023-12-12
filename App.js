import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  StyleSheet,
  Modal,
} from 'react-native';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 28, color: 'black', textAlign: 'center'}}>
        Modal | Dialog Box in react-native
      </Text>
      <Modal transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Muhammad Mairaj</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default App;
