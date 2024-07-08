import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const MyForm = () => {
    let navigate = useNavigate();


    const onFinish = (values) => {
        const AdminEmail = "Admin@gmail.com";
        const AdminPassword = "Admin123";
        const admin = values.username;
        const adminPass = values.password;

        if (AdminEmail == admin && AdminPassword == adminPass) {
            console.log("yaha tk to araha ha");
            navigate("/adminDashboard");
        }
        else {
            alert("Invalid Email Or Password")
        }
        console.log('Success:', values);
    };
    return (

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
            <h2 style={{ textAlign: "center" }}>Karachi Institute Of Economics And Tecnology</h2>
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
    );

}
export default MyForm;
