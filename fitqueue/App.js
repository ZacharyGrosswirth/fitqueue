import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import Home from "./screens/home";
import Queues from "./screens/queues";
import Workouts from "./screens/workouts";
import Gyms from "./screens/gym";
import Settings from "./screens/settings";
import Login from "./screens/login";
import Signup from "./screens/signup";
import ForgotPassword from "./screens/forgotpassword";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

  const loggedIn = false;

  return (
    <NavigationContainer>
      {loggedIn ? (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#36BCC0" },
          headerStyle: { backgroundColor: "#36BCC0" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          headerTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Queues"
          component={Queues}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Workouts"
          component={Workouts}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faPersonRunning} color={color} size={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Gyms"
          component={Gyms}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faDumbbell} color={color} size={size}/>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCog} color={color} size={size}/>
            ),
          }}
        />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )}
    </NavigationContainer>
  );
};

export default App;
