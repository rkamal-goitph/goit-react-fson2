import React from 'react';
import { Inventory } from './Inventory/Inventory';
import { InventoryProvider } from 'context/InventoryContext';
import { SignUpProvider } from 'context/SignUpContext';
import { ControlledSignUpForm } from './ControlledSignUpForm/ControlledSignUpForm';
import { UncontrolledSignUpForm } from './UncontrolledSignUpForm/UncontrolledSignUpForm';

const App = () => {
  return (
    <>
      <SignUpProvider>
        <ControlledSignUpForm />
        <UncontrolledSignUpForm />
      </SignUpProvider>
      <InventoryProvider>
        <Inventory />
      </InventoryProvider>
    </>
  );
};

export default App;
