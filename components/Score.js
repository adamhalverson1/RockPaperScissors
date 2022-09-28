import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Score ({ }) {
    return (
      <>
        
        <View>
            <Text style={styles.games}>Games Played</Text>
            <Text>{gamesPlayed}</Text>
        </View>

        <View style={styles.scoreBoard}>
        
        <View style ={styles.player}>
            <Text >Your Score</Text>
        </View>

        <View style ={styles.player}>
            <Text>Computer Score</Text>
        </View>
      </View>
      </>
    );
  }

  const styles = StyleSheet.create ({
    player: {
      color: 'white',
      marginBottom: 5,

    },
    scoreBoard: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    games: {
      textAlign: "center",
      color: 'white',
      marginBottom: 10,
    }


  })