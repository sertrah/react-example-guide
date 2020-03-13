import React, { Component } from 'react';
import { ThemeContext } from '../../../utils/theme-context';

import './button.css';


class CustomBtn extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
            <a className="btn-gradient red mini">Button</a>
            </React.Fragment>

        );
    }

}
CustomBtn.contextType = ThemeContext;
export default CustomBtn;