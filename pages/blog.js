import React, { useState, useEffect } from 'react'
import { Row, Col, Media, Image, Card } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import BlogAuthorIntro from 'components/BlogAuthorIntro';
import CardItem from 'components/CardItem';
import { getAllBlogs } from './api/api';

import moment from 'moment';


export default function Blog({ blogs }) {

    useEffect(() => {
        console.log(blogs);
    }, [])

    return (
        <PageLayout>
            <BlogAuthorIntro />
            <hr />
            <Row className="mb-5">
                {blogs?.map(blog =>
                    <Col md="4" key={blog.slug}>
                        <CardItem
                            author={blog.author}
                            title={blog.title}
                            subtitle={blog.subtitle}
                            date={moment(blog.date).format('LL')}
                            image={blog.coverImage}
                            price={blog.price}
                            gramos={blog.gramos}
                            inci={blog.inci}
                            // link={{
                            //     href: '/blogs/[slug]',
                            //     as: `/blogs/${blog.slug}`
                            // }}
                        />
                    </Col>
                )
                }
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps() {
    const blogs = await getAllBlogs()
    return {
        props: {
            blogs
        },
    }
}