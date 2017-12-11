import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './App.css';
import * as firebase from 'firebase';

class Content extends Component {

    
    constructor() {
        super();
        this.state = { currentImage: 0, photos: [] };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);

        this.getPictures = this.getPictures.bind(this);

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCJ1kMDSlMiGFSvIzWatnhKTuv598Dmk3I",
            authDomain: "pi-dvr.firebaseapp.com",
            databaseURL: "https://pi-dvr.firebaseio.com",
            projectId: "pi-dvr",
            storageBucket: "pi-dvr.appspot.com",
            messagingSenderId: "980532845939"
        };
        firebase.initializeApp(config);
    }

    getPictures() {
        
        var database = firebase.database().ref().child('images');

        database.on('value', snapshot => {

            var PHOTO_LIST = [];

            snapshot.forEach((snap) => {

                PHOTO_LIST.push({
                    src: snap.val(),
                    width: 1,
                    height: 1
                });
            });
  
            this.setState({
                photos : PHOTO_LIST
            });
        });
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

    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }

    getInitialState() {
        return {elapsed: 0};
    }

    componentDidMount(){
        this.getPictures();
    }

    render() {
    
        return (
            <div >
                {/* <div> */}
                    <div className='video'>
                        <iframe src='http://10.0.0.70:8081/' width={320} height={240} name="iframe" />
                    </div>
                    <div className='content'>
                        <div>
                        <Gallery 
                            photos={this.state.photos}
                            onClick={this.openLightbox}
                            columns={6} 
                        />
                        <Lightbox images={this.state.photos}
                            showThumbnails={true}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                            onClickThumbnail={this.gotoImage}
                            backdropClosesModal={true}
                        />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
export default Content;