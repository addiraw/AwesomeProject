import React from 'react'
import { View, Image, Text, StyleProp, Button } from 'react-native'
import FirstScreen from './Screen/FirstScreen'
const App = () => {
  return (
    <View style={{ paddingTop: 40,alignContent:'center'}}>
      <Image source={require('./assets/Untitled.png')}
        style={{ height: 40, width: 50 }}
      />
      <Text>Match Calculator</Text>
    <Button title="Press me" onPress={()=>{
      FirstScreen()
    console.log("wow")}}></Button>
    </View>
  )
}
export default App