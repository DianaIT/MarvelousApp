const API_KEY = '463e6fe6d3c3f5a904ff72ab76417669'

const mapInfoFromResult = (result) => {
  const { id, name, description, thumbnail } = result

  const { path, extension } = thumbnail

  const pathWithHttps = path.replace('http://', 'https://')
  const image = `${pathWithHttps}.${extension}`

  return {
    description,
    id,
    image,
    name
  }
}

export function getCharacters({ search = 'spider' } = {}) {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=${API_KEY}`
  )
    .then((res) => {
      console.log(res.ok)
      return res
    })
    .then((res) => res.json())
    .then((json) => {
      const {
        data: { results }
      } = json
      return results.map(mapInfoFromResult)
    })
}
