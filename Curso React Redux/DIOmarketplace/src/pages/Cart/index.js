import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import EmptyCart from '../../components/EmptyCart';
import * as CartActions from '../../store/modules/cart/actions';
import {
    Container,
    ActionButton,
    ActionContainer,
    Product,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductSinglePrice,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles';

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(({cart}) => cart);

    const cartSize = useMemo(() => products.length || 0, [products]);
    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce(
            (accumulator, product) =>
                accumulator + product.price * product.amount,
            0,
        );
        return formatValue(cartAmount);
    }, [products]);

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1),
        );
    }
    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1),
        );
    }

    function removeFromCart(id) {
        dispatch(CartActions.removeFromCart(id));
    }

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<EmptyCart />}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{height: 80}}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductSinglePrice>
                                        {formatValue(item.price)}
                                    </ProductSinglePrice>
                                </ProductPriceContainer>

                                <TotalContainer>
                                    <ProductQuantity>{`${item.amount}x`}</ProductQuantity>
                                    <ProductPrice>
                                        {formatValue(item.price * item.amount)}
                                    </ProductPrice>
                                </TotalContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton onPress={() => increment(item)}>
                                    <FeatherIcons
                                        name="plus"
                                        color="#e83f5b"
                                        size={16}
                                    />
                                </ActionButton>
                                <ActionButton
                                    onPress={() =>
                                        item.amount > 1
                                            ? decrement(item)
                                            : removeFromCart(item.id)
                                    }>
                                    <FeatherIcons
                                        name="minus"
                                        color="#e83f5b"
                                        size={16}
                                    />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProductsContainer>
                <FeatherIcons name="shopping-cart" color="#fff" size={24} />
                <TotalProductsText>{cartSize}</TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
}
