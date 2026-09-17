import React from 'react';

const SectionTitle = ({ title, subtitle, align = "start" }) => {
  return (
    <div className={`text-${align} mb-5`}>
      <h2 
        className={`fw-bold mb-3 position-relative pb-3 ${align === "center" ? "d-inline-block" : ""}`}
        style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}
      >
        {title}
        <span 
          className={`position-absolute bottom-0 ${align === "center" ? "start-50 translate-middle-x" : "start-0"} rounded`} 
          style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6' }}
        ></span>
      </h2>
      {subtitle && (
        <p 
          className={`mb-0 ${align === "center" ? "mx-auto" : ""}`} 
          style={{ maxWidth: align === "center" ? '600px' : '100%', color: '#94a3b8' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;