import { StyleSheet, View, } from 'react-native';
import RockPaperScissors from './components/RockPaperScissors';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default function App() {
  return (
    <View style={styles.container}>
      <RockPaperScissors/>
      <BannerAd style={styles.bannerAd}
            //unitId={TestIds.BANNER} //Test ID
            unitID={"ca-app-pub-3345304889044888/6748235043"} // Production Unit ID 
            sizes={[BannerAdSize.FULL_BANNER]}
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
    backgroundColor: '#D3D3D3',
  },
  bannerAd: {
    justifyContent: 'flex-end'

  }
  }  )


