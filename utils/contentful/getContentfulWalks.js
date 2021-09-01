const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchAllWalks = async () => {
  const walks = await client.getEntries();
  if (walks.items) return walks.items;
  console.log(`Error getting entries for ${contentType.name}`);
};

export const fetchLatestWalks = async (numberOfWalks = 6) => {
  const latestWalks = await client.getEntries({ limit: numberOfWalks });
  if (latestWalks.items) return latestWalks.items;
};

//currently no way of ranking walks, so lets just get some arbritary walks for now
export const fetchPopularWalks = async (numberOfWalks = 3) => {
  const popularWalks = await client.getEntries({
    content_type: "dogWalkingRoute",
    limit: numberOfWalks,
  });
  return popularWalks.items
};

export const fetchByNameSlug = async (slug) => {
  const singleWalk = await client.getEntries({
    content_type: "dogWalkingRoute",
    "fields.nameSlug[in]": slug,
  });
  return singleWalk.items;
};

export const fetchByCountySlug = async (countySlug) => {
  const walksByCounty = await client.getEntries({
    content_type: "dogWalkingRoute",
    "fields.countySlug[in]": countySlug,
  });
  return walksByCounty;
};
