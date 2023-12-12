import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const UserData = ({item}) => {
    return (
      <View style={styles.box}>
        <Text style={styles.item}>
          Name: {`${item.firstName} ${item.lastName}`}
        </Text>
        <Text style={styles.item}>Email: {item.email}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      flex: 1,
      fontSize: 24,
      margin: 2,
      color: 'orange',
      textAlign: 'center',
      // backgroundColor: 'green'
    },
    box: {
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: 'orange',
      marginBottom: 10,
    },
  });
  
  export default UserData;