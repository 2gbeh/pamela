import { Platform, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const searchBarStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.input_focus,
    borderRadius: 42,
    paddingLeft: 16,
    paddingRight: 10,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 8,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  input: {
    color: COLOR.text,
    // borderWidth: 1,
    height: 40,
    width: Platform.OS === "web" ? 240 : 230,
    fontFamily: FONT.RobotoRegular,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLOR.primary,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 48,
  },
  static_container: {
    backgroundColor: COLOR.input,
    borderRadius: 42,
    paddingHorizontal: 20,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 8,
  },
  static_input: {
    color: COLOR.text_muted,
    fontFamily: FONT.RobotoMedium,
    fontSize: 18,
    flex: 1,
  },
});
