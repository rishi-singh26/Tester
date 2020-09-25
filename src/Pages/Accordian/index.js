import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Accordion from "../../Components/Accordian/Accordian";
import CustomStatus from "../../Components/StatusBar";
import { primaryLightColor } from "../../Styles";
import Header from "../../Components/Header";

const SECTIONS = [
  {
    title: "First",
    content: "Lorem ipsum...",
  },
  {
    title: "Second",
    content: "Lorem ipsum...",
  },
  {
    title: "Third",
    content: "Lorem ipsum...",
  },
  {
    title: "Fourth",
    content: "Lorem ipsum...",
  },
  {
    title: "Fifth",
    content: "Lorem ipsum...",
  },
  {
    title: "Sixth",
    content: "Lorem ipsum...",
  },
  {
    title: "Seventh",
    content: "Lorem ipsum...",
  },
  {
    title: "Eighth",
    content: "Lorem ipsum...",
  },
  {
    title: "Ninth",
    content: "Lorem ipsum...",
  },
  {
    title: "Tenth",
    content: "Lorem ipsum...",
  },
];

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
    };
  }

  _renderSectionTitle = (section) => {
    const { borderRadious } = this.state;
    return (
      <View style={styles.title}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  _renderHeader = (section, index, isActive, allSections) => {
    return (
      <View
        style={[
          styles.header,
          {
            borderBottomLeftRadius: isActive ? 0 : 10,
            borderBottomRightRadius: isActive ? 0 : 10,
          },
        ]}
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = (section, index, isActive, allSections) => {
    return (
      <View style={styles.content}>
        <Text>section content</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione,
          vero amet unde, impedit pariatur adipisci maxime sunt aperiam
          distinctio excepturi sed magni corporis necessitatibus sequi maiores
          voluptate totam perspiciatis!
        </Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    // console.log({ activeSections });
    this.setState({ activeSections });
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: primaryLightColor, flex: 1 }}>
        <CustomStatus
          backgroundColor={primaryLightColor}
          contentType="light-content"
        />
        <Header
          title="Accordian"
          menuBtnPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            // renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            sectionContainerStyle={{ backgroundColor: "#f6f6f6" }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Accordian;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: "#fffee3",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: { fontSize: 18 },
  title: { backgroundColor: "#fff", marginHorizontal: 10, paddingVertical: 7 },
});
