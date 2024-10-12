import React from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "expo-image";
import { BellIcon } from "lucide-react-native";
import { useNetInfo } from "@/hooks/useNetInfo";
import { COLOR } from "@/constants/THEME";
// 
import { appBarStyles as s } from "./styles";

const AppBar = () => {
  const { isConnected } = useNetInfo();
  console.log("🚀 ~ AppBar");
  // renders
  return (
    <View style={s.container}>
      <View style={s.figure}>
        <Image
          source={
            isConnected
              ? "https://github.com/2gbeh.png"
              : "/assets/images/avatar.png"
          }
          placeholder={{ blurhash: process.env.EXPO_PUBLIC_BLURHASH! }}
          contentFit="cover"
          transition={100}
          priority="high"
          style={s.image}
        />
        <View style={s.figcaption}>
          <Text style={s.title}>Welcome back,</Text>
          <Text style={s.subtitle}>Emmanuel</Text>
        </View>
      </View>
      <Pressable style={s.notification}>
        <BellIcon color={COLOR.text} size={20} />
        <View
          style={[
            s.indicator,
            { backgroundColor: isConnected ? COLOR.primary : COLOR.error },
          ]}
        ></View>
      </Pressable>
    </View>
  );
};

export default React.memo(AppBar);
