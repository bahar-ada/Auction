import React, { useState } from "react";
import Navbar from "../Navbar";
import Snackbar from "../Snackbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import { Container } from "../Snackbar";
import {createApi, readApi} from '../FetchSign';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('https://reqres.in/api/products/3');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  readApi({url: url}).then(res=>{
      if (res && res.data){
          console.log(res.data)
      }

  }).catch(error=>{console.error(error)})

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>بهترین حراجی های کشور</HeroH1>
          <HeroP>
            {" "}
            خریدهای خود را با بهترین قیمت، در کمترین زمان ممکن انجام دهید
          </HeroP>
          <HeroBtn >ورود</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
