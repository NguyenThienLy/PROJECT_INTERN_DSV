import * as React from "react";

import "./fitler.scss";
import { Menu, Row, Col, Avatar, Button, Checkbox, Slider } from 'antd'

export function Fitler({ }) {
    const { SubMenu } = Menu;
    const styleButtonSize = {
        width: "35px",
        height: "35px",
        marginRight: "5px",
        color: "#202124",
        borderColor: "#808080",
        borderRadius: "0px"
    }

    const styleColor = {
        width: "30px",
        height: "30px",
        backgroundColor: '#ff5f6d',
        marginBottom: "10px"
    }

    const marks = {
        0: '$69',
        100: '$300'
    };

    return (
        <div className="fitler">
            <Menu
                style={{ width: 155 }}
                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5']}
                mode="inline"
            >
                <SubMenu className="size"
                    key="sub1"
                    title={
                        <span>Size </span>
                    }
                >
                    <Row>
                        <Col span={8}>
                            <Button type="primary" ghost style={styleButtonSize}>S</Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" ghost style={styleButtonSize}>M</Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" ghost style={styleButtonSize}>L</Button>
                        </Col>
                    </Row>
                </SubMenu>

                <SubMenu
                    key="sub2"
                    title={
                        <span>Color </span>
                    }
                >
                    <Row>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                        <Col span={8}>
                            <Avatar style={styleColor}></Avatar>
                        </Col>
                    </Row>
                </SubMenu>

                <SubMenu
                    key="sub3"
                    title={
                        <span>Brand </span>
                    }
                >
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={24}>
                                <Checkbox value="Zara" defaultChecked={false}>Zara</Checkbox>
                            </Col>
                            <Col span={24}>
                                <Checkbox value="H&M" defaultChecked={false}>H&M</Checkbox>
                            </Col>
                            <Col span={24}>
                                <Checkbox value="Pull&Bear" defaultChecked={false}>Pull&Bear</Checkbox>
                            </Col>
                            <Col span={24}>
                                <Checkbox value="Dior" defaultChecked={false}>Dior</Checkbox>
                            </Col>
                            <Col span={24}>
                                <Checkbox value="Chanel" defaultChecked={false}>Chanel</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </SubMenu>

                <SubMenu
                    key="sub4"
                    title={
                        <span>Price </span>
                    }
                >
                    <div>
                        <Slider marks={marks} defaultValue={300} step={5} />
                    </div>
                </SubMenu>

                <SubMenu
                    key="sub5"
                    title={
                        <span>Available </span>
                    }
                >
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={24}>
                                <Checkbox value="In-store">In-store</Checkbox>
                            </Col>
                            <Col span={24}>
                                <Checkbox value="Out of stock">Out of stock</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </SubMenu>
            </Menu>
        </div>
    );
}


export default Fitler
