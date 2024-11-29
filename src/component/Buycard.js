import React from "react";

const Buycard = ({
  title,
  subtitle,
  description,
  price,
  installment,
  isProduct,
}) => {
  return (
    <div className="flex text-start justify-between text-nowrap flex-nowrap border border-gray-500 rounded-lg py-4 px-2 my-2">
      <div className="flex flex-col gap-2 justify-center ps-2">
        {title && (
          <h4>
            <b>{title}</b>
          </h4>
        )}
        {subtitle && <p>{subtitle}</p>}
        {description && <p>{description}</p>}
        {isProduct && <p className="ps-2">Apple Intelligence </p>}
      </div>
      <div className="text-right">
        <p>
          From &#x24;{price}
          <br />
          or &#x24;{installment}/mo
          <br />
          for 24 mo.*
        </p>
      </div>
    </div>
  );
};

export default Buycard;
