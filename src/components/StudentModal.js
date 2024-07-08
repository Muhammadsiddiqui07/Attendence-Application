import React, { useState } from 'react';
import { Button, Modal, Space, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    let navigate = useNavigate();
    const onFinish = (values) => {
        const ids = JSON.parse(localStorage.getItem('Student IDs')) || [];
        const passes = JSON.parse(localStorage.getItem('Student Password')) || [];
        const usernames = JSON.parse(localStorage.getItem('Student name')) || [];
        const courses = JSON.parse(localStorage.getItem('Student course')) || [];
    
        console.log('Retrieved values from localStorage:');
        console.log('IDs:', ids);
        console.log('Passwords:', passes);
        console.log('Usernames:', usernames);
        console.log('Courses:', courses);
    
        let userDetail = null;
    
        for (let i = 0; i < ids.length; i++) {
            const storedId = String(ids[i]);
            const storedPass = String(passes[i]);
            const inputUsername = String(values.username);
            const inputPassword = String(values.password);
    
            console.log(`Comparing: ${storedId} with ${inputUsername} and ${storedPass} with ${inputPassword}`);
            
            if (storedId === inputUsername && storedPass === inputPassword) {
                userDetail = {
                    id: storedId,
                    username: String(usernames[i]),
                    course: String(courses[i])
                };
                console.log('Login successful');
                break;
            }
        }
        
        if (userDetail !== null) {
            localStorage.setItem('currentUser', JSON.stringify(userDetail));
            console.log('Success:', userDetail);
            navigate("/StudentDashBoard");
        } else {
            console.log('Login failed');
        }
    
        console.log('Submitted values:', values);
    };
    
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Login As Student
            </Button>
            <Modal
                title="Login As Student"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="ok"
                cancelText="Cancel"
            >

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>




            </Modal>
        </>
    );
};
const StdModal = () => {
    const [modal, contextHolder] = Modal.useModal();
    return (
        <div className='adminModal'>
            <Space>
                <LocalizedModal />
            </Space>
            {contextHolder}
        </div>
    );
};
export default StdModal;
