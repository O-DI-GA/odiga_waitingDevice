import React from "react";
import { View, StyleSheet } from "react-native";
import WaitingCode from "../components/WaitingCode";
import WaitingRegister from "../components/WaitingRegister";
import CurrentNum from "../components/CurrentNum";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <WaitingCode />
        <WaitingRegister />
      </View>
      <CurrentNum />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9F9F9B",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },
});

export default Home;
