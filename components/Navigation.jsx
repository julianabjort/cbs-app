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
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllEventsScreen from '../screens/AllEventsScreen';
import AllOrganisationsScreen from '../screens/AllOrganisationsScreen';
import OrganisationScreen from './../screens/OrganisationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationComponent = ({ navigation }) => {
    const username = useSelector(state => state.user.username)
    const registered = useSelector(state => state.user.registered)
    
    const token = useSelector(state => state.user.idToken)
    return (
        <NavigationContainer >
            {token !== undefined ? (
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
                <Tab.Screen name="Discover" component={DiscoverStack} />
                <Tab.Screen name="Chat" component={ChatScreen}/>
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
            ): (
                <Stack.Navigator>
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
                  <Stack.Screen name="New Password" component={NewPasswordScreen} />
                </Stack.Navigator>
                )}
        </NavigationContainer >
    );
}

function ProfileStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="View Profile" component={ProfileScreen} options={{headerShown:false}} />
          <Stack.Screen name="Edit Profile" component={StartScreen} />
      </Stack.Navigator>
  )
}

function HomeStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="View Event Home" component={EventScreen}/>
          <Stack.Screen name="View Organisation Home" component={OrganisationScreen}/>
      </Stack.Navigator>
  )
}

function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover Screen" component={DiscoverScreen} options={{headerShown:false}}/>
      <Stack.Screen name="All Events Screen" component={AllEventsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="All Organisations Screen" component={AllOrganisationsScreen}/>
      <Stack.Screen name="View Event Discover" component={EventScreen}/>
      <Stack.Screen name="View Organisation Discover" component={OrganisationScreen}/>
    </Stack.Navigator>
  )
}

export default NavigationComponent;