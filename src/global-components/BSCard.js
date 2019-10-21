import React from 'react';



class BSCard extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="card-body">
                    {this.props.children}

                </div>
            </div>
        );
    }
}

export default BSCard;