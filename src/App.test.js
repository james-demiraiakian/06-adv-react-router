import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const listImages = await screen.findAllByRole('img');
  expect(listImages.length).toBe(500);

  userEvent.click(listImages[8]);

  const detailImage = await screen.findAllByRole('img');
  expect(detailImage).toHaveLength(1);
});
