import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className='row p-3' style={{
                height: '40em',
                backgroundImage: `url(${this.props.imgURL})`,
                backgroundSize: 'cover'
            }}>
            {this.props.children}    
            </div>
        );
    }
}
 
export default Splash;