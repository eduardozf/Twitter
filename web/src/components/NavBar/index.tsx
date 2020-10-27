import React from 'react';

import {
  FaTwitter,
  FiHash,
  RiHome7Fill,
  FaRegBell,
  FiMail,
  BsBookmark,
  RiFileList2Line,
  BsPerson,
  CgMoreO,
  RiChatNewLine,
} from 'react-icons/all';

import { OptionsContainer, Logo, ButtonsContainer, LogoContainer } from './styles';
import ButtonTransparent from '../ButtonTransparent';
import ButtionFilled from '../ButtonFilled';
import UserOptions from '../UserOptions';

const NavBar: React.FC = () => {
  return (
    <OptionsContainer>
      <LogoContainer>
        <Logo href='/'>
          <FaTwitter style={{ fontSize: '32px' }} />
        </Logo>
      </LogoContainer>

      <ButtonsContainer>
        <ButtonTransparent Active>
          <RiHome7Fill style={{ fontSize: '28px' }} />
          <span>Página Inicial</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <FiHash style={{ fontSize: '28px' }} />
          <span>Explorar</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <FaRegBell style={{ fontSize: '28px' }} />
          <span>Notificações</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <FiMail style={{ fontSize: '28px' }} />
          <span>Mensagens</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <BsBookmark style={{ fontSize: '28px' }} />
          <span>Itens Salvos</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <RiFileList2Line style={{ fontSize: '28px' }} />
          <span>Listar</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <BsPerson style={{ fontSize: '28px' }} />
          <span>Perfil</span>
        </ButtonTransparent>

        <ButtonTransparent>
          <CgMoreO style={{ fontSize: '28px' }} />
          <span>Mais</span>
        </ButtonTransparent>

        <ButtionFilled responsiveIcon>
          <span>Tweetar</span>
          <RiChatNewLine style={{ display: 'none', fontSize: '20px' }} />
        </ButtionFilled>
      </ButtonsContainer>

      <UserOptions />
    </OptionsContainer>
  );
}

export default NavBar;
