import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="dashboard-footer">
      <span>2025 © HUNG HIEU DUC</span>
      <span>
        <a href="/admin/about">About</a> &nbsp; <a href="/admin/contact">Contact</a> &nbsp; <a href="#">Purchase</a>
      </span>
    </footer>
  );
};

export  {Footer};