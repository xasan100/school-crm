import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { PiChartLineUp, PiStudent } from "react-icons/pi";

const SiteContext = createContext();

export function Context({ children }) {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Analiytics",
      link: "/analiytics",
      icon: <PiChartLineUp />,
    },
    {
      id: 2,
      title: "O'quvchilar",
      link: "/students-report",
      icon: <PiStudent />,
    },
  ]);
  return (
    <SiteContext.Provider value={{ links, setLinks }}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteContext;
