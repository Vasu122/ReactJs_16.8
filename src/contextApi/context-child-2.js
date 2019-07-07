import React,{Component} from 'react';
import {MyContext} from './context-api-parent';

class ContextChild2 extends Component {
  render(){
    return(
      <div>
        <h1> Context Api child  component -2 </h1>
        <MyContext.Consumer>

          { ({data, handleClickBtn}) =>(
            <div>
              <h4>{data.name} and created date is {data.createddate} and vlue is = {data.value}</h4>}
              <button type="button" onClick={handleClickBtn}> Change Value </button>
              <h3> End context child 2 component </h3>
              <hr />
           </div>
          )}

        </MyContext.Consumer>

      </div>
    )
  }
}
export default ContextChild2;
