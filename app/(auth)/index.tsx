import { Pressable, View, Text, StyleSheet } from "react-native";
import { snackbar } from "@/lib/snackbar";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  const handleToast = () => snackbar.toast("What's up!");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.button} onPress={handleToast}>
        <Text style={s.button_text}>Press these nutts</Text>
      </Pressable>
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "teal",
    borderRadius: 4,
    paddingHorizontal: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: { color: "white", fontWeight: "500" },
});
