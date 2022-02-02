export async function fetchLeptDetail(id) {
  const resp = await fetch(
    `https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&spam=false&taxon_id=${id}&locale=en-US`
  );
  const respJson = await resp.json();
  return respJson;
}

export async function fetchLept(currentPage) {
  const resp = await fetch(
    `https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&spam=false&taxon_id=47157&locale=en-US&page=${currentPage}`
  );
  const respJson = await resp.json();
  return respJson;
}
