import React, {useRef, useEffect, useState} from 'react';

import {
  Container,
  WinnerText,
  LoserText
} from './Banner.style';

export interface Props {
  isWon: boolean;
}

const Header: React.FC<Props> = ({isWon}) => {
  return (
    <Container>
     { isWon ? <WinnerText>YOU WON</WinnerText> : <LoserText>TRY AGAIN</LoserText> }
    </Container>
  );
};
export default Header;
