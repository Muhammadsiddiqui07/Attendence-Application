import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import MyForm from './form';


const MyModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='modalMain'>
            <div className='modal'>
                <Button type="primary" onClick={showModal}>
                    Login As Admin
                </Button>
                <Modal title="Login As Admin" open={isModalOpen} onCancel={handleCancel}>
                    <MyForm />
                </Modal>
            </div>
        </div>
    );
};
export default MyModal;
