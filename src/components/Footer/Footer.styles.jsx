import styled from "styled-components";

export const FooterSection = styled.section`

    .footer__content{

        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .footer__links{
        display: flex;
        gap: var(--spacing-sm);
    }
    a{
        text-decoration: none;
        color: var(--color-text-main);
    }

    .contact__logo {
        width: 25px;
        filter: invert(1);
    }

    @media (min-width: 768px) {

        .footer__content{
            align-items: center;
        }
    }
`;