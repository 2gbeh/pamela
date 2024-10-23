import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import CentreNameLogo from "../../atoms/centre-name-logo";
import AppClock from "../../atoms/app-clock";
import AvatarHamburgerMenu from "../../atoms/avatar-hamburger-menu";
import { FONT, COLOR } from "@/constants/THEME";
import { BellIcon } from "@/constants/ICON";

const Header = () => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <View style={s.container}>
      {/* LOGO */}
      <View style={s.left_content}>
        <CentreNameLogo
          src="https://github.com/plateaumed.png"
          name="Edo Specialist Hospital"
        />
      </View>

      {/* CLOCK */}
      <View style={s.center_content}>
        <AppClock />
      </View>

      {/* AVATAR */}
      <View style={s.right_content}>
        <Text style={s.greeting}>Hi, CHO Adebayo</Text>
        <BellIcon color={COLOR.primary} />
        <Text style={s.textSize}>Aa</Text>
        <AvatarHamburgerMenu src="https://github.com/2gbeh.png" />
      </View>
    </View>
  );
};

export default React.memo(Header);

const s = StyleSheet.create({
  _: {},
  container: {
    borderBottomColor: COLOR.border,
    borderBottomWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_content: {
    flex: 1,
  },
  center_content: {
    flex: 1,
    alignItems: "center",
  },
  right_content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 24,
  },
  greeting: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 18,
    fontWeight: "700",
  },
  textSize: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyLight,
    fontSize: 18,
    fontWeight: "700",
  },
});
