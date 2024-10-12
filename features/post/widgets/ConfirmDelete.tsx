import React, { PropsWithChildren, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";
//
import ModalWrapper from "./ModalWrapper";
import Checkbox from "./Checkbox";
import Hyperlink from "./Hyperlink";

interface IProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmDelete: React.FC<IProps> = ({
  children,
  open,
  onClose = () => undefined,
  onConfirm = () => undefined,
}) => {
  console.log("🚀 ~ ConfirmDelete");
  // renders
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <View style={s.container}>
        <Text style={s.heading}>Delete this task?</Text>
        <View style={s.article}>
          <Checkbox />
          <View style={{ flexDirection: "column" }}>
            <Text style={s.p}>Also delete sub tasks within this project</Text>
            <Text style={s.p}>folder on device</Text>
          </View>
        </View>
        <View style={s.footer}>
          <Hyperlink label="Cancel" action={onClose} />
          <Hyperlink label="OK" action={onConfirm} />
        </View>
      </View>
    </ModalWrapper>
  );
};

export default React.memo(ConfirmDelete);

const s = StyleSheet.create({
  _: {},
  container: {
    // paddingHorizontal: 8,
    paddingTop: 8,
    minHeight: 160,
    rowGap: 16,
  },
  heading: {
    color: COLOR.text,
    fontFamily: FONT.RobotoRegular,
    fontSize: 24,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
    columnGap: 16,
  },
  p: {
    color: COLOR.text_muted,
    fontFamily: FONT.RobotoRegular,
    // fontSize: 16,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 24,
    position: "absolute",
    bottom: 16,
    alignSelf: "flex-end",
  },
});
