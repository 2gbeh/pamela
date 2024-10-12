import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "@/constants/THEME";

import {
  AppBar,
  SearchBar,
  FAB,
  Ribbon,
  FormSheet,
  ListItem,
} from "@/features/post";
import { router } from "expo-router";
import { userResource } from "@/features/user/core/user.resource";

export default function PostsScreen() {
  const data = userResource.getPosts.data;
  console.log("🚀 ~ PostsScreen");
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <AppBar />
        <SearchBar handleSearch={(value) => console.log(value)} />
        <Ribbon total={data.length} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={s.main}
      />
      <FAB action={() => router.push("/create")} />
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
    paddingBottom: 24,
  },
});
