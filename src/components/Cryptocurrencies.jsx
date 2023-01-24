import React,{useEffect, useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';



const Cryptocurrencies = ({simplified}) => {
  const count = simplified?10:100
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count);
 ///console.log(cryptoList?.data?.coins);
  const [cryptos,setCryptos] =useState([])
  const[searchTerm,setSearchTerm] = useState('');
  //console.log(cryptos);
  useEffect(()=>{
   // setCryptos(cryptoList?.data?.coins);
    const fileteredData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(fileteredData);
  },[cryptoList,searchTerm])
  
 
  if(isFetching ){
    return '....Loading';
  }
  else{
    //setCryptos(cryptos);
  }



 

  return (
    <>
    {!simplified && <div className='search-crypto'>
      <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>}
      <Row gutter = {[32,32]} className="crypto-card-container">
         {cryptos?.map((currency)=>{
            return <Col xs={24} sm={12} lg={6}  className='crypto-card' key={currency.uuid}>
              <Link key={currency.uuid} to ={`/crypto/${currency.uuid}`}>
                 <Card title={`${currency.rank}. ${currency.name}`} 
                 extra={<img className='crypto-image' src={currency.iconUrl}></img>} hoverable>
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                 </Card>
              </Link>
            </Col>
       })}
      </Row>
 
    </>
  )
}

export default Cryptocurrencies
