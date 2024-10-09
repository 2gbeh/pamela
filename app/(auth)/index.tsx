import { Pressable, View, Text, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { snackbar } from "@/lib/snackbar";

const themeColorOld = "#151718";
const themeColor = "#000014";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  const handleToast = () => snackbar.toast("What's up!");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.button} onPress={handleToast}>
        <Text style={s.button_text}>Toast These Nutts</Text>
        <Feather name="arrow-right" size={24} color={themeColor} />
      </Pressable>
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    backgroundColor: themeColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  button_text: {
    color: themeColor,
    fontSize: 18,
    fontWeight: "600",
  },
});
