/* importing react and the component method */
import React, { Component } from "react";
/* importing the connect package from react -redux
 */
import { connect } from "react-redux";
import "./app.css";
/* importing components */
import Header from "../../components/header/header.js";
import Cardlist from "../../components/cardlist/Cardlist.js";
import Searchbox from "../../components/searchbox/Searchbox.js";
import Scroll from "../../components/scroll/Scroll.js";
import ErrorBoundries from "../../components/errorBoundries/ErrorBoundries.js";
/*importing actions for redux state management */
import { setSetSearchfield, requestRobots } from "../Actions/actions.js";

/* function that defines and determines the state 
within this file imported from the original state.
This will be passed into the connect module from 
react-redux and will be exported before the app.
*/
const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchfield,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => {
      dispatch(setSetSearchfield(e.target.value));
    },
    displayRobots: () => {
      requestRobots(dispatch);
    },
  };
};

/* react class component */

class App extends Component {
  /* react life cycle method that gets activated when the 
page is fully rendered and then re renders the page with
data provided within the lifecycle */
  componentDidMount() {
    this.props.displayRobots();
  }

  /* react life cycle method render() which defines 
 what gets displayed to the user */
  render(props) {
    /* Using obeject destructuring on this.props to make 
it easier to use */
    const { onSearchChange, searchfield, robots, error } = this.props;

    /* caching after looping through the data which will define 
what data will be rendered */

    const filtRobo = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    /* conditional statement which defines what willbe rendered */
    if (!robots) {
      return <h1>{`loading`}</h1>;
    } else {
      return (
        <div className={`tc`}>
          {/* tradional react component */}
          <Header />
          {/* tradional react component with props passed*/}
          <Searchbox searchfield={searchfield} onChange={onSearchChange} />
          <Scroll>
            {/* tradional react component that can wrap around 
   other components */}
            <ErrorBoundries error={error}>
              <Cardlist robots={filtRobo} />
            </ErrorBoundries>
          </Scroll>
        </div>
      );
    }
  }
}

/* exporting the data from the connect redux functions
so it can be used within other files within the app.
Also exporting the App componentso it can be used within 
other file.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
