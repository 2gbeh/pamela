import { Platform, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const appBarStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  figure: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  image: {
    backgroundColor: COLOR.avatar,
    borderColor: COLOR.avatar,
    borderWidth: 1,
    borderRadius: 48,
    width: 48,
    height: 48,
  },
  figcaption: {
    rowGap: Platform.OS === "web" ? 4 : 0,
  },
  title: {
    color: COLOR.text_muted,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
  },
  subtitle: {
    color: COLOR.text,
    fontFamily: FONT.RobotoBold,
    fontSize: 16,
  },
  notification: {
    position: "relative",
  },
  indicator: {
    borderRadius: 8,
    width: 10,
    height: 10,
    position: "absolute",
    top: -2,
    right: 0,
  },
});
