import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

function WaitingCode() {
  const [code, setCode] = useState("");
  const hiddenInputRef = useRef(null);

  useEffect(() => {
    hiddenInputRef.current.focus();
  }, []);

  const handleChange = (text) => {
    // 숫자와 알파벳만 허용하는 정규 표현식
    const filteredText = text.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    setCode(filteredText);
  };

  const handleVerify = () => {
    alert(`입력한 인증코드: ${code}`);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => hiddenInputRef.current.focus()}
      activeOpacity={1}
    >
      <Text style={styles.title}>인증번호 입력</Text>
      <View style={styles.codeContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View key={index} style={styles.codeInputWrapper}>
            <Text style={styles.codeInput}>
              {code[index] ? code[index] : ""}
            </Text>
            <View style={styles.underline} />
          </View>
        ))}
      </View>
      <TextInput
        ref={hiddenInputRef}
        style={styles.hiddenInput}
        keyboardType="default"
        maxLength={6}
        value={code}
        onChangeText={handleChange}
        autoFocus={true}
      />
      <TouchableOpacity style={styles.completeButton} onPress={handleVerify}>
        <Text style={styles.completeButtonText}>완료</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 150,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 50,
  },
  codeInputWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  codeInput: {
    fontSize: 24,
    textAlign: "center",
  },
  underline: {
    height: 2,
    width: "100%",
    backgroundColor: "black",
    marginTop: 5,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  completeButton: {
    backgroundColor: "#FFD600",
    width: 100,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  completeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WaitingCode;
