import React, { Component } from 'react';

class ImageTile extends React.Component{
  render(){
    const style = {
      backgroundImage: "url("+this.props.image+")",
      backgroundSize: "100% 100%"
    }
    return(
      <div className='image is-1by1' style={style}>{this.props.title}</div>
    )
  }
}

export default ImageTile;
