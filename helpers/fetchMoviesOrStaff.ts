const API_KEY: string | undefined = process.env.API_KEY

export default async function fetchMoviesOrStaff(url: string){
  if (!API_KEY) throw new Error('api key not found')
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': API_KEY
    },
  })
  return res.json()
}