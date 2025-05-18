import React from "react";
import Widgets from "./widgets";

interface ContentProps {
  selectedMenu: string;
}

const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
  if (selectedMenu === "Danh Thu") {
    return <div>Danh Thu Content</div>;
  }

  return (
    <section className="dashboard-content">
      <Widgets />
    </section>
  );
};

export default Content;