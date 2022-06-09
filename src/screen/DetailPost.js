import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from "axios"

const PostDetail = (props) => {
  //init Props
  const { name, notes, id } = props.route.params

  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create LifeCycle
  //Function Exception

  // useEffect(() => {
  //   getComment()
  // }, [])

  // // Create Function to fetch
  // const getComment = () => {
  //   setIsLoading(true)
  //   axios
  //     .get("https://api.kontenbase.com/query/api/v1/0d88bb81-e595-41e4-84d2-f9d9609df319/todoApp/:id")
  //     .then((res) => {
  //       setComments(res.data)
  //       setIsLoading(false)
  //     })
  //     .catch(() => {
  //       alert("Error fetch data")
  //       setIsLoading(false)
  //     })
  // }

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
      {name}
      </Text>
      {/* Implement Axios Here */}
      {/* Render Component List */}
      <Text style={{ marginTop: 20 }} >{notes}</Text>
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
