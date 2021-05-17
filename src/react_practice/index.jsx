import React,{Component} from "react";
import RepeatMount from './repeatMount';
import "./repeatMount.css";
class RepeatMountIndex extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    let {count}=this.state;
    return <div className="flex">
      <RepeatMount count={count}/>
      <button onClick={()=>{
        count++
        this.setState({count});
      }}>点赞</button>
    </div>
  }
}
export default RepeatMountIndex;