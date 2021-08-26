import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  BackHandler,
  TouchableOpacity,
} from "react-native";

const P2Rock = require("./images/P2_Rock.png");
const P2Paper = require("./images/P2_Paper.png");
const P2Scissors = require("./images/P2_Scissors.png");

const bgColors = ["#1abc9c", "#3498db", "#9b59b6"];

const randomRPSEmo = () => {
  const P2Emojis = [P2Rock, P2Paper, P2Scissors];
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  return P2Emojis[random];
};

const P1RockOption = () => {
  if (() => P2Emojis[random] == 1) {
    Alert.alert("Match Result: TIE", "Rock vs Rock", [
      {
        text: "Ok",
        onPress: () => console.log("No one scored!"),
      },
    ]);
  } else if (() => P2Emojis[random] == P2Paper) {
    Alert.alert("Match Result: Opponent Scored", "Rock vs Paper", [
      {
        text: "Ok",
        onPress: () => console.log("Opponent scored!"),
      },
    ]);
  } else if (() => randomRPSEmo.P2Emojis[random] == P2Scissors) {
    Alert.alert("Match Result: Player Scored", "Rock vs Scissors", [
      {
        text: "Ok",
        onPress: () => console.log("Player scored!"),
      },
    ]);
  }
};

const P1PaperOption = () => {
  if (() => P2Emojis[random] == P2Rock) {
    Alert.alert("Match Result: Player Scored", "Paper vs Rock", [
      {
        text: "Ok",
        onPress: () => console.log("Player scored!"),
      },
    ]);
  } else if (() => P2Emojis[random] == P2Paper) {
    Alert.alert("Match Result: TIE", "Paper vs Paper", [
      {
        text: "Ok",
        onPress: () => console.log("No one scored!"),
      },
    ]);
  } else if (() => P2Emojis[random] == P2Scissors) {
    Alert.alert("Match Result: Opponent Scored", "Paper vs Scissors", [
      {
        text: "Ok",
        onPress: () => console.log("Oppoenent scored!"),
      },
    ]);
  }
};

const P1ScissorsOption = () => {
  if (() => randomRPSEmo == P2Rock) {
    Alert.alert("Match Result: Opponent Scored", "Scissors vs Rock", [
      {
        text: "Ok",
        onPress: () => console.log("Opponent scored!"),
      },
    ]);
  } else if (() => randomRPSEmo == P2Paper) {
    Alert.alert("Match Result: Player Scored ", "Scissors vs Paper", [
      {
        text: "Ok",
        onPress: () => console.log("Player scored!"),
      },
    ]);
  } else if (() => randomRPSEmo == P2Scissors) {
    Alert.alert("Match Result: TIE", "Scissors vs Scissors", [
      {
        text: "Ok",
        onPress: () => console.log("No one scored!"),
      },
    ]);
  }
};

export default function GameScreen() {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    if (counter < 1) return;
    const timer = setTimeout(() => {
      setCounter((previous) => previous - 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.scoreboard}>Score: </Text>
        {/* <Text style={styles.scoreboard}>Score: {this.state.score}</Text> */}
      </View>
      {counter < 1 ? (
        <>
          <Image style={styles.sign} source={randomRPSEmo()} />
          <View style={styles.btnContainer}>
            <View style={styles.OptionsRPS}>
              <TouchableOpacity
                style={styles.touchableImage}
                // onPress={() => {
                //   setCounter(3);
                // }}
                onPress={P1RockOption}
              >
                <Image
                  source={require("./images/P1_Rock.png")}
                  style={styles.imageButton}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImage}
                //onPress={this.incrementScore}
                onPress={P1PaperOption}
              >
                <Image
                  source={require("./images/P1_Paper.png")}
                  style={styles.imageButton}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImage}
                //onPress={this.incrementScore}
                onPress={P1ScissorsOption}
              >
                <Image
                  source={require("./images/P1_Scissors.png")}
                  style={styles.imageButton}
                />
              </TouchableOpacity>
            </View>

            <Button
              title="Main Menu"
              onPress={() => {
                setCounter(3);
              }}
              //onPress={() => console.log("Main Menu Pressed")}
              // Try rin yung hardware back button. pero mas better yung softwareBB...
            />
          </View>
        </>
      ) : (
        <View
          style={StyleSheet.compose(styles.counterContainer, {
            backgroundColor: bgColors[counter - 1],
          })}
        >
          <Text style={styles.counter}>{counter}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3", // or eaeef1
    alignItems: "center",
    justifyContent: "center",
  },

  OptionsRPS: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
    bottom: 95,
    alignItems: "center",
    justifyContent: "space-between",
    margin: "-37.5%",
  },

  touchableImage: {
    borderWidth: 4,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    height: 110,
    width: 110,
    borderRadius: 220,
    margin: 3.5,
  },

  imageButton: {
    alignItems: "center",
    height: "88%",
    width: "88%",
  },

  scoreboard: {
    top: -175,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#f3f3f3",
    fontWeight: "bold",
    fontSize: 18,
  },

  counter: {
    fontSize: 150,
    color: "#f3f3f3",
  },

  sign: {
    width: 220,
    height: 220,
    bottom: 50,
  },

  btnContainer: {
    marginTop: 60,
    width: 200,
    position: "absolute",
    bottom: 30,
  },

  counterContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
