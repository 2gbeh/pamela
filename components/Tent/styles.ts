import { COLOR } from "@/constants/THEME";
import { StyleSheet } from "react-native";

const COLOR_ = {
  primary: "#8ab4f8",
  background: "#202124",
  text: "#9aa0a6",
};

export const iconProps = { color: COLOR.text, size: 48, strokeWidth: 2 };

export const tentStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    padding: 20,
    flex: 1,
    rowGap: 16,
  },
  header: {
    marginTop: 120,
    marginBottom: 16,
  },
  h1: {
    color: COLOR.text,
    fontWeight: "600",
    fontSize: 24,
  },
  h2: {
    color: COLOR.text_muted,
    fontSize: 16,
    lineHeight: 24,
  },
  h3: {
    color: COLOR.error,
  },
  p: {
    color: COLOR.text,
    fontSize: 16,
  },
  a: {
    color: COLOR.primary,
  },
  b: { fontWeight: "700" },
  ul: {
    rowGap: 4,
  },
  li: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  bullet: {
    backgroundColor: COLOR.text,
    width: 6,
    height: 6,
    borderRadius: 6,
  },
  footer: {
    position: "absolute",
    bottom: 24,
    rowGap: 24,
    alignSelf: "center",
  },
  button_wrapper: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    padding: 24,
    height: 48,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: COLOR.background,
    fontSize: 16,
    fontWeight: "500",
  },
  link: {
    color: COLOR.primary,
    // borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "center",
  },
});
