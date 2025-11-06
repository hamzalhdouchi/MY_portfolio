export const TestBackground = () => {
  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #000 0%, #0a4b5e 50%, #4a1a5e 100%)',
      }}
    />
  );
};
