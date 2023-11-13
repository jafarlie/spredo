const Spinner = () => {
  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "5px solid #f3f3f3", // Light grey
    borderTop: "5px solid #3498db", // Blue
    borderRadius: "50%",
    animation: "spin 2s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Spinner;
