import React, { Component } from 'react';
import ImageTile from '../../components/ImageTile.jsx';
import Image1 from '../../images/headerImg.png'

class ImageTiles extends Component {
    render() {
        return (
          <section className="columns section has-text-dark has-background-white is-constrained">
            <div class='column is-6'>
              <ImageTile image={Image1} title="Cool! "/>
              <ImageTile image={Image1} title="Cool! "/>
            </div>
            <div className='column is-6'>
              <ImageTile image={Image1} title="Cool! "/>
              <ImageTile image={Image1} title="Cool! "/>
            </div>
          </section>
        )
    }
}
export default ImageTiles;
