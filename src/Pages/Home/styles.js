import styled, { css } from 'styled-components';

export const Section = styled.section`
  margin-top: 150px;
`;

export const AddArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const AddedDetails = styled.h2`
  font-size: 28px;

  @media (max-width: 374px) {
    font-size: 22px;
  }
`;

export const AddButton = styled.button`
  padding: 5px 30px;
  background-color: #7FC047;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 100px;
  margin-bottom: 70px;
`;

export const ProjectTitle = styled.h2``;

export const Project = styled.div`
  position: relative;
  ${({ bg }) => css`
    & .swiper-slide {
      height: 200px;
      padding: 20px;
      border-radius: 10px;
      color: white;

      /* ; */
      ${
        bg === 'front' &&
        'background: linear-gradient(140deg, rgba(154,218,100,1) 6%, rgba(127,192,71,1) 39%);'
      }
      ${
        bg === 'ui' &&
        'background-image: linear-gradient(140deg, rgba(251,178,128,1) 6%, rgba(249,145,76,1) 39%);'
      }
      ${
        bg === 'back' &&
        'background-image: linear-gradient(140deg, rgba(157,153,236,1) 6%, rgba(104,98,200,1) 39%);'
      }
    }
  `}

  .swiper-pagination {
      width: auto;
      left: 50%;
      margin-left: -16px;
      bottom: -30px;

      @media screen and (max-width: 600px) {
        left: 0;
        margin-left: auto;
      }
  }

  margin-top: 40px;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

export const ProjectName = styled.h3`
  font-size: 27px;
  color: white;
  margin-bottom: 5px;

`;

export const ProjectArea = styled.h4`
  font-size: 18px;
  color: white;
`;

export const ProjectDate = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: white;
`;

export const ProjectSpan = styled.span`
  font-weight: 600;
`;

export const NoLogBox = styled.div`
  background-color: #fda9a87c;
  width: 100%;
  border: 1px solid red;
  border-radius: 3px;
  padding: 20px 0;
`;

export const NoLogAccount = styled.p`
  text-align: center;
  font-size: 22px;
  color: red;
`;

export const NoItems = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;
