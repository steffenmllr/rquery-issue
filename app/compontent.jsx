'use strict';

import React from 'react';

var JwReminder = React.createClass({
    getInitialState: function() {

        return {
            open: false
        };
    },

    toggle: function(e) {
        if (e) {
            e.preventDefault();
        }

        this.setState({
            open: !this.state.open
        });

    },
    // Renders the timer dropdown
    renderDropdown: function() {
        if (this.state.open) {
            return (
                <div className="open dropdown--arrow-right menu__dropdown dropdown--big">
                    <div className="dropdown__body">
                    </div>
                </div>
            );
        }
    },
    render: function() {
        return (
            <div>
                <a href="#" onClick={this.toggle}></a>
                {this.renderDropdown()}
            </div>
        );
    }
});

module.exports = JwReminder;
