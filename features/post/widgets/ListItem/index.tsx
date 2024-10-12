import React, { useState } from "react";
import { Pressable, View, Text, Image } from "react-native";
import { CheckIcon, Trash2Icon } from "lucide-react-native";
import { StringHelper } from "@/utils/helpers/common/string.helper";
import { COLOR } from "@/constants/THEME";
//
import { listItemStyles as s } from "./styles";

interface IProps {
  title: string;
  summary: string;
}

const defaultAvatar = require("@/assets/images/avatar.png");

const ListItem: React.FC<IProps> = ({ title, summary }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleIsCompleted = () => setIsCompleted((prev) => !prev);
  const handleDelete = async () => {};
  console.log("🚀 ~ ListItem");
  // renders
  return (
    <View style={s.container(isCompleted).transform}>
      <Pressable style={s.static.wrapper} onPress={toggleIsCompleted}>
        <View style={s.static.figure}>
          <Image source={defaultAvatar} alt="" style={s.static.image} />
          {isCompleted && (
            <View style={s.static.selected}>
              <CheckIcon color={COLOR.background} size={10} strokeWidth={3} />
            </View>
          )}
        </View>
        <View style={s.static.figcaption}>
          <Text style={s.static.title}>{title}</Text>
          <Text style={s.static.article}>
            {StringHelper.truncate(summary, 36)}
          </Text>
        </View>
      </Pressable>
      <Pressable style={s.static.icon} onPress={handleDelete}>
        <Trash2Icon size={16} color={COLOR.error} />
      </Pressable>
    </View>
  );
};

export default React.memo(ListItem);
