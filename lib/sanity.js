
import sanityClient from '@sanity/client';

const options = {
  projectId: 'mcrqh0ef',
  dataset: 'production',
  apiVersion: '2022-10-21',
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
}

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

export default sanityClient(options);
