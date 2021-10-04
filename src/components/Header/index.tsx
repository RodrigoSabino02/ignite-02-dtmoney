import { useState } from 'react'
import Modal from 'react-modal'
import LogoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps){

    return (
        <Container>
            <Content>
            <img src={LogoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>



            </Content>
        </Container>
    )
}