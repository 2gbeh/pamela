import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { ListChecksIcon } from "lucide-react-native";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps {
  total: number;
}

const Ribbon: React.FC<IProps> = ({ total }) => {
  console.log("🚀 ~ Ribbon");
  // renders
  return (
    <Pressable style={s.container}>
      <View style={s.wrapper}>
        <ListChecksIcon size={20} color={COLOR.text} />
        <Text style={s.label}>Completed</Text>
      </View>
      <Text style={s.total}>{total}</Text>
    </Pressable>
  );
};

export default React.memo(Ribbon);

const s = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.text,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
  },
  total: {
    color: COLOR.primary,
    fontFamily: FONT.RobotoRegular,
  },
});
