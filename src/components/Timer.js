const Timer = (props) => {
  return (
    <div className="timer">
      <div className="hour">{props.time.hour}</div>:
      <div className="min">{props.time.minute}</div>:
      <div className="sec">{props.time.second}</div>:
      <div className="msec">{props.time.millisecond}</div>
    </div>
  );
};

export default Timer;
