import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { Image } from "expo-image";
import { BellIcon } from "lucide-react-native";
import { FONT, COLOR } from "@/constants/THEME";

const AppBar = () => {
  console.log("🚀 ~ AppBar");
  // renders
  return (
    <View style={s.container}>
      <View style={s.figure}>
        <Image
          style={s.image}
          source="https://github.com/2gbeh.png"
          placeholder={{ blurhash: process.env.EXPO_PUBLIC_BLURHASH! }}
          contentFit="cover"
          transition={100}
          priority="high"
        />
        <View style={s.figcaption}>
          <Text style={s.title}>Hello,</Text>
          <Text style={s.subtitle}>Sterling</Text>
        </View>
      </View>
      <Pressable style={s.notification}>
        <BellIcon color={COLOR.text} size={20} />
        <View style={s.indicator}></View>
      </Pressable>
    </View>
  );
};

export default React.memo(AppBar);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  figure: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  image: {
    backgroundColor: COLOR.avatar,
    borderColor: COLOR.avatar,
    borderWidth: 1,
    borderRadius: 48,
    width: 48,
    height: 48,
  },
  figcaption: {
    rowGap: 4,
  },
  title: {
    color: COLOR.text,
    fontFamily: FONT.RobotoRegular,
  },
  subtitle: {
    color: COLOR.text,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
  },
  notification: {
    position: "relative",
  },
  indicator: {
    backgroundColor: COLOR.error,
    borderRadius: 8,
    width: 10,
    height: 10,
    position: "absolute",
    top: -2,
    right: -2,
  },
});
