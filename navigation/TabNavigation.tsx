import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Color";
import TabBarIcon from "../components/TabbarIcon";

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: MoviesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <TabBarIcon
              name={Platform.OS === "ios" ? "ios-film" : "md-film"}
              focused={focused}
            />
          );
        }
      }
    },
    TV: {
      screen: TVScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          <TabBarIcon
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
            focused={focused}
          />;
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          <TabBarIcon
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            focused={focused}
          />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
