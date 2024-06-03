import React from "react";
import { View, StyleSheet } from "react-native";
import WaitingCode from "../components/WaitingCode";

const Home = () => {
  return (
    <View style={styles.container}>
      <WaitingCode />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  waitingContainer: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  waitingText: {
    fontSize: 18,
    color: "#333",
  },
});

export default Home;
