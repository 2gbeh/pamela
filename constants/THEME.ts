export type TFont = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  RobotoBlack = "RobotoBlack",
  RobotoBold = "RobotoBold",
  RobotoMedium = "RobotoMedium",
  RobotoRegular = "RobotoRegular",
  RobotoLight = "RobotoLight",
  RobotoThin = "RobotoThin",
}

export const FONTS = {
  RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
  RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
  RobotoThin: require("../assets/fonts/Roboto-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=db1a5a
export const COLOR = {
  none: "transparent",
  white: "#fff",
  offwhite: "#fafafa",
  black: "#000",
  offblack: "#222",
  //
  primary: "#25d366",
  background: "#0b141b",
  text: "#fff",
  text_muted: "#8e9494",
  icon: "#8e9494",
  input: "#1f2c34",
  input_focus: "#1e2831",
  border: "#ccc",
  bubble: "#134d37",
  bubble_dark: "#134333",
  surface: "#293237",
  error: "#ff5722",
  info: "#2571ff",
  avatar: "#6a7175",
  // https://rgbacolorpicker.com/rgba-to-hex
  opacity: {
    point5: "#0000000d",
    point10: "#0000001a",
    point15: "#00000026",
    point20: "#00000033",
    point25: "#00000040",
    point30: "#0000004d",
    point35: "#00000059",
    point40: "#00000066",
    point45: "#00000073",
    point50: "#00000080",
    point55: "#0000008c",
    point60: "#00000099",
    point65: "#000000a6",
    point70: "#000000b3",
    point75: "#000000bf",
    point80: "#000000cc",
    point85: "#000000d9",
    point90: "#000000e6",
    point95: "#000000f2",
  },
};
