(function () {
    var script = {
        "mouseWheelEnabled": true,
        "layout": "absolute",
        "start": "this.init(); this.playList_9C5AA0C6_8C2A_2D33_41DA_2858F39D1305.set('selectedIndex', 0); this.playList_9C5AD0C6_8C2A_2D33_41C6_D670526DD637.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5,
        "id": "rootPlayer",
        "children": [
            "this.MainViewer",
            "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "this.Container_2BAE4AFB_3F11_A2A7_4183_044B9683AD60",
            "this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "this.veilPopupPanorama",
            "this.zoomImagePopupPanorama",
            "this.closeButtonPopupPanorama"
        ],
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "width": "100%",
        "scrollBarMargin": 2,
        "borderRadius": 0,
        "minHeight": 20,
        "paddingLeft": 0,
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingRight": 0,
        "verticalAlign": "top",
        "minWidth": 20,
        "vrPolyfillScale": 0.5,
        "mobileMipmappingEnabled": false,
        "desktopMipmappingEnabled": false,
        "backgroundPreloadEnabled": true,
        "class": "Player",
        "definitions": [{
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260414_123850_00_093",
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 1109.49,
                    "angle": -44.02,
                    "y": 499.24,
                    "class": "PanoramaMapLocation"
                }
            ],
            "id": "panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC",
            "class": "Panorama",
            "overlays": [
                "this.overlay_1B750619_0199_C110_4171_45CA4E59F848",
                "this.overlay_1ABAABF1_019F_C710_4171_914471E06299",
                "this.overlay_156B8039_045F_97DA_4179_2205DB5CCE83",
                "this.overlay_155ED09C_045E_98DA_4167_2926F581ACA9",
                "this.overlay_2AB632C1_3F17_A2E3_41C7_0DCB8E31B802"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 133.91,
                    "yaw": 137.31,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8"
                },
                {
                    "backwardYaw": 133.91,
                    "yaw": 136.77,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8"
                },
                {
                    "backwardYaw": 9.44,
                    "yaw": -26.44,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A310265_0189_C130_416B_AC54D2B2339F"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_t.jpg",
            "vfov": 180,
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_8195CD24_8C2A_1777_41C0_FD096B27BE25, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_8195CD24_8C2A_1777_41C0_FD096B27BE25, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584VideoPlayer)",
                    "player": "this.viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_8195CD24_8C2A_1777_41C0_FD096B27BE25",
            "class": "PlayList"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -2.15,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_160BBBD0_035E_230E_4188_83261CB51309",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_160BBBD0_035E_230E_4188_83261CB51309_0_1.jpeg",
                        "width": 781,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": -1.69,
            "hideEasing": "cubic_out",
            "hfov": 7.01
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_823201CD_8C2A_2F31_41C9_817E068EDE95",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_8195AD25_8C2A_1771_41D4_84CF60118B9E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_8195AD25_8C2A_1771_41D4_84CF60118B9E, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49DVideoPlayer)",
                    "player": "this.viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49DVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_8195AD25_8C2A_1771_41D4_84CF60118B9E",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A3B0957_0188_4310_4171_529BD4203CE0_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926_0_0.jpg",
                    "width": 3840,
                    "class": "ImageResourceLevel",
                    "height": 2160
                },
                {
                    "url": "media/popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926_0_1.jpg",
                    "width": 2048,
                    "class": "ImageResourceLevel",
                    "height": 1152
                },
                {
                    "url": "media/popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926_0_2.jpg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926_0_3.jpg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_0C8906FA_03B9_985E_4187_FD8475BEFE46",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": -82.16,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82B4B239_8C2A_2D51_41C2_59ADD17A8AE7",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 96.71,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82A09231_8C2A_2D6E_41C6_9A1AC8205586",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 12.21,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_168CD1FF_037A_1EF1_4182_BBDFB953060B",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_168CD1FF_037A_1EF1_4182_BBDFB953060B_0_1.jpeg",
                        "width": 781,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 6.04,
            "hideEasing": "cubic_out",
            "hfov": 6.97
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "height": 4096,
                                "width": 4096,
                                "tags": "ondemand",
                                "rowCount": 8,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260414_123911_00_094",
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 1476.34,
                    "angle": -215.81,
                    "y": 495.36,
                    "class": "PanoramaMapLocation"
                }
            ],
            "id": "panorama_1C1B63E6_0188_C730_416A_E102A28938A8",
            "class": "Panorama",
            "overlays": [
                "this.overlay_1F24D006_0188_40F0_4172_3DC9D2C670B3",
                "this.overlay_0D1ADD2F_03B9_89F6_4180_671C155BAD47"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 137.31,
                    "yaw": 133.91,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38AE77_0189_C110_4171_BE63086A2049"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_t.jpg",
            "vfov": 180,
            "hfovMax": 130
        },
        {
            "levels": [
                {
                    "url": "media/popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452_0_0.jpg",
                    "width": 2160,
                    "class": "ImageResourceLevel",
                    "height": 3840
                },
                {
                    "url": "media/popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452_0_1.jpg",
                    "width": 1152,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452_0_2.jpg",
                    "width": 576,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452_0_3.jpg",
                    "width": 288,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C88C6F8_03B9_985A_4174_C46550139F06",
            "class": "ImageResource"
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9C5A60C6_8C2A_2D33_41C8_643AB03DBD56, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9C5A60C6_8C2A_2D33_41C8_643AB03DBD56, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_9C5A60C6_8C2A_2D33_41C8_643AB03DBD56",
            "class": "PlayList"
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": -83.53,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_0C8676FC_03B9_985A_416B_17D46C431A37",
            "pitch": 5.82,
            "hideEasing": "cubic_out",
            "hfov": 3.96,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'free_drag_and_rotation')",
                    "media": "this.map_3DDC1625_2A24_10E9_41BB_9517D7DADA17",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
                    "class": "MapPlayListItem"
                }
            ],
            "id": "playList_9C5A20C6_8C2A_2D33_41DB_F22AA0A12B6B",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": -46.09,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9D36C145_8C2A_2F31_41C7_42EDEF947104",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -29.09,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_822DD1A1_8C2A_2F6E_41A8_21B6209D9F62",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "viewerArea": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "movementMode": "constrained",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "class": "MapPlayer"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 50.61,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 17.35,
            "hideEasing": "cubic_out",
            "hfov": 8.06
        },
        {
            "initialPosition": {
                "yaw": -1.13,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_8209F1D7_8C2A_2ED1_41D5_4CA1063B01DB",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": 31.95,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_0CEC7634_03BB_BBEA_4166_F7777F6D757D",
            "pitch": 16.34,
            "hideEasing": "cubic_out",
            "hfov": 14.18,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "initialPosition": {
                "yaw": -89.53,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CCED122_8C2A_2F72_41D9_B73A2778257A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "id": "map_0FB80333_02DE_2372_4183_9B067342910B",
            "class": "Map",
            "fieldOfViewOverlayOutsideColor": "#000000",
            "width": 1667,
            "label": "minimap",
            "image": {
                "levels": [
                    {
                        "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B.png",
                        "width": 1667,
                        "class": "ImageResourceLevel",
                        "height": 2000
                    },
                    {
                        "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_lq.png",
                        "width": 233,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 280
                    }
                ],
                "class": "ImageResource"
            },
            "minimumZoomFactor": 0.5,
            "overlays": [
                "this.overlay_0F496EF8_02DE_62FF_417C_B578FF2A7005",
                "this.overlay_0F433EF8_02DE_62FF_4185_86A0BE4ADDDC",
                "this.overlay_0F432EF8_02DE_62FF_4181_BB844FEA0155",
                "this.overlay_0F437EF8_02DE_62FF_4179_71A8E15F0C2A",
                "this.overlay_0F435EF8_02DE_62FF_4183_35E398F723C8",
                "this.overlay_0F43BEF8_02DE_62FF_4178_6427F9FD0E60",
                "this.overlay_0F43AEF8_02DE_62FF_4186_06FBB7C7978D",
                "this.overlay_0F438EF8_02DE_62FF_4148_418D5089A658",
                "this.overlay_0F43FEF8_02DE_62FF_4170_53ED8D0B4E8E",
                "this.overlay_0F43EEF8_02DE_62FF_4184_76F99C65A046",
                "this.overlay_0F43DEF8_02DE_62FF_416F_111E878D0272",
                "this.overlay_116D7E97_02FE_2532_4167_F8292A6ED69E",
                "this.overlay_9034E0F8_8BFD_FEF9_41D4_4D851395BD2C",
                "this.overlay_9034D0F8_8BFD_FEF9_41A9_4E51557967A3"
            ],
            "thumbnailUrl": "media/map_0FB80333_02DE_2372_4183_9B067342910B_t.png",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "fieldOfViewOverlayRadiusScale": 0.16,
            "fieldOfViewOverlayOutsideOpacity": 0,
            "initialZoomFactor": 2,
            "scaleMode": "fit_inside",
            "maximumZoomFactor": 3,
            "height": 2000
        },
        {
            "levels": [
                {
                    "url": "media/popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4_0_0.jpg",
                    "width": 3840,
                    "class": "ImageResourceLevel",
                    "height": 2160
                },
                {
                    "url": "media/popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4_0_1.jpg",
                    "width": 2048,
                    "class": "ImageResourceLevel",
                    "height": 1152
                },
                {
                    "url": "media/popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4_0_2.jpg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4_0_3.jpg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2AA8300F_3F12_9D60_4188_FFD8EB9E584A",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/zoomImage_90CB1247_8BFE_1D17_41D0_D627B268FC41_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_90CB1247_8BFE_1D17_41D0_D627B268FC41_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_90CB1247_8BFE_1D17_41D0_D627B268FC41_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ],
            "id": "ImageResource_943E6A59_8BFA_6D3A_4195_FE6D455603DC",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": -100.67,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_826091FE_8C2A_2ED3_41D8_4A0F9E49DF6C",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -30.6,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_828A5242_8C2A_2D33_4176_7CAA3131673B",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_868B6037_8C2A_2D51_41B1_4DD921A79445",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFD"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window501"
            },
            "titleFontFamily": "Arial"
        },
        {
            "buttonToggleHotspots": "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "viewerArea": "this.MainViewer",
            "mouseControlMode": "drag_acceleration",
            "id": "MainViewerPanoramaPlayer",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "class": "PanoramaPlayer",
            "buttonToggleGyroscope": "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "displayPlaybackBar": true,
            "gyroscopeVerticalDraggingEnabled": true,
            "touchControlMode": "drag_rotation",
            "buttonCardboardView": "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -128.49,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 6.64,
            "hideEasing": "cubic_out",
            "hfov": 6.85
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_868A0037_8C2A_2D51_41D8_B89BB9872A35",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window500"
            },
            "titleFontFamily": "Arial"
        },
        {
            "initialPosition": {
                "yaw": -42.88,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_829E824B_8C2A_2D31_41D8_F9E881E7E22D",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -86.32,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9D18E156_8C2A_2FD3_41DD_1C731B87C9F7",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0.38,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82DBE277_8C2A_2DD1_41AD_84C81CA11C30",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 34.4,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2A17F85E_3F12_6DE1_41B3_1D8C132C7E0B",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2A17F85E_3F12_6DE1_41B3_1D8C132C7E0B_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_2A17F85E_3F12_6DE1_41B3_1D8C132C7E0B_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 18.49,
            "hideEasing": "cubic_out",
            "hfov": 14.45
        },
        {
            "initialPosition": {
                "yaw": 55.34,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_8276F206_8C2A_2D33_41DB_9F127C015F41",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -125.9,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_0C89C6FA_03B9_985E_4189_31509CC1BC9D",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_0C89C6FA_03B9_985E_4189_31509CC1BC9D_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_0C89C6FA_03B9_985E_4189_31509CC1BC9D_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 3.64,
            "hideEasing": "cubic_out",
            "hfov": 8.13
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_8194ED25_8C2A_1771_41D5_108FC7D43EF8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_8194ED25_8C2A_1771_41D5_108FC7D43EF8, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9VideoPlayer)",
                    "player": "this.viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_8194ED25_8C2A_1771_41D5_108FC7D43EF8",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": -169.8,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CF9F118_8C2A_2F5F_41DA_495E2C067DFB",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -150.16,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_824BF20E_8C2A_2D33_41B4_78DEB033153A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_160BBBD0_035E_230E_4188_83261CB51309_0_0.jpeg",
                    "width": 1221,
                    "class": "ImageResourceLevel",
                    "height": 1600
                },
                {
                    "url": "media/popup_160BBBD0_035E_230E_4188_83261CB51309_0_1.jpeg",
                    "width": 781,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_160BBBD0_035E_230E_4188_83261CB51309_0_2.jpeg",
                    "width": 390,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_160BCBD0_035E_230E_4163_BF830F5181B8",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_169B29D7_035A_6F32_4160_89030C356E9A_0_0.jpeg",
                    "width": 1600,
                    "class": "ImageResourceLevel",
                    "height": 1560
                },
                {
                    "url": "media/popup_169B29D7_035A_6F32_4160_89030C356E9A_0_1.jpeg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 998
                },
                {
                    "url": "media/popup_169B29D7_035A_6F32_4160_89030C356E9A_0_2.jpeg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 499
                }
            ],
            "id": "ImageResource_1503A013_035A_1D32_4174_75F4FD0346D9",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 34.56,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CC1712B_8C2A_2F72_41DF_EC0A922451CF",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "viewerArea": "this.MapViewer",
            "movementMode": "constrained",
            "id": "MapViewerMapPlayer",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "class": "MapPlayer"
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_868B8037_8C2A_2D51_41E0_CC0379D1A802",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FD"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window502"
            },
            "titleFontFamily": "Arial"
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": -51.16,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_2911CB0C_3F13_E361_4185_06AA98E25F92",
            "pitch": 19.74,
            "hideEasing": "cubic_out",
            "hfov": 13.91,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_115254_00_011",
            "hfovMin": "150%",
            "id": "panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6",
            "class": "Panorama",
            "overlays": [
                "this.overlay_16BCB8F0_01BB_C12F_415A_C34C42CDD658",
                "this.overlay_16D59560_01B8_4330_4176_B6C35712A2F0",
                "this.overlay_1A4854FD_03D6_26F6_4181_D961EE3720A4"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 118.24,
                    "yaw": -32.68,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E"
                },
                {
                    "backwardYaw": 59.87,
                    "yaw": 29.84,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 125.18,
                    "angle": 88.35,
                    "y": 1881.82,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": 2.08,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_832E8280_8C2A_2D2F_41DB_79A3C8B45754",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 96.42,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82F7E266_8C2A_2DF3_41DC_2D7B20BF4644",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_2AB4AE2D_3F12_65A3_41C8_01D74E6A9B0E",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9C5A00C6_8C2A_2D33_41DE_57C8A947D53F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9C5A00C6_8C2A_2D33_41DE_57C8A947D53F, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_9C5A00C6_8C2A_2D33_41DE_57C8A947D53F",
            "class": "PlayList"
        },
        {
            "levels": [
                {
                    "url": "media/popup_1AB315B8_034A_677E_416C_7E6C57133AF4_0_0.jpg",
                    "width": 3281,
                    "class": "ImageResourceLevel",
                    "height": 1875
                },
                {
                    "url": "media/popup_1AB315B8_034A_677E_416C_7E6C57133AF4_0_1.jpg",
                    "width": 2047,
                    "class": "ImageResourceLevel",
                    "height": 1170
                },
                {
                    "url": "media/popup_1AB315B8_034A_677E_416C_7E6C57133AF4_0_2.jpg",
                    "width": 1023,
                    "class": "ImageResourceLevel",
                    "height": 585
                },
                {
                    "url": "media/popup_1AB315B8_034A_677E_416C_7E6C57133AF4_0_3.jpg",
                    "width": 511,
                    "class": "ImageResourceLevel",
                    "height": 292
                }
            ],
            "id": "ImageResource_1F6F2C94_034A_E536_4189_2A1B463C2E4A",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 78.44,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_1AF791EF_034A_1F12_4178_AC2240695923",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_1AF791EF_034A_1F12_4178_AC2240695923_0_2.jpg",
                        "width": 1023,
                        "class": "ImageResourceLevel",
                        "height": 585
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 17.16,
            "hideEasing": "cubic_out",
            "hfov": 12.4
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -142.05,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 14.33,
            "hideEasing": "cubic_out",
            "hfov": 8.18
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_115208_00_010",
            "hfovMin": "150%",
            "id": "panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B",
            "class": "Panorama",
            "overlays": [
                "this.overlay_158F9E4A_0188_4170_4175_A26920D7B496",
                "this.overlay_15FD4C6A_0188_4130_416C_0E356F6AC274",
                "this.overlay_1186A269_02FA_1D11_4167_D86D7720E102",
                "this.popup_1AB315B8_034A_677E_416C_7E6C57133AF4",
                "this.popup_1AF791EF_034A_1F12_4178_AC2240695923",
                "this.overlay_2991412E_3F13_9FA1_41B4_19B80C4FE64F",
                "this.overlay_2AFF5F0E_3F13_A361_41CD_213FA8AD6A80"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 29.84,
                    "yaw": 59.87,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6"
                },
                {
                    "backwardYaw": 89.34,
                    "yaw": 150.91,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0"
                },
                {
                    "backwardYaw": 6.99,
                    "yaw": -124.66,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 428.09,
                    "angle": -144.14,
                    "y": 1902.7,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "id": "MainViewerVideoPlayer",
            "viewerArea": "this.MainViewer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "thumbnailUrl": "media/video_2AB4AE2D_3F12_65A3_41C8_01D74E6A9B0E_t.jpg",
            "label": "Virtual Reality (1)",
            "scaleMode": "fit_inside",
            "class": "Video",
            "loop": false,
            "id": "video_2AB4AE2D_3F12_65A3_41C8_01D74E6A9B0E",
            "width": 2240,
            "height": 2240,
            "video": {
                "width": 2240,
                "height": 2240,
                "mp4Url": "media/video_2AB4AE2D_3F12_65A3_41C8_01D74E6A9B0E.mp4",
                "class": "VideoResource"
            }
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -70.42,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_17DA680E_0356_2D12_4172_1C397EC042BE",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_17DA680E_0356_2D12_4172_1C397EC042BE_0_1.jpeg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 998
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 7.65,
            "hideEasing": "cubic_out",
            "hfov": 25.38
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "player": "this.MapViewerMapPlayer",
                    "class": "MapPlayListItem"
                }
            ],
            "id": "playList_9C5B10C6_8C2A_2D33_41A5_1CF3CAC9F4E4",
            "class": "PlayList"
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "player": "this.MapViewerMapPlayer",
                    "class": "MapPlayListItem"
                }
            ],
            "id": "playList_9C5AA0C6_8C2A_2D33_41DA_2858F39D1305",
            "class": "PlayList"
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_8688D038_8C2A_2D5F_41C4_FC60E2A9EC5E",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49D"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window503"
            },
            "titleFontFamily": "Arial"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A38AE77_0189_C110_4171_BE63086A2049_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_16C77E39_034A_257E_4174_5F7A568F2A5E_0_0.png",
                    "width": 2121,
                    "class": "ImageResourceLevel",
                    "height": 3000
                },
                {
                    "url": "media/popup_16C77E39_034A_257E_4174_5F7A568F2A5E_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_16C77E39_034A_257E_4174_5F7A568F2A5E_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_16C77E39_034A_257E_4174_5F7A568F2A5E_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_16C77E39_034A_257E_4158_BF62B412C01E",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A310265_0189_C130_416B_AC54D2B2339F_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -157.4,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2AAB8010_3F12_9D61_41C0_E5FC13FD1498",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2AAB8010_3F12_9D61_41C0_E5FC13FD1498_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_2AAB8010_3F12_9D61_41C0_E5FC13FD1498_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 14.33,
            "hideEasing": "cubic_out",
            "hfov": 13.12
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": 92.77,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_277A7905_3F2F_AF60_41C6_48C710204527",
            "pitch": 7.55,
            "hideEasing": "cubic_out",
            "hfov": 3.95,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -38.16,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_1550B851_03D6_6D0E_4186_1652BA1940D3",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_1550B851_03D6_6D0E_4186_1652BA1940D3_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 28.31,
            "hideEasing": "cubic_out",
            "hfov": 7.43
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'free_drag_and_rotation')",
                    "media": "this.map_3DDC1625_2A24_10E9_41BB_9517D7DADA17",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
                    "class": "MapPlayListItem"
                }
            ],
            "id": "playList_9C5AD0C6_8C2A_2D33_41C6_D670526DD637",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 75.36,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_81D1A197_8C2A_2F51_41CF_7D73CB38F078",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -171.44,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 12.93,
            "hideEasing": "cubic_out",
            "hfov": 5.14
        },
        {
            "initialPosition": {
                "yaw": -120.13,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_826B61F3_8C2A_2ED1_41DD_2B117EA9148E",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "thumbnailUrl": "media/video_150CD3E8_0356_631E_4181_C938348D61F8_t.jpg",
            "label": "Laboratorium komputer (2)",
            "scaleMode": "fit_inside",
            "class": "Video",
            "loop": false,
            "id": "video_150CD3E8_0356_631E_4181_C938348D61F8",
            "width": 2964,
            "height": 1694,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_121017_00_020",
            "hfovMin": "150%",
            "id": "panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9",
            "class": "Panorama",
            "overlays": [
                "this.overlay_10785C77_02F6_25F2_4183_AEC0F940B626",
                "this.overlay_16F0ED3F_02FA_2772_4161_EA0B0DE220DE",
                "this.overlay_16BA2777_034A_E3F2_4156_90152416B2F9",
                "this.popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4",
                "this.overlay_2A20A883_3F12_6D67_4196_AE723FDA0847",
                "this.overlay_2A20B884_3F12_6D61_41A0_73D213C95FCC",
                "this.overlay_2A208884_3F12_6D61_41C9_7357BB190E78",
                "this.overlay_2A209884_3F12_6D61_41CC_B89F6A009D88",
                "this.overlay_2A920BEE_3F16_62A1_41BD_808A9EE5A9CC",
                "this.overlay_29659316_3F16_E361_41C7_BBE17360E474",
                "this.popup_2A15785D_3F12_6DE3_41C5_7A28CB9AEE92",
                "this.popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256",
                "this.popup_2A17F85E_3F12_6DE1_41B3_1D8C132C7E0B",
                "this.popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": -83.58,
                    "yaw": -87.07,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": 128.25,
                    "yaw": 87.83,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 424.02,
                    "angle": -85.67,
                    "y": 779.42,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": 133.82,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_822AB1AA_8C2A_2F72_41DF_7A8DDDEF8670",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -90.66,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82424217_8C2A_2D51_41D7_13605972EA6E",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A36831A_0188_4710_4175_617FCB27EF2E_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "duration": 500,
            "id": "FadeInEffect_943E4A59_8BFA_6D3A_41C2_C16BA464FC5E",
            "class": "FadeInEffect",
            "easing": "cubic_in"
        },
        {
            "levels": [
                {
                    "url": "media/popup_1550B851_03D6_6D0E_4186_1652BA1940D3_0_0.jpg",
                    "width": 3840,
                    "class": "ImageResourceLevel",
                    "height": 2160
                },
                {
                    "url": "media/popup_1550B851_03D6_6D0E_4186_1652BA1940D3_0_1.jpg",
                    "width": 2048,
                    "class": "ImageResourceLevel",
                    "height": 1152
                },
                {
                    "url": "media/popup_1550B851_03D6_6D0E_4186_1652BA1940D3_0_2.jpg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_1550B851_03D6_6D0E_4186_1652BA1940D3_0_3.jpg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_1AF37B3B_0356_6372_4181_4F4AD783FE1C",
            "class": "ImageResource"
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": 88.23,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_2A15785D_3F12_6DE3_41C5_7A28CB9AEE92",
            "pitch": 13.32,
            "hideEasing": "cubic_out",
            "hfov": 14.38,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_115112_00_009",
            "hfovMin": "150%",
            "id": "panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482",
            "class": "Panorama",
            "overlays": [
                "this.overlay_1269C01A_0188_C110_416B_9CE9D2825B7B",
                "this.overlay_2291323F_01F9_C110_414E_9800CCAF2A5A"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 79.33,
                    "yaw": 73.47,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": -124.66,
                    "yaw": 6.99,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 732.29,
                    "angle": -81.67,
                    "y": 1892.72,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -116.08,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 4.09,
            "hideEasing": "cubic_out",
            "hfov": 6.35
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 15.93,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 20.49,
            "hideEasing": "cubic_out",
            "hfov": 4.94
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120548_00_018",
            "hfovMin": "150%",
            "id": "panorama_0A38E874_0189_C110_4176_1AE8579BAF0C",
            "class": "Panorama",
            "overlays": [
                "this.overlay_10313703_0198_C0F0_4172_CEEEE6036475",
                "this.overlay_12AE9D95_0188_4310_4171_1C662AE84A9E",
                "this.overlay_150D1E2F_0188_410A_4171_D47A2BCCB0EC",
                "this.overlay_16C66F11_0356_230E_417C_671770291BB2",
                "this.popup_16C77E39_034A_257E_4174_5F7A568F2A5E",
                "this.overlay_2A5DB61B_3F11_E560_41A6_75CA5BA4437B",
                "this.overlay_14D34232_03CA_1D72_4187_82B6DFEAFED0",
                "this.overlay_1404A644_03CA_E516_4181_DDA87B1432AE",
                "this.overlay_14FB11C3_03CD_FF11_4183_21B91E1ED916",
                "this.overlay_1B3198CC_03CE_ED16_4185_2E36C58197EF",
                "this.popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452",
                "this.popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926",
                "this.popup_0C89C6FA_03B9_985E_4189_31509CC1BC9D",
                "this.popup_0C8676FC_03B9_985A_416B_17D46C431A37",
                "this.overlay_2A12EF99_3F17_A363_41C5_7F41A704A5EB",
                "this.overlay_2BE733C9_3F17_A2E3_418F_B40F42DA9632",
                "this.overlay_2ABEB547_3F16_67EF_4198_00ECEB54F31F",
                "this.overlay_2A4299FB_3F16_EEA7_41B2_3A8FF9A54A2D",
                "this.overlay_2BFCA096_3F12_9D61_41C7_CEF63B2727C3"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": -32.68,
                    "yaw": 118.24,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6"
                },
                {
                    "backwardYaw": -83.29,
                    "yaw": 93.68,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0"
                },
                {
                    "backwardYaw": 97.84,
                    "yaw": -180,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6"
                },
                {
                    "backwardYaw": 149.4,
                    "yaw": -128.53,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF"
                },
                {
                    "backwardYaw": 137.12,
                    "yaw": -46.18,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A310265_0189_C130_416B_AC54D2B2339F"
                },
                {
                    "backwardYaw": -87.07,
                    "yaw": -83.58,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9"
                },
                {
                    "backwardYaw": 73.47,
                    "yaw": 79.33,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 426.24,
                    "angle": 92.22,
                    "y": 963.12,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120404_00_016",
            "hfovMin": "150%",
            "id": "panorama_0A3BBBDB_0189_C710_416D_B75CEF238602",
            "class": "Panorama",
            "overlays": [
                "this.overlay_16CBECB2_01B8_4110_4178_9DA131F4319C",
                "this.overlay_166683F9_01B8_4710_4176_AA465CEB464A",
                "this.overlay_19FF206F_01B8_C130_416F_F20112104929",
                "this.overlay_169472B1_0356_3D0E_4188_EA2C84B32AE8",
                "this.popup_151A4A9D_03D6_2D31_4182_5B97AD7D2F02",
                "this.popup_151BCA9D_03D6_2D31_4140_A83DB21329C7",
                "this.popup_151B2A9D_03D6_2D31_4189_59DE99FA2400",
                "this.overlay_293A4B30_3F13_E3A0_41B2_EFDF3B7EB63E",
                "this.overlay_293A5B30_3F13_E3A1_41C0_E5F6E54E9B9A",
                "this.overlay_293ABB30_3F13_E3A1_41B1_E59081E1EAC1",
                "this.overlay_293A8B30_3F13_E3A1_41A2_AFCB8BEABD2C",
                "this.popup_2911CB0C_3F13_E361_4185_06AA98E25F92",
                "this.popup_29132B0D_3F13_E363_41C4_446D76E5985C",
                "this.popup_2913EB0D_3F13_E363_4192_CFFA34EF2479",
                "this.popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 90.47,
                    "yaw": -135.05,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF"
                },
                {
                    "backwardYaw": -145.44,
                    "yaw": 53.83,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A310265_0189_C130_416B_AC54D2B2339F"
                },
                {
                    "backwardYaw": 87.83,
                    "yaw": 128.25,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 437.14,
                    "angle": 45.8,
                    "y": 416.63,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_115712_00_013",
            "hfovMin": "150%",
            "id": "panorama_0A3B0957_0188_4310_4171_529BD4203CE0",
            "class": "Panorama",
            "overlays": [
                "this.overlay_236DF38D_01F8_47F0_4179_54117C548B82",
                "this.overlay_22FA168C_01F8_C1F0_416A_0B88BABC2AB0",
                "this.overlay_215D1B15_01F9_C710_4148_AB61C39FEF69",
                "this.popup_169B29D7_035A_6F32_4160_89030C356E9A",
                "this.popup_1543AE85_037E_6516_415B_C3F001C9EB53",
                "this.popup_168CD1FF_037A_1EF1_4182_BBDFB953060B",
                "this.popup_16FFF462_035A_6512_4182_B5D0BFACB539",
                "this.overlay_1606CBEF_035E_2312_4185_9F22C9D31DBD",
                "this.popup_160BBBD0_035E_230E_4188_83261CB51309",
                "this.overlay_14AAE219_03CA_1D31_4186_EA774407BF17",
                "this.overlay_29D96FAB_3F12_A2A7_41B9_03AF19D93CDD",
                "this.overlay_28137835_3F11_ADA2_41C1_553E676967A3",
                "this.overlay_2A7439D4_3F11_EEE1_4190_F877985C1A66",
                "this.overlay_29712258_3F1E_BDE1_416C_72D70B4B3964",
                "this.overlay_2A5806FB_3F1E_A2A7_41CD_953E0E63B7BE"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": 93.68,
                    "yaw": -83.29,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482"
                },
                {
                    "backwardYaw": -104.64,
                    "yaw": -179.62,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E"
                },
                {
                    "backwardYaw": 150.91,
                    "yaw": 89.34,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 418.48,
                    "angle": 90.86,
                    "y": 1132.78,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": -61.76,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_821651EA_8C2A_2EF3_41CB_F60EF09A3195",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_86174FD6_8C2A_12D3_41B1_95B1C24EEA27",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window480"
            },
            "titleFontFamily": "Arial"
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120306_00_015",
            "hfovMin": "150%",
            "id": "panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF",
            "class": "Panorama",
            "overlays": [
                "this.overlay_14443887_01B8_41F0_4164_3F952146F89C",
                "this.overlay_17DDB1C9_01B8_C371_4176_766D085C344E",
                "this.overlay_168BC68B_03D6_6512_416A_46A637755106",
                "this.popup_15501851_03D6_6D0E_4180_BFF2438BEA53",
                "this.popup_1550B851_03D6_6D0E_4186_1652BA1940D3",
                "this.popup_15508851_03D6_6D0E_4189_EF92784839A4",
                "this.overlay_1B30A82E_03CE_6D12_4187_2F441532F82C",
                "this.popup_0CEC7634_03BB_BBEA_4166_F7777F6D757D",
                "this.overlay_2AB21316_3F1E_A360_41B3_BCB362C05548",
                "this.overlay_295E781F_3F11_AD9F_41C6_73A703B35E9B",
                "this.overlay_2907EBE2_3F12_62A1_41C3_F7B1ED598FF7",
                "this.overlay_29914B95_3F12_A363_41AF_D228430E08F4"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": -128.53,
                    "yaw": 149.4,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": -135.05,
                    "yaw": 90.47,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602"
                },
                {
                    "backwardYaw": 10.2,
                    "yaw": 178.87,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 162.51,
                    "angle": 0,
                    "y": 412.75,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "id": "map_3DDC1625_2A24_10E9_41BB_9517D7DADA17",
            "class": "Map",
            "fieldOfViewOverlayOutsideColor": "#000000",
            "width": 1667,
            "label": "bigmap",
            "image": {
                "levels": [
                    {
                        "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17.png",
                        "width": 1667,
                        "class": "ImageResourceLevel",
                        "height": 2000
                    },
                    {
                        "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_lq.png",
                        "width": 233,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 280
                    }
                ],
                "class": "ImageResource"
            },
            "minimumZoomFactor": 0.5,
            "overlays": [
                "this.overlay_3D0AA09F_2A27_F1D8_41B1_4D440A082F95",
                "this.overlay_3D0AE09F_2A27_F1D8_4196_52C64E03E63B",
                "this.overlay_3D0AF09F_2A27_F1D8_4192_84852342FBF0",
                "this.overlay_3D0B20A0_2A27_F1E8_41B1_8AEF790943FE",
                "this.overlay_3D0B30A0_2A27_F1E8_41B1_AFF8760D72F5",
                "this.overlay_3D0B70A0_2A27_F1E8_41B5_E4AD7430FC2C",
                "this.overlay_3D0B90A0_2A27_F1E8_41B6_6CBC6BAF40CA",
                "this.overlay_3D0BA0A0_2A27_F1E8_41A6_B1F7FE65F80C",
                "this.overlay_3D0BC0A0_2A27_F1E8_41BD_731434AE7DC3",
                "this.overlay_3D0BD0A0_2A27_F1E8_41AD_AD7EE220DD52",
                "this.overlay_3D0BE0A0_2A27_F1E8_41BB_9C71CAC6D0B8",
                "this.overlay_3D0800A0_2A27_F1E8_41C3_DC4CE68A5443",
                "this.overlay_3D0B40A0_2A27_F1E8_41C0_066151552EB2",
                "this.overlay_91324AD2_8BFB_ED0E_41C7_2A775C61640E"
            ],
            "thumbnailUrl": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_t.png",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "fieldOfViewOverlayRadiusScale": 0.3,
            "fieldOfViewOverlayOutsideOpacity": 0,
            "initialZoomFactor": 1,
            "scaleMode": "fit_inside",
            "maximumZoomFactor": 1.2,
            "height": 2000
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -99.32,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_15508851_03D6_6D0E_4189_EF92784839A4",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_15508851_03D6_6D0E_4189_EF92784839A4_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_15508851_03D6_6D0E_4189_EF92784839A4_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 38.13,
            "hideEasing": "cubic_out",
            "hfov": 11.99
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 25.55,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_1543AE85_037E_6516_415B_C3F001C9EB53",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_1543AE85_037E_6516_415B_C3F001C9EB53_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 8.42,
            "hideEasing": "cubic_out",
            "hfov": 6.43
        },
        {
            "levels": [
                {
                    "url": "media/popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4_0_0.png",
                    "width": 2121,
                    "class": "ImageResourceLevel",
                    "height": 3000
                },
                {
                    "url": "media/popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_15306F7E_034A_E3F2_4173_55B31D74DF91",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -146.13,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_15501851_03D6_6D0E_4180_BFF2438BEA53",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_15501851_03D6_6D0E_4180_BFF2438BEA53_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 24.27,
            "hideEasing": "cubic_out",
            "hfov": 4.81
        },
        {
            "levels": [
                {
                    "url": "media/popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB_0_0.jpg",
                    "width": 2160,
                    "class": "ImageResourceLevel",
                    "height": 3840
                },
                {
                    "url": "media/popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB_0_1.jpg",
                    "width": 1152,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB_0_2.jpg",
                    "width": 576,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB_0_3.jpg",
                    "width": 288,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_29127B0E_3F13_E361_41C0_35447789CDD4",
            "class": "ImageResource"
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120854_00_019",
            "hfovMin": "150%",
            "id": "panorama_0A38AE77_0189_C110_4171_BE63086A2049",
            "class": "Panorama",
            "overlays": [
                "this.overlay_1ADB6003_0198_C0F1_4177_CF676DA967D4"
            ],
            "partial": false,
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 1476.34,
                    "angle": 109.16,
                    "y": 155.31,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "initialPosition": {
                "yaw": -173.01,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82566220_8C2A_2D6E_41D9_C93871ABB7B2",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -92.17,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CD42133_8C2A_2F51_41CF_C62A6E41BFE6",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_29132B0D_3F13_E363_41C4_446D76E5985C_0_0.jpg",
                    "width": 3840,
                    "class": "ImageResourceLevel",
                    "height": 2160
                },
                {
                    "url": "media/popup_29132B0D_3F13_E363_41C4_446D76E5985C_0_1.jpg",
                    "width": 2048,
                    "class": "ImageResourceLevel",
                    "height": 1152
                },
                {
                    "url": "media/popup_29132B0D_3F13_E363_41C4_446D76E5985C_0_2.jpg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_29132B0D_3F13_E363_41C4_446D76E5985C_0_3.jpg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_29132B0D_3F13_E363_41CD_753B84771ACC",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -138.64,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 3.44,
            "hideEasing": "cubic_out",
            "hfov": 3.76
        },
        {
            "levels": [
                {
                    "url": "media/popup_1543AE85_037E_6516_415B_C3F001C9EB53_0_0.png",
                    "width": 2121,
                    "class": "ImageResourceLevel",
                    "height": 3000
                },
                {
                    "url": "media/popup_1543AE85_037E_6516_415B_C3F001C9EB53_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_1543AE85_037E_6516_415B_C3F001C9EB53_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_1543AE85_037E_6516_415B_C3F001C9EB53_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_15002013_035A_1D32_4175_BD6AB8067271",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_15501851_03D6_6D0E_4180_BFF2438BEA53_0_0.jpg",
                    "width": 2160,
                    "class": "ImageResourceLevel",
                    "height": 3840
                },
                {
                    "url": "media/popup_15501851_03D6_6D0E_4180_BFF2438BEA53_0_1.jpg",
                    "width": 1152,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_15501851_03D6_6D0E_4180_BFF2438BEA53_0_2.jpg",
                    "width": 576,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_15501851_03D6_6D0E_4180_BFF2438BEA53_0_3.jpg",
                    "width": 288,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0F4EB09A_03B7_B8DE_4189_51E0FB4B3FF4",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_46308A41_5E08_14EB_41C2_995950235495_0_0.jpeg",
                    "width": 1600,
                    "class": "ImageResourceLevel",
                    "height": 1560
                },
                {
                    "url": "media/popup_46308A41_5E08_14EB_41C2_995950235495_0_1.jpeg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 998
                },
                {
                    "url": "media/popup_46308A41_5E08_14EB_41C2_995950235495_0_2.jpeg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 499
                }
            ],
            "id": "ImageResource_4630AA41_5E08_14EB_41CD_1287690973D0",
            "class": "ImageResource"
        },
        {
            "items": [
                "this.PanoramaPlayListItem_9C5900C7_8C2A_2D31_41D2_BB8589D8E358",
                "this.PanoramaPlayListItem_9C5870C8_8C2A_2D3E_41C2_5EE30F515088",
                "this.PanoramaPlayListItem_9C57C0C8_8C2A_2D3E_41C6_E9232B931EEE",
                "this.PanoramaPlayListItem_9C5700C8_8C2A_2D3E_4178_DB42A3C75A91",
                "this.PanoramaPlayListItem_9C5670C8_8C2A_2D3E_41E0_CA48CA3767BB",
                "this.PanoramaPlayListItem_9C55A0C9_8C2A_2D3E_419D_8E926E60904D",
                "this.PanoramaPlayListItem_9C5500C9_8C2A_2D3E_41DB_3981C035A968",
                "this.PanoramaPlayListItem_9C5490C9_8C2A_2D3E_41E0_9F596B622FBC",
                "this.PanoramaPlayListItem_9C5410C9_8C2A_2D3E_41DE_27F78DA15D33",
                "this.PanoramaPlayListItem_9C5340C9_8C2A_2D3E_41DC_4A3492B43766",
                "this.PanoramaPlayListItem_9C5290CA_8C2A_2D32_41C7_321620A9DB6E",
                "this.PanoramaPlayListItem_9C5210CA_8C2A_2D32_41D6_B43BA45F1157",
                "this.PanoramaPlayListItem_9C5160CA_8C2A_2D32_41B9_72826D5AA576",
                "this.PanoramaPlayListItem_9C50C0CA_8C2A_2D32_41D2_A34E2E08F170"
            ],
            "id": "mainPlayList",
            "class": "PlayList"
        },
        {
            "levels": [
                {
                    "url": "media/popup_1AF791EF_034A_1F12_4178_AC2240695923_0_0.jpg",
                    "width": 3281,
                    "class": "ImageResourceLevel",
                    "height": 1875
                },
                {
                    "url": "media/popup_1AF791EF_034A_1F12_4178_AC2240695923_0_1.jpg",
                    "width": 2047,
                    "class": "ImageResourceLevel",
                    "height": 1170
                },
                {
                    "url": "media/popup_1AF791EF_034A_1F12_4178_AC2240695923_0_2.jpg",
                    "width": 1023,
                    "class": "ImageResourceLevel",
                    "height": 585
                },
                {
                    "url": "media/popup_1AF791EF_034A_1F12_4178_AC2240695923_0_3.jpg",
                    "width": 511,
                    "class": "ImageResourceLevel",
                    "height": 292
                }
            ],
            "id": "ImageResource_1F6EFC9B_034A_E532_4160_DB1E9FEC98D9",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 92.93,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_8293B254_8C2A_2DD7_41DE_2BEDD2F72814",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_81948D25_8C2A_1771_41BC_F96616367F26, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_81948D25_8C2A_1771_41BC_F96616367F26, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFDVideoPlayer)",
                    "player": "this.viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFDVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_81948D25_8C2A_1771_41BC_F96616367F26",
            "class": "PlayList"
        },
        {
            "levels": [
                {
                    "url": "media/popup_17DA680E_0356_2D12_4172_1C397EC042BE_0_0.jpeg",
                    "width": 1600,
                    "class": "ImageResourceLevel",
                    "height": 1560
                },
                {
                    "url": "media/popup_17DA680E_0356_2D12_4172_1C397EC042BE_0_1.jpeg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 998
                },
                {
                    "url": "media/popup_17DA680E_0356_2D12_4172_1C397EC042BE_0_2.jpeg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 499
                }
            ],
            "id": "ImageResource_0F40409A_03B7_B8DE_4182_BF302FEE44EE",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": -106.53,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82E5F25D_8C2A_2DD1_41A9_842DEF85DCBA",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": -98.29,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "loop": false,
            "id": "popup_2AA9100D_3F12_9D63_41C1_179E7BA65D3D",
            "pitch": 14.08,
            "hideEasing": "cubic_out",
            "hfov": 11.96,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "levels": [
                {
                    "url": "media/popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08_0_0.jpg",
                    "width": 2160,
                    "class": "ImageResourceLevel",
                    "height": 3840
                },
                {
                    "url": "media/popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08_0_1.jpg",
                    "width": 1152,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08_0_2.jpg",
                    "width": 576,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08_0_3.jpg",
                    "width": 288,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2AABD011_3F12_9D63_41B7_BD3EC2972917",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120436_00_017",
            "hfovMin": "150%",
            "id": "panorama_0A310265_0189_C130_416B_AC54D2B2339F",
            "class": "Panorama",
            "overlays": [
                "this.overlay_1633324B_0189_C170_4174_68C29A920F07",
                "this.overlay_1715F482_0188_41F0_4177_37740C553C22",
                "this.overlay_19BF6657_0188_C110_4175_297B89AFB873",
                "this.overlay_15FD06BC_03DA_E576_4165_3AAC1B8B6FCF",
                "this.popup_0C783E2A_03BB_8BFE_418B_066BA8E31E31",
                "this.overlay_2AA4A034_3F12_9DA1_41CE_6CE6A82F2AB1",
                "this.overlay_2AA4B034_3F12_9DA1_41C6_8FA506CB93E1",
                "this.overlay_2AA4C034_3F12_9DA1_41C7_2AB882E261EA",
                "this.overlay_2AA4E034_3F12_9DA1_414B_B67E51975328",
                "this.popup_2AA9100D_3F12_9D63_41C1_179E7BA65D3D",
                "this.popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4",
                "this.popup_2AAB8010_3F12_9D61_41C0_E5FC13FD1498",
                "this.popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": -46.18,
                    "yaw": 137.12,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": 53.83,
                    "yaw": -145.44,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602"
                },
                {
                    "backwardYaw": -26.44,
                    "yaw": 9.44,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 752.25,
                    "angle": 76.31,
                    "y": 480.02,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "levels": [
                {
                    "url": "media/popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246_0_0.jpg",
                    "width": 2160,
                    "class": "ImageResourceLevel",
                    "height": 3840
                },
                {
                    "url": "media/popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246_0_1.jpg",
                    "width": 1152,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246_0_2.jpg",
                    "width": 576,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246_0_3.jpg",
                    "width": 288,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2A17B85F_3F12_6D9F_41BC_8B9E25B0E84A",
            "class": "ImageResource"
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_120145_00_014",
            "hfovMin": "150%",
            "id": "panorama_0A301F8A_0189_BFF0_4158_8F11989100B6",
            "class": "Panorama",
            "overlays": [
                "this.overlay_126417DF_0188_4F10_4152_9D6F5A964F57",
                "this.overlay_15FADE10_0188_4110_416C_E2530D3282F8",
                "this.overlay_15442460_0188_4130_4154_865548D59C70",
                "this.overlay_28818DC2_3F1F_A6E1_41AB_B69C0E19494C",
                "this.overlay_465E0A86_5E08_1476_4196_4D5D13356765",
                "this.popup_46308A41_5E08_14EB_41C2_995950235495"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "backwardYaw": -180,
                    "yaw": 97.84,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": 178.87,
                    "yaw": 10.2,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF"
                },
                {
                    "backwardYaw": 85.75,
                    "yaw": -177.92,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 123.33,
                    "angle": 7.79,
                    "y": 954.8,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -2.24,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_16FFF462_035A_6512_4182_B5D0BFACB539",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_16FFF462_035A_6512_4182_B5D0BFACB539_0_1.png",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 546
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 5.53,
            "hideEasing": "cubic_out",
            "hfov": 14.6
        },
        {
            "initialPosition": {
                "yaw": -46.09,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9D24D13C_8C2A_2F57_41D9_6711DB92177A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_168CD1FF_037A_1EF1_4182_BBDFB953060B_0_0.jpeg",
                    "width": 1221,
                    "class": "ImageResourceLevel",
                    "height": 1600
                },
                {
                    "url": "media/popup_168CD1FF_037A_1EF1_4182_BBDFB953060B_0_1.jpeg",
                    "width": 781,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_168CD1FF_037A_1EF1_4182_BBDFB953060B_0_2.jpeg",
                    "width": 390,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_1502D013_035A_1D32_4184_BBBCC865CAEA",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -120.14,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_29132B0D_3F13_E363_41C4_446D76E5985C",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_29132B0D_3F13_E363_41C4_446D76E5985C_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 22.64,
            "hideEasing": "cubic_out",
            "hfov": 7.79
        },
        {
            "frames": [
                {
                    "thumbnailUrl": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_t.jpg",
                    "front": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "top": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "right": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "back": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "bottom": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "left": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "height": 2048,
                                "width": 2048,
                                "tags": "ondemand",
                                "rowCount": 4,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "height": 1024,
                                "width": 1024,
                                "tags": "ondemand",
                                "rowCount": 2,
                                "class": "TiledImageResourceLevel"
                            },
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "height": 512,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "rowCount": 1,
                                "class": "TiledImageResourceLevel"
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "class": "CubicPanoramaFrame"
                }
            ],
            "label": "IMG_20260427_115407_00_012",
            "hfovMin": "150%",
            "id": "panorama_0A36831A_0188_4710_4175_617FCB27EF2E",
            "class": "Panorama",
            "overlays": [
                "this.overlay_137A816B_0188_4331_4129_C693AEE36358",
                "this.overlay_12C90115_0188_4310_4143_19CB2FF264FE",
                "this.popup_17DA680E_0356_2D12_4172_1C397EC042BE",
                "this.overlay_1B65A15D_03D6_7F36_4180_50B62BC28A6E",
                "this.overlay_29802E00_3F12_A561_41AF_7C7D2F54AEF0",
                "this.overlay_278E3925_3F2F_AFA3_41C4_9E48B8B0F840",
                "this.overlay_278E2925_3F2F_AFA3_41B5_427677152038",
                "this.popup_277A7905_3F2F_AF60_41C6_48C710204527"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C"
                },
                {
                    "backwardYaw": -179.62,
                    "yaw": -104.64,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0"
                },
                {
                    "backwardYaw": -177.92,
                    "yaw": 85.75,
                    "distance": 1,
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6"
                }
            ],
            "hfov": 360,
            "pitch": 0,
            "thumbnailUrl": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_t.jpg",
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_0FB80333_02DE_2372_4183_9B067342910B",
                    "x": 111.88,
                    "angle": -22.83,
                    "y": 1239.78,
                    "class": "PanoramaMapLocation"
                }
            ],
            "hfovMax": 130
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -147.3,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_2913EB0D_3F13_E363_4192_CFFA34EF2479",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_2913EB0D_3F13_E363_4192_CFFA34EF2479_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_2913EB0D_3F13_E363_4192_CFFA34EF2479_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 23.02,
            "hideEasing": "cubic_out",
            "hfov": 14.03
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_81941D25_8C2A_1771_41AE_C98ED3D43B8D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_81941D25_8C2A_1771_41AE_C98ED3D43B8D, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FDVideoPlayer)",
                    "player": "this.viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FDVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_81941D25_8C2A_1771_41AE_C98ED3D43B8D",
            "class": "PlayList"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 91.75,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_1AB315B8_034A_677E_416C_7E6C57133AF4",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_1AB315B8_034A_677E_416C_7E6C57133AF4_0_2.jpg",
                        "width": 1023,
                        "class": "ImageResourceLevel",
                        "height": 585
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": -3.81,
            "hideEasing": "cubic_out",
            "hfov": 19.46
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -152.54,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_46308A41_5E08_14EB_41C2_995950235495",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_46308A41_5E08_14EB_41C2_995950235495_0_1.jpeg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 998
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 4.15,
            "hideEasing": "cubic_out",
            "hfov": 8.82
        },
        {
            "initialPosition": {
                "yaw": 147.32,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82AC4229_8C2A_2D7E_41DA_7F1FA5693069",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 51.47,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CEE1107_8C2A_2F31_4195_637514CF489A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -170.56,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9D07014E_8C2A_2F33_41DA_41BB75A62F8B",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "duration": 500,
            "id": "FadeOutEffect_943EAA59_8BFA_6D3A_41A0_25FEB0A1362E",
            "class": "FadeOutEffect",
            "easing": "cubic_out"
        },
        {
            "levels": [
                {
                    "url": "media/popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256_0_0.jpg",
                    "width": 3840,
                    "class": "ImageResourceLevel",
                    "height": 2160
                },
                {
                    "url": "media/popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256_0_1.jpg",
                    "width": 2048,
                    "class": "ImageResourceLevel",
                    "height": 1152
                },
                {
                    "url": "media/popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256_0_2.jpg",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256_0_3.jpg",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2A14285D_3F12_6DE3_41C2_4F3DFF819947",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 156.24,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_169B29D7_035A_6F32_4160_89030C356E9A",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_169B29D7_035A_6F32_4160_89030C356E9A_0_1.jpeg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 998
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 3.97,
            "hideEasing": "cubic_out",
            "hfov": 19.52
        },
        {
            "levels": [
                {
                    "url": "media/popup_16FFF462_035A_6512_4182_B5D0BFACB539_0_0.png",
                    "width": 1564,
                    "class": "ImageResourceLevel",
                    "height": 834
                },
                {
                    "url": "media/popup_16FFF462_035A_6512_4182_B5D0BFACB539_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 546
                },
                {
                    "url": "media/popup_16FFF462_035A_6512_4182_B5D0BFACB539_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 273
                }
            ],
            "id": "ImageResource_1504B013_035A_1D32_4188_826C3C9C23FC",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": -126.17,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_822461B2_8C2A_2F52_41DA_BE41C7E212FF",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -51.75,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_82CAC26F_8C2A_2DF1_41D6_9074EFFC4F89",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -42.69,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_823951C4_8C2A_2F37_41DC_D235791EA028",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "closeButtonBorderColor": "#000000",
            "id": "window_8616EFD5_8C2A_12D1_41DB_714C6DBA68E4",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColorDirection": "vertical",
            "closeButtonIconHeight": 20,
            "shadowHorizontalLength": 3,
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBorderSize": 0,
            "minHeight": 20,
            "shadowVerticalLength": 0,
            "modal": true,
            "verticalAlign": "middle",
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "bodyBackgroundColorDirection": "vertical",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "minWidth": 20,
            "bodyBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "closeButtonRollOverBorderSize": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "Window",
            "closeButtonPressedBackgroundOpacity": 0.3,
            "headerPaddingRight": 0,
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "backgroundColorDirection": "vertical",
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "contentOpaque": false,
            "footerHeight": 5,
            "bodyPaddingLeft": 0,
            "headerPaddingLeft": 10,
            "shadow": true,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "scrollBarColor": "#000000",
            "closeButtonPressedIconLineWidth": 5,
            "headerBackgroundOpacity": 0,
            "closeButtonPaddingRight": 5,
            "shadowBlurRadius": 6,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarOpacity": 0.5,
            "closeButtonIconLineWidth": 5,
            "titlePaddingBottom": 5,
            "bodyPaddingTop": 0,
            "titlePaddingTop": 5,
            "children": [
                "this.viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7"
            ],
            "scrollBarVisible": "rollOver",
            "shadowColor": "#000000",
            "closeButtonPaddingLeft": 5,
            "shadowOpacity": 0.5,
            "titleFontSize": "1.29vmin",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "borderRadius": 5,
            "headerPaddingTop": 10,
            "veilColorRatios": [
                0,
                1
            ],
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "closeButtonRollOverIconColor": "#666666",
            "titlePaddingLeft": 5,
            "closeButtonBorderRadius": 0,
            "closeButtonPressedBorderColor": "#000000",
            "paddingLeft": 0,
            "closeButtonBorderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "closeButtonPaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "headerPaddingBottom": 5,
            "backgroundColorRatios": [],
            "footerBackgroundOpacity": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "layout": "vertical",
            "closeButtonPressedIconColor": "#888888",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonIconWidth": 20,
            "veilOpacity": 0.4,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonBackgroundOpacity": 0.3,
            "paddingTop": 0,
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconColor": "#000000",
            "headerVerticalAlign": "middle",
            "paddingBottom": 0,
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "bodyPaddingBottom": 0,
            "shadowSpread": 1,
            "data": {
                "name": "Window479"
            },
            "titleFontFamily": "Arial"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -166.9,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 18.22,
            "hideEasing": "cubic_out",
            "hfov": 5.01
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 53.51,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_16C77E39_034A_257E_4174_5F7A568F2A5E",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_16C77E39_034A_257E_4174_5F7A568F2A5E_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 3.71,
            "hideEasing": "cubic_out",
            "hfov": 4.51
        },
        {
            "initialPosition": {
                "yaw": 44.95,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9CE3410F_8C2A_2F31_41D3_14F30020B889",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -94.25,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_821FD1E1_8C2A_2EEE_41A7_602FF90B0450",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_1C1B63E6_0188_C730_416A_E102A28938A8_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_150CD3E8_0356_631E_4181_C938348D61F8",
                    "start": "this.viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_81974D24_8C2A_1777_41C8_5AA86588553A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_81974D24_8C2A_1777_41C8_5AA86588553A, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7VideoPlayer)",
                    "player": "this.viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_81974D24_8C2A_1777_41C8_5AA86588553A",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 153.56,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "movements": [
                    {
                        "easing": "cubic_in",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "linear",
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    },
                    {
                        "easing": "cubic_out",
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_823E01BB_8C2A_2F51_41D4_5BF8E121B3FB",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "progressBarBorderSize": 0,
            "id": "MainViewer",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "left": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": true,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "borderSize": 0,
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "toolTipBackgroundColor": "#F6F6F6",
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 0,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "fade_out_fade_in",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "top": 0,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 5,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "2vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Main Viewer"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "toolTipFontWeight": "normal",
            "playbackBarBackgroundColorDirection": "vertical",
            "playbackBarHeadWidth": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "backgroundOpacity": 0,
            "width": 115.05,
            "scrollBarVisible": "rollOver",
            "right": "0%",
            "children": [
                "this.Container_B1571269_BF46_B846_41D9_B94D861499DF",
                "this.Container_B1573269_BF46_B846_41AD_E3E55F50C328"
            ],
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "overflow": "scroll",
            "paddingLeft": 0,
            "propagateClick": true,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "top": "0.13%",
            "minWidth": 1,
            "verticalAlign": "top",
            "height": 605.05,
            "class": "Container",
            "paddingTop": 0,
            "gap": 10,
            "paddingBottom": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "--SETTINGS"
            },
            "layout": "absolute"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "backgroundOpacity": 0,
            "children": [
                "this.Label_00A17887_1348_DCC0_41B0_641A5088276D",
                "this.Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D"
            ],
            "scrollBarVisible": "rollOver",
            "left": "0.29%",
            "overflow": "scroll",
            "width": "85%",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "top": "1.2%",
            "minWidth": 350,
            "verticalAlign": "top",
            "scrollBarWidth": 10,
            "borderSize": 0,
            "class": "Container",
            "paddingTop": 0,
            "gap": 10,
            "paddingBottom": 0,
            "height": "8%",
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "Tittle"
            },
            "layout": "absolute"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_2BAE4AFB_3F11_A2A7_4183_044B9683AD60",
            "backgroundOpacity": 0,
            "width": 240,
            "scrollBarVisible": "rollOver",
            "left": "1.61%",
            "overflow": "scroll",
            "children": [
                "this.Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
                "this.Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD"
            ],
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "verticalAlign": "top",
            "bottom": "1.99%",
            "minWidth": 1,
            "height": 190,
            "borderSize": 0,
            "class": "Container",
            "gap": 10,
            "paddingTop": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "Container5882"
            },
            "paddingBottom": 0,
            "layout": "absolute"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "backgroundOpacity": 0.6,
            "children": [
                "this.Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E"
            ],
            "scrollBarVisible": "rollOver",
            "left": "0%",
            "right": "0%",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "creationPolicy": "inAdvance",
            "minHeight": 1,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
            "overflow": "scroll",
            "paddingLeft": 0,
            "propagateClick": true,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "backgroundColorRatios": [
                0,
                1
            ],
            "top": "0%",
            "bottom": "0%",
            "minWidth": 1,
            "verticalAlign": "top",
            "backgroundColor": [
                "#000000",
                "#000000"
            ],
            "borderSize": 0,
            "class": "Container",
            "backgroundColorDirection": "vertical",
            "paddingTop": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "---FLOORPLAN"
            },
            "paddingBottom": 0,
            "visible": false,
            "layout": "absolute",
            "gap": 10
        },
        {
            "id": "veilPopupPanorama",
            "backgroundOpacity": 0.55,
            "left": 0,
            "right": 0,
            "borderRadius": 0,
            "minHeight": 0,
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "backgroundColorRatios": [
                0
            ],
            "top": 0,
            "bottom": 0,
            "minWidth": 0,
            "backgroundColor": [
                "#000000"
            ],
            "borderSize": 0,
            "class": "UIComponent",
            "backgroundColorDirection": "vertical",
            "paddingTop": 0,
            "shadow": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "data": {
                "name": "UIComponent2584"
            },
            "paddingBottom": 0,
            "visible": false
        },
        {
            "id": "zoomImagePopupPanorama",
            "backgroundOpacity": 1,
            "left": 0,
            "right": 0,
            "borderRadius": 0,
            "minHeight": 0,
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "backgroundColorRatios": [],
            "top": 0,
            "bottom": 0,
            "minWidth": 0,
            "backgroundColor": [],
            "borderSize": 0,
            "class": "ZoomImage",
            "backgroundColorDirection": "vertical",
            "paddingTop": 0,
            "shadow": false,
            "scaleMode": "custom",
            "data": {
                "name": "ZoomImage2585"
            },
            "paddingBottom": 0,
            "visible": false
        },
        {
            "textDecoration": "none",
            "layout": "horizontal",
            "fontFamily": "Arial",
            "horizontalAlign": "center",
            "id": "closeButtonPopupPanorama",
            "backgroundOpacity": 0.3,
            "shadowColor": "#000000",
            "right": 10,
            "iconHeight": 20,
            "borderRadius": 0,
            "minHeight": 0,
            "iconColor": "#000000",
            "paddingLeft": 5,
            "propagateClick": false,
            "paddingRight": 5,
            "backgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "top": 10,
            "borderColor": "#000000",
            "rollOverIconColor": "#666666",
            "pressedIconColor": "#888888",
            "minWidth": 0,
            "verticalAlign": "middle",
            "mode": "push",
            "iconBeforeLabel": true,
            "backgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "fontSize": "1.29vmin",
            "class": "CloseButton",
            "paddingTop": 5,
            "backgroundColorDirection": "vertical",
            "label": "",
            "fontStyle": "normal",
            "paddingBottom": 5,
            "borderSize": 0,
            "iconLineWidth": 5,
            "gap": 5,
            "shadow": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "data": {
                "name": "CloseButton2586"
            },
            "iconWidth": 20,
            "visible": false,
            "shadowBlurRadius": 6,
            "shadowSpread": 1,
            "cursor": "hand",
            "fontColor": "#FFFFFF",
            "fontWeight": "normal"
        },
        {
            "maxHeight": 58,
            "horizontalAlign": "center",
            "id": "IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
            "backgroundOpacity": 0,
            "width": 58,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 1,
            "mode": "toggle",
            "height": 58,
            "class": "IconButton",
            "pressedIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed.png",
            "transparencyActive": true,
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081.png",
            "data": {
                "name": "IconButton FULLSCREEN"
            },
            "paddingBottom": 0,
            "pressedRollOverIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed_rollover.png",
            "cursor": "hand",
            "maxWidth": 58
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 137.31,
                    "hfov": 18.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.29
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8, this.camera_9D24D13C_8C2A_2F57_41D9_6711DB92177A); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217EC3D5_0187_C710_4172_725F69557464",
                    "pitch": -27.29,
                    "yaw": 137.31,
                    "hfov": 18.46,
                    "distance": 100
                }
            ],
            "id": "overlay_1B750619_0199_C110_4171_45CA4E59F848",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -26.44,
                    "hfov": 17.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.49
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A310265_0189_C130_416B_AC54D2B2339F, this.camera_9D07014E_8C2A_2F33_41DA_41BB75A62F8B); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217E93D5_0187_C710_4168_7EECAE34388E",
                    "pitch": -32.49,
                    "yaw": -26.44,
                    "hfov": 17.53,
                    "distance": 100
                }
            ],
            "id": "overlay_1ABAABF1_019F_C710_4171_914471E06299",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 9.67,
                    "hfov": 19.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 1.55
                }
            ],
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_324B1850_2A5C_70A7_41BE_9F94059FC9D4",
                    "pitch": 1.55,
                    "yaw": 9.67,
                    "hfov": 19.97,
                    "distance": 100
                }
            ],
            "id": "overlay_156B8039_045F_97DA_4179_2205DB5CCE83",
            "data": {
                "label": "Info Red 07"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 9.97,
                    "hfov": 18.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 1.62
                }
            ],
            "areas": [
                {
                    "toolTip": "Ruang Kepala Laboratorium",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "yaw": 9.97,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50,
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_4_0.png",
                                "width": 612,
                                "class": "ImageResourceLevel",
                                "height": 584
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "pitch": 1.62,
                    "hfov": 18.52
                }
            ],
            "id": "overlay_155ED09C_045E_98DA_4167_2926F581ACA9",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 136.77,
                    "hfov": 29.27,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 2.09
                }
            ],
            "areas": [
                {
                    "toolTip": "Ruang Penyimpanan",
                    "click": "this.startPanoramaWithCamera(this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8, this.camera_9D36C145_8C2A_2F31_41C7_42EDEF947104); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27D91F24_3F13_E3A1_41C8_446305B971BA",
                    "pitch": 2.09,
                    "yaw": 136.77,
                    "hfov": 29.27,
                    "distance": 100
                }
            ],
            "id": "overlay_2AB632C1_3F17_A2E3_41C7_0DCB8E31B802",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "id": "viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584VideoPlayer",
            "viewerArea": "this.viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "id": "viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49DVideoPlayer",
            "viewerArea": "this.viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49D",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -126.36,
                    "hfov": 17.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -33.53
                }
            ],
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_324CE850_2A5C_70A7_419F_221444C6FAB8",
                    "pitch": -33.53,
                    "yaw": -126.36,
                    "hfov": 17.32,
                    "distance": 100
                }
            ],
            "id": "overlay_1F24D006_0188_40F0_4172_3DC9D2C670B3",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 133.91,
                    "hfov": 18.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.1
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC, this.camera_823951C4_8C2A_2F37_41DC_D235791EA028); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_324CA850_2A5C_70A7_41C1_ACAB5A0F80A6",
                    "pitch": -27.1,
                    "yaw": 133.91,
                    "hfov": 18.49,
                    "distance": 100
                }
            ],
            "id": "overlay_0D1ADD2F_03B9_89F6_4180_671C155BAD47",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "horizontalAlign": "center",
            "id": "IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "backgroundOpacity": 0,
            "width": 32,
            "left": "10%",
            "borderRadius": 0,
            "minHeight": 0,
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_rollover.png",
            "propagateClick": false,
            "paddingRight": 0,
            "top": "4.75%",
            "minWidth": 0,
            "verticalAlign": "middle",
            "mode": "push",
            "height": 32,
            "borderSize": 0,
            "class": "IconButton",
            "paddingTop": 0,
            "pressedIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_pressed.png",
            "transparencyActive": true,
            "paddingBottom": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140.png",
            "data": {
                "name": "Button37510"
            },
            "cursor": "hand"
        },
        {
            "progressBarBorderSize": 0,
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 1,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 1,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0.01
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#0066FF",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#FFFFFF",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": 12,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Floor Plan big"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "horizontalAlign": "center",
            "id": "IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "backgroundOpacity": 0,
            "width": 32,
            "left": "12%",
            "borderRadius": 0,
            "minHeight": 0,
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_rollover.png",
            "propagateClick": false,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "bottom": "27.18%",
            "minWidth": 0,
            "mode": "push",
            "height": 32,
            "borderSize": 0,
            "class": "IconButton",
            "pressedIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_pressed.png",
            "transparencyActive": true,
            "paddingTop": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291.png",
            "data": {
                "name": "Button37499"
            },
            "paddingBottom": 0,
            "cursor": "hand"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 397.71,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 929.6
            },
            "image": {
                "x": 397.34,
                "y": 929.42,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_0.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F496EF8_02DE_62FF_417C_B578FF2A7005",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 389.77,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1099.26
            },
            "image": {
                "x": 389.58,
                "y": 1099.07,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_1.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F433EF8_02DE_62FF_4185_86A0BE4ADDDC",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 703.76,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1859.2
            },
            "image": {
                "x": 703.39,
                "y": 1859.02,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_2.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F432EF8_02DE_62FF_4181_BB844FEA0155",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 399.56,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1869.18
            },
            "image": {
                "x": 399.19,
                "y": 1869,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_3.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F437EF8_02DE_62FF_4179_71A8E15F0C2A",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 96.66,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1848.3
            },
            "image": {
                "x": 96.29,
                "y": 1848.12,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_4.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F435EF8_02DE_62FF_4183_35E398F723C8",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 133.99,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 379.23
            },
            "image": {
                "x": 133.62,
                "y": 379.05,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_6.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F43BEF8_02DE_62FF_4178_6427F9FD0E60",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 408.62,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 383.11
            },
            "image": {
                "x": 408.25,
                "y": 382.93,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_7.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F43AEF8_02DE_62FF_4186_06FBB7C7978D",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 723.72,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_8_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 446.5
            },
            "image": {
                "x": 723.35,
                "y": 446.32,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_8.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F438EF8_02DE_62FF_4148_418D5089A658",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1080.96,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_9_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 465.73
            },
            "image": {
                "x": 1080.59,
                "y": 465.54,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_9.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F43FEF8_02DE_62FF_4170_53ED8D0B4E8E",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1447.81,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_10_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 461.84
            },
            "image": {
                "x": 1447.44,
                "y": 461.66,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_10.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F43EEF8_02DE_62FF_4184_76F99C65A046",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1447.81,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_11_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 121.79
            },
            "image": {
                "x": 1447.44,
                "y": 121.61,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_11.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_0F43DEF8_02DE_62FF_416F_111E878D0272",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 395.44,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_12_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 745.87
            },
            "image": {
                "x": 395.13,
                "y": 745.71,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_12.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_116D7E97_02FE_2532_4167_F8292A6ED69E",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 94.44,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_13_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 921.1
            },
            "image": {
                "x": 94.44,
                "y": 921.1,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_13.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_9034E0F8_8BFD_FEF9_41D4_4D851395BD2C",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 82.98,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_14_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1206.08
            },
            "image": {
                "x": 82.98,
                "y": 1206.08,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_0FB80333_02DE_2372_4183_9B067342910B_HS_14.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_9034D0F8_8BFD_FEF9_41A9_4E51557967A3",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFD",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2581"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "maxHeight": 58,
            "horizontalAlign": "center",
            "id": "IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "backgroundOpacity": 0,
            "width": 58,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 1,
            "mode": "toggle",
            "height": 58,
            "class": "IconButton",
            "pressedIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed.png",
            "transparencyActive": true,
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781.png",
            "data": {
                "name": "IconButton HS "
            },
            "paddingBottom": 0,
            "pressedRollOverIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed_rollover.png",
            "cursor": "hand",
            "maxWidth": 58
        },
        {
            "maxHeight": 58,
            "horizontalAlign": "center",
            "id": "IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "backgroundOpacity": 0,
            "width": 58,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 1,
            "mode": "toggle",
            "height": 58,
            "class": "IconButton",
            "pressedIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed.png",
            "transparencyActive": true,
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250.png",
            "data": {
                "name": "IconButton GYRO"
            },
            "paddingBottom": 0,
            "pressedRollOverIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed_rollover.png",
            "cursor": "hand",
            "maxWidth": 58
        },
        {
            "maxHeight": 58,
            "horizontalAlign": "center",
            "id": "IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "backgroundOpacity": 0,
            "width": 58,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7_rollover.png",
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 1,
            "mode": "push",
            "height": 58,
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7.png",
            "data": {
                "name": "IconButton VR"
            },
            "paddingBottom": 0,
            "cursor": "hand",
            "maxWidth": 58
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2580"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "id": "viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9VideoPlayer",
            "viewerArea": "this.viewer_uid9C4B40BE_8C2A_2D53_41C9_FC5AAE69D3C9",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "progressBarBorderSize": 0,
            "id": "MapViewer",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "left": "0%",
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 1,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 1,
            "playbackBarBorderSize": 0,
            "transitionDuration": 0,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "borderSize": 0,
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "toolTipBackgroundColor": "#F6F6F6",
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "fade_out_fade_in",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "top": "0%",
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "playbackBarHeadOpacity": 1,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "toolTipShadowBlurRadius": 3,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "toolTipFontSize": "2vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Floor Plan mini"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "toolTipFontWeight": "normal",
            "playbackBarBackgroundColorDirection": "vertical",
            "playbackBarHeadWidth": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FD",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2582"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 29.84,
                    "hfov": 17.87,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -30.69
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B, this.camera_826B61F3_8C2A_2ED1_41DD_2B117EA9148E); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2173F3CF_0187_C770_4131_14B2921E0908",
                    "pitch": -30.69,
                    "yaw": 29.84,
                    "hfov": 17.87,
                    "distance": 100
                }
            ],
            "id": "overlay_16BCB8F0_01BB_C12F_415A_C34C42CDD658",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -53.64,
                    "hfov": 18.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -28.8
                }
            ],
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2173A3CF_0187_C770_4179_E88122FC7EE2",
                    "pitch": -28.8,
                    "yaw": -53.64,
                    "hfov": 18.21,
                    "distance": 100
                }
            ],
            "id": "overlay_16D59560_01B8_4330_4176_B6C35712A2F0",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -32.68,
                    "hfov": 19.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -20.49
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_821651EA_8C2A_2EF3_41CB_F60EF09A3195); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F49CC83_034A_E512_4167_45B54316594C",
                    "pitch": -20.49,
                    "yaw": -32.68,
                    "hfov": 19.46,
                    "distance": 100
                }
            ],
            "id": "overlay_1A4854FD_03D6_26F6_4181_D961EE3720A4",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 59.87,
                    "hfov": 15.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -41.65
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6, this.camera_824BF20E_8C2A_2D33_41B4_78DEB033153A); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217483CF_0187_C770_4110_A7B34FDD78B8",
                    "pitch": -41.65,
                    "yaw": 59.87,
                    "hfov": 15.53,
                    "distance": 100
                }
            ],
            "id": "overlay_158F9E4A_0188_4170_4175_A26920D7B496",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -124.66,
                    "hfov": 18.11,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -29.37
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482, this.camera_82566220_8C2A_2D6E_41D9_C93871ABB7B2); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217453CF_0187_C770_4158_5ACDE6483A53",
                    "pitch": -29.37,
                    "yaw": -124.66,
                    "hfov": 18.11,
                    "distance": 100
                }
            ],
            "id": "overlay_15FD4C6A_0188_4130_416C_0E356F6AC274",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 150.91,
                    "hfov": 18.83,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -25.03
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0, this.camera_82424217_8C2A_2D51_41D7_13605972EA6E); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_172243D6_02FA_2332_4173_8C10F4A10680",
                    "pitch": -25.03,
                    "yaw": 150.91,
                    "hfov": 18.83,
                    "distance": 100
                }
            ],
            "id": "overlay_1186A269_02FA_1D11_4167_D86D7720E102",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 91.75,
                    "hfov": 19.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.81
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_1AB315B8_034A_677E_416C_7E6C57133AF4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1F6F2C94_034A_E536_4189_2A1B463C2E4A, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CEEF1C_3F13_E361_4180_328E6E33841E",
                    "pitch": -3.81,
                    "yaw": 91.75,
                    "hfov": 19.46,
                    "distance": 100
                }
            ],
            "id": "overlay_2991412E_3F13_9FA1_41B4_19B80C4FE64F",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 78.44,
                    "hfov": 12.4,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 17.16
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_1AF791EF_034A_1F12_4178_AC2240695923, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1F6EFC9B_034A_E532_4160_DB1E9FEC98D9, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C90F1C_3F13_E361_41A4_6D3903A41D13",
                    "pitch": 17.16,
                    "yaw": 78.44,
                    "hfov": 12.4,
                    "distance": 100
                }
            ],
            "id": "overlay_2AFF5F0E_3F13_A361_41CD_213FA8AD6A80",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C43D0C2_8C2A_2D32_41D5_20E877B1A49D",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2583"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -87.07,
                    "hfov": 18.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -24.65
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_82F7E266_8C2A_2DF3_41DC_2D7B20BF4644); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_14DF33D6_02FA_2332_415E_9C9CF502B618",
                    "pitch": -24.65,
                    "yaw": -87.07,
                    "hfov": 18.88,
                    "distance": 100
                }
            ],
            "id": "overlay_10785C77_02F6_25F2_4183_AEC0F940B626",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 87.83,
                    "hfov": 19.41,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -20.87
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602, this.camera_82CAC26F_8C2A_2DF1_41D6_9074EFFC4F89); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_14DF73D6_02FA_2332_4180_020633192D48",
                    "pitch": -20.87,
                    "yaw": 87.83,
                    "hfov": 19.41,
                    "distance": 100
                }
            ],
            "id": "overlay_16F0ED3F_02FA_2772_4161_EA0B0DE220DE",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "blending": 0,
            "id": "overlay_16BA2777_034A_E3F2_4156_90152416B2F9",
            "class": "VideoPanoramaOverlay",
            "loop": false,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_16BA2777_034A_E3F2_4156_90152416B2F9_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 1.37,
            "useHandCursor": true,
            "roll": -0.2,
            "click": "this.overlay_16BA2777_034A_E3F2_4156_90152416B2F9.play()",
            "hfov": 21.53,
            "autoplay": false,
            "yaw": 87.96,
            "vfov": 11.91,
            "rotationY": 0.99,
            "rotationX": 2.09,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 88.23,
                    "hfov": 14.38,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 13.32
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2A15785D_3F12_6DE3_41C5_7A28CB9AEE92, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_8688D038_8C2A_2D5F_41C4_FC60E2A9EC5E, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_8195AD25_8C2A_1771_41D4_84CF60118B9E, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DC6F23_3F13_E3A7_41CA_B05DB46782A7",
                    "pitch": 13.32,
                    "yaw": 88.23,
                    "hfov": 14.38,
                    "distance": 100
                }
            ],
            "id": "overlay_2A20A883_3F12_6D67_4196_AE723FDA0847",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 50.61,
                    "hfov": 8.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 17.35
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A14585D_3F12_6DE3_41B0_AFFCA1053256, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':10,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':10,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':10,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2A14285D_3F12_6DE3_41C2_4F3DFF819947, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DCDF23_3F13_E3A7_419A_7246EED0EBD6",
                    "pitch": 17.35,
                    "yaw": 50.61,
                    "hfov": 8.06,
                    "distance": 100
                }
            ],
            "id": "overlay_2A20B884_3F12_6D61_41A0_73D213C95FCC",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 34.4,
                    "hfov": 14.45,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 18.49
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A17F85E_3F12_6DE1_41B3_1D8C132C7E0B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DF1F23_3F13_E3A7_41BE_22C3D2DF816E",
                    "pitch": 18.49,
                    "yaw": 34.4,
                    "hfov": 14.45,
                    "distance": 100
                }
            ],
            "id": "overlay_2A208884_3F12_6D61_41C9_7357BB190E78",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_10_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 15.93,
                    "hfov": 12.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 20.49
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A17A85F_3F12_6D9F_41C5_5AF3E2244246, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2A17B85F_3F12_6D9F_41BC_8B9E25B0E84A, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DFBF23_3F13_E3A7_41CA_8D70B9443ACE",
                    "pitch": 20.49,
                    "yaw": 15.93,
                    "hfov": 12.51,
                    "distance": 100
                }
            ],
            "id": "overlay_2A209884_3F12_6D61_41CC_B89F6A009D88",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_11_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -128.49,
                    "hfov": 12.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 6.64
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_15306F7E_034A_E3F2_417F_DDC4DDED48A4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_15306F7E_034A_E3F2_4173_55B31D74DF91, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DFEF23_3F13_E3A7_41CD_C9B93A416CEC",
                    "pitch": 6.64,
                    "yaw": -128.49,
                    "hfov": 12.14,
                    "distance": 100
                }
            ],
            "id": "overlay_2A920BEE_3F16_62A1_41BD_808A9EE5A9CC",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_12_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -158.63,
                    "hfov": 20.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.78
                }
            ],
            "areas": [
                {
                    "toolTip": "Pintu Keluar",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_125005_00_041', '_self')",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DE3F24_3F13_E3A1_41B5_1CAC591875AB",
                    "pitch": -1.78,
                    "yaw": -158.63,
                    "hfov": 20.21,
                    "distance": 100
                }
            ],
            "id": "overlay_29659316_3F16_E361_41C7_BBE17360E474",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 6.99,
                    "hfov": 17.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -30.31
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B, this.camera_8276F206_8C2A_2D33_41DB_9F127C015F41); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2174E3CF_0187_C770_415C_651F444F2A71",
                    "pitch": -30.31,
                    "yaw": 6.99,
                    "hfov": 17.94,
                    "distance": 100
                }
            ],
            "id": "overlay_1269C01A_0188_C110_416B_9CE9D2825B7B",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 73.47,
                    "hfov": 20.59,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -7.65
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_826091FE_8C2A_2ED3_41D8_4A0F9E49DF6C); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_117917D5_02CE_6336_414B_E97107F8B935",
                    "pitch": -7.65,
                    "yaw": 73.47,
                    "hfov": 20.59,
                    "distance": 100
                }
            ],
            "id": "overlay_2291323F_01F9_C110_414E_9800CCAF2A5A",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_1_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -180,
                    "hfov": 19.61,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.12
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6, this.camera_82B4B239_8C2A_2D51_41C2_59ADD17A8AE7); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_132BD57D_0199_C310_4124_55430B4E0D38",
                    "pitch": -42.12,
                    "yaw": -180,
                    "hfov": 19.61,
                    "distance": 100
                }
            ],
            "id": "overlay_10313703_0198_C0F0_4172_CEEEE6036475",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_3_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 93.68,
                    "hfov": 15.8,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -40.51
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0, this.camera_82A09231_8C2A_2D6E_41C6_9A1AC8205586); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1720A3D6_02FA_2332_4180_588DAF6C0754",
                    "pitch": -40.51,
                    "yaw": 93.68,
                    "hfov": 15.8,
                    "distance": 100
                }
            ],
            "id": "overlay_12AE9D95_0188_4310_4171_1C662AE84A9E",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_4_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -83.58,
                    "hfov": 17.03,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.88
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9, this.camera_8293B254_8C2A_2DD7_41DE_2BEDD2F72814); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F4D1C83_034A_E512_417C_0EA013480D8A",
                    "pitch": -42.88,
                    "yaw": -83.58,
                    "hfov": 17.03,
                    "distance": 100
                }
            ],
            "id": "overlay_150D1E2F_0188_410A_4171_D47A2BCCB0EC",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "rotationX": 5.58,
            "blending": 0,
            "id": "overlay_16C66F11_0356_230E_417C_671770291BB2",
            "class": "VideoPanoramaOverlay",
            "roll": -1.13,
            "loop": true,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_16C66F11_0356_230E_417C_671770291BB2_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": -1.42,
            "useHandCursor": true,
            "yaw": -83.31,
            "autoplay": true,
            "vfov": 9.83,
            "rotationY": -2.44,
            "hfov": 17.71,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_19_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -83.53,
                    "hfov": 3.96,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 5.82
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_0C8676FC_03B9_985A_416B_17D46C431A37, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_8616EFD5_8C2A_12D1_41DB_714C6DBA68E4, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_81974D24_8C2A_1777_41C8_5AA86588553A, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_24ADEF28_3F12_63A0_41C4_B1622ED60474",
                    "pitch": 5.82,
                    "yaw": -83.53,
                    "hfov": 3.96,
                    "distance": 100
                }
            ],
            "id": "overlay_2A5DB61B_3F11_E560_41A6_75CA5BA4437B",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_6_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -46.18,
                    "hfov": 17.13,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.5
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A310265_0189_C130_416B_AC54D2B2339F, this.camera_829E824B_8C2A_2D31_41D8_F9E881E7E22D); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F4C4C83_034A_E512_417B_8E0A5251AD4A",
                    "pitch": -42.5,
                    "yaw": -46.18,
                    "hfov": 17.13,
                    "distance": 100
                }
            ],
            "id": "overlay_14D34232_03CA_1D72_4187_82B6DFEAFED0",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_7_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -128.53,
                    "hfov": 18.41,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -37.59
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF, this.camera_828A5242_8C2A_2D33_4176_7CAA3131673B); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F4CFC83_034A_E512_417E_560E8059B69B",
                    "pitch": -37.59,
                    "yaw": -128.53,
                    "hfov": 18.41,
                    "distance": 100
                }
            ],
            "id": "overlay_1404A644_03CA_E516_4181_DDA87B1432AE",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_8_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 79.33,
                    "hfov": 20.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -14.45
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482, this.camera_82E5F25D_8C2A_2DD1_41A9_842DEF85DCBA); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F4C9C83_034A_E512_417B_D46DD96987D9",
                    "pitch": -14.45,
                    "yaw": 79.33,
                    "hfov": 20.12,
                    "distance": 100
                }
            ],
            "id": "overlay_14FB11C3_03CD_FF11_4183_21B91E1ED916",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_9_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 118.24,
                    "hfov": 20.22,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -13.32
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6, this.camera_82AC4229_8C2A_2D7E_41DA_7F1FA5693069); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F4F4C83_034A_E512_4181_A0A37AC75875",
                    "pitch": -13.32,
                    "yaw": 118.24,
                    "hfov": 20.22,
                    "distance": 100
                }
            ],
            "id": "overlay_1B3198CC_03CE_ED16_4185_2E36C58197EF",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_15_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 8.25,
                    "hfov": 16.83,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -8.21
                }
            ],
            "areas": [
                {
                    "toolTip": "Pintu Keluar",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_125005_00_041', '_self')",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CD6F1A_3F13_E361_41BC_FD143A9D4D51",
                    "pitch": -8.21,
                    "yaw": 8.25,
                    "hfov": 16.83,
                    "distance": 100
                }
            ],
            "id": "overlay_2A12EF99_3F17_A363_41C5_7F41A704A5EB",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_16_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -116.08,
                    "hfov": 6.35,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 4.09
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0C8906FA_03B9_985E_4147_5BF3CBFA7926, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_0C8906FA_03B9_985E_4187_FD8475BEFE46, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CDAF1B_3F13_E367_41A3_666BF831237F",
                    "pitch": 4.09,
                    "yaw": -116.08,
                    "hfov": 6.35,
                    "distance": 100
                }
            ],
            "id": "overlay_2BE733C9_3F17_A2E3_418F_B40F42DA9632",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_17_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -125.9,
                    "hfov": 8.13,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 3.64
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0C89C6FA_03B9_985E_4189_31509CC1BC9D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CDFF1B_3F13_E367_41C1_8045DA35D2D5",
                    "pitch": 3.64,
                    "yaw": -125.9,
                    "hfov": 8.13,
                    "distance": 100
                }
            ],
            "id": "overlay_2ABEB547_3F16_67EF_4198_00ECEB54F31F",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_18_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -138.64,
                    "hfov": 7.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 3.44
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0C88D6F8_03B9_985A_417D_6AF94A6DA452, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_0C88C6F8_03B9_985A_4174_C46550139F06, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CC2F1B_3F13_E367_41AB_DCCC2C8E566B",
                    "pitch": 3.44,
                    "yaw": -138.64,
                    "hfov": 7.94,
                    "distance": 100
                }
            ],
            "id": "overlay_2A4299FB_3F16_EEA7_41B2_3A8FF9A54A2D",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_20_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 53.51,
                    "hfov": 6.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 3.71
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_16C77E39_034A_257E_4174_5F7A568F2A5E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_16C77E39_034A_257E_4158_BF62B412C01E, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CF1F1C_3F13_E361_41B6_8388D60CE97F",
                    "pitch": 3.71,
                    "yaw": 53.51,
                    "hfov": 6.32,
                    "distance": 100
                }
            ],
            "id": "overlay_2BFCA096_3F12_9D61_41C7_CEF63B2727C3",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 53.83,
                    "hfov": 17.65,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -31.83
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A310265_0189_C130_416B_AC54D2B2339F, this.camera_9CC1712B_8C2A_2F72_41DF_EC0A922451CF); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217133D5_0187_C710_4160_2DCB84C238A2",
                    "pitch": -31.83,
                    "yaw": 53.83,
                    "hfov": 17.65,
                    "distance": 100
                }
            ],
            "id": "overlay_16CBECB2_01B8_4110_4178_9DA131F4319C",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 128.25,
                    "hfov": 19.31,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -21.63
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9, this.camera_9CD42133_8C2A_2F51_41CF_C62A6E41BFE6); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2170D3D5_0187_C710_4165_06C0D66EBF86",
                    "pitch": -21.63,
                    "yaw": 128.25,
                    "hfov": 19.31,
                    "distance": 100
                }
            ],
            "id": "overlay_166683F9_01B8_4710_4176_AA465CEB464A",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -135.05,
                    "hfov": 16.89,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -35.6
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF, this.camera_9CCED122_8C2A_2F72_41D9_B73A2778257A); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217083D5_0187_C710_416D_829035D64324",
                    "pitch": -35.6,
                    "yaw": -135.05,
                    "hfov": 16.89,
                    "distance": 100
                }
            ],
            "id": "overlay_19FF206F_01B8_C130_416F_F20112104929",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "rotationX": -1.04,
            "blending": 0,
            "id": "overlay_169472B1_0356_3D0E_4188_EA2C84B32AE8",
            "class": "VideoPanoramaOverlay",
            "roll": -0.55,
            "loop": true,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_169472B1_0356_3D0E_4188_EA2C84B32AE8_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 2.39,
            "useHandCursor": true,
            "yaw": -47.11,
            "autoplay": true,
            "vfov": 23.29,
            "rotationY": 0.52,
            "hfov": 41.54,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -167.85,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_151A4A9D_03D6_2D31_4182_5B97AD7D2F02",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_151A4A9D_03D6_2D31_4182_5B97AD7D2F02_0_2.jpg",
                        "width": 576,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 7.08,
            "hideEasing": "cubic_out",
            "hfov": 18.12
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -121.74,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_151BCA9D_03D6_2D31_4140_A83DB21329C7",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_151BCA9D_03D6_2D31_4140_A83DB21329C7_0_2.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 10.27,
            "hideEasing": "cubic_out",
            "hfov": 38.97
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -147.28,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_151B2A9D_03D6_2D31_4189_59DE99FA2400",
            "image": {
                "levels": [
                    {
                        "url": "media/popup_151B2A9D_03D6_2D31_4189_59DE99FA2400_0_0.png",
                        "width": 658,
                        "class": "ImageResourceLevel",
                        "height": 565
                    },
                    {
                        "url": "media/popup_151B2A9D_03D6_2D31_4189_59DE99FA2400_0_1.png",
                        "width": 512,
                        "class": "ImageResourceLevel",
                        "height": 439
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 7.91,
            "hideEasing": "cubic_out",
            "hfov": 18.09
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -51.16,
                    "hfov": 13.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 19.74
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2911CB0C_3F13_E361_4185_06AA98E25F92, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_868B6037_8C2A_2D51_41B1_4DD921A79445, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_81948D25_8C2A_1771_41BC_F96616367F26, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C0EF21_3F13_E3A3_41B8_ED236A73E427",
                    "pitch": 19.74,
                    "yaw": -51.16,
                    "hfov": 13.91,
                    "distance": 100
                }
            ],
            "id": "overlay_293A4B30_3F13_E3A0_41B2_EFDF3B7EB63E",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -120.14,
                    "hfov": 7.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 22.64
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_29132B0D_3F13_E363_41C4_446D76E5985C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':10,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':10,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':10,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_29132B0D_3F13_E363_41CD_753B84771ACC, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C3AF21_3F13_E3A3_417A_94657E88EF03",
                    "pitch": 22.64,
                    "yaw": -120.14,
                    "hfov": 7.79,
                    "distance": 100
                }
            ],
            "id": "overlay_293A5B30_3F13_E3A1_41C0_E5F6E54E9B9A",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -147.3,
                    "hfov": 14.03,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 23.02
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2913EB0D_3F13_E363_4192_CFFA34EF2479, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C3FF21_3F13_E3A3_41CF_184B25FCAB10",
                    "pitch": 23.02,
                    "yaw": -147.3,
                    "hfov": 14.03,
                    "distance": 100
                }
            ],
            "id": "overlay_293ABB30_3F13_E3A1_41B1_E59081E1EAC1",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_10_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -166.9,
                    "hfov": 12.68,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 18.22
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_29121B0E_3F13_E361_41C9_0D0AE550CBDB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_29127B0E_3F13_E361_41C0_35447789CDD4, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C20F22_3F13_E3A1_41A7_EFF7C1BD4D75",
                    "pitch": 18.22,
                    "yaw": -166.9,
                    "hfov": 12.68,
                    "distance": 100
                }
            ],
            "id": "overlay_293A8B30_3F13_E3A1_41A2_AFCB8BEABD2C",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -179.62,
                    "hfov": 14.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -43.91
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E, this.camera_81D1A197_8C2A_2F51_41CF_7D73CB38F078); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A17A1D_01F8_4110_4171_EE6CA2EC67E2",
                    "pitch": -43.91,
                    "yaw": -179.62,
                    "hfov": 14.97,
                    "distance": 100
                }
            ],
            "id": "overlay_236DF38D_01F8_47F0_4179_54117C548B82",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 89.34,
                    "hfov": 19.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.85
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B, this.camera_822DD1A1_8C2A_2F6E_41A8_21B6209D9F62); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A1DA1D_01F8_4110_4162_02B4D24B4524",
                    "pitch": -17.85,
                    "yaw": 89.34,
                    "hfov": 19.78,
                    "distance": 100
                }
            ],
            "id": "overlay_22FA168C_01F8_C1F0_416A_0B88BABC2AB0",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -83.29,
                    "hfov": 18.83,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -25.03
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_9D18E156_8C2A_2FD3_41DD_1C731B87C9F7); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A1EA1D_01F8_4110_4179_A659001A3B7B",
                    "pitch": -25.03,
                    "yaw": -83.29,
                    "hfov": 18.83,
                    "distance": 100
                }
            ],
            "id": "overlay_215D1B15_01F9_C710_4148_AB61C39FEF69",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_8_0_0_map.gif",
                                "width": 25,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -2.15,
                    "hfov": 14.67,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.69
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_160BBBD0_035E_230E_4188_83261CB51309, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.10196078431372549,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.10196078431372549,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.10196078431372549,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_160BCBD0_035E_230E_4163_BF830F5181B8, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "yaw": -2.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50,
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_8_0.png",
                                "width": 239,
                                "class": "ImageResourceLevel",
                                "height": 150
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "pitch": -1.69,
                    "hfov": 14.67
                }
            ],
            "id": "overlay_1606CBEF_035E_2312_4185_9F22C9D31DBD",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_9_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 64.03,
                    "hfov": 19.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.47
                }
            ],
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F553C83_034A_E512_4170_1702C1571D25",
                    "pitch": -17.47,
                    "yaw": 64.03,
                    "hfov": 19.82,
                    "distance": 100
                }
            ],
            "id": "overlay_14AAE219_03CA_1D31_4186_EA774407BF17",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_11_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -2.24,
                    "hfov": 14.6,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 5.53
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_16FFF462_035A_6512_4182_B5D0BFACB539, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1504B013_035A_1D32_4188_826C3C9C23FC, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CA8F1D_3F13_E363_41A4_B54A56456BCC",
                    "pitch": 5.53,
                    "yaw": -2.24,
                    "hfov": 14.6,
                    "distance": 100
                }
            ],
            "id": "overlay_29D96FAB_3F12_A2A7_41B9_03AF19D93CDD",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_12_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 12.21,
                    "hfov": 14.59,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 6.04
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_168CD1FF_037A_1EF1_4182_BBDFB953060B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.10196078431372549,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.10196078431372549,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.10196078431372549,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1502D013_035A_1D32_4184_BBBCC865CAEA, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27CACF1D_3F13_E363_41B6_F729638216DB",
                    "pitch": 6.04,
                    "yaw": 12.21,
                    "hfov": 14.59,
                    "distance": 100
                }
            ],
            "id": "overlay_28137835_3F11_ADA2_41C1_553E676967A3",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_13_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 25.55,
                    "hfov": 14.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 8.42
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_1543AE85_037E_6516_415B_C3F001C9EB53, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_15002013_035A_1D32_4175_BD6AB8067271, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C56F1D_3F13_E363_41C7_D7209631C16E",
                    "pitch": 8.42,
                    "yaw": 25.55,
                    "hfov": 14.51,
                    "distance": 100
                }
            ],
            "id": "overlay_2A7439D4_3F11_EEE1_4190_F877985C1A66",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_14_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 156.24,
                    "hfov": 19.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 3.97
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_169B29D7_035A_6F32_4160_89030C356E9A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1503A013_035A_1D32_4174_75F4FD0346D9, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C55F1D_3F13_E363_41CF_621D87AD65DF",
                    "pitch": 3.97,
                    "yaw": 156.24,
                    "hfov": 19.52,
                    "distance": 100
                }
            ],
            "id": "overlay_29712258_3F1E_BDE1_416C_72D70B4B3964",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_15_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -24.53,
                    "hfov": 16.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -0.93
                }
            ],
            "areas": [
                {
                    "toolTip": "Pintu Keluar",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_125005_00_041', '_self')",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C5EF1F_3F13_E39F_41C9_6FA4F8056478",
                    "pitch": -0.93,
                    "yaw": -24.53,
                    "hfov": 16.82,
                    "distance": 100
                }
            ],
            "id": "overlay_2A5806FB_3F1E_A2A7_41CD_953E0E63B7BE",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C70C0BB_8C2A_2D51_41C8_A99CCA93C584",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2579"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 90.47,
                    "hfov": 17.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.96
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602, this.camera_9CE3410F_8C2A_2F31_41D3_14F30020B889); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2171D3D5_0187_C710_4163_2D2961CB19F9",
                    "pitch": -32.96,
                    "yaw": 90.47,
                    "hfov": 17.43,
                    "distance": 100
                }
            ],
            "id": "overlay_14443887_01B8_41F0_4164_3F952146F89C",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 178.87,
                    "hfov": 19.6,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -19.36
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6, this.camera_9CF9F118_8C2A_2F5F_41DA_495E2C067DFB); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A75A2C_01F8_4137_4159_046F2235DE7E",
                    "pitch": -19.36,
                    "yaw": 178.87,
                    "hfov": 19.6,
                    "distance": 100
                }
            ],
            "id": "overlay_17DDB1C9_01B8_C371_4176_766D085C344E",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "rotationX": -5.57,
            "blending": 0,
            "id": "overlay_168BC68B_03D6_6512_416A_46A637755106",
            "class": "VideoPanoramaOverlay",
            "roll": -1.97,
            "loop": true,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_168BC68B_03D6_6512_416A_46A637755106_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 2.18,
            "useHandCursor": true,
            "yaw": 34.13,
            "autoplay": true,
            "vfov": 19.69,
            "rotationY": 33.99,
            "hfov": 34.76,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_5_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 149.4,
                    "hfov": 20.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -13.69
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_9CEE1107_8C2A_2F31_4195_637514CF489A); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F57BC83_034A_E512_4181_BE6A36563F17",
                    "pitch": -13.69,
                    "yaw": 149.4,
                    "hfov": 20.19,
                    "distance": 100
                }
            ],
            "id": "overlay_1B30A82E_03CE_6D12_4187_2F441532F82C",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 31.95,
                    "hfov": 14.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 16.34
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_0CEC7634_03BB_BBEA_4166_F7777F6D757D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_868A0037_8C2A_2D51_41D8_B89BB9872A35, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_8194ED25_8C2A_1771_41D5_108FC7D43EF8, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C60F20_3F13_E3A0_41B2_CB758781B76C",
                    "pitch": 16.34,
                    "yaw": 31.95,
                    "hfov": 14.18,
                    "distance": 100
                }
            ],
            "id": "overlay_2AB21316_3F1E_A360_41B3_BCB362C05548",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -38.16,
                    "hfov": 7.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 28.31
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_1550B851_03D6_6D0E_4186_1652BA1940D3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':10,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':10,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':10,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1AF37B3B_0356_6372_4181_4F4AD783FE1C, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C6FF20_3F13_E3A1_41C8_F6BB459EE5C2",
                    "pitch": 28.31,
                    "yaw": -38.16,
                    "hfov": 7.43,
                    "distance": 100
                }
            ],
            "id": "overlay_295E781F_3F11_AD9F_41C6_73A703B35E9B",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -99.32,
                    "hfov": 11.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 38.13
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_15508851_03D6_6D0E_4189_EF92784839A4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C10F20_3F13_E3A1_41AB_7EDD4334A734",
                    "pitch": 38.13,
                    "yaw": -99.32,
                    "hfov": 11.99,
                    "distance": 100
                }
            ],
            "id": "overlay_2907EBE2_3F12_62A1_41C3_F7B1ED598FF7",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_10_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -146.13,
                    "hfov": 12.17,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 24.27
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_15501851_03D6_6D0E_4180_BFF2438BEA53, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_0F4EB09A_03B7_B8DE_4189_51E0FB4B3FF4, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C14F20_3F13_E3A1_41CA_AB7ADCF2923D",
                    "pitch": 24.27,
                    "yaw": -146.13,
                    "hfov": 12.17,
                    "distance": 100
                }
            ],
            "id": "overlay_29914B95_3F12_A363_41AF_D228430E08F4",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 397.44,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 929.49
            },
            "image": {
                "x": 397.34,
                "y": 929.42,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_0.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0AA09F_2A27_F1D8_41B1_4D440A082F95",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 389.6,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1099.15
            },
            "image": {
                "x": 389.58,
                "y": 1099.07,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_1.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0AE09F_2A27_F1D8_4196_52C64E03E63B",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 703.56,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1859.12
            },
            "image": {
                "x": 703.39,
                "y": 1859.02,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_2.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0AF09F_2A27_F1D8_4192_84852342FBF0",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 399.29,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1869.09
            },
            "image": {
                "x": 399.19,
                "y": 1869,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_3.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0B20A0_2A27_F1E8_41B1_8AEF790943FE",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 96.44,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1848.29
            },
            "image": {
                "x": 96.29,
                "y": 1848.12,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_4.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0B30A0_2A27_F1E8_41B1_AFF8760D72F5",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 133.76,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 379.2
            },
            "image": {
                "x": 133.62,
                "y": 379.05,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_6.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0B70A0_2A27_F1E8_41B5_E4AD7430FC2C",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 408.4,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 383.05
            },
            "image": {
                "x": 408.25,
                "y": 382.93,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_7.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0B90A0_2A27_F1E8_41B6_6CBC6BAF40CA",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 723.5,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_8_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 446.44
            },
            "image": {
                "x": 723.35,
                "y": 446.32,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_8.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0BA0A0_2A27_F1E8_41A6_B1F7FE65F80C",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1080.77,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_9_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 465.67
            },
            "image": {
                "x": 1080.59,
                "y": 465.54,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_9.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0BC0A0_2A27_F1E8_41BD_731434AE7DC3",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1447.58,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_10_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 461.82
            },
            "image": {
                "x": 1447.44,
                "y": 461.66,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_10.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0BD0A0_2A27_F1E8_41AD_AD7EE220DD52",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 1447.58,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_11_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 121.65
            },
            "image": {
                "x": 1447.44,
                "y": 121.61,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_11.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0BE0A0_2A27_F1E8_41BB_9C71CAC6D0B8",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 395.3,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_12_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 745.87
            },
            "image": {
                "x": 395.13,
                "y": 745.71,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_12.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_3D0800A0_2A27_F1E8_41C3_DC4CE68A5443",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 94.44,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 921.23
            },
            "image": {
                "x": 94.44,
                "y": 921.1,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_5.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3D0B40A0_2A27_F1E8_41C0_066151552EB2",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 57.79,
                "x": 82.98,
                "height": 67.41,
                "offsetX": 0,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_13_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 18
                        }
                    ],
                    "class": "ImageResource"
                },
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "y": 1206.08
            },
            "image": {
                "x": 82.98,
                "y": 1206.08,
                "class": "HotspotMapOverlayImage",
                "width": 57.79,
                "image": {
                    "levels": [
                        {
                            "url": "media/map_3DDC1625_2A24_10E9_41BB_9517D7DADA17_HS_13.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ],
                    "class": "ImageResource"
                },
                "height": 67.41
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_91324AD2_8BFB_ED0E_41C7_2A775C61640E",
            "data": {
                "label": "Image"
            },
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 75.74,
                    "hfov": 17.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.01
                }
            ],
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217F23D5_0187_C710_4177_2490C97A9068",
                    "pitch": -32.01,
                    "yaw": 75.74,
                    "hfov": 17.62,
                    "distance": 100
                }
            ],
            "id": "overlay_1ADB6003_0198_C0F1_4177_CF676DA967D4",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "media": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C",
            "camera": "this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5900C7_8C2A_2D31_41D2_BB8589D8E358, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5900C7_8C2A_2D31_41D2_BB8589D8E358",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482",
            "camera": "this.panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5870C8_8C2A_2D3E_41C2_5EE30F515088, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5870C8_8C2A_2D3E_41C2_5EE30F515088",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B",
            "camera": "this.panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C57C0C8_8C2A_2D3E_41C6_E9232B931EEE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C57C0C8_8C2A_2D3E_41C6_E9232B931EEE",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6",
            "camera": "this.panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5700C8_8C2A_2D3E_4178_DB42A3C75A91, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5700C8_8C2A_2D3E_4178_DB42A3C75A91",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E",
            "camera": "this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5670C8_8C2A_2D3E_41E0_CA48CA3767BB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5670C8_8C2A_2D3E_41E0_CA48CA3767BB",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0",
            "camera": "this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C55A0C9_8C2A_2D3E_419D_8E926E60904D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C55A0C9_8C2A_2D3E_419D_8E926E60904D",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6",
            "camera": "this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5500C9_8C2A_2D3E_41DB_3981C035A968, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5500C9_8C2A_2D3E_41DB_3981C035A968",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF",
            "camera": "this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5490C9_8C2A_2D3E_41E0_9F596B622FBC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5490C9_8C2A_2D3E_41E0_9F596B622FBC",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602",
            "camera": "this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5410C9_8C2A_2D3E_41DE_27F78DA15D33, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5410C9_8C2A_2D3E_41DE_27F78DA15D33",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A310265_0189_C130_416B_AC54D2B2339F",
            "camera": "this.panorama_0A310265_0189_C130_416B_AC54D2B2339F_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5340C9_8C2A_2D3E_41DC_4A3492B43766, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5340C9_8C2A_2D3E_41DC_4A3492B43766",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A38AE77_0189_C110_4171_BE63086A2049",
            "camera": "this.panorama_0A38AE77_0189_C110_4171_BE63086A2049_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5290CA_8C2A_2D32_41C7_321620A9DB6E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5290CA_8C2A_2D32_41C7_321620A9DB6E",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9",
            "camera": "this.panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5210CA_8C2A_2D32_41D6_B43BA45F1157, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5210CA_8C2A_2D32_41D6_B43BA45F1157",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC",
            "camera": "this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C5160CA_8C2A_2D32_41B9_72826D5AA576, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C5160CA_8C2A_2D32_41B9_72826D5AA576",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8",
            "end": "this.trigger('tourEnded')",
            "camera": "this.panorama_1C1B63E6_0188_C730_416A_E102A28938A8_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9C50C0CA_8C2A_2D32_41D2_A34E2E08F170, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 0)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9C50C0CA_8C2A_2D32_41D2_A34E2E08F170",
            "class": "PanoramaPlayListItem"
        },
        {
            "id": "viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFDVideoPlayer",
            "viewerArea": "this.viewer_uid9C48C0BE_8C2A_2D53_41DD_5A9367144BFD",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 9.44,
                    "hfov": 18.4,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.67
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC, this.camera_823E01BB_8C2A_2F51_41D4_5BF8E121B3FB); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217023D5_0187_C710_4152_FF96CAAC6EDC",
                    "pitch": -27.67,
                    "yaw": 9.44,
                    "hfov": 18.4,
                    "distance": 100
                }
            ],
            "id": "overlay_1633324B_0189_C170_4174_68C29A920F07",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 137.12,
                    "hfov": 19.56,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -19.74
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_822AB1AA_8C2A_2F72_41DF_7A8DDDEF8670); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217FC3D5_0187_C710_4177_B9A72003DF2F",
                    "pitch": -19.74,
                    "yaw": 137.12,
                    "hfov": 19.56,
                    "distance": 100
                }
            ],
            "id": "overlay_1715F482_0188_41F0_4177_37740C553C22",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -145.44,
                    "hfov": 18.34,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -28.05
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3BBBDB_0189_C710_416D_B75CEF238602, this.camera_822461B2_8C2A_2F52_41DA_BE41C7E212FF); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217F93D5_0187_C710_4170_B74AAB87D598",
                    "pitch": -28.05,
                    "yaw": -145.44,
                    "hfov": 18.34,
                    "distance": 100
                }
            ],
            "id": "overlay_19BF6657_0188_C110_4175_297B89AFB873",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "blending": 0,
            "id": "overlay_15FD06BC_03DA_E576_4165_3AAC1B8B6FCF",
            "class": "VideoPanoramaOverlay",
            "loop": true,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_15FD06BC_03DA_E576_4165_3AAC1B8B6FCF_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 1.51,
            "useHandCursor": true,
            "roll": -0.15,
            "click": "this.overlay_15FD06BC_03DA_E576_4165_3AAC1B8B6FCF.play()",
            "hfov": 29.55,
            "autoplay": false,
            "yaw": -99.72,
            "vfov": 16.75,
            "rotationY": -30.68,
            "rotationX": -2.15,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -99.04,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "id": "popup_0C783E2A_03BB_8BFE_418B_066BA8E31E31",
            "pitch": 13.6,
            "hideEasing": "cubic_out",
            "hfov": 18.96
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -98.29,
                    "hfov": 11.96,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 14.08
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2AA9100D_3F12_9D63_41C1_179E7BA65D3D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_868B8037_8C2A_2D51_41E0_CC0379D1A802, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_81941D25_8C2A_1771_41AE_C98ED3D43B8D, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C3FF22_3F13_E3A1_41C4_41A7023EE332",
                    "pitch": 14.08,
                    "yaw": -98.29,
                    "hfov": 11.96,
                    "distance": 100
                }
            ],
            "id": "overlay_2AA4A034_3F12_9DA1_41CE_6CE6A82F2AB1",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -142.05,
                    "hfov": 8.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 14.33
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2AA8200F_3F12_9D60_41CB_49F8118C1EC4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':10,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':10,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':10,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2AA8300F_3F12_9D60_4188_FFD8EB9E584A, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C2AF22_3F13_E3A1_41B4_FEF08030AB22",
                    "pitch": 14.33,
                    "yaw": -142.05,
                    "hfov": 8.18,
                    "distance": 100
                }
            ],
            "id": "overlay_2AA4B034_3F12_9DA1_41C6_8FA506CB93E1",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -157.4,
                    "hfov": 13.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 14.33
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2AAB8010_3F12_9D61_41C0_E5FC13FD1498, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C29F22_3F13_E3A1_41B4_3B567E502DE6",
                    "pitch": 14.33,
                    "yaw": -157.4,
                    "hfov": 13.12,
                    "distance": 100
                }
            ],
            "id": "overlay_2AA4C034_3F12_9DA1_41C7_2AB882E261EA",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -171.44,
                    "hfov": 13.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 12.93
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2AABC011_3F12_9D63_4192_DFEDA19CBE08, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2AABD011_3F12_9D63_41B7_BD3EC2972917, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27DD3F23_3F13_E3A7_419C_456A512E700A",
                    "pitch": 12.93,
                    "yaw": -171.44,
                    "hfov": 13.01,
                    "distance": 100
                }
            ],
            "id": "overlay_2AA4E034_3F12_9DA1_414B_B67E51975328",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 97.84,
                    "hfov": 18.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -25.59
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A38E874_0189_C110_4176_1AE8579BAF0C, this.camera_823201CD_8C2A_2F31_41C9_817E068EDE95); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2172A3D5_0187_C710_4172_861C2FF6A282",
                    "pitch": -25.59,
                    "yaw": 97.84,
                    "hfov": 18.74,
                    "distance": 100
                }
            ],
            "id": "overlay_126417DF_0188_4F10_4152_9D6F5A964F57",
            "data": {
                "label": "Arrow 01c"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 10.2,
                    "hfov": 19.02,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -23.7
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF, this.camera_8209F1D7_8C2A_2ED1_41D5_4CA1063B01DB); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A09A1D_01F8_4110_4142_06A3BA86A4CA",
                    "pitch": -23.7,
                    "yaw": 10.2,
                    "hfov": 19.02,
                    "distance": 100
                }
            ],
            "id": "overlay_15FADE10_0188_4110_416C_E2530D3282F8",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -177.92,
                    "hfov": 14.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -45.61
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A36831A_0188_4710_4175_617FCB27EF2E, this.camera_821FD1E1_8C2A_2EEE_41A7_602FF90B0450); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_217203D5_0187_C710_4169_E9ECFC3914CC",
                    "pitch": -45.61,
                    "yaw": -177.92,
                    "hfov": 14.53,
                    "distance": 100
                }
            ],
            "id": "overlay_15442460_0188_4130_4154_865548D59C70",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 96.63,
                    "hfov": 17,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.03
                }
            ],
            "areas": [
                {
                    "toolTip": "Pintu Keluar",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_125005_00_041', '_self')"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C48F1F_3F13_E39F_41B9_AF12DDB16798",
                    "pitch": -1.03,
                    "yaw": 96.63,
                    "hfov": 17,
                    "distance": 100
                }
            ],
            "id": "overlay_28818DC2_3F1F_A6E1_41AB_B69C0E19494C",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -152.54,
                    "hfov": 8.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 4.15
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_46308A41_5E08_14EB_41C2_995950235495, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4630AA41_5E08_14EB_41CD_1287690973D0, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_49B03F36_5E08_0C96_41B6_45337EE972F3",
                    "pitch": 4.15,
                    "yaw": -152.54,
                    "hfov": 8.82,
                    "distance": 100
                }
            ],
            "id": "overlay_465E0A86_5E08_1476_4196_4D5D13356765",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 85.75,
                    "hfov": 15.39,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.21
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A301F8A_0189_BFF0_4158_8F11989100B6, this.camera_832E8280_8C2A_2D2F_41DB_79A3C8B45754); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F498C83_034A_E512_418A_4D4836B07055",
                    "pitch": -42.21,
                    "yaw": 85.75,
                    "hfov": 15.39,
                    "distance": 100
                }
            ],
            "id": "overlay_137A816B_0188_4331_4129_C693AEE36358",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -104.64,
                    "hfov": 13.83,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -48.26
                }
            ],
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A3B0957_0188_4310_4171_529BD4203CE0, this.camera_82DBE277_8C2A_2DD1_41AD_84C81CA11C30); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_29A10A1D_01F8_4110_4164_D6FFDDBB2A72",
                    "pitch": -48.26,
                    "yaw": -104.64,
                    "hfov": 13.83,
                    "distance": 100
                }
            ],
            "id": "overlay_12C90115_0188_4310_4143_19CB2FF264FE",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_3_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 132.97,
                    "hfov": 19.8,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.66
                }
            ],
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_1F48AC83_034A_E512_4173_15C5EA964A42",
                    "pitch": -17.66,
                    "yaw": 132.97,
                    "hfov": 19.8,
                    "distance": 100
                }
            ],
            "id": "overlay_1B65A15D_03D6_7F36_4180_50B62BC28A6E",
            "data": {
                "label": "Arrow 01b"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": -70.42,
                    "hfov": 25.38,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 7.65
                }
            ],
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_17DA680E_0356_2D12_4172_1C397EC042BE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_0F40409A_03B7_B8DE_4182_BF302FEE44EE, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_27C8CF1D_3F13_E363_41C2_C44AA7D5288F",
                    "pitch": 7.65,
                    "yaw": -70.42,
                    "hfov": 25.38,
                    "distance": 100
                }
            ],
            "id": "overlay_29802E00_3F12_A561_41AF_7C7D2F54AEF0",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "rotationX": -9.76,
            "blending": 0,
            "id": "overlay_278E3925_3F2F_AFA3_41C4_9E48B8B0F840",
            "class": "VideoPanoramaOverlay",
            "roll": -0.58,
            "loop": true,
            "image": {
                "levels": [
                    {
                        "url": "media/overlay_278E3925_3F2F_AFA3_41C4_9E48B8B0F840_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ],
                "class": "ImageResource"
            },
            "pitch": 0.99,
            "useHandCursor": true,
            "yaw": 92.16,
            "autoplay": true,
            "vfov": 8.05,
            "rotationY": 11.86,
            "hfov": 15.09,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_150CD3E8_0356_631E_4181_C938348D61F8.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "image": {
                        "levels": [
                            {
                                "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ],
                        "class": "ImageResource"
                    },
                    "yaw": 92.77,
                    "hfov": 3.95,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 7.55
                }
            ],
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_277A7905_3F2F_AF60_41C6_48C710204527, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_86174FD6_8C2A_12D3_41B1_95B1C24EEA27, this.video_150CD3E8_0356_631E_4181_C938348D61F8, this.PlayList_8195CD24_8C2A_1777_41C0_FD096B27BE25, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "class": "HotspotPanoramaOverlayImage",
                    "image": "this.AnimatedImageResource_2A407480_3F55_15EE_41C5_0CB91552DB95",
                    "pitch": 7.55,
                    "yaw": 92.77,
                    "hfov": 3.95,
                    "distance": 100
                }
            ],
            "id": "overlay_278E2925_3F2F_AFA3_41B5_427677152038",
            "data": {
                "label": "Image"
            },
            "class": "HotspotPanoramaOverlay"
        },
        {
            "id": "viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FDVideoPlayer",
            "viewerArea": "this.viewer_uid9C4640C0_8C2A_2D2F_41D3_9DD2DDB2A2FD",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "progressBarBorderSize": 0,
            "id": "viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7",
            "width": "100%",
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "minHeight": 50,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "playbackBarHeadBorderRadius": 0,
            "paddingRight": 0,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "minWidth": 100,
            "playbackBarBorderSize": 0,
            "transitionDuration": 500,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowVerticalLength": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "height": "100%",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipBackgroundColor": "#F6F6F6",
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "borderSize": 0,
            "vrPointerSelectionTime": 2000,
            "progressBarBackgroundColorDirection": "vertical",
            "shadow": false,
            "progressHeight": 10,
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipPaddingRight": 6,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "vrPointerColor": "#FFFFFF",
            "toolTipDisplayTime": 600,
            "progressBarOpacity": 1,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "transitionMode": "blending",
            "displayTooltipInTouchScreens": true,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBorderRadius": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "paddingLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "toolTipBorderColor": "#767676",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "toolTipShadowSpread": 0,
            "toolTipShadowBlurRadius": 3,
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "playbackBarHeadOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "toolTipPaddingBottom": 4,
            "paddingBottom": 0,
            "toolTipTextShadowBlurRadius": 3,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "toolTipShadowColor": "#333333",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea2578"
            },
            "playbackBarHeight": 10,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarHeadWidth": 6,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "playbackBarRight": 0
        },
        {
            "id": "viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7VideoPlayer",
            "viewerArea": "this.viewer_uid9C7740B8_8C2A_2D5F_41D8_447E81F828F7",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5,
            "id": "Container_B1571269_BF46_B846_41D9_B94D861499DF",
            "backgroundOpacity": 0,
            "width": 110,
            "scrollBarVisible": "rollOver",
            "right": "0%",
            "children": [
                "this.IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8"
            ],
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "overflow": "visible",
            "paddingLeft": 0,
            "propagateClick": true,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "top": "0%",
            "minWidth": 1,
            "verticalAlign": "middle",
            "height": 110,
            "class": "Container",
            "paddingTop": 0,
            "gap": 10,
            "paddingBottom": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "button menu sup"
            },
            "layout": "horizontal"
        },
        {
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5,
            "id": "Container_B1573269_BF46_B846_41AD_E3E55F50C328",
            "backgroundOpacity": 0,
            "children": [
                "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
                "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
                "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
                "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
                "this.IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832"
            ],
            "scrollBarVisible": "rollOver",
            "right": "0%",
            "width": "91.265%",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "overflow": "scroll",
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "top": "14.96%",
            "minWidth": 1,
            "verticalAlign": "top",
            "scrollBarWidth": 10,
            "class": "Container",
            "paddingTop": 0,
            "gap": 3,
            "paddingBottom": 0,
            "borderSize": 0,
            "height": "52.475%",
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "-button set"
            },
            "visible": false,
            "layout": "vertical"
        },
        {
            "textShadowBlurRadius": 3,
            "fontFamily": "Yu Gothic UI Semibold",
            "horizontalAlign": "left",
            "id": "Label_00A17887_1348_DCC0_41B0_641A5088276D",
            "backgroundOpacity": 0,
            "width": "97.54%",
            "textShadowColor": "#000000",
            "right": "0%",
            "textShadowHorizontalLength": 1,
            "borderRadius": 0,
            "minHeight": 1,
            "text": "Laboratorium Pembelajaran Kimia",
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "top": "0%",
            "bottom": "50%",
            "textShadowOpacity": 0.7,
            "minWidth": 1,
            "textShadowVerticalLength": 1,
            "verticalAlign": "middle",
            "height": "50%",
            "fontSize": "3vmin",
            "class": "Label",
            "paddingTop": 0,
            "fontStyle": "normal",
            "paddingBottom": 0,
            "borderSize": 0,
            "shadow": false,
            "left": "2.46%",
            "right": "0%",
            "data": {
                "name": "Gedung L lantai 1"
            },
            "fontWeight": "normal",
            "textDecoration": "none",
            "fontColor": "#F5F9F5"
        },
        {
            "textShadowBlurRadius": 3,
            "fontFamily": "Yu Gothic UI",
            "horizontalAlign": "left",
            "id": "Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D",
            "backgroundOpacity": 0,
            "width": "97.54%",
            "textShadowColor": "#000000",
            "right": "-0.26%",
            "textShadowHorizontalLength": 1,
            "borderRadius": 0,
            "minHeight": 1,
            "text": "Gedung L, Lantai 2",
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "textShadowOpacity": 0.7,
            "bottom": "0%",
            "minWidth": 1,
            "textShadowVerticalLength": 1,
            "height": "45%",
            "fontSize": "2.5vmin",
            "class": "Label",
            "fontStyle": "normal",
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "left": "2.46%",
            "right": "0%",
            "top": "50%",
            "bottom": "5%",
            "data": {
                "name": "Gedung L Judul"
            },
            "paddingBottom": 0,
            "fontWeight": "normal",
            "textDecoration": "none",
            "fontColor": "#F5F9F5"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
            "backgroundOpacity": 0.24,
            "width": 190,
            "scrollBarVisible": "rollOver",
            "left": "0%",
            "overflow": "scroll",
            "children": [
                "this.MapViewer"
            ],
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "backgroundColorRatios": [
                0,
                1
            ],
            "top": "0%",
            "backgroundColor": [
                "#FFFFFF",
                "#FFFFFF"
            ],
            "verticalAlign": "top",
            "minWidth": 1,
            "borderSize": 0,
            "class": "Container",
            "paddingTop": 0,
            "backgroundColorDirection": "vertical",
            "gap": 10,
            "paddingBottom": 0,
            "height": 190,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "minimap"
            },
            "layout": "absolute"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD",
            "backgroundOpacity": 0,
            "children": [
                "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
                "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140"
            ],
            "scrollBarVisible": "rollOver",
            "right": "0%",
            "width": "20.833%",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "overflow": "scroll",
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "top": "0%",
            "minWidth": 1,
            "verticalAlign": "top",
            "scrollBarWidth": 10,
            "class": "Container",
            "paddingTop": 0,
            "gap": 10,
            "paddingBottom": 0,
            "borderSize": 0,
            "height": "54.211%",
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "zoom in out"
            },
            "layout": "absolute"
        },
        {
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5,
            "id": "Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E",
            "backgroundOpacity": 0,
            "children": [
                "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
                "this.Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A"
            ],
            "scrollBarVisible": "rollOver",
            "left": "15%",
            "right": "15%",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "overflow": "visible",
            "paddingLeft": 0,
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingRight": 0,
            "top": "10%",
            "bottom": "10%",
            "minWidth": 1,
            "verticalAlign": "top",
            "borderSize": 0,
            "class": "Container",
            "paddingTop": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "Global"
            },
            "paddingBottom": 0,
            "layout": "absolute",
            "gap": 10
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217EC3D5_0187_C710_4172_725F69557464",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217E93D5_0187_C710_4168_7EECAE34388E",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_3_0.png",
                    "width": 600,
                    "class": "ImageResourceLevel",
                    "height": 900
                }
            ],
            "id": "AnimatedImageResource_324B1850_2A5C_70A7_41BE_9F94059FC9D4",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_1B8936A4_0187_C137_4157_CDA7B5BA22EC_0_HS_5_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_27D91F24_3F13_E3A1_41C8_446305B971BA",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_324CE850_2A5C_70A7_419F_221444C6FAB8",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_1C1B63E6_0188_C730_416A_E102A28938A8_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_324CA850_2A5C_70A7_41C1_ACAB5A0F80A6",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2173F3CF_0187_C770_4131_14B2921E0908",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2173A3CF_0187_C770_4179_E88122FC7EE2",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A371D07_0188_40F0_4168_5E0CB757ABE6_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F49CC83_034A_E512_4167_45B54316594C",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217483CF_0187_C770_4110_A7B34FDD78B8",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217453CF_0187_C770_4158_5ACDE6483A53",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_172243D6_02FA_2332_4173_8C10F4A10680",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CEEF1C_3F13_E361_4180_328E6E33841E",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3A76F5_0188_4111_4170_D6A3F67FF72B_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C90F1C_3F13_E361_41A4_6D3903A41D13",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_14DF33D6_02FA_2332_415E_9C9CF502B618",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_14DF73D6_02FA_2332_4180_020633192D48",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DC6F23_3F13_E3A7_41CA_B05DB46782A7",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_8_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DCDF23_3F13_E3A7_419A_7246EED0EBD6",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_9_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DF1F23_3F13_E3A7_41BE_22C3D2DF816E",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_10_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DFBF23_3F13_E3A7_41CA_8D70B9443ACE",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_11_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DFEF23_3F13_E3A7_41CD_C9B93A416CEC",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A4AE4A5_0189_C130_4177_3A00019A36E9_0_HS_12_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_27DE3F24_3F13_E3A1_41B5_1CAC591875AB",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2174E3CF_0187_C770_415C_651F444F2A71",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3850B4_0188_4110_4177_1AE0DDA5D482_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_117917D5_02CE_6336_414B_E97107F8B935",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_1_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_132BD57D_0199_C310_4124_55430B4E0D38",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_3_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1720A3D6_02FA_2332_4180_588DAF6C0754",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_4_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F4D1C83_034A_E512_417C_0EA013480D8A",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_19_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_24ADEF28_3F12_63A0_41C4_B1622ED60474",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_6_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F4C4C83_034A_E512_417B_8E0A5251AD4A",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_7_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F4CFC83_034A_E512_417E_560E8059B69B",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_8_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F4C9C83_034A_E512_417B_D46DD96987D9",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_9_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F4F4C83_034A_E512_4181_A0A37AC75875",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_15_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_27CD6F1A_3F13_E361_41BC_FD143A9D4D51",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_16_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CDAF1B_3F13_E367_41A3_666BF831237F",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_17_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CDFF1B_3F13_E367_41C1_8045DA35D2D5",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_18_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CC2F1B_3F13_E367_41AB_DCCC2C8E566B",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A38E874_0189_C110_4176_1AE8579BAF0C_0_HS_20_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CF1F1C_3F13_E361_41B6_8388D60CE97F",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217133D5_0187_C710_4160_2DCB84C238A2",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2170D3D5_0187_C710_4165_06C0D66EBF86",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217083D5_0187_C710_416D_829035D64324",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C0EF21_3F13_E3A3_41B8_ED236A73E427",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_8_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C3AF21_3F13_E3A3_417A_94657E88EF03",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_9_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C3FF21_3F13_E3A3_41CF_184B25FCAB10",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3BBBDB_0189_C710_416D_B75CEF238602_0_HS_10_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C20F22_3F13_E3A1_41A7_EFF7C1BD4D75",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A17A1D_01F8_4110_4171_EE6CA2EC67E2",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A1DA1D_01F8_4110_4162_02B4D24B4524",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A1EA1D_01F8_4110_4179_A659001A3B7B",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_9_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F553C83_034A_E512_4170_1702C1571D25",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_11_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CA8F1D_3F13_E363_41A4_B54A56456BCC",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_12_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27CACF1D_3F13_E363_41B6_F729638216DB",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_13_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C56F1D_3F13_E363_41C7_D7209631C16E",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_14_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C55F1D_3F13_E363_41CF_621D87AD65DF",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A3B0957_0188_4310_4171_529BD4203CE0_0_HS_15_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_27C5EF1F_3F13_E39F_41C9_6FA4F8056478",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2171D3D5_0187_C710_4163_2D2961CB19F9",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A75A2C_01F8_4137_4159_046F2235DE7E",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_5_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F57BC83_034A_E512_4181_BE6A36563F17",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C60F20_3F13_E3A0_41B2_CB758781B76C",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_8_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C6FF20_3F13_E3A1_41C8_F6BB459EE5C2",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_9_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C10F20_3F13_E3A1_41AB_7EDD4334A734",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36558D_0189_C3F0_4142_45B9D90E61FF_0_HS_10_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C14F20_3F13_E3A1_41CA_AB7ADCF2923D",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A38AE77_0189_C110_4171_BE63086A2049_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217F23D5_0187_C710_4177_2490C97A9068",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217023D5_0187_C710_4152_FF96CAAC6EDC",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217FC3D5_0187_C710_4177_B9A72003DF2F",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217F93D5_0187_C710_4170_B74AAB87D598",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C3FF22_3F13_E3A1_41C4_41A7023EE332",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C2AF22_3F13_E3A1_41B4_FEF08030AB22",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C29F22_3F13_E3A1_41B4_3B567E502DE6",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A310265_0189_C130_416B_AC54D2B2339F_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27DD3F23_3F13_E3A7_419C_456A512E700A",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_2172A3D5_0187_C710_4172_861C2FF6A282",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A09A1D_01F8_4110_4142_06A3BA86A4CA",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_217203D5_0187_C710_4169_E9ECFC3914CC",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_4_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_27C48F1F_3F13_E39F_41B9_AF12DDB16798",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A301F8A_0189_BFF0_4158_8F11989100B6_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_49B03F36_5E08_0C96_41B6_45337EE972F3",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F498C83_034A_E512_418A_4D4836B07055",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_29A10A1D_01F8_4110_4164_D6FFDDBB2A72",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 3,
            "frameCount": 9,
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_3_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1F48AC83_034A_E512_4173_15C5EA964A42",
            "rowCount": 3,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_27C8CF1D_3F13_E363_41C2_C44AA7D5288F",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "colCount": 4,
            "frameCount": 24,
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A36831A_0188_4710_4175_617FCB27EF2E_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2A407480_3F55_15EE_41C5_0CB91552DB95",
            "rowCount": 6,
            "class": "AnimatedImageResource"
        },
        {
            "maxHeight": 60,
            "horizontalAlign": "center",
            "id": "IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8",
            "backgroundOpacity": 0,
            "width": 60,
            "borderRadius": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 1,
            "mode": "toggle",
            "height": 60,
            "class": "IconButton",
            "pressedIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed.png",
            "transparencyActive": true,
            "click": "if(!this.Container_B1573269_BF46_B846_41AD_E3E55F50C328.get('visible')){ this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, false, 0, null, null, false) }",
            "paddingTop": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8.png",
            "data": {
                "name": "image button menu"
            },
            "paddingBottom": 0,
            "pressedRollOverIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed_rollover.png",
            "cursor": "hand",
            "maxWidth": 60
        },
        {
            "horizontalAlign": "center",
            "id": "IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832",
            "backgroundOpacity": 0,
            "width": 40,
            "borderRadius": 0,
            "minHeight": 0,
            "paddingLeft": 0,
            "rollOverIconURL": "skin/IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832_rollover.png",
            "propagateClick": true,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "minWidth": 0,
            "mode": "push",
            "height": 40,
            "class": "IconButton",
            "paddingTop": 0,
            "pressedIconURL": "skin/IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832_pressed.png",
            "transparencyActive": false,
            "click": "this.showPopupImage(this.ImageResource_943E6A59_8BFA_6D3A_4195_FE6D455603DC, null, '90%', '90%', this.FadeInEffect_943E4A59_8BFA_6D3A_41C2_C16BA464FC5E, this.FadeOutEffect_943EAA59_8BFA_6D3A_41A0_25FEB0A1362E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'paddingLeft':5,'pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
            "paddingBottom": 0,
            "borderSize": 0,
            "shadow": false,
            "iconURL": "skin/IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832.png",
            "data": {
                "name": "Information"
            },
            "pressedRollOverIconURL": "skin/IconButton_960132A0_8BFE_1D09_41D9_7051F5DBC832_pressed_rollover.png",
            "cursor": "hand"
        },
        {
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5,
            "id": "Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A",
            "backgroundOpacity": 0,
            "width": "100%",
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingLeft": 0,
            "propagateClick": false,
            "paddingRight": 0,
            "verticalAlign": "top",
            "minWidth": 1,
            "height": 140,
            "class": "Container",
            "paddingTop": 0,
            "gap": 10,
            "paddingBottom": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "data": {
                "name": "header"
            },
            "layout": "absolute"
        }],
        "paddingTop": 0,
        "paddingBottom": 0,
        "borderSize": 0,
        "height": "100%",
        "contentOpaque": false,
        "shadow": false,
        "buttonToggleFullscreen": "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
        "scrollBarColor": "#000000",
        "data": {
            "name": "Player1268"
        },
        "scripts": {
            "playAudioList": function (audios) { if (audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function () { if (++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
            "setPanoramaCameraWithSpot": function (playListItem, yaw, pitch) { var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
            "openLink": function (url, name) { if (url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if (extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if (isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
            "syncPlaylists": function (playLists) { var changeToMedia = function (media, playListDispatched) { for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (playList != playListDispatched) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { if (items[j].get('media') == media) { if (playList.get('selectedIndex') != j) { playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function (event) { var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if (selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function (event) { var panoramaMapLocation = event.source.get('panoramaMapLocation'); if (panoramaMapLocation) { var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for (var i = 0, count = playLists.length; i < count; ++i) { playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for (var i = 0, count = mapPlayers.length; i < count; ++i) { mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
            "getPanoramaOverlayByName": function (panorama, name) { var overlays = this.getOverlays(panorama); for (var i = 0, count = overlays.length; i < count; ++i) { var overlay = overlays[i]; var data = overlay.get('data'); if (data != undefined && data.label == name) { return overlay; } } return undefined; },
            "pauseGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; } if (audio.get('state') == 'playing') audio.pause(); },
            "playGlobalAudio": function (audio, endCallback) { var endFunction = function () { audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if (endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if (!audios) { audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if (audio.get('state') == 'playing') { return audio; } if (!audio.get('loop')) { audio.bind('end', endFunction, this); } audio.play(); return audio; },
            "unregisterKey": function (key) { delete window[key]; },
            "showWindow": function (w, autoCloseMilliSeconds, containsAudio) { if (w.get('visible') == true) { return; } var closeFunction = function () { clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function () { w.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
            "setMainMediaByName": function (name) { var items = this.mainPlayList.get('items'); for (var i = 0; i < items.length; ++i) { var item = items[i]; if (item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
            "shareTwitter": function (url) { window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
            "playGlobalAudioWhilePlay": function (playList, index, audio, endCallback) { var changeFunction = function (event) { if (event.data.previousSelectedIndex == index) { this.stopGlobalAudio(audio); if (isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if (endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if (audios && audio.get('id') in audios) { audio = audios[audio.get('id')]; if (audio.get('state') != 'playing') { audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if (isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if (audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for (var i = 0; i < stateChangeFunctions.length; ++i) { var f = stateChangeFunctions[i]; if (typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
            "getCurrentPlayers": function () { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
            "pauseGlobalAudiosWhilePlayItem": function (playList, index, exclude) { var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function () { if (playList.get('selectedIndex') != index) { if (hasState) { player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function (event) { var state = event.data.state; if (state == 'stopped') { this.resumeGlobalAudios(caller); } else if (state == 'playing') { this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if (hasState) { player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
            "setOverlayBehaviour": function (overlay, media, action) { var executeFunc = function () { switch (action) { case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if (overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if (window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function () { delete window.overlaysDispatched[id]; }, 2000); }; if (window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if (playList != undefined) { var item = this.getPlayListItemByMedia(playList, media); if (playList.get('items').indexOf(item) != playList.get('selectedIndex')) { var beginFunc = function (e) { item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
            "shareWhatsapp": function (url) { window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
            "getCurrentPlayerWithMedia": function (media) { var playerClass = undefined; var mediaPropertyName = undefined; switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if (playerClass != undefined) { var players = this.getByClassName(playerClass); for (var i = 0; i < players.length; ++i) { var player = players[i]; if (player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
            "setComponentVisibility": function (component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout) { var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if (keepVisibility) return; this.unregisterKey('visibility_' + component.get('id')); var changeVisibility = function () { if (effect && propertyEffect) { component.set(propertyEffect, effect); } component.set('visible', visible); if (component.get('class') == 'ViewerArea') { try { if (visible) component.restart(); else if (component.get('playbackState') == 'playing') component.pause(); } catch (e) { }; } }; var effectTimeoutName = 'effectTimeout_' + component.get('id'); if (!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)) { var effectTimeout = window[effectTimeoutName]; if (effectTimeout instanceof Array) { for (var i = 0; i < effectTimeout.length; i++) { clearTimeout(effectTimeout[i]) } } else { clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if (visible == component.get('visible') && !ignoreClearTimeout) return; if (applyAt && applyAt > 0) { var effectTimeout = setTimeout(function () { if (window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if (arrayTimeoutVal.length == 0) { delete window[effectTimeoutName]; } } else { delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if (window.hasOwnProperty(effectTimeoutName)) { window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; } else { window[effectTimeoutName] = effectTimeout; } } else { changeVisibility(); } },
            "getMediaFromPlayer": function (player) { switch (player.get('class')) { case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
            "getKey": function (key) { return window[key]; },
            "executeFunctionWhenChange": function (playList, index, endFunction, changeFunction) { var endObject = undefined; var changePlayListFunction = function (event) { if (event.data.previousSelectedIndex == index) { if (changeFunction) changeFunction.call(this); if (endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if (endFunction) { var playListItem = playList.get('items')[index]; if (playListItem.get('class') == 'PanoramaPlayListItem') { var camera = playListItem.get('camera'); if (camera != undefined) endObject = camera.get('initialSequence'); if (endObject == undefined) endObject = camera.get('idleSequence'); } else { endObject = playListItem.get('media'); } if (endObject) { endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
            "getMediaWidth": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxW = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('width') > maxW) maxW = r.get('width'); } return maxW; } else { return r.get('width') } default: return media.get('width'); } },
            "autotriggerAtStart": function (playList, callback, once) { var onChange = function (event) { callback(); if (once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
            "stopAndGoCamera": function (camera, ms) { var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function () { sequence.play(); }; setTimeout(timeoutFunction, ms); },
            "pauseCurrentPlayers": function (onlyPauseCameraIfPanorama) { var players = this.getCurrentPlayers(); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('state') == 'playing') { if (onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
            "getPlayListWithMedia": function (media, onlySelected) { var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (onlySelected && playList.get('selectedIndex') == -1) continue; if (this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
            "getPixels": function (value) { var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch (unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
            "keepComponentVisibility": function (component, keep) { var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if (value == undefined && keep) { this.registerKey(key, keep); } else if (value != undefined && !keep) { this.unregisterKey(key); } },
            "getPlayListItemByMedia": function (playList, media) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media) return item; } return undefined; },
            "init": function () { if (!Object.hasOwnProperty('values')) { Object.values = function (o) { return Object.keys(o).map(function (e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function (e) { var playList = e.source; var index = playList.get('selectedIndex'); if (index < 0) return; var id = playList.get('id'); if (!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
            "pauseGlobalAudios": function (caller, exclude) { if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = 0; j < objAudios.length; ++j) { var a = objAudios[j]; if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
            "initGA": function () { var sendFunc = function (category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for (var i = 0, countI = media.length; i < countI; ++i) { var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for (var j = 0, countJ = overlays.length; j < countJ; ++j) { var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch (overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z < areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for (var i = 0, countI = components.length; i < countI; ++i) { var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for (var i = 0, countI = items.length; i < countI; ++i) { var item = items[i]; var media = item.get('media'); if (!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
            "getMediaByName": function (name) { var list = this.getByClassName('Media'); for (var i = 0, count = list.length; i < count; ++i) { var media = list[i]; if ((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name) { return media; } } return undefined; },
            "historyGoBack": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.back(); } },
            "loadFromCurrentMediaPlayList": function (playList, delta) { var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while (newIndex < 0) { newIndex = totalItems + newIndex; }; if (currentIndex != newIndex) { playList.set('selectedIndex', newIndex); } },
            "updateVideoCues": function (playList, index) { var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if (video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function () { if (playList.get('selectedIndex') != index) { video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function (event) { var activeCues = event.data.activeCues; for (var i = 0, count = cues.length; i < count; ++i) { var cue = cues[i]; if (activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime') + 0.5)) { cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
            "getComponentByName": function (name) { var list = this.getByClassName('UIComponent'); for (var i = 0, count = list.length; i < count; ++i) { var component = list[i]; var data = component.get('data'); if (data != undefined && data.name == name) { return component; } } return undefined; },
            "setEndToItemIndex": function (playList, fromIndex, toIndex) { var endFunction = function () { if (playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
            "isCardboardViewMode": function () { var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
            "showPopupImage": function (image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback) { var self = this; var closed = false; var playerClickFunction = function () { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function () { zoomImage.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var resizeFunction = function () { setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function () { self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function () { timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if (toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if (loadedCallback) loadedCallback(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); closed = true; if (timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if (autoCloseMilliSeconds) clearAutoClose(); if (hideCallback) hideCallback(); zoomImage.set('visible', false); if (hideEffect && hideEffect.get('duration') > 0) { hideEffect.bind('end', endEffectFunction, this); } else { zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if (toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function () { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function () { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function () { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function () { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if (right < 10) right = 10; if (top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function () { if (timeoutUserInteractionID) { clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else { closeButton.set('visible', false); } }; var userInteractionEndFunction = function () { if (!closed) { timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function () { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function () { self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
            "historyGoForward": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.forward(); } },
            "setMainMediaByIndex": function (index) { var item = undefined; if (index >= 0 && index < this.mainPlayList.get('items').length) { this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
            "resumePlayers": function (players, onlyResumeCameraIfPanorama) { for (var i = 0; i < players.length; ++i) { var player = players[i]; if (onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.resumeCamera(); } else { player.play(); } } },
            "shareFacebook": function (url) { window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
            "showPopupMedia": function (w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios) { var self = this; var closeFunction = function () { playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if (stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if (isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function () { w.hide(); }; var resizeFunction = function () { var getWinValue = function (property) { return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if (!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if (parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if (windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if (windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if (autoCloseWhenFinished) { this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if (isVideo) { this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if (stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
            "getGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios != undefined && audio.get('id') in audios) { audio = audios[audio.get('id')]; } return audio; },
            "cloneCamera": function (camera) { var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
            "getMediaHeight": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxH = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('height') > maxH) maxH = r.get('height'); } return maxH; } else { return r.get('height') } default: return media.get('height'); } },
            "fixTogglePlayPauseButton": function (player) { var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if (typeof buttons !== 'undefined' && player.get('state') == 'playing') { if (!Array.isArray(buttons)) buttons = [buttons]; for (var i = 0; i < buttons.length; ++i) buttons[i].set('pressed', true); } },
            "getActivePlayerWithViewer": function (viewerArea) { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if (playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if ((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if (playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if (playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
            "loopAlbum": function (playList, index) { var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function () { player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
            "updateMediaLabelFromPlayList": function (playList, htmlText, playListItemStopToDispose) { var changeFunction = function () { var index = playList.get('selectedIndex'); if (index >= 0) { var beginFunction = function () { playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function (index) { var media = playListItem.get('media'); var text = media.get('data'); if (!text) text = media.get('label'); setHtml(text); }; var setHtml = function (text) { if (text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if (htmlText.get('html')) { setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else { setMediaLabel(index); } } }; var disposeFunction = function () { htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if (playListItemStopToDispose) { playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
            "registerKey": function (key, value) { window[key] = value; },
            "startPanoramaWithCamera": function (media, camera) { if (window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1) { return; } var playLists = this.getByClassName('PlayList'); if (playLists.length == 0) return; var restoreItems = []; for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')) { restoreItems.push({ camera: item.get('camera'), item: item }); item.set('camera', camera); } } } if (restoreItems.length > 0) { if (window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function () { var index = window.currentPanoramasWithCameraChanged.indexOf(media); if (index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
            "triggerOverlay": function (overlay, eventName) { if (overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for (var i = 0; i < areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
            "showPopupPanoramaOverlay": function (popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio) { var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if (!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function () { var loadedFunction = function () { if (!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function () { var restoreShowDurationFunction = function () { popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if (popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if (!imageHD) { imageHD = popupPanoramaOverlay.get('image'); } if (!toggleImageHD && toggleImage) { toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function () { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
            "setPanoramaCameraWithCurrentSpot": function (playListItem) { var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer == undefined) { return; } var playerClass = currentPlayer.get('class'); if (playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player') { return; } var fromMedia = currentPlayer.get('panorama'); if (fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
            "getPlayListItems": function (media, player) { var itemClass = (function () { switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length - 1; i >= 0; --i) { var item = items[i]; if (item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
            "setCameraSameSpotAsMedia": function (camera, media) { var player = this.getCurrentPlayerWithMedia(media); if (player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
            "existsKey": function (key) { return key in window; },
            "setStartTimeVideoSync": function (video, player) { this.setStartTimeVideo(video, player.get('currentTime')); },
            "stopGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; if (audio) { delete audios[audio.get('id')]; if (Object.keys(audios).length == 0) { window.currentGlobalAudios = undefined; } } } if (audio) audio.stop(); },
            "showComponentsWhileMouseOver": function (parentComponent, components, durationVisibleWhileOut) { var setVisibility = function (visible) { for (var i = 0, length = components.length; i < length; i++) { var component = components[i]; if (component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true) { setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function () { setVisibility(true); if (timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function () { var timeoutFunction = function () { setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
            "setMapLocation": function (panoramaPlayListItem, mapPlayer) { var resetFunction = function () { panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
            "visibleComponentsIfPlayerFlagEnabled": function (components, playerFlag) { var enabled = this.get(playerFlag); for (var i in components) { components[i].set('visible', enabled); } },
            "getOverlays": function (media) { switch (media.get('class')) { case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for (var j = 0; j < frames.length; ++j) { overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
            "changePlayListWithSameSpot": function (playList, newIndex) { var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
            "resumeGlobalAudios": function (caller) { if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length - 1; j >= 0; --j) { var a = audiosPaused[j]; if (objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i < count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
            "setMediaBehaviour": function (playList, index, mediaDispatcher) { var self = this; var stateChangeFunction = function (event) { if (event.data.state == 'stopped') { dispose.call(this, true); } }; var onBeginFunction = function () { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if (media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)) { player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function () { var index = playListDispatcher.get('selectedIndex'); if (index != -1) { indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function () { dispose.call(this, false); }; var dispose = function (forceDispose) { if (!playListDispatcher) return; var media = item.get('media'); if ((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if (panoramaSequence && panoramaSequenceIndex != -1) { if (panoramaSequence) { if (panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex - 1].get('class') == 'TargetPanoramaCameraMovement') { var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex - 1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function (event) { initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if (player) { item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for (var i = 0; i < buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if (sameViewerArea) { var currentMedia = this.getMediaFromPlayer(player); if (currentMedia == undefined || currentMedia == item.get('media')) { playListDispatcher.set('selectedIndex', indexDispatcher); } if (playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else { viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if (!mediaDispatcher) { var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if (!playListDispatcher) { playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if (playList.get('selectedIndex') == index || indexDispatcher == -1) { return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if (sameViewerArea) { if (playList != playListDispatcher) { playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else { viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if (camera) { panoramaSequence = camera.get('initialSequence'); if (panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function (property) { var value = player.get(property); if (value == undefined) return; if (Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for (var i = 0; i < buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if (player != itemDispatcher.get('player') || !mediaDispatcherByParam) { item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
            "changeBackgroundWhilePlay": function (playList, index, color) { var stopFunction = function (event) { playListItem.unbind('stop', stopFunction, this); if ((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))) { viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if ((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)) { viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
            "showPopupPanoramaVideoOverlay": function (popupPanoramaOverlay, closeButtonProperties, stopAudios) { var self = this; var showEndFunction = function () { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function () { if (!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if (stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function () { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if (stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
            "setStartTimeVideo": function (video, time) { var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function () { for (var i = 0; i < items.length; ++i) { var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for (var i = 0; i < items.length; ++i) { var item = items[i]; var player = item.get('player'); if (player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } }
        },
        "downloadEnabled": false,
        "defaultVRPointer": "laser",
        "gap": 10
    };


    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function (index) {
        if (this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function () {
        if (!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function () {
        if (!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function () {
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function () {
        return this.pointer >= 0 && this.pointer < this.list.length - 1;
    };
    //

    if (script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();




