import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";

function InboxScreen() {
  return (
    <>
      <LinearGradient
        colors={["#6b4fa9", "#5691c8"]}
        end={{ x: 2, y: 1 }}
        style={styles.linearGradient}
      >
        <Text
          style={{
            marginTop: 50,
            marginStart: 30,
            fontSize: 36,
            fontWeight: "700",
            color: "white",
          }}
        >
          Inbox
        </Text>
      </LinearGradient>
      <View style={styles.container}></View>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: { display: "flex", flex: 1 },
  container: {
    display: "flex",
    flex: 3,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -30,
    backgroundColor: "#cfcaea",
  },
});

export default InboxScreen;
