/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // database()
    //   .ref('/users')
    //   .set([
    //     {
    //       name: 'dario',
    //       age: 3,
    //     },
    //     {
    //       name: 'ian',
    //       age: 7,
    //     },
    //     {
    //       name: 'erika',
    //       age: 29,
    //     },
    //     {
    //       name: 'iratuan',
    //       age: 39,
    //     },
    //   ])
    //   .then(() => console.log('Data set.'));

    database()
      .ref('/users')
      .on('value', (snap) => {
        setUsers(snap.val());
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Ola</Text>
        {users.map((u) => {
          return <Text key={u.age}>{u.name}</Text>;
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f0f0f0',
    fontWeight: '100',
    fontSize: 60,
    textTransform: 'uppercase',
  },
});

export default App;
