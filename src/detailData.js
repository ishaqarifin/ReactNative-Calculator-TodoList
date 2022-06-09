import React from 'react'
import { Text, Box } from 'native-base'

export default function DetailData({route}) {
  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {/* Implement Params to get Data on previous screen  */}
        {route.params.value}
      </Text>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {/* Implement Params to get Data on previous screen  */}
        {route.params.data}
      </Text>
    </Box>
  )
}
