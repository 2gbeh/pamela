import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckIcon } from "lucide-react-native";
import { COLOR } from "@/constants/THEME";

interface IProps {
  isChecked?: boolean;
}

const ControlledCheckbox: React.FC<IProps> = ({ isChecked }) => {
  console.log("🚀 ~ ControlledCheckbox");
  // renders
  return isChecked ? (
    <View style={[s.box, s.checked]}>
      <CheckIcon color={COLOR.background} size={16} strokeWidth={3} />
    </View>
  ) : (
    <View style={[s.box, s.unchecked]}></View>
  );
};

export default React.memo(ControlledCheckbox);

const s = StyleSheet.create({
  _: {},
  box: {
    borderWidth: 2,
    borderRadius: 2,
    width: 18,
    height: 18,
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
