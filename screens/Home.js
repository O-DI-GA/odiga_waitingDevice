import React from "react";
import { View, StyleSheet } from "react-native";
import WaitingCode from "../components/WaitingCode";
import WaitingRegister from "../components/WaitingRegister";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <WaitingCode />
        <WaitingRegister />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default Home;
