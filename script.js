@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,900');

body{
  margin: 0;
  padding: 0;
  background-color: #FEFFFF;
  font-family: 'Raleway', sans-serif;
}

*::selection{
  outline: none;
}

/*MENU*/
.nav{
  text-align: right;
  height: 70px;
  line-height: 70px;
  position: relative;
  z-index: 999;
}

.menu{
  margin: 0 30px 0 0;
}

.menu a{
  clear: right;
  text-decoration: none;
  color: #FEFFFF;
  margin: 0 10px;
  line-height: 70px;
  letter-spacing: .9px;
  text-transform: uppercase;
  transition: all 250ms ease;
}

@keyframes strike{
  0%   { width : 0; }
  100% { width: 100%; }
}

.strike {
  position: relative;
}

.strike:hover:after {
  content: ' ';
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 2px;
  background: #FEFFFF;
  animation-name: strike;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

.menu h5{
  margin: 0 30px;
  text-transform: uppercase;
  float: left;
  font-weight: 300;
  font-size: 25px;
  letter-spacing: 2px;
  position: relative;
  z-index: 999;
  color: #FEFFFF;
}

label{
  margin: 0 20px 0 0;
  font-size: 26px;
  line-height: 70px;
  display: none;
  width: 26px;
  float: right;
  color: #354757;
}

#toggle{
  display: none;
}

.fixed{
  background-color: #FEFFFF;
}

.photo{
  width: 100%;
  height: 700px;
  position: relative;
  background: url('https://unsplash.it/1200?image=883') center;
  background-size: cover;
  overflow: hidden;
}

.photo-text{
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 200vh;
  top: 0;
  left: 0;
  background: rgba(60, 63, 114, .6);
}

.photo h4{
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #FEFFFF;
  margin: 10px;
  cursor: pointer;
  position: relative;
  z-index: 998;
}

.photo p{
  width: 60%;
  text-align: center;
  letter-spacing: 1.5px;
  color: #D7DADE;
  position: relative;
  z-index: 998;
}

.content{
  width: 100%;
  min-height: 800px;
  position: relative;
  z-index: 1;
}

.content:before{
  content: '';
  width: 50%;
  height: 110px;
  position: absolute;
  top: -48px;
  left: 0;
  background-color: #FEFFFF;
  transform: skewY(5.5deg);/*8*/
}

.content:after{
  content: '';
  width: 50%;
  height: 110px;
  position: absolute;
  top: -48px;
  right: 0;
  background-color: #FEFFFF;
  transform: skewY(-5.5deg);/*8*/
}

.grand-title{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  width: 60%;
  min-height: 100px;
  padding: 0;
  margin: 0 auto;
}

.grand-title h4{
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 30px;
  color: #354757;
}

.grand-title h4:after{
  content: '';
  display: block; 
  width: 5%;
  height: 3px;
  margin: 25px auto;
  border: 0;
  background: #E58859;
}

.text{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -10px;
  position: relative;
  z-index: 999;
}

.inner-text{
   display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 20px;
  width: 300px;
  margin: 10px 0 10px 0;
  transition: all 450ms ease;
}

.inner-text:hover{
  cursor: pointer;
  box-shadow: -1px 6.5px 15px rgba(208, 211, 214, 0.75);
}

.ic{
  font-size: 35px;
  color: #EBA675;
  transition: all 250ms ease;
}

.ic:hover{
 opacity: .7;
}

.inner-text h3{
  color: #299FFF;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.2px;
}

.inner-text h5{
  color: #6D85A8;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.inner-text p{
  color: #6D85A8;
}

.inner-content{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
}

.boxy:nth-child(1){
  width: 50%;
  min-height: 600px;
  background: url('http://img.fenixzone.net/i/dxmDY9u.png') bottom no-repeat;
  background-size: cover;
  position: relative;
  z-index: 999;
}

.boxy:nth-child(2){
  width: 50%;
  min-height: 600px;
  display: flex;
  align-items: center;
}

#slider{
  overflow: hidden;
  margin-left: -20px;
}

#slider figure ul li{
  width: 20%;
  float: left;
  list-style: none;
  text-align: center;
}

ul li img{
  border-radius: 50%;
  padding: 10px;
}

ul li h4{
  color: #354757;
  font-weight: 300;
  font-size: 25px;
}

ul li p{
  font-size: 20px;
  width: 80%;
  margin: 0 auto;
  color: #6D85A8;
}

#slider figure{
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  animation-name: slider;
    animation-duration: 25s;
    animation-timing-function: linear;
    animation-delay: -10s;
    animation-iteration-count: infinite;
   /*animation-direction: alternate;*/
}

/*Portafolio*/
.portafolio{
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: -35px;
  margin-bottom: 40px;
}

.portafolio h4{
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  color: #354757;
  letter-spacing: 1.2px;
}

.portafolio h4:after{
  content: '';
  display: block; 
  width: 3%;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #E58859;
}

.portafolio-container{
  display: flex;
  justify-content: space-between;
}

.portafolio-item{
  width: 30%;
  position: relative;
  overflow: hidden;
  border-radius: .20em;
}

