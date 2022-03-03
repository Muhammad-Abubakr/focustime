// lib imports
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Countdown } from "../../components/Countdown";

import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";

export const Timer = ({ focusSubject }) => (
  <View style={styles.container}>
    <Countdown />

    <View style={styles.taskContainer}>
      <Text style={styles.title}>Focusing On</Text>
      <Text style={styles.task}>{focusSubject} </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spacing.lg : spacing.xxl,
  },

  title: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSizes.md,
  },

  task: {
    textAlign: "center",
    color: colors.white,
    fontSize: fontSizes.md,
  },

  taskContainer: {
    marginTop: spacing.lg,
  },
});
