export const contentfulImage = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}&fit=fill`
  }

export default contentfulImage;