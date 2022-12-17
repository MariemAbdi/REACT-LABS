import React from 'react';
import Alert from '../Alert/Alert';
import { createUseStyles } from 'react-jss';

//import './CartSuccess.css';


//object styling
    /*const styles = {
        header: {
          width: '100%'
        },
        item: {
          marginRight: 20
        },
        wrapper: {
          borderTop: 'black solid 1px',
          display: 'flex',
          flexWrap: 'wrap'
        }
      }*/

      //jss styling
      const useStyles = createUseStyles({
        item: {},
        wrapper: {
          borderTop: 'black solid 1px',
          display: 'flex',
          flexWrap: 'wrap',
          '& h2': {
            width: '100%'
          },
          '& $item': {
            marginRight: 20
          }
        }
      })

//showing added to the cart message
export default function CartSuccess() {

    const classes = useStyles();
    return(

    <Alert title="Added to Cart" type="success">
      <div //className="cart-success-wrapper" css styling
      //style={styles.wrapper} object styling
      className={classes.wrapper}// jss styling
      >
          <h2 //style={styles.header} object styling
          >
            You have added 3 items:
          </h2>
          <div //className="item" css styling
          //style={styles.item} object styling
          className={classes.item}// jss styling
          >
            <div>Bananas</div>
            <div>Quantity: 2</div>
          </div>
          <div //className="item" css styling
          //style={styles.item} object styling
          className={classes.item}// jss styling
          >
            <div>Lettuce</div>
            <div>Quantity: 1</div>
          </div>
      </div>
    </Alert>
  )
}