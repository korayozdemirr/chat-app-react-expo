import { Avatar, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function InboxCard() {
  const navigation = useNavigation();
  return (
    <List.Item
      style={{ backgroundColor: "white",  borderRadius: 10, marginBottom: 15 }}
      title="Koray Özdemir"
      description="online"
      onPress={() => {
        navigation.navigate("Chat");
      }}
      left={() => <Avatar.Image source={require("../assets/images.png")} />}
    />
  );
}

export default InboxCard;
