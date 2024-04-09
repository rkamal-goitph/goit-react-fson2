import React from 'react';
import Inventory from './Inventory/Inventory';
import { InventoryProvider } from 'context/InventoryProvider';
import { SignUpProvider } from 'context/SignUpProvider';
import { ControlledSignUpForm } from './ControlledSignUpForm/ControlledSignUpForm';
import { UncontrolledSignUpForm } from './UncontrolledSignUpForm/UncontrolledSignUpForm';

const App = () => {
  return (
    <>
      <InventoryProvider>
        <Inventory />
      </InventoryProvider>
      <SignUpProvider>
        <ControlledSignUpForm />
        <UncontrolledSignUpForm />
      </SignUpProvider>
    </>
  );
};

export default App;
