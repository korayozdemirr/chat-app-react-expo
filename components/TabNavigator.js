import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import InboxScreen from "../screens/InboxScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    
  return (
    <Tab.Navigator screenOptions={({route})=>({
        headerShown:false,
        tabBarActiveTintColor:"#6b4fa9",
        tabBarShowLabel:true,
        tabBarIcon:({focused, color, size })=>{
          let iconName;
          if(route.name === 'Explore'){
            iconName = focused ? 'world' : 'world-o'
            return <Fontisto name={iconName} size={size} color={color} />
          }else if(route.name === 'Inbox'){
            iconName = focused ? 'messenger' : 'messenger-outline'
            return <MaterialIcons name={iconName} size={size} color={color} />
          }
          
        }
      })}>
        <Tab.Screen name="Explore" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
      </Tab.Navigator>
  )
}

export default TabNavigator