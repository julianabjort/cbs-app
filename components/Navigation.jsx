import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "./../screens/ChatScreen";
import StartScreen from "./../screens/StartScreen";
import HomeScreen from "./../screens/HomeScreen";
import EventScreen from "./../screens/EventScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import DiscoverScreen from "./../screens/DiscoverScreen";
import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import EditScreen from "../screens/EditScreen";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationComponent = ({ navigation }) => {
    const username = useSelector(state => state.user.username)
    const registered = useSelector(state => state.user.registered)
    // const token = useSelector(state => state.user.idToken)
    return (
        <NavigationContainer >
            {username !== undefined || registered == true ? (
                <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home';
                      } else if (route.name === 'Discover') {
                        iconName = focused ? 'compass' : 'compass';
                      } else if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles';
                      } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person';
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                      
                    },
                    tabBarActiveTintColor: '#5050a5',
                    tabBarInactiveTintColor: 'gray',
                  })}
                >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Chat" component={ChatScreen}/>
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
            ): (
                <Stack.Navigator>
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="Start" component={StartScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
                )}
        </NavigationContainer >
    );
}

function ProfileStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="View Profile" component={ProfileScreen} options={{headerShown:false}} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Edit Profile" component={EditScreen} />
      </Stack.Navigator>
  )
}

function HomeStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="View Event" component={EventScreen}/>
      </Stack.Navigator>
  )
}

export default NavigationComponent;