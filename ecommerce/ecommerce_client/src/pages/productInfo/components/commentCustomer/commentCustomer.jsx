import React, { useState, useEffect } from 'react'
import { Comment, Icon, Tooltip, Avatar } from 'antd'
import moment from 'moment';

import './commentCustomer.scss'

export function CommentCustomer({ }) {

    useEffect(() => {

    });

    return (
        <div className="comment">
            <Comment
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format("MMM Do YY")}>
                        <span>{moment().format("MMM Do YY")}</span>
                    </Tooltip>
                }
            />
        </div>
    );
}

export default CommentCustomer;