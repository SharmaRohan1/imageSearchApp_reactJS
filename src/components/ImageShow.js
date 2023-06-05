function ImageShow({ key, image }) {
  return (
    <div key={key}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
