import React, { PropsWithChildren, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";
//
import ModalWrapper from "./ModalWrapper";
import ControlledCheckbox from "./ControlledCheckbox";
import Hyperlink from "./Hyperlink";
import Spinner from "./Spinner";

interface IProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  isDeleting?: boolean;
}

const ConfirmDelete: React.FC<IProps> = ({
  children,
  open,
  onClose = () => undefined,
  onConfirm = () => undefined,
  isDeleting,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("🚀 ~ ConfirmDelete");
  // renders
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <View style={s.container}>
        <Text style={s.heading}>Delete this task?</Text>
        {children || (
          <Pressable
            style={s.article}
            onPress={() => setIsChecked((prev) => !prev)}
          >
            <>
              <ControlledCheckbox isChecked={isChecked} />
              <View style={{ flexDirection: "column" }}>
                <Text style={s.p}>
                  Also delete sub tasks within this project
                </Text>
                <Text style={s.p}>folder on device</Text>
              </View>
            </>
          </Pressable>
        )}
        <View style={s.footer}>
          <Hyperlink label="Cancel" action={onClose} />
          <Spinner pending={isDeleting} as="primary">
            <Hyperlink label="OK" action={onConfirm} />
          </Spinner>
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
