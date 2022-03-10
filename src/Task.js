import { useEffect, useState } from "react";

export default function Task(props) {
  // set some state about whether its loaded
  const [loaded, setLoaded] = useState(false);
  // this runs the first time this Message is rendered
  useEffect(async () => {
    await sleep(10);
    setLoaded(true);
  }, []);

  let transform = "translateX(0)";
  if (!loaded) transform = "translateX(22rem)";

  return (
    <div
      className="task-row"
      style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}
    >
      <div className="task" style={{ transform }}>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}