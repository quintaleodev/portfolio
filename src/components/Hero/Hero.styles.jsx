import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;

  .hero__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    align-items: flex-end;
    position: relative;
  }

  .text__content {
    width: 100%;
  }

  .image__content {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    position: absolute;
    z-index: -1;
  }

  img {
    width: 66%;
    max-width: 280px;
    height: auto;
    display: block;
  }
`;
