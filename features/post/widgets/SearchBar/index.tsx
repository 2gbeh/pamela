import React, { useState } from "react";
import { Pressable, View, Text, TextInput } from "react-native";
import { ArrowLeftIcon, SearchIcon, CheckIcon } from "lucide-react-native";
import { COLOR } from "@/constants/THEME";
// 
import { searchBarStyles as s } from "./styles";

interface IProps {
  handleSearch: (value: string) => void;
}

const SearchBar: React.FC<IProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const [inFocus, setInFocus] = useState(false);
  const toggleStaticSearch = () => setInFocus((prev) => !prev);
  console.log("🚀 ~ SearchBar");
  // renders
  return inFocus ? (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Pressable onPress={toggleStaticSearch}>
          <ArrowLeftIcon color={COLOR.text} />
        </Pressable>
        <TextInput
          value={query}
          onChangeText={(value) => setQuery(value)}
          placeholder="Search ( / )"
          placeholderTextColor={COLOR.text_muted}
          inputMode="search"
          keyboardAppearance="dark"
          clearButtonMode="always"
          returnKeyType="search"
          autoFocus={inFocus}
          style={s.input}
        />
      </View>
      <Pressable style={s.button} onPress={() => handleSearch(query)}>
        <CheckIcon color={COLOR.background} size={16} strokeWidth={3} />
      </Pressable>
    </View>
  ) : (
    <Pressable style={s.static_container} onPress={toggleStaticSearch}>
      <Text style={s.static_input}>Search...</Text>
      <SearchIcon color={COLOR.icon} size={20} strokeWidth={3} />
    </Pressable>
  );
};

export default React.memo(SearchBar);
