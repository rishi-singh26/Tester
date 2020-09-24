import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
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
];

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      borderRadious: 10,
    };
  }

  // _renderSectionTitle = (section) => {
  //   const { borderRadious } = this.state;
  //   return (
  //     <View
  //       style={[
  //         styles.content,
  //         {
  //           borderTopLeftRadius: borderRadious,
  //           borderTopRightRadius: borderRadious,
  //         },
  //       ]}
  //     >
  //       <Text>{section.title}</Text>
  //     </View>
  //   );
  // };

  _renderHeader = (section) => {
    const { borderRadious } = this.state;
    return (
      <View
        style={[
          styles.header,
          {
            borderBottomLeftRadius: borderRadious,
            borderBottomRightRadius: borderRadious,
          },
        ]}
      >
        <Text style={styles.headerText}>{section.title}</Text>
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
    const currentActiveSection =
      this.state.activeSections.length > 0 ? this.state.activeSections[0] : -1;
    // console.log(activeSections, currentActiveSection);
    this.setState({
      activeSections,
      borderRadious:
        activeSections.length > 0
          ? activeSections[0] === currentActiveSection
            ? 0
            : 10
          : 10,
    });
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#f6f6f6" }}>
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
    padding: 20,
    paddingTop: 0,
    backgroundColor: "#fff",
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
});
