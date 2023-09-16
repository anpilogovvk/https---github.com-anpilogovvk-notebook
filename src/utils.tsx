



type UrlProps = {
  imageId:string;
}


export function getImageUrl({imageId}:UrlProps) {
  return (

    'https://i.imgur.com/' +
    imageId +
    's.jpg'
  );
}
