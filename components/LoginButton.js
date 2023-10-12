import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Login from "react-native-vector-icons/MaterialCommunityIcons";
import BurgerMenu from "./BurgerMenu";
import ModalLogin from "./ModalLogin";
import ModalSingIn from "./ModalSingIn";

export default function LoginButton() {
  const [isPressed, setIsPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const openModal = (modalType) => {
    setModalVisible(true);
    setActiveModal(modalType);
    setIsMenuVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setActiveModal(null);
    setIsMenuVisible(false);
  };

  const handleEmptySpacePress = () => {
    if (modalVisible) {
      closeModal();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleEmptySpacePress}>
      <View>
        <Pressable
          style={[styles.button, isPressed && styles.buttonActive]}
          underlayColor="#c4661f"
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={openModal}
        >
          <View>
            <Text style={styles.buttonText}>
              <Login name="login-variant" size={30} />
            </Text>
          </View>
        </Pressable>

        {modalVisible && activeModal === "login" && (
          <ModalSingIn closeModal={closeModal} />
        )}
        {modalVisible && activeModal === "signIn" && (
          <ModalLogin closeModal={closeModal} />
        )}
        {modalVisible && activeModal === null && (
          <View>
            <Text>No Modal Selected</Text>
          </View>
        )}

        <BurgerMenu
          handleEmptySpacePress={handleEmptySpacePress}
          closeModal={openModal}
          isMenuVisible={isMenuVisible}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 1,
    backgroundColor: "#71798e",
    alignSelf: "center",
    borderRadius: 50,
    shadowColor: "#000000",
  },
  buttonActive: {
    elevation: 6,
    shadowColor: "rgba(120, 125, 136, 0.5)",
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 2,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#b8a69b",
  },
  buttonActiveText: {
    color: "#783d19",
  },
});
