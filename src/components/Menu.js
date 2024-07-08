import React from 'react';
import { Layout, theme } from 'antd';
import logo from '../Assets/logo.jpeg';
import "../App.css";
import { NavLink } from 'react-router-dom';
import AddStdModal from './AddStdModal.js';
import DashHead from './DashboardHead.js';
import AttenView from './AttendenceView.js';



const { Content } = Layout;



const ChildComponent = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout>
            <Layout>
                <div>
                    <h2 className='headingAdmDAsh'>Admin Dashboard</h2>
                </div>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img src={logo} alt='logo'
                                style={{
                                    marginTop: '-20px'
                                }}
                            />

                            <NavLink to={"/Student"}><h2>Students</h2></NavLink>
                            <NavLink to={"/attendence"}><h2>Attendence</h2></NavLink>

                            <h4 className='Logout'>
                                <NavLink to={"/"}>Logout</NavLink></h4>

                        </div>

                        <div className='DetailAdmDash'>

                            <div className='dashboardHeader'>
                                <div className='dashboardHeader2'>
                                    <h2>Students </h2>
                                    <AddStdModal />
                                </div>

                                <div>
                                    <DashHead />

                                </div>


                            </div>

                        </div>


                    </div>
                </Content>
            </Layout>
        </Layout>
    );

};
const MyMenu = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout>
            <Layout>
                <div>
                    <h2 className='headingAdmDAsh'>Admin Dashboard</h2>
                </div>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img src={logo} alt='logo'
                                style={{
                                    marginTop: '-20px'
                                }}
                            />

                            <NavLink to={"/Student"}><h2>Students</h2></NavLink>
                            <NavLink to={"/attendence"}><h2>Attendence</h2></NavLink>

                            <h4 className='Logout'>
                                <NavLink to={"/"}>Logout</NavLink></h4>

                        </div>

                        <div className='DetailAdmDash'>

                            <div className='dashboardHeader'>
                                <div className='dashboardHeader2'>
                                    <h2>Students </h2>
                                    <AddStdModal />
                                </div>

                                <div>
                                    <DashHead />
                                </div>


                            </div>

                        </div>


                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
const MyAttendence = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout>
            <Layout>
                <div>
                    <h2 className='headingAdmDAsh'>Admin Dashboard</h2>
                </div>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <img src={logo} alt='logo'
                                style={{
                                    marginTop: '-20px'
                                }}
                            />

                            <NavLink to={"/Student"}><h2>Students</h2></NavLink>
                            <NavLink to={"/attendence"}><h2>Attendence</h2></NavLink>

                            <h4 className='Logout'>
                                <NavLink to={"/"}>Logout</NavLink></h4>

                        </div>

                        <div className='DetailAdmDash'>

                            <div className='dashboardHeader'>
                                <div className='dashboardHeader2'>
                                    <h2>Attendence </h2>
                                </div>

                                <div>
                                    <AttenView />
                                </div>


                            </div>

                        </div>


                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};



export { MyMenu, ChildComponent, MyAttendence };
