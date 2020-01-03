import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Layout, Col, Row, Button, Upload, Icon, Modal } from 'antd';
import {
    SideNav,
    HeaderSeller,
    SearchSeller,
    Order
} from '../../../../components';
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

}) {
    const { Content } = Layout;

    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const handleChange = ({ fileList }) => setFileList(fileList);

    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div className="product-add-page">
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

            <Content className="body-page">
                <Col span={4}>
                    <SideNav selectDefault="4" />
                </Col>

                <Col span={20} className="container-content">
                    <HeaderSeller namePage="Products/Add" />

                    <Row className="container-props">
                        <Row className="container-photos">
                            <Col className="name-props" span={2}>PHOTOS</Col>
                            <Col span={21} offset={1}>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length >= 4 ? null : uploadButton}
                                </Upload>
                            </Col>
                        </Row>

                        <Row>
                            <Col  className="name-props" span={2}>NAME</Col>
                            <Col span={21} offset={1}>
                            </Col>
                        </Row>
                    </Row>

                </Col>
            </Content>
        </div >
    );
}

export default ProductAdd;