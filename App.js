import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Splash from "./pages/Splash";
import Main from "./pages/Main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        splash: false
      });
    }, 3000);
  }

  render() {
    const { splash } = this.state;
    return (
      <View style={{ width: "100%", height: "100%" }}>
        {splash ? <Splash /> : <Main />}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
