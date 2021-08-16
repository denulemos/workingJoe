import React from 'react';
import {render} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import {Provider as PaperProvider} from 'react-native-paper';

test('Render LoginScreen', () => {
  const {debug} = render(
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>,
  );
  debug();
});
