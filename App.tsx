import React from "react";
import { AppLoading, Asset } from "expo";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNavigation from "./navigation/TabNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <TabNavigation></TabNavigation>;
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
