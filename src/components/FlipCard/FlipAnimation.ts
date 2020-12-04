import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useFlipAnimation = (flipped: boolean = false) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const animConfig: Animated.SpringAnimationConfig = {
    toValue: 180,
    friction: 8,
    tension: 10,
    useNativeDriver: true,
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      ...animConfig,
      toValue: flipped ? 0 : 180,
    }).start();
  }, [flipped, animConfig, animatedValue]);

  return [frontAnimatedStyle, backAnimatedStyle];
};
