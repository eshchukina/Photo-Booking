import React, { useEffect } from "react";
import { View, StyleSheet, Pressable, Animated } from "react-native";
import Calendar from "react-native-vector-icons/FontAwesome";
import List from "react-native-vector-icons/Entypo";
import Person from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";

const Footer = ({ setSelectedComponent }) => {
  const handleButton1Press = () => {
    setSelectedComponent("dashboard");
  };

  const handleButton2Press = () => {
    setSelectedComponent("appendcomponent");
  };
  const handleButton3Press = () => {
    setSelectedComponent("personalcabinet");
  };

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

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        underlayColor="#c4661f"
        onPress={handleButton1Press}
      >
        <Animatable.Text animation={zoomOut} style={styles.buttonText}>
          <Calendar name="calendar" size={30} />
        </Animatable.Text>
      </Pressable>
      <Pressable
        style={styles.button}
        underlayColor="#c4661f"
        onPress={handleButton2Press}
      >
        <Animatable.Text animation={zoomOut} style={styles.buttonText}>
          <List name="add-to-list" size={30} />
        </Animatable.Text>
      </Pressable>

      <Pressable
        style={styles.button2}
        underlayColor="#c4661f"
        onPress={handleButton3Press}
      >
        <Animatable.Text animation={zoomOut} style={styles.buttonText}>
          <Person name="person" size={30} />
        </Animatable.Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#71798e",
  },
  button: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 13,
    paddingLeft: 13,
    margin: 10,
  },
  button2: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 15,
    margin: 10,
  },

  buttonText: {
    color: "#737c88",
  },

  buttonActiveText: {
    color: "#783d19",
  },
});

export default Footer;
