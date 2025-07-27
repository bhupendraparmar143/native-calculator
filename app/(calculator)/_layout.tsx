import { Stack } from 'expo-router'
import React from 'react'

const CalculatorRootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: true, title: "Calculator" }} />
    </Stack>
  )
}

export default CalculatorRootLayout