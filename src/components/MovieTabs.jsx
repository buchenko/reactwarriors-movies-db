import React from "react";
import classNames from 'classnames'
class MovieTabs extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.sort_by !== this.props.sort_by;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => {
      return event => {
        updateSortBy(value);
      };
    };

    const getClassLink = value => {
      return classNames('nav-link',{'active': sort_by === value});
    };

    console.log("MovieTabs render");

    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <div
            className={getClassLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}
          >
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
