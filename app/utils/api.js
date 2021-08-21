const fetchPopularLanguage = async (language) => {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  const rawData = await fetch(endpoint)
  const data = await rawData.json()

  if (!data.items) {
   throw new Error(data.message) 
  }

  return data.items
}

export default fetchPopularLanguage;