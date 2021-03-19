import styled from 'styled-components';
import Images from '../../themes/Images';

const {backgroundMid} = Images;

export const PageWrap = styled.div`
  background-image: url(${backgroundMid});
  background-size: cover;
  background-position: center;
  display: flex;
`;