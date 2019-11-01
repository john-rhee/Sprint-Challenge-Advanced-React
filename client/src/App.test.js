import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  const container = render(<App />);
});

test('renders "Soccer" text', () => {
  const container = render(<App />);
  container.getByText('Soccer');
});

test('renders "Form" text', () => {
  const wrapper = render(<App />);
  wrapper.getByText(/form/i);
});

///shorter way
test('renders "Form" text', () => {
  const {getByText} = render(<App />);
  getByText(/form/i);
});
 
///test id
test('renders test id counter', () => {
  const {getByTestId} = render(<App />);
  getByTestId('testid');
});

test('renders test id2 counter', () => {
  const {getByTestId} = render(<App />);
  getByTestId('id2');
});
