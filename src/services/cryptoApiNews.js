import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '32e99ac957msh185de8ab76ee214p1a78c1jsn1ec477aec2fb',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

const baseUrl ="https://bing-news-search1.p.rapidapi.com";


const createRequest =(url)=>({
    url,headers:cryptoNewsHeaders
   });
   

export const cryptoNewsApi = createApi({
    reducerPath:'crytoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
           query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            //query:()=> createRequest('/getOfficeTasks')
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;