import React from 'react';
import { Card } from 'antd';
import "../App.css"
import BackImg from '../Assets/loginBackground.jpg'
import MyModal from './loginModal';
import StdModal from './StudentModal.js';

const MyCard = () => (
    <div className='loginCard' style={{ backgroundImage: `url(${BackImg})` }}>
        <Card className='mainCard'>
            <h2>Karachi Institute Of Economics And Tecnology</h2>
            <MyModal  />
            <StdModal />
        </Card>
    </div>
);
export default MyCard;