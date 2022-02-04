import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('Tests user interaction', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.getByText('LOADING...'));

  const listImages = await screen.findAllByRole('img');
  expect(listImages.length).toBe(501);

  userEvent.click(listImages[8]);

  const detailImage = await screen.findAllByRole('img');
  expect(detailImage).toHaveLength(1);
});
