import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Close from "react-native-vector-icons/AntDesign";
import { isEmailValid, isPasswordValid, isNameValid } from "./Validation";

export default function ModalLogin({
  visible,
  onClose,
  isDarkMode,
  closeModal,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handlePressIn = () => {
    setEmailError("");
    setNameError("");
    setPasswordError("");
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePressIn1 = () => {
    setIsPressed1(true);
  };

  const handlePressOut1 = () => {
    setIsPressed1(false);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseModal = () => {
    closeModal();
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

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlayContent}></View>
        </TouchableWithoutFeedback>
        <View
          style={[styles.modalContent, isDarkMode ? styles.dark : styles.light]}
        >
          <Text
            style={[
              styles.modalText,
              styles.titleText,
              isDarkMode ? styles.dark : styles.light,
            ]}
          >
            Registration
          </Text>

          <View>
            <TextInput
              style={[
                styles.input,
                isDarkMode ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="name"
              placeholderTextColor="#b8a69b"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            {nameError ? (
              <Text style={styles.errorText}>{nameError}</Text>
            ) : null}
          </View>

          <TextInput
            style={[
              styles.input,
              isDarkMode ? styles.darkInput : styles.lightInput,
            ]}
            placeholder="email"
            placeholderTextColor="#b8a69b"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                isDarkMode ? styles.darkInput : styles.lightInput,
              ]}
              secureTextEntry={!showPassword}
              placeholder="password"
              placeholderTextColor="#b8a69b"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable
              style={styles.lockPassword}
              onPress={handlePasswordVisibility}
            >
              <Text>
                {showPassword ? (
                  <Icon name="eye" size={20} color="#71798e" />
                ) : (
                  <Icon name="eye-slash" size={20} color="#71798e" />
                )}
              </Text>
            </Pressable>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <TouchableHighlight
            underlayColor="#b8a69b"
            style={[
              styles.button,
              isDarkMode ? styles.darkButton : styles.lightButton,
            ]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handleFormSubmit}
          >
            <Text style={styles.buttonText}>register</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#b8a69b"
            style={[
              styles.closeButton,
              isPressed1 && styles.buttonActive,
              isDarkMode ? styles.darkButton : styles.lightButton,
            ]}
            onPressIn={handlePressIn}
            onPressOut={() => {
              handlePressOut1();
              handleCloseModal();
            }}
          >
            <Text style={styles.buttonText}>
              <Close name="close" size={30} />
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 35,
    borderRadius: 20,
    width: 250,
    textAlign: "center",
    margin: "auto",

    textAlign: "center",
  },
  light: {
    backgroundColor: "#d5d3d5",
    color: "#604d3c",
  },
  dark: {
    backgroundColor: "#333333",
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "vidaloka",
  },
  input: {
    borderColor: "#71798e",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    marginTop: 15,
  },
  darkInput: {
    backgroundColor: "#b8bbc4",
  },
  lightInput: {
    backgroundColor: "#d5d3d5",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,

    borderColor: "#71798e",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    marginTop: 15,
  },
  lockPassword: {
    padding: 5,
    position: "relative",
    top: 7,
  },
  button: {
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#737c88",
  },

  closeButton: {
    borderRadius: 50,
    padding: 12,
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    alignItems: "center",
    backgroundColor: "#737c88",
  },
  buttonActive: {
    elevation: 6,
    shadowColor: "rgba(120, 125, 136, 0.5)",
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 2,
    shadowRadius: 10,
    color: "#604d3c",
  },
  darkButton: {
    backgroundColor: "#756685",
    color: "#e0e4dc",
  },
  lightButton: {
    backgroundColor: "#737c88",
  },
  buttonText: {
    textAlign: "center",
    color: "#d5d3d5",
  },
  errorText: {
    fontSize: 10,
    color: "#604d3c",
    marginLeft: 5,
  },
});
