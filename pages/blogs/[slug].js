
import { useEffect, useState } from 'react';
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import ErrorPage from 'next/error';
import { getBlogBySlug, getAllBlogs, onBlogUpdate } from 'lib/api';
import { Row, Col } from 'react-bootstrap'
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';

import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';
import NextBreadcrumbs from 'components/NextBreadcrumbs';

const BlogDetail = ({ blog: initialBlog, preview }) => {
  const router = useRouter();
  const [blog, setBlog] = useState(initialBlog);
  
  useEffect(() => {
    let sub;
    if (preview) {
      sub = onBlogUpdate(blog.slug)
        .subscribe(update => {
          setBlog(update.result)
        })
    }

    return () => sub && sub.unsubscribe()
  }, [])

  // if (!router.isFallback && !blog?.slug) {
  //   return <ErrorPage statusCode="404"/>
  // }

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
          <NextBreadcrumbs title={blog.title} />
          {preview && <PreviewAlert />}

          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format('LL')}
          />
          <hr />

          {blog.content &&
            <BlogContent content={blog.content} />
          }
          <>
            <div className="alert alert-primary text-center"> <h3>Etiquetado INCI:</h3> {"  "}<br /> {blog.inci}</div>
            <div className="alert alert-primary text-center"><h4>Mas información: <br /> {blog.gramos} </h4></div>
            <div className="alert alert-primary text-center">{"  "} Si te gusta puedes comprar el producto aquí:{" "}{"  "}
              <button className="btn btn-light">
                <a target="_blank" href={`https://wa.me/34649599475?text=https://myjsoap.xyz${router.asPath}`}><h3>Comprar{" "} {blog.price}€</h3></a>
              </button>
            </div>
          </>
        </Col>
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
    unstable_revalidate: 1
  }
}

// TODO: Introduce fallback
export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true
  }
}

export default BlogDetail;
