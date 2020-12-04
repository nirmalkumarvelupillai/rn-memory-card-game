import React from 'react';
import { FlipCard as FlipCartType } from '../../types/FlipCard';
import { useFlipAnimation } from './FlipAnimation';
import { Container, CardFace, CardBack, FaceText, BackText } from './FlipCard.style';

export interface Props {
  data: FlipCartType;
  onFlip?: (id: string) => void;
}

const FlipCard: React.FC<Props> = ({ data, onFlip }) => {
  const { id, value, flipped, matched } = data;
  const [frontAnimatedStyle, backAnimatedStyle] = useFlipAnimation(flipped);

  const onCardFlip = () => {
    if (!matched && onFlip) {
      onFlip(id);
    }
  };

  return (
    <Container onPress={onCardFlip} disabled={matched}>
      <CardFace style={frontAnimatedStyle} matched={matched}>
        <FaceText>{value}</FaceText>
      </CardFace>
      <CardBack style={backAnimatedStyle}>
        <BackText>?</BackText>
      </CardBack>
    </Container>
  );
};

export default FlipCard;
