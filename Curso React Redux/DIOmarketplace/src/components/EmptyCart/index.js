import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import {Container, EmptyCartContainer, EmptyCartText} from './styles';
import EmptyCartAnimation from '../../assets/animations/emptyCartAnimation.json';
export default function EmpityCart() {
    return (
        <Container>
            <EmptyCartContainer>
                <LottieView
                    source={EmptyCartAnimation}
                    resizeMode="contain"
                    autoPlay
                    loop
                />
            </EmptyCartContainer>
            <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </Container>
    );
}
