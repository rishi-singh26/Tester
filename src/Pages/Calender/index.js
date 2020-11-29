import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Header from "../../Components/Header";
import { primaryErrColor } from "../../Styles";

export default function Calender(props) {
  // local state
  const [selectedDates, setSelectedDates] = useState({});

  const setSelectedDatesFunc = (day) => {
    // console.log("selected day", day);
    const dayNum = day.day < 10 ? `0${day.day}` : day.day;
    const monthNum = day.month < 10 ? `0${day.month}` : day.month;
    const key = `${day.year}-${monthNum}-${dayNum}`;
    const currentSelection = { ...selectedDates };
    // day is alredy selected
    if (Object.keys(currentSelection).includes(key)) {
      //   console.log("AlredySelected", currentSelection[key]);
      delete currentSelection[key];
      setSelectedDates(currentSelection);
    }
    // day is not selected
    else {
      const newSelection = {};
      newSelection[key] = { selected: true, selectedColor: primaryErrColor };
      const newSelectedDates = { ...selectedDates, ...newSelection };
      setSelectedDates(newSelectedDates);
      //   console.log(Object.keys(newSelectedDates), "\nCurrent key is", key);
    }
  };

  return (
    <SafeAreaView>
      <Header
        title="Calender"
        menuBtnPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <ScrollView>
        <Calendar
          onDayPress={(day) => {
            setSelectedDatesFunc(day);
          }}
          onDayLongPress={(day) => {
            // console.log("selected day", day);
          }}
          //   monthFormat={"yyyy MM"}
          onMonthChange={(month) => {
            // console.log("month changed", month);
          }}
          enableSwipeMonths={true}
          markedDates={selectedDates}
          markingType="simple"
          //   disableArrowLeft={true}
          //   disableArrowRight={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
