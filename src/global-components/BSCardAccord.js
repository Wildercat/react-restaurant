import React from 'react';



class BSCardAccord extends React.Component {

    render() {
        return (
            <div className='accordion' id={`accord${this.props.title}`}>
                <div className="card">
                    <div className="card-header" id={`heading${this.props.title}`}>
                        <h4 className='mb-0 text-center'>
                            <button className='btn' type='button' data-toggle='collapse' data-target={`#collapse${this.props.title}`} aria-expanded="false" aria-controls={`collapse${this.props.title}`}>
                                <span className='display-4'>{this.props.title}</span> <p className='text-secondary font-weight-light'>Click to Collapse/Expand</p>
                            </button>
                        </h4>
                    </div>
                    <div id={`collapse${this.props.title}`} className='collapse show' aria-labelledby={`heading${this.props.title}`} data-parent={`#accord${this.props.title}`}>
                        <div className="card-body">
                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BSCardAccord;