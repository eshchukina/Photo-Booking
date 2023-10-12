import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Share as ShareModule,
} from "react-native";

export default function Info({ setSelectedComponent }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.heading}>Photo Planner app</Text>
          <View style={styles.userInfo}>
            <Text style={styles.text}>
              Our application is designed to streamline and simplify the process
              of booking and managing photo sessions for photographers. It
              empowers photographers to effortlessly organize their work, manage
              client information, and provide comprehensive session details to
              their clients, all within a single, user-friendly platform.
            </Text>
            <Text style={styles.text}>
              Photographers can create and maintain a list of photo session
              locations, which can include outdoor settings, studios, or any
              other places suitable for a photo shoot.
            </Text>
            <Text style={styles.text}>
              For photographers who utilize studios, the app allows the creation
              of a studio directory. They can add essential details such as
              studio availability, rental costs, and location.
            </Text>
            <Text style={styles.text}>
              The application provides a client management system where
              photographers can store client information securely. This feature
              is ideal for organizing contact details, preferences, and session
              history.
            </Text>
            <Text style={styles.text}>
              One of the app's standout features is the ability to generate a
              comprehensive "session card." This card compiles all the essential
              information about a specific photo session, making it easy for
              photographers to keep track of session details and for clients to
              receive a full overview of their upcoming photo session.
            </Text>

            <Text style={styles.text}>
              The generated session card can be effortlessly shared with
              clients. This eliminates the need to manually communicate session
              details, as all relevant information is conveniently included in
              the card.
            </Text>

            <Text style={styles.text}>
              Time-Saving: The application significantly reduces the time and
              effort photographers spend on managing bookings, communicating
              session details, and organizing client data.
            </Text>

            <Text style={styles.text}>
              Professionalism: The session cards enhance the professional image
              of photographers, offering clients a well-structured overview of
              their sessions.
            </Text>
            <Text style={styles.text}>
              Client Satisfaction: Clients benefit from a seamless booking
              experience and detailed session information, which contributes to
              their overall satisfaction.
            </Text>
            <Text style={styles.text}>
              In summary, our application is an indispensable tool for
              photographers, making the process of booking, managing, and
              communicating photo session details smoother and more efficient
              than ever. With features such as location management, studio
              listings, client databases, and session card generation,
              photographers can elevate their professionalism and offer clients
              a seamless and convenient booking experience. Say goodbye to
              manual administrative tasks and enjoy the benefits of our
              comprehensive photo session booking app.
            </Text>
          </View>
        </View>

        <View style={styles.container3}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "vidaloka",
    backgroundColor: "#71798e",
  },
  container1: {
    flex: 9,
    backgroundColor: "#d5d3d5",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",
    alignItems: "center",
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
    textAlign: "center",
    margin: 12,
  },
  text: {
    color: "#737c88",
    marginBottom: 5,
    fontSize: 15,
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
