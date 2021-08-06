import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {FeatherIcon} from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import formatValue from '../../utils/formatValue';
import {
    CartButtonText,
    CartButton,
    CartPricing,
    CartTotalPrice,
    Container,
} from './styles';

export default function FloatingCart() {
    const navigation = useNavigation();
    const products = useSelector(({cart}) => cart);

    const cartSize = useMemo(() => products.length || 0, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce(
            (accumulator, product) =>
                accumulator + product.amount * product.price,
            0,
        );
        return formatValue(cartAmount);
    });
    return (
        <Container>
            {/* <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" /> */}
            <CartButton onPress={() => navigation.navigate('Cart')}>
                <CartButtonText>
                    {cartSize} {cartSize === 1 ? 'item' : 'itens'}
                </CartButtonText>
                <CartPricing>
                    <CartTotalPrice>{cartTotal}</CartTotalPrice>
                </CartPricing>
            </CartButton>
            {/* <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" /> */}
        </Container>
    );
}
