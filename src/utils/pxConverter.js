export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
export const px2vh = (size, height = 827) => `${(size / height) * 100}vw`;
// export const px2rem = (fontSizeRoot=24, remLenght=1 )=>`${(fontSizeRoot?fontSizeRoot/remLenght:remLenght)}rem`
// export const px2rem = (fontSizeRoot=24, remLenght=1 )=>`${(remLenght!=1?fontSizeRoot/remLenght:remLenght)}rem`

// export const px2em = (fontSize=1, emLenght=1 )=>`${fontSize/emLenght}em`

// export default (px2vw, px2vh, px2rem, px2em) ;
