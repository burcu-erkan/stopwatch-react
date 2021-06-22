const Action = ({ handleReset, handleStart, handleStop }) => {
  return (
    <div className="action">
      <button onClick={handleReset} id="reset">
        RESET
      </button>
      <button onClick={handleStart} id="start">
        START
      </button>
      <button onClick={handleStop} id="stop">
        STOP
      </button>
    </div>
  );
};

export default Action;
