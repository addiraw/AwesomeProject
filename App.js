import React from 'react'
import {View,Image,Text, StyleProp} from 'react-native'
const App =()=>
{
return (
  <View>
  <Image source={require('./assets/Untitled.png')}
    style={{height:40,width:50}}
  />
  <Text>Match Calculator</Text>
  </View>
)
}
export default App