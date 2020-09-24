import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import CustomStatus from "../../Components/StatusBar";

const SECTIONS = [
  {
    title: "First",
    content: "Lorem ipsum...",
  },
  {
    title: "Second",
    content: "Lorem ipsum...",
  },
];

class Accordian extends React.Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{"section title"}</Text>
      </View>
    );
  };

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{"section header"}</Text>
      </View>
    );
  };

  _renderContent = (section) => {
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
    this.setState({ activeSections });
  };

  render() {
    return (
      <SafeAreaView>
        <CustomStatus />
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          //   renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </SafeAreaView>
    );
  }
}

export default Accordian;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#bfbfbf",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14,
  },
  header: { padding: 20 },
  headerText: { fontSize: 18 },
});
