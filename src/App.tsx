import React, {useEffect} from 'react';
import { Button, Text, View, StyleSheet, NativeModules } from 'react-native';

const { PeoplesListModule } = NativeModules;

// Components
import Header from "./components/Header";

// URL
import { WEATHER_ENDPOINT, COLORS } from "./constants"; 

const App = () => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(WEATHER_ENDPOINT);
      console.log(res);
    };

    fetchWeatherData();
  }, []);
  
  // Styles
  const styles = StyleSheet.create({
    root: {
      backgroundColor: COLORS.secondary,
      height: "100%",
      padding: 10
    }
  });


  return (
    <View style={styles.root}>
      <Header />
      <Button 
        onPress={()=>PeoplesListModule.sayHi()}
        title="Click Me"
      />
    </View>
  );
};

export default App;
