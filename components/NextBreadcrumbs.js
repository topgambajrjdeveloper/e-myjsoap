import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const NextBreadcrumbs = ({ title }) => {    
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default NextBreadcrumbs