.portafolio-item img{
  width: 100%;
}

.portafolio-text{
  position: absolute;
  bottom: 0;
  padding: 10px;
  background: rgba(254, 255, 255, .8);
  color: #FDFDFD;
  transform: translateY(100%);
  transition: all 450ms ease;
}

.portafolio-text h5{
  color: #299FFF;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0;
}

.portafolio-text p{
  text-align: justify;
  color: #6D85A8;
}

.portafolio-item:hover .portafolio-text{
  transform: translateY(0);
}

.portafolio-img{
  transition: all 450ms ease;
}

.portafolio-item:hover .portafolio-img{
  transform: rotate(-5deg) scale(1.15);
}

/*FOOTER*/
.footer{
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
}

.footer h4{
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 30px;
  color: #354757;
}

.footer h4:after{
  content: '';
  display: block; 
  width: 25%;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #E58859;
}

.container{
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.container *{
  box-sizing: border-box;
}

.flex-outer,
.flex-inner{
  list-style-type: none;
  padding: 0;
}

.flex-outer{
  max-width: 800px;
  margin: 0 auto;
}

.flex-outer li,
.flex-inner{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-inner{
  padding: 0 8px;
  justify-content: space-between;  
}

.flex-outer > li:not(:last-child){
  margin-bottom: 20px;
}

.flex-outer li label{
  padding: 8px;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.flex-outer > li > label{
  flex: 1 0 120px;
  max-width: 220px;
}

.flex-outer > li > label + *,
.flex-inner{
  flex: 1 0 220px;
}

.flex-outer li input:not([type='checkbox']),
.flex-outer li textarea{
  padding: 15px;
  resize: none;
}

.flex-outer li button{
  background: 0 0 #FEFFFF;
  border: 1px solid #6D85A8;
  border-radius: 3px;
  color: #6D85A8;
  font-size: 16px;
  line-height: inherit;
  margin: 30px 0;
  padding: 10px 50px;
  text-transform: uppercase;
  transition: all 0.25s ease 0s;
}

.flex-outer li button:hover,
.flex-outer li button:active,
.flex-outer li button:focus {
	border-color: #299FFF;
	color: #299FFF;
}

.flex-inner li{
  width: 100px;
}

.rect{
	border-color: #6D85A8;
  border-width: 0 0 1px 0;
  border-style: none none solid none;
  box-shadow: none;
}

.rect:focus{
	box-shadow: none;
	border-color: #60A9F1;
  outline: none;
}

.center{
  display: flex;
  justify-content: flex-end;
}

.flex-outer li ::placeholder{
  font-size: 12px;
  color: #6D85A8;
  text-transform: uppercase;
  font-weight: 400;
}

.flex-outer li ::-webkit-input-placeholder{
  font-size: 12px;
  color: #6D85A8;
  text-transform: uppercase;
  font-weight: 400;
}

.flex-outer li ::-moz-placeholder{
  font-size: 12px;
  color: #6D85A8;
  text-transform: uppercase;
  font-weight: 400;
}

.flex-outer li ::-ms-input-placeholder{
  font-size: 12px;
  color: #6D85A8;
  text-transform: uppercase;
  font-weight: 400;
}

.flex-outer li ::-moz-placeholder{
  font-size: 12px;
  color: #6D85A8;
  text-transform: uppercase;
  font-weight: 400;
}

input{
  font-family: 'Raleway', sans-serif;
}

@media screen and (max-width: 950px){
  .portafolio-container{
    flex-flow: column wrap;
    align-items: center;
  }
  
  .portafolio-item{width: 80%; margin-top: 10px;}
}

@media screen and (max-width: 950px){
  .photo p{width: 90%;}
  .grand-title{width: 90%;}
  .text{flex-direction: column;}
  .inner-content{flex-flow: column wrap;}
  .boxy:nth-child(1),.boxy:nth-child(2){width: 90%;}/*GENERA PROBLEMA*/
  .boxy:nth-child(1){padding: 10px;}
  #slider{margin-left: -55px;}
}

@media only screen and (max-width: 600px){
  label{
    display: block;
    cursor: pointer;
  }
  .menu{
    text-align: center;
    width: 100%;
    display: none;
  }
  .menu a{
    display: block;
    border-bottom: 1px solid #EAEAEB;
    margin: 0;
    color: #6D85A8;
  }
  #toggle:checked + .menu{display: block; background-color: #FEFFFF;}
}

@media screen and (max-width: 500px){
  #slider{margin-left: -55px;}
  .photo-text h4{font-size: 45px;}
  .inner-text{width: 80%;}
  
}

@keyframes slider{
  0%{left: 0; opacity: 0;}
  20%{left: 0; opacity: 1;}
  25%{left: -100%; opacity: .8;}
  45%{left: -100%; opacity: .8;}
  50%{left: -200%; opacity: .7;}
  70%{left: -200%; opacity: .7;}
  75%{left: -300%; opacity: .6;}
  95%{left: -400%; opacity: .6;}
  100%{left: -400%; opacity: 1;}
}