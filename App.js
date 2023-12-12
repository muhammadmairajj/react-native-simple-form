import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import data from './data.json';
import UserData from './components/UserData';

function App() {
  return (
    <View>
      <Text style={{fontSize: 26, textAlign: 'center', color: 'black'}}>
        Component in Loop with Flatlist
      </Text>
      <FlatList
        data={data.users}
        renderItem={({item}) => <UserData item={item} />}></FlatList>
    </View>
  );
}

// const UserData = ({item}) => {
//   return (
//     <View style={styles.box}>
//       <Text style={styles.item}>
//         Name: {`${item.firstName} ${item.lastName}`}
//       </Text>
//       <Text style={styles.item}>Email: {item.email}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     fontSize: 24,
//     margin: 2,
//     color: 'orange',
//     textAlign: 'center',
//     // backgroundColor: 'green'
//   },
//   box: {
//     flexDirection: 'row',
//     borderWidth: 2,
//     borderColor: 'orange',
//     marginBottom: 10,
//   },
// });

export default App;