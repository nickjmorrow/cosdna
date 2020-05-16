import * as React from 'react';
import { Input } from '~/core/Input';
import { useDispatch } from 'react-redux';
import { productsActions } from '~/products/products.actions';
import { Button } from '~/core/Button';

export const CreateProduct: React.FC = () => {
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();
    const handleClick = () => dispatch(productsActions.createProduct.request({ name }));
    return (
        <div>
            Create Product
            <Input value={name} onChange={e => setName(e.currentTarget.value)} />
            <Button onClick={handleClick}>Create Product</Button>
        </div>
    );
};
