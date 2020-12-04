import React from 'react';
import { View } from 'react-native';
import { Container, RestartButton, TitleText, Steps, Flips, FlipsText, RestartText } from './Header.style';

export interface Props {
  title: string;
  steps?: number;
  onRestart?: () => void;
}

const Header: React.FC<Props> = ({ title, steps = 0, onRestart }) => {
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
        <Flips>{steps}</Flips>
      </Steps>
    </Container>
  );
};
export default Header;
