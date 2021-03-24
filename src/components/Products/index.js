import React from 'react';
import {
ProductsContainer,
ProductWrapper,
ProductsHeading,
ProductTitle,
ProductCard,
ProductImg,
ProductInfo,
ProductDesc,
ProductParticipants,
ProductDatetoEnd,
ProductButton
} from './ProductsElements';

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) =>{
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductParticipants> شرکت کنندگان در حراج : {product.participants}</ProductParticipants>
                                <ProductDatetoEnd> روز باقی مانده تا شروع : {product.date}</ProductDatetoEnd>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )


                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
