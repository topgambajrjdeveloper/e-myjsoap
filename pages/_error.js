import PageLayout from 'components/PageLayout'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {useRouter} from 'next/router'

export default function NotFound() {
    const router =useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <>
            <PageLayout>
                <div className="not-found">
                    <h1>Oooops!</h1>
                    <h2>No se pudo encontrar esta página.</h2>
                    <p>Serás redirecionado de forma automatica en "3 segundos", sino pulsa{" "}
                        <Link href='/'>
                            <btn>AQUÏ</btn>
                        </Link>
                    </p>
                </div>
            </PageLayout>
        </>
    )
}