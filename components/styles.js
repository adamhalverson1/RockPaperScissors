import { StyleSheet } from "react-native";

export default StyleSheet.create ({
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

})