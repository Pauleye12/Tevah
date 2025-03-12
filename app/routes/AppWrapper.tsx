import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import Donate from "~/components/PopUps/Donate";

const AppWrapper = () => {
  const [donate, setDonate] = useState(false);
  return (
    <>
      <Navbar setDonate={setDonate} />
      <Outlet context={{ setDonate }} />
      {donate && <Donate setDonate={setDonate} />}
    </>
  );
};

export default AppWrapper;
