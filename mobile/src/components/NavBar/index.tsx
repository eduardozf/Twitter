import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container } from './styles';
import ClearBtn from '../ClearButton';

interface Buttons {
  home?: boolean;
  search?: boolean;
  notification?: boolean;
  message?: boolean;
}

interface Props {
  ActiveButton: Buttons;
}

const NavBar: React.FC<Props> = ({ ActiveButton }) => {
  const [active, setActive] = useState(ActiveButton);
  return (
    <Container>
      <ClearBtn>
        <Icon
          name="home"
          size={28}
          color={active.home ? '#1da1f2' : '#627577'}
        />
      </ClearBtn>
      <ClearBtn>
        <Icon
          name="search"
          size={28}
          color={active.search ? '#1da1f2' : '#627577'}
        />
      </ClearBtn>
      <ClearBtn>
        <Icon
          name="bell"
          size={28}
          color={active.notification ? '#1da1f2' : '#627577'}
        />
      </ClearBtn>
      <ClearBtn>
        <Icon
          name="mail"
          size={28}
          color={active.message ? '#1da1f2' : '#627577'}
        />
      </ClearBtn>
    </Container>
  );
};

export default NavBar;
