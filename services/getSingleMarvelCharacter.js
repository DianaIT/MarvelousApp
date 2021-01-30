
const API_KEY = '463e6fe6d3c3f5a904ff72ab76417669'
const IRON_MAN_ID = '1010727'

export function getSingleMarvelCharacter ({id = IRON_MAN_ID} = {}) {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
        const { data: {results} } = json
        const [{
            id,
            name,
            description,
            thumbnail

        }] = results
        
        const {
            path,
            extension
        } = thumbnail

        const pathWithHttps = path.replace('http://', 'https://')
        const image = `${pathWithHttps}.${extension}`

        return {
            description,
            id,
            image,
            name,
        }
    })

}