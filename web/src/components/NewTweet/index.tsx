import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { contentContext } from '../TweetsList'
import api from '../../services/api';

import { Container, AvatarContainer, Avatar, DataContainer, BtnsContainer, OptionsContainer } from './styles';
import { AiOutlinePicture, RiFileGifLine, GoGraph, GrEmoji, FaRegCalendarAlt } from 'react-icons/all';
import ButtonFilled from '../ButtonFilled';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const NewTweet: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [textLenght, setTextLenght] = useState(0);
  const textareaRef = useRef({} as any);
  const { handleNewTweet } = useContext(contentContext);

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    try {
      const textLength = e.target.value.replace(/\s/g, '').length;
      setTextLenght(textLength);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handlePostTweet(content: any) {
    await api.post('/tweets/new', { content }).then((response) => {
      handleNewTweet(response.data);
    })
  }

  return (
    <Container>
      <AvatarContainer>
        <Avatar src={user.avatar} alt="Profile" />
      </AvatarContainer>
      <DataContainer>
        <TextareaAutosize
          ref={textareaRef}
          aria-label="empty textarea"
          placeholder="O que está acontecendo?"
          className="TextArea"
          onChange={(e) => handleOnChange(e)}
        />
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
          <ButtonFilled
            disabled={textLenght <= 0}
            onClick={() => { handlePostTweet({ description: textareaRef.current.value, image: null, video: null }) }}
          >
            <span>Tweetar</span>
          </ButtonFilled>
        </BtnsContainer>
      </DataContainer>
    </Container>
  )
}

export default NewTweet;
