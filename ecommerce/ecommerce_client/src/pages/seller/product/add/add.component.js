import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Input,
    Layout,
    Col,
    Row,
    Button,
    Upload,
    Icon,
    Modal,
    Select,
    Form
} from 'antd';
import {
    SideNav,
    HeaderSeller,
    SearchSeller,
    Order
} from '../../../../components';
import { api } from '../../../../services';
import './add.component.scss';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export function ProductAdd({
    createProduct
}) {
    const { Content } = Layout;
    const { TextArea } = Input;
    const { Option } = Select;

    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState(null);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const handleChange = ({ fileList }) => {
        setFileList(fileList)
    };

    const handleUploadFile = ({ file, onSuccess }) => {
        console.log(file);
        setTimeout(() => {
            onSuccess("ok");
        }, 0)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

       // console.log(fileList)

        const body = new FormData();
        body.append('mainImage', fileList[0].originFileObj);
        body.append('name', "Product 1")
        body.append('category', "ABC");

        createProduct(body);
    }

    // const onChangeHandler = event => {
    //     setFile(event.target.files[0]);
    // }

    useEffect(() => {

    })

    return (
        <div className="product-add-page">
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

            <Content className="body-page">
                <Row>
                    <Col span={4} className="container-side-nav">
                        <SideNav selectDefault="4" />
                    </Col>

                    <Col span={20} className="container-content">
                        <HeaderSeller namePage="Products/Add" />

                        <Row className="container-props">
                            <Form onSubmit={handleFormSubmit} encType="multipart/form-data">
                                <Form.Item className="container-photos">
                                    <Col className="name-props photos" span={3}><p>PHOTOS</p></Col>
                                    <Col span={20} offset={1}>
                                        <Upload
                                            customRequest={handleUploadFile}
                                            accept=".jpg"
                                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                        >
                                            {fileList.length >= 4 ? null : (
                                                <div>
                                                    <Icon type="plus" />
                                                    <div className="ant-upload-text">Upload</div>
                                                </div>
                                            )}
                                        </Upload>

                                        <p className="note">You can add up to 4 photos. The 1st photo will be set as cover (main photo).</p>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-input">
                                    <Col className="name-props" span={3}><p>NAME</p></Col>
                                    <Col span={20} offset={1}>
                                        <Input className="input" placeholder="Enter name product..." />
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-select">
                                    <Col className="name-props" span={3}><p>CATEGORIES</p></Col>
                                    <Col span={20} offset={1}>
                                        <Select
                                            className="select"
                                            mode="multiple"
                                            placeholder="Please select categories"
                                            defaultValue={["Men", "Girls"]}
                                        >
                                            <Option key="Men">Men</Option>
                                            <Option key="Girls">Girls</Option>
                                            <Option key="Boys">Boys</Option>
                                            <Option key="Ladies">Ladies</Option>
                                        </Select>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-select">
                                    <Col className="name-props" span={3}><p>SUB CATEGORIES</p></Col>
                                    <Col span={20} offset={1}>
                                        <Select
                                            className="select"
                                            mode="multiple"
                                            placeholder="Please select sub categories"
                                            defaultValue={["Men", "Girls"]}
                                        >
                                            <Option key="Men">Men</Option>
                                            <Option key="Girls">Girls</Option>
                                            <Option key="Boys">Boys</Option>
                                            <Option key="Ladies">Ladies</Option>
                                        </Select>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-select">
                                    <Col className="name-props" span={3}><p>BRAND</p></Col>
                                    <Col span={20} offset={1}>
                                        <Select
                                            className="select"
                                            defaultValue="Zara" >
                                            <Option value="H&M">H&M</Option>
                                            <Option value="Dior">Dior</Option>
                                            <Option value="VL">VL</Option>
                                        </Select>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-input">
                                    <Col className="name-props" span={3}><p>PRICE($)</p></Col>
                                    <Col span={20} offset={1}>
                                        <Input className="input" placeholder="Enter price product..." />
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-select">
                                    <Col className="name-props" span={3}><p>SIZE</p></Col>
                                    <Col span={20} offset={1}>
                                        <Select
                                            className="select"
                                            mode="multiple"
                                            placeholder="Please select size"
                                            defaultValue={["S", "M", "L"]}
                                        >
                                            <Option key="S">S</Option>
                                            <Option key="M">M</Option>
                                            <Option key="L">L</Option>
                                        </Select>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-select">
                                    <Col className="name-props" span={3}><p>COLORS</p></Col>
                                    <Col span={20} offset={1}>
                                        <Select
                                            className="select"
                                            mode="multiple"
                                            placeholder="Please select colors"
                                            defaultValue={["Pink"]}
                                        >
                                            <Option key="Pink">Pink</Option>
                                            <Option key="Pale yellow">Pale yellow</Option>
                                            <Option key="Pale blue">Pale blu</Option>
                                            <Option key="Orange">Orange</Option>
                                            <Option key="Pale black">Pale black</Option>
                                            {/* {['Pink', 'Pale yellow', 'Pale blue', 'Orange', 'Pale black']} */}
                                        </Select>
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-input">
                                    <Col className="name-props" span={3}><p>QUANTITY</p></Col>
                                    <Col span={20} offset={1}>
                                        <Input className="input" placeholder="Enter quantity product..." />
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-text-area">
                                    <Col className="name-props" span={3}><p>DESCRIPTION</p></Col>
                                    <Col span={20} offset={1}>
                                        <TextArea className="text-area" rows={4} placeholder="Enter description product..." />
                                    </Col>
                                </Form.Item>

                                <Form.Item className="container-btn">
                                    <Col span={4} offset={15}>
                                        <Button className="btn-secondary" type="primary">Cancel</Button>
                                    </Col>
                                    <Col span={4} offset={1}>
                                        <Button
                                            className="btn-primary"
                                            type="primary"
                                            htmlType="submit"
                                        >Complete</Button>
                                    </Col>
                                </Form.Item>
                            </Form>


                            {/* <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
                                <input type="file" name="file" onChange={onChangeHandler}/>
                                 <button type="submit"> sumbmit</button>
                            </form> */}
                        </Row>
                    </Col>
                </Row>
            </Content>
        </div >
    );
}

export default ProductAdd;