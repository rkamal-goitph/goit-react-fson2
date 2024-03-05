// Menu.js
import React from 'react';
import PropTypes from 'prop-types';
import css from './Menu.module.css'; // Assume some basic styling for the Menu component

class Menu extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={css.menuContainer}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node, // 'node' covers anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
};

export default Menu;
