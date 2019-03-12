const baseURL = 'http://funil-em-y.siteoficial.ws/api/wp-json/wp/v2/';

export const getPosts = (query) => (
    fetch(`${baseURL}pages/?slug=${query}`, { headers: { "Content-Type": "application/json; charset=utf-8" }})
    .then(res => res.json())
)