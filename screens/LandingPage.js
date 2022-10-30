import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const LandingPage = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#6b4fa9", "#5691c8"]}
        end={{ x: 2, y: 1 }}
        style={styles.container}
      >
        <Text style={{ fontSize: 50, textAlign: "center", color: "white" }}>
          Welcome to Chat App
        </Text>
      </LinearGradient>

      <View style={styles.section}>
        <Text
          style={{
            fontSize: 32,
            color: "#6b4fa9",
            fontWeight: "700",
            marginTop: 20,
            marginBottom: 70,
          }}
        >
          Join Us
        </Text>
        <Button
          icon="login"
          mode="contained"
          contentStyle={{ width: "100%", height: "100%" }}
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Button>
        <Button
          dark={true}
          icon="account-plus"
          mode="outlined"
          contentStyle={{ width: "100%", height: "100%" }}
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Register
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  section: {
    flex: 1,
    marginTop: -40,
    backgroundColor: "white",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignItems: "center",
    padding: 20,
  },
  buttonStyle: {
    width: 300,
    height: 50,
    margin: 10,
  },
});

export default LandingPage;
