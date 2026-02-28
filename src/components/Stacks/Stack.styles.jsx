import styled from "styled-components";

export const StackSection = styled.section`

    .stack__content {

        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .stack__content--content{
        
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .stack__group{

        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .stack__category--list{
        
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .tech{

        display: flex;
        gap: var(--spacing-sm);
        align-items: center;
        padding-left: var(--spacing-xs);
    }
    .tech--logo {
        
        width: var(--font-size-xl);
        filter: invert(1);
    }

    a {
        text-decoration: none;
        color: white;
        border: 1px solid var(--title-line-color);
        padding: var(--spacing-xs);
    }

    @media (min-width: 768px) {

        .stack__content--title {
            text-align: center;
        }

        .stack__content{
            align-items: center;
            gap: var(--spacing-md);
        }

        .stack__content--content {
            
            width: 100%;
            flex-direction: row;
            justify-content: space-evenly;
        }

        a{
            width: 75%;
            text-align: center;
        }
    }
`;