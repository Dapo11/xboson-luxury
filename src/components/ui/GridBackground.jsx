const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#F5F5F0"
              strokeWidth="0.5"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Fade bottom edge */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, #0A0A0A 100%)",
        }}
      />
    </div>
  );
};

export default GridBackground;
