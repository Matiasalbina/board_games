
const ExampleCarouselImage = ({ src, text }) => {
  return (
    <div
      style={{
        background: `url(${src}) center/contain no-repeat rgb(255, 255, 255)`,
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2px"

      }}
    >
      <h2 style={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
        {text}
      </h2>
    </div>
  );
};

export default ExampleCarouselImage;
