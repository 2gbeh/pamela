import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "@/constants/THEME";

import {
  AppBar,
  SearchBar,
  FAB,
  Filters,
  FormSheet,
  ListItem,
} from "@/features/post";

export default function PostsScreen() {
  console.log("🚀 ~ PostsScreen");
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <AppBar />
        <SearchBar handleSearch={(value) => console.log(value)} />
        <Filters total={16} />
      </View>
      <ScrollView>
        <View style={s.main}>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <ListItem
                key={i}
                title="Prince Hse"
                summary="WhatsApp Dark Mode Color Palette: WhatsApp"
              />
            );
          })}
        </View>
      </ScrollView>
      <FAB />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },
  header: {
    rowGap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  main: {
    // rowGap: 24,
  },
});
