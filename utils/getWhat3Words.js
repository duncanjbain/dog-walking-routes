const apiKey = process.env.WHAT3WORDS_APIKEY
const what3wordsUrl = "https://api.what3words.com/v3/convert-to-3wa"

const getLatLon3Words = async ({lat, lon}) => {
    const queryUrl = `${what3wordsUrl}?coordinates=${lat},${lon}`
    const keyHeader = {
        "X-Api-Key": apiKey,
    }
    const response = await fetch(queryUrl, {headers: keyHeader})
    return response.json();

}

export default getLatLon3Words;