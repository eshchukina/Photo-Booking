import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
} from "react-native";
import Delete from "react-native-vector-icons/AntDesign";
import { isNameValid } from "./Validation";

import * as Animatable from "react-native-animatable";



export default function ClientModal({ isVisible, onClose, onAdd }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [nameError, setNameError] = useState("");
  const [clients, setClients] = useState([]);
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

  const handleAddTask = () => {
    if (!isNameValid(name)) {
      setNameError("Name must not be empty");
      return;
    }

    const newClient = { id: clients.length + 1, name, note };
    setClients((prevClients) => [...prevClients, newClient]);

    setName("");
    setNote("");
    setNameError("");
  };

  const handleDeleteClient = (id) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.modalContainer}>
      <Animatable.Image
          animation={zoomOut}
          source={require("../assets/client.png")}
          style={{
            width: 300,
            height: 50,
            resizeMode: "contain",
          }}
        />
        <View style={styles.clientsContainer}>
          <ScrollView style={{ height: 100 }}>
            <FlatList
              data={clients}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.clientItem}>
                  <Text style={styles.clientNote}>{item.id}</Text>
                  <Text style={styles.clientNote}>{item.name}</Text>
                  <Text style={styles.clientNote}>{item.note}</Text>
                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => handleDeleteClient(item.id)}
                  >
                    <Text style={styles.iconText}>
                      <Delete name="deleteuser" size={20} />
                    </Text>
                  </Pressable>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>new client name:</Text>
          <TextInput
            style={styles.modalText}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>note:</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            value={note}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        <View style={styles.modalButtons}>
          <Pressable style={styles.button} onPress={handleAddTask}>
          <Animatable.Text animation={zoomOut} style={styles.buttonText}>add</Animatable.Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleCloseModal}>

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
  },
  inputContainer: {
    margin: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  clientsContainer: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#b8a69b",
    marginBottom: 10,
  },
  clientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    color: "#604d3c",
  },
  clientName: {
    color: "#604d3c",
    fontSize: 18,
  },
  clientNote: {
    color: "#604d3c",
  },
  label: {
    color: "#604d3c",
    marginRight: 10,
  },
  iconText: {
    color: "#d5d3d5",
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
  deleteButton: {
    backgroundColor: "#737c88",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 7,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
  },
  errorText: {
    color: "red",
  },
  modalButtons: {
    flexDirection: "row",
  },
  modalText: {
    borderWidth: 1,
    borderColor: "#b8a69b",
    borderRadius: 10,
    padding: 5,
    width: 150,
  },
  button: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#737c88",
  },
});
