// lib imports
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

// native imports
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
// utils
import { fontSizes } from "./src/utils/sizes";
import { colors } from "./src/utils/colors";

// App
const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  paragraph: {
    fontSize: fontSizes.md,
    color: colors.nordBlue,
  },
});

export default App;
