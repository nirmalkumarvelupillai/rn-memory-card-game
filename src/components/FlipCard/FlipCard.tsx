import React, { useRef, useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { Container, CardFace, CardBack, Text } from './FlipCard.style';

export interface Props {
  value: number;
  flipped?: boolean;
  matched?: boolean;
  onFlip?: () => void;
}

const FlipCard: React.FC<Props> = ({
  value,
  onFlip,
  flipped = false,
  matched = false
}) => {

  const animatedValue = useRef(new Animated.Value(0)).current;
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });
  const animConfig: Animated.SpringAnimationConfig = {
    toValue: 180,
    friction: 8,
    tension: 10,
    useNativeDriver: true
  }

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ]
  };

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ]
  };

  useEffect(() => {
    Animated.spring(
      animatedValue,
      {
        ...animConfig,
        toValue: (flipped) ? 0 : 180
      }
    ).start();
  }, [flipped]);

  return (
    <Container onPress={onFlip}>
      <CardFace style={frontAnimatedStyle}>
        <Text>{value}</Text>
      </CardFace>
      <CardBack style={backAnimatedStyle}>
        <Text style={{ color: '#ffffff'}}>?</Text>
      </CardBack>

    </Container>
  )
}

export default FlipCard;
