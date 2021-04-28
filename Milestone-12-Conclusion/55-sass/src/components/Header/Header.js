import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div>
            This is header
            <div className="first-box">
                <h2>first box</h2>
            </div>
            <div className="second-box">
                <h2>second box</h2>
            </div>
            <div className="third-box">
                <h2>third box</h2>
            </div>
            <div className="fourth-box">
                <h2>fourth box</h2>
            </div>
        </div>
    );
};

export default Header;