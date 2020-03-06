import React, { useContext } from 'react';
import { Button, NumberInput, Select, SelectItem, DatePicker, DatePickerInput} from 'carbon-components-react';
import { CartContext } from '../../contexts/cart/CartContext';

export default function ProductChartItem() {
  const { cartProducts, dispatch } = useContext(CartContext);

  const numberInputProps = {
    className: 'some-class',
    id: 'number-input-1',
    label: 'Quantity',
    light: true,
    min: 1,
    max: 100,
    value: 0,
    step: 1,
  };

  const patterns = {
    'Short (d{1,2}/d{4})': '\\d{1,2}/\\d{4}',
    'Regular (d{1,2}/d{1,2}/d{4})': '\\d{1,2}/\\d{1,2}/\\d{4}',
  };

  const props = {
    select: () => ({
      className: 'some-class',
      disabled: true,
      labelText: 'Size',
    }),
    datePicker: () => ({
      id: 'date-picker',
      light: true,
      onChange: ()=>{},
      onClose: ()=>{},
    }),
    datePickerInput: () => ({
      id: 'date-picker-input-id',
      className: 'some-class',
      labelText: 'Desired due date',
      pattern: patterns,
      placeholder: 'mm/dd/yyyy',
      onClick: ()=>{},
      onChange: ()=>{},
    }),
  };

  return cartProducts.map(product => (
    <>
      <div className="bx--row cart-page___product-item" key={product.id}>
        <div className="bx--col-lg-4 page__product-image">
            <img src={product.images[0].url} />
        </div>
        <div className="bx--col-lg-12">
          <div className="bx--row">
            <p>{product.name}</p>
            <Button
              className="page__remove-product-btn"
              iconDescription="Remove product"
              kind="ghost"
              onClick={()=> dispatch({type: 'REMOVE_PRODUCT', id: product.id}) }
              size="small"
              tabIndex={0}
              type="button"
            >
              Remove
            </Button>
          </div>
          <div className="bx--row product__info">
            <Select {...props.select()} id="selectSize" defaultValue="placeholder-item">>
              <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text="N/A"
                size="sm"
              />
            </Select>
            <NumberInput {...numberInputProps} />
            <DatePicker
              {...props.datePicker()}
              datePickerType="single"
              dateFormat='m/d/Y'>
              <DatePickerInput {...props.datePickerInput()} />
            </DatePicker>
          </div>
        </div>
      </div>
      <hr/>
    </>
  ));
};