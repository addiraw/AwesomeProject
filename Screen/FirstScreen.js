import React from 'react'
import { View, Text, TextInput } from 'react-native'

const FirstScreen = () => {
    const [text,setText]=useSate("")
    return (<TextInput
        placeholder="type your name"
        style={{ height: 50, borderWidth: 2 }}
        onChange={(text) => { setText(text) }}
    />)
}