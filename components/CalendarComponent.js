import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PhotosessionsList from "./PhotosessionsList";

import CalendarPicker from "react-native-calendar-picker";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);

  const tasksData = {
    "2023-10-10": ["Task 1", "Task 2"],
    "2023-10-15": ["Task 3", "Task 4"],
  };

  const onDateChange = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const tasksForDate = tasksData[formattedDate] || [];
    setSelectedDate(formattedDate);
    setTasks(tasksForDate);
  };

  const customDatesStyles = [];
  const selectedDateStyle = {
    container: {
      backgroundColor: "red",
    },
    text: {
      color: "white",
    },
  };

  if (selectedDate) {
    customDatesStyles.push({
      date: selectedDate,
      style: selectedDateStyle,
    });
  }

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        customDatesStyles={customDatesStyles}
        todayBackgroundColor="#b8a69b"
        selectedDayColor="#737c88"
        textStyle={{ color: "#604d3c" }}
        selectedDayTextColor="#d5d3d5"
      />
      {selectedDate && <PhotosessionsList date={selectedDate} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d3d5",
  },
});
