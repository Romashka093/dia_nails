import React, { Component } from 'react';
import { Gallery } from '../components/Gallery/Gallery';

class GalleryPage extends Component {
  state = {
    photos: [],
  };

  render() {
    return (
      <div>
        <Gallery />
      </div>
    );
  }
}

export default GalleryPage;
