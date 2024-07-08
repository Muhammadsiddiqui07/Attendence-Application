import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddStd from './addStdForm.js';


const AddStdModal = () => {
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
        <>
            <Button type="primary" onClick={showModal}>
                Add Student
            </Button>
            <Modal title="Add Student" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <AddStd />
            </Modal>
        </>
    );
};
export default AddStdModal;
