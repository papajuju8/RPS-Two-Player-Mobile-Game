import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  BackHandler,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
} from "react-native";

const RPSbg = require("./src/images/RPS_background2.jpg");

export default class GameScreen extends Component {
  constructor() {
    super();

    this.state = {
      P1ButtonStateHolder: false,
      P2ButtonStateHolder: true,
      P1Score: 0,
      P2Score: 0,
      P1Rock: "0",
      P1Paper: "0",
      P1Scissors: "0",
      P2Rock: "0",
      P2Paper: "0",
      P2Scissors: "0",
    };
    this.onResetClick = this.onResetClick.bind(this);
  }

  onResetClick() {
    Alert.alert("RESET SCORE", "Do you want to reset the score?", [
      {
        text: "Yes",
        onPress: () => {
          this.setState({
            P1Score: 0,
            P2Score: 0,
          });
        },
      },
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
    ]);
  }

  DisableButtonFunction = () => {
    this.setState({
      P1ButtonStateHolder: true,
      P2ButtonStateHolder: false,
    });
  };

  enableP1Rock() {
    this.setState({
      P1Rock: "1",
    });
  }
  enableP1Paper() {
    this.setState({
      P1Paper: "2",
    });
  }
  enableP1Scissors() {
    this.setState({
      P1Scissors: "3",
    });
  }

  enableP2Rock() {
    this.setState({
      P2Rock: "1",
      P2ButtonStateHolder: true,
    });
  }
  enableP2Paper() {
    this.setState({
      P2Paper: "2",
      P2ButtonStateHolder: true,
    });
  }
  enableP2Scissors() {
    this.setState({
      P2Scissors: "3",
      P2ButtonStateHolder: true,
    });
  }

