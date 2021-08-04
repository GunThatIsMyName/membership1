import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:"61fd1ed95a3194d58014b1ebda72d539",
        language:"en-US"
    }
})

export const tvApi = {
    topRated:()=>api.get('tv/top_rated'),
    popular:()=>api.get('tv/popular'),
    airingToday:() =>api.get('tv/airing_today'),
    showDetail:(id)=>api.get(`tv${id}`,{
        params:{
            append_to_response:"videos"
        }
    }),
    search:(term)=>api.get(`search/tv`,{
        params:{
            query: encodeURIComponent(term)
        }
    })
}
export const movieApi = {
    nowPlaying:()=> api.get('movie/now_playing'),
    topRated: ()=> api.get('movie/top_rated'),
    upcoming: ()=> api.get('movie/upcoming'),
    movieDetail:(id)=>api.get(`movie${id}`,{
        params:{
            append_to_response:"videos"
        }
    }),
    search:(term)=>api.get(`search/movie`,{
        params:{
            query: encodeURIComponent(term)
        }
    })
}

movieApi.search('The Flash')

export default api;

// const getPopular = (kind)=>{
//     const baseUrl = `https://api.themoviedb.org/3/${kind}`;
//     const config ={
//         api_key:"61fd1ed95a3194d58014b1ebda72d539",
//         language:"en-US"
//     }
//     const params = new URLSearchParams(config).toString();
//     return `${baseUrl}?${params}`
// }

// fetch(getPopular("tv/popular"))

// export default getPopular;