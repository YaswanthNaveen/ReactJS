import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoAPiHeaders ={
    'X-RapidAPI-Key': '32e99ac957msh185de8ab76ee214p1a78c1jsn1ec477aec2fb',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
//const baseUrl = 'https://personal-35c-dev-ed.my.salesforce.com/services/apexrest';



const createRequest =(url)=>({
 url,headers:cryptoAPiHeaders
});


export const cryptoApi = createApi({
    reducerPath:'crytoApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
           query:(count)=> createRequest(`/coins?limit=${count}`)
            //query:()=> createRequest('/getOfficeTasks')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
    })
});


export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,//This comes from Above getCryptos  adding use as Prefix Query as suffix
} = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '32e99ac957msh185de8ab76ee214p1a78c1jsn1ec477aec2fb',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };