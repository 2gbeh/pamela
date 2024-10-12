import { Platform, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const listItemStyles = {
  _: {},
  container: (isSelected = false) =>
    StyleSheet.create({
      transform: {
        backgroundColor: isSelected ? COLOR.bubble_dark : COLOR.none,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    }),
  static: StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 16,
    },
    figure: {
      position: "relative",
    },
    selected: {
      backgroundColor: COLOR.primary,
      borderColor: COLOR.background,
      borderWidth: 1,
      height: 18,
      width: 18,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 48,
      position: "absolute",
      bottom: 0,
      right: -2,
    },
    image: {
      backgroundColor: COLOR.avatar,
      borderColor: COLOR.avatar,
      borderWidth: 2,
      borderRadius: 48,
      width: 48,
      height: 48,
      alignItems: "center",
      justifyContent: "center",
    },
    figcaption: {
      rowGap: Platform.OS === "web" ? 4 : 0,
    },
    title: {
      color: COLOR.text,
      fontFamily: FONT.RobotoMedium,
      fontSize: 18,
    },
    article: {
      color: COLOR.text_muted,
      fontFamily: FONT.RobotoRegular,
      fontSize: 16,
    },
    icon: {
      width: 16,
      height: 16,
    },
  }),
};
