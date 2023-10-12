import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

export default function AddTaskModal({ visible, onAdd, onCancel }) {
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

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
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
            <Text style={styles.buttonText}>add</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            // activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            // android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            onPress={onCancel}
          >
            <Text style={styles.buttonText}>close</Text>
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
