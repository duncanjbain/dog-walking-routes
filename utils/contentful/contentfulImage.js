export const contentfulImage = ({ src, width, height, quality }) => {
    return `${src}?w=${width}&h=${height}&q=${quality || 75}&fit=fill`
  }

export default contentfulImage;