import { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';
import CategoriesTag from './CategoriesTag';

const CardItem = ({ title, category, subtitle, image, date, author, link, mode = 'normal' }) => {


  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
        <Card.Header
          className="d-flex flex-row">
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar" />
          <div>
            {
              mode === 'placeholder' ?
                <>
                  <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                  <Card.Text className="card-date">Placeholder Date</Card.Text>
                </>
                :
                <>
                  <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                  <Card.Text className="card-date">{date}</Card.Text>
                </>
            }
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ?
            <div className="image-placeholder align-self-center" />
            :
            image &&
            <Card.Img
              src={
                urlFor(image)
                  .height(300)
                  .url()}
              alt={title}
              title={title}
              style={{ width: '18rem' }}
            />
          }
        </div>
        <Card.Body>
          {
            mode === 'placeholder' ?
              <>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placeholder Subtitle</Card.Text>
                <Card.Text>Placeholder Cat</Card.Text>
              </>
              :
              <>
                <Card.Title className="card-main-title">{
                  title.length > 40 ?
                    title.substr(0, 40) + '...' : title}</Card.Title>
                <Card.Text>{
                  subtitle.length > 40 ?
                    subtitle.substr(0, 40) + '[...]' : subtitle}</Card.Text>
                <Card.Text>
                  <Link href={`/categorie/${category}`}>
                    <a>
                      <CategoriesTag category={category} />
                    </a>
                  </Link>
                </Card.Text>
              </>
          }
        </Card.Body>
      </div>
      {link &&
        <Link {...link}>
          <a className="card-button">
            Lee mas
          </a>
        </Link>
      }
    </Card>
  )
}

export default CardItem;
