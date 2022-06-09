import * as React from "react"
import { Box, Text, FlatList, Pressable } from "native-base"

export default function Hello({navigation}) {
    const dataList = ["tiktok", "instagram", "twitter", "facebook"]

    const handlePress= (value)=> {
        navigation.navigate("Detail Data", {value})
    }
  return (
    <Box
    safeArea
    bg="primary.400"
    flex={1}
    alignItems="center"
    justifyContent="center"
    p={10}
    >
        <FlatList
        data={dataList}
        renderItem={({item}) => (
            <Pressable
            onPress={()=> handlePress(item)}
            >
                <Text
                fontFamily="body"
                fontWeight={400}
                fontSize={30}
                marginButtom={5}
            >
                {item}
            </Text>
            </Pressable>
        )}
        />
    </Box>
  )
}
