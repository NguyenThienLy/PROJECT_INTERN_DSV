import * as React from "react";
import { Link } from "react-router-dom"
import { Breadcrumb } from 'antd';

import "./breadcrumbMain.scss";

export function BreadcrumbMain({
    content
}) {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>{content.main}</Breadcrumb.Item>

                {content.sub1 !== null &&
                    <Breadcrumb.Item>
                        <Link to={`/${content.main}/${content.sub1}`} >{content.sub1}</Link>
                    </Breadcrumb.Item>
                }

                {content.sub2 !== null &&
                    <Breadcrumb.Item>
                        <Link to={`/${content.main}/${content.sub1}/${content.sub2}`} >{content.sub2}</Link>
                    </Breadcrumb.Item>
                }
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbMain