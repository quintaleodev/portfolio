import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;

  .hero__content {
    display: flex;
    width: 100%;
    align-items: flex-end;
    position: relative;
  }

  .text__content {
    width: 55%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    gap: var(--spacing-sm);
  }

  h1 {

    font-size: var(--font-size-xl);
    border-bottom: 1px solid var(--title-line-color);
    padding-bottom: var(--spacing-sm);
    
  }
  
  strong{
    
    color: var(--color-primary);
  }

  .image__content {
    
    display: flex;
    position: absolute;
    z-index: 0;
    width: 100%;
    overflow: hidden;
    height: 100%;
    
  }

  img {
    
    height: 100%;
    width: auto;
    object-fit: cover;
    max-width: 75%;
    margin-left: auto;
    -webkit-mask-image: linear-gradient(to right, 
    transparent 0%, 
    black 50%
    );

    mask-image: linear-gradient(to right, 
      transparent 0%, 
      black 50%
    );

  }

  @media (min-width: 768px) {

    .hero__content {
      position: static;
      align-items: center;
      
    }

    .text__content {
      position: static;
      width: auto;
    }

    .image__content {
      position: static;
      height: auto;
      width: auto;
    }

    img{
      margin-left: 0;
      max-width: 100%;
    }
  }
`;
