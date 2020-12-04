import { Animated } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const CardFace = styled(Animated.View)`
  min-width: 100px;
  min-height: 130px;
  background-color: #ffffff;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 5px;
`;

export const CardBack = styled(CardFace)`
  background-color: #1ea2f4;
  position: absolute;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
