import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
  Pressable,  
  Animated,
  Share as ShareModule,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Exit from "react-native-vector-icons/MaterialCommunityIcons";
import Mail from "react-native-vector-icons/AntDesign";
import Share from "react-native-vector-icons/Entypo";
import Color from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

import ThemePickerModal from "./ThemePickerModal";

export default function PersonalCabinet({ setSelectedComponent }) {
  const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("theme1");

  const handleAddTask = () => {
    setAddTaskModalVisible(true);
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

  const toggleThemeModal = () => {
    setThemeModalVisible(!themeModalVisible);
  };

  const handlePressIn = () => {};

  const handlePressOut = () => {};

  const sendEmail = () => {
    const email = "frankkat377@gmail.com";
    const subject = "Question from the app";
    const body = "Hello, developer!";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoLink);
  };

  const shareApp = () => {
    const message = "Try this amazing app!";
    const url = "https://example.com";

    ShareModule.share({
      message: message,
      url: url,
      title: "Share the App",
    })
      .then((result) => {
        if (result.action === ShareModule.sharedAction) {
          if (result.activityType) {
            console.log("Sharing was successful");
          } else {
            console.log("Sharing was canceled");
          }
        } else if (result.action === ShareModule.dismissedAction) {
          console.log("Sharing was dismissed");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.userPhotoContainer}>
          <Pressable>
          <Animatable.Text animation={zoomOut} style={styles.buttonImage}>
              <Icon name="photo-video" size={50} />
              </Animatable.Text>
          </Pressable>
        </View>
        <Text style={styles.heading}>Personal Cabinet</Text>
        <View style={styles.userInfo}>
          <Text style={styles.text}>name: John Doe</Text>
          <Text style={styles.text}>email: johndoe@example.com</Text>
          <View style={styles.iconsRow}>
            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={sendEmail}
            >
          <Animatable.Text animation={zoomOut}  style={styles.iconText}>
                <Mail name="mail" size={25} />
                </Animatable.Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={shareApp}
            >
             <Animatable.Text animation={zoomOut} style={styles.iconText}>
                <Share name="share" size={25} />
                </Animatable.Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
           <Animatable.Text animation={zoomOut} style={styles.iconText}>
                <Exit name="exit-run" size={25} />
                </Animatable.Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#b8a69b"
              style={styles.button}
              onPress={toggleThemeModal}
            >
              <Animatable.Text animation={zoomOut} style={styles.iconText}>
                <Color name="color-palette-outline" size={25} />
                </Animatable.Text>
            </TouchableHighlight>
            <ThemePickerModal
              themeModalVisible={themeModalVisible}
              toggleThemeModal={toggleThemeModal}
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
          </View>
        </View>
      </View>
      <View style={styles.container3}></View>
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

  button: {
    padding: 10,
    alignSelf: "center",
  },

  buttonImage: {
    color: "#737c88",
    marginBottom: 20,
  },
  heading: {
    fontFamily: "vidaloka",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#604d3c",
  },
  button: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 1,
    paddingLeft: 10,
    margin: 10,
  },

  userInfo: {
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: "#737c88",
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 18,
  },
  iconsRow: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconText: {
    marginRight: 10,
    color: "#d5d3d5",
  },
});
