import styled from 'styled-components';



const Container = styled.input`
border: none;
  @media only screen and (min-width: 1000px) {
    min-width: 124.72px;
    width: ${({ width }) => (width ? `${width}` : '100%')};
    height: ${({ height }) => (height ? `${height}` : '62px')};
    font-size: ${({ size }) => (size ? `${size}` : '32px')};
    padding: ${({ padding }) => (padding ? `${padding}` : '23px 34px ')};
    margin: ${({ margin }) => (margin ? `${margin}` : '0px')};
    background: ${({ bc }) => bc ? bc : '#111111'};
    border-bottom: ${({borderBoT})=> borderBoT ? borderBoT : '0px'};
    border-radius: ${({ radius }) => (radius ? `${radius}` : '15px')};
    border: ${({border})=> border && border};
    outline: none;
    box-shadow: ${({shadowOff})=> shadowOff ? shadowOff : '0px 4px 17px rgba(0, 0, 0, 0.25)'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${({weight})=> weight ? weight : '400'};
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    transition: .2s ;
    text-align: ${({align})=> align && align};
    :active{font-weight: ${({ scale }) => (scale ? `${scale}` : '600')}}
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    border: ${({error})=> error && '3px solid red'};
    box-shadow: ${({error})=> error && '0 0 5px 3px red'};
  }

  @media only screen and (max-width: 1000px) {
    /* min-width: 124.72px; */
    min-width: ${({ minwidth }) => (minwidth ? `${minwidth}` : '100%')};
    width: ${({ mwidth }) => (mwidth ? `${mwidth}` : '100%')};
    height: ${({ mheight }) => mheight ? mheight : '80px'};
    font-size: ${({ msize }) => (msize ? `${msize}` : '32px')};
    padding: ${({ mpadding }) => (mpadding ? `${mpadding}` : '23px 34px ')};
    margin: ${({ mmargin }) => (mmargin ? `${mmargin}` : '0px')};
    background: ${({ bc }) => bc ? bc : '#45a358'};
    border-bottom: ${({mborderBoT})=> mborderBoT ? mborderBoT : '0px'};
    border-radius: ${({ mradius }) => (mradius ? `${mradius}` : '15px')};
    border: ${({mborder})=> mborder && mborder};
    outline: none;
    box-shadow: ${({mshadowOff})=> mshadowOff ? '' : '0px 4px 17px rgba(0, 0, 0, 0.25)'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${({mweight})=> mweight ? mweight : '400'};
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    transition: .2s ;
    text-align: ${({malign})=> malign && malign};
    :active{font-weight: ${({ scale }) => (scale ? `${scale}` : '600')}}
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    border: ${({merror})=> merror && '3px solid red'};
    box-shadow: ${({merror})=> merror && '0 0 5px 3px red'};
  }
`;

  


export { Container}