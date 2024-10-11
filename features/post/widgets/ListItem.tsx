import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { Image } from "expo-image";
import { CheckCheckIcon, Trash2Icon } from "lucide-react-native";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps {
  title: string;
  summary: string;
}

const ListItem: React.FC<IProps> = ({ title, summary }) => {
  const [done, setDone] = useState(false);
  const toggleDone = () => setDone((prev) => !prev);
  console.log("🚀 ~ ListItem");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.wrapper} onPress={toggleDone}>
        <Image
          style={s.image}
          source="/assets/images/avatar.png"
          placeholder={{ blurhash: process.env.EXPO_PUBLIC_BLURHASH! }}
          contentFit="cover"
          transition={100}
        />
        <View style={s.figcaption}>
          <Text style={s.title}>{title}</Text>
          <View style={s.article}>
            <CheckCheckIcon size={18} color="#0093dd" />
            <Text style={s.summary}>{summary}</Text>
          </View>
        </View>
      </Pressable>
      <Trash2Icon size={16} color={COLOR.error} />
    </View>
  );
};

export default React.memo(ListItem);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  image: {
    backgroundColor: COLOR.avatar,
    borderColor: COLOR.avatar,
    borderWidth: 1,
    borderRadius: 48,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  figcaption: {
    rowGap: 4,
  },
  title: {
    color: COLOR.text,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  summary: {
    color: COLOR.text_muted,
    fontFamily: FONT.RobotoRegular,
  },
});
