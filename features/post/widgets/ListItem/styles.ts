import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const listItemStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  image: {
    backgroundColor: COLOR.avatar,
    borderColor: COLOR.avatar,
    borderWidth: 1,
    borderRadius: 48,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  figcaption: {
    rowGap: 4,
  },
  title: {
    color: COLOR.text,
    fontFamily: FONT.RobotoMedium,
    fontSize: 16,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  summary: {
    color: COLOR.text_muted,
    fontFamily: FONT.RobotoRegular,
  },
});
