import React, { useState, useEffect } from "react";
import { Text, Box, Pressable, Heading, VStack, Center, HStack, Divider, FormControl, Input, Stack, Button, ScrollView, IconButton, Icon } from "native-base";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons'
// import kontenbase from "../lib/kontenbase";

import axios from "axios";


// Add Props in Hello({navigation})
export default function TodoApp(props) {
    const [post, setPost] = useState([]);
    const [test, setTest] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        notes: "",
    });

    // const {name, notes} = form
    // Create LifeCycle
    //Function Exception
    useEffect(() => {
        getData();
    }, []);

    const addTodo = () => { 
        setIsLoading(true);
        axios
            .post("https://api.kontenbase.com/query/api/v1/0d88bb81-e595-41e4-84d2-f9d9609df319/todoApp", { ...form })
            .then(() => {
                getData();
                setForm("");
                setIsLoading(false);
                console.log(form);
            })
            .catch((err) => {
                console.log(err);
                alert("Error POST data");
                setIsLoading(false);
            });
    };

    const deleteData = (id) => {
        setIsLoading(true)
        axios
            .delete("https://api.kontenbase.com/query/api/v1/0d88bb81-e595-41e4-84d2-f9d9609df319/todoApp/" + id)
            .then(() => {
                getData()
                setIsLoading(false)
            })
            .catch(() => {
                alert("Error DELETE data")
                setIsLoading(false)
            })
    }

    // Create Function to fetch
    const getData = () => {
        setIsLoading(true);
        axios
            .get("https://api.kontenbase.com/query/api/v1/0d88bb81-e595-41e4-84d2-f9d9609df319/todoApp")
            .then((res) => {
                setPost(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                alert("Error fetch data");
                setIsLoading(false);
            });
    };

    console.log(post);

    //   Create Component List
    const _renderItem = ({ item }) => {
        return (
            <ListItem 
            onPress={() => props.navigation.navigate("My Notes", item)}
            key={item._id.toString()} 
            >
                <ListItem.Content>
                    <ListItem.Title h4 numberOfLines={1}>
                        {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={2}>
                        {item.notes}
                    </ListItem.Subtitle>
                            <TouchableOpacity 
                            style={{position:"absolute", right:5}}
                            onPress={() => deleteData(item._id.toString())}
                            >
                                <Ionicons name="close-sharp" size={40} color="black" />
                            </TouchableOpacity>
                            {/* <Button
                            onPress={ ()=> props.navigation.navigate("EditTodo", item)}
                            key={item._id.toString()}>
                                Edit
                            </Button> */}
                </ListItem.Content>
            </ListItem>
        );
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
                <Input bg="#CAF0F8" color={"black"} borderRadius={10} mb={3} placeholder="Title..." id="name" name="name" variant="rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <Input bg="#CAF0F8" color={"black"} borderRadius={10} mb={3} placeholder="Your Notes..." variant="rounded" id="notes" name="notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </FormControl>

            <Stack direction="row" mb="3" space={4} justifyContent="center">
                <Button small background="blue.900" justifyContent="center" onPress={addTodo}>
                    <Text>submit</Text>
                </Button>
            </Stack>

            {/* <ScrollView maxW="100%" h="80" _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "72"
            }}> */}
            <FlatList style={{borderRadius:20}}
            data={post} 
            renderItem={_renderItem} 
            keyExtractor={(item) => item._id.toString()} 
            refreshing={isLoading} 
            onRefresh={getData}
            >

            </FlatList>

            {/* </ScrollView> */}
        </Box>
        {/* <View style={{position:"absolute", right:0, marginVertical:500}}>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Add Notes")}
                    style={{ flex: 1, width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOpacity: 0.25}}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>
                    <Ionicons name="md-add-circle-outline" size={50} color="black" />
                    </Text>
                </TouchableOpacity>
                        
        </View> */}
        </View>
    );
}
