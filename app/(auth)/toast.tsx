import { Pressable, View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { snackbar } from "@/lib/snackbar";
import { Colors } from "@/constants/Colors";

export default function ToastScreen() {
  console.log("🚀 ~ LoginScreen");
  const handleToast = () => {
    snackbar.toast("What's up!");
    router.push("/todo");
  };
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.button} onPress={handleToast}>
        <Text style={s.button_text}>Toast These Nutts</Text>
        <Feather name="arrow-right" size={24} color={Colors.primary} />
      </Pressable>
     
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
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
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  normalText: {
    color: "white",
  },
  bigText: {
    color: "red",
  },
});
