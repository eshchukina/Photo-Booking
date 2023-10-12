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
  ScrollView,
  Animated,
} from "react-native";

import SelectDropdown from "react-native-select-dropdown";
import * as Animatable from "react-native-animatable";
import Arrow from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { isEmailValid, isPasswordValid, isNameValid } from "./Validation";

export default function LocationModal({
  isVisible,
  onClose,
  isDarkMode,
  closeModal,
}) {
  const [location, setLocation] = useState("");
  const [locationName, setLocationName] = useState("");
  const [adress, setAdress] = useState("");
  const [cost, setCost] = useState("");
  const [note, setNote] = useState("");
  const [locations, setLocations] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [selectedLocationType, setSelectedLocationType] = useState("");

  const type = [
    "photo studio",
    "park",
    "cafe",
    "public place",
    "outdoor location",
    "home location",
  ];

  const handleAddTask = () => {
    if (!isNameValid(locationName)) {
      setNameError("Name must not be empty");
      return;
    }

    const newLocation = {
      id: locations.length + 1,
      location: selectedLocationType,
      locationName,
      adress,
      cost,
      note,
    };
    setLocations([...locations, newLocation]);

    setLocation("");
    setSelectedLocationType("");
    setLocationName("");
    setAdress("");
    setCost("");
    setNote("");
  };

  const handleDeleteLocation = (id) => {
    setLocations((prevLocations) =>
      prevLocations.filter((location) => location.id !== id)
    );
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleFormSubmit = () => {
    if (
      !isNameValid(name) ||
      !isEmailValid(email) ||
      !isPasswordValid(password)
    ) {
      setEmailError(!isEmailValid(email) ? "invalid email" : "");
      setPasswordError(
        !isPasswordValid(password)
          ? "password must be at least 6 characters long"
          : ""
      );
      setNameError(!isNameValid(name) ? "name must not be empty" : "");
      setEmailError("");
      setNameError("");
      setPasswordError("");
      return;
    }
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
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.modalContainer}>
      <Animatable.Image
          animation={zoomOut}
          source={require("../assets/location.png")}
          style={{
            width: 300,
            height: 50,
            resizeMode: "contain",
          }}
        />

        <View style={styles.locationsContainer}>
          <ScrollView style={{ height: 100 }}>
            <FlatList
              data={locations}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.clientItem}>
                  <Text style={styles.clientNote}>{item.id}</Text>
                  <Text style={styles.clientNote}>{item.location}</Text>
                  <Text style={styles.clientNote}>{item.locationName}</Text>
                  <Text style={styles.clientNote}>{item.adress}</Text>
                  <Text style={styles.clientNote}>{item.cost}</Text>
                  <Text style={styles.clientNote}>{item.note}</Text>
                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => handleDeleteLocation(item.id)}
                  >
                    <Text style={styles.iconText}>
                      <MaterialCommunityIcons
                        name="delete"
                        size={20}
                        color="#yourIconColor"
                      />
                    </Text>
                  </Pressable>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>type of location:</Text>
          <SelectDropdown
            data={type}
            onSelect={(selectedItem, index) => {
              setSelectedLocationType(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText={
              <Text>
                <Arrow name="format-list-bulleted-type" size={30} />
              </Text>
            }
            style={styles.selectDropdown}
            buttonTextStyle={styles.buttonTextStyle}
            dropdownStyle={styles.dropdownStyle}
            buttonStyle={styles.buttonStyle}
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.rowTextStyle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>location name:</Text>

          <TextInput
            style={styles.modalText}
            value={locationName}
            onChangeText={(text) => setLocationName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>adress:</Text>

          <TextInput
            style={styles.modalText}
            value={adress}
            onChangeText={(text) => setAdress(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>cost:</Text>
          <TextInput
            style={styles.modalText}
            value={cost}
            onChangeText={(text) => setCost(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>notes:</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            value={note}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        <View style={styles.modalButtons}>
          <Pressable
            activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            style={styles.button}
            onPress={handleAddTask}
          >
              <Animatable.Text animation={zoomOut} style={styles.buttonText}>add</Animatable.Text>
          </Pressable>

          <Pressable
            style={styles.button}
            activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            onPress={handleCloseModal}
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
    margin: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  label: {
    color: "#604d3c",
    marginRight: 10,
  },
  clientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    color: "#604d3c",
  },
  clientNote: {
    color: "#604d3c",
  },
  clientName: {
    color: "#604d3c",
    fontSize: 18,
  },

  locationsContainer: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#b8a69b",
    marginBottom: 10,
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

  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    elevation: 5,
  },
  iconText: {
    color: "#d5d3d5",
  },
  modalButtons: {
    flexDirection: "row",
  },
  modalText: {
    borderWidth: 1,
    borderColor: "#b8a69b",
    borderRadius: 10,
    minWidth: 100,
    padding: 5,
    minWidth: 150,
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

  dropdownStyle: {
    backgroundColor: "#d5d3d5",
    color: "#604d3c",
    fontSize: 15,
    textAlign: "center",
  },

  rowStyle: {
    fontSize: 15,
    color: "#604d3c",
  },
  rowTextStyle: {
    color: "#604d3c",
    fontSize: 15,
  },
  dropdown: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: "#604d3c",
    fontSize: 13,
    textAlign: "center",

    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#d5d3d5",
    textAlign: "center",
    alignItems: "center",
    borderColor: "#b8a69b",
    borderWidth: 1,
    borderRadius: 10,
    width: 140,
  },
});
