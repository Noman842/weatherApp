import { View, TouchableOpacity, Touchable, Button, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [counter, setcounter] = useState(0)

  return (
    <View style={styles.View}>
      <View style={styles.text}>
        <Text style={styles.counter}>{counter}</Text>
      </View>

      <View style={styles.nview}>
        <Button disabled={counter >= 5000} onPress={() => [setcounter(counter + 1)]} title='Increase (+)' />
        <Button disabled={counter <= 0} onPress={() => [setcounter(counter - 1)]} title='Decrease (-)' /></View>
      <View style={styles.reset}>
        <Button disabled={counter == 0} onPress={() => [setcounter(0)]} title='Reset' /></View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  View: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    flex: 1
  },
  counter: {
    flex: 1,
    marginVertical: 10,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '600',

  },
  nview: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  reset: {
    flex: 1,
    marginTop: 10,
  }

})