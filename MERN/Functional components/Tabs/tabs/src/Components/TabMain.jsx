import { useState } from "react";
import TabBtn from "./TabBtn";
import TabList from "./TabList";

function TabMain({ tabData }) {
  // UseState Hook
  const [active, setActive] = useState(true);

  return (
    <div class="wrapper">
      <header>
        Top Web Development Frameworks for 2022 Comparison: All You Need To Know
      </header>

      <TabBtn active={active} setActive={setActive} />

      {tabData.map((data) => (
        <TabList {...data} key={data.id} active={active} />
      ))}
    </div>
  );
}

export default TabMain;
