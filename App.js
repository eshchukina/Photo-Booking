import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import DownloadPage from "./components/DownloadPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AddNewItem from "./components/AddNewItem";
import * as Font from "expo-font";
import PersonalCabinet from "./components/PersonalCabinet";
import Info from "./components/Info";
import Header from "./components/Header";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const fonts = () =>
  Font.loadAsync({
    vidaloka: require("./assets/fonts/OpenSans_SemiCondensed-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("download");

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await fonts();
      await SplashScreen.hideAsync();
      setFont(true);
    }

    prepare();
  }, []);

  const toggleComponent = (component) => {
    setSelectedComponent(component);
  };

  if (font) {
    return (
      <SafeAreaView style={styles.container}>
        {selectedComponent === "download" ? (
          <DownloadPage
            setSelectedComponent={setSelectedComponent}
            toggleComponent={toggleComponent}
          />
        ) : selectedComponent === "dashboard" ? (
          <>
            <Header
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
            <Dashboard setSelectedComponent={setSelectedComponent} />

            <Footer
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
          </>
        ) : selectedComponent === "appendcomponent" ? (
          <>
            <Header
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
            <AddNewItem setSelectedComponent={setSelectedComponent} />
            <Footer
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
          </>
        ) : selectedComponent === "personalcabinet" ? (
          <>
            <Header
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
            <PersonalCabinet setSelectedComponent={setSelectedComponent} />
            <Footer
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
          </>
        ) : selectedComponent === "info" ? (
          <>
            <Header
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
            <Info setSelectedComponent={setSelectedComponent} />
            <Footer
              setSelectedComponent={setSelectedComponent}
              toggleComponent={toggleComponent}
            />
          </>
        ) : null}

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
