import React, {  useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Animated,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";

export default function DownloadPage({ setSelectedComponent }) {
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const handleButtonClick = () => {
    setSelectedComponent("dashboard");
  };

  const zoomOut = {
    0: {
      opacity: 0,
      scale: 0.5,
      translateX: 0,
    },
    0.5: {
      opacity: 0.7,
      scale: 0.7,
      translateX: 0,
    },
    1: {
      opacity: 1,
      scale: 1,
      translateX: 0,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1} colors={["transparent", "transparent"]}>
        <Image
          source={require("../assets/logopb.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            position: "relative",
            top: 100,
          }}
        />
        <Animatable.Image
          animation={zoomOut}
          source={require("../assets/text.png")}
          style={{
            width: 300,
            height: 100,
            resizeMode: "contain",
            position: "relative",
            top: 150,
          }}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.text}>
          Designed with photographers in mind, this versatile tool streamlines
          the process of scheduling and organizing photo sessions
        </Text>

        <Pressable
          style={styles.button}
          underlayColor="#c4661f"
          onPress={handleButtonClick}
        >
          <Animatable.Text animation={zoomOut} style={styles.buttonText}>
            let's start
          </Animatable.Text>
        </Pressable>

        <View style={styles.filmContainer}>
          <View style={styles.film}></View>
          <View style={styles.film}></View>

          <View style={styles.film}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "vidaloka",
    backgroundColor: "#d5d3d5",
  },
  container1: {
    flex: 2,
    backgroundColor: "#737c88",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  filmContainer: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    padding: 10,
    top: "60%",
  },
  film: {
    backgroundColor: "#71798e",
    borderRadius: 3,
    padding: 7,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 3,
  },
  container3: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    margin: 20,
    color: "#604d3c",
    fontSize: 15,
  },
  button: {
    position: "absolute",
    padding: 10,
    top: "40%",
    backgroundColor: "#b8a69b",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000000",
  },

  buttonText: {
    color: "#737c88",
  },
});
