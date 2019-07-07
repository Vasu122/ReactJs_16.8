import React, {Component} from 'react';

class JobPage extends Component{
  render (){
    return(
      <div>
          There are lots of job in front end field
          <br/>
          <ul>
            {
              this.props.jobList.map((data,index) => {
                return(
                  <List data={data} dataKey={index}/>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

  class List  extends Component{
      render(){
        return (
          <li key={this.props.dataKey}> {this.props.data} </li>
        )
      }
  }
export default JobPage;
