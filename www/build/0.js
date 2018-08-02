webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageModule", function() { return PlaylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaylistPageModule = /** @class */ (function () {
    function PlaylistPageModule() {
    }
    PlaylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */]),
            ],
        })
    ], PlaylistPageModule);
    return PlaylistPageModule;
}());

//# sourceMappingURL=playlist.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_yt_yt__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistPage = /** @class */ (function () {
    function PlaylistPage(navParams, ytProvider, youtube, plt) {
        this.navParams = navParams;
        this.ytProvider = ytProvider;
        this.youtube = youtube;
        this.plt = plt;
        var listId = this.navParams.get('id');
        this.videos = this.ytProvider.getListVideos(listId);
    }
    PlaylistPage.prototype.openVideo = function (video) {
        if (this.plt.is('cordova')) {
            this.youtube.openVideo(video.snippet.resourceId.videoId);
        }
        else {
            window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
        }
    };
    PlaylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-playlist',template:/*ion-inline-start:"/Users/tennesseeg/passionproject/MyOTApp5.0/src/pages/playlist/playlist.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Playlist</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let video of videos | async" (click)="openVideo(video)" detail-none>\n      <ion-thumbnail item-start>\n      <img [src]="video.snippet.thumbnails.standard.url">\n    </ion-thumbnail>\n    <h2>{{ video.snippet.title }}</h2>\n    \n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tennesseeg/passionproject/MyOTApp5.0/src/pages/playlist/playlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_yt_yt__["a" /* YtProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
    ], PlaylistPage);
    return PlaylistPage;
}());

//# sourceMappingURL=playlist.js.map

/***/ })

});
//# sourceMappingURL=0.js.map