const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
});

export const fetchWalks = async () => {
    const walks = await client.getEntries();
    if(walks.items) return walks.items
    console.log(`Error getting entries for ${contentType.name}`)
};

export const fetchLatestWalks = async (numberOfWalks = 6) => {
    const latestWalks = await client.getEntries({limit: numberOfWalks});
    if(latestWalks.items) return latestWalks.items;
}

export default fetchWalks;