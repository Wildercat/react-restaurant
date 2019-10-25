import React from 'react';

class BSNavToggle extends React.Component {
    render() {
        return (
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target={`#${this.props.targetId}`}>
                <span className='navbar-toggler-icon'></span>
            </button>
        );
    }
}

class BSNavList extends React.Component {
    render() {
        const nav_items = this.props.navbar_items.map((item,idx) => {
            return (
                <li key={`li${idx}`}className='nav-item'>
                    <a key={`a${idx}`} className='nav-link' href={item.target}> {item.title} </a>
                </li>
            );
        })
        return (
            <ul className='navbar-nav mr-auto'>
                {nav_items}
            </ul>

        );
    }
}



class BSNav extends React.Component {
    //
    render() {
        
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <BSNavToggle targetId={this.props.navId} />
                <div className='collapse navbar-collapse' id={this.props.navId}>
                    <BSNavList navbar_items={this.props.navbar_items} />
                </div>
            </nav>
        );
    }
}
export default BSNav;