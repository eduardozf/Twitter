import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Button, IconContainer } from './styles';

type ButtonProps = TouchableOpacityProps;

const NewTweet: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <IconContainer>
        <Icon name="plus" size={16} color="#fff" />
        <Icon name="feather" size={26} color="#fff" />
      </IconContainer>
    </Button>
  );
};

export default NewTweet;
