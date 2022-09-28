import { StyleSheet, View, } from 'react-native';
import RockPaperScissors from './components/RockPaperScissors';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

//creating Google AdMob Unit ID variable. 
const adUnitId = 'ca-app-pub-3345304889044888/6748235043';

export default function App() {
  return (
    <View style={styles.container}>
      <RockPaperScissors/>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
        requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerAd: {
    justifyContent: 'flex-end'

  }
  }  )