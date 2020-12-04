import { randomNumbers, shuffle } from '.';
import { FlipCardState, FlipCard } from './../types/FlipCard';

const CARD_PAIRS_VALUE = 6;

export const getCardList = (pair: number) => {
  const cardNumbers = randomNumbers(pair);
  const shuffledNumbers = shuffle(cardNumbers.concat(cardNumbers));
  return shuffledNumbers.map((value) => ({
    id: Math.random().toString(36).substr(2, 9),
    value,
  }));
};

export const getInitialState = (pair: number = CARD_PAIRS_VALUE) => {
  return {
    cards: getCardList(pair),
    stats: {
      gameOver: false,
      hasWon: false,
      steps: 0,
    },
  };
};

export const getFlipState = (state: FlipCardState, cardId: string) => {
  return {
    ...state,
    cards: state.cards.map((card: FlipCard) => {
      return {
        ...card,
        flipped: card.flipped || card.id === cardId,
      };
    }),
    stats: {
      ...state.stats,
      steps: state.stats.steps + 1,
    },
  };
};

export const getRefreshState = (state: FlipCardState) => {
  const { cards } = state;
  const [card1, card2] = cards?.filter((card: FlipCard) => card.flipped && !card.matched);
  const matched = card1?.value === card2?.value;
  const updatedState = {
    ...state,
  };

  if (card1 && card2) {
    const updatedCards = cards.map((card: FlipCard) => {
      const freezed = matched && (card1?.id === card.id || card2?.id === card.id);
      return {
        ...card,
        flipped: card.matched || freezed,
        matched: card.matched || freezed,
      };
    });
    updatedState.cards = updatedCards;
  } else {
    const haveCardToMatch = cards.find((card) => !card.matched);
    if (!haveCardToMatch) {
      updatedState.stats = {
        ...updatedState.stats,
        gameOver: true,
        hasWon: true,
      };
    }
  }
  return updatedState;
};
