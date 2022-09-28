import * as React from 'react';
import { Appbar, Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

// Heading of Fedd page

const Header = () => {

  return (
    <Appbar.Header style={{
        backgroundColor:'#556B2F',    
        marginTop: 20,
        marginBottom: 20
        }}>
      <Appbar.Content 
        title="Lets Play Rock Paper Sissors!" 
        titleStyle={styles.content}        
      />
    </Appbar.Header>
  );
};


const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    transform:[{scaleX: 1.4}, {scaleY: 1.4}],
    color: 'white'
  },

})

export default Header;