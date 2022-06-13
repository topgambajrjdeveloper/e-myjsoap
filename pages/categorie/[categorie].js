import { useEffect, useState } from 'react';
import PageLayout from 'components/PageLayout';
import { getAllBlogs, onBlogUpdate } from 'lib/api';
import { Row, Col } from 'react-bootstrap'
import { urlFor } from 'lib/api';
import { useRouter } from 'next/router';

const CategoriesDetails = ({ categorie: initialCategorie, preview }) => {
    const router = useRouter();
    const [categorie, setCategorie] = useState(initialCategorie);
    
console.log(router);


    if (router.isFallback) {
        return (
            <PageLayout className="blog-detail-page">
                Loading...
            </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <>
                        <p className="text-center mt-5">Pagina en construción</p>
                    </>
                </Col>
            </Row>
        </PageLayout>
    )
}





export default CategoriesDetails