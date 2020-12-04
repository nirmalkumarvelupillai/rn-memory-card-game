import React, { useRef, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  RestartButton,
  TitleText,
  Steps,
  Flips,
  FlipsText,
  RestartText,
} from './Header.style';

export interface Props {
  title: string;
  flips?: number;
  onRestart?: () => void;
}

const Header: React.FC<Props> = ({title, flips = 0, onRestart}) => {

    return (
      <Container>
        <RestartButton onPress={onRestart}>
          <RestartText>Restart</RestartText>
        </RestartButton>
        <View>
          <TitleText>{title}</TitleText>
        </View>
        <Steps>
            <FlipsText>Steps: </FlipsText>
            <Flips>{flips}</Flips>
        </Steps>
      </Container>
    );
};
export default Header;