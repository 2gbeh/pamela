import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Modal, Pressable } from "react-native";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  forceClose?: boolean;
}

const BottomSheetWrapper: React.FC<IProps> = ({
  children,
  open,
  onClose = () => undefined,
  forceClose,
}) => {
  console.log("🚀 ~ BottomSheetWrapper");
  // renders
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={s.overlay}
        onPress={() => (forceClose ? undefined : onClose())}
      >
        <View style={s.container}>
          <View style={s.header}>
            <View style={s.notch} />
          </View>
          <View style={s.content}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(BottomSheetWrapper);

const s = StyleSheet.create({
  overlay: {
    backgroundColor: COLOR.opacity.point50,
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  header: {
    paddingTop: 22,
    alignItems: "center",
  },
  notch: {
    backgroundColor: "#49454F66",
    borderRadius: 100,
    width: 32,
    height: 4,
  },
  content: {
    padding: 24,
  },
});
