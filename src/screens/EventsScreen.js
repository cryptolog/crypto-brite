import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import EventCard from '../components/EventCard';

class EventsScreen extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#E8787B',
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  renderEvent = ({ post, index }) => {
    if (index >= 1) {
      return (
        <EventCard
          event={post}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <View style={{ height: headerHeight }}>
        
        <View style={styles.header}>
          <Text style={styles.introText}>What{'\''}s good in</Text>
          
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>San Francisco</Text>
          </View>
        </View>

        <View style={styles.headerBackground} />
      </View>
    );
  };

  render = () => (
    <FlatList
      data={[{}, {}, {}, {}, {}, {}, {}]}
      keyExtractor={(event, index) => index}
      renderItem={({ item: post, index }) => this.renderEvent({ post, index })}
    />
  );
}

EventsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const padding = 16;
const headerHeight = 136;

const styles = StyleSheet.create({
  header: {
    padding,
    height: headerHeight,
    position: 'absolute',
  },
  headerBackground: {
    backgroundColor: '#E8787B',
    height: headerHeight * 1.6,
    zIndex: -1000,
  },
  introText: {
    fontSize: 16,
    color: '#FFF',
  },
  locationContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontWeight: '200',
    fontSize: 38,
    textDecorationLine: 'underline',
    color: '#FFF',
  },
});

export default EventsScreen;