  scoringDecision = () => {
    if (this.state.P2Rock == 1 && this.state.P1Rock == 1) {
      this.setState({
        P1Score: this.state.P1Score + 0,
        P2Score: this.state.P2Score + 0,
      });
      Alert.alert("Match Result: TIE", "Rock vs Rock", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Rock == 1 && this.state.P1Paper == 2) {
      this.setState({
        P1Score: this.state.P1Score + 1,
      });
      Alert.alert("Match Result: Player 1 Wins", "Paper vs Rock", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Rock == 1 && this.state.P1Scissors == 3) {
      this.setState({
        P2Score: this.state.P2Score + 1,
      });
      Alert.alert("Match Result: Player 2 Wins", "Scissors vs Rock", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Paper == 2 && this.state.P1Rock == 1) {
      this.setState({
        P2Score: this.state.P2Score + 1,
      });
      Alert.alert("Match Result: Player 2 Wins!", "Rock vs Paper", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Paper == 2 && this.state.P1Paper == 2) {
      this.setState({
        P1Score: this.state.P1Score + 0,
        P2Score: this.state.P2Score + 0,
      });
      Alert.alert("Match Result: TIE", "Paper vs Paper", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Paper == 2 && this.state.P1Scissors == 3) {
      this.setState({
        P1Score: this.state.P1Score + 1,
      });
      Alert.alert("Match Result: Player 1 Wins", "Scissors vs Paper", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Scissors == 3 && this.state.P1Rock == 1) {
      this.setState({
        P1Score: this.state.P1Score + 1,
      });
      Alert.alert("Match Result: Player 1 Wins!", "Rock vs Scissors", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Scissors == 3 && this.state.P1Paper == 2) {
      this.setState({
        P2Score: this.state.P2Score + 1,
      });
      Alert.alert("Match Result: Player 2 wins", "Paper vs Scissors", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    } else if (this.state.P2Scissors == 3 && this.state.P1Scissors == 3) {
      this.setState({
        P1Score: this.state.P1Score + 0,
        P2Score: this.state.P2Score + 0,
      });
      Alert.alert("Match Result: TIE", "Scissors vs Scissors", [
        {
          text: "Ok",
          onPress: () => {
            this.setState({
              P1ButtonStateHolder: false,
              P2ButtonStateHolder: true,
              P1Rock: "0",
              P1Paper: "0",
              P1Scissors: "0",
              P2Rock: "0",
              P2Paper: "0",
              P2Scissors: "0",
            });
          },
        },
      ]);
    }
  };

  gotoFirstScreen() {
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
  }

  backAction = () => {
    Alert.alert("EXIT GAME", "Do you want to exit the game?", [
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
      { text: "No", onPress: () => null, style: "cancel" },
    ]);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.gotoFirstScreen);
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.gotoFirstScreen);
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  render() {
    const P1Score = this.state.P1Score;
    const P2Score = this.state.P2Score;
    return (
      <ImageBackground source={RPSbg} style={styles.backgroundRPSImage}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View>
            <View style={styles.Player2RPS}>
              <TouchableOpacity
                style={styles.touchableImageP2}
                activeOpacity={0.5}
                disabled={this.state.P2ButtonStateHolder}
                onPress={() => {
                  this.enableP2Scissors();
                  console.log(this.enableP2Scissors);
                }}
              >
                <Image
                  source={require("./src/images/P2_Scissors.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P2Scissors}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImageP2}
                activeOpacity={0.5}
                disabled={this.state.P2ButtonStateHolder}
                onPress={() => {
                  this.enableP2Paper();
                  console.log(this.enableP2Paper);
                }}
              >
                <Image
                  source={require("./src/images/P2_Paper.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P2Paper}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImageP2}
                activeOpacity={0.5}
                disabled={this.state.P2ButtonStateHolder}
                onPress={() => {
                  this.enableP2Rock();
                  console.log(this.enableP2Rock);
                }}
              >
                <Image
                  source={require("./src/images/P2_Rock.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P2Rock}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.P2Scoreboard}>Score: {P2Score}</Text>
            </View>

            <View
              style={{
                borderBottomColor: "#000000",
                borderBottomWidth: 1.5,
                justifyContent: "center",
                alignSelf: "stretch",
                alignItems: "stretch",
              }}
            />
            <View style={styles.centerButtonPlacer}>
              <TouchableHighlight
                style={styles.centerButton}
                onPress={this.onResetClick}
              >
                <Image
                  source={require("./src/images/reset.png")}
                  style={styles.imageResetButton}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.centerButton}
                onPress={this.scoringDecision}
              >
                <Image
                  source={require("./src/images/Play_Button.png")}
                  style={styles.imageRunButton}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.centerButton}
                //onPress={() => this.props.navigation.navigate("App")}
                // onPress={() => navigation.popToTop()}
                onPress={this.gotoFirstScreen}
              >
                <Image
                  source={require("./src/images/Exit_Button.png")}
                  style={styles.imageExitButton}
                />
              </TouchableHighlight>
            </View>
            <View
              style={{
                borderTopColor: "#000000",
                borderTopWidth: 1.5,
                justifyContent: "center",
                alignSelf: "stretch",
                alignItems: "stretch",
              }}
            />

            <View>
              <Text style={styles.P1Scoreboard}>Score: {P1Score}</Text>
            </View>
            <View style={styles.Player1RPS}>
              <TouchableOpacity
                style={styles.touchableImageP1}
                activeOpacity={0.5}
                disabled={this.state.P1ButtonStateHolder}
                onPress={() => {
                  this.enableP1Rock();
                  this.DisableButtonFunction();
                  console.log(this.enableP1Rock);
                }}
              >
                <Image
                  source={require("./src/images/P1_Rock.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P1Rock}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImageP1}
                activeOpacity={0.5}
                disabled={this.state.P1ButtonStateHolder}
                onPress={() => {
                  this.enableP1Paper();
                  this.DisableButtonFunction();
                  console.log(this.enableP1Paper);
                }}
              >
                <Image
                  source={require("./src/images/P1_Paper.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P1Paper}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableImageP1}
                activeOpacity={0.5}
                disabled={this.state.P1ButtonStateHolder}
                onPress={() => {
                  this.enableP1Scissors();
                  this.DisableButtonFunction();
                  console.log(this.enableP1Scissors);
                }}
              >
                <Image
                  source={require("./src/images/P1_Scissors.png")}
                  style={styles.imageButton}
                />
                <Text style={styles.hideText}>{this.state.P1Scissors}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#f3f3f3", // or eaeef1
    //backgroundColor: "#ededed",
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

  Player1RPS: {
    flex: 1,
    flexDirection: "row",
    bottom: -90,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "flex-end",
    position: "relative",
  },

  Player2RPS: {
    flex: 1,
    flexDirection: "row",
    top: -90,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "flex-start",
    position: "relative",
  },

  touchableImageP1: {
    borderWidth: 4,
    borderColor: "#030303",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    height: 110,
    width: 110,
    borderRadius: 220,
    margin: 3.75,
  },

  touchableImageP2: {
    borderWidth: 4,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#030303",
    height: 110,
    width: 110,
    borderRadius: 220,
    margin: 3.75,
  },

  imageButton: {
    alignItems: "center",
    height: "88%",
    width: "88%",
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

  P1Scoreboard: {
    marginTop: 30,
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "sans-serif-medium",
  },

  P2Scoreboard: {
    marginTop: -50,
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    transform: [{ rotate: "180deg" }],
  },

  centerButtonPlacer: {
    flex: 0.175,
    flexDirection: "row",
    position: "relative",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  centerButton: {
    borderWidth: 1.5,
    borderColor: "#030303",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    height: 50,
    width: 50,
    borderRadius: 100,
    // top: 313,
    marginHorizontal: 10,
  },

  counterContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  hideText: {
    fontSize: 0,
  },
});
