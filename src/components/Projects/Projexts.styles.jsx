import styled from "styled-components";

export const ProjectsSection = styled.section`

    .projects__content{
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .projects__content--title {

        font-size: var(--font-size-lg);

        width: 100%;
        text-align: center;
        border-bottom: 1px solid var(--title-line-color);
        padding-bottom: var(--spacing-sm);
    }
    
    .cards__container {
        
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .card__container{

        display: flex;
        gap: var(--spacing-md);

        width: 100%;
        padding: var(--spacing-md);
        background: var(--color-bg-main);
        
        //border: 1px solid var(--title-line-color);
        border-radius: .5rem;
        
        color: var(--color-text-main);
        text-decoration: none;

        box-shadow: .25rem .25rem .5rem black;
    }


    .card__image {
        display: block;
        width: 33%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .card__info{
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .card__info--title{
        font-size: var(--font-size-lg)
    }
    
    @media (min-width: 768px) {

        .card__info{
            align-items: center;
            gap: var(--spacing-md);
        }
    }
`;