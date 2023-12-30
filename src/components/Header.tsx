import React from "react";

import { View, StyleSheet, Text , Image} from "react-native";

// Assets
import SunnyCloudyImage from "../images/sunny-cloudy.png";

// Constants
import { COLORS } from "../constants";

// Styles
const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    height: "25%",
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 50,
  },
  location: {},
  subTitle: {
    fontSize: 20,
  },
  desc: {
    fontSize: 15
  }
});

const Header = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Weather</Text>
      <View style={styles.location}>
        <Text style={styles.subTitle}>Nairobi, Kenya</Text>
        <Image source={SunnyCloudyImage} />
        <View style={styles.desc}>
        </View>
      </View>
    </View>
  );
};

export default Header;
