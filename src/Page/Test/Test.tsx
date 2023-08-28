import { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  console.log("value: ", value);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Test;
