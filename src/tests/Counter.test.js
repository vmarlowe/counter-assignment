import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

let count;

beforeEach(() => {
  render(<Counter />);
  count = screen.getByTestId('count');
})

test('renders counter message', () => {
  const Message = screen.getByTestId('count');
  expect(Message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  userEvent.click(increment);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText('-');
  userEvent.click(decrement);
  expect(count.textContent).toBe('-1');
});
