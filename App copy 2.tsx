import React, { Component } from 'react';
import * as React from 'react';

import { ColorSchemeName, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';


import { LogBox } from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import PropTypes from 'prop-types';
import Logo from './components/Auth/components/Logo';
import Form from './components/Auth/components/Form';
import Wallpaper from './components/Auth/components/Wallpaper';
import ButtonSubmit from './components/Auth/ButtonSubmit';
import SignupSection from './components/Auth/components/SignupSection';

class LoginScreen extends Component {
  
  render() {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={this.props.colorScheme} />

        <Wallpaper>
          <Logo />
          <Form />
          <SignupSection />
          <ButtonSubmit />
        </Wallpaper>
      </SafeAreaProvider>

    );
  }
}


// Wrap and export
export default function (props) {
  const navigation = useNavigation();

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead."])
  }, []);
  
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);
  
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  

  return <LoginScreen {...props} navigation={navigation} colorScheme={colorScheme} />;
}
