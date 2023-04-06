import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {GoalForm} from './UsesateAdvanced';

test('updates form data and calls onAdd when submitted', () => {
  const mockOnAdd = jest.fn();
  render(<GoalForm onAdd={mockOnAdd} />);
  const goalInput = screen.getByPlaceholderText('goal');
  const byInput = screen.getByPlaceholderText('by');
  const submitButton = screen.getByText('Submit Goal');

  fireEvent.change(goalInput, { target: { value: 'exercise' } });
  fireEvent.change(byInput, { target: { value: 'next month' } });
  fireEvent.click(submitButton);

  expect(mockOnAdd).toHaveBeenCalledWith({ goal: 'exercise', by: 'next week' });
  expect(goalInput).toHaveValue('');
  expect(byInput).toHaveValue('');
});