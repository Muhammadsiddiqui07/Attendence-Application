import React from 'react';
import { Button, Form, Input } from 'antd';
import profilePictureIcon from "../Assets/profileLogo.png"
import { IoCamera } from "react-icons/io5";
import { useState } from 'react';



const onFinish = (values) => {
    localStorage.setItem("Student First Name", values.firstName)
    localStorage.setItem("Student Last Name", values.LastName)
    localStorage.setItem("Student Course", values.Course)
    localStorage.setItem("Student Number", values.PhoneNumber)
    localStorage.setItem("Student Email", values.Email)
    localStorage.setItem("Student Password", values.password)
    // console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const AddStd = () => {


    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
        console.log("image ", image);
    }

    const profilePicture = image ? URL.createObjectURL(image) : profilePictureIcon;

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

            {/* <div className='ProfielPicture'>
                <img src={profilePicture} alt='Profile-Picture' />

                <div className='image-upload'>
                    <label for="file-input">
                        <IoCamera />
                    </label>
                    <input type="file" onChange={onImageChange} className="filetype" />
                </div> */}
            {/* </div> */}
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your First Name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="LastName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Last Name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Course"
                name="Course"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Course!',
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
                label="Email"
                name="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="PhoneNumber"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Phone Number!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    );
}
export default AddStd;
