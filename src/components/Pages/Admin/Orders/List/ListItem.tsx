import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useMask from 'hooks/useMask';
import { IOrder } from 'interfaces/models/order';
import React, { Fragment, memo } from 'react';

interface IProps {
  order: IOrder;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;
  const { maskedValue: maskedOrderValue } = useMask('money', order.value);
  // const [open, setOpen] = useState(false);

  // const handleCollapse = useCallback(() => {
  //   setOpen(!open);
  // }, [open]);

  console.log('order', order);

  return (
    <Fragment>
      <TableRow>
        <TableCell>{order.id}</TableCell>
        <TableCell>{order.description}</TableCell>
        <TableCell>{order.quantity}</TableCell>
        <TableCell>{maskedOrderValue}</TableCell>
      </TableRow>
    </Fragment>
  );
});

export default ListItem;
