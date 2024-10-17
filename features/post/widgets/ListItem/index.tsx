import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import { CheckIcon, Trash2Icon } from "lucide-react-native";
import { StringHelper } from "@/utils/helpers/common/string.helper";
import { COLOR } from "@/constants/THEME";
//
import ConfirmDelete from "../ConfirmDelete";
import { PostEntity } from "../../core/post.interface";
import { UserEntity } from "@/features/user/core/user.interface";
import { listItemStyles as s } from "./styles";
import { useListItem } from "./useListItem";

interface IProps {
  data: UserEntity;
}

const defaultAvatar = require("@/assets/images/avatar.png");

const ListItem: React.FC<IProps> = ({ data }) => {
  const summary = StringHelper.truncate(data?.company?.catchPhrase, 36);
  const {
    isCompleted,
    toggleIsCompleted,
    toBeDeleted,
    showConfirmDelete,
    toggleConfirmDelete,
    handleDeleteIntent,
    cancelDeleteIntent,
    handleDelete,
    isDeleting,
  } = useListItem();
  console.log("🚀 ~ ListItem");
  // renders
  return (
    <>
      <View
        style={s.container(isCompleted || data.id == toBeDeleted).transform}
      >
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
            <Text style={s.static.title}>{data.username}</Text>
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
        onClose={cancelDeleteIntent}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default React.memo(ListItem);
