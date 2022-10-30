import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Badge } from "react-native-paper";
function userCard({ ...props }) {
  return (
    <View style={styles.container}>
      <Avatar.Image
        style={{ backgroundColor: "blue" }}
        source={require("../assets/images.png")}
      />
      <Badge size={15} style={styles.badgeStyle} />
      <View style={{ display: "flex" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Katie Mizusu1
        </Text>
        <Button icon="send" mode="contained">
          Send Message
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
  },
  badgeStyle: {
    position: "absolute",
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "green",
    bottom: 30,
    left: 78,
  },
});
export default userCard;
