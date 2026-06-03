(function () {
    var script = {
        "start": "this.init(); this.playList_980B6C0D_8BEE_251B_41B5_5D097A2CF315.set('selectedIndex', 0); this.playList_980B5C0D_8BEE_251B_41D1_9B79AFF51451.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
        "backgroundPreloadEnabled": true,
        "children": [
            "this.MainViewer",
            "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "this.Container_339EF22D_3F1E_5384_41AF_A165341C8E63",
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
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_9834BC0D_8BEE_251B_41DD_597300530D33",
            "class": "PlayList"
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
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_980B6C0D_8BEE_251B_41B5_5D097A2CF315",
            "class": "PlayList"
        },
        {
            "duration": 500,
            "id": "FadeInEffect_98042C1B_8BEE_253E_41B0_75E5717B9EA6",
            "class": "FadeInEffect",
            "easing": "cubic_in"
        },
        {
            "fieldOfViewOverlayOutsideColor": "#000000",
            "label": "Lantai 2 - Copy",
            "id": "map_0165C931_2ADC_10E9_4135_B5B237DBFEB4",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "maximumZoomFactor": 1.2,
            "overlays": [
                "this.overlay_0477A708_2ADC_10A7_4174_B8A05688A5E0",
                "this.overlay_01753244_2ADC_10AF_4163_92D4A0256A0B",
                "this.overlay_0403C929_2ADD_F0F9_4198_8CE81E121CCC"
            ],
            "width": 2500,
            "fieldOfViewOverlayRadiusScale": 0.3,
            "initialZoomFactor": 1,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4.png",
                        "width": 2500,
                        "class": "ImageResourceLevel",
                        "height": 1667
                    },
                    {
                        "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_lq.png",
                        "width": 313,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 209
                    }
                ]
            },
            "class": "Map",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "thumbnailUrl": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_t.png",
            "scaleMode": "fit_inside",
            "minimumZoomFactor": 0.5,
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "height": 1667
        },
        {
            "items": [
                {
                    "media": "this.video_228A4601_3F36_E563_41B1_730E2DA2CD31",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_980AEC0D_8BEE_251B_41D2_C305729D803C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_980AEC0D_8BEE_251B_41D2_C305729D803C, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_980AEC0D_8BEE_251B_41D2_C305729D803C",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": -85.94,
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
            "id": "camera_9FF64C5A_8BEE_253E_41D8_472537499CAD",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/zoomImage_9882725B_8BEE_1D3E_41DF_C324428D883C_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_9882725B_8BEE_1D3E_41DF_C324428D883C_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_9882725B_8BEE_1D3E_41DF_C324428D883C_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ],
            "id": "ImageResource_98043C1B_8BEE_253E_41CC_803CBBCA1FCB",
            "class": "ImageResource"
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
                    "x": 678.72,
                    "angle": 178.86,
                    "y": 382.25,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_114453_00_007",
            "hfovMin": "150%",
            "id": "panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0B945D70_13B8_5441_41AB_71247990FC35",
                    "yaw": -12.94,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -77.44
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_0A02E72B_13B8_75C7_41B1_34F9D4A04557",
                "this.overlay_0A37A530_13C8_35C1_419E_9B3126FEC6A4"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/f/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/l/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/u/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/r/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/b/2/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0/d/2/{row}_{column}.jpg",
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
            "thumbnailUrl": "media/video_228A4601_3F36_E563_41B1_730E2DA2CD31_t.jpg",
            "scaleMode": "fit_inside",
            "width": 2240,
            "loop": false,
            "id": "video_228A4601_3F36_E563_41B1_730E2DA2CD31",
            "label": "Virtual Reality (1)",
            "class": "Video",
            "height": 2240,
            "video": {
                "width": 2240,
                "mp4Url": "media/video_228A4601_3F36_E563_41B1_730E2DA2CD31.mp4",
                "class": "VideoResource",
                "height": 2240
            }
        },
        {
            "initialPosition": {
                "yaw": 167.06,
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
            "id": "camera_9FE48C47_8BEE_2516_41D8_568509E82A8D",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_0165C931_2ADC_10E9_4135_B5B237DBFEB4",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_980B3C0D_8BEE_251B_41C6_5F835D0D48E0",
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
            "id": "panorama_0B945D70_13B8_5441_41AB_71247990FC35_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
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
            "fieldOfViewOverlayOutsideColor": "#000000",
            "label": "Lantai 2",
            "id": "map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "maximumZoomFactor": 4,
            "overlays": [
                "this.overlay_057D5FA6_18DC_7BE5_41AC_73FA8AC087FC",
                "this.overlay_05666006_18DD_A4A4_41A6_BF710D681160",
                "this.overlay_05C65210_18DD_E4BC_41AB_74800B671F88",
                "this.overlay_057496D9_2ADC_7159_41B1_9B7E6EA2D5DC"
            ],
            "width": 1667,
            "fieldOfViewOverlayRadiusScale": 0.18,
            "initialZoomFactor": 3,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10.png",
                        "width": 1667,
                        "class": "ImageResourceLevel",
                        "height": 2500
                    },
                    {
                        "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_lq.png",
                        "width": 209,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 314
                    }
                ]
            },
            "class": "Map",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "thumbnailUrl": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_t.png",
            "scaleMode": "fit_inside",
            "minimumZoomFactor": 0.5,
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "height": 2500
        },
        {
            "items": [
                "this.PanoramaPlayListItem_980F9C10_8BEE_2509_41D9_2D64092EA40C",
                "this.PanoramaPlayListItem_980CBC12_8BEE_2509_41DB_809F941806DC",
                "this.PanoramaPlayListItem_98032C12_8BEE_2509_41B6_6F454758E224"
            ],
            "id": "mainPlayList",
            "class": "PlayList"
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
            "initialPosition": {
                "yaw": 169.14,
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
            "id": "camera_9FE83C38_8BEE_2579_41E0_8CE87C1FDAE6",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
                    "x": 692.96,
                    "angle": 88.11,
                    "y": 1094.32,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_121737_00_021",
            "hfovMin": "150%",
            "id": "panorama_0B945D70_13B8_5441_41AB_71247990FC35",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91",
                    "yaw": 94.06,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -10.86
                },
                {
                    "panorama": "this.panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D",
                    "yaw": -77.44,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": -12.94
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_0B6919D0_13B8_5C40_4187_070E8B593AB8",
                "this.overlay_0A5AC1B0_13B8_4CC0_419C_4D0E627A108C",
                "this.overlay_084078FE_13C8_3C40_41A8_CB641062E765",
                "this.overlay_09897AFA_13C8_5C41_41A4_2C93A4F831AA"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/f/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/f/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/f/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/l/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/l/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/l/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/u/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/u/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/u/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/r/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/r/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/r/2/{row}_{column}.jpg",
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
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/b/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/b/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/b/2/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/d/0/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/d/1/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0/d/2/{row}_{column}.jpg",
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
            "id": "FadeOutEffect_9804DC1B_8BEE_253E_41DE_EFDD240F4E6E",
            "class": "FadeOutEffect",
            "easing": "cubic_out"
        },
        {
            "viewerArea": "this.MainViewer",
            "id": "MainViewerVideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "mapLocations": [
                {
                    "map": "this.map_0685818E_18DC_E7A5_41A5_36F4479B0F10",
                    "x": 678.72,
                    "angle": 0,
                    "y": 1870.67,
                    "class": "PanoramaMapLocation"
                }
            ],
            "label": "IMG_20260427_125005_00_041",
            "id": "panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91",
            "pitch": 0,
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_0B945D70_13B8_5441_41AB_71247990FC35",
                    "yaw": -10.86,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "backwardYaw": 94.06
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "overlays": [
                "this.overlay_0ABC4213_13B9_CFC0_41AF_ED64BE6959DE",
                "this.overlay_0A66AAFB_13C9_DC47_41AC_A108429A376C"
            ],
            "vfov": 180,
            "thumbnailUrl": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/f/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/l/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/u/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/r/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/b/3/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0/d/3/{row}_{column}.jpg",
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
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_0165C931_2ADC_10E9_4135_B5B237DBFEB4",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_980B5C0D_8BEE_251B_41D1_9B79AFF51451",
            "class": "PlayList"
        },
        {
            "initialPosition": {
                "yaw": 102.56,
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
            "id": "camera_9FC7CC68_8BEE_2519_4157_895CD20F420C",
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
            "id": "panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_camera",
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
            "id": "panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_camera",
            "class": "PanoramaCamera",
            "automaticZoomSpeed": 10
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
                "this.Label_00A17887_1348_DCC0_41B0_641A5088276D"
            ],
            "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "left": "0.29%",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "width": "27.334%",
            "verticalAlign": "top",
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "top": "1.2%",
            "paddingRight": 0,
            "scrollBarMargin": 2,
            "minWidth": 1,
            "contentOpaque": false,
            "borderSize": 0,
            "height": "10.935%",
            "paddingBottom": 0,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": false,
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
            "id": "Container_339EF22D_3F1E_5384_41AF_A165341C8E63",
            "left": "1.83%",
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
            "bottom": "2.41%",
            "height": 190,
            "minWidth": 1,
            "borderSize": 0,
            "paddingBottom": 0,
            "gap": 10,
            "paddingTop": 0,
            "class": "Container",
            "propagateClick": false,
            "data": {
                "name": "Container1534"
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
                "name": "UIComponent7805"
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
                "name": "ZoomImage7806"
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
                "name": "CloseButton7807"
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
            "map": {
                "width": 57.25,
                "x": 2038.18,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 647.64,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 56.01,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 2038.18,
                "class": "HotspotMapOverlayImage",
                "y": 647.64,
                "width": 57.25,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_0.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 56
                        }
                    ]
                },
                "height": 56.01
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_0477A708_2ADC_10A7_4174_B8A05688A5E0",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 57.25,
                "x": 1373.66,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 661.04,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 56.01,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1373.66,
                "class": "HotspotMapOverlayImage",
                "y": 661.04,
                "width": 57.25,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_1.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 56
                        }
                    ]
                },
                "height": 56.01
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_01753244_2ADC_10AF_4163_92D4A0256A0B",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "map": {
                "width": 57.25,
                "x": 355.44,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 658.36,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 56.01,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 355.44,
                "class": "HotspotMapOverlayImage",
                "y": 658.36,
                "width": 57.25,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0165C931_2ADC_10E9_4135_B5B237DBFEB4_HS_2.png",
                            "width": 57,
                            "class": "ImageResourceLevel",
                            "height": 56
                        }
                    ]
                },
                "height": 56.01
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_0403C929_2ADD_F0F9_4198_8CE81E121CCC",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 21.03,
                    "yaw": 176.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -0.99
                }
            ],
            "data": {
                "label": "Circle Door 01"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Laboratorium Pembelajaran Biologi",
                    "click": "this.openLink('Labbio/index.htm', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_9F221A85_87FD_A321_41CE_E1243E0C04E3",
                    "pitch": -0.99,
                    "hfov": 21.03,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 176.18
                }
            ],
            "id": "overlay_0A02E72B_13B8_75C7_41B1_34F9D4A04557",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 17.22,
                    "yaw": -12.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -29.75
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0B945D70_13B8_5441_41AB_71247990FC35, this.camera_9FC7CC68_8BEE_2519_4157_895CD20F420C); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0879E0F4_13C8_4C40_4194_A20497B2F6B8",
                    "pitch": -29.75,
                    "hfov": 17.22,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -12.94
                }
            ],
            "id": "overlay_0A37A530_13C8_35C1_419E_9B3126FEC6A4",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
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
            "map": {
                "width": 89.99,
                "x": 633.9,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_0_map.gif",
                            "width": 20,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 1835.83,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 70.4,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 633.73,
                "class": "HotspotMapOverlayImage",
                "y": 1835.47,
                "width": 89.99,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_0.png",
                            "width": 89,
                            "class": "ImageResourceLevel",
                            "height": 70
                        }
                    ]
                },
                "height": 70.4
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_057D5FA6_18DC_7BE5_41AC_73FA8AC087FC",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 89.99,
                "x": 648.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_1_map.gif",
                            "width": 20,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 1059.47,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 70.4,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 647.97,
                "class": "HotspotMapOverlayImage",
                "y": 1059.12,
                "width": 89.99,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_1.png",
                            "width": 89,
                            "class": "ImageResourceLevel",
                            "height": 70
                        }
                    ]
                },
                "height": 70.4
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_05666006_18DD_A4A4_41A6_BF710D681160",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 89.99,
                "x": 633.9,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_2_map.gif",
                            "width": 20,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 347.22,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 70.4,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 633.73,
                "class": "HotspotMapOverlayImage",
                "y": 347.04,
                "width": 89.99,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_2.png",
                            "width": 89,
                            "class": "ImageResourceLevel",
                            "height": 70
                        }
                    ]
                },
                "height": 70.4
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_05C65210_18DD_E4BC_41AB_74800B671F88",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "map": {
                "width": 89.99,
                "x": 633.73,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_3_map.gif",
                            "width": 20,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 347.04,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 70.4,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 633.73,
                "class": "HotspotMapOverlayImage",
                "y": 347.04,
                "width": 89.99,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0685818E_18DC_E7A5_41A5_36F4479B0F10_HS_3.png",
                            "width": 89,
                            "class": "ImageResourceLevel",
                            "height": 70
                        }
                    ]
                },
                "height": 70.4
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "id": "overlay_057496D9_2ADC_7159_41B1_9B7E6EA2D5DC",
            "class": "AreaHotspotMapOverlay",
            "rollOverDisplay": true
        },
        {
            "camera": "this.panorama_0B945D70_13B8_5441_41AB_71247990FC35_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_980F9C10_8BEE_2509_41D9_2D64092EA40C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
            "media": "this.panorama_0B945D70_13B8_5441_41AB_71247990FC35",
            "id": "PanoramaPlayListItem_980F9C10_8BEE_2509_41D9_2D64092EA40C",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_980CBC12_8BEE_2509_41DB_809F941806DC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
            "media": "this.panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D",
            "id": "PanoramaPlayListItem_980CBC12_8BEE_2509_41DB_809F941806DC",
            "class": "PanoramaPlayListItem"
        },
        {
            "camera": "this.panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_camera",
            "end": "this.trigger('tourEnded')",
            "player": "this.MainViewerPanoramaPlayer",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_98032C12_8BEE_2509_41B6_6F454758E224, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
            "media": "this.panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91",
            "id": "PanoramaPlayListItem_98032C12_8BEE_2509_41B6_6F454758E224",
            "class": "PanoramaPlayListItem"
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
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 16.52,
                    "yaw": -119.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 0.11
                }
            ],
            "data": {
                "label": "Circle Door 01"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Laboratorium Komputer",
                    "click": "this.openLink('labkom/index.htm', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_9F232A84_87FD_A327_41B6_68880FB7748E",
                    "pitch": 0.11,
                    "hfov": 16.52,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -119.81
                }
            ],
            "id": "overlay_0B6919D0_13B8_5C40_4187_070E8B593AB8",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 15.65,
                    "yaw": 94.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -25.78
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91, this.camera_9FE83C38_8BEE_2579_41E0_8CE87C1FDAE6); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_087830F3_13C8_4C40_4195_B66D413D96B6",
                    "pitch": -25.78,
                    "hfov": 15.65,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 94.06
                }
            ],
            "id": "overlay_0A5AC1B0_13B8_4CC0_419C_4D0E627A108C",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 14.58,
                    "yaw": -77.44,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -32.96
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D, this.camera_9FE48C47_8BEE_2516_41D8_568509E82A8D); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_087880F3_13C8_4C40_4192_71C32DB70BD3",
                    "pitch": -32.96,
                    "hfov": 14.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -77.44
                }
            ],
            "id": "overlay_084078FE_13C8_3C40_41A8_CB641062E765",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 24.19,
                    "yaw": 10.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_3_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -37.78
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Lantai 1",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_114030_00_005', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_087950F3_13C8_4C40_419C_BF8F7027D1BB",
                    "pitch": -37.78,
                    "hfov": 24.19,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 10.01
                }
            ],
            "id": "overlay_09897AFA_13C8_5C41_41A4_2C93A4F831AA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 8.02,
                    "yaw": 165.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 0.63
                }
            ],
            "data": {
                "label": "Circle Door 01"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Laboratorium Pembelajaran Kimia",
                    "click": "this.openLink('labkim/index.htm', '_self')"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_9F228A85_87FD_A321_41B6_8F716B20BC27",
                    "pitch": 0.63,
                    "hfov": 8.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 165.62
                }
            ],
            "id": "overlay_0ABC4213_13B9_CFC0_41AF_ED64BE6959DE",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false
        },
        {
            "enabledInCardboard": true,
            "maps": [
                {
                    "hfov": 20.88,
                    "yaw": -10.86,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.72
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_0B945D70_13B8_5441_41AB_71247990FC35, this.camera_9FF64C5A_8BEE_253E_41D8_472537499CAD); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "useHandCursor": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_087E60F4_13C8_4C40_41B2_DB4BF9B8F25B",
                    "pitch": -21.72,
                    "hfov": 20.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -10.86
                }
            ],
            "id": "overlay_0A66AAFB_13C9_DC47_41AC_A108429A376C",
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
                "this.IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566"
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
            "left": "2.48%",
            "width": "89.752%",
            "textShadowHorizontalLength": 1,
            "fontColor": "#F5F9F5",
            "verticalAlign": "middle",
            "textShadowOpacity": 0.7,
            "textShadowVerticalLength": 1,
            "paddingLeft": 0,
            "text": "Gedung L, Lantai 2",
            "minHeight": 1,
            "top": "0%",
            "paddingRight": 0,
            "height": "58.75%",
            "minWidth": 1,
            "fontSize": "2.84vh",
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
            "height": "54.211%",
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
                "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
                "this.Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A"
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
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_0_HS_0_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_9F221A85_87FD_A321_41CE_E1243E0C04E3",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0A32A5FF_13B8_5440_41AE_C3AE5179E03D_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_0879E0F4_13C8_4C40_4194_A20497B2F6B8",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_0_HS_0_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_9F232A84_87FD_A327_41B6_68880FB7748E",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_087830F3_13C8_4C40_4195_B66D413D96B6",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_087880F3_13C8_4C40_4192_71C32DB70BD3",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0B945D70_13B8_5441_41AB_71247990FC35_1_HS_3_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_087950F3_13C8_4C40_419C_BF8F7027D1BB",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_0_HS_0_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_9F228A85_87FD_A321_41B6_8F716B20BC27",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_0AE493A5_13B8_4CC3_4193_CFEAD1ABDC91_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_087E60F4_13C8_4C40_41B2_DB4BF9B8F25B",
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
            "id": "IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566",
            "width": 40,
            "pressedRollOverIconURL": "skin/IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566_pressed_rollover.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "height": 40,
            "minWidth": 0,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566_pressed.png",
            "rollOverIconURL": "skin/IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566_rollover.png",
            "class": "IconButton",
            "transparencyActive": false,
            "paddingTop": 0,
            "propagateClick": true,
            "iconURL": "skin/IconButton_990D2A2B_8BEF_ED1E_41D6_A9CDE67C5566.png",
            "data": {
                "name": "Information"
            },
            "shadow": false,
            "borderRadius": 0,
            "backgroundOpacity": 0,
            "click": "this.showPopupImage(this.ImageResource_98043C1B_8BEE_253E_41CC_803CBBCA1FCB, null, '90%', '90%', this.FadeInEffect_98042C1B_8BEE_253E_41B0_75E5717B9EA6, this.FadeOutEffect_9804DC1B_8BEE_253E_41DE_EFDD240F4E6E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
            "horizontalAlign": "center"
        },
        {
            "id": "Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A",
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "width": "100%",
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "minHeight": 1,
            "scrollBarMargin": 2,
            "height": 140,
            "minWidth": 1,
            "contentOpaque": false,
            "borderSize": 0,
            "paddingBottom": 0,
            "gap": 10,
            "class": "Container",
            "paddingTop": 0,
            "propagateClick": false,
            "data": {
                "name": "header"
            },
            "shadow": false,
            "overflow": "scroll",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "backgroundOpacity": 0,
            "horizontalAlign": "left"
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
