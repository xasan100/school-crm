import Container from './style.js'

export const Button = ({
  children,
  uppercase,
  width,
  mwidth,
  height,
  mheight,
  bc,
  size,
  msize,
  padding,
  mpadding,
  onclick,
  margin,
  mmargin,
  radius,
  mradius,
  shadow,
  weight,
  mweight,
  color,
  disabled,
  justify,
  mjustify,
 position,
 mline,
 wrap,
 mhover,
    cursor,
    mcursor
}) => {
  return (
    <Container
      mhover={mhover}
      mline={mline}
      wrap={wrap}
      uppercase={uppercase}
      width={width}
      height={height}
      bc={bc}
      size={size}
      padding={padding}
      margin={margin}
      onClick={onclick}
      radius={radius}
      shadow={shadow}
      weight={weight}
      color={color}
      disabled={disabled}
      justify={justify}
      position={position}
      mwidth={mwidth}
      mheight={mheight}
      msize={msize}
      mpadding={mpadding}
      mmargin={mmargin}
      mradius={mradius}
      mweight={mweight}
      mjustify={mjustify}
      cursor={cursor}
      mcursor={mcursor}
      
    >
      {children || 'generic Button'}
    </Container>
  )
}

export default Button
