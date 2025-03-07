import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Einstein from "./assets/Einsten.png"
import Tesla from "./assets/Tesla.png"



class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={Einstein} style={styles.image} />
          <Text style={styles.text}>“A imaginação é mais importante que o conhecimento.”</Text>
        </View>
        <View style={styles.section}>
          <Image source={Tesla} style={styles.image} />
          <Text style={styles.text}>“O futuro pertence àqueles que acreditam na beleza de seus sonhos.”</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  section: {
    marginBottom: 30,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 75,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});

export default App;