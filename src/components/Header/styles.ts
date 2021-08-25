import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue)
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display:flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem 10rem;

    button { 
        width: 12.2rem;
        height: 3rem;

        padding: 0 2rem;

        border: 0;
        border-radius: 0.25rem;

        font-size: 1rem;
        background: var(--blue-light);
        color: var(--shape);

        trasition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

`