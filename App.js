import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button } from "react-native";

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function PastEventsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PastEvents screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const PastEventsStack = createNativeStackNavigator();

function PastEventsStackScreen() {
  return (
    <PastEventsStack.Navigator screenOptions={{ headerShown: false }}>
      <PastEventsStack.Screen name="PastEvents" component={PastEventsScreen} />
      <PastEventsStack.Screen name="Details" component={DetailsScreen} />
    </PastEventsStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: "#FFFBF6" }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#39A24B",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Past Events"
        component={PastEventsStackScreen}
        options={{
          tabBarLabel: "Past Events",
          tabBarBadge: 3,
          tabBarInactiveTintColor: "#39A24B",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" color={"#39A24B"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarBadge: 3,
          tabBarInactiveTintColor: "#39A24B",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={"#39A24B"} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Upcoming Events"
        component={DetailsScreen}
        options={{
          tabBarLabel: "Upcoming Events",
          tabBarBadge: 3,
          tabBarInactiveTintColor: "#39A24B",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={"#39A24B"} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF6",
    alignItems: "center",
    justifyContent: "center",
  },
});
