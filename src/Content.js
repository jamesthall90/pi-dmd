import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './App.css';
import * as firebase from 'firebase';

class Content extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);

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

    render() {
        var database = firebase.database().ref().child('images');
        var PHOTO_SET = [];


        database.on('child_added', function(data) {

        // database.on('value', snap => {
        //     var values = Object.values(snap.val());

            // for (var val in values) {
                PHOTO_SET.push({
                    src: data.val(),
                    width: 1,
                    height: 1
                });
            }
        );

    // console.log(PHOTO_SET);
    return (
        <div >
            {/* <p> Heres our App </p> */}
            <div>
                <div>
                    <iframe src='http://nobody.better-than.tv:8081' width={320} height={240} name="iframe" />
                </div>
                <div className='content'>
                    <p className='imageTitle'> Heres the photo gallery </p>
                    <Gallery photos={PHOTO_SET}
                    onClick={this.openLightbox}
                    columns={6} />
                    <Lightbox images={PHOTO_SET}
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
            </div>
        </div>
        );
    }
}
export default Content;