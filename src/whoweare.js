import React, { Component } from "react";
//import tom from "./Img/panda.jpg.jpg";
import * as tom from "./Img/panda.jpg.jpg";
import "./whoweare.scss";
class Whoweare extends Component {
  render() {

    const collective = [{
      photo: {tom}, bioName:'Sachi Arakawa',text: ' is a GIS analyst and urban geographer. She works at the intersection of data analytics and community mobilization. Her background is in community geography, where she has worked to build partnerships between community groups and researchers/data analysts in the Portland Metro area. She is interested finding ways to make GIS tools and data more accessible to everyday people. Sachi has lived in Portland for 18 years and currently resides in SE Portland with too many cats.'
    }

    ,{
      photo: {tom}, bioName:'Tim Hitchins', text:' is a GIS developer with an obsession for interactive mapping, data analytics and everything in between. Since his early 20s, Tim has participated in various grassroots social justice, environmental and animal liberation causes. These days Tim spends his time working with community partners on projects that bridge the gap between analytics and activism. Tim graduated with an MS in Geography from Portland State University and is currently a GIS instructor at Portland Community College.'
    }

    ];
    const stars = collective.map((tweet) => collective.stars)
   
    return (
      <nav className="nav-outer-container">
        <h1>
          Hello,{this.props.first} {this.props.last}
        </h1>
        <div></div>
        <div>
         <collective>
          <ul id= "collective">
           {collective.map((tweet) =>(
             <ul>
               {tweet.photo}
               {tweet.bioName}
               {tweet.text}
             </ul>
           ))} 
          </ul> 
         </collective> 
        </div>
      </nav>
    );
  }
}

export default Whoweare;
/*
class Biopic extends Component{
  render(){ return(

        <img src={tom} />
    )
  }
}
class Lable extends Component{
  render(){
    return(
         <h1>
          Hello,{this.props.first} {this.props.last}
        </h1>
    )
  }
}
class Bio extends Component{
  render(){
    return(
         <h1>
          Hello,{this.props.first} {this.props.last}
        </h1>
    )
  }
}
class Badge extends Component{
  render(){
    return(
      <div>
        <Biopic img={this.props.user.img}/>
        <Lable name={this.props.user.name}/>
        <Bio info={this.props.user.info}/>
      </div>
    )
  }
}
*/
