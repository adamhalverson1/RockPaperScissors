import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const Actions = ({play, canPlay}) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity     // Rock
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(1)}
      >
          <FontAwesome5 
            name={'hand-rock'}  
            size={64} 
            color='white'
            solid
          />
      </TouchableOpacity>

      <TouchableOpacity         // paper
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(2)}
      > 
        <FontAwesome5 
          name='hand-paper' 
          size={64} 
          color='white'
          solid 
        />
      </TouchableOpacity>

      <TouchableOpacity         // scissors
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(3)}
      >
        <FontAwesome5 
            name='hand-scissors'
            size={64}
            color='white'
            solid
          />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    actions: {
        height:100,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom: 15
    },
    actionButton: {
        width:95,
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#556B2F',
        borderRadius:25,        
    }
});

export default Actions