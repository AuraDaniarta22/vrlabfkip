(function () {
    var script = {
        "start": "this.init(); this.playList_96CB5490_8BE6_E509_41D0_474D1130E098.set('selectedIndex', 0); this.playList_96CCB490_8BE6_E509_419D_AA85D357F623.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
        "backgroundPreloadEnabled": true,
        "children": [
            "this.MainViewer",
            "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "this.Container_2E0CDFDA_3EF1_E2E1_4194_4FFBFCE5299F",
            "this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "this.veilPopupPanorama",
            "this.zoomImagePopupPanorama",
            "this.closeButtonPopupPanorama"
        ],
        "id": "rootPlayer",
        "scrollBarColor": "#000000",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "mobileMipmappingEnabled": false,
        "vrPolyfillScale": 1,
        "width": "100%",
        "verticalAlign": "top",
        "paddingRight": 0,
        "layout": "absolute",
        "paddingLeft": 0,
        "minHeight": 20,
        "definitions": [{
            "viewerArea": "this.MainViewer",
            "id": "MainViewerVideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "items": [
                {
                    "media": "this.video_2F117E51_3EF1_E5E3_41C6_6B4D85E12D32",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_96CBF490_8BE6_E509_41E0_75CEF3956354, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_96CBF490_8BE6_E509_41E0_75CEF3956354, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_96CBF490_8BE6_E509_41E0_75CEF3956354",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 78.57,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_934485EE_8BE6_E716_41D4_0C63C0ED8F89",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 75.55,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9C02E54A_8BE6_E71E_41C1_0A975F24DFEB",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "thumbnailUrl": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0_t.jpg",
            "scaleMode": "fit_inside",
            "width": 2964,
            "loop": false,
            "id": "video_281955BC_0A56_3E06_4197_1E835277D5D0",
            "label": "Laboratorium komputer (3)",
            "class": "Video",
            "height": 1694,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1419.55,
                    "angle": 87.03,
                    "y": 593.52,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123824_00_035",
            "id": "panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1A3B474B_067E_1A03_419E_3352379C3F48",
                "this.overlay_1E6E4617_067E_1A03_40F9_61A56704D9E0",
                "this.overlay_1DD24E26_067E_0A02_4181_8FBC6F808FFF",
                "this.overlay_1ACA9111_0672_161E_4191_B70AAB9B74EA",
                "this.overlay_301B8236_3EFF_9DA0_41BF_474C5DE464BB",
                "this.overlay_1C1C4F00_0672_0BFD_4182_000CB66CBB30"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C",
                    "yaw": 84.43,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 0.94
                },
                {
                    "panorama": "this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02",
                    "yaw": 42.12,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -104.64
                },
                {
                    "panorama": "this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F",
                    "yaw": -101.43,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -104.45
                },
                {
                    "panorama": "this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F",
                    "yaw": -99.92,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -104.45
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2D415209_0AB2_1A0F_4193_0E51D91DB627",
            "yaw": 79.55,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_3.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 8.56,
            "class": "PopupPanoramaOverlay",
            "pitch": -2.97
        },
        {
            "initialPosition": {
                "yaw": -44.76,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93CF8577_8BE6_E7F7_41C5_DBB1C0F34F19",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -153.18,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_939145CA_8BE6_E71E_41D2_CB3F74EB98B4",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_0.png",
                    "width": 3712,
                    "class": "ImageResourceLevel",
                    "height": 5250
                },
                {
                    "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_1.png",
                    "width": 2896,
                    "class": "ImageResourceLevel",
                    "height": 4096
                },
                {
                    "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_2.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_3.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_2D415209_0AB2_1A0F_4193_0E51D91DB627_0_4.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2D414209_0AB2_1A0F_417B_693E4A1B175C",
            "class": "ImageResource"
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_3F06E654_2A3C_10AF_419C_CAA672FC614E",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_96CB0490_8BE6_E509_41BC_9118DF80DCFF",
            "class": "PlayList"
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C2F494_8BE6_E509_41C1_6AED8F4504E4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C2F494_8BE6_E509_41C1_6AED8F4504E4, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582VideoPlayer)",
                    "player": "this.viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C2F494_8BE6_E509_41C1_6AED8F4504E4",
            "class": "PlayList"
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C1A495_8BE6_E50B_41C5_B55580DA563D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C1A495_8BE6_E50B_41C5_B55580DA563D, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFBVideoPlayer)",
                    "player": "this.viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFBVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C1A495_8BE6_E50B_41C5_B55580DA563D",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 0.38,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9C172553_8BE6_E70E_41B7_B54DAEC451E3",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_3F06E654_2A3C_10AF_419C_CAA672FC614E",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_96CCB490_8BE6_E509_419D_AA85D357F623",
            "class": "PlayList"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958",
            "yaw": -166.15,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958_0_1.png",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 7.67,
            "class": "PopupPanoramaOverlay",
            "pitch": 2.58
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 225.46,
                    "angle": 38.19,
                    "y": 604.91,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123207_00_029",
            "hfovMin": "150%",
            "id": "panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C",
                    "yaw": 60.44,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -179.62
                },
                {
                    "panorama": "this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A",
                    "yaw": -33.81,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 145.44
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_12DBC6C0_06B2_FA7D_418B_B8BD7C7699D0",
                "this.overlay_10443454_06B2_1E05_4191_F8EF49B28CBD",
                "this.overlay_2B51C8B3_0AB2_1603_41A0_813B88E9F8BA",
                "this.overlay_2B5138B3_0AB2_1603_419B_ECFFF720A5F5",
                "this.overlay_2860A833_0AB3_F603_418B_F2C699762562",
                "this.overlay_2BDCAB38_0A72_33B9_418B_B30945F7BB07",
                "this.popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90",
                "this.popup_2B708838_0AB2_160D_4191_CEF19418F8C8",
                "this.popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4",
                "this.overlay_38B38F44_0BBE_13C8_41A0_F0E254213648",
                "this.overlay_38710039_0BB2_2DB8_4172_77164D194585",
                "this.popup_38103FAF_0BB2_1358_4192_CCE1046739EF"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_9380AE44_8BEA_250A_41C4_673D8A5E7E4C",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10571"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "initialPosition": {
                "yaw": -34.56,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93EEB55B_8BE6_E73E_4153_ADB2B9CAA302",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_9382FE44_8BEA_250A_41AA_C1DF949CE346",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFB"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10574"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "levels": [
                {
                    "url": "media/zoomImage_93D7E9CC_8BE7_EF1A_41C9_DD0B135593CF_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_93D7E9CC_8BE7_EF1A_41C9_DD0B135593CF_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_93D7E9CC_8BE7_EF1A_41C9_DD0B135593CF_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ],
            "id": "ImageResource_96DC7496_8BE6_E509_41CA_986B4E6B5265",
            "class": "ImageResource"
        },
        {
            "duration": 500,
            "id": "FadeOutEffect_96DC5496_8BE6_E509_41D7_62944F3FBBB8",
            "class": "FadeOutEffect",
            "easing": "cubic_out"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_209CA080_0A76_6D48_419B_E47FA4C680D0",
            "yaw": 128.32,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 7.62,
            "class": "PopupPanoramaOverlay",
            "pitch": 14.66,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -88.58,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93F8D56D_8BE6_E71A_41CC_8DBA33E7B2B0",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_2EE25834_0A7E_3D48_419E_B9BDB5E75114",
            "yaw": -123.61,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 5.75,
            "class": "PopupPanoramaOverlay",
            "pitch": 6.4,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "initialPosition": {
                "yaw": 146.19,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9301F626_8BE6_E516_41C5_331ED3520DBC",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 152.8,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_935905F7_8BE6_E6F6_41DA_477AB2BF5ADB",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "touchControlMode": "drag_rotation",
            "buttonCardboardView": "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "buttonToggleHotspots": "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "displayPlaybackBar": true,
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "viewerArea": "this.MainViewer",
            "id": "MainViewerPanoramaPlayer",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "gyroscopeVerticalDraggingEnabled": true,
            "class": "PanoramaPlayer",
            "buttonToggleGyroscope": "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "mouseControlMode": "drag_acceleration"
        },
        {
            "initialPosition": {
                "yaw": 0.38,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93A6D59B_8BE6_E73F_41D2_20931F2B452F",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_296F41B4_0A72_6F49_4193_E31832353C88",
            "yaw": -124.32,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 16.78,
            "class": "PopupPanoramaOverlay",
            "pitch": 37.01,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "thumbnailUrl": "media/video_2F117E51_3EF1_E5E3_41C6_6B4D85E12D32_t.jpg",
            "scaleMode": "fit_inside",
            "width": 2240,
            "loop": false,
            "id": "video_2F117E51_3EF1_E5E3_41C6_6B4D85E12D32",
            "label": "Virtual Reality (1)",
            "class": "Video",
            "height": 2240,
            "video": {
                "width": 2240,
                "mp4Url": "media/video_2F117E51_3EF1_E5E3_41C6_6B4D85E12D32.mp4",
                "class": "VideoResource",
                "height": 2240
            }
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90",
            "yaw": 78.26,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_3.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 4.66,
            "class": "PopupPanoramaOverlay",
            "pitch": 3.63
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 649.07,
                    "angle": 137.76,
                    "y": 1159.4,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123616_00_034",
            "id": "panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1B8453C8_0652_1A0D_4159_4D2958659CE8",
                "this.overlay_1B8443C8_0652_1A0D_4198_022EEC8D392D",
                "this.overlay_1B8473C8_0652_1A0D_4175_A6C51F57DF73",
                "this.overlay_1B8403C9_0652_1A0F_414E_A55E18756F72",
                "this.overlay_1B8433C9_0652_1A0F_4191_45851FEFA86F",
                "this.overlay_1B87F3C9_0652_1A0F_417E_2A435D568699",
                "this.overlay_1B87E3C9_0652_1A0F_4175_01D0653803AD",
                "this.overlay_1B87B3C9_0652_1A0F_4192_DABD88793C6B",
                "this.overlay_1B87A3C9_0652_1A0F_419B_162355E33431",
                "this.overlay_16D4308B_0AFE_7603_4178_93F368A811B4",
                "this.overlay_291F46EB_0AFE_1A03_4199_1B0BA9E492B7",
                "this.popup_2A1223CC_0AD6_FA05_4184_92549CC03285",
                "this.popup_178324D3_0AD2_FE03_4178_16C6EB766305",
                "this.overlay_28933868_0A56_760D_4182_7BD4A000BEFE",
                "this.overlay_2C18FAF6_0A7E_12C8_41A0_F36800AA67B9",
                "this.popup_2EE25834_0A7E_3D48_419E_B9BDB5E75114",
                "this.overlay_2A14C659_0A7E_15FB_418D_84B3F6B89E2E",
                "this.popup_2AF6E63E_0A7E_15B8_4191_B90CEEAFA7F1"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E",
                    "yaw": 26.82,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -94.06
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134"
                },
                {
                    "panorama": "this.panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C",
                    "yaw": 135.24,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -155.07
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546"
                },
                {
                    "panorama": "this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2",
                    "yaw": -104.64,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 42.12
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830"
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_939D7E46_8BEA_2516_41AE_D51C1EAFBC2E",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10576"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "initialPosition": {
                "yaw": 75.36,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9C302537_8BE6_E776_41D4_BFD893D2397E",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C16494_8BE6_E509_41C6_AE70B499ADDA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C16494_8BE6_E509_41C6_AE70B499ADDA, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2VideoPlayer)",
                    "player": "this.viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C16494_8BE6_E509_41C6_AE70B499ADDA",
            "class": "PlayList"
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_96CB7490_8BE6_E509_41D7_FC90889FD6AC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_96CB7490_8BE6_E509_41D7_FC90889FD6AC, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_96CB7490_8BE6_E509_41D7_FC90889FD6AC",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_camera",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_39753FBC_0BB2_12B8_4179_7561D1FA8826",
            "yaw": -105.94,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 7.02,
            "class": "PopupPanoramaOverlay",
            "pitch": 10.15,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_96CB5490_8BE6_E509_41D0_474D1130E098",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": -119.56,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93374613_8BE6_E50F_41D1_49AE46243877",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -120.69,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_937B55DC_8BE6_E73A_41C8_E3E3859D5046",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -172.26,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_939B55C1_8BE6_E70A_41D7_5C63DE6B6245",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -48.73,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_934F45E5_8BE6_E70A_41D0_13D5F66876A9",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -95.57,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9323060A_8BE6_E519_41DC_E421104837CD",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_2A1223CC_0AD6_FA05_4184_92549CC03285_0_0.png",
                    "width": 1280,
                    "class": "ImageResourceLevel",
                    "height": 720
                },
                {
                    "url": "media/popup_2A1223CC_0AD6_FA05_4184_92549CC03285_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2A1223CC_0AD6_FA05_4184_92549CC03285_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2A8C5839_0AD2_360F_4165_9FFC5FD9DC7B",
            "class": "ImageResource"
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C04495_8BE6_E50B_41D0_303209167CF9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C04495_8BE6_E50B_41D0_303209167CF9, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9VideoPlayer)",
                    "player": "this.viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C04495_8BE6_E50B_41D0_303209167CF9",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 2.46,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93BBE5A4_8BE6_E70A_419B_1DC7816B19E4",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 60.82,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_936695D3_8BE6_E70E_41D0_3CC26FE26855",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -28.14,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_968364BD_8BE6_E57A_41DF_6074C14D4A99",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C0E495_8BE6_E50B_41CB_2D07BF7D2FEA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C0E495_8BE6_E50B_41CB_2D07BF7D2FEA, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2VideoPlayer)",
                    "player": "this.viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C0E495_8BE6_E50B_41CB_2D07BF7D2FEA",
            "class": "PlayList"
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 200.89,
                    "angle": -63.26,
                    "y": 2422.4,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123021_00_026",
            "hfovMin": "150%",
            "id": "panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6",
                    "yaw": 155.63,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -27.2
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830"
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_13EBFBCE_06D2_0A05_4181_C40D7EA73FB6",
                "this.overlay_147887D2_06D2_7A1D_4190_4F9F79F6C910",
                "this.overlay_2D8A8E2D_0A72_F558_419F_C2BA5EFD7DAF",
                "this.popup_2C649E03_0A72_F548_41A0_50F482DEA885"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "initialPosition": {
                "yaw": -33.62,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93B015AD_8BE6_E71A_41D3_DE5C6E5D8BED",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 226.71,
                    "angle": 39.03,
                    "y": 89.07,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123252_00_030",
            "id": "panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_10BA057C_06BE_FE05_4175_9AEF1DB5C00E",
                "this.overlay_1015911F_06BE_3602_418E_1DDACE70065F",
                "this.overlay_33622F95_3EF3_E363_41B2_C18F43F76016",
                "this.overlay_320B2D46_3EF2_A7E1_41C8_F58E26D0C707"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134",
                    "yaw": 59.31,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -135.42
                },
                {
                    "panorama": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040",
                    "yaw": 145.44,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -33.81
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 624.32,
                    "angle": -59.54,
                    "y": 2428.45,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_122954_00_025",
            "hfovMin": "150%",
            "id": "panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA",
                    "yaw": -27.2,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 155.63
                },
                {
                    "panorama": "this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7",
                    "yaw": 142.41,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 151.86
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_14BC3E78_06D6_0A0D_4170_B59BF680581F",
                "this.overlay_144A80A9_06D6_F60F_419C_23D36CFD28CD",
                "this.overlay_2C58D54E_0A52_FE05_4137_464CBDB0F4FC",
                "this.overlay_2A96D214_0A72_6D48_419A_70BB39843A29",
                "this.popup_296F41B4_0A72_6F49_4193_E31832353C88"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_96CCD490_8BE6_E509_41DA_2FE320B951C0",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": -179.06,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_966734D2_8BE6_E509_41DD_F33557D9C556",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1093.34,
                    "angle": 88.09,
                    "y": 593.52,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123425_00_032",
            "id": "panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1F3CE7C6_06B2_FA05_4194_560D90EF98DB",
                "this.overlay_1F0CB7EE_06B2_3A02_4196_B950C3388BAC",
                "this.overlay_1F03830B_06B2_7A03_419A_409FDC8B41C9",
                "this.overlay_1A3F886A_06B2_160D_4179_2E58AF8CF575",
                "this.overlay_2D20B229_0AB2_1A0F_4198_917A678E0BC5",
                "this.overlay_2B88269A_0AB6_1A0D_4195_7406D39285C9",
                "this.popup_2A8D7960_0AB6_163D_419A_11A867D54C57",
                "this.overlay_2890A972_0A56_161D_419B_2D242AFD6226",
                "this.popup_2D415209_0AB2_1A0F_4193_0E51D91DB627",
                "this.overlay_39559034_0BB2_2D48_4189_9A7961CA37D2",
                "this.popup_39753FBC_0BB2_12B8_4179_7561D1FA8826",
                "this.overlay_30027219_3EF3_9D63_4195_457676AF905A",
                "this.overlay_30039219_3EF3_9D63_41C7_7EA0856C7BE9"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134",
                    "yaw": -119.18,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 106.34
                },
                {
                    "panorama": "this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2",
                    "yaw": 0.94,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 84.43
                },
                {
                    "panorama": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040",
                    "yaw": -179.62,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 60.44
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "viewerArea": "this.MapViewer",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "movementMode": "constrained",
            "id": "MapViewerMapPlayer",
            "class": "MapPlayer"
        },
        {
            "levels": [
                {
                    "url": "media/popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958_0_0.png",
                    "width": 1280,
                    "class": "ImageResourceLevel",
                    "height": 720
                },
                {
                    "url": "media/popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2B31CE53_0AB2_0A03_4192_45F552D1F93F",
            "class": "ImageResource"
        },
        {
            "items": [
                "this.PanoramaPlayListItem_96CA1491_8BE6_E50B_41D6_C401D824E0A2",
                "this.PanoramaPlayListItem_96C92491_8BE6_E50B_41DF_EE2C6E80E5DA",
                "this.PanoramaPlayListItem_96C98491_8BE6_E50B_41D9_598EFD23747C",
                "this.PanoramaPlayListItem_96C81492_8BE6_E509_41D9_FE4CA12C38F2",
                "this.PanoramaPlayListItem_96C74492_8BE6_E509_41C2_8DB18A75816A",
                "this.PanoramaPlayListItem_96C7D492_8BE6_E509_41D6_4C952B8231A8",
                "this.PanoramaPlayListItem_96C61492_8BE6_E509_41E0_6C7E7715C07B",
                "this.PanoramaPlayListItem_96C56492_8BE6_E509_41AA_44476C552047",
                "this.PanoramaPlayListItem_96C5F493_8BE6_E50F_41DB_1C42BE253D36",
                "this.PanoramaPlayListItem_96C44493_8BE6_E50F_41C8_AC152E10A130",
                "this.PanoramaPlayListItem_96C4A493_8BE6_E50F_41D4_DB2B44578317",
                "this.PanoramaPlayListItem_96C5B493_8BE6_E50F_41DC_06EB5DB48DCB",
                "this.PanoramaPlayListItem_96C40493_8BE6_E50F_41D0_E0E510258BF3",
                "this.PanoramaPlayListItem_96C37494_8BE6_E509_41CB_303DA828B997",
                "this.PanoramaPlayListItem_96C3C494_8BE6_E509_4186_F1CEF55CC48E"
            ],
            "id": "mainPlayList",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_camera",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2B708838_0AB2_160D_4191_CEF19418F8C8",
            "yaw": 83.56,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2B708838_0AB2_160D_4191_CEF19418F8C8_0_1.png",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 7.64,
            "class": "PopupPanoramaOverlay",
            "pitch": 6.04
        },
        {
            "fieldOfViewOverlayOutsideColor": "#000000",
            "label": "bigmap",
            "id": "map_3F06E654_2A3C_10AF_419C_CAA672FC614E",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "maximumZoomFactor": 1.2,
            "overlays": [
                "this.overlay_3FAD0AF0_2A24_3167_41A6_053185D5BEFA",
                "this.overlay_3FAD7AF0_2A24_3167_41A9_E42E6F3636D0",
                "this.overlay_3FAD5AF0_2A24_3167_41A3_A6990286F421",
                "this.overlay_3FADBAF0_2A24_3167_41B3_8EA529BD38ED",
                "this.overlay_3FADCAF0_2A24_3167_41C0_493985AB4628",
                "this.overlay_3FADDAF0_2A24_3167_41C4_B55B983C518B",
                "this.overlay_3FACAAF0_2A24_3167_41BF_873F393CCBF5",
                "this.overlay_3FAC8AF2_2A24_316B_41C1_C7FA34B94E21",
                "this.overlay_3FACFAF2_2A24_316B_41A9_96EE67D92056",
                "this.overlay_3FAD2AF2_2A24_316B_41AE_A32D849AF0A8",
                "this.overlay_3FAD0AF2_2A24_316B_41C0_A6892E2BBFC9",
                "this.overlay_3FAD6AF2_2A24_316B_41B3_8FE9F2C03890",
                "this.overlay_3F5A6E14_2A24_10AF_419A_3F976178F733",
                "this.overlay_3F5A0E14_2A24_10AF_41BD_881D786F593C",
                "this.overlay_3F45DE14_2A24_10AF_41B0_E851E9FCF261"
            ],
            "width": 2083,
            "fieldOfViewOverlayRadiusScale": 0.3,
            "initialZoomFactor": 1,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E.png",
                        "width": 2083,
                        "class": "ImageResourceLevel",
                        "height": 2500
                    },
                    {
                        "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_lq.png",
                        "width": 233,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 280
                    }
                ]
            },
            "class": "Map",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "thumbnailUrl": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_t.png",
            "scaleMode": "fit_inside",
            "minimumZoomFactor": 0.5,
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "height": 2500
        },
        {
            "levels": [
                {
                    "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_0.png",
                    "width": 3712,
                    "class": "ImageResourceLevel",
                    "height": 5250
                },
                {
                    "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_1.png",
                    "width": 2896,
                    "class": "ImageResourceLevel",
                    "height": 4096
                },
                {
                    "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_2.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_3.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_4.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2B4F2E46_0AB2_0A05_4193_1692F5F776E7",
            "class": "ImageResource"
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 633.58,
                    "angle": 89.38,
                    "y": 1856.34,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_124130_00_038",
            "id": "panorama_0E3757C5_05AE_1A07_4191_3551B2E75546",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_195BA6EA_065E_3A0D_4198_73CA64937B34",
                "this.overlay_1AAC377B_065E_7A02_416D_E535EF6F214F"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E",
                    "yaw": 7.74,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -177.54
                },
                {
                    "panorama": "this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830",
                    "yaw": -179.62,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 146.38
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "duration": 500,
            "id": "FadeInEffect_96DC4496_8BE6_E509_41BD_2ED3D2DCB617",
            "class": "FadeInEffect",
            "easing": "cubic_in"
        },
        {
            "initialPosition": {
                "yaw": -73.66,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_932D5601_8BE6_E50B_41D6_6466F34FE71A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -137.88,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93AF2592_8BE6_E709_41C0_BF8A7039A692",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_93803E44_8BEA_250A_41DE_8C8857EB464D",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10572"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_2C649E03_0A72_F548_41A0_50F482DEA885",
            "yaw": 170.43,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 10.2,
            "class": "PopupPanoramaOverlay",
            "pitch": 21.9,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_2AF6E63E_0A7E_15B8_4191_B90CEEAFA7F1",
            "yaw": 56.72,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 3.39,
            "class": "PopupPanoramaOverlay",
            "pitch": 10.19,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -37.59,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93E3D564_8BE6_E70A_41CB_266773B325D8",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1026.92,
                    "angle": 82.42,
                    "y": 1864,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_122616_00_023",
            "hfovMin": "150%",
            "id": "panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7",
                    "yaw": 91.42,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -116.25
                },
                {
                    "panorama": "this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546",
                    "yaw": -177.54,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 7.74
                },
                {
                    "panorama": "this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02",
                    "yaw": -94.06,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 26.82
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_17E58FA8_06D2_0A0D_4199_7CB378171050",
                "this.overlay_17DB6F0B_06D2_0A03_418B_BF62316E4B0D",
                "this.overlay_299BA569_0A72_17D8_418C_B6EDEC989884",
                "this.overlay_20B520CD_0A76_6ED8_419D_6AF9BCB0FFEB",
                "this.popup_209CA080_0A76_6D48_419B_E47FA4C680D0"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "fieldOfViewOverlayOutsideColor": "#000000",
            "label": "minimap",
            "id": "map_2B68880C_0A52_FD58_417D_95178D044B10",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "maximumZoomFactor": 3,
            "overlays": [
                "this.overlay_29C09D0C_0A52_7758_4184_438BFC8A9436",
                "this.overlay_29D0C357_0A51_F3C8_4193_4202D53470F3",
                "this.overlay_2C2C450F_0A56_1758_41A0_7AB7DFEE04FE",
                "this.overlay_29CA04CF_0A56_36D8_41A0_080C586DEB51",
                "this.overlay_2B78A218_0A56_2D78_4154_5B78D041462C",
                "this.overlay_29CE0144_0A56_6FC8_4181_21945F6DBAFE",
                "this.overlay_2B56CC62_0A56_15C8_4194_65732EBF21C9",
                "this.overlay_2CEC6CA6_0A56_1548_4185_F15004D7C69E",
                "this.overlay_2AEF8619_0A56_1578_4177_557B816BCF8A",
                "this.overlay_2CA08C5C_0A56_75F8_4175_B42183831BD4",
                "this.overlay_2EA5E864_0A56_3DC8_418C_B4B1FCDA1A8B",
                "this.overlay_2C845AC6_0A56_12C8_4180_6690F5D4FF19",
                "this.overlay_2AA68E8E_0A56_1558_4195_300D9116E70A",
                "this.overlay_2C25BDEE_0A56_36D8_419D_EFC212EA94C0",
                "this.overlay_293835CD_0A56_76D8_4191_A711A581D6D6"
            ],
            "width": 2083,
            "fieldOfViewOverlayRadiusScale": 0.14,
            "initialZoomFactor": 2,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10.png",
                        "width": 2083,
                        "class": "ImageResourceLevel",
                        "height": 2500
                    },
                    {
                        "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_lq.png",
                        "width": 233,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 280
                    }
                ]
            },
            "class": "Map",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "thumbnailUrl": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_t.png",
            "scaleMode": "fit_inside",
            "minimumZoomFactor": 0.5,
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "height": 2500
        },
        {
            "levels": [
                {
                    "url": "media/popup_2B708838_0AB2_160D_4191_CEF19418F8C8_0_0.png",
                    "width": 1280,
                    "class": "ImageResourceLevel",
                    "height": 720
                },
                {
                    "url": "media/popup_2B708838_0AB2_160D_4191_CEF19418F8C8_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2B708838_0AB2_160D_4191_CEF19418F8C8_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2B70E838_0AB2_160D_417C_0E7B87E521CB",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_0.png",
                    "width": 3712,
                    "class": "ImageResourceLevel",
                    "height": 5250
                },
                {
                    "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_1.png",
                    "width": 2896,
                    "class": "ImageResourceLevel",
                    "height": 4096
                },
                {
                    "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_2.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_3.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90_0_4.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2A8D382E_0AB2_1605_4189_2D65425A5D2E",
            "class": "ImageResource"
        },
        {
            "initialPosition": {
                "yaw": 85.94,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93C4A580_8BE6_E709_41C0_0907FE562571",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_93836E44_8BEA_250A_41D8_65C4C5661B31",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10573"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 602.24,
                    "angle": 43.91,
                    "y": 86.57,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123352_00_031",
            "id": "panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1075A350_06BE_1A1D_4192_F6BAA5D20E6A",
                "this.overlay_1F83C9F4_06BE_3605_418E_3DAA7E97C634",
                "this.overlay_2C69B084_0A76_6D48_4195_DA3D76BB802E",
                "this.overlay_2CC5F41D_0A76_7578_4190_18D84C192258"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C",
                    "yaw": 106.34,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -119.18
                },
                {
                    "panorama": "this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A",
                    "yaw": -135.42,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 59.31
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_93822E46_8BEA_2516_41D2_9E99B81848D7",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10575"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4",
            "yaw": -172.3,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4_0_3.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 4.67,
            "class": "PopupPanoramaOverlay",
            "pitch": -1.22
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1841.74,
                    "angle": 39.18,
                    "y": 256.62,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_124008_00_036",
            "id": "panorama_0E78D269_05AE_3A0F_4194_073D5A49809B",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1BB85E6D_066E_0A07_4196_A5A34984B5FA"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F",
                    "yaw": 131.27,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -20.97
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2A1223CC_0AD6_FA05_4184_92549CC03285",
            "yaw": -77.78,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2A1223CC_0AD6_FA05_4184_92549CC03285_0_1.png",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 7.65,
            "class": "PopupPanoramaOverlay",
            "pitch": 5.24
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1034.4,
                    "angle": 128.33,
                    "y": 2432.19,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_122655_00_024",
            "hfovMin": "150%",
            "id": "panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6",
                    "yaw": 151.86,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 142.41
                },
                {
                    "panorama": "this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E",
                    "yaw": -116.25,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 91.42
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_162745F3_06D6_1E03_4192_4164B1776F54",
                "this.overlay_152C9A08_06D6_0A0D_4159_B8BE986F3424"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "levels": [
                {
                    "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_0.png",
                    "width": 3712,
                    "class": "ImageResourceLevel",
                    "height": 5250
                },
                {
                    "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_1.png",
                    "width": 2896,
                    "class": "ImageResourceLevel",
                    "height": 4096
                },
                {
                    "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_2.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_3.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_4.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_178EA809_0AB3_F60F_4186_C50C59D04D1A",
            "class": "ImageResource"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_2A8D7960_0AB6_163D_419A_11A867D54C57",
            "yaw": 83.9,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_2A8D7960_0AB6_163D_419A_11A867D54C57_0_1.png",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 576
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 11.83,
            "class": "PopupPanoramaOverlay",
            "pitch": 7.9
        },
        {
            "initialPosition": {
                "yaw": 24.93,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_93DA4589_8BE6_E71B_41D2_3FCC596D811A",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 159.03,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_969504C7_8BE6_E516_41DC_C6C729DA6614",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 75.55,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9C097541_8BE6_E70A_41DF_8D04ADB07860",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": -24.37,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_968EB4B3_8BE6_E50E_41C1_3590ECA259E6",
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
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "horizontalAlign": "center",
            "bodyPaddingRight": 0,
            "id": "window_93811E44_8BEA_250A_41DD_3712C93277AE",
            "scrollBarColor": "#000000",
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "bodyPaddingTop": 0,
            "verticalAlign": "middle",
            "closeButtonPaddingTop": 5,
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "layout": "vertical",
            "paddingLeft": 0,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "bodyBackgroundOpacity": 0,
            "minHeight": 20,
            "closeButtonPressedBackgroundOpacity": 0.3,
            "modal": true,
            "headerPaddingLeft": 10,
            "shadowOpacity": 0.5,
            "shadowHorizontalLength": 3,
            "backgroundColor": [],
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "veilColorRatios": [
                0,
                1
            ],
            "minWidth": 20,
            "borderSize": 0,
            "closeButtonBackgroundColorDirection": "vertical",
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBorderColor": "#000000",
            "bodyPaddingBottom": 0,
            "closeButtonRollOverIconLineWidth": 5,
            "closeButtonRollOverBorderColor": "#000000",
            "titlePaddingTop": 5,
            "closeButtonRollOverIconColor": "#666666",
            "class": "Window",
            "footerBackgroundOpacity": 0,
            "propagateClick": false,
            "footerHeight": 5,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadow": true,
            "overflow": "scroll",
            "backgroundOpacity": 1,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "veilOpacity": 0.4,
            "headerPaddingRight": 0,
            "closeButtonRollOverBorderSize": 0,
            "children": [
                "this.viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081"
            ],
            "titleFontSize": "1.29vmin",
            "closeButtonIconHeight": 20,
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "titleFontFamily": "Arial",
            "paddingRight": 0,
            "closeButtonIconColor": "#000000",
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "headerVerticalAlign": "middle",
            "closeButtonBackgroundOpacity": 0.3,
            "closeButtonPaddingRight": 5,
            "scrollBarMargin": 2,
            "backgroundColorRatios": [],
            "titlePaddingRight": 5,
            "headerPaddingTop": 10,
            "shadowSpread": 1,
            "headerPaddingBottom": 5,
            "closeButtonPaddingLeft": 5,
            "backgroundColorDirection": "vertical",
            "titlePaddingBottom": 5,
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonBorderSize": 0,
            "closeButtonBorderRadius": 0,
            "paddingBottom": 0,
            "contentOpaque": false,
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "paddingTop": 0,
            "closeButtonPaddingBottom": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "gap": 10,
            "headerBackgroundOpacity": 0,
            "closeButtonPressedBorderColor": "#000000",
            "titlePaddingLeft": 5,
            "bodyPaddingLeft": 0,
            "shadowVerticalLength": 0,
            "closeButtonIconLineWidth": 5,
            "closeButtonPressedIconColor": "#888888",
            "bodyBackgroundColorDirection": "vertical",
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "borderRadius": 5,
            "scrollBarWidth": 10,
            "data": {
                "name": "Window10570"
            },
            "footerBackgroundColorDirection": "vertical",
            "headerBackgroundColorDirection": "vertical",
            "closeButtonPressedBorderSize": 0,
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonIconWidth": 20,
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ]
        },
        {
            "initialPosition": {
                "yaw": 63.75,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_938665B7_8BE6_E776_41D5_F3CA508E77F9",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "initialPosition": {
                "yaw": 44.58,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_930B061D_8BE6_E53B_4183_427DD87DF0D7",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 194.12,
                    "angle": -104.23,
                    "y": 1197.33,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123553_00_033",
            "id": "panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1ED20062_0652_163D_4189_F6020A77A647",
                "this.overlay_1ED3F062_0652_163D_4160_D0DEEBEACA60",
                "this.overlay_1ED3E062_0652_163D_419D_9E5425D94739",
                "this.overlay_2B134E88_0AB2_0A0E_4181_33E9171EFFBC",
                "this.overlay_2B13BE88_0AB2_0A0E_41A0_973194D03AC6",
                "this.popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4",
                "this.popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02",
                    "yaw": -155.07,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 135.24
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040"
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "levels": [
                {
                    "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_0.png",
                    "width": 3712,
                    "class": "ImageResourceLevel",
                    "height": 5250
                },
                {
                    "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_1.png",
                    "width": 2896,
                    "class": "ImageResourceLevel",
                    "height": 4096
                },
                {
                    "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_2.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_3.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_4.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_2A8D9834_0AD2_3605_419B_94739E4D31AA",
            "class": "ImageResource"
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 212.29,
                    "angle": -27.41,
                    "y": 1846.9,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_123055_00_027",
            "hfovMin": "150%",
            "id": "panorama_0E181F5E_05AE_0A05_416D_04530F9BD830",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C"
                },
                {
                    "panorama": "this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546",
                    "yaw": 146.38,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -179.62
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_12288C4B_06AE_0E03_4158_3469EFDC24AE",
                "this.overlay_1468CCC8_06AE_0E0D_4185_995BD185CEFA",
                "this.overlay_28A918BC_0A72_1605_4196_F5993A1D0AC6"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/f/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/l/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/u/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/r/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/b/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_0/d/2/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "viewerArea": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "movementMode": "constrained",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
            "class": "MapPlayer"
        },
        {
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out"
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/popup_2A8D7960_0AB6_163D_419A_11A867D54C57_0_0.png",
                    "width": 1280,
                    "class": "ImageResourceLevel",
                    "height": 720
                },
                {
                    "url": "media/popup_2A8D7960_0AB6_163D_419A_11A867D54C57_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 576
                },
                {
                    "url": "media/popup_2A8D7960_0AB6_163D_419A_11A867D54C57_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 288
                }
            ],
            "id": "ImageResource_2C30B1F0_0A72_2EC8_4172_E20A21E8BFF0",
            "class": "ImageResource"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "hideDuration": 500,
            "autoplay": true,
            "id": "popup_38103FAF_0BB2_1358_4192_CCE1046739EF",
            "yaw": 29.87,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "hideEasing": "cubic_out",
            "loop": false,
            "popupMaxHeight": "95%",
            "popupDistance": 100,
            "hfov": 5.06,
            "class": "PopupPanoramaOverlay",
            "pitch": 6.67,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C13495_8BE6_E50B_41C6_95DF41B5217C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C13495_8BE6_E50B_41C6_95DF41B5217C, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396VideoPlayer)",
                    "player": "this.viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C13495_8BE6_E50B_41C6_95DF41B5217C",
            "class": "PlayList"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4",
            "yaw": 172.7,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4_0_3.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 4.58,
            "class": "PopupPanoramaOverlay",
            "pitch": 11.2
        },
        {
            "items": [
                {
                    "media": "this.video_281955BC_0A56_3E06_4197_1E835277D5D0",
                    "start": "this.viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96C22494_8BE6_E509_41DF_B87752C110A3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96C22494_8BE6_E509_41DF_B87752C110A3, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081VideoPlayer)",
                    "player": "this.viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_96C22494_8BE6_E509_41DF_B87752C110A3",
            "class": "PlayList"
        },
        {
            "rotationY": 0,
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "showDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_178324D3_0AD2_FE03_4178_16C6EB766305",
            "yaw": -85.37,
            "rotationZ": 0,
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "popupMaxHeight": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_178324D3_0AD2_FE03_4178_16C6EB766305_0_3.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "popupDistance": 100,
            "hfov": 4.67,
            "class": "PopupPanoramaOverlay",
            "pitch": -1.63
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_2B68880C_0A52_FD58_417D_95178D044B10",
                    "x": 1846.72,
                    "angle": 18.57,
                    "y": 563.43,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_124037_00_037",
            "id": "panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F",
            "pitch": 0,
            "partial": false,
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_1C8A620E_066E_7A05_4149_471833476516",
                "this.overlay_1B11BC54_066E_0E05_4195_F10B223BEA83"
            ],
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0E78D269_05AE_3A0F_4194_073D5A49809B",
                    "yaw": -20.97,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 131.27
                },
                {
                    "panorama": "this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2",
                    "yaw": -104.45,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -101.43
                }
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/f/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/l/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/u/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/r/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/b/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0/d/3/{row}_{column}.jpg",
                                "colCount": 1,
                                "rowCount": 1,
                                "width": 512,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame"
                }
            ]
        },
        {
            "toolTipOpacity": 1,
            "playbackBarHeadWidth": 6,
            "id": "MainViewer",
            "left": 0,
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "propagateClick": true,
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "toolTipBackgroundColor": "#F6F6F6",
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 0,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "2vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "fade_out_fade_in",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "top": 0,
            "playbackBarLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 5,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Main Viewer"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "borderRadius": 0,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10
        },
        {
            "children": [
                "this.Container_B1571269_BF46_B846_41D9_B94D861499DF",
                "this.Container_B1573269_BF46_B846_41AD_E3E55F50C328"
            ],
            "id": "Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "scrollBarColor": "#000000",
            "width": 115.05,
            "scrollBarOpacity": 0.5,
            "right": "0%",
            "scrollBarVisible": "rollOver",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "0.13%",
            "contentOpaque": false,
            "height": 605.05,
            "minWidth": 1,
            "borderSize": 0,
            "paddingBottom": 0,
            "scrollBarMargin": 2,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": true,
            "data": {
                "name": "--SETTINGS"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "left"
        },
        {
            "children": [
                "this.Label_00A17887_1348_DCC0_41B0_641A5088276D",
                "this.Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D"
            ],
            "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "left": "0.29%",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "width": "85%",
            "verticalAlign": "top",
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "1.2%",
            "paddingRight": 0,
            "scrollBarMargin": 2,
            "minWidth": 350,
            "contentOpaque": false,
            "borderSize": 0,
            "height": "11.004%",
            "paddingBottom": 0,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": true,
            "data": {
                "name": "Tittle"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "left"
        },
        {
            "children": [
                "this.Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
                "this.Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD"
            ],
            "id": "Container_2E0CDFDA_3EF1_E2E1_4194_4FFBFCE5299F",
            "left": "2.21%",
            "width": 240,
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "bottom": "3.09%",
            "height": 190,
            "minWidth": 1,
            "borderSize": 0,
            "paddingBottom": 0,
            "gap": 10,
            "paddingTop": 0,
            "class": "Container",
            "propagateClick": false,
            "data": {
                "name": "minimap + zoom"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "left"
        },
        {
            "borderRadius": 0,
            "children": [
                "this.Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E"
            ],
            "id": "Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "left": "0%",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "right": "0%",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "creationPolicy": "inAdvance",
            "top": "0%",
            "backgroundColorRatios": [
                0,
                1
            ],
            "bottom": "0%",
            "backgroundColor": [
                "#000000",
                "#000000"
            ],
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "contentOpaque": false,
            "borderSize": 0,
            "paddingBottom": 0,
            "scrollBarMargin": 2,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": true,
            "data": {
                "name": "---FLOORPLAN"
            },
            "shadow": false,
            "overflow": "scroll",
            "visible": false,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.6,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
            "horizontalAlign": "left"
        },
        {
            "borderRadius": 0,
            "id": "veilPopupPanorama",
            "left": 0,
            "right": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "top": 0,
            "backgroundColorRatios": [
                0
            ],
            "bottom": 0,
            "backgroundColor": [
                "#000000"
            ],
            "minWidth": 0,
            "backgroundColorDirection": "vertical",
            "borderSize": 0,
            "paddingBottom": 0,
            "class": "UIComponent",
            "paddingTop": 0,
            "propagateClick": false,
            "data": {
                "name": "UIComponent11970"
            },
            "shadow": false,
            "visible": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "backgroundOpacity": 0.55
        },
        {
            "borderRadius": 0,
            "id": "zoomImagePopupPanorama",
            "left": 0,
            "right": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "top": 0,
            "backgroundColorRatios": [],
            "bottom": 0,
            "backgroundColor": [],
            "minWidth": 0,
            "backgroundColorDirection": "vertical",
            "borderSize": 0,
            "paddingBottom": 0,
            "class": "ZoomImage",
            "paddingTop": 0,
            "propagateClick": false,
            "scaleMode": "custom",
            "data": {
                "name": "ZoomImage11971"
            },
            "shadow": false,
            "visible": false,
            "backgroundOpacity": 1
        },
        {
            "fontColor": "#FFFFFF",
            "rollOverIconColor": "#666666",
            "id": "closeButtonPopupPanorama",
            "borderRadius": 0,
            "shadowBlurRadius": 6,
            "shadowColor": "#000000",
            "fontFamily": "Arial",
            "right": 10,
            "iconHeight": 20,
            "verticalAlign": "middle",
            "paddingRight": 5,
            "iconColor": "#000000",
            "paddingLeft": 5,
            "minHeight": 0,
            "layout": "horizontal",
            "top": 10,
            "backgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "backgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "iconLineWidth": 5,
            "minWidth": 0,
            "mode": "push",
            "backgroundColorDirection": "vertical",
            "shadowSpread": 1,
            "borderSize": 0,
            "paddingBottom": 5,
            "label": "",
            "iconBeforeLabel": true,
            "paddingTop": 5,
            "gap": 5,
            "fontStyle": "normal",
            "class": "CloseButton",
            "pressedIconColor": "#888888",
            "fontSize": "1.29vmin",
            "propagateClick": false,
            "iconWidth": 20,
            "data": {
                "name": "CloseButton11972"
            },
            "borderColor": "#000000",
            "shadow": false,
            "visible": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "backgroundOpacity": 0.3,
            "fontWeight": "normal",
            "textDecoration": "none",
            "cursor": "hand",
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
            "width": 58,
            "pressedRollOverIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "height": 58,
            "minWidth": 1,
            "mode": "toggle",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed.png",
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081.png",
            "data": {
                "name": "IconButton FULLSCREEN"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 15.8,
                    "yaw": 42.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -40.51
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02, this.camera_9C302537_8BE6_E776_41D4_BFD893D2397E); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241C563F_0652_7A03_4185_8A707E11C182",
                    "pitch": -40.51,
                    "hfov": 15.8,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 42.12
                }
            ],
            "id": "overlay_1A3B474B_067E_1A03_419E_3352379C3F48",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 15.8,
                    "yaw": 84.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -40.51
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C, this.camera_966734D2_8BE6_E509_41DD_F33557D9C556); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241C363F_0652_7A03_419A_A3CB2A9C426C",
                    "pitch": -40.51,
                    "hfov": 15.8,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 84.43
                }
            ],
            "id": "overlay_1E6E4617_067E_1A03_40F9_61A56704D9E0",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 13.47,
                    "yaw": -101.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -49.58
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F, this.camera_9C097541_8BE6_E70A_41DF_8D04ADB07860); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241CE63F_0652_7A03_419A_8CB7A12A7213",
                    "pitch": -49.58,
                    "hfov": 13.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -101.43
                }
            ],
            "id": "overlay_1DD24E26_067E_0A02_4181_8FBC6F808FFF",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.25,
                    "yaw": -99.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -6.89
                }
            ],
            "data": {
                "label": "Circle Door 02"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F, this.camera_9C02E54A_8BE6_E71E_41C1_0A975F24DFEB); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Ruang Penyimpanan"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241D6641_0652_7A7F_4169_CADB914F8F88",
                    "pitch": -6.89,
                    "hfov": 20.25,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -99.92
                }
            ],
            "id": "overlay_1ACA9111_0672_161E_4191_B70AAB9B74EA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 28.17,
                    "yaw": 136.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -8.74
                }
            ],
            "data": {
                "label": "Info Red 08"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Dilarang memasuki ruangan kecuali Kepala lab dan Laboran"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2F9C422C_3EF6_BDA1_41A9_CD062ECE3A8B",
                    "pitch": -8.74,
                    "hfov": 28.17,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 136.12
                }
            ],
            "id": "overlay_301B8236_3EFF_9DA0_41BF_474C5DE464BB",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.16,
                    "yaw": 136.08,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -8.78
                }
            ],
            "data": {
                "label": "Circle Door 02"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Dilarang memasuki ruangan kecuali Kepala lab dan Laboran"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2F9D822C_3EF6_BDA1_41C1_10A6B341D540",
                    "pitch": -8.78,
                    "hfov": 20.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 136.08
                }
            ],
            "id": "overlay_1C1C4F00_0672_0BFD_4182_000CB66CBB30",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "viewerArea": "this.viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582",
            "id": "viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "viewerArea": "this.viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFB",
            "id": "viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFBVideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.97,
                    "yaw": 150.54,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -24.08
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE8FD5F_066E_0E03_4153_D5E70A57904E",
                    "pitch": -24.08,
                    "hfov": 18.97,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 150.54
                }
            ],
            "id": "overlay_12DBC6C0_06B2_FA7D_418B_B8BD7C7699D0",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.02,
                    "yaw": -33.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -23.7
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A, this.camera_93EEB55B_8BE6_E73E_4153_ADB2B9CAA302); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE8DD5F_066E_0E03_419B_227AF5587CD1",
                    "pitch": -23.7,
                    "hfov": 19.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -33.81
                }
            ],
            "id": "overlay_10443454_06B2_1E05_4191_F8EF49B28CBD",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.67,
                    "yaw": 78.26,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 3.63
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A8DE82E_0AB2_1605_4197_CDF36D85FF90, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2A8D382E_0AB2_1605_4189_2D65425A5D2E, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C10E1DC_0A72_2EF8_4191_CA31EF8BB1BA",
                    "pitch": 3.63,
                    "hfov": 7.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 78.26
                }
            ],
            "id": "overlay_2B51C8B3_0AB2_1603_41A0_813B88E9F8BA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.64,
                    "yaw": 83.56,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 6.04
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2B708838_0AB2_160D_4191_CEF19418F8C8, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B70E838_0AB2_160D_417C_0E7B87E521CB, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C1121DC_0A72_2EF8_4192_3F2B51A143A2",
                    "pitch": 6.04,
                    "hfov": 7.64,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 83.56
                }
            ],
            "id": "overlay_2B5138B3_0AB2_1603_419B_ECFFF720A5F5",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.54,
                    "yaw": 172.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 11.2
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_178E9809_0AB3_F60F_4198_84C0F5DE4EB4, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_178EA809_0AB3_F60F_4186_C50C59D04D1A, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C1141DC_0A72_2EF8_4159_BFB11A2B7BB4",
                    "pitch": 11.2,
                    "hfov": 7.54,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 172.7
                }
            ],
            "id": "overlay_2860A833_0AB3_F603_418B_F2C699762562",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_2BDCAB38_0A72_33B9_418B_B30945F7BB07",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_2BDCAB38_0A72_33B9_418B_B30945F7BB07_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 0.65,
            "useHandCursor": true,
            "roll": -0.46,
            "hfov": 19.78,
            "rotationY": 23.11,
            "yaw": 18.91,
            "class": "VideoPanoramaOverlay",
            "vfov": 14.36,
            "videoVisibleOnStop": false,
            "rotationX": -0.84,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.62,
                    "yaw": 60.44,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_5_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -26.35
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C, this.camera_9C172553_8BE6_E70E_41B7_B54DAEC451E3); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_39E0EBD8_2A24_17A7_41C4_69BAD337F37C",
                    "pitch": -26.35,
                    "hfov": 18.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 60.44
                }
            ],
            "id": "overlay_38B38F44_0BBE_13C8_41A0_F0E254213648",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 5.06,
                    "yaw": 29.87,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 6.67
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_38103FAF_0BB2_1358_4192_CCE1046739EF, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_93822E46_8BEA_2516_41D2_9E99B81848D7, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C04495_8BE6_E50B_41D0_303209167CF9, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_39E0CBD8_2A24_17A7_41C2_D88AD4866AA2",
                    "pitch": 6.67,
                    "hfov": 5.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 29.87
                }
            ],
            "id": "overlay_38710039_0BB2_2DB8_4172_77164D194585",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96E21487_8BE6_E517_41D5_D1308FA22582",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11964"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96FED489_8BE6_E51B_41BE_291A44FE4DFB",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11967"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "cursor": "hand",
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "width": 58,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "height": 58,
            "minWidth": 1,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "rollOverIconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7_rollover.png",
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7.png",
            "data": {
                "name": "IconButton VR"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "visible": false,
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "width": 58,
            "pressedRollOverIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "height": 58,
            "minWidth": 1,
            "mode": "toggle",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed.png",
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781.png",
            "data": {
                "name": "IconButton HS "
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "id": "IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "left": "12%",
            "width": 32,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "bottom": "27.18%",
            "height": 32,
            "minWidth": 0,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "pressedIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_pressed.png",
            "rollOverIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_rollover.png",
            "transparencyActive": true,
            "class": "IconButton",
            "propagateClick": false,
            "iconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291.png",
            "data": {
                "name": "Button37499"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "id": "IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "left": "10%",
            "width": 32,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "top": "4.75%",
            "height": 32,
            "minWidth": 0,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "pressedIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_pressed.png",
            "rollOverIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_rollover.png",
            "class": "IconButton",
            "transparencyActive": true,
            "propagateClick": false,
            "iconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140.png",
            "data": {
                "name": "Button37510"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "width": 58,
            "pressedRollOverIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "height": 58,
            "minWidth": 1,
            "mode": "toggle",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed.png",
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250.png",
            "data": {
                "name": "IconButton GYRO"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.97,
                    "yaw": 135.24,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -24.08
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C, this.camera_93DA4589_8BE6_E71B_41D2_3FCC596D811A); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEB5D5C_066E_0E05_419D_0E62B1E8B79D",
                    "pitch": -24.08,
                    "hfov": 18.97,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 135.24
                }
            ],
            "id": "overlay_1B8453C8_0652_1A0D_4159_4D2958659CE8",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.84,
                    "yaw": -147.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -17.28
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEACD5D_066E_0E07_418C_E36F15898952",
                    "pitch": -17.28,
                    "hfov": 19.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -147.32
                }
            ],
            "id": "overlay_1B8443C8_0652_1A0D_4198_022EEC8D392D",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.92,
                    "yaw": 56.29,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -16.53
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEA8D5D_066E_0E07_4189_F6F46092F5B6",
                    "pitch": -16.53,
                    "hfov": 19.92,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 56.29
                }
            ],
            "id": "overlay_1B8473C8_0652_1A0D_4175_A6C51F57DF73",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.34,
                    "yaw": -104.64,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_3_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.44
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2, this.camera_93AF2592_8BE6_E709_41C0_BF8A7039A692); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEA6D5D_066E_0E07_4187_B35EC292A4B9",
                    "pitch": -21.44,
                    "hfov": 19.34,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -104.64
                }
            ],
            "id": "overlay_1B8403C9_0652_1A0F_414E_A55E18756F72",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.2,
                    "yaw": 176.41,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_4_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -13.5
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEA4D5D_066E_0E07_419C_FB14967FF746",
                    "pitch": -13.5,
                    "hfov": 20.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 176.41
                }
            ],
            "id": "overlay_1B8433C9_0652_1A0F_4191_45851FEFA86F",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.23,
                    "yaw": 80.84,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_5_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -13.13
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EEA3D5E_066E_0E05_418B_AB9D4AB7216C",
                    "pitch": -13.13,
                    "hfov": 20.23,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 80.84
                }
            ],
            "id": "overlay_1B87F3C9_0652_1A0F_417E_2A435D568699",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.39,
                    "yaw": 26.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_6_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.06
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E, this.camera_93C4A580_8BE6_E709_41C0_0907FE562571); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE9ED5E_066E_0E05_4144_D6E475DB291A",
                    "pitch": -21.06,
                    "hfov": 19.39,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 26.82
                }
            ],
            "id": "overlay_1B87E3C9_0652_1A0F_4175_01D0653803AD",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 14.49,
                    "yaw": 133.23,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 1.06
                }
            ],
            "data": {
                "label": "Circle Door 02"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Pintu Keluar",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_114453_00_007', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE9CD5E_066E_0E05_4160_63CBD0D0156C",
                    "pitch": 1.06,
                    "hfov": 14.49,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 133.23
                }
            ],
            "id": "overlay_1B87B3C9_0652_1A0F_4192_DABD88793C6B",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.38,
                    "yaw": -46.02,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 1.63
                }
            ],
            "data": {
                "label": "Circle Door 02"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Pintu Keluar",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_114453_00_007', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE9BD5E_066E_0E05_4190_8A0324EA9798",
                    "pitch": 1.63,
                    "hfov": 16.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -46.02
                }
            ],
            "id": "overlay_1B87A3C9_0652_1A0F_419B_162355E33431",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.68,
                    "yaw": -85.37,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -1.63
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_178324D3_0AD2_FE03_4178_16C6EB766305, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2A8D9834_0AD2_3605_419B_94739E4D31AA, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2CCC10EF_0AF2_7603_4192_7849C8C1669C",
                    "pitch": -1.63,
                    "hfov": 7.68,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -85.37
                }
            ],
            "id": "overlay_16D4308B_0AFE_7603_4178_93F368A811B4",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.65,
                    "yaw": -77.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_10_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 5.24
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A1223CC_0AD6_FA05_4184_92549CC03285, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2A8C5839_0AD2_360F_4165_9FFC5FD9DC7B, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2CCCC0EF_0AF2_7603_4167_B0AFAE2D7810",
                    "pitch": 5.24,
                    "hfov": 7.65,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -77.78
                }
            ],
            "id": "overlay_291F46EB_0AFE_1A03_4199_1B0BA9E492B7",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_28933868_0A56_760D_4182_7BD4A000BEFE",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_28933868_0A56_760D_4182_7BD4A000BEFE_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 8.45,
            "useHandCursor": true,
            "roll": -0.5,
            "hfov": 7.03,
            "rotationY": 4.71,
            "yaw": 51.78,
            "class": "VideoPanoramaOverlay",
            "vfov": 6.18,
            "videoVisibleOnStop": false,
            "rotationX": -27.83,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 5.75,
                    "yaw": -123.61,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_11_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 6.4
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2EE25834_0A7E_3D48_419E_B9BDB5E75114, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_93811E44_8BEA_250A_41DD_3712C93277AE, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C22494_8BE6_E509_41DF_B87752C110A3, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22A52E80_0BB6_1548_4193_2A208E4A9210",
                    "pitch": 6.4,
                    "hfov": 5.75,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -123.61
                }
            ],
            "id": "overlay_2C18FAF6_0A7E_12C8_41A0_F36800AA67B9",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 3.39,
                    "yaw": 56.72,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_12_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 10.19
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2AF6E63E_0A7E_15B8_4191_B90CEEAFA7F1, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_9380AE44_8BEA_250A_41C4_673D8A5E7E4C, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C2F494_8BE6_E509_41C1_6AED8F4504E4, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22ABDE92_0BB6_1548_416A_76A4F2060996",
                    "pitch": 10.19,
                    "hfov": 3.39,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 56.72
                }
            ],
            "id": "overlay_2A14C659_0A7E_15FB_418D_84B3F6B89E2E",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11969"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "viewerArea": "this.viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2",
            "id": "viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "viewerArea": "this.viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9",
            "id": "viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "viewerArea": "this.viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2",
            "id": "viewer_uid96F6248C_8BE6_E519_41DE_33DCF1E276F2VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.4,
                    "yaw": 155.63,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -33.15
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6, this.camera_935905F7_8BE6_E6F6_41DA_477AB2BF5ADB); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE96D5F_066E_0E03_4182_289979AC2BF5",
                    "pitch": -33.15,
                    "hfov": 17.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 155.63
                }
            ],
            "id": "overlay_13EBFBCE_06D2_0A05_4181_C40D7EA73FB6",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.49,
                    "yaw": 67.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -27.1
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE94D5F_066E_0E03_419A_9A6C60AC4DA9",
                    "pitch": -27.1,
                    "hfov": 18.49,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 67.62
                }
            ],
            "id": "overlay_147887D2_06D2_7A1D_4190_4F9F79F6C910",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 10.2,
                    "yaw": 170.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 21.9
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_2C649E03_0A72_F548_41A0_50F482DEA885, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_9382FE44_8BEA_250A_41AA_C1DF949CE346, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C1A495_8BE6_E50B_41C5_B55580DA563D, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22AF3EA3_0BB6_1548_419C_227AECB9973B",
                    "pitch": 21.9,
                    "hfov": 10.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 170.43
                }
            ],
            "id": "overlay_2D8A8E2D_0A72_F558_419F_C2BA5EFD7DAF",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.28,
                    "yaw": 59.31,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -33.71
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134, this.camera_930B061D_8BE6_E53B_4183_427DD87DF0D7); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE8BD5F_066E_0E03_419C_450D1EBB335D",
                    "pitch": -33.71,
                    "hfov": 17.28,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 59.31
                }
            ],
            "id": "overlay_10BA057C_06BE_FE05_4175_9AEF1DB5C00E",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.59,
                    "yaw": 145.44,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -26.54
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040, this.camera_9301F626_8BE6_E516_41C5_331ED3520DBC); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE86D60_066E_0E3D_417F_EA8F2AE79D2C",
                    "pitch": -26.54,
                    "hfov": 18.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 145.44
                }
            ],
            "id": "overlay_1015911F_06BE_3602_418E_1DDACE70065F",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_33622F95_3EF3_E363_41B2_C18F43F76016",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_33622F95_3EF3_E363_41B2_C18F43F76016_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 1.43,
            "useHandCursor": true,
            "roll": 0.84,
            "hfov": 65.54,
            "rotationY": 72.84,
            "yaw": 37.5,
            "class": "VideoPanoramaOverlay",
            "vfov": 37.56,
            "videoVisibleOnStop": false,
            "rotationX": -0.33,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_320B2D46_3EF2_A7E1_41C8_F58E26D0C707",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_320B2D46_3EF2_A7E1_41C8_F58E26D0C707_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 1.38,
            "useHandCursor": true,
            "roll": -2.55,
            "hfov": 27.68,
            "rotationY": 65.31,
            "yaw": 54.77,
            "class": "VideoPanoramaOverlay",
            "vfov": 18.91,
            "videoVisibleOnStop": false,
            "rotationX": -3.42,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.9,
                    "yaw": 142.41,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -30.5
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7, this.camera_968364BD_8BE6_E57A_41DF_6074C14D4A99); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE84D5E_066E_0E05_4183_290AE88A7578",
                    "pitch": -30.5,
                    "hfov": 17.9,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 142.41
                }
            ],
            "id": "overlay_14BC3E78_06D6_0A0D_4170_B59BF680581F",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.01,
                    "yaw": -27.2,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -35.04
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA, this.camera_968EB4B3_8BE6_E50E_41C1_3590ECA259E6); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE82D5F_066E_0E03_4171_D0ADE2D2CBAD",
                    "pitch": -35.04,
                    "hfov": 17.01,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -27.2
                }
            ],
            "id": "overlay_144A80A9_06D6_F60F_419C_23D36CFD28CD",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_2C58D54E_0A52_FE05_4137_464CBDB0F4FC",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_2C58D54E_0A52_FE05_4137_464CBDB0F4FC_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 62.98,
            "useHandCursor": true,
            "roll": 1.62,
            "hfov": 41.77,
            "rotationY": -0.61,
            "yaw": -121.36,
            "class": "VideoPanoramaOverlay",
            "vfov": 31.24,
            "videoVisibleOnStop": false,
            "rotationX": -63.03,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.78,
                    "yaw": -124.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 37.01
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_296F41B4_0A72_6F49_4193_E31832353C88, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_93836E44_8BEA_250A_41D8_65C4C5661B31, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C13495_8BE6_E50B_41C6_95DF41B5217C, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22AE4E95_0BB6_1548_4198_B6A5CDC2D7D2",
                    "pitch": 37.01,
                    "hfov": 16.78,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -124.32
                }
            ],
            "id": "overlay_2A96D214_0A72_6D48_419A_70BB39843A29",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.56,
                    "yaw": 134.67,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -19.74
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE7ED60_066E_0E3D_4195_2460C7CBB9BB",
                    "pitch": -19.74,
                    "hfov": 19.56,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 134.67
                }
            ],
            "id": "overlay_1F3CE7C6_06B2_FA05_4194_560D90EF98DB",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.22,
                    "yaw": -119.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -13.32
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134, this.camera_932D5601_8BE6_E50B_41D6_6466F34FE71A); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE7DD60_066E_0E3D_418B_3E7BF4E88E4C",
                    "pitch": -13.32,
                    "hfov": 20.22,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -119.18
                }
            ],
            "id": "overlay_1F0CB7EE_06B2_3A02_4196_B950C3388BAC",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.4,
                    "yaw": -179.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -27.67
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040, this.camera_93374613_8BE6_E50F_41D1_49AE46243877); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE7BD60_066E_0E3D_4190_1E34B93FA226",
                    "pitch": -27.67,
                    "hfov": 18.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -179.62
                }
            ],
            "id": "overlay_1F03830B_06B2_7A03_419A_409FDC8B41C9",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.89,
                    "yaw": 0.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_3_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -35.6
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2, this.camera_9323060A_8BE6_E519_41DC_E421104837CD); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE76D60_066E_0E3D_4190_CC28DD72CFEF",
                    "pitch": -35.6,
                    "hfov": 16.89,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 0.94
                }
            ],
            "id": "overlay_1A3F886A_06B2_160D_4179_2E58AF8CF575",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 11.93,
                    "yaw": 79.55,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -2.97
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2D415209_0AB2_1A0F_4193_0E51D91DB627, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2D414209_0AB2_1A0F_417B_693E4A1B175C, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C13C1DC_0A72_2EF8_4181_4961309C3C7B",
                    "pitch": -2.97,
                    "hfov": 11.93,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 79.55
                }
            ],
            "id": "overlay_2D20B229_0AB2_1A0F_4198_917A678E0BC5",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 11.83,
                    "yaw": 83.9,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 7.9
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2A8D7960_0AB6_163D_419A_11A867D54C57, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2C30B1F0_0A72_2EC8_4172_E20A21E8BFF0, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C1C11DC_0A72_2EF8_4197_0AC6FF319FDC",
                    "pitch": 7.9,
                    "hfov": 11.83,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 83.9
                }
            ],
            "id": "overlay_2B88269A_0AB6_1A0D_4195_7406D39285C9",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_2890A972_0A56_161D_419B_2D242AFD6226",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_2890A972_0A56_161D_419B_2D242AFD6226_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 0.63,
            "useHandCursor": true,
            "roll": -0.75,
            "hfov": 28.78,
            "rotationY": -35.9,
            "yaw": -92.07,
            "class": "VideoPanoramaOverlay",
            "vfov": 20.67,
            "videoVisibleOnStop": false,
            "rotationX": 0.01,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.02,
                    "yaw": -105.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 10.15
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_39753FBC_0BB2_12B8_4179_7561D1FA8826, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_939D7E46_8BEA_2516_41AE_D51C1EAFBC2E, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C0E495_8BE6_E50B_41CB_2D07BF7D2FEA, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_39FE3BDC_2A24_175F_41BB_AB2E62EA4FF0",
                    "pitch": 10.15,
                    "hfov": 7.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -105.94
                }
            ],
            "id": "overlay_39559034_0BB2_2D48_4189_9A7961CA37D2",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.3,
                    "yaw": -41.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -5.75
                }
            ],
            "data": {
                "label": "Circle Door 02"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Dilarang memasuki ruangan kecuali Kepala lab dan Laboran"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2F99622B_3EF6_BDA7_41CE_C5AC0D2C05CC",
                    "pitch": -5.75,
                    "hfov": 20.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -41.88
                }
            ],
            "id": "overlay_30027219_3EF3_9D63_4195_457676AF905A",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 28.36,
                    "yaw": -42.03,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -5.66
                }
            ],
            "data": {
                "label": "Info Red 08"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Dilarang memasuki ruangan kecuali Kepala lab dan Laboran"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2F9ED22B_3EF6_BDA7_41BF_44E9E83EE1E5",
                    "pitch": -5.66,
                    "hfov": 28.36,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -42.03
                }
            ],
            "id": "overlay_30039219_3EF3_9D63_41C7_7EA0856C7BE9",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "toolTipOpacity": 1,
            "playbackBarHeadWidth": 6,
            "id": "MapViewer",
            "left": "0%",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 1,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 0,
            "minWidth": 1,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "99.623%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "propagateClick": false,
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "toolTipBackgroundColor": "#F6F6F6",
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "2vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "fade_out_fade_in",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "bottom": "0%",
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "progressBarBackgroundColorRatios": [
                0
            ],
            "toolTipBorderColor": "#767676",
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "paddingTop": 0,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Floor Plan mini"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "borderRadius": 0,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10
        },
        {
            "camera": "this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96CA1491_8BE6_E50B_41D6_C401D824E0A2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
            "media": "this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02",
            "id": "PanoramaPlayListItem_96CA1491_8BE6_E50B_41D6_C401D824E0A2",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C92491_8BE6_E50B_41DF_EE2C6E80E5DA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
            "media": "this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E",
            "id": "PanoramaPlayListItem_96C92491_8BE6_E50B_41DF_EE2C6E80E5DA",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C98491_8BE6_E50B_41D9_598EFD23747C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
            "media": "this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7",
            "id": "PanoramaPlayListItem_96C98491_8BE6_E50B_41D9_598EFD23747C",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C81492_8BE6_E509_41D9_FE4CA12C38F2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
            "media": "this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6",
            "id": "PanoramaPlayListItem_96C81492_8BE6_E509_41D9_FE4CA12C38F2",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C74492_8BE6_E509_41C2_8DB18A75816A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
            "media": "this.panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA",
            "id": "PanoramaPlayListItem_96C74492_8BE6_E509_41C2_8DB18A75816A",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C7D492_8BE6_E509_41D6_4C952B8231A8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
            "media": "this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830",
            "id": "PanoramaPlayListItem_96C7D492_8BE6_E509_41D6_4C952B8231A8",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C61492_8BE6_E509_41E0_6C7E7715C07B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
            "media": "this.panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040",
            "id": "PanoramaPlayListItem_96C61492_8BE6_E509_41E0_6C7E7715C07B",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C56492_8BE6_E509_41AA_44476C552047, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
            "media": "this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A",
            "id": "PanoramaPlayListItem_96C56492_8BE6_E509_41AA_44476C552047",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C5F493_8BE6_E50F_41DB_1C42BE253D36, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
            "media": "this.panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134",
            "id": "PanoramaPlayListItem_96C5F493_8BE6_E50F_41DB_1C42BE253D36",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C44493_8BE6_E50F_41C8_AC152E10A130, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
            "media": "this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C",
            "id": "PanoramaPlayListItem_96C44493_8BE6_E50F_41C8_AC152E10A130",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C4A493_8BE6_E50F_41D4_DB2B44578317, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
            "media": "this.panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C",
            "id": "PanoramaPlayListItem_96C4A493_8BE6_E50F_41D4_DB2B44578317",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C5B493_8BE6_E50F_41DC_06EB5DB48DCB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
            "media": "this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2",
            "id": "PanoramaPlayListItem_96C5B493_8BE6_E50F_41DC_06EB5DB48DCB",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C40493_8BE6_E50F_41D0_E0E510258BF3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
            "media": "this.panorama_0E78D269_05AE_3A0F_4194_073D5A49809B",
            "id": "PanoramaPlayListItem_96C40493_8BE6_E50F_41D0_E0E510258BF3",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C37494_8BE6_E509_41CB_303DA828B997, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
            "media": "this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F",
            "id": "PanoramaPlayListItem_96C37494_8BE6_E509_41CB_303DA828B997",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_camera",
            "end": "this.trigger('tourEnded')",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_96C3C494_8BE6_E509_4186_F1CEF55CC48E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 0)",
            "media": "this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546",
            "id": "PanoramaPlayListItem_96C3C494_8BE6_E509_4186_F1CEF55CC48E",
            "class": "PanoramaPlayListItem"
        },
        {
            "map": {
                "width": 48.15,
                "x": 176.82,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2393.87,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 176.82,
                "class": "HotspotMapOverlayImage",
                "y": 2393.87,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_0.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD0AF0_2A24_3167_41A6_053185D5BEFA",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 600.25,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2399.93,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 600.25,
                "class": "HotspotMapOverlayImage",
                "y": 2399.93,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_1.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD7AF0_2A24_3167_41A9_E42E6F3636D0",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1010.33,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2403.67,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1010.33,
                "class": "HotspotMapOverlayImage",
                "y": 2403.67,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_2.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD5AF0_2A24_3167_41A3_A6990286F421",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1002.85,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1835.47,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1002.85,
                "class": "HotspotMapOverlayImage",
                "y": 1835.47,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_3.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FADBAF0_2A24_3167_41B3_8EA529BD38ED",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 609.51,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1827.81,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 609.51,
                "class": "HotspotMapOverlayImage",
                "y": 1827.81,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_4.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FADCAF0_2A24_3167_41C0_493985AB4628",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 188.21,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1818.38,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 188.21,
                "class": "HotspotMapOverlayImage",
                "y": 1818.38,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_5.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FADDAF0_2A24_3167_41C4_B55B983C518B",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 170.05,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1168.8,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 170.05,
                "class": "HotspotMapOverlayImage",
                "y": 1168.8,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_6.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FACAAF0_2A24_3167_41BF_873F393CCBF5",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 625,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1130.88,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 625,
                "class": "HotspotMapOverlayImage",
                "y": 1130.88,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_7.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAC8AF2_2A24_316B_41C1_C7FA34B94E21",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 201.39,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_8_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 576.39,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 201.39,
                "class": "HotspotMapOverlayImage",
                "y": 576.39,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_8.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FACFAF2_2A24_316B_41A9_96EE67D92056",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 202.64,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_9_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 60.54,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 202.64,
                "class": "HotspotMapOverlayImage",
                "y": 60.54,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_9.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD2AF2_2A24_316B_41AE_A32D849AF0A8",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 578.17,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_10_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 58.05,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 578.17,
                "class": "HotspotMapOverlayImage",
                "y": 58.05,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_10.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD0AF2_2A24_316B_41C0_A6892E2BBFC9",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1069.27,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_11_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 564.99,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1069.27,
                "class": "HotspotMapOverlayImage",
                "y": 564.99,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_11.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3FAD6AF2_2A24_316B_41B3_8FE9F2C03890",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1395.48,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_12_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 564.99,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1395.48,
                "class": "HotspotMapOverlayImage",
                "y": 564.99,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_12.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3F5A6E14_2A24_10AF_419A_3F976178F733",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1822.65,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_13_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 534.9,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1822.65,
                "class": "HotspotMapOverlayImage",
                "y": 534.9,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_13.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3F5A0E14_2A24_10AF_41BD_881D786F593C",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 1817.66,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_14_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 228.1,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1817.66,
                "class": "HotspotMapOverlayImage",
                "y": 228.1,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_3F06E654_2A3C_10AF_419C_CAA672FC614E_HS_14.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_3F45DE14_2A24_10AF_41B0_E851E9FCF261",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.24,
                    "yaw": -179.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -33.9
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E181F5E_05AE_0A05_416D_04530F9BD830, this.camera_93B015AD_8BE6_E71A_41D3_DE5C6E5D8BED); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241F6641_0652_7A7F_4195_8AA75B653A1F",
                    "pitch": -33.9,
                    "hfov": 17.24,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -179.62
                }
            ],
            "id": "overlay_195BA6EA_065E_3A0D_4198_73CA64937B34",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.44,
                    "yaw": 7.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -37.68
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E, this.camera_93BBE5A4_8BE6_E70A_419B_1DC7816B19E4); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241F2641_0652_7A7F_4190_D30CF2BAD992",
                    "pitch": -37.68,
                    "hfov": 16.44,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 7.74
                }
            ],
            "id": "overlay_1AAC377B_065E_7A02_416D_E535EF6F214F",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96E1A488_8BE6_E519_41CC_639D340934F2",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11965"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.59,
                    "yaw": 91.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -26.54
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7, this.camera_938665B7_8BE6_E776_41D5_F3CA508E77F9); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE99D5E_066E_0E05_4198_A7570EDFB438",
                    "pitch": -26.54,
                    "hfov": 18.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 91.42
                }
            ],
            "id": "overlay_17E58FA8_06D2_0A0D_4199_7CB378171050",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.57,
                    "yaw": -177.54,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -37.11
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546, this.camera_939B55C1_8BE6_E70A_41D7_5C63DE6B6245); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE97D5E_066E_0E05_4199_5B0F7554F7EB",
                    "pitch": -37.11,
                    "hfov": 16.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -177.54
                }
            ],
            "id": "overlay_17DB6F0B_06D2_0A03_418B_BF62316E4B0D",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.27,
                    "yaw": -94.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -28.43
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02, this.camera_939145CA_8BE6_E71E_41D2_CB3F74EB98B4); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22A84E94_0BB6_1548_4186_C6210691D61B",
                    "pitch": -28.43,
                    "hfov": 18.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -94.06
                }
            ],
            "id": "overlay_299BA569_0A72_17D8_418C_B6EDEC989884",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.62,
                    "yaw": 128.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 14.66
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_209CA080_0A76_6D48_419B_E47FA4C680D0, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_93803E44_8BEA_250A_41DE_8C8857EB464D, this.video_281955BC_0A56_3E06_4197_1E835277D5D0, this.PlayList_96C16494_8BE6_E509_41C6_AE70B499ADDA, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_22A80E95_0BB6_1548_4199_A4DDD69148DF",
                    "pitch": 14.66,
                    "hfov": 7.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 128.32
                }
            ],
            "id": "overlay_20B520CD_0A76_6ED8_419D_6AF9BCB0FFEB",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 48.15,
                "x": 177.35,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2394.23,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 176.82,
                "class": "HotspotMapOverlayImage",
                "y": 2393.87,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_0.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_29C09D0C_0A52_7758_4184_438BFC8A9436",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 600.61,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2400.46,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 600.25,
                "class": "HotspotMapOverlayImage",
                "y": 2399.93,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_1.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_29D0C357_0A51_F3C8_4193_4202D53470F3",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1010.68,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 2403.85,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1010.33,
                "class": "HotspotMapOverlayImage",
                "y": 2403.67,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_2.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2C2C450F_0A56_1758_41A0_7AB7DFEE04FE",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1003.38,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1835.83,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1002.85,
                "class": "HotspotMapOverlayImage",
                "y": 1835.47,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_3.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_29CA04CF_0A56_36D8_41A0_080C586DEB51",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 609.86,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1828.17,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 609.51,
                "class": "HotspotMapOverlayImage",
                "y": 1827.81,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_4.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2B78A218_0A56_2D78_4154_5B78D041462C",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 188.57,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1818.73,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 188.21,
                "class": "HotspotMapOverlayImage",
                "y": 1818.38,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_5.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_29CE0144_0A56_6FC8_4181_21945F6DBAFE",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 170.18,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1168.91,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 170.05,
                "class": "HotspotMapOverlayImage",
                "y": 1168.8,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_6.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2B56CC62_0A56_15C8_4194_65732EBF21C9",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 625.18,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 1131.23,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 625,
                "class": "HotspotMapOverlayImage",
                "y": 1130.88,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_7.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2CEC6CA6_0A56_1548_4185_F15004D7C69E",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 201.75,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_8_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 576.75,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 201.39,
                "class": "HotspotMapOverlayImage",
                "y": 576.39,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_8.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2AEF8619_0A56_1578_4177_557B816BCF8A",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 202.99,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_9_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 60.9,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 202.64,
                "class": "HotspotMapOverlayImage",
                "y": 60.54,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_9.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2CA08C5C_0A56_75F8_4175_B42183831BD4",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 578.53,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_10_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 58.23,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 578.17,
                "class": "HotspotMapOverlayImage",
                "y": 58.05,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_10.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2EA5E864_0A56_3DC8_418C_B4B1FCDA1A8B",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1069.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_11_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 565.17,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1069.27,
                "class": "HotspotMapOverlayImage",
                "y": 564.99,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_11.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2C845AC6_0A56_12C8_4180_6690F5D4FF19",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1395.83,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_12_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 565.17,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1395.48,
                "class": "HotspotMapOverlayImage",
                "y": 564.99,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_12.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2AA68E8E_0A56_1558_4195_300D9116E70A",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1823.18,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_13_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 535.26,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1822.65,
                "class": "HotspotMapOverlayImage",
                "y": 534.9,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_13.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_2C25BDEE_0A56_36D8_419D_EFC212EA94C0",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 48.15,
                "x": 1818.02,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_14_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 19
                        }
                    ]
                },
                "y": 228.45,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 57.05,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1817.66,
                "class": "HotspotMapOverlayImage",
                "y": 228.1,
                "width": 48.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_2B68880C_0A52_FD58_417D_95178D044B10_HS_14.png",
                            "width": 48,
                            "class": "ImageResourceLevel",
                            "height": 57
                        }
                    ]
                },
                "height": 57.05
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_293835CD_0A56_76D8_4191_A711A581D6D6",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11966"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.73,
                    "yaw": 106.34,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -18.23
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C, this.camera_936695D3_8BE6_E70E_41D0_3CC26FE26855); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE85D60_066E_0E3D_418E_6892CDF9D3BA",
                    "pitch": -18.23,
                    "hfov": 19.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 106.34
                }
            ],
            "id": "overlay_1075A350_06BE_1A1D_4192_F6BAA5D20E6A",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.13,
                    "yaw": -135.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -34.47
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A, this.camera_937B55DC_8BE6_E73A_41C8_E3E3859D5046); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE80D60_066E_0E3D_419B_9A1291E1D594",
                    "pitch": -34.47,
                    "hfov": 17.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -135.42
                }
            ],
            "id": "overlay_1F83C9F4_06BE_3605_418E_3DAA7E97C634",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_2C69B084_0A76_6D48_4195_DA3D76BB802E",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_2C69B084_0A76_6D48_4195_DA3D76BB802E_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 7.57,
            "useHandCursor": true,
            "roll": 4.78,
            "hfov": 131.94,
            "rotationY": -27.29,
            "yaw": -64.87,
            "class": "VideoPanoramaOverlay",
            "vfov": 96.19,
            "videoVisibleOnStop": false,
            "rotationX": -11.02,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_2CC5F41D_0A76_7578_4190_18D84C192258",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_2CC5F41D_0A76_7578_4190_18D84C192258_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 1.93,
            "useHandCursor": true,
            "roll": -4.89,
            "hfov": 49.98,
            "rotationY": 64.43,
            "yaw": 54.25,
            "class": "VideoPanoramaOverlay",
            "vfov": 37.51,
            "videoVisibleOnStop": false,
            "rotationX": -6.45,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96FAF48B_8BE6_E51F_41CF_20C6632C5EF9",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11968"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.73,
                    "yaw": 131.27,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -36.36
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F, this.camera_969504C7_8BE6_E516_41DC_C6C729DA6614); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241DB641_0652_7A7F_419A_E8EBFD76F080",
                    "pitch": -36.36,
                    "hfov": 16.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 131.27
                }
            ],
            "id": "overlay_1BB85E6D_066E_0A07_4196_A5A34984B5FA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 18.11,
                    "yaw": 151.86,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -29.37
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6, this.camera_93E3D564_8BE6_E70A_41CB_266773B325D8); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE8BD5E_066E_0E05_4199_7E5857D605A0",
                    "pitch": -29.37,
                    "hfov": 18.11,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 151.86
                }
            ],
            "id": "overlay_162745F3_06D6_1E03_4192_4164B1776F54",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 14.17,
                    "yaw": -116.25,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -28.05
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E, this.camera_93F8D56D_8BE6_E71A_41CC_8DBA33E7B2B0); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE86D5E_066E_0E05_4197_CB4B58A9EA17",
                    "pitch": -28.05,
                    "hfov": 14.17,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -116.25
                }
            ],
            "id": "overlay_152C9A08_06D6_0A0D_4159_B8BE986F3424",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 50,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 100,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": "1.11vmin",
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#000000",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#003366",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "ViewerArea11963"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.93,
                    "yaw": -155.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -35.41
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02, this.camera_93CF8577_8BE6_E7F7_41C5_DBB1C0F34F19); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE75D60_066E_0E3D_415B_54E3E88F7750",
                    "pitch": -35.41,
                    "hfov": 16.93,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -155.07
                }
            ],
            "id": "overlay_1ED20062_0652_163D_4189_F6020A77A647",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.71,
                    "yaw": -51.56,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -18.42
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE73D60_066E_0E3D_4198_B2C780757916",
                    "pitch": -18.42,
                    "hfov": 19.71,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -51.56
                }
            ],
            "id": "overlay_1ED3F062_0652_163D_4160_D0DEEBEACA60",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19.29,
                    "yaw": 119.56,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.82
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE71D60_066E_0E3D_4192_1A9A6274B630",
                    "pitch": -21.82,
                    "hfov": 19.29,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 119.56
                }
            ],
            "id": "overlay_1ED3E062_0652_163D_419D_9E5425D94739",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.68,
                    "yaw": -172.3,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -1.22
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2B4ECE46_0AB2_0A05_41A0_79862BE9B3E4, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B4F2E46_0AB2_0A05_4193_1692F5F776E7, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C1D61DE_0A72_2EF8_4191_B206FBBFEBD2",
                    "pitch": -1.22,
                    "hfov": 7.68,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -172.3
                }
            ],
            "id": "overlay_2B134E88_0AB2_0A0E_4181_33E9171EFFBC",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 7.67,
                    "yaw": -166.15,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 2.58
                }
            ],
            "data": {
                "label": "Info 01"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_2B31EE53_0AB2_0A03_4158_8FE8685CD958, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_2B31CE53_0AB2_0A03_4192_45F552D1F93F, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_2C1DA1DE_0A72_2EF8_4197_E1C9D347BC58",
                    "pitch": 2.58,
                    "hfov": 7.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -166.15
                }
            ],
            "id": "overlay_2B13BE88_0AB2_0A0E_41A0_973194D03AC6",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 19,
                    "yaw": 54.96,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -23.89
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE92D5F_066E_0E03_4198_3FEF656A1EC3",
                    "pitch": -23.89,
                    "hfov": 19,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 54.96
                }
            ],
            "id": "overlay_12288C4B_06AE_0E03_4158_3469EFDC24AE",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.58,
                    "yaw": 146.38,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -32.2
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E3757C5_05AE_1A07_4191_3551B2E75546, this.camera_93A6D59B_8BE6_E73F_41D2_20931F2B452F); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_1EE90D5F_066E_0E03_419B_C6B30F3A9A21",
                    "pitch": -32.2,
                    "hfov": 17.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 146.38
                }
            ],
            "id": "overlay_1468CCC8_06AE_0E0D_4185_995BD185CEFA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "autoplay": true,
            "id": "overlay_28A918BC_0A72_1605_4196_F5993A1D0AC6",
            "loop": true,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_28A918BC_0A72_1605_4196_F5993A1D0AC6_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 13.21,
            "useHandCursor": true,
            "roll": 6.94,
            "hfov": 8.27,
            "rotationY": -10.51,
            "yaw": -154.42,
            "class": "VideoPanoramaOverlay",
            "vfov": 5.57,
            "videoVisibleOnStop": false,
            "rotationX": -8.77,
            "blending": 0,
            "distance": 50,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_281955BC_0A56_3E06_4197_1E835277D5D0.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "playbackBarHeadWidth": 6,
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "playbackBarBackgroundColorDirection": "vertical",
            "width": "100%",
            "playbackBarRight": 0,
            "toolTipPaddingRight": 6,
            "playbackBarProgressBorderSize": 0,
            "playbackBarProgressBorderRadius": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "paddingLeft": 0,
            "toolTipBorderRadius": 3,
            "toolTipShadowHorizontalLength": 0,
            "minHeight": 1,
            "playbackBarBorderRadius": 0,
            "toolTipDisplayTime": 600,
            "toolTipShadowVerticalLength": 0,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontColor": "#606060",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipPaddingLeft": 6,
            "transitionDuration": 500,
            "minWidth": 1,
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "toolTipPaddingTop": 4,
            "borderSize": 0,
            "playbackBarBorderSize": 0,
            "height": "100%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressOpacity": 1,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "class": "ViewerArea",
            "vrPointerSelectionTime": 2000,
            "toolTipBackgroundColor": "#F6F6F6",
            "playbackBarHeadShadowColor": "#000000",
            "toolTipFontFamily": "Arial",
            "progressOpacity": 1,
            "propagateClick": false,
            "shadow": false,
            "progressBarBackgroundColorDirection": "vertical",
            "firstTransitionDuration": 0,
            "progressRight": 0,
            "progressHeight": 10,
            "toolTipFontStyle": "normal",
            "progressBottom": 2,
            "toolTipShadowBlurRadius": 3,
            "toolTipPaddingBottom": 4,
            "playbackBarHeadShadow": true,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "playbackBarOpacity": 1,
            "toolTipBorderSize": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "vrPointerColor": "#FFFFFF",
            "toolTipFontSize": 12,
            "progressBarOpacity": 1,
            "displayTooltipInTouchScreens": true,
            "paddingRight": 0,
            "transitionMode": "blending",
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipFontWeight": "normal",
            "progressBorderRadius": 0,
            "progressBackgroundColorRatios": [
                0.01
            ],
            "playbackBarLeft": 0,
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "toolTipShadowColor": "#333333",
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "toolTipTextShadowBlurRadius": 3,
            "progressBarBorderColor": "#0066FF",
            "paddingBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "progressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowBlurRadius": 3,
            "toolTipShadowSpread": 0,
            "toolTipTextShadowOpacity": 0,
            "playbackBarBottom": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingTop": 0,
            "progressBorderColor": "#FFFFFF",
            "playbackBarHeadOpacity": 1,
            "toolTipShadowOpacity": 1,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "data": {
                "name": "Floor Plan big"
            },
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "playbackBarHeadShadowVerticalLength": 0,
            "toolTipOpacity": 1,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "borderRadius": 0,
            "playbackBarHeight": 10
        },
        {
            "viewerArea": "this.viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396",
            "id": "viewer_uid96FFF489_8BE6_E51B_41DB_BD4C46E9E396VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "viewerArea": "this.viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081",
            "id": "viewer_uid96E3F486_8BE6_E509_4195_7A476A10A081VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.62,
                    "yaw": -20.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -32.01
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E78D269_05AE_3A0F_4194_073D5A49809B, this.camera_934F45E5_8BE6_E70A_41D0_13D5F66876A9); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241E2641_0652_7A7F_4194_10B462E8EEEA",
                    "pitch": -32.01,
                    "hfov": 17.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -20.97
                }
            ],
            "id": "overlay_1C8A620E_066E_7A05_4149_471833476516",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.27,
                    "yaw": -104.45,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.06
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2, this.camera_934485EE_8BE6_E716_41D4_0C63C0ED8F89); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_241EF641_0652_7A7F_4196_4EFEC46BFCAA",
                    "pitch": -21.06,
                    "hfov": 17.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -104.45
                }
            ],
            "id": "overlay_1B11BC54_066E_0E05_4195_F10B223BEA83",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "children": [
                "this.IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8"
            ],
            "id": "Container_B1571269_BF46_B846_41D9_B94D861499DF",
            "scrollBarColor": "#000000",
            "width": 110,
            "scrollBarOpacity": 0.5,
            "right": "0%",
            "scrollBarVisible": "rollOver",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "layout": "horizontal",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "0%",
            "contentOpaque": false,
            "height": 110,
            "minWidth": 1,
            "borderSize": 0,
            "paddingBottom": 0,
            "scrollBarMargin": 2,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": true,
            "data": {
                "name": "button menu sup"
            },
            "shadow": false,
            "overflow": "visible",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "center"
        },
        {
            "children": [
                "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
                "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
                "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
                "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
                "this.IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316"
            ],
            "id": "Container_B1573269_BF46_B846_41AD_E3E55F50C328",
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "right": "0%",
            "width": "91.265%",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "vertical",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "14.96%",
            "scrollBarMargin": 2,
            "minWidth": 1,
            "contentOpaque": false,
            "borderSize": 0,
            "height": "52.475%",
            "paddingBottom": 0,
            "gap": 3,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": true,
            "data": {
                "name": "-button set"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "visible": false,
            "horizontalAlign": "center"
        },
        {
            "fontFamily": "Yu Gothic UI Semibold",
            "textShadowBlurRadius": 3,
            "textShadowColor": "#000000",
            "id": "Label_00A17887_1348_DCC0_41B0_641A5088276D",
            "width": "98.137%",
            "textShadowHorizontalLength": 1,
            "fontColor": "#F5F9F5",
            "right": "0%",
            "verticalAlign": "middle",
            "textShadowOpacity": 0.7,
            "paddingRight": 0,
            "textShadowVerticalLength": 1,
            "paddingLeft": 0,
            "text": "Laboratorium Pembelajaran Biologi",
            "minHeight": 1,
            "top": "0%",
            "height": "58.75%",
            "minWidth": 1,
            "fontSize": "3vmin",
            "borderSize": 0,
            "paddingBottom": 0,
            "fontStyle": "normal",
            "class": "Label",
            "paddingTop": 0,
            "propagateClick": false,
            "data": {
                "name": "Gedung L lantai 1"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "fontWeight": "normal",
            "textDecoration": "none",
            "horizontalAlign": "left"
        },
        {
            "fontFamily": "Yu Gothic UI",
            "textShadowBlurRadius": 3,
            "textShadowColor": "#000000",
            "id": "Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D",
            "left": "2.49%",
            "width": "89.75%",
            "textShadowHorizontalLength": 1,
            "fontColor": "#F5F9F5",
            "verticalAlign": "middle",
            "textShadowOpacity": 0.7,
            "textShadowVerticalLength": 1,
            "paddingLeft": 0,
            "text": "Gedung L, Lantai 2",
            "minHeight": 1,
            "paddingRight": 0,
            "bottom": "2.5%",
            "height": "58.75%",
            "minWidth": 1,
            "fontSize": "2.5vmin",
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "fontStyle": "normal",
            "class": "Label",
            "propagateClick": false,
            "data": {
                "name": "Gedung L Judul"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "fontWeight": "normal",
            "textDecoration": "none",
            "horizontalAlign": "left"
        },
        {
            "borderRadius": 0,
            "children": [
                "this.MapViewer"
            ],
            "id": "Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
            "left": "0%",
            "width": 190,
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "0%",
            "backgroundColorRatios": [
                0,
                1
            ],
            "backgroundColor": [
                "#FFFFFF",
                "#FFFFFF"
            ],
            "minWidth": 1,
            "backgroundColorDirection": "vertical",
            "contentOpaque": false,
            "borderSize": 0,
            "height": 190,
            "paddingBottom": 0,
            "scrollBarMargin": 2,
            "gap": 10,
            "paddingTop": 0,
            "class": "Container",
            "propagateClick": false,
            "data": {
                "name": "minimap"
            },
            "shadow": false,
            "overflow": "scroll",
            "scrollBarWidth": 10,
            "backgroundOpacity": 0.24,
            "horizontalAlign": "left"
        },
        {
            "children": [
                "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
                "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140"
            ],
            "id": "Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD",
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "right": "0%",
            "width": "20.833%",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "0%",
            "scrollBarMargin": 2,
            "minWidth": 1,
            "contentOpaque": false,
            "borderSize": 0,
            "height": "51.579%",
            "paddingBottom": 0,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": false,
            "data": {
                "name": "zoom in out"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "left"
        },
        {
            "children": [
                "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4"
            ],
            "id": "Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E",
            "left": "15%",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "right": "15%",
            "verticalAlign": "top",
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "10%",
            "contentOpaque": false,
            "paddingRight": 0,
            "bottom": "10%",
            "scrollBarMargin": 2,
            "minWidth": 1,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "gap": 10,
            "class": "Container",
            "propagateClick": false,
            "data": {
                "name": "Global"
            },
            "shadow": false,
            "overflow": "visible",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "horizontalAlign": "center"
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241C563F_0652_7A03_4185_8A707E11C182",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241C363F_0652_7A03_419A_A3CB2A9C426C",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241CE63F_0652_7A03_419A_8CB7A12A7213",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_3_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_241D6641_0652_7A7F_4169_CADB914F8F88",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_6_0.png",
                    "width": 600,
                    "class": "ImageResourceLevel",
                    "height": 900
                }
            ],
            "id": "AnimatedImageResource_2F9C422C_3EF6_BDA1_41A9_CD062ECE3A8B",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E1EE727_05AE_1A02_4183_7BDE5E01D8E2_0_HS_4_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_2F9D822C_3EF6_BDA1_41C1_10A6B341D540",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE8FD5F_066E_0E03_4153_D5E70A57904E",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE8DD5F_066E_0E03_419B_227AF5587CD1",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_2_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C10E1DC_0A72_2EF8_4191_CA31EF8BB1BA",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_3_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C1121DC_0A72_2EF8_4192_3F2B51A143A2",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C1141DC_0A72_2EF8_4159_BFB11A2B7BB4",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_5_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_39E0EBD8_2A24_17A7_41C4_69BAD337F37C",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E0A9B81_05AE_0AFF_4174_2DCF557F5040_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_39E0CBD8_2A24_17A7_41C2_D88AD4866AA2",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEB5D5C_066E_0E05_419D_0E62B1E8B79D",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEACD5D_066E_0E07_418C_E36F15898952",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEA8D5D_066E_0E07_4189_F6F46092F5B6",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_3_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEA6D5D_066E_0E07_4187_B35EC292A4B9",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_4_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEA4D5D_066E_0E07_419C_FB14967FF746",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_5_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EEA3D5E_066E_0E05_418B_AB9D4AB7216C",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_6_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE9ED5E_066E_0E05_4144_D6E475DB291A",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_7_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_1EE9CD5E_066E_0E05_4160_63CBD0D0156C",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_1_HS_8_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_1EE9BD5E_066E_0E05_4190_8A0324EA9798",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_9_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2CCC10EF_0AF2_7603_4192_7849C8C1669C",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_10_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2CCCC0EF_0AF2_7603_4167_B0AFAE2D7810",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_11_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_22A52E80_0BB6_1548_4193_2A208E4A9210",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E624C7F_05AE_0E03_4193_0DA91B53BD02_0_HS_12_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_22ABDE92_0BB6_1548_416A_76A4F2060996",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE96D5F_066E_0E03_4182_289979AC2BF5",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE94D5F_066E_0E03_419A_9A6C60AC4DA9",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E68B89A_05AE_F60D_4170_EF87A46885AA_0_HS_2_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_22AF3EA3_0BB6_1548_419C_227AECB9973B",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE8BD5F_066E_0E03_419C_450D1EBB335D",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0EDA817F_05AE_3603_4193_73EA59B62F1A_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE86D60_066E_0E3D_417F_EA8F2AE79D2C",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE84D5E_066E_0E05_4183_290AE88A7578",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE82D5F_066E_0E03_4171_D0ADE2D2CBAD",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E0E929A_05AE_FA02_4192_9B4DC98898E6_0_HS_2_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_22AE4E95_0BB6_1548_4198_B6A5CDC2D7D2",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE7ED60_066E_0E3D_4195_2460C7CBB9BB",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE7DD60_066E_0E3D_418B_3E7BF4E88E4C",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE7BD60_066E_0E3D_4190_1E34B93FA226",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_1_HS_3_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE76D60_066E_0E3D_4190_CC28DD72CFEF",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C13C1DC_0A72_2EF8_4181_4961309C3C7B",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C1C11DC_0A72_2EF8_4197_0AC6FF319FDC",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_39FE3BDC_2A24_175F_41BB_AB2E62EA4FF0",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_7_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_2F99622B_3EF6_BDA7_41CE_C5AC0D2C05CC",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E17F74E_05AE_1A05_4191_3BD7E7DC3B3C_0_HS_8_0.png",
                    "width": 600,
                    "class": "ImageResourceLevel",
                    "height": 900
                }
            ],
            "id": "AnimatedImageResource_2F9ED22B_3EF6_BDA7_41BF_44E9E83EE1E5",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241F6641_0652_7A7F_4195_8AA75B653A1F",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E3757C5_05AE_1A07_4191_3551B2E75546_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241F2641_0652_7A7F_4190_D30CF2BAD992",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE99D5E_066E_0E05_4198_A7570EDFB438",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE97D5E_066E_0E05_4199_5B0F7554F7EB",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_22A84E94_0BB6_1548_4186_C6210691D61B",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E45F682_05AE_1AFD_4190_5C488C79FC6E_0_HS_3_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_22A80E95_0BB6_1548_4199_A4DDD69148DF",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE85D60_066E_0E3D_418E_6892CDF9D3BA",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E049CD3_05AE_0E03_418D_C53DE18D2134_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE80D60_066E_0E3D_419B_9A1291E1D594",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E78D269_05AE_3A0F_4194_073D5A49809B_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241DB641_0652_7A7F_419A_E8EBFD76F080",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE8BD5E_066E_0E05_4199_7E5857D605A0",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E69FC8F_05AE_0E03_4183_1FE0461FD4C7_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE86D5E_066E_0E05_4197_CB4B58A9EA17",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE75D60_066E_0E3D_415B_54E3E88F7750",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE73D60_066E_0E3D_4198_B2C780757916",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_1_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE71D60_066E_0E3D_4192_1A9A6274B630",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0_HS_3_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C1D61DE_0A72_2EF8_4191_B206FBBFEBD2",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0E3A61E8_05AE_760E_4150_28C072AD2F2C_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_2C1DA1DE_0A72_2EF8_4197_E1C9D347BC58",
            "rowCount": 6,
            "frameCount": 22
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE92D5F_066E_0E03_4198_3FEF656A1EC3",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0E181F5E_05AE_0A05_416D_04530F9BD830_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_1EE90D5F_066E_0E03_419B_C6B30F3A9A21",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241E2641_0652_7A7F_4194_10B462E8EEEA",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0EF88D41_05AE_0E7F_416D_363CEEF8DD3F_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_241EF641_0652_7A7F_4196_4EFEC46BFCAA",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "cursor": "hand",
            "maxHeight": 60,
            "maxWidth": 60,
            "id": "IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8",
            "width": 60,
            "pressedRollOverIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "height": 60,
            "minWidth": 1,
            "mode": "toggle",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed.png",
            "class": "IconButton",
            "transparencyActive": true,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8.png",
            "data": {
                "name": "image button menu"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "click": "if(!this.Container_B1573269_BF46_B846_41AD_E3E55F50C328.get('visible')){ this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, false, 0, null, null, false) }",
            "horizontalAlign": "center"
        },
        {
            "cursor": "hand",
            "id": "IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316",
            "width": 40,
            "pressedRollOverIconURL": "skin/IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "height": 40,
            "minWidth": 0,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316_pressed.png",
            "rollOverIconURL": "skin/IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316_rollover.png",
            "class": "IconButton",
            "transparencyActive": false,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_9C67FA55_8BE6_6D0A_41E1_4B261A23A316.png",
            "data": {
                "name": "Information"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "click": "this.showPopupImage(this.ImageResource_96DC7496_8BE6_E509_41CA_986B4E6B5265, null, '90%', '90%', this.FadeInEffect_96DC4496_8BE6_E509_41BD_2ED3D2DCB617, this.FadeOutEffect_96DC5496_8BE6_E509_41D7_62944F3FBBB8, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
            "horizontalAlign": "center"
        }],
        "scripts": {
            "setPanoramaCameraWithSpot": function (playListItem, yaw, pitch) { var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
            "setOverlayBehaviour": function (overlay, media, action) { var executeFunc = function () { switch (action) { case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if (overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if (window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function () { delete window.overlaysDispatched[id]; }, 2000); }; if (window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if (playList != undefined) { var item = this.getPlayListItemByMedia(playList, media); if (playList.get('items').indexOf(item) != playList.get('selectedIndex')) { var beginFunc = function (e) { item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
            "getPlayListItemByMedia": function (playList, media) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media) return item; } return undefined; },
            "setPanoramaCameraWithCurrentSpot": function (playListItem) { var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer == undefined) { return; } var playerClass = currentPlayer.get('class'); if (playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player') { return; } var fromMedia = currentPlayer.get('panorama'); if (fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
            "historyGoBack": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.back(); } },
            "changeBackgroundWhilePlay": function (playList, index, color) { var stopFunction = function (event) { playListItem.unbind('stop', stopFunction, this); if ((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))) { viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if ((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)) { viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
            "getGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios != undefined && audio.get('id') in audios) { audio = audios[audio.get('id')]; } return audio; },
            "playGlobalAudioWhilePlay": function (playList, index, audio, endCallback) { var changeFunction = function (event) { if (event.data.previousSelectedIndex == index) { this.stopGlobalAudio(audio); if (isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if (endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if (audios && audio.get('id') in audios) { audio = audios[audio.get('id')]; if (audio.get('state') != 'playing') { audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if (isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if (audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for (var i = 0; i < stateChangeFunctions.length; ++i) { var f = stateChangeFunctions[i]; if (typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
            "setMediaBehaviour": function (playList, index, mediaDispatcher) { var self = this; var stateChangeFunction = function (event) { if (event.data.state == 'stopped') { dispose.call(this, true); } }; var onBeginFunction = function () { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if (media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)) { player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function () { var index = playListDispatcher.get('selectedIndex'); if (index != -1) { indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function () { dispose.call(this, false); }; var dispose = function (forceDispose) { if (!playListDispatcher) return; var media = item.get('media'); if ((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if (panoramaSequence && panoramaSequenceIndex != -1) { if (panoramaSequence) { if (panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex - 1].get('class') == 'TargetPanoramaCameraMovement') { var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex - 1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function (event) { initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if (player) { item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for (var i = 0; i < buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if (sameViewerArea) { var currentMedia = this.getMediaFromPlayer(player); if (currentMedia == undefined || currentMedia == item.get('media')) { playListDispatcher.set('selectedIndex', indexDispatcher); } if (playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else { viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if (!mediaDispatcher) { var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if (!playListDispatcher) { playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if (playList.get('selectedIndex') == index || indexDispatcher == -1) { return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if (sameViewerArea) { if (playList != playListDispatcher) { playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else { viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if (camera) { panoramaSequence = camera.get('initialSequence'); if (panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function (property) { var value = player.get(property); if (value == undefined) return; if (Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for (var i = 0; i < buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if (player != itemDispatcher.get('player') || !mediaDispatcherByParam) { item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
            "getComponentByName": function (name) { var list = this.getByClassName('UIComponent'); for (var i = 0, count = list.length; i < count; ++i) { var component = list[i]; var data = component.get('data'); if (data != undefined && data.name == name) { return component; } } return undefined; },
            "autotriggerAtStart": function (playList, callback, once) { var onChange = function (event) { callback(); if (once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
            "playAudioList": function (audios) { if (audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function () { if (++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
            "setMainMediaByIndex": function (index) { var item = undefined; if (index >= 0 && index < this.mainPlayList.get('items').length) { this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
            "setMainMediaByName": function (name) { var items = this.mainPlayList.get('items'); for (var i = 0; i < items.length; ++i) { var item = items[i]; if (item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
            "showPopupImage": function (image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback) { var self = this; var closed = false; var playerClickFunction = function () { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function () { zoomImage.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var resizeFunction = function () { setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function () { self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function () { timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if (toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if (loadedCallback) loadedCallback(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); closed = true; if (timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if (autoCloseMilliSeconds) clearAutoClose(); if (hideCallback) hideCallback(); zoomImage.set('visible', false); if (hideEffect && hideEffect.get('duration') > 0) { hideEffect.bind('end', endEffectFunction, this); } else { zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if (toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function () { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function () { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function () { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function () { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if (right < 10) right = 10; if (top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function () { if (timeoutUserInteractionID) { clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else { closeButton.set('visible', false); } }; var userInteractionEndFunction = function () { if (!closed) { timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function () { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function () { self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
            "getPanoramaOverlayByName": function (panorama, name) { var overlays = this.getOverlays(panorama); for (var i = 0, count = overlays.length; i < count; ++i) { var overlay = overlays[i]; var data = overlay.get('data'); if (data != undefined && data.label == name) { return overlay; } } return undefined; },
            "historyGoForward": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.forward(); } },
            "pauseGlobalAudios": function (caller, exclude) { if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = 0; j < objAudios.length; ++j) { var a = objAudios[j]; if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
            "getMediaHeight": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxH = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('height') > maxH) maxH = r.get('height'); } return maxH; } else { return r.get('height') } default: return media.get('height'); } },
            "getCurrentPlayers": function () { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
            "getCurrentPlayerWithMedia": function (media) { var playerClass = undefined; var mediaPropertyName = undefined; switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if (playerClass != undefined) { var players = this.getByClassName(playerClass); for (var i = 0; i < players.length; ++i) { var player = players[i]; if (player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
            "pauseGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; } if (audio.get('state') == 'playing') audio.pause(); },
            "pauseGlobalAudiosWhilePlayItem": function (playList, index, exclude) { var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function () { if (playList.get('selectedIndex') != index) { if (hasState) { player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function (event) { var state = event.data.state; if (state == 'stopped') { this.resumeGlobalAudios(caller); } else if (state == 'playing') { this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if (hasState) { player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
            "showPopupPanoramaOverlay": function (popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio) { var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if (!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function () { var loadedFunction = function () { if (!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function () { var restoreShowDurationFunction = function () { popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if (popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if (!imageHD) { imageHD = popupPanoramaOverlay.get('image'); } if (!toggleImageHD && toggleImage) { toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function () { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
            "pauseCurrentPlayers": function (onlyPauseCameraIfPanorama) { var players = this.getCurrentPlayers(); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('state') == 'playing') { if (onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
            "setEndToItemIndex": function (playList, fromIndex, toIndex) { var endFunction = function () { if (playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
            "cloneCamera": function (camera) { var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
            "fixTogglePlayPauseButton": function (player) { var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if (typeof buttons !== 'undefined' && player.get('state') == 'playing') { if (!Array.isArray(buttons)) buttons = [buttons]; for (var i = 0; i < buttons.length; ++i) buttons[i].set('pressed', true); } },
            "setComponentVisibility": function (component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout) { var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if (keepVisibility) return; this.unregisterKey('visibility_' + component.get('id')); var changeVisibility = function () { if (effect && propertyEffect) { component.set(propertyEffect, effect); } component.set('visible', visible); if (component.get('class') == 'ViewerArea') { try { if (visible) component.restart(); else if (component.get('playbackState') == 'playing') component.pause(); } catch (e) { }; } }; var effectTimeoutName = 'effectTimeout_' + component.get('id'); if (!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)) { var effectTimeout = window[effectTimeoutName]; if (effectTimeout instanceof Array) { for (var i = 0; i < effectTimeout.length; i++) { clearTimeout(effectTimeout[i]) } } else { clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if (visible == component.get('visible') && !ignoreClearTimeout) return; if (applyAt && applyAt > 0) { var effectTimeout = setTimeout(function () { if (window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if (arrayTimeoutVal.length == 0) { delete window[effectTimeoutName]; } } else { delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if (window.hasOwnProperty(effectTimeoutName)) { window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; } else { window[effectTimeoutName] = effectTimeout; } } else { changeVisibility(); } },
            "getOverlays": function (media) { switch (media.get('class')) { case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for (var j = 0; j < frames.length; ++j) { overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
            "changePlayListWithSameSpot": function (playList, newIndex) { var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
            "init": function () { if (!Object.hasOwnProperty('values')) { Object.values = function (o) { return Object.keys(o).map(function (e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function (e) { var playList = e.source; var index = playList.get('selectedIndex'); if (index < 0) return; var id = playList.get('id'); if (!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
            "setCameraSameSpotAsMedia": function (camera, media) { var player = this.getCurrentPlayerWithMedia(media); if (player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
            "existsKey": function (key) { return key in window; },
            "getPixels": function (value) { var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch (unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
            "stopGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; if (audio) { delete audios[audio.get('id')]; if (Object.keys(audios).length == 0) { window.currentGlobalAudios = undefined; } } } if (audio) audio.stop(); },
            "unregisterKey": function (key) { delete window[key]; },
            "getPlayListItems": function (media, player) { var itemClass = (function () { switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length - 1; i >= 0; --i) { var item = items[i]; if (item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
            "registerKey": function (key, value) { window[key] = value; },
            "loadFromCurrentMediaPlayList": function (playList, delta) { var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while (newIndex < 0) { newIndex = totalItems + newIndex; }; if (currentIndex != newIndex) { playList.set('selectedIndex', newIndex); } },
            "getMediaWidth": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxW = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('width') > maxW) maxW = r.get('width'); } return maxW; } else { return r.get('width') } default: return media.get('width'); } },
            "shareTwitter": function (url) { window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
            "resumeGlobalAudios": function (caller) { if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length - 1; j >= 0; --j) { var a = audiosPaused[j]; if (objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i < count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
            "visibleComponentsIfPlayerFlagEnabled": function (components, playerFlag) { var enabled = this.get(playerFlag); for (var i in components) { components[i].set('visible', enabled); } },
            "showPopupPanoramaVideoOverlay": function (popupPanoramaOverlay, closeButtonProperties, stopAudios) { var self = this; var showEndFunction = function () { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function () { if (!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if (stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function () { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if (stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
            "loopAlbum": function (playList, index) { var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function () { player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
            "showComponentsWhileMouseOver": function (parentComponent, components, durationVisibleWhileOut) { var setVisibility = function (visible) { for (var i = 0, length = components.length; i < length; i++) { var component = components[i]; if (component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true) { setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function () { setVisibility(true); if (timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function () { var timeoutFunction = function () { setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
            "getMediaFromPlayer": function (player) { switch (player.get('class')) { case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
            "shareWhatsapp": function (url) { window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
            "keepComponentVisibility": function (component, keep) { var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if (value == undefined && keep) { this.registerKey(key, keep); } else if (value != undefined && !keep) { this.unregisterKey(key); } },
            "getActivePlayerWithViewer": function (viewerArea) { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if (playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if ((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if (playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if (playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
            "updateVideoCues": function (playList, index) { var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if (video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function () { if (playList.get('selectedIndex') != index) { video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function (event) { var activeCues = event.data.activeCues; for (var i = 0, count = cues.length; i < count; ++i) { var cue = cues[i]; if (activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime') + 0.5)) { cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
            "executeFunctionWhenChange": function (playList, index, endFunction, changeFunction) { var endObject = undefined; var changePlayListFunction = function (event) { if (event.data.previousSelectedIndex == index) { if (changeFunction) changeFunction.call(this); if (endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if (endFunction) { var playListItem = playList.get('items')[index]; if (playListItem.get('class') == 'PanoramaPlayListItem') { var camera = playListItem.get('camera'); if (camera != undefined) endObject = camera.get('initialSequence'); if (endObject == undefined) endObject = camera.get('idleSequence'); } else { endObject = playListItem.get('media'); } if (endObject) { endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
            "isCardboardViewMode": function () { var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
            "getPlayListWithMedia": function (media, onlySelected) { var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (onlySelected && playList.get('selectedIndex') == -1) continue; if (this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
            "updateMediaLabelFromPlayList": function (playList, htmlText, playListItemStopToDispose) { var changeFunction = function () { var index = playList.get('selectedIndex'); if (index >= 0) { var beginFunction = function () { playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function (index) { var media = playListItem.get('media'); var text = media.get('data'); if (!text) text = media.get('label'); setHtml(text); }; var setHtml = function (text) { if (text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if (htmlText.get('html')) { setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else { setMediaLabel(index); } } }; var disposeFunction = function () { htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if (playListItemStopToDispose) { playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
            "initGA": function () { var sendFunc = function (category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for (var i = 0, countI = media.length; i < countI; ++i) { var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for (var j = 0, countJ = overlays.length; j < countJ; ++j) { var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch (overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z < areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for (var i = 0, countI = components.length; i < countI; ++i) { var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for (var i = 0, countI = items.length; i < countI; ++i) { var item = items[i]; var media = item.get('media'); if (!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
            "triggerOverlay": function (overlay, eventName) { if (overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for (var i = 0; i < areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
            "shareFacebook": function (url) { window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
            "showPopupMedia": function (w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios) { var self = this; var closeFunction = function () { playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if (stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if (isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function () { w.hide(); }; var resizeFunction = function () { var getWinValue = function (property) { return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if (!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if (parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if (windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if (windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if (autoCloseWhenFinished) { this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if (isVideo) { this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if (stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
            "setStartTimeVideoSync": function (video, player) { this.setStartTimeVideo(video, player.get('currentTime')); },
            "setMapLocation": function (panoramaPlayListItem, mapPlayer) { var resetFunction = function () { panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
            "getMediaByName": function (name) { var list = this.getByClassName('Media'); for (var i = 0, count = list.length; i < count; ++i) { var media = list[i]; if ((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name) { return media; } } return undefined; },
            "stopAndGoCamera": function (camera, ms) { var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function () { sequence.play(); }; setTimeout(timeoutFunction, ms); },
            "setStartTimeVideo": function (video, time) { var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function () { for (var i = 0; i < items.length; ++i) { var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for (var i = 0; i < items.length; ++i) { var item = items[i]; var player = item.get('player'); if (player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
            "syncPlaylists": function (playLists) { var changeToMedia = function (media, playListDispatched) { for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (playList != playListDispatched) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { if (items[j].get('media') == media) { if (playList.get('selectedIndex') != j) { playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function (event) { var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if (selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function (event) { var panoramaMapLocation = event.source.get('panoramaMapLocation'); if (panoramaMapLocation) { var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for (var i = 0, count = playLists.length; i < count; ++i) { playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for (var i = 0, count = mapPlayers.length; i < count; ++i) { mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
            "resumePlayers": function (players, onlyResumeCameraIfPanorama) { for (var i = 0; i < players.length; ++i) { var player = players[i]; if (onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.resumeCamera(); } else { player.play(); } } },
            "showWindow": function (w, autoCloseMilliSeconds, containsAudio) { if (w.get('visible') == true) { return; } var closeFunction = function () { clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function () { w.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
            "playGlobalAudio": function (audio, endCallback) { var endFunction = function () { audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if (endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if (!audios) { audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if (audio.get('state') == 'playing') { return audio; } if (!audio.get('loop')) { audio.bind('end', endFunction, this); } audio.play(); return audio; },
            "startPanoramaWithCamera": function (media, camera) { if (window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1) { return; } var playLists = this.getByClassName('PlayList'); if (playLists.length == 0) return; var restoreItems = []; for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')) { restoreItems.push({ camera: item.get('camera'), item: item }); item.set('camera', camera); } } } if (restoreItems.length > 0) { if (window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function () { var index = window.currentPanoramasWithCameraChanged.indexOf(media); if (index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
            "openLink": function (url, name) { if (url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if (extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if (isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
            "getKey": function (key) { return window[key]; }
        },
        "defaultVRPointer": "laser",
        "scrollBarMargin": 2,
        "buttonToggleFullscreen": "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
        "minWidth": 20,
        "contentOpaque": false,
        "borderSize": 0,
        "height": "100%",
        "paddingBottom": 0,
        "paddingTop": 0,
        "gap": 10,
        "class": "Player",
        "data": {
            "name": "Player1268"
        },
        "propagateClick": false,
        "shadow": false,
        "overflow": "visible",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "desktopMipmappingEnabled": false,
        "mouseWheelEnabled": true,
        "horizontalAlign": "left",
        "downloadEnabled": false
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




