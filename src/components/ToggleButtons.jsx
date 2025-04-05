function ToggleButtons({ showFiction, setShowFiction, showNonFiction, setShowNonFiction, showChildren, setShowChildren }) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowFiction(!showFiction)}>
          {showFiction ? 'Hide Fiction' : 'Show Fiction'}
        </button>
        <button onClick={() => setShowNonFiction(!showNonFiction)} style={{ marginLeft: '10px' }}>
          {showNonFiction ? 'Hide Non-Fiction' : 'Show Non-Fiction'}
        </button>
        <button onClick={() => setShowChildren(!showChildren)} style={{ marginLeft: '10px' }}>
          {showChildren ? 'Hide Children' : 'Show Children'}
        </button>
      </div>
    );
  }
  
  export default ToggleButtons;
  