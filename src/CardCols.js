import React from 'react';
import BSCardAccord from './global-components/BSCardAccord'
import ArraytoHtml from './global-components/ArrayToHtml'


class CardCols extends React.Component {

    render() {
        const menuData = this.props.menuData ? this.props.menuData : null;

        return menuData ?
            this.props.cols.map((item, idx) => {
                let mappedFood = menuData[idx].menu_items.map((innerItem, innerIdx) => {
                    return {
                        title: <span>{innerItem.description} <i><b>${innerItem.price}</b></i></span>,
                        atts:{
                            className: 'list-group-item'
                        }
                    }
                })
                
                return (
                    
                    <div key={idx} className='col-lg'>
                        
                        <BSCardAccord title={item.title}>
                            <ul className='list-group list-group-flush'>
                                <ArraytoHtml tag='li' content={mappedFood}>

                                </ArraytoHtml>
                            </ul>
                        </BSCardAccord>
                    </div>

                );
            })
            :
            null;
    }
}

export default CardCols;