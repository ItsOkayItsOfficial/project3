import React, { Component } from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { WebBrowser } from 'expo'
import { MonoText } from '../components/StyledText'
import { Anchor } from '../components'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    Title: 'ProfileScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/porthub_logo.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={ styles.getStartedContainer}>
            <Anchor style={ styles.getStartedText } href="mailto: ''">Email</Anchor>
          </View>

        </ScrollView>

        <Button
        style={ styles.buttonContainer }
          onPress={ this.props.screenProps }
          title="Log Out"
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginBottom: 0,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
