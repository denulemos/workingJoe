import React from 'react';
import {Button, Portal, Dialog} from 'react-native-paper';

const PortalModal = ({mostrarModal, textoModal, funcionModal, textoBoton}) => {
  return (
    <Portal>
      <Dialog visible={mostrarModal} onDismiss={() => funcionModal()}>
        <Dialog.Title>{textoModal}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={() => funcionModal()}>{textoBoton}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default PortalModal;
