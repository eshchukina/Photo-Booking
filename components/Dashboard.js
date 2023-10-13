import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Animated } from "react-native";

import AddPhotoshootModal from "./AddPhotoshootModal"; 

import CalendarComponent from "./CalendarComponent";

import NewPhoto from "react-native-vector-icons/MaterialIcons";

import * as Animatable from "react-native-animatable";

export default function Dashboard({ setSelectedComponent }) {
  const scrollX = new Animated.Value(0);
  const [selectedDate, setSelectedDate] = useState(null); 
  const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const handleAddTask = () => {
    setAddTaskModalVisible(true);
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
        <CalendarComponent setSelectedDate={setSelectedDate} />
        <Pressable
          style={styles.button}
          underlayColor="#c4661f"
          onPress={handleAddTask}
        >
          <Animatable.Text animation={zoomOut} style={styles.buttonText}>
            <NewPhoto name="add-a-photo" size={30} />
          </Animatable.Text>
        </Pressable>
      </View>
      <View style={styles.container3}></View>


      <AddPhotoshootModal
        visible={isAddTaskModalVisible}
        onCancel={() => setAddTaskModalVisible(false)}
        onAdd={(newTask) => {
          setAddTaskModalVisible(false);
        }}
      />
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
    flex: 10,

    backgroundColor: "#d5d3d5",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
  },

  container3: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    margin: 20,
    color: "#604d3c",
    fontSize: 15,
  },
  button: {
    padding: 10,
    alignSelf: "center",
  },

  buttonText: {
    color: "#737c88",
  },
});
