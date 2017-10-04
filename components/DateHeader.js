import React from 'react'
import { View, Text } from 'react-native'
import { purple } from '../utils/color'

export default function DateHeader({date}) {
  return (
      <Text style={{color: purple, fontSize: 25}}>
        {date}
      </Text>
  )
}
