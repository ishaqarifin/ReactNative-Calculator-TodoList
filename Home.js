import * as React from 'react'

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'native-base'

// import Calculator from './src/calculator'
import EmbedExpression from './src/embedExpression'
import IncDec from './src/incDec'
// import ListTodo from './src/listTodo'
// import Hello from './src/hello'
// import DetailData from './src/detailData'
import Posts from './src/screen/Posts'
import PostDetail from './src/screen/detailPost'
import TodoApp from './src/screen/todoApp'
import AddTodo from './src/screen/addTodo'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function Mytab(){
    const theme = useTheme()

    return (
        <Tab.Navigator
        initialRouteName='EmbedExpression'
        screenOptions={({ route }) => ({
            headerMode: "screen",
            headerTintColor: "blue",
            headerStyle: {backgroundColor: "green"},
            tabBarIcon: ({focused, color, size}) => {
                let iconName
                if (route.name === "EmbedExpression") {
                    iconName = focused ? "calculator" : "calculator-outline"
                } else if (route.name == "Todo") {
                    iconName = focused ?"document" : "document-outline"
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray"
        })}
        >
            <Tab.Screen name='EmbedExpression' component={EmbedExpression} options={{ headerShown: false }} />
            <Tab.Screen name='Todo' component={TodoApp} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}

export default function Home() {
    // const theme =useTheme()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#CAF0F8" },
        }}
        >
            <Stack.Screen name="Main" component={Mytab}
            options={{
              headerShown: false
            }}/>
            <Stack.Screen name='IncDec' component={IncDec}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name='My Notes' component={PostDetail}
            options={{
                headerShown: true
            }}/>
            <Stack.Screen name='Add Notes' component={AddTodo}
            options={{
                headerShown: true
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
