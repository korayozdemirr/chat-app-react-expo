import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import UserCard from "../components/userCard";

function HomeScreen() {
  return (
    <LinearGradient
      colors={["#6b4fa9", "#5691c8"]}
      end={{ x: 2, y: 1 }}
      style={{ display: "flex", flex: 1, padding: 15 }}
    >
      <StatusBar style="light" />
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: "white",
          margin: 30,
        }}
      >
        Explore People
      </Text>
        <ScrollView>
        <UserCard />
      <UserCard />
        </ScrollView>

      
    </LinearGradient>
  );
}

export default HomeScreen;
