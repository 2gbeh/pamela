import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { SearchIcon } from "lucide-react-native";
import { COLOR, FONT } from "@/constants/THEME";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  console.log("🚀 ~ SearchBar");
  // renders
  return (
    <View style={s.container}>
      <TextInput
        value={query}
        onChangeText={(value) => setQuery(value)}
        placeholder="Search ( / )"
        placeholderTextColor={COLOR.text_muted}
        inputMode="search"
        keyboardAppearance="dark"
        // clearButtonMode="while-editing"
        // enterKeyHint='search'
        // returnKeyType='search'
        style={s.input}
      />
      <Pressable>
        <SearchIcon color={COLOR.icon} size={20} />
      </Pressable>
    </View>
  );
};

export default React.memo(SearchBar);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.input,
    borderRadius: 42,
    paddingHorizontal: 20,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 8,
  },
  input: {
    color: COLOR.text,
    height: 40,
    fontFamily: FONT.RobotoRegular,
    fontSize: 16,
    flex: 1,
  },
});
