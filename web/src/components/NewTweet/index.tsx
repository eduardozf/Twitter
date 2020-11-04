import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container, AvatarContainer, Avatar, DataContainer, Data, BtnsContainer, OptionsContainer } from './styles';
import { AiOutlinePicture, RiFileGifLine, GoGraph, GrEmoji, FaRegCalendarAlt } from 'react-icons/all';
import ButtonFilled from '../ButtonFilled';

const NewTweet: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={user.avatar} alt="Profile" />
      </AvatarContainer>
      <DataContainer>
        <Data type="text" placeholder="O que está acontecendo?" />
        <BtnsContainer>
          <OptionsContainer>
            <button>
              <AiOutlinePicture />
            </button>
            <button>
              <RiFileGifLine />
            </button>
            <button>
              <GoGraph />
            </button>
            <button>
              <GrEmoji />
            </button>
            <button>
              <FaRegCalendarAlt />
            </button>
          </OptionsContainer>
          <ButtonFilled Disable>
            <span>Tweetar</span>
          </ButtonFilled>
        </BtnsContainer>
      </DataContainer>
    </Container>
  )
}

export default NewTweet;
