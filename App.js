import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  BackHandler,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Swiper from "react-native-swiper";
import GameScreen from "./GameScreen";

const RPSbg = require("./src/images/RPS_background2.jpg");

function StartScreen({ navigation }) {
  const [play, setPlay] = useState(false);

  const exitOptionHandler = () =>
    Alert.alert("EXIT GAME", "Do you want to exit the game?", [
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
    ]);

  const backAction = () => {
    Alert.alert("EXIT GAME", "Do you want to exit the game?", [
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
      { text: "No", onPress: () => null, style: "cancel" },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", exitOptionHandler);
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", exitOptionHandler);
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return play ? (
    <GameScreen />
  ) : (
    <ImageBackground source={RPSbg} style={styles.backgroundRPSImage}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Image
          source={require("./assets/RPS_Icon.png")}
          style={styles.LogoPlacer}
        />
        <View style={styles.buttonPlacer}>
          <TouchableOpacity
            style={styles.customButton1}
            onPress={() => setPlay(true)}
          >
            <Text style={styles.customButtonText1}>START GAME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customButton1}
            onPress={() => navigation.navigate("Instructions")}
          >
            <Text style={styles.customButtonText1}>INSTRUCTIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customButton2}
            onPress={exitOptionHandler}
          >
            <Text style={styles.customButtonText2}>EXIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextPlacer1}>
          <Text style={styles.bottomText}>Developed by: VRICKSS 2020</Text>
          <Text style={styles.bottomText}>A Game made using React-Native</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

function InstructionsScreen({ navigation }) {
  return (
    <View style={styles.LightContainer}>
      <ImageBackground source={RPSbg} style={styles.backgroundRPSImage}>
        <StatusBar hidden={true} />
        <Swiper
          dotStyle={styles.dotStyle}
          loop={false}
          activeDotStyle={styles.activeDotStyle}
        >
          <View>
            <View style={styles.firstSlide}>
              <Text style={styles.instructionsHeader}>
                BASIC RULES OF{"\n"}ROCK PAPER SCISSORS
              </Text>
              <Image
                source={require("./assets/Icon_no_name.png")}
                style={styles.instructionsImage1}
              />
              <Text style={styles.instructionsText}>
                PAPER beats ROCK{"\n"}ROCK beats SCISSORS{"\n"}SCISSORS beats
                PAPER
              </Text>
            </View>
          </View>

          <View style={styles.secondSlide}>
            <Text style={styles.instructionsHeader}>HOW TO PLAY?</Text>
            <Text style={styles.instructionsText}>
              The game is a battle between two (2){"\n"}players. There are three
              (3) buttons which{"\n"}represents ROCK, PAPER and SCISSORS.
              {"\n"}Each player must choose one (1) button{"\n"}within the
              provided options.{"\n\n"}1. Player 1 (White) chooses first.{"\n"}
              2. Player 2 (Black) chooses next.
              {"\n"}3. After both players have picked their{"\n"}choices, press
              the Play Button in the{"\n"}middle to reveal the winner.{"\n"}4.
              The players, if they wish to, could also{"\n"}reset their scores
              back to zero (0).{"\n"}5. The Exit Button ends the game{"\n"}and
              closes the application.
            </Text>
            <Text style={styles.instructionsTextHeader}>
              Good luck and have a good game!
            </Text>
          </View>

          <View style={styles.thirdSlide}>
            <Text style={styles.instructionsHeader}>PLAYER BUTTONS</Text>
            <View style={styles.playerButtonsPlacer}>
              <TouchableOpacity style={styles.touchableImageP1} disabled={true}>
                <Image
                  source={require("./src/images/P1_Rock.png")}
                  style={styles.imageButton1}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableImageP2} disabled={true}>
                <Image
                  source={require("./src/images/P2_Rock.png")}
                  style={styles.imageButton2}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.instructionsTextHeader}>
              ROCK BUTTONS{"\n"}
            </Text>
            <View style={styles.playerButtonsPlacer}>
              <TouchableOpacity style={styles.touchableImageP1} disabled={true}>
                <Image
                  source={require("./src/images/P1_Paper.png")}
                  style={styles.imageButton1}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableImageP2} disabled={true}>
                <Image
                  source={require("./src/images/P2_Paper.png")}
                  style={styles.imageButton2}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.instructionsTextHeader}>
              PAPER BUTTONS{"\n"}
            </Text>
            <View style={styles.playerButtonsPlacer}>
              <TouchableOpacity style={styles.touchableImageP1} disabled={true}>
                <Image
                  source={require("./src/images/P1_Scissors.png")}
                  style={styles.imageButton1}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableImageP2} disabled={true}>
                <Image
                  source={require("./src/images/P2_Scissors.png")}
                  style={styles.imageButton2}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.instructionsTextHeader}>
              SCISSORS BUTTONS{"\n"}
            </Text>
          </View>

          <View style={styles.fourthSlide}>
            <Text style={styles.instructionsHeader}>ICONS</Text>
            <TouchableOpacity style={styles.centerButton} disabled={true}>
              <Image
                source={require("./src/images/Play_Button.png")}
                style={styles.imageRunButton}
              />
            </TouchableOpacity>
            <Text style={styles.instructionsTextHeader}>PLAY BUTTON</Text>
            <Text style={styles.instructionsText}>
              Press this button to reveal{"\n"}the winner of the round.
            </Text>
            <TouchableOpacity style={styles.centerButton} disabled={true}>
              <Image
                source={require("./src/images/reset.png")}
                style={styles.imageResetButton}
              />
            </TouchableOpacity>
            <Text style={styles.instructionsTextHeader}>RESET BUTTON</Text>
            <Text style={styles.instructionsText}>
              Press this button to reset{"\n"}the score of both players.
            </Text>
            <TouchableOpacity style={styles.centerButton} disabled={true}>
              <Image
                source={require("./src/images/Exit_Button.png")}
                style={styles.imageExitButton}
              />
            </TouchableOpacity>
            <Text style={styles.instructionsTextHeader}>EXIT BUTTON</Text>
            <Text style={styles.instructionsText}>
              Press this button{"\n"}to exit the game.
            </Text>
          </View>
        </Swiper>
        <View style={styles.buttonPlacer}>
          <TouchableOpacity
            style={styles.customButton3}
            onPress={() => navigation.navigate("Start")}
          >
            <Text style={styles.customButtonText3}>BACK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextPlacer2}>
          <Text style={styles.bottomText}>Developed by: VRICKSS 2020</Text>
          <Text style={styles.bottomText}>A Game made using React-Native</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Instructions" component={InstructionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundRPSImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  LogoPlacer: {
    width: 350,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 15,
  },

  buttonPlacer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },

  customButton1: {
    borderWidth: 3,
    borderColor: "#ffffff",
    backgroundColor: "#4f4f4f",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 225,
    borderRadius: 100,
    marginBottom: 15,
  },

  customButtonText1: {
    fontFamily: "sans-serif-condensed",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    bottom: 1.5,
  },

  customButton2: {
    borderWidth: 3,
    borderColor: "#ffffff",
    backgroundColor: "#4f4f4f",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 225,
    borderRadius: 100,
  },

  customButtonText2: {
    fontFamily: "sans-serif-condensed",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    bottom: 1.5,
  },

  customButton3: {
    borderWidth: 3,
    borderColor: "#ffffff",
    backgroundColor: "#4f4f4f",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 50,
    width: 150,
    borderRadius: 100,
    bottom: 40,
  },

  customButtonText3: {
    fontFamily: "sans-serif-condensed",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    bottom: 10,
  },

  bottomTextPlacer1: {
    flex: 0.1,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "center",
    bottom: 13,
  },

  bottomTextPlacer2: {
    flex: 0.1,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "center",
    bottom: 13,
  },

  bottomText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 7,
    alignContent: "center",
    textAlign: "center",
    color: "#000000",
  },

  LightContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  instructionsHeader: {
    fontFamily: "sans-serif-condensed",
    fontSize: 28,
    alignContent: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 30,
  },

  instructionsText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 19,
    alignContent: "center",
    textAlign: "center",
    color: "#000000",
    marginBottom: 15,
  },

  instructionsTextHeader: {
    fontFamily: "sans-serif-condensed",
    fontSize: 21,
    alignContent: "center",
    textAlign: "center",
    color: "#000000",
  },

  firstSlide: {
    marginVertical: 45,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  secondSlide: {
    marginVertical: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  thirdSlide: {
    marginVertical: 55,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  fourthSlide: {
    marginVertical: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  instructionsImage1: {
    width: 350,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    margin: -40,
  },

  playerButtonsPlacer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  touchableImageP1: {
    borderWidth: 3,
    borderColor: "#030303",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fdfdfd",
    borderRadius: 140,
    height: 70,
    width: 70,
    margin: 3.5,
  },

  touchableImageP2: {
    borderWidth: 3,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#030303",
    borderRadius: 140,
    height: 70,
    width: 70,
    margin: 3.5,
  },

  imageButton1: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  imageButton2: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  centerButton: {
    borderWidth: 1.5,
    borderColor: "#030303",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    height: 50,
    width: 50,
    borderRadius: 100,
    marginTop: -10,
    marginBottom: 5,
  },

  imageResetButton: {
    alignItems: "center",
    height: "70%",
    width: "70%",
  },

  imageExitButton: {
    alignItems: "center",
    height: "85%",
    width: "85%",
  },

  imageRunButton: {
    alignItems: "center",
    height: "110%",
    width: "110%",
    marginLeft: 5,
  },

  dotStyle: {
    backgroundColor: "#c0c0c0",
    justifyContent: "flex-end",
    bottom: 40,
  },

  activeDotStyle: {
    backgroundColor: "#000000",
    justifyContent: "flex-end",
    bottom: 40,
  },
});
