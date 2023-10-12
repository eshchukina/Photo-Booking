import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import Close from "react-native-vector-icons/AntDesign";

export default function ThemePickerModal({
  themeModalVisible,
  toggleThemeModal,
  selectedTheme,
  setSelectedTheme,
}) {
  return (
    <Modal
      visible={themeModalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={toggleThemeModal}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>choose a color theme</Text>
          <Pressable
            //  activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            //  android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
            style={styles.button}
          >
            <Image
              source={require("../assets/theme.png")}
              style={{
                width: 150,
                height: 50,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />
          </Pressable>

          <Pressable
            // activeOpacity={Platform.OS === "ios" ? 0.58 : null}
            // android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}

            style={styles.button}
          >
            <Image
              source={require("../assets/theme2.png")}
              style={{
                width: 150,
                height: 50,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />
          </Pressable>

          <TouchableHighlight
            underlayColor="#b8a69b"
            style={styles.closeButton}
            onPress={toggleThemeModal}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heading: {
    fontFamily: "vidaloka",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#604d3c",
    textAlign: "center",
  },
  modalContent: {
    padding: 35,
    borderRadius: 20,
    width: 250,
    textAlign: "center",
    margin: "auto",
    backgroundColor: "lightgrey",
    color: "#604d3c",
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
    backgroundColor: "lightgrey",
    borderColor: "#b8a69b",
    borderWidth: 2,
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
