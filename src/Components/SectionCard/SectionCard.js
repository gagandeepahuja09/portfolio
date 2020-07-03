import React, { Component } from 'react';

class SectionCard extends Component {
    render() { 
        return (
            <div>
                { this.props.title }
            </div>
        );
    }
}

export default SectionCard;