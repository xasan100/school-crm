import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;

.inFormBackground {
  margin: 0rem 2rem;
}
.inFormBackground,
.inLoginForm {
  width: 25rem;
  height: 30rem;
  max-width: 320px;
  position: relative;
}
.circle {
  width: 10rem;
  height: 10rem;
  position: absolute;
  border-radius: 50%;
}
.circle:first-child {
  left: -20%;
  top: -12%;
  background: #00FFF5;
}
.circle:nth-child(2) {
  right: -22%;
  bottom: -14%;
background: linear-gradient(265deg, rgba(34,195,189,1) 0%, rgba(45,110,253,1) 100%); 
}
.inLoginForm   {
  top: 50%;
  left: 50%;
  width: 94rem;
  height: 24rem;
  max-width: 320px;
  position: absolute;
  padding: 50px 35px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.13);
}
.form * {
  border: none;
  outline: none;
  color: #ffffff;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
}
.title {
  font-size: 32px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
}
.inputGroup label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
.inputGroup input {
  width: 100%;
  height: 50px;
  display: block;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.07);
}
::placeholder {
  color: #e5e5e5;
}
.submitForm {
  width: 100%;
  z-index: 1;
  margin-top: 30px;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  background: #fff;
}
.submitForm::before {
  content: "";
  top: 0%;
  left: -100%;
  z-index: -1;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  transition: left 0.4s, color 0.4s;
  background-color: #1877f2;
}
.submitForm:hover {
  color: #fff;
}
.submitForm:hover::before {
  left: 0%;
}
.social {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.social div {
  width: 3rem;
  height: 3rem;
  display: flex;
  cursor: pointer;
  color: #eaf0fb;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.27);
}
.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.social .fb {
  margin-left: 25px;
}
.social .tw {
  margin-left: 25px;
}

`


export default Container