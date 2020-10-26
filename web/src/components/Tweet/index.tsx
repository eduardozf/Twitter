import React from 'react';

import { Container, ProfileIcon, Info, Header, Content, Options, TweetOptions } from './styles';
import { GoVerified, FiMoreHorizontal, BsChat, IoMdRepeat, FiHeart, AiOutlineToTop } from 'react-icons/all'
import ButtonTransparent from '../ButtonTransparent';

interface Props {
  Verified?: boolean;
}

const Tweet: React.FC<Props> = ({ Verified }) => {
  return (
    <Container>
      <div>
        <ProfileIcon
          src="https://api.hello-avatar.com/adorables/140/11c445d5-bb49-43a9-96fc-8ffcbe448ca8"
          alt="Profile"
        />
      </div>
      <div>
        <Info>
          <Header>
            <span style={{ color: "var(--black)", fontWeight: "bold" }}>Eduardo ZF</span>
            {Verified ?
              <GoVerified style={{
                marginRight: "8px",
                alignSelf: "center",
                color: "var(--blue)",
                fontSize: "18px"
              }} /> :
              ''
            }
            <span>@Eduardo_ZF</span>
            <span> - </span>
            <span>1 h</span>
          </Header>
          <ButtonTransparent>
            <FiMoreHorizontal />
          </ButtonTransparent>
        </Info>
        <Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl augue,
          gravida at enim in, sagittis dignissim turpis. Sed eu aliquam dolor. Proin sed molestie sem.
          Quisque aliquet vulputate libero ut sollicitudin.</p>
        </Content>
        <Options>
          <TweetOptions hoverColor="var(--blue)" >
            <BsChat style={{ fontSize: "14px" }} />
            <span>12</span>
          </TweetOptions>
          <TweetOptions hoverColor="var(--green)">
            <IoMdRepeat style={{ fontSize: "14px", transform: "rotate(90deg)" }} />
            <span>12</span>
          </TweetOptions>
          <TweetOptions hoverColor="var(--pink)">
            <FiHeart style={{ fontSize: "14px" }} />
            <span>12</span>
          </TweetOptions>
          <TweetOptions hoverColor="var(--blue)">
            <AiOutlineToTop style={{ fontSize: "18px" }} />
          </TweetOptions>
        </Options>
      </div>

    </Container>
  )
}

export default Tweet;
