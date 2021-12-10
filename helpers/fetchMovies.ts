const API_KEY: string | undefined = process.env.API_KEY

export default function fetchMovies(url: string): Promise<Response> {
  if (!API_KEY) throw new Error('api key not found')
  return fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': API_KEY
    },
  })
}