import React, { useState, useEffect } from "react";
import { Text, Box, Pressable, Heading, VStack, Center, HStack, Divider, FormControl, Input, Stack, Button, ScrollView, IconButton, Icon } from "native-base";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons'

import axios from "axios";

// Add Props in Hello({navigation})
export default function AddTodo(props) {
    const [post, setPost] = useState([]);
    const [test, setTest] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        notes: "",
    });

    //add Data
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const formData = { name, notes }
    const addTodo = () => { 
        setIsLoading(true);
        axios
            .post("https://api.kontenbase.com/query/api/v1/0d88bb81-e595-41e4-84d2-f9d9609df319/todoApp", { ...form })
            .then(() => {
                setName('')
                setNotes('')
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                alert("Error POST data");
                setIsLoading(false);
            });
            props.navigation.navigate("Todo")
    };

    return (
        <View>
        <Box
            bg="blue"
            flex={1}
            // alignItems="center"
            // justifyContent="center"
            p={10}
            w="100%"
            mx="auto"
        >
            {/* <Divider color='rose.100' /> */}
            <HStack space={3} justifyContent="center">
                <Heading mb={4} color="black" fontWeight={"bold"} fontStyle="bold">My Notes</Heading>
            </HStack>

            <FormControl mb="5">
                <FormControl.Label>Todo</FormControl.Label>
                <Input bg="#CAF0F8" color={"black"} 
                borderRadius={10} mb={3} 
                placeholder="Title..." 
                value={name}
                variant="filled"
                onChangeText={name => setName(name)}
                />

                <Input bg="#CAF0F8" color={"black"} 
                borderRadius={10} mb={3} 
                placeholder="Your Notes..." 
                variant="filled" 
                value={notes} 
                onChangeText={notes => setNotes(notes)} 
                />
            </FormControl>

            <Button colorScheme="error"
                onPress={addTodo}
            >
                Save
            </Button>
        </Box>
        
        </View>
    );
}
