import React from "react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  className?: string;
  isVisible: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  className,
  isVisible,
  children,
  ...props
}) => {
  return (
    <>
      {isVisible && (
        <div
          {...props}
          id={id}
          className={`absolute flex items-center justify-center h-screen w-screen bg-black bg-opacity-35 ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
