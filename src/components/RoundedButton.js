import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";

export const RoundedButton = ({ style = {}, size = 125, ...props }) => (
  <TouchableOpacity
    style={[styles(size).radius, style]}
    onPress={props.onPress}
  >
    <Text style={styles(size).text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      borderColor: colors.white,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
    },

    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });
