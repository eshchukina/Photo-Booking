import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableHighlight,
} from "react-native";

import * as Animatable from "react-native-animatable";

import LocationModal from "./LocationModal";
import ClientModal from "./ClientModal";
import Location from "react-native-vector-icons/SimpleLineIcons";
import Client from "react-native-vector-icons/AntDesign";

export default function AppendComponent({ setSelectedComponent }) {
  const scrollX = new Animated.Value(0);
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);
  const [isClientModalVisible, setClientModalVisible] = useState(false);


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
      <View style={styles.container1}>
        <View style={styles.iconsRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>add new location</Text>
            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPress={() => setLocationModalVisible(true)}
            >
              <Animatable.Text animation={zoomOut} style={styles.iconText}>
                <Location name="location-pin" size={30} />
                </Animatable.Text>
            </TouchableHighlight>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>add new client</Text>
            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPress={() => setClientModalVisible(true)}
            >
               <Animatable.Text animation={zoomOut}style={styles.iconText}>
                <Client name="addusergroup" size={30} />
                </Animatable.Text>
            </TouchableHighlight>
          </View>
          <LocationModal
            isVisible={isLocationModalVisible}
            onClose={() => setLocationModalVisible(false)}
          />
          <ClientModal
            isVisible={isClientModalVisible}
            onClose={() => setClientModalVisible(false)}
          />
        </View>
      </View>

      <View style={styles.container3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "vidaloka",
    backgroundColor: "#71798e",
  },
  container1: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5d3d5",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  container3: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "#737c88",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 1,
    paddingLeft: 10,
    margin: 20,
    alignItems: "center",
  },

  iconText: {
    marginRight: 10,
    color: "#d5d3d5",
  },
});
