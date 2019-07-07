import React,{Component} from 'react';

import ContextChild2 from './context-child-2';

class ContextChild1 extends Component {
  render(){
    return(
      <div>
        <h1> Context Api child  component -1 </h1>
          <ContextChild2 />
      </div>
    )
  }
}
export default ContextChild1;
