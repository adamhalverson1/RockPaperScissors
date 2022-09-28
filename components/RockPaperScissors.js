import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Animated } from 'react-native';
import  Constants  from 'expo-constants';
import Actions from './Actions';
import DisplayResult from './DisplayResult';
import Header from './Header';
//import Score from './Score';


export default function RockPaper(){
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);
    const [game, setGame] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    

    // For Animation
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    //Win variable 
    const winner = 'Congrats! You won!'

    //Lose variable
    const loser = 'Sorry, you lost.'

    //function for game play 
    function play(choice){
        // 1 = rock
        // 2 = paper
        // 3 = scissors

        //generating a random choice for the computer
        const randomComputerChoice = Math.floor(Math.random() * 3) + 1;

        //creating an empty string for displaying the results. 
        let resultString = "";

        //displaying the results based on player and computer selections 
        if (choice === 1) {
            resultString = randomComputerChoice === 3 ? winner : loser;
        }
        else if (choice === 2) {
            resultString = randomComputerChoice === 1 ? winner : loser;
        }
        else {
            resultString = randomComputerChoice === 2 ? winner : loser;
        }
        if (choice === randomComputerChoice){
            resultString = "Tie game! Play again?";
        }

        if (resultString === winner){
            setPlayerScore( playerScore + 1 )
        }
        else if (resultString === loser){
            setComputerScore(computerScore + 1)
        }

        setUserChoice(choice);
        setComputerChoice(randomComputerChoice);

        // Wait animation hide old result
        setTimeout(() => {
            setResult(resultString);
        }, 300);

        // Animation hide old result and show new result
        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue:0,
                duration:300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue:1,
                duration:300,
                useNativeDriver: true,
            }),
        ]).start();

        // Disable action when animation running
        setPlay(false);
        setTimeout(() => {
            setPlay(true);
        setGame(game + 1)
        },600);
    }


    //Adding functionality with the views. 
    return(
        <SafeAreaView style={styles.container}>
            <Header/>

            <View style={styles.scoreBoard}>
                <Text style={styles.gamesText}>Games Played</Text>
                <View>
                    <Text style={styles.gamesText}>{game}</Text>
                </View>
            </View>

            <View style={styles.scoreBoard}>
                <Text style={styles.gamesText}>Player Score</Text>
                <View>
                    <Text style={styles.gamesText}>{playerScore}</Text>
                </View>
            </View>

            <View style={styles.scoreBoard}>
                <Text style={styles.gamesText}>Computer Score</Text>
                <View>
                    <Text style={styles.gamesText}>{computerScore}</Text>
                </View>
            </View>



            

            <View style={styles.content}>
                <View style={styles.result}>
                    <Animated.Text style={[styles.resultText, {opacity: fadeAnimation}]}>
                        {result}
                    </Animated.Text>
                </View>
                <View style={styles.screen}>
                    {!result ? (
                        <Text style={styles.readyText}>Think you can beat me?</Text>
                    ) : (
                        <DisplayResult 
                            userChoice={userChoice}
                            computerChoice={computerChoice}
                        />
                    )}
                </View>
                <Actions play={play} canPlay={canPlay} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:3,
        paddingTop: Constants.statusBarHeight,   
    },
    content: {
        flex:2,
        marginBottom:5,   
        backgroundColor:'#5F5F5F'
    },
    result : {
        height:200,
        justifyContent:'center',
        alignItems: "center",

    },
    resultText:{
        fontSize: 48,
        fontWeight:"bold",
        alignItems: "center",
        color:'white'
    },
    screen: {
        flex:4,
        flexDirection:'row',
    },
    readyText: {
        flex: 1,
        marginBottom: 150,
        alignSelf:'center',
        textAlign:'center',
        width:'100%',
        fontSize:48,
        fontWeight:'bold',
        color: 'white',

    },
    scoreBoard: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        borderStyle: 'solid',
        paddingTop: 5,
    },
    gamesText: {
        color: 'white',
        fontSize: 18,
    }   

});