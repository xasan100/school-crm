import styled from "styled-components"

const Container = styled.button`
  @media only screen and (min-width: 1000px) {
    width: ${({ width }) => width ? `${width}px` : '100%'};
    height: ${({ height }) => height ? `${height}px` : '53px'};
    background: ${({ bc }) => bc ? bc : '#111111'};
    font-size: ${({ size }) => size ? `${size}` : '34px'};
    padding: ${({ padding }) => padding ? `${padding}` : '0px'};
    margin: ${({ margin }) => margin ? `${margin}` : '0px'};
    border-radius: ${({ radius }) => radius ? `${radius}px` : '74px'};
    box-shadow: ${({ shadow }) => shadow ? `${shadow}` : '0px 4px 17px rgba(0, 0, 0, 0.25);'};
    text-transform: ${({uppercase})=> uppercase && 'uppercase'};
    font-style: normal;
    font-weight: ${({weight})=> weight ? weight : '700'} !important;
    line-height: 39px;
    display: flex;
    align-items: center;
    justify-content: ${({justify})=> justify ? justify : 'center'};
    cursor: pointer;
    color: ${({color})=> color ? color : '#fff'};
    border: none;
    transition: .2s;
    font-weight: unset;
    position: ${({position})=> position && position};
    white-space: nowrap;
    cursor: ${({cursor})=> cursor ? cursor : 'pointer'};
    :active{
      transform: scale(1.1);
    }
    :hover{
      letter-spacing: 1.2px;
    }
  }


  @media only screen and (max-width: 1000px) {
    max-width: ${({ mwidth }) => mwidth ? `${mwidth}` : '100%'};
    width: ${({ mwidth }) => mwidth ? `${mwidth}` : '100%'};
    height: ${({ mheight }) => mheight ? `${mheight}` : '80px'};
    background: ${({ bc }) => bc ? bc : '#00868D'};
    font-size: ${({ msize }) => msize ? `${msize}` : '34px'};
    padding: ${({ mpadding }) => mpadding ? `${mpadding}` : '0px'};
    margin: ${({ mmargin }) => mmargin ? `${mmargin}` : '0px'};
    border-radius: ${({ mradius }) => mradius ? `${mradius}` : '74px'};
    box-shadow: ${({ shadow }) => shadow ? `${shadow}` : '0px 4px 17px rgba(0, 0, 0, 0.25);'};
    text-transform: ${({uppercase})=> uppercase && 'uppercase'};
    font-style: normal;
    font-weight: ${({mweight})=> mweight ? mweight : '700'} !important;
    line-height: ${({mline})=> mline ? mline : '39px'};
    display: flex;
    align-items: center;
    justify-content: ${({mjustify})=> mjustify ? mjustify : 'center'};
    cursor: pointer;
    color: ${({color})=> color ? color : '#fff'};
    border: none;
    transition: .2s;
    font-weight: unset;
    transition: .2s;
    cursor: ${({mcursor})=> mcursor ? mcursor : 'pointer'};
    position: ${({position})=> position && position};
    white-space: ${({wrap})=> wrap && 'nowrap'};
    
    
    :active{
      transform: scale(1.1);
    }
    :hover{
    }
  }

`


export default Container