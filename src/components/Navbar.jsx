    import React from 'react'
    
    import {Button,Menu,Typography,Avatar}  from 'antd';

    import {Link}  from 'react-router-dom';
    import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';

    import icon from "../images/cryptocurrency.png";
    const Navbar = () => {
        function getItem(label, key, icon, children, type) {
            return {
              key,
              icon,
              children,
              label,
              type,
            };
          }
    const items =[getItem( <Link to="/">Home</Link>,'1',<HomeOutlined/>),
                    getItem(  <Link to="/cryptocurrencies">Cryptocurrencies</Link>,'2',<FundOutlined/>),
                    getItem(<Link to="/exchanges">Exchanges</Link>,'3',<MoneyCollectOutlined/>),
                    getItem(  <Link to="/news">News</Link>,'4',<BulbOutlined/>)];
      return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon}  size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'></Button> */}
            </div>
            <Menu theme="dark"  items={items}>
                
            </Menu>
            {/* <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
               
            </Menu> */}
          
        </div>
      )
    }
    
    export default Navbar
    