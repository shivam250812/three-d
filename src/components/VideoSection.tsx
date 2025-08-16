const VideoSection = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-black">
      {/* CHANGED: These new styles force the iframe to scale up and cover the entire area,
        preventing any black bars (letterboxing).
      */}
      <iframe
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&autoplay=1&mute=1&loop=1&playlist=E1czmX6bjFA&controls=0&showinfo=0&autohide=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoSection;