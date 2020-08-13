import React, { Component } from "react";
import * as pandaImage from "./assets/panda.jpg.jpg";
import "./Whoweare.scss";

// keep you config out of your components
// this can be in its own fiile
const collectiveConfig = [
  {
    // image with a target url
    photo:
      "https://mappingaction.files.wordpress.com/2019/12/sachi_headshot-e1575161201903.jpg?w=300&h=278",
    bioName: "Sachi Arakawa",
    text:
      " is a GIS analyst and urban geographer. She works at the intersection of data analytics and community mobilization. Her background is in community geography, where she has worked to build partnerships between community groups and researchers/data analysts in the Portland Metro area. She is interested finding ways to make GIS tools and data more accessible to everyday people. Sachi has lived in Portland for 18 years and currently resides in SE Portland with too many cats.",
  },

  {
    photo: pandaImage, // local image
    bioName: "Tim Hitchins",
    text:
      " is a GIS developer with an obsession for interactive mapping, data analytics and everything in between. Since his early 20s, Tim has participated in various grassroots social justice, environmental and animal liberation causes. These days Tim spends his time working with community partners on projects that bridge the gap between analytics and activism. Tim graduated with an MS in Geography from Portland State University and is currently a GIS instructor at Portland Community College.",
  },
];

class Whoweare extends Component {
  render() {
    return (
      <nav className="nav-outer-container">
        <div>
          {collectiveConfig.map((item) => (
            <div>
              <img
                src={item.photo}
                alt="An image of a collective member."
              ></img>
              {/* To make a list do this below*/}
              {/*<ul>
                  <li>{item.bioName}</li>
                  <li>{item.text}</li>
                </ul> 
                */}
              {/* To make it seemless do this below*/}
              <div>
                {item.bioName}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </nav>
    );
  }
}

export default Whoweare;
