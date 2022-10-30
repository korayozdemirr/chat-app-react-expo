//screens
import HomeScreen from "../screens/HomeScreen";
import InboxScreen from "../screens/InboxScreen";
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';
//Icons
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Navigators
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigatorStack() {
    
  return (
    <Tab.Navigator  screenOptions={({route})=>({
        headerShown:false,
        tabBarActiveTintColor:"#6b4fa9",
        tabBarShowLabel:true,
        tabBarStyle:{},
        tabBarIcon:({focused, color, size })=>{
          let iconName;
          if(route.name === 'Explore'){
            iconName = focused ? 'world' : 'world-o'
            return <Fontisto name={iconName} size={size} color={color} />
          }else if(route.name === 'Inbox'){
            iconName = focused ? 'messenger' : 'messenger-outline'
            return <MaterialIcons name={iconName} size={size} color={color} />
          }else if(route.name === 'Settings'){
            iconName = focused ? 'settings' : 'settings-outline'
            return <Ionicons name={iconName} size={size} color={color} />
          }
          
        }
      })}>
        <Tab.Screen name="Explore" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
const TabNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={TabNavigatorStack} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{presentation:"fullScreenModal"}} />
    </Stack.Navigator>
  )
}

export default TabNavigator