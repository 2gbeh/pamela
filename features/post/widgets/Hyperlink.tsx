import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps {
  label: string;
  action: () => void;
}

const Hyperlink: React.FC<IProps> = ({ label, action }) => {
  console.log("🚀 ~ Hyperlink");
  // renders
  return (
    <Pressable style={s.container} onPress={action}>
      <Text style={s.label}>{label}</Text>
    </Pressable>
  );
};

export default React.memo(Hyperlink);

const s = StyleSheet.create({
  _: {},
  container: {},
  label: {
    color: COLOR.primary,
    // borderWidth: 1,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
