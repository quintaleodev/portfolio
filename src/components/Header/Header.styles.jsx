import styled from "styled-components";

export const HeaderSection = styled.header`
    
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);  
    display: flex;
    width: 100%;
    justify-content: center;
    
    span{
        display: block;
        width: 100%;
        border-bottom: 1px solid var(--title-line-color);
        padding-bottom: var(--spacing-sm);
        max-width: var(--container-max-width);
    }
   
`