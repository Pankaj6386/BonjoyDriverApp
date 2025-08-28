import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import ImagePath from '../../constant/ImagePath';
import {useNavigation} from '@react-navigation/native';
import NavigationString from '../../Navigations/NavigationString';

const Splash = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacity animation for fading in
  const translateAnim = useRef(new Animated.Value(0)).current; //  Opacity animation for fading in
  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.timing(translateAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.replace(NavigationString.IntroScreen);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.topRight, {transform: [{scale: fadeAnim}]}]}>
        <Image source={ImagePath.splashTopRight} />
      </Animated.View>
      <Animated.View
        style={[styles.centerImg, {transform: [{scale: logoAnim}]}]}>
        <Image source={ImagePath.splash} />
      </Animated.View>
      <Animated.View
        style={[styles.bottomLeft, {transform: [{scale: translateAnim}]}]}>
        <Image source={ImagePath.splashBottomLeft} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRight: {flex: 0.3, alignItems: 'flex-end'},
  centerImg: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLeft: {flex: 0.3, justifyContent: 'flex-end'},
});
