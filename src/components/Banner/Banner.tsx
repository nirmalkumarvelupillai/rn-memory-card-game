import React from 'react';
import { Container, WinnerText, LoserText } from './Banner.style';

export interface Props {
  hasWon: boolean;
}

const Header: React.FC<Props> = ({ hasWon }) => {
  return <Container>{hasWon ? <WinnerText>YOU WON</WinnerText> : <LoserText>TRY AGAIN</LoserText>}</Container>;
};
export default Header;
