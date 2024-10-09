import { Pressable, View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { snackbar } from "@/lib/snackbar";

const themeColor = "#151718";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  const handleToast = () => snackbar.toast("What's up!");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.button} onPress={handleToast}>
        <Text style={s.button_text}>Press These Nutts</Text>
        <AntDesign name="arrowright" size={24} color={themeColor} />
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
  },
  button_text: {
    color: themeColor,
    fontSize: 18,
    fontWeight: "600",
  },
});
