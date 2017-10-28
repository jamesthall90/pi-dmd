import React, { Component } from 'react';
import VideoPlayer from 'react-player';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }


    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

  render() {

      const PHOTO_SET = [
          {src: 'https://cannador.com/images/uploads/article-images/weed-storage-jars-on-wood.jpg', width:1, height:1},
          {src: 'https://i.pinimg.com/736x/bb/7b/8a/bb7b8a49562a780874a4dc41809df265--girl-scout-cookies-mary-mary.jpg', width:1, height:1},
          {src: 'https://pbs.twimg.com/media/Cp1w3DjVIAAZ6Re.jpg', width:1, height:1},
          {src: 'https://pbs.twimg.com/profile_images/586651176868909057/BxrDxXC9.jpg', width:1, height:1},
          {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUqWwEQKXBsM8e5HxfGhKem4LbzaOpzfxihLxJSV8BwtQFQO2LA', width:1, height:1},
          {src: 'https://i.pinimg.com/736x/e2/8b/4d/e28b4d1bda8af8e55432aab04f8bdf7d--marijuana-plants-medical-marijuana.jpg', width:1, height:1}
      ];
    return (
        <div>
            <p> Heres our App </p>
            <div>
                <VideoPlayer url='https://www.youtube.com/watch?v=Eyc_XPnITOg' width={800} hieght={400} />
                <p> Heres the photo gallery  </p>
                <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
                <Lightbox images={PHOTO_SET}
                          showThumbnails={true}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>

        </div>
    );
  }
}

export default App;
