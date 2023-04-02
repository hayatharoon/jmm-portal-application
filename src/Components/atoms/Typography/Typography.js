import React from 'react';

const Typography = ({
  priority,
  tag = 'p',
  htmlFor,
  children,
  customStyle,
  className,
  textDecoration,
  size,
  weight,
  color,
  opacity,
  align,
  shadow,
  border,
  ...props
}) => {
  let CustomTag = priority ? `h${priority}` : tag;
  return (
    <CustomTag
      htmlFor={htmlFor}
      className={className}
      style={{
        fontSize: `${size}rem`,
        opacity: opacity || 1,
        textShadow: shadow || '',
        border: border || '',
        textAlign: align || 'center',
        color: color || '#000',
        ...props.styles,
      }}>
      {children}
    </CustomTag>
  );
};

export default Typography;
