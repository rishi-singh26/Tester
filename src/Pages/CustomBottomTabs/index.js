import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar from "@gorhom/animated-tabbar";
import HomeSVG from "./svg/HomeSVG";
import ProfileSVG from "./svg/ProfileSVG";
import LikesSVG from "./svg/LikeSVG";
import SearchSVG from "./svg/SearchSVG";
import Header from "../../Components/Header";

const Tab = createBottomTabNavigator();

const tabs = {
  Home: {
    // < Screen name
    labelStyle: {
      color: "#5B37B7",
    },
    icon: {
      component: HomeSVG,
      activeColor: "rgba(91,55,183,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "rgba(223,215,243,1)",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  Profile: {
    // < Screen name
    labelStyle: {
      color: "#1194AA",
    },
    icon: {
      component: ProfileSVG,
      activeColor: "rgba(17,148,170,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "rgba(207,235,239,1)",
      inactiveColor: "rgba(207,235,239,0)",
    },
  },
  Likes: {
    // < Screen name
    labelStyle: {
      color: "#1767e8",
    },
    icon: {
      component: LikesSVG,
      activeColor: "rgba(23, 103, 232, 1)",
      inactiveColor: "rgba(10, 10, 10, 1)",
    },
    background: {
      activeColor: "rgba(224, 236, 255, 1)",
      inactiveColor: "rgba(255, 255, 255, 1)",
    },
  },
  Search: {
    // < Screen name
    labelStyle: {
      color: "rgba(232, 67, 67, 1)",
    },
    icon: {
      component: SearchSVG,
      activeColor: "rgba(232, 67, 67, 1)",
      inactiveColor: "rgba(10, 10, 10, 1)",
    },
    background: {
      activeColor: "rgba(255, 235, 235, 1)",
      inactiveColor: "rgba(255, 255, 255, 1)",
    },
  },
};

function HomeScreen(props) {
  return (
    <>
      <Header
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
        title="Home"
      />
    </>
  );
}

function ProfileScreen(props) {
  return (
    <>
      <Header
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
        title="Profile"
      />
    </>
  );
}

function SearchScreen(props) {
  return (
    <>
      <Header
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
        title="Search"
      />
    </>
  );
}

function LikesScreen(props) {
  return (
    <>
      <Header
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
        title="Likes"
      />
    </>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <AnimatedTabBar tabs={tabs} {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Likes" component={LikesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
