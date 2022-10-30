import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function Layout({ children, ...props }) {
  return (
    <>
    <StatusBar style="light" />
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
          {props.title}
        </Text>
      </LinearGradient>
      <View style={styles.container}>
          <ScrollView>
            {children}
          </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    linearGradient: { display: "flex", flex: 1 },
    container: {
      display: "flex",
      flex: 2.5,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      marginTop: -30,
      backgroundColor: "#cfcaea",
      paddingTop:50,
      paddingEnd:20,
      paddingStart:20
    },
  });
export default Layout;
