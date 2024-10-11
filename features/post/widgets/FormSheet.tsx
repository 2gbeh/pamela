import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

const FormSheet = () => {
  console.log("🚀 ~ FormSheet");
  // renders
  return (
    <View>
      <Text>FormSheet</Text>
    </View>
  );
};

export default React.memo(FormSheet);

const s = StyleSheet.create({
  container: {},
});
