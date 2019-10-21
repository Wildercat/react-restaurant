import React from 'react';
import BSCard from './global-components/BSCard'
import ArraytoHtml from './global-components/ArrayToHtml'


class CardCols extends React.Component {

    render() {
        const menuData = this.props.menuData ? this.props.menuData : null;

        return menuData ?
            this.props.cols.map((item, idx) => {
                let mappedFood = menuData[idx].menu_items.map((innerItem, innerIdx) => {
                    return {
                        title: `${innerItem.description} $${innerItem.price}`,
                        atts:{
                            className: 'list-group-item'
                        }
                    }
                })
                
                return (
                    <div className={`col-lg-${Math.floor(12 / this.props.cols.length)}`}>

                        <BSCard title={item.title}>
                            <ul className='list-group list-group-flush'>
                                <ArraytoHtml tag='li' content={mappedFood}>

                                </ArraytoHtml>
                            </ul>
                        </BSCard>
                    </div>

                );
            })
            :
            null;
    }
}

export default CardCols;