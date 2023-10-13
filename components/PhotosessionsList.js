import React, { useState, useEffect } from "react";

import { ScrollView, Text, View, StyleSheet, Image,  Animated } from "react-native";
import PhotosessionModal from "./PhotosessionModal";
import SelectDropdown from "react-native-select-dropdown";
import Arrow from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const countries = ["done", "cancel"];

export default function PhotosessionsList({ date }) {
  const [tasks, setTasks] = useState([
    {
      startDate: "11:00",
      clientName: "Susan",
      location: "photo studio",
      status: "done",
    },
    {
      startDate: "12:00",
      clientName: "Peter",
      location: "street",
      status: "done",
    },
    {
      startDate: "13:00",
      clientName: "Anna",
      location: "photo studio",
      status: "done",
    },
    {
      startDate: "14:00",
      clientName: "Sarah",
      location: "theater",
      status: "done",
    },
    {
      startDate: "15:00",
      clientName: "Mia",
      location: "theater",
      status: "cancel",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTaskPress = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalVisible(false);
  };

  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (taskId, selectedStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: selectedStatus } : task
    );
    setTasks(updatedTasks);
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
    <ScrollView>
       <Animatable.Image
          animation={zoomOut}
        source={require("../assets/schedule.png")}
        style={{
          width: 100,
          height: 50,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />

      {tasks.map((task, index) => (
        <View key={index} style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableHeaderFirst}>
              <Text style={styles.taskItem}>{index + 1}</Text>
            </View>
            <View style={styles.tableHeader}>
              <Text
                style={styles.taskItem}
                onPress={() => handleTaskPress(task)}
              >
                Sarah Peters,{" "}
              </Text>
            </View>
            <View style={styles.tableHeader}>
              <Text
                style={styles.taskItem}
                onPress={() => handleTaskPress(task)}
              >
                {task.location},
              </Text>
            </View>
            <View style={styles.tableHeader}>
              <Text
                style={styles.taskItem}
                onPress={() => handleTaskPress(task)}
              >
                {task.startDate}
              </Text>
            </View>
            <View style={styles.tableHeader}>
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                style={styles.selectDropdown}
                defaultButtonText={
                  <Text>
                    <Arrow name="arrow-drop-down" size={30} />
                  </Text>
                }
                buttonTextStyle={styles.buttonTextStyle}
                dropdownStyle={styles.dropdownStyle}
                buttonStyle={styles.buttonStyle}
                rowStyle={styles.rowStyle}
                rowTextStyle={styles.rowTextStyle}
              />
            </View>
          </View>
        </View>
      ))}

      <PhotosessionModal
        visible={modalVisible}
        task={selectedTask}
        onDelete={handleDelete}
        onClose={closeModal}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskList: {
    flexDirection: "row",
  },
  table: {
    backgroundColor: "#d5d3d5",
    marginLeft: 10,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
  },
  tableHeader: {
    flex: 1,
  },
  tableHeaderFirst: {
    width: "5%",
  },
  tableData: {
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
  },
  taskItem: {
    color: "#604d3c",
    fontSize: 13,
    textAlign: "center",
    backgroundColor: "#d5d3d5",
  },
  selectDropdown: {
    color: "#604d3c",
    textAlign: "center",
    backgroundColor: "#d5d3d5",
  },
  dropdownStyle: {
    backgroundColor: "#d5d3d5",
    color: "#604d3c",
    fontSize: 15,
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  buttonStyle: {
    backgroundColor: "#d5d3d5",
    textAlign: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#604d3c",
    fontSize: 13,
    textAlign: "center",
    marginRight: "60%",
    alignItems: "center",
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
    width: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
