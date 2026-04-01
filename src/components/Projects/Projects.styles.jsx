import styled from "styled-components";

export const ProjectsSection = styled.section`

    .projects__content{
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .projects__content--title {

        text-align: center;

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
    
    @media (min-width: 768px) {

        .card__info{
            align-items: center;
            gap: var(--spacing-md);
            width: 100%;
        }
    }

    @media (min-width: 1024px) {

        .cards__container{
            flex-direction: row;
            gap: 0;
            justify-content: space-evenly;
        }

        .card__container{
            width: 30%;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease;
            &:hover{
                transform: translateY(-.25rem);
            }
        }

        .card__image {
            width: 100%;
        }
    }
`;