export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ✈️ TLY
      </div>
    ),
    {
      width: 128,
      height: 128,
    }
  );
}
