// Lib imports
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";

// Native Component imports
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState("Learning");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What would you like to focus on? </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"Enter your goal here"}
            style={styles.input}
            onSubmitEditing={({ nativeEvent: { text } }) => {
              setTmpItem(text);
            }}
          />

          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.5,
    justifyContent: "center",
    padding: spacing.md,
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },

  inputContainer: {
    marginTop: spacing.md,
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    marginRight: spacing.md,
    flex: 1,
  },
});
