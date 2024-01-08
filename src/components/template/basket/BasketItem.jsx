import Button from '@mui/material/Button';

const BasketItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>
                <Button variant="outlined" size="small" onClick={() => props.decrement(props.id)}>-</Button>
                {' '}<strong>{props.quantity}</strong>{' '}
                <Button variant="outlined" size="small" onClick={() => props.increment(props.id)}>+</Button>
            </td>
            <td>{props.price}</td>
            <td>{props.price * props.quantity}</td>
            <td>
                <Button variant="text" onClick={() => props.remove(props.id)}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
}

export default BasketItem;