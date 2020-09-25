import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons";
import { toast } from "../../Functions";
import { SCREEN_WIDTH } from "../../Styles";

const chipsData = [
  {
    name: "One",
    id: 1,
    text: "This is one",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Two",
    id: 2,
    text: "This is two",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Three",
    id: 3,
    text: "This is three",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Four",
    id: 4,
    text: "This is four",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Five",
    id: 5,
    text: "This is five",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Six",
    id: 6,
    text: "This is six",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Seven",
    id: 7,
    text: "This is seven",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Eight",
    id: 8,
    text: "This is eight",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Nine",
    id: 9,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Ten",
    id: 10,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Eleven",
    id: 11,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Twelve",
    id: 12,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Thirteen",
    id: 13,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Fourteen",
    id: 14,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Fifteen",
    id: 15,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Sixteen",
    id: 16,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Seventeen",
    id: 17,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Eighteen",
    id: 18,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
  {
    name: "Nineteen",
    id: 19,
    text: "This is nine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
  },
  {
    name: "Twenty",
    id: 20,
    text: "This is ten",
    imageUrl:
      "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
  },
];

function renderChip(item, index, selectedChips, setSelectedChips) {
  const doesInclude = selectedChips.findIndex((it) => it.id === item.id);
  return (
    <TouchableOpacity
      onPress={() => {
        // selectedChips.length >= 8
        //   ? toast("You can only select eight options")
        //   :
        doesInclude != -1
          ? setSelectedChips(selectedChips.filter((it) => it.id != item.id))
          : selectedChips.length >= 8
          ? toast("You cna only select 8 options")
          : setSelectedChips([...selectedChips, item]);
      }}
      style={[
        styles.chipView,
        { backgroundColor: doesInclude != -1 ? "#afafaf" : "#fff" },
      ]}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.chipImage} />
      <Text>{item.name}</Text>
      {doesInclude != -1 ? (
        <Feather name="x" size={15} color="#000" style={{ marginLeft: 5 }} />
      ) : null}
    </TouchableOpacity>
  );
}

function renderSelectedChip(item, index, selectedChips, setSelectedChips) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.selectedChipImage} />
      <Text style={{ paddingHorizontal: 10, fontSize: 15, fontWeight: "700" }}>
        {item.name}
      </Text>
    </View>
  );
}

export default function Chips(props) {
  const [selectedChips, setSelectedChips] = useState([]);

  console.log("selected chips", selectedChips);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <Header
        title="Chips"
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.selectOptions}>Select Options</Text>
        {/* <ScrollView horizontal style={{ width: SCREEN_WIDTH }}>
          <View style={{ flexDirection: "row" }}>
            {chipsData.map((item, index) => {
              return renderChip(item, index, selectedChips, setSelectedChips);
            })}
          </View>
        </ScrollView> */}
        <FlatList
          style={{ marginHorizontal: 20 }}
          data={chipsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            renderChip(item, index, selectedChips, setSelectedChips)
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
        {selectedChips.length > 0 ? (
          <Text style={styles.selectOptions}>Selected Options</Text>
        ) : null}
        <FlatList
          style={{ marginHorizontal: 20 }}
          data={selectedChips}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            renderSelectedChip(item, index, selectedChips, setSelectedChips)
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectOptions: {
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: "700",
    paddingVertical: 10,
  },
  chipView: {
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  chipImage: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    marginRight: 5,
    borderRadius: 10,
  },
  selectedChipImage: {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    marginRight: 5,
    borderRadius: 10,
  },
});
