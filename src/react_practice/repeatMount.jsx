import React,{Component} from "react";
import "./repeatMount.css";
class RepeatMount extends Component{
  componentDidMount=()=>{

  }
  componentDidUpdate=()=>{
    
  }
  render(){
    const {count}=this.props;
    return <div className="flex">
      <h1>《React进阶实践指南》</h1>
      <div>点赞👍{count}</div>
    </div>
  }
}
export default RepeatMount;