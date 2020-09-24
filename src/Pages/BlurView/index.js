import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  primaryColor,
  primaryLightColor,
  primaryErrColor,
} from "../../Styles/index";
import MenuIcon from "../../Components/MenuIcon";
import { toast } from "../../Functions/index";
import { Assets } from "../../Assets/index";
import CustomStatus from "../../Components/StatusBar";
import Dilogue from "../../Components/Dilogue";
import Header from "../../Components/Header";

class BlurView extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      currentTimeBlock: 0,
      dilogueVisible: false,
      dilogueTextLineOne: "",
      dilogueTextLineTwo: "",
    };
  }

  renderCard = (imageName, text, value) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ dilogueVisible: true });
          imageName === "deliveryBox"
            ? this.setState({
                dilogueTextLineOne: "Total Orders",
                dilogueTextLineTwo:
                  "Here is a count of your total orders : 2346",
              })
            : imageName === "completedOrder"
            ? this.setState({
                dilogueTextLineOne: "Completed Orders",
                dilogueTextLineTwo:
                  "Here is a count of your completed orders : 2279",
              })
            : imageName === "pendingOrder1"
            ? this.setState({
                dilogueTextLineOne: "Pending Orders",
                dilogueTextLineTwo:
                  "Here is a count of your pending orders : 67",
              })
            : null;
        }}
        style={styles.cardBox}
      >
        <View style={styles.cardBoxText}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={Assets[imageName]}
              style={{ height: 30, width: 30, marginRight: 10 }}
            />
            <Text style={{ color: "#888", fontWeight: "700", fontSize: 20 }}>
              {text}
            </Text>
          </View>
          <Text style={styles.cardBoxValue}>{value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomStatus
          backgroundColor={primaryLightColor}
          contentType="light-content"
        />
        <Header
          title="Blur View"
          menuBtnPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
          {this.renderCard("deliveryBox", "Total Orders :", 2346)}
          {this.renderCard("completedOrder", "Completed Orders :", 2279)}
          {this.renderCard("pendingOrder1", "Pending Orders :", 2346 - 2279)}
        </ScrollView>
        <Dilogue
          dilogueVisible={this.state.dilogueVisible}
          dilogueBackground={primaryLightColor}
          closeDilogue={() => {
            this.setState({ dilogueVisible: false });
          }}
        >
          <Text style={styles.dilogueHeaderTxt}>
            {this.state.dilogueTextLineOne}
          </Text>
          <Text style={styles.dilogueBodyTxt}>
            {this.state.dilogueTextLineTwo}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({ dilogueVisible: false });
            }}
          >
            <Text style={styles.dilogueBtn}>OK</Text>
          </TouchableOpacity>
        </Dilogue>
      </SafeAreaView>
    );
  }
}

export default BlurView;

const styles = StyleSheet.create({
  dilogueBtn: {
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  dilogueHeaderTxt: { fontSize: 16, color: "#fff", fontWeight: "700" },
  dilogueBodyTxt: { fontSize: 14, color: "#fff" },
  timeBlockTxt: {
    color: "#fff",
    marginHorizontal: 30,
    fontSize: 19,
  },
  timeBlockItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerBoxIcon: {
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  headerHeading: {
    color: "#fff",
    paddingTop: 25,
    fontSize: 32,
    fontWeight: "700",
  },
  headerMenuView: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBox: {
    backgroundColor: primaryLightColor,
  },
  cardBoxValue: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 10,
  },
  cardBoxText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBox: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    // shadowColor: primaryColor,
    // shadowOffset: {
    //   width: 9,
    //   height: 9,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 11.95,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
