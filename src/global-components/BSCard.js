import React from 'react';



class BSCard extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    {this.props.children}

                </div>
            </div>
        );
    }
}

export default BSCard;