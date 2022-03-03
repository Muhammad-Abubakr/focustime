import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minToMil = (min) => min * 1000 * 60;

export const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minToMil(minutes));
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const min = Math.floor((millis / 1000 / 60) % 60);
  const sec = Math.floor((millis / 1000) % 60);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {min}:{sec}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 50,
    borderColor: colors.background,
    borderRadius: fontSizes.xxxl,
  },

  text: {
    color: colors.background,
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    textAlign: "center",
    padding: spacing.lg,
  },
});
