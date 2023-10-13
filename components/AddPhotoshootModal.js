import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Animated,
} from "react-native";

import * as Animatable from "react-native-animatable";

export default function AddPhotoshootModal({ visible, onAdd, onCancel }) {
  const [newTask, setNewTask] = useState({
    clientName: "",
    locationName: "",
    adress: "",
    date: "",
    time: "",
    cost: "",
    numberPhoto: "",
    numberRetouch: "",
    dateCompletion: "",
    notes: "",
  });

  const handleAddTask = () => {
    onAdd(newTask);
    setNewTask({
      clientName: "",
      locationName: "",
      adress: "",
      date: "",
      time: "",
      cost: "",
      numberPhoto: "",
      numberRetouch: "",
      dateCompletion: "",
      notes: "",
    });
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
      <Animatable.Image
          animation={zoomOut}
          source={require("../assets/add.png")}
          style={{
            width: 300,
            height: 50,
            resizeMode: "contain",
          }}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>client name:</Text>
          
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>location name:</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>adress:</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>date:</Text>
          <TextInput
            style={styles.modalText}
            value={newTask.date}
            onChangeText={(text) => setNewTask({ ...newTask, date: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>time:</Text>
          <TextInput
            style={styles.modalText}
            value={newTask.time}
            onChangeText={(text) => setNewTask({ ...newTask, time: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>cost:</Text>

          <TextInput
            style={styles.modalText}
            value={newTask.cost}
            onChangeText={(text) => setNewTask({ ...newTask, cost: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>photo studio cost:</Text>

          <TextInput
            style={styles.modalText}
            value={newTask.costStudio}
            onChangeText={(text) =>
              setNewTask({ ...newTask, costStudio: text })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>number of photo:</Text>
          <TextInput
            style={styles.modalText}
            value={newTask.numberPhoto}
            onChangeText={(text) =>
              setNewTask({ ...newTask, numberPhoto: text })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>number of photo (retouching):</Text>
          <TextInput
            style={styles.modalText}
            value={newTask.numberRetouch}
            onChangeText={(text) =>
              setNewTask({ ...newTask, numberRetouch: text })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>date of completion:</Text>
          <TextInput
            style={styles.modalText}
            value={newTask.dateCompletion}
            onChangeText={(text) =>
              setNewTask({ ...newTask, dateCompletion: text })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>notes:</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            value={newTask.notes}
            onChangeText={(text) => setNewTask({ ...newTask, notes: text })}
          />
        </View>

        <View style={styles.modalButtons}>
          <Pressable onPress={handleAddTask} style={styles.button}>
          <Animatable.Text animation={zoomOut} style={styles.buttonText}>add</Animatable.Text>
          </Pressable>

          <Pressable
            style={styles.button}
            // activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            // android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            onPress={onCancel}
          >
              <Animatable.Text animation={zoomOut} style={styles.buttonText}>close</Animatable.Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5d3d5",
    borderColor: "red",
  },
  inputContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "flex-start",
  },
  label: {
    color: "#604d3c",
    marginRight: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#b8a69b",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    height: 50,
    minWidth: 200, 
  },

  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    elevation: 5,
  },
  modalButtons: {
    flexDirection: "row",
    backgroundColor: "#d5d3d5",
    justifyContent: "space-around",
  },
  modalText: {
    borderWidth: 1,
    borderColor: "#b8a69b",
    borderRadius: 10,
    minWidth: 100,
    paddingLeft: 5,
    paddingRight: 5,
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
  buttonText: {
    color: "#737c88",
  },
});
