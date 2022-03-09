import { Helmet } from 'react-helmet';

const title = '#StandWithUkraine - NFT Charity Drop for Ukrainian Army';
const description = '100% of the donations go to the needs of the Ukrainian army. Support Ukraine, save lives!';
const url = 'https://standwithukraine.community/';
const image = 'https://standwithukraine.community/assets/images/og_image.png';

export function NFTPage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <meta name="twitter:site" content="@StandWith_UA" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={description} />
      </Helmet>
      <h1>NFT page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi assumenda, deserunt distinctio eligendi eum fuga harum id incidunt libero magnam maiores natus nobis porro reiciendis rerum vero vitae.</p>
    </>
  );
}
