import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "expo-image";
import { CheckCheckIcon, Trash2Icon } from "lucide-react-native";
import { StringHelper } from "@/utils/helpers/common/string.helper";
import { COLOR } from "@/constants/THEME";
// 
import { listItemStyles as s } from "./styles";

interface IProps {
  title: string;
  summary: string;
}

const ListItem: React.FC<IProps> = ({ title, summary }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleIsCompleted = () => setIsCompleted((prev) => !prev);
  console.log("🚀 ~ ListItem");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.wrapper} onPress={toggleIsCompleted}>
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
            {isCompleted && <CheckCheckIcon size={18} color={COLOR.info} />}
            <Text style={s.summary}>{StringHelper.truncate(summary, 36)}</Text>
          </View>
        </View>
      </Pressable>
      <View style={{ width: 16, height: 16 }}>
        <Trash2Icon size={16} color={COLOR.error} />
      </View>
    </View>
  );
};

export default React.memo(ListItem);
