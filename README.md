### in brief this mini project about a Component of UsestateAdvanced

The code allows the user to input and display a list of goals and also i used unit test like React library test and jest to check if it would be correct.

- The first line imports the React library and the useState hook from the 'react' module.
- The next section defines a functional component called GoalForm that takes in a props object as its argument.
- Inside the GoalForm component, we use the useState hook to create a formData state variable with an initial value of an object containing two properties: goal and by.
- We then define a ChangeHandle function that takes in an event (e) as its argument and updates the formData state by spreading the current formData object and updating the property with the name equal to the name of the input field that triggered the event (e.target.name) to have a new value equal to the value of that input field (e.target.value).
- We also define a SumbitHandle function that prevents the default form submission behavior, calls the onAdd function passed down from props with the current formData object, and resets the formData state to its initial value.
- Finally, we render a form with two input fields for goal and by, respectively, and a button that triggers the SumbitHandle function when clicked.

The second section defines another functional component called ListofGoals that takes in a props object as its argument.

- Inside this component, we use the map method to iterate through the allGoals array passed down from props and render each goal as an <li> element with its content displaying both the goal and the deadline (by) of that goal.

The last section exports a default functional component called UsesateAdvanced that uses the GoalForm and ListofGoals components to render a form for adding new goals and a list of all existing goals.

- It initializes an empty allGoals array using the useState hook and defines an addGoal function that takes in a goal object and updates the allGoals state by spreading the current allGoals array and adding the new goal to the end.
- It passes down the addGoal function as a prop to the GoalForm component and the allGoals state as a prop to the ListofGoals component.

### in brief about the mini project about a Component of UsestateAdvanced.test

1. `import React from 'react';` - This line imports the React library which is necessary for building React components.
2. `{ render, fireEvent } from '@testing-library/react';` - This line imports the `render` and `fireEvent` functions from the `@testing-library/react` library. These functions are used for testing React components.
3. `test('updates form data and calls onAdd when submitted', () => {` - This line defines a test case using the `test` function from Jest.
4. `const mockOnAdd = jest.fn();` - This line creates a mock function called `mockOnAdd` using Jest's `fn()` function. This mock function will be used to simulate the `onAdd` function passed to the `GoalForm` component.
5. `render(<GoalForm onAdd={mockOnAdd} />);` This line uses the `render` function from `@testing-library/react` to render the `GoalForm` component with the `mockOnAdd` function passed as a prop.
   The `getByPlaceholderText` and `getByText` These functions are used to get elements in the rendered component by their placeholder text or text content.
6. `const goalInput = getByPlaceholderText('goal');` - This line gets the input field with the placeholder text "goal" using the `getByPlaceholderText` function.
7. `const byInput = getByPlaceholderText('by');` - This line gets the input field with the placeholder text "by" using the `getByPlaceholderText` function.
8. `const submitButton = getByText('Submit Goal');` - This line gets the submit button with the text "Submit Goal" using the `getByText` function.
9. `fireEvent.change(goalInput, { target: { value: 'exercise' } });` - This line simulates a change event on the `goalInput` field by setting its value to "exercise" using the `fireEvent.change` function.
10. `fireEvent.change(byInput, { target: { value: 'next month' } });` - This line simulates a change event on the `byInput` field by setting its value to "next month" using the `fireEvent.change` function.
11. `fireEvent.click(submitButton);` - This line simulates a click event on the `submitButton` by using the `fireEvent.click` function.
12. `expect(mockOnAdd).toHaveBeenCalledWith({ goal: 'exercise', by: 'next month' });` - This line uses the `expect` function from Jest to check that the `mockOnAdd` function was called with an object containing the correct `goal` and `by` values.
13. `expect(goalInput).toHaveValue('');` - This line uses the `expect` function to check that the `goalInput` field has an empty value after the form is submitted.
14. `expect(byInput).toHaveValue('');` - This line uses the `expect` function to check that the `byInput` field has an empty value after the form is submitted.
