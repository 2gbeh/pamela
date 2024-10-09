// https://docs.expo.dev/ui-programming/react-native-toast/
import { Platform, ToastAndroid } from "react-native";
import Toast from "react-native-root-toast";

type Theme = "light" | "dark";

export class Snackbar {
  constructor(
    protected _theme: Theme,
    protected _delayed: boolean,
    protected _elevated: boolean
  ) {}

  set theme(theme: Theme) {
    this._theme = theme;
  }

  set delayed(delayed: boolean) {
    this._delayed = delayed;
  }

  set elevated(elevated: boolean) {
    this._elevated = elevated;
  }

  toast = (message: string) =>
    Platform.OS === "web"
      ? alert(message)
      : Platform.OS === "android"
      ? ToastAndroid.show(
          message,
          this._delayed ? ToastAndroid.LONG : ToastAndroid.SHORT
        )
      : Toast.show(message, {
          duration: Toast.durations.LONG, // this._delayed ? Toast.durations.LONG : Toast.durations.SHORT,
          textColor: this._theme === "dark" ? "#eee" : "#202023",
          containerStyle: {
            backgroundColor: this._theme === "dark" ? "#000" : "#e1dcef",
            borderRadius: 100,
            marginBottom: this._elevated ? 40 : 0,
            paddingVertical: 14,
            paddingHorizontal: 28,
          },
          delay: 0,
          // opacity: 1,
          shadow: false,
          hideOnPress: true,
          position: Toast.positions.TOP,
          visible: true,
        });

  caught = (error: unknown) => {
    const message = typeof error === "string" ? (error as string) : JSON.stringify(error);
    this.toast(message)
  };
}

export const snackbar = new Snackbar("light", true, false);
