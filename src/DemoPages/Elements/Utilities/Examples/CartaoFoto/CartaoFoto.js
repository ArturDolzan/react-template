import React from 'react'
import {Col} from 'reactstrap'

const CartaoFoto = (props) => {

    return (
        <Col md="3">
            <div className="demo-image-bg"
                    style={{
                        backgroundImage: ' url(data:image/png;base64,' + props.dados.url + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
            />
            {props.dados.name}            
        </Col>
    )

}

export default CartaoFoto