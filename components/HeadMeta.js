import Head from "next/head";
import { useRouter } from "next/router";

const HeadMeta = ({ metaTitle, metaDescription, metaTwitterImage, metaTwitterImageAlt }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={metaDescription} />
      <meta
        property="og:url"
        content={`https://dog-walking.duncanbain.dev${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="dog-walking.duncanbain.dev" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta
        property="og:image"
        content="https://dog-walking.duncanbain.dev/socialcard.jpg"
      />
      <meta property="og:image:alt" content="A happy looking dog on a walk" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${metaTwitterImage}?w=1200&h=628&q=75`} />
      <meta name="twitter:image:alt" content={metaTwitterImageAlt} />
    </Head>
  );
};

export default HeadMeta;
