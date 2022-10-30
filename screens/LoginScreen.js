import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
function LoginScreen({ navigation }) {
  const [securText, setSecureText] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboard}
    >
      <StatusBar style="light" />
      <LinearGradient
        colors={["#6b4fa9", "#5691c8"]}
        end={{ x: 2, y: 1 }}
        style={styles.container}
      >
        <Text style={{ fontSize: 50, textAlign: "center", color: "white" }}>
          Welcome Back
        </Text>
      </LinearGradient>
      <View style={styles.section}>
        <Text
          style={{
            fontSize: 32,
            color: "#6b4fa9",
            fontWeight: "700",
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          Login
        </Text>
        <ScrollView>
          <TextInput
            keyboardType="email-address"
            label="Email"
            mode="outlined"
            style={{ width: 300, margin: 10 }}
          />
          <TextInput
            label="Password"
            secureTextEntry={securText}
            mode="outlined"
            style={{ width: 300, margin: 10 }}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  setSecureText(!securText);
                }}
              />
            }
          />
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
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  section: {
    flex: 2,
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

export default LoginScreen;
