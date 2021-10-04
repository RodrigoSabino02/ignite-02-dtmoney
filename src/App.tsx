import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionProvider } from './contexts/TransactionsContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyled } from "./styles/global";

Modal.setAppElement('#root');

export const App = () => {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyled />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}