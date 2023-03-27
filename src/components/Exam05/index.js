import { useState } from "react";
import User from "./User";

const Exam05 = () => {
  const [users] = useState();
  return (
    <div>
      <User users={users} />
    </div>
  );
};
export default Exam05;