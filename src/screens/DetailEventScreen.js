import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>

        <View style={styles.bannerImageContainer}>
          <Image
            source={{ uri: 'https://static.pexels.com/photos/154147/pexels-photo-154147.jpeg' }}
              style={{
                flex: 1,
                height: 200,
                width: '100%'
              }}
              resizeMode='cover'
          />
        </View>
        {/* bannerImageContainer End */}

        <View style={styles.generalInformationContainer}>
          <Text style={styles.generalInformationHeaderTitleStyle}>SELENA Live Tribute Concert - Free with RSVP</Text>
          <Text style={styles.byTextStyle}>by Social Group - Dolce Group</Text>
          
          <View style={styles.detailContainer}>
            <SimpleLineIcons 
              name='calendar'
              size={25}
            >

            </SimpleLineIcons>
            <View style={styles.subDetailColumnContainer}>
              <Text style={styles.detailMainText}>Saturday, March 17</Text>
              <Text style={styles.detailSubText}>9:30 PM - 130 AM PDT</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <SimpleLineIcons 
              name='location-pin'
              size={25}
            >

            </SimpleLineIcons>
            <View style={styles.subDetailColumnContainer}>
              <Text style={styles.detailMainText}>Love and Propaganda</Text>
              <Text style={styles.detailSubText}>53 Campton PI, San Francisco, 
              CA 94108</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <SimpleLineIcons 
              name='tag'
              size={25}
            >

            </SimpleLineIcons>
            <View style={styles.subDetailColumnContainer}>
              <Text style={styles.detailMainText}>Free</Text>
              <Text style={styles.detailSubText}>on Crypto-Brite</Text>
            </View>
          </View>

        </View>
        {/* generalInformationContainer End */}

        <View style={styles.aboutEventContainer}>
            <Text style={styles.aboutTitleStyle}>About</Text>
            <Text 
            style={styles.descriptionStyle}
            numberOfLines= {4}
            ellipsizeMode='tail'
            >
It only took a few short but extremely exciting years for Selena to earn her nickname: "The Mexican Madonna." Bringing a sexy, pop vibe to her performances, Selena was the best-selling Latin star of the '90s, the Grammy-winning Queen of Tejano. Her life was far too short, but now you can revisit her biggest hits, like "Como La Flor," "Amor Prohibido" and "Baila Esta Cumbia," at this tribute concert. Selena lived from April 16th, 1971 - March 31st, 1995</Text>
        </View>
        {/* aboutEventContainer End */}

        <View style={styles.locationContainer}>

        </View>
        {/* locationContainer End */}

      </ScrollView>
      // mainContainer End
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  
  bannerImageContainer: {
    flexGrow: 1,
    width: '100%',
    height: 200,
  },
  // banner end

  generalInformationContainer: {
    flexGrow: 2,
    width: '100%',
    height: 375,    
  },
  generalInformationHeaderTitleStyle: {
    fontSize: 25,
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 15,
  },
  byTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 15,
  },
  detailContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  subDetailColumnContainer: {
    marginLeft: 20,
  },
  detailMainText: {
    marginBottom: 5,
  },
  detailSubText: {
    color: 'gray'
  },
  // general information end

  aboutEventContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
  },
  aboutTitleStyle: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  descriptionStyle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  

  // about event end

  locationContainer: {
    flexGrow: 2,
    width: '100%',
    height: 300,    

    backgroundColor: 'black'
  },

  // location information end


});
