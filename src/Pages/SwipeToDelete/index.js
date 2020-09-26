import React, { useState } from "react";
import Swipeout from "react-native-swipeout";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function renderDefaultSwipeable(
  item,
  index,
  defaultItems,
  setDefaultItems,
  archivedItems,
  setArchivedItems,
  deletedItems,
  setDeletedItems
) {
  return (
    <Swipeout
      right={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Feather name="trash-2" size={20} color="#fff" />
            </View>
          ),
          backgroundColor: "#ea0016",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeDeleted = defaultItems[index];
            let updatedItem = defaultItems;
            updatedItem.splice(index, 1);
            setDeletedItems([...deletedItems, itemToBeDeleted]);
            setDefaultItems(updatedItem);
          },
        },
      ]}
      left={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Feather name="archive" size={20} color="#fff" />
            </View>
          ),
          backgroundColor: "#035205",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeArchived = defaultItems[index];
            let updatedItem = defaultItems;
            updatedItem.splice(index, 1);
            setArchivedItems([...archivedItems, itemToBeArchived]);
            setDefaultItems(updatedItem);
          },
        },
      ]}
      autoClose={true}
      backgroundColor="#fff"
      style={styles.swipableBody}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
        onPress={() => {
          // console.log("pressed");
        }}
      >
        <Text style={styles.swipabelBodyTxt}>{item.title}</Text>
      </TouchableOpacity>
    </Swipeout>
  );
}

function renderArchivedSwipeable(
  item,
  index,
  defaultItems,
  setDefaultItems,
  archivedItems,
  setArchivedItems,
  deletedItems,
  setDeletedItems
) {
  return (
    <Swipeout
      right={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Feather name="trash-2" size={20} color="#fff" />
            </View>
          ),
          backgroundColor: "#ea0016",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeDeleted = archivedItems[index];
            let updatedItem = archivedItems;
            updatedItem.splice(index, 1);
            setDeletedItems([...deletedItems, itemToBeDeleted]);
            setArchivedItems(updatedItem);
          },
        },
      ]}
      left={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <MaterialCommunityIcons
                name="delete-restore"
                size={22}
                color="#fff"
              />
            </View>
          ),
          backgroundColor: "#0e3b82",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeRestored = archivedItems[index];
            let updatedItem = archivedItems;
            updatedItem.splice(index, 1);
            setDefaultItems([...defaultItems, itemToBeRestored]);
            setArchivedItems(updatedItem);
          },
        },
      ]}
      autoClose={true}
      backgroundColor="#fff"
      style={styles.swipableBody}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
        onPress={() => {
          // console.log("pressed");
        }}
      >
        <Text style={styles.swipabelBodyTxt}>{item.title}</Text>
      </TouchableOpacity>
    </Swipeout>
  );
}

function renderDeletedSwipeable(
  item,
  index,
  defaultItems,
  setDefaultItems,
  archivedItems,
  setArchivedItems,
  deletedItems,
  setDeletedItems
) {
  return (
    <Swipeout
      right={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Feather name="archive" size={20} color="#fff" />
            </View>
          ),
          backgroundColor: "#035205",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeArchived = deletedItems[index];
            let updatedItem = deletedItems;
            updatedItem.splice(index, 1);
            setArchivedItems([...archivedItems, itemToBeArchived]);
            setDeletedItems(updatedItem);
          },
        },
      ]}
      left={[
        {
          component: (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <MaterialCommunityIcons
                name="delete-restore"
                size={22}
                color="#fff"
              />
            </View>
          ),
          backgroundColor: "#0e3b82",
          underlayColor: "rgba(0, 0, 0, 1, 0.6)",
          onPress: () => {
            const itemToBeRestored = deletedItems[index];
            let updatedItem = deletedItems;
            updatedItem.splice(index, 1);
            setDefaultItems([...defaultItems, itemToBeRestored]);
            setDeletedItems(updatedItem);
          },
        },
      ]}
      autoClose={true}
      backgroundColor="#fff"
      style={styles.swipableBody}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
        onPress={() => {
          // console.log("pressed");
        }}
      >
        <Text style={styles.swipabelBodyTxt}>{item.title}</Text>
      </TouchableOpacity>
    </Swipeout>
  );
}

export default function SwipeToDelete(props) {
  const [defaultItems, setDefaultItems] = useState([
    {
      key: "0",
      title: "Herb Tonic",
      price: 10.0,
      quantity: 1,
    },
    {
      key: "1",
      title: "Spicy Tuna",
      price: 12.8,
      quantity: 1,
    },
    {
      key: "2",
      title: "Tunacado",
      price: 10.2,
      quantity: 1,
    },
    {
      key: "3",
      title: "Power Shake",
      price: 10,
      quantity: 1,
    },
    {
      key: "4",
      title: "Banana Shake",
      price: 10,
      quantity: 1,
    },
    {
      key: "5",
      title: "Apple Shake",
      price: 10,
      quantity: 1,
    },
    {
      key: "6",
      title: "Mango Shake",
      price: 10,
      quantity: 2,
    },
    {
      key: "7",
      title: "Tonik Tonic",
      price: 10.0,
      quantity: 1,
    },
    // {
    //   key: "8",
    //   title: "Protein Shake",
    //   price: 12.8,
    //   quantity: 1,
    // },
    // {
    //   key: "9",
    //   title: "Lassi",
    //   price: 10.2,
    //   quantity: 1,
    // },
    // {
    //   key: "10",
    //   title: "Pista Lassi",
    //   price: 10,
    //   quantity: 1,
    // },
    // {
    //   key: "11",
    //   title: "Mango Lassi",
    //   price: 10,
    //   quantity: 1,
    // },
    // {
    //   key: "12",
    //   title: "Chocklet Shake",
    //   price: 10,
    //   quantity: 1,
    // },
    // {
    //   key: "13",
    //   title: "Heavy Shake",
    //   price: 10,
    //   quantity: 2,
    // },
  ]);
  const [archivedItems, setArchivedItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);

  // console.log({ defaultItems, archivedItems, deletedItems });
  return (
    <SafeAreaView style={{ backgroundColor: "#f5f5f5", flex: 1 }}>
      <Header
        title="Swipe to delete"
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 2, 4]}
      >
        {defaultItems.length > 0 ? (
          <View>
            <Text style={styles.sectionHeader}>Initial Items</Text>
          </View>
        ) : null}
        <FlatList
          data={defaultItems}
          renderItem={({ item, index }) =>
            renderDefaultSwipeable(
              item,
              index,
              defaultItems,
              setDefaultItems,
              archivedItems,
              setArchivedItems,
              deletedItems,
              setDeletedItems
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />
        {deletedItems.length > 0 ? (
          <View>
            <Text style={styles.sectionHeader}>Deleted Items</Text>
          </View>
        ) : null}
        <FlatList
          data={deletedItems}
          renderItem={({ item, index }) =>
            renderDeletedSwipeable(
              item,
              index,
              defaultItems,
              setDefaultItems,
              archivedItems,
              setArchivedItems,
              deletedItems,
              setDeletedItems
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />
        {archivedItems.length > 0 ? (
          <View>
            <Text style={styles.sectionHeader}>Archived Items</Text>
          </View>
        ) : null}
        <FlatList
          data={archivedItems}
          renderItem={({ item, index }) =>
            renderArchivedSwipeable(
              item,
              index,
              defaultItems,
              setDefaultItems,
              archivedItems,
              setArchivedItems,
              deletedItems,
              setDeletedItems
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 17,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  swipableBody: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  swipabelBodyTxt: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "#555",
  },
});
