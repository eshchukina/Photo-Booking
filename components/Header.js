import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Animated,
} from "react-native";

import * as Animatable from "react-native-animatable";

import InfoIcon from "react-native-vector-icons/Ionicons";

import LoginButton from "./LoginButton";

const Header = ({ setSelectedComponent }) => {
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

  const handleButtonClick = () => {
    setSelectedComponent("info");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Pressable
          style={styles.button}
          underlayColor="#c4661f"
          onPress={handleButtonClick}
        >
          <Animatable.Text animation={zoomOut} style={styles.buttonText}>
            <InfoIcon name="information" size={30} />
          </Animatable.Text>
        </Pressable>
      </View>

      <View style={styles.container1}>
        <Pressable
          style={styles.button}
          underlayColor="#c4661f"
          onPress={handleButtonClick}
        >
          <LoginButton />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#d5d3d5",
    width: "100%",
    height: 100,
  },
  container1: {
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#71798e",
    alignSelf: "center",
    borderRadius: 50,
    shadowColor: "#000000",
  },
  buttonText: {
    color: "#b8a69b",
  },
  filmContainer: {
    flexDirection: "row",

    alignSelf: "center",
    position: "absolute",
    padding: 10,
  },
  film: {
    backgroundColor: "#71798e",
    borderRadius: 3,
    padding: 7,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 3,
  },
});

export default Header;
