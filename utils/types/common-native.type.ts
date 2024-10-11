import { type ViewStyle } from "react-native";
import { type ImageSource } from "expo-image";
import { type Href } from "expo-router";

export type TViewStyle = Record<string, ViewStyle>;

export type TImageSource = null | string | ImageSource;

export type THref = Href<string>;
