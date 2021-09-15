import React from 'react';

const Nav = () => {
  return (
    <div class="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">
          &nbsp;
        </span>
      </label>

      <div className="navigation__background">
        &nbsp;
      </div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" class="navigation__link">About Sparrow</a></li>
          <li className="navigation__item"><a href="#" class="navigation__link">Resume</a></li>
          <li className="navigation__item"><a href="#" class="navigation__link">Project</a></li>
          <li className="navigation__item"><a href="#" class="navigation__link">Blog</a></li>
          <li className="navigation__item"><a href="#" class="navigation__link">Social Media</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;