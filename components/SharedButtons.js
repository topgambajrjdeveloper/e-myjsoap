import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const SharedButtons = ({ url, title, children, className, ...rest }) => {
    const router = useRouter();
    return (
        <>
            <button className={`btn btn-sm btn-social ${className}`} {...rest}>
                <a target="_blank" href={`${url}=https://myjsoap.xyz${router.asPath}`}><h3>{title}</h3> {children}</a>
            </button>
        </>
    )
}

export default SharedButtons