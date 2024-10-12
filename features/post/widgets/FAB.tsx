import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { PlusIcon } from "lucide-react-native";
import { COLOR } from "@/constants/THEME";

interface IProps {
  action?: () => void;
}

const FAB: React.FC<IProps> = ({ action = () => undefined }) => {
  console.log("🚀 ~ FAB");
  // renders
  return (
    <Pressable style={s.container} onPress={action}>
      <PlusIcon color={COLOR.background} size={24} strokeWidth={3} />
    </Pressable>
  );
};

export default React.memo(FAB);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    borderRadius: 16,
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 24,
    right: 16,
  },
});
