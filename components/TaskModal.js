import React from "react";
import { Modal, View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function TaskModal({ visible, task, onClose, onDelete }) {
  const handleDelete = () => {
    onDelete(task);
    onClose();
  };

  const handleEdit = () => {};

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        {task && (
          <>
            <Image
              source={require("../assets/info.png")}
              style={{
                width: 300,
                height: 50,
                resizeMode: "contain",
              }}
            />
            <Text style={styles.modalText}>photographer's name:</Text>
            <Text style={styles.modalText}>client name: </Text>
            <Text style={styles.modalText}>location name: {task.location}</Text>
            <Text style={styles.modalText}>adress: </Text>
            <Text style={styles.modalText}>date:</Text>
            <Text style={styles.modalText}>time: {task.startDate}</Text>
            <Text style={styles.modalText}>cost: </Text>
            <Text style={styles.modalText}>number of photos: </Text>
            <Text style={styles.modalText}>
              number of photos (retouching):{" "}
            </Text>
            <Text style={styles.modalText}>date of completion: </Text>
            <Text style={styles.modalText}>notes: </Text>
            <Image
              source={require("../assets/pattern.png")}
              style={{
                width: 200,
                height: 50,
                resizeMode: "contain",
              }}
            />

            <View style={styles.modalButtons}>
              <Pressable style={styles.button} onPress={handleDelete}>
                <Text style={styles.buttonText}>delete</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={handleDelete}>
                <Text style={styles.buttonText} onPress={onClose}>
                  close
                </Text>
              </Pressable>
              <Pressable style={styles.button} onPress={handleEdit}>
                <Text style={styles.buttonText}>edit</Text>
              </Pressable>
            </View>
          </>
        )}
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
  modalButtons: {
    flexDirection: "row",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#604d3c",
  },
  button: {
    backgroundColor: "#b8a69b",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    margin: 10,
  },
  buttonText: {
    color: "#737c88",
  },
});
