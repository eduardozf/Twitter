import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 10px 20px;

  align-items: center;
  justify-content: space-between;
`;
export const BackButton = styled.TouchableOpacity``;

export const TweetButton = styled.TouchableOpacity`
  background: #1da1f2;
  border-radius: 20px;
  padding: 6px 16px;
`;
export const TweetButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const TweetContainer = styled.View`
  display: flex;
  flex-direction: row;

  padding: 10px 20px;
  flex: 1;
`;
export const UserImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 40px;
`;
export const TweetInput = styled.TextInput`
  font-size: 20px;
  margin-left: 10px;
`;

export const PrivacyContainer = styled.View`
  height: 64px;
  border-top-color: #ddd;
  border-top-width: 1px;

  flex-direction: row;
  padding: 26px;

  align-items: center;
`;
export const PrivacyText = styled.Text`
  color: #1da1f2;

  padding-left: 12px;
`;

export const OptionsContainer = styled.View`
  height: 64px;
  border-top-color: #ddd;
  border-top-width: 1px;

  flex-direction: row;
  align-items: center;
`;
export const LeftOptions = styled.View`
  flex: 1;
  padding-left: 10px;
  flex-direction: row;
`;

export const RightOptions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InteractItem = styled.TouchableOpacity`
  border-radius: 200px;
  margin: 0 14px;
`;
