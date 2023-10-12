import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight, 
   Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";

import Close from "react-native-vector-icons/AntDesign";
import { isEmailValid, isPasswordValid } from "./Validation";

export default function ModalSingIn({
  visible,
  onClose,
  closeModal,
  isDarkMode,
  handleCloseModal,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePressIn = () => {
    setEmailError("");

    setPasswordError("");
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePressIn1 = () => {
    setPasswordError("");
    setEmailError("");
  };

  const handlePressOut1 = () => {
    setIsPressed1(false);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseModalSingIn = () => {
    closeModal();
  };

  const handleFormSubmit = () => {
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      setEmailError(!isEmailValid(email) ? "invalid email" : "");
      setPasswordError(
        !isPasswordValid(password)
          ? "password must be at least 6 characters long"
          : ""
      );
      setEmailError("");

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
            Login
          </Text>

          <TextInput
            style={[
              styles.input,
              isDarkMode ? styles.darkInput : styles.lightInput,
              emailError && styles.inputError,
            ]}
            placeholder={"email"}
            placeholderTextColor="#b8a69b"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={handlePressIn}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                isDarkMode ? styles.darkInput : styles.lightInput,
                passwordError && styles.inputError,
              ]}
              secureTextEntry={!showPassword}
              placeholder="password"
              placeholderTextColor="#b8a69b"
              value={password}
              onChangeText={(text) => setPassword(text)}
              onFocus={handlePressIn}
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
              email && styles.buttonActive,
            ]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handleFormSubmit}
          >
           <Animatable.Text animation={zoomOut} style={styles.buttonText}>create</Animatable.Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#b8a69b"
            style={[
              styles.closeButton,

              password && styles.buttonActive,
              isDarkMode ? styles.darkButton : styles.lightButton,
            ]}
            onPressIn={() => {
              handleCloseModalSingIn();
              handlePressOut1();
              handlePressIn1();
            }}
          >
           <Animatable.Text animation={zoomOut} style={styles.buttonText}>
              <Close name="close" size={30} />
              </Animatable.Text>
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
    paddingTop: 65,
    paddingBottom: 55,
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
    color: "#FFFFFF",
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
    alignItems: "center",
    backgroundColor: "#737c88",

    marginTop: 15,
  },
  buttonText: {
    color: "#d5d3d5",
  },
  closeButton: {
    borderRadius: 50,
    padding: 12,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: "center",
    backgroundColor: "#737c88",
  },
  buttonActive: {
    color: "#604d3c",
  },
  darkButton: {
    backgroundColor: "#756685",
    color: "#e0e4dc",
  },
  lightButton: {
    backgroundColor: "#737c88",
  },
  errorText: {
    fontSize: 10,
    color: "#604d3c",
    marginLeft: 5,
  },
});
