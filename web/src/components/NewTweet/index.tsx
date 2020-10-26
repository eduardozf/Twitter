import React from 'react';

import { Container, AvatarContainer, Avatar, DataContainer, Data, BtnsContainer, OptionsContainer } from './styles';
import { AiOutlinePicture, RiFileGifLine, GoGraph, GrEmoji, FaRegCalendarAlt } from 'react-icons/all';
import ButtonFilled from '../ButtonFilled';

const NewTweet: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          src="https://api.hello-avatar.com/adorables/140/11c445d5-bb49-43a9-96fc-8ffcbe448ca8"
          alt="Profile Picture" />
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
