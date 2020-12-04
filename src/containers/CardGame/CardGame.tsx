import React, {useState, useEffect} from 'react';

import Banner from '../../components/Banner';
import FlipCard from '../../components/FlipCard';
import {Container} from './CardGame.style';

export interface Card {
  id: string;
  value: number;
  flipped?: boolean;
  matched?: boolean;
}

const renderFlipCards = (cards: Card[], onFlip: (id: string) => void) => {
  return cards.map(({id, value, flipped, matched}) => (
    <FlipCard
      key={id}
      value={value}
      flipped={flipped}
      matched={matched}
      onFlip={() => onFlip(id)}
    />
  ));
};

export interface Props {
  gameOver: boolean;
  isWon: boolean;
  cards: Card[];
  onUpdateCards: (cards?: Card[]) => void;
}

const CardGame: React.FC<Props> = ({gameOver, isWon, cards, onUpdateCards}) => {
  const onFlip = (id: string) => {
    const updatedCards = cards.map((card: Card) => {
      return {
        ...card,
        flipped: card.flipped || card.id === id,
      };
    });
    onUpdateCards([...updatedCards]);
  };

  useEffect(() => {
    const timer = setTimeout(() => onUpdateCards(), 800);
    return () => clearTimeout(timer);
    // updateCards();
  }, [cards]);
  const cardsToRender = renderFlipCards(cards, onFlip);
  return gameOver ? (
    <Banner isWon={isWon} />
  ) : (
    <Container>{cardsToRender}</Container>
  );
};

export default CardGame;
