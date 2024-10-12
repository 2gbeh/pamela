import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import { CheckIcon, Trash2Icon } from "lucide-react-native";
import { StringHelper } from "@/utils/helpers/common/string.helper";
import { COLOR } from "@/constants/THEME";
//
import ConfirmDelete from "../ConfirmDelete";
import { listItemStyles as s } from "./styles";
import { PostEntity } from "../../core/post.interface";
import { UserEntity } from "@/features/user/core/user.interface";
import { useListItem } from "./useListItem";

interface IProps {
  data: UserEntity;
}

const defaultAvatar = require("@/assets/images/avatar.png");

const ListItem: React.FC<IProps> = ({ data }) => {
  const title = data.username;
  const summary = StringHelper.truncate(data?.company?.catchPhrase, 36);
  const {
    isCompleted,
    toggleIsCompleted,
    showConfirmDelete,
    toggleConfirmDelete,
    handleDeleteIntent,
    handleDelete,
  } = useListItem();
  console.log("🚀 ~ ListItem");
  // renders
  return (
    <>
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
            <Text style={s.static.article}>{summary}</Text>
          </View>
        </Pressable>
        <Pressable
          style={s.static.icon}
          onPress={() => handleDeleteIntent(data.id)}
        >
          <Trash2Icon size={16} color={COLOR.error} />
        </Pressable>
      </View>

      {/* MODAL */}
      <ConfirmDelete
        open={showConfirmDelete}
        onClose={toggleConfirmDelete}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default React.memo(ListItem);
