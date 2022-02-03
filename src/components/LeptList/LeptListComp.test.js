import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeptListComp from './LeptListComp';

test('Should render the LeptListComp elements', async () => {
  render(
    <MemoryRouter>
      <LeptListComp
        lept={{
          taxon: {
            default_photo: {
              square_url:
                'https://inaturalist-open-data.s3.amazonaws.com/photos/51521392/square.jpg',
            },
            english_common_name: 'Pearl Crescent',
          },
        }}
      />
    </MemoryRouter>
  );

  const image = await screen.findByRole('img');
  const name = await screen.findByText(/pearl crescent/i);

  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
