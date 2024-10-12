import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";
import { XIcon } from "lucide-react-native";

interface IProps extends PropsWithChildren {
  heading?: string;
  open?: boolean;
  onClose?: () => void;
  forceClose?: boolean;
}

const ModalWrapper: React.FC<IProps> = ({
  children,
  heading,
  open,
  onClose = () => undefined,
  forceClose,
}) => {
  console.log("🚀 ~ ModalWrapper");
  // renders
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={s.overlay}
        // onPress={() => (forceClose ? undefined : onClose())}
      >
        <View style={s.container}>
          {!!heading && (
            <View style={s.header}>
              <Text style={s.heading}>{heading}</Text>
              <Pressable onPress={onClose}>
                <XIcon color={COLOR.icon} size={18} />
              </Pressable>
            </View>
          )}
          <View style={s.content}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(ModalWrapper);

const s = StyleSheet.create({
  overlay: {
    backgroundColor: COLOR.opacity.point50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: COLOR.surface,
    borderRadius: 24,
    width: 320,
  },
  header: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: COLOR.text,
    fontFamily: FONT.RobotoRegular,
    fontSize: 22,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
