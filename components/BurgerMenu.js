import React from "react";
import { View, TouchableHighlight, Modal, Text, Pressable } from "react-native";

import Close from "react-native-vector-icons/AntDesign";

const BurgerMenu = ({ closeModal, isMenuVisible, handleEmptySpacePress }) => {
  const openLoginModal = () => {
    closeModal("login");
  };

  const openSignInModal = () => {
    closeModal("signIn");
  };

  if (!isMenuVisible) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      isMenuVisible={isMenuVisible}
    >
      <View style={styles.overlay}>
        <View style={styles.burgerMenu}>
          <Pressable onPress={openLoginModal}>
            <Text style={styles.burgerMenuItem}>
              if you are registered, please{" "}
              <Text style={styles.inlineText}>click</Text> to log in
            </Text>
          </Pressable>
          <Pressable onPress={openSignInModal}>
            <Text style={styles.burgerMenuItem}>
              If you are not registered, please{" "}
              <Text style={styles.inlineText}>click</Text> to create an account
            </Text>
          </Pressable>
          <TouchableHighlight
            underlayColor="#c4661f"
            style={[styles.buttonInfo]}
            onPress={handleEmptySpacePress}
          >
            <Text style={styles.iconText}>
              <Close name="close" size={30} />
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  burgerMenu: {
    position: "absolute",
    backgroundColor: "#71798e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 45,
    borderRadius: 20,
    width: 250,
    textAlign: "center",
    color: "#d5d3d5",
    margin: "auto",
    textAlign: "center",
  },
  buttonInfo: {
    backgroundColor: "#b8a69b",
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 5,
    paddingLeft: 15,
    marginTop: 30,
    textAlign: "center",
  },
  iconText: {
    marginRight: 10,
    color: "#d5d3d5",
  },
  inlineText: {
    color: "#b8a69b",
    fontSize: 23,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  burgerMenuItem: {
    fontFamily: "vidaloka",
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#d5d3d5",
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
  },
};

export default BurgerMenu;
