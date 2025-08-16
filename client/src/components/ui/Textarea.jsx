import React from "react";

const Textarea = React.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;

  return (
    <textarea
      ref={ref}
      className={`flex min-h-[80px] w-full rounded-md  px-3 py-2 text-sm ring-offset-white placeholder-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...rest}
    />
  );
});

Textarea.displayName = "Textarea";

  export { Textarea };
