import React, { forwardRef } from 'react';
import { Container, } from './style.js';

export const Input = forwardRef(({
  width,
  height,
  size,
  padding,
  margin,
  bc,
  borderBoT,
  radius,
  value,
  placeholder,
  onchange,
  scale,
  shadowOff,
  type,
  inputType,
  disabled,
  weight,
  maxlength=999999999,
  defaultValue,
  align,
  border,
  error,
  name,
  defaultChecked,
//    ---------
  mwidth,
  mheight,
  msize,
  mpadding,
  mmargin,
  mborderBoT,
  mradius,
  mvalue,
  mplaceholder,
  monchange,
  mscale,
  mshadowOff,
  mtype,
  minputType,
  mdisabled,
  mweight,
  mmaxlength = 999999999,
  mdefaultValue,
  minwidth,
  malign,
  mborder,
  merror

}, ref) => {
  return <Container
    weight={weight}
    mwidth={mwidth}
    disabled={disabled}
    mheight={mheight}
    width={width}
    msize={msize}
    height={height}
    mpadding={mpadding}
    size={size}
    mmargin={mmargin}
    padding={padding}
    margin={margin}
    mborderBoT={mborderBoT}
    bc={bc}
    mradius={mradius}
    borderBoT={borderBoT}
    radius={radius}
    scale={scale}
    onChange={onchange}
    mscale={mscale}
    placeholder={placeholder}
    mshadowOff={mshadowOff}
    value={value}
    mtype={mtype}
    shadowOff={shadowOff}
    inputType={inputType}
   type={type}
   mweight={mweight}
   maxLength={maxlength}
    defaultValue={defaultValue}
    minwidth={minwidth}
    align={align}
    malign={malign}
    border={border}
    mborder={mborder}
    error={error}
    merror={merror}
    name={name}
    defaultChecked={defaultChecked}

  />
})
export default Input;

