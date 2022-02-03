import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeptDetailComp from './LeptDetailComp';

const leptDetail = {
  total_results: 1,
  page: 1,
  per_page: 500,
  results: [
    {
      count: 37180,
      taxon: {
        observations_count: 38027,
        taxon_schemes_count: 3,
        is_active: true,
        ancestry: '48460/1/47120/372739/47158/184884/47157/47224/47922/202067/130316/52924',
        flag_counts: {
          resolved: 1,
          unresolved: 1,
        },
        wikipedia_url: 'http://en.wikipedia.org/wiki/Pearl_crescent',
        current_synonymous_taxon_ids: null,
        iconic_taxon_id: 47158,
        rank_level: 10,
        taxon_changes_count: 0,
        atlas_id: null,
        complete_species_count: null,
        parent_id: 52924,
        name: 'Phyciodes tharos',
        rank: 'species',
        extinct: false,
        id: 52925,
        default_photo: {
          id: 51521392,
          license_code: 'cc-by-nc-sa',
          attribution: '(c) Royal Tyler, some rights reserved (CC BY-NC-SA)',
          url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/51521392/square.jpg',
          original_dimensions: {
            height: 1365,
            width: 2048,
          },
          flags: [],
          square_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/51521392/square.jpg',
          medium_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/51521392/medium.jpg',
        },
        ancestor_ids: [
          48460, 1, 47120, 372739, 47158, 184884, 47157, 47224, 47922, 202067, 130316, 52924, 52925,
        ],
        iconic_taxon_name: 'Insecta',
        preferred_common_name: 'Pearl Crescent',
        english_common_name: 'Pearl Crescent',
      },
    },
  ],
};

test('Should render the LeptListComp elements', async () => {
  render(
    <MemoryRouter>
      <LeptDetailComp leptDetail={leptDetail} />
    </MemoryRouter>
  );

  const image = await screen.findByRole('img');
  const commonName = await screen.findByText(/pearl crescent/i);
  const name = await screen.findByText(/phyciodes tharos/i);
  const wiki = await screen.findByRole('link', { name: /phyciodes tharos/i });

  expect(image).toBeInTheDocument();
  expect(commonName).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(wiki).toBeInTheDocument();
});
