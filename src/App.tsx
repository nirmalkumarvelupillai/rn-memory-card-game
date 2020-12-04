
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Header from './components/Header';
import CardGame, { Card } from './containers/CardGame';

import { randomNumbers, shuffle } from './utils';
const CARD_PAIRS_VALUE = 6;
const App = () => {

  const getCardList = () =>{
    const cardNumbers = randomNumbers(CARD_PAIRS_VALUE);
    const shuffledNumbers = shuffle(cardNumbers.concat(cardNumbers));
    return shuffledNumbers.map((value) => ({
      id: Math.random().toString(36).substr(2, 9),
      value,
    }));
  }
    
  const cardsList = getCardList();

  const [shuffleCards, setShuffleCards] = useState<Card[]>(cardsList);

  const [flips, setFlips] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const onUpdateCards = (cards?: Card[]) => {
    if (cards) {
      setShuffleCards(cards);
      setFlips(flips + 1);
    } else {
      refreshCards();
    }
  };

  const refreshCards = () => {
    const [card1, card2] = shuffleCards?.filter(
      (card: Card) => card.flipped && !card.matched,
    );
    const matched = card1?.value === card2?.value;
    if (card1 && card2) {
      const updatedCards = shuffleCards.map((card: Card) => {
        const freezed =
          matched && (card1?.id === card.id || card2?.id === card.id);

        return {
          ...card,
          flipped: card.matched || freezed,
          matched: card.matched || freezed,
        };
      });
      setShuffleCards([...updatedCards]);
    } else {

      const haveCardToMatch = shuffleCards.find(({matched = false}) => !matched);
      if(!haveCardToMatch) {
        setGameOver(true);
        setWin(true);
      }
    }

  };

  const onRestart = () => {
    setShuffleCards(getCardList());
    setFlips(0);
    setGameOver(false);
    setWin(false);
  }

  return (
    <>
      <SafeAreaView>
        <View style={styled.container}>
          <Header title="Flip Match" onRestart={onRestart} flips={flips} />
          <CardGame cards={shuffleCards} onUpdateCards={onUpdateCards} gameOver={gameOver} isWon={win} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styled = StyleSheet.create({
  container: {
    backgroundColor: '#413d45',
    height: '100%',
    width: '100%',
    display: 'flex'
  },
});

export default App;
