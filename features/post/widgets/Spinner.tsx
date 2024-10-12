import React, { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  pending?: boolean;
  as?: "default" | "primary" | "secondary" | "accent";
}

const Spinner: React.FC<IProps> = ({ children, pending, as = "default" }) => {
  const color = {
    default: COLOR.text,
    primary: COLOR.primary,
    secondary: COLOR.background,
    accent: COLOR.primary,
  }[as];
  //
  return pending ? <ActivityIndicator color={color} /> : children;
};

export default React.memo(Spinner);
