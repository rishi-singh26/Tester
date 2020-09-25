import React, { Component } from "react";
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Styles";

export default class Dilogue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        transparent
        animated
        animationType="fade"
        visible={this.props.dilogueVisible}
        onRequestClose={() => this.props.closeDilogue()}
      >
        <Pressable
          onPress={() => {
            this.props.cancellable ? this.props.closeDilogue() : null;
          }}
          style={styles.transparentView}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: this.props.dilogueBackground },
            ]}
          >
            {this.props.children}
          </View>
        </Pressable>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  transparentView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0002",
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 7,
  },
});
