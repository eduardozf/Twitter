import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;

  border-bottom-width: 0.5px;
  border-bottom-color: #444;
  max-width: 100%;
`;

export const Span = styled.Text`
  font-size: 16px;
  color: #627577;

  padding: 0 4px;
`;

export const UserImage = styled.Image`
  height: 50px;
  width: 50px;

  border-radius: 50px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
`;

export const ScreenName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding-left: 15px;
  max-width: 80%;
`;

export const ContentText = styled.Text`
  font-size: 18px;
  max-width: 100%;
`;

export const InteractiveContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 40px;
`;

export const InteractItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 14px;
`;
