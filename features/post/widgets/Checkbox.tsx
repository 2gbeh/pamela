import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { CheckIcon } from "lucide-react-native";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps {
  defaultChecked?: boolean;
  action?: () => void;
}

const Checkbox: React.FC<IProps> = ({
  defaultChecked,
  action = () => undefined,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const toggleChecked = () => {
    setIsChecked((prev) => !prev);
    action();
  };
  console.log("🚀 ~ Checkbox");
  // renders
  return isChecked ? (
    <Pressable style={[s.box, s.checked]} onPress={toggleChecked}>
      <CheckIcon color={COLOR.background} size={22} strokeWidth={3} />
    </Pressable>
  ) : (
    <Pressable style={[s.box, s.unchecked]} onPress={toggleChecked}></Pressable>
  );
};

export default React.memo(Checkbox);

const s = StyleSheet.create({
  _: {},
  box: {
    borderWidth: 2,
    borderRadius: 4,
    width: 20,
    height: 20,
  },
  checked: {
    backgroundColor: COLOR.primary,
    borderColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  unchecked: {
    borderColor: COLOR.text_muted,
  },
});
