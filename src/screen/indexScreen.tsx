import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContent from "../context/BlogContext";
export default function indexScreen() {
  const blogPosts = useContext(BlogContent);
  if (!blogPosts) {
    return null;
  }
  return (
    <View>
      <Button title="Add Post" />
      <FlatList
        data={blogPosts}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(blogPost) => blogPost.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
