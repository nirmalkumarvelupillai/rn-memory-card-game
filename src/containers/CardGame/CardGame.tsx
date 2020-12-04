import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import FlipCard from '../../components/FlipCard';
import { GameContainer, CardContainer } from './CardGame.style';

import Header from '../../components/Header';
import { FlipCard as FlipCardType, GameState } from '../../types/FlipCard';
import { FlipCardAction } from '../../reducers/FlipCardReducer';

const renderFlipCards = (cards: FlipCardType[], onFlip: (id: string) => void) => {
  return cards.map((card) => <FlipCard key={card.id} data={card} onFlip={onFlip} />);
};

export interface Props {
  stats: GameState;
  cards: FlipCardType[];
  doFlipCard: (id: string) => FlipCardAction;
  refreshFlipCard: () => FlipCardAction;
  restartGame: () => FlipCardAction;
}

const CardGame: React.FC<Props> = ({ stats, cards, doFlipCard, refreshFlipCard, restartGame }) => {
  const onRestart = () => {
    restartGame();
  };

  const onFlip = (id: string) => {
    doFlipCard(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => refreshFlipCard(), 800);
    return () => clearTimeout(timer);
  }, [cards, refreshFlipCard]);

  const cardsToRender = renderFlipCards(cards, onFlip);

  return (
    <GameContainer>
      <Header title="Flip Match" onRestart={onRestart} steps={stats.steps} />
      {stats.gameOver ? <Banner hasWon={stats.hasWon} /> : <CardContainer>{cardsToRender}</CardContainer>}
    </GameContainer>
  );
};

export default CardGame;
