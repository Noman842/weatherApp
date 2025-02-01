import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";


const Timer = () => {
  const [lastClaimTime, setLastClaimTime] = useState(null); // Stores the last claim timestamp
  const [tokens, setTokens] = useState(0); // Number of tokens claimed
  const [timeRemaining, setTimeRemaining] = useState(0); // Remaining time in milliseconds
  const [isloading, setIsloading] = useState(false)

  const userId = "user123"; // Replace this with your user's unique ID

  // Load user data from Firestore on app start
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userDoc = await firestore().collection("users").doc(userId).get();
        if (userDoc.exists) {
          const userData: any = userDoc.data();
          setLastClaimTime(userData.lastClaimTime || null);
          setTokens(userData.tokens || 0);
        }
      } catch (error) {
        console.error("Failed to load data from Firestore:", error);
      }
    };

    loadUserData();
  }, []);

  // Update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (lastClaimTime) {
        const now = Date.now();
        const remainingTime = 10 * 4 * 1000 - (now - lastClaimTime);
        setTimeRemaining(remainingTime > 0 ? remainingTime : 0);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [lastClaimTime]);

  // Save user data to Firestore
  const saveUserData = async (tokens: any, lastClaimTime: any) => {
    try {
      await firestore().collection("users").doc(userId).set({
        tokens,
        lastClaimTime,
      });
    } catch (error) {
      console.error("Failed to save data to Firestore:", error);
    }
  };

  // Format time remaining into hours, minutes, and seconds
  const formatTime = (milliseconds: any) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const handleClaim = async () => {
    const now: any = Date.now();

    if (!lastClaimTime || now - lastClaimTime >= 10 * 4 * 1000) {
      const newTokens = tokens + 20.00;
      setLastClaimTime(now); // Update the last claim timestamp
      setTokens(newTokens); // Increment tokens
      await saveUserData(newTokens, now); // Save to Firestore
      Alert.alert("Success", "You claimed your token!");
    } else {
      Alert.alert(
        "Wait",
        `You can claim your next token in ${formatTime(timeRemaining)}.`
      );
    }
  };

  return (
    <View style={styles.container}>
      {isloading ?
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }} >HEhehehe</Text> :
        <>
          <Text style={styles.tokenText}>Tokens: {tokens}.00</Text>
          {timeRemaining > 0 ? (
            <Text style={styles.remainingTime}>
              {formatTime(timeRemaining)}.
            </Text>
          ) : (
            <Text style={styles.readyText}>You can claim now!</Text>
          )}
          <TouchableOpacity
            disabled={timeRemaining > 0}
            style={{ height: 30, width: 100, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}
            onPress={handleClaim}
          >
            <Text style={{
              color: '#fff', fontSize: 18, fontWeight: '500', fontFamily: 'Poppins-Medium'
            }}>ZNX</Text>
          </TouchableOpacity>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tokenText: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Medium'

  },
  remainingTime: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
    fontFamily: 'Poppins-Medium'
  },
  readyText: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    fontFamily: 'Poppins-Medium'

  },
});

export default Timer;