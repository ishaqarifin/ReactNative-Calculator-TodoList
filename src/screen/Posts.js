import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons'
// Import Axios
import axios from "axios"
import { Pressable } from "native-base";
import { flex } from "styled-system";

const Posts = (props) => {
    //Init State
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
      name:'',
      notes:''
    })
  
    // Create LifeCycle
    //Function Exception
    useEffect(() => {
      getPost()
    }, [])
  
    // Create Function to fetch
    const getPost = () => {
      setIsLoading(true)
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPost(res.data)
          setIsLoading(false)
        })
        .catch(() => {
          alert("Error fetch data")
          setIsLoading(false)
        })
    }
  
    console.log(post);
  
    //   Create Component List
    const _renderItem = ({ item }) => {
      return (
        <ListItem
          onPress={() => props.navigation.navigate("My Notes", item)}
          key={item.id.toString()}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title h4 numberOfLines={1}>
              {item.title}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={2}>
              {item.body}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )
    }
  
    return (
      <View>
        <View>
          <Button
            title="List Notes"
          />
        <TouchableOpacity
        style={{display:flex, backgroundColor: "#243491", width: 80, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84}}
        >
            <Ionicons name="add-circle-outline" size={24} color="black" />
            <Text>Add Notes</Text>
        </TouchableOpacity>
          {/* Render Component List */}
          <FlatList
            data={post}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
            onRefresh={getPost}
          />
        </View>
      </View>
    );
  };
  
  export default Posts;
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
  });