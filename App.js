import { StyleSheet, View, } from 'react-native';
import RockPaperScissors from './components/RockPaperScissors';
//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

//creating Google AdMob Unit ID variable. 
const adUnitId = 'ca-app-pub-3345304889044888/6748235043';

export default function App() {
  return (
    <View style={styles.container}>
      <RockPaperScissors/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F5F5F',
  },
  bannerAd: {
    justifyContent: 'flex-end'

  }
})