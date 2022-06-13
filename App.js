import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => { }}>
        <IconButton
          style={styles.refreshBtn}
          icon="refresh"
          onPress={() => { setCounter(0) }}
          color={Colors.black}
          size={50}
        />
      </TouchableHighlight>
      <LinearGradient
        colors={["#146CF6", '#00F800', '#00B7D8']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <TouchableHighlight onPress={() => { }}>
          <IconButton
            style={styles.btn}
            icon="minus"
            onPress={() => { setCounter(counter > 0 ? counter - 1: 0) }}
            color={Colors.black}
            size={100}
          />
        </TouchableHighlight>
      </LinearGradient>
      <View style={styles.counterView}>
        <Text style={{ fontWeight: 'bold', fontSize: 50 }}>{counter}</Text>
      </View>
      <LinearGradient
        colors={["#146CF6", '#00F800', '#00B7D8']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <TouchableHighlight onPress={() => { }}>
          <IconButton
            style={styles.btn}
            icon="plus"
            onPress={() => { setCounter(counter + 1) }}
            color={Colors.black}
            size={100}
          />
        </TouchableHighlight>
      </LinearGradient>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterView: { justifyContent: 'center', alignItems: 'center', width: 100, height: 100 },
  btn: { width: 100, height: 100, borderRadius: 2 },
  refreshBtn: { width: 100, height: 100, borderRadius: 2 }
});
