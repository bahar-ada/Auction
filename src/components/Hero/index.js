import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>بهترین حراجی های کشور</HeroH1>
                    <HeroP> خریدهای خود را با بهترین قیمت، در کمترین زمان ممکن انجام دهید</HeroP>
                    <HeroBtn>ورود</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
