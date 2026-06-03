(function () {
    var script = {
        "shadow": false,
        "downloadEnabled": false,
        "start": "this.init(); this.playList_9D734207_8EF3_0C11_41DA_E10512D96EC8.set('selectedIndex', 0); this.playList_9D7B221D_8EF3_0C31_41D6_9730E18EBAE4.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
        "children": [
            "this.MainViewer",
            "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "this.Container_320C1ADD_3F4A_FD16_41B0_FBCDFB126CCF",
            "this.veilPopupPanorama",
            "this.zoomImagePopupPanorama",
            "this.closeButtonPopupPanorama"
        ],
        "width": "100%",
        "id": "rootPlayer",
        "scrollBarMargin": 2,
        "paddingRight": 0,
        "overflow": "visible",
        "verticalAlign": "top",
        "paddingLeft": 0,
        "minHeight": 20,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarVisible": "rollOver",
        "definitions": [{
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 149.9,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 3.25,
            "hideEasing": "cubic_out",
            "hfov": 2.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_33F075D6_27F8_DDCF_4164_A44E579042FA",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_9D7B121D_8EF3_0C2F_41E1_06FF1B56ACEF",
            "class": "PlayList"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -137.48,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0915E81B_19A3_43ED_4192_522F66AE8B97",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0915E81B_19A3_43ED_4192_522F66AE8B97_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 7.62,
            "hideEasing": "cubic_out",
            "hfov": 3.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "fontColor": "#FFFFFF",
            "rollOverBackgroundColor": "#000000",
            "class": "Menu",
            "children": [
                {
                    "label": "IMG_20260414_131641_00_111",
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 0)"
                },
                {
                    "label": "IMG_20260414_131935_00_112",
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 1)"
                },
                {
                    "label": "IMG_20260414_132053_00_113",
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 2)"
                }
            ],
            "label": "Media",
            "id": "Menu_9D666230_8EF3_0C70_41D3_EF9BD8BA4832",
            "opacity": 0.4,
            "fontFamily": "Arial",
            "selectedFontColor": "#FFFFFF",
            "rollOverOpacity": 0.8,
            "selectedBackgroundColor": "#202020",
            "backgroundColor": "#404040",
            "rollOverFontColor": "#FFFFFF"
        },
        {
            "duration": 500,
            "id": "FadeInEffect_AB889B7B_8BE6_63FE_41E0_FBA1ED7D1692",
            "class": "FadeInEffect",
            "easing": "cubic_in"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 130.53,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 5.86,
            "hideEasing": "cubic_out",
            "hfov": 2.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "movementMode": "constrained",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "viewerArea": "this.MapViewer",
            "id": "MapViewerMapPlayer",
            "class": "MapPlayer"
        },
        {
            "label": "IMG_20260414_131935_00_112",
            "id": "panorama_B8976067_B63F_4C4D_41D4_82276E08E98E",
            "mapLocations": [
                {
                    "map": "this.map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D",
                    "x": 2113.45,
                    "angle": 0,
                    "y": 2641.69,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_B92B9C69_B63D_B445_41D5_D58A195B1A6E",
                "this.overlay_B75ACFFF_B9C1_57B0_41E2_D884B55C4532",
                "this.overlay_A9C68ACC_BBB5_BC1C_41C9_28DB94073505",
                "this.overlay_ABEB1951_BBCB_5C07_41D6_E965A4C1E340",
                "this.overlay_094AB12E_19AC_C427_4184_558E15996828",
                "this.overlay_094AA12E_19AC_C427_41B7_D54BC612F322",
                "this.overlay_094A912E_19AC_C427_41B9_56DCEF9E054C",
                "this.overlay_094A812E_19AC_C427_4152_907AE9A120B0",
                "this.overlay_094A712E_19AC_C427_41B6_2B80DC54BF1D",
                "this.popup_0946F10E_19AC_C5E7_41AB_8B05418F03C2",
                "this.popup_0946B10E_19AC_C5E7_4177_479386C984F9",
                "this.popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1",
                "this.popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D",
                "this.popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99",
                "this.popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E",
                "this.popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA",
                "this.overlay_9DB23AAE_8EF1_3C10_41DF_99F687786B80"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6"
                },
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6"
                },
                {
                    "panorama": "this.panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2",
                    "yaw": -5.65,
                    "class": "AdjacentPanorama",
                    "backwardYaw": 164.04,
                    "distance": 1
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "pitch": 0,
            "cardboardMenu": "this.Menu_9D666230_8EF3_0C70_41D3_EF9BD8BA4832",
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/f/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/l/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/u/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/r/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/b/3/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0/d/3/{row}_{column}.jpg",
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
            ],
            "thumbnailUrl": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_t.jpg",
            "hfovMax": 130
        },
        {
            "id": "camera_9D46B29D_8EF3_0C30_41D3_66274031224F",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": 176.6,
                "class": "PanoramaCameraPosition",
                "pitch": -3.87
            },
            "automaticZoomSpeed": 10
        },
        {
            "items": [
                {
                    "media": "this.video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9D7AA222_8EF3_0C10_41D6_85FA1F2AE742, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9D7AA222_8EF3_0C10_41D6_85FA1F2AE742, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_9D7AA222_8EF3_0C10_41D6_85FA1F2AE742",
            "class": "PlayList"
        },
        {
            "thumbnailUrl": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E_t.jpg",
            "scaleMode": "fit_inside",
            "width": 2964,
            "loop": false,
            "id": "video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E",
            "label": "Laboratorium komputer",
            "class": "Video",
            "height": 1694,
            "video": {
                "width": 1270,
                "mp4Url": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "levels": [
                {
                    "url": "media/popup_09152819_19A3_43EA_41B8_7696E6AD3203_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_09152819_19A3_43EA_41B8_7696E6AD3203_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_09152819_19A3_43EA_41B8_7696E6AD3203_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_09152819_19A3_43EA_41B8_7696E6AD3203_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_353E481D_27F8_D242_41C2_463430ED82F6",
            "class": "ImageResource"
        },
        {
            "displayPlaybackBar": true,
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "viewerArea": "this.MainViewer",
            "id": "MainViewerPanoramaPlayer",
            "touchControlMode": "drag_rotation",
            "mouseControlMode": "drag_acceleration",
            "buttonToggleGyroscope": "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "buttonToggleHotspots": "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "buttonCardboardView": "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "gyroscopeVerticalDraggingEnabled": true,
            "class": "PanoramaPlayer"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0915E81B_19A3_43ED_4192_522F66AE8B97_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0915E81B_19A3_43ED_4192_522F66AE8B97_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0915E81B_19A3_43ED_4192_522F66AE8B97_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0915E81B_19A3_43ED_4192_522F66AE8B97_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_353D181E_27F8_D27F_41A1_D2F8B066DD39",
            "class": "ImageResource"
        },
        {
            "id": "camera_9D49D2AC_8EF3_0C10_41DF_442043BC2962",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": 176.6,
                "class": "PanoramaCameraPosition",
                "pitch": -3.87
            },
            "automaticZoomSpeed": 10
        },
        {
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "id": "map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D",
            "fieldOfViewOverlayOutsideColor": "#000000",
            "width": 3571,
            "label": "Labkom",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D.png",
                        "width": 1828,
                        "class": "ImageResourceLevel",
                        "height": 3200
                    },
                    {
                        "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_lq.png",
                        "width": 193,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 338
                    }
                ]
            },
            "minimumZoomFactor": 0.5,
            "overlays": [
                "this.overlay_3F1E8254_1B74_A4A4_4186_00B544CE86B3",
                "this.overlay_3F5DAABF_1B75_A5E3_4198_0DE31D65A828",
                "this.overlay_3F0E1248_1B74_64AD_41B1_18F8BC0B8A32"
            ],
            "class": "Map",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "thumbnailUrl": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_t.png",
            "scaleMode": "fit_to_width",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "initialZoomFactor": 2,
            "fieldOfViewOverlayRadiusScale": 0.3,
            "maximumZoomFactor": 4,
            "height": 6249
        },
        {
            "levels": [
                {
                    "url": "media/popup_08893BAB_19A7_442E_4195_A0A154CA9323_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_08893BAB_19A7_442E_4195_A0A154CA9323_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_08893BAB_19A7_442E_4195_A0A154CA9323_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_08893BAB_19A7_442E_4195_A0A154CA9323_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C8159DC_19BC_C46B_41A8_907A6B1B95BC",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_081543AC_19A7_442B_41B2_9138670769D7_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_081543AC_19A7_442B_41B2_9138670769D7_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_081543AC_19A7_442B_41B2_9138670769D7_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_081543AC_19A7_442B_41B2_9138670769D7_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C8329E1_19BC_C45D_4192_AD5D4A36F610",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C9ED9E3_19BC_C45D_41B9_40645D3DDF2A",
            "class": "ImageResource"
        },
        {
            "label": "IMG_20260414_131641_00_111",
            "id": "panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6",
            "mapLocations": [
                {
                    "map": "this.map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D",
                    "x": 1977.25,
                    "angle": -172.7,
                    "y": 5446.17,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_BB0B90C6_B63F_4C4C_41E1_0FB32E3B27D6",
                "this.overlay_09E0DBD2_19A3_447F_41B5_C271E1916B73",
                "this.overlay_093B6D42_19A4_BC5F_41A7_79F27449E737",
                "this.overlay_09D6A4ED_19A5_4C2A_41B1_3C6E1E4FF76F",
                "this.overlay_1666F287_19A5_C4E5_41B5_08D0040AB9C8",
                "this.overlay_09A81BFF_19A5_C426_41A7_1E950753C7B5",
                "this.popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79",
                "this.popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D",
                "this.popup_08893BAB_19A7_442E_4195_A0A154CA9323",
                "this.popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925",
                "this.popup_081543AC_19A7_442B_41B2_9138670769D7",
                "this.overlay_92172FD5_87FD_A121_41BD_47028CDF509C",
                "this.overlay_9CB4CF9E_8EF7_1433_41D3_84543E7BE1A0",
                "this.overlay_9C2BD58E_8EF7_3410_41DC_AEA365714ABC",
                "this.popup_9D5F48D7_8EF1_1C31_41CD_DB67AB5139B8"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "class": "AdjacentPanorama",
                    "panorama": "this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E"
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "pitch": 0,
            "cardboardMenu": "this.Menu_9D666230_8EF3_0C70_41D3_EF9BD8BA4832",
            "vfov": 180,
            "thumbnailUrl": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_t.jpg",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/f/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/l/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/u/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/r/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/b/3/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0/d/3/{row}_{column}.jpg",
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
                    "url": "media/popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C8209E1_19BC_C45D_41B6_B979C28EA365",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1_0_0.png",
                    "width": 2652,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1_0_1.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1_0_2.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1_0_3.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C9D89E1_19BC_C45D_41B9_574CFF5E7A39",
            "class": "ImageResource"
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_9D734207_8EF3_0C11_41DA_E10512D96EC8",
            "class": "PlayList"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C8699DC_19BC_C46B_41B2_F4C1E46E9369",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 152.8,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_081543AC_19A7_442B_41B2_9138670769D7",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_081543AC_19A7_442B_41B2_9138670769D7_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 2.72,
            "hideEasing": "cubic_out",
            "hfov": 2.46,
            "class": "PopupPanoramaOverlay"
        },
        {
            "levels": [
                {
                    "url": "media/popup_091B8811_19A3_43FA_417B_860E816A49B1_0_0.png",
                    "width": 2652,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_091B8811_19A3_43FA_417B_860E816A49B1_0_1.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_091B8811_19A3_43FA_417B_860E816A49B1_0_2.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_091B8811_19A3_43FA_417B_860E816A49B1_0_3.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_3539681C_27F8_D242_41BA_C18474E9A32F",
            "class": "ImageResource"
        },
        {
            "headerBackgroundColorDirection": "vertical",
            "shadowSpread": 1,
            "id": "window_9CC0EA86_8EF1_1C10_41DB_3A2BBFACD097",
            "closeButtonRollOverBackgroundColorDirection": "vertical",
            "bodyBackgroundColorDirection": "vertical",
            "closeButtonRollOverBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "closeButtonBackgroundColorDirection": "vertical",
            "scrollBarMargin": 2,
            "backgroundOpacity": 1,
            "closeButtonIconHeight": 20,
            "overflow": "scroll",
            "verticalAlign": "middle",
            "closeButtonRollOverIconLineWidth": 5,
            "paddingLeft": 0,
            "closeButtonBorderColor": "#000000",
            "minHeight": 20,
            "scrollBarWidth": 10,
            "layout": "vertical",
            "modal": true,
            "titlePaddingTop": 5,
            "closeButtonPressedBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBorderColor": "#000000",
            "closeButtonRollOverBorderSize": 0,
            "propagateClick": false,
            "minWidth": 20,
            "backgroundColor": [],
            "hideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "closeButtonPressedBackgroundOpacity": 0.3,
            "bodyBackgroundOpacity": 0,
            "borderSize": 0,
            "footerBackgroundColorRatios": [
                0,
                0.9,
                1
            ],
            "headerPaddingRight": 0,
            "class": "Window",
            "bodyPaddingLeft": 0,
            "contentOpaque": false,
            "headerBackgroundOpacity": 0,
            "titlePaddingRight": 5,
            "scrollBarColor": "#000000",
            "footerBackgroundColorDirection": "vertical",
            "veilShowEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "shadow": true,
            "closeButtonPaddingRight": 5,
            "headerPaddingLeft": 10,
            "closeButtonPressedIconLineWidth": 5,
            "closeButtonBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "footerHeight": 5,
            "bodyPaddingTop": 0,
            "backgroundColorDirection": "vertical",
            "closeButtonIconLineWidth": 5,
            "closeButtonPaddingLeft": 5,
            "scrollBarOpacity": 0.5,
            "children": [
                "this.viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49"
            ],
            "shadowBlurRadius": 6,
            "veilColor": [
                "#000000",
                "#000000"
            ],
            "titlePaddingBottom": 5,
            "scrollBarVisible": "rollOver",
            "bodyBackgroundColorRatios": [
                0,
                0.5,
                1
            ],
            "shadowColor": "#000000",
            "headerPaddingTop": 10,
            "closeButtonBackgroundOpacity": 0.3,
            "paddingRight": 0,
            "closeButtonBorderRadius": 0,
            "veilColorRatios": [
                0,
                1
            ],
            "headerVerticalAlign": "middle",
            "headerPaddingBottom": 5,
            "closeButtonPaddingBottom": 5,
            "titleFontSize": "1.29vmin",
            "shadowOpacity": 0.5,
            "borderRadius": 5,
            "closeButtonBorderSize": 0,
            "closeButtonRollOverIconColor": "#666666",
            "bodyBackgroundColor": [
                "#FFFFFF",
                "#DDDDDD",
                "#FFFFFF"
            ],
            "footerBackgroundOpacity": 0,
            "backgroundColorRatios": [],
            "closeButtonPressedBorderColor": "#000000",
            "closeButtonIconWidth": 20,
            "footerBackgroundColor": [
                "#FFFFFF",
                "#EEEEEE",
                "#DDDDDD"
            ],
            "closeButtonPressedIconColor": "#888888",
            "closeButtonRollOverBackgroundOpacity": 0.3,
            "closeButtonPressedBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "gap": 10,
            "headerBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "veilHideEffect": {
                "duration": 500,
                "class": "FadeOutEffect",
                "easing": "cubic_in_out"
            },
            "veilOpacity": 0.4,
            "paddingBottom": 0,
            "paddingTop": 0,
            "closeButtonPressedBackgroundColorDirection": "vertical",
            "headerBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "closeButtonRollOverBackgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "bodyPaddingBottom": 0,
            "bodyPaddingRight": 0,
            "closeButtonPaddingTop": 5,
            "closeButtonIconColor": "#000000",
            "shadowVerticalLength": 0,
            "data": {
                "name": "Window6345"
            },
            "closeButtonPressedBorderSize": 0,
            "titlePaddingLeft": 5,
            "closeButtonBackgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "shadowHorizontalLength": 3,
            "titleFontFamily": "Arial",
            "showEffect": {
                "duration": 500,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "horizontalAlign": "center"
        },
        {
            "movementMode": "constrained",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "viewerArea": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
            "class": "MapPlayer"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -59.53,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 6.48,
            "hideEasing": "cubic_out",
            "hfov": 2.44,
            "class": "PopupPanoramaOverlay"
        },
        {
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "repeat": 0,
                "movements": [
                    {
                        "targetYaw": -16.05,
                        "hfovSpeed": 1.78,
                        "easing": "cubic_in_out",
                        "path": "longest",
                        "targetPitch": -4.34,
                        "pitchSpeed": 1.39,
                        "targetHfov": 90,
                        "class": "TargetPanoramaCameraMovement",
                        "yawSpeed": 1.78
                    },
                    {
                        "targetYaw": 163.76,
                        "hfovSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "path": "shortest",
                        "targetPitch": -0.09,
                        "pitchSpeed": 17.05,
                        "targetHfov": 90,
                        "class": "TargetPanoramaCameraMovement",
                        "yawSpeed": 33.25
                    },
                    {
                        "targetYaw": -15.96,
                        "hfovSpeed": 33.22,
                        "easing": "cubic_in_out",
                        "path": "longest",
                        "targetPitch": 0,
                        "pitchSpeed": 17.04,
                        "targetHfov": 90,
                        "class": "TargetPanoramaCameraMovement",
                        "yawSpeed": 33.22
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "camera_9ABC42BB_8EF3_0C77_41D4_C5472826BB33",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": -15.96,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "automaticZoomSpeed": 10
        },
        {
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "repeat": 0,
                "movements": [
                    {
                        "targetYaw": 163.76,
                        "hfovSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "path": "shortest",
                        "targetPitch": -0.09,
                        "pitchSpeed": 17.05,
                        "targetHfov": 90,
                        "class": "TargetPanoramaCameraMovement",
                        "yawSpeed": 33.25
                    },
                    {
                        "targetYaw": -16.05,
                        "hfovSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "path": "longest",
                        "targetPitch": -4.34,
                        "pitchSpeed": 17.05,
                        "targetHfov": 90,
                        "class": "TargetPanoramaCameraMovement",
                        "yawSpeed": 33.25
                    }
                ],
                "class": "PanoramaCameraSequence"
            },
            "id": "panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_camera",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": -16.05,
                "class": "PanoramaCameraPosition",
                "pitch": -4.34
            },
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -141.21,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1_0_2.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 5.73,
            "hideEasing": "cubic_out",
            "hfov": 2.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "items": [
                "this.PanoramaPlayListItem_9D7A4223_8EF3_0C10_41D2_84327F805886",
                "this.PanoramaPlayListItem_9D652223_8EF3_0C10_41C9_E023D110CC68",
                "this.PanoramaPlayListItem_9D649229_8EF3_0C10_41DF_A9BAAC72DACA"
            ],
            "id": "mainPlayList",
            "class": "PlayList"
        },
        {
            "levels": [
                {
                    "url": "media/popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C9CF9E1_19BC_C45D_4184_26F2A7023444",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -120.72,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 8.37,
            "hideEasing": "cubic_out",
            "hfov": 2.43,
            "class": "PopupPanoramaOverlay"
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_33F075D6_27F8_DDCF_4164_A44E579042FA",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_9D7B221D_8EF3_0C31_41D6_9730E18EBAE4",
            "class": "PlayList"
        },
        {
            "initialSequence": {
                "class": "PanoramaCameraSequence",
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in",
                        "yawSpeed": 7.96
                    },
                    {
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear",
                        "yawSpeed": 7.96
                    },
                    {
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false
            },
            "id": "camera_9A9DB2D8_8EF3_0C3F_41D7_EDA73088254C",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": 174.35,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "automaticZoomSpeed": 10
        },
        {
            "levels": [
                {
                    "url": "media/zoomImage_A9D69B94_8BFA_230A_41CE_FCCA02C724E2_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_A9D69B94_8BFA_230A_41CE_FCCA02C724E2_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_A9D69B94_8BFA_230A_41CE_FCCA02C724E2_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ],
            "id": "ImageResource_AB888B7B_8BE6_63FE_41C4_CC185248B99F",
            "class": "ImageResource"
        },
        {
            "viewerArea": "this.MainViewer",
            "id": "MainViewerVideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -155.59,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_09157819_19A3_43EA_41B3_E078E7E34CB6",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_09157819_19A3_43EA_41B3_E078E7E34CB6_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 6.67,
            "hideEasing": "cubic_out",
            "hfov": 3.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -173.85,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_091B8811_19A3_43FA_417B_860E816A49B1",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_091B8811_19A3_43FA_417B_860E816A49B1_0_2.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 3.45,
            "hideEasing": "cubic_out",
            "hfov": 3.47,
            "class": "PopupPanoramaOverlay"
        },
        {
            "autoplay": true,
            "rotationX": 0,
            "yaw": -26.99,
            "rotationZ": 0,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hideDuration": 500,
            "showDuration": 500,
            "id": "popup_9D5F48D7_8EF1_1C31_41CD_DB67AB5139B8",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "loop": false,
            "popupMaxWidth": "95%",
            "pitch": 36.08,
            "hideEasing": "cubic_out",
            "hfov": 10.41,
            "class": "PopupPanoramaOverlay",
            "video": {
                "width": 1270,
                "mp4Url": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "items": [
                {
                    "media": "this.video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E",
                    "start": "this.viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9B3734E6_8EF1_1410_41E0_670671A110F5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9B3734E6_8EF1_1410_41E0_670671A110F5, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49VideoPlayer)",
                    "player": "this.viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49VideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "PlayList_9B3734E6_8EF1_1410_41E0_670671A110F5",
            "class": "PlayList"
        },
        {
            "initialSequence": {
                "class": "PanoramaCameraSequence",
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_in",
                        "yawSpeed": 7.96
                    },
                    {
                        "yawDelta": 323,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "linear",
                        "yawSpeed": 7.96
                    },
                    {
                        "yawDelta": 18.5,
                        "class": "DistancePanoramaCameraMovement",
                        "easing": "cubic_out",
                        "yawSpeed": 7.96
                    }
                ],
                "restartMovementOnUserInteraction": false
            },
            "id": "panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_camera",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": -5.48,
                "class": "PanoramaCameraPosition",
                "pitch": -3.97
            },
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -167.46,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_09152819_19A3_43EA_41B8_7696E6AD3203",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_09152819_19A3_43EA_41B8_7696E6AD3203_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 4.95,
            "hideEasing": "cubic_out",
            "hfov": 3.46,
            "class": "PopupPanoramaOverlay"
        },
        {
            "thumbnailUrl": "media/video_23D2E733_3F31_E3A7_41C4_2258EF58414F_t.jpg",
            "scaleMode": "fit_inside",
            "width": 2240,
            "loop": false,
            "id": "video_23D2E733_3F31_E3A7_41C4_2258EF58414F",
            "label": "Virtual Reality (1)",
            "class": "Video",
            "height": 2240,
            "video": {
                "width": 2240,
                "mp4Url": "media/video_23D2E733_3F31_E3A7_41C4_2258EF58414F.mp4",
                "class": "VideoResource",
                "height": 2240
            }
        },
        {
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "id": "map_33F075D6_27F8_DDCF_4164_A44E579042FA",
            "fieldOfViewOverlayOutsideColor": "#000000",
            "width": 1143,
            "label": "map labkom",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA.png",
                        "width": 1143,
                        "class": "ImageResourceLevel",
                        "height": 2000
                    },
                    {
                        "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_lq.png",
                        "width": 193,
                        "tags": "preload",
                        "class": "ImageResourceLevel",
                        "height": 338
                    }
                ]
            },
            "minimumZoomFactor": 0.5,
            "overlays": [
                "this.overlay_3503EDD9_27FF_ADC5_41A5_B1A247584343",
                "this.overlay_3503CDD9_27FF_ADC5_41B1_94E3014DF513",
                "this.overlay_3503DDD9_27FF_ADC5_41BD_5860DB3EC18D"
            ],
            "class": "Map",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "thumbnailUrl": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_t.png",
            "scaleMode": "fit_inside",
            "fieldOfViewOverlayOutsideOpacity": 0,
            "initialZoomFactor": 1,
            "fieldOfViewOverlayRadiusScale": 0.3,
            "maximumZoomFactor": 1.2,
            "height": 2000
        },
        {
            "id": "panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_camera",
            "class": "PanoramaCamera",
            "initialPosition": {
                "yaw": 176.6,
                "class": "PanoramaCameraPosition",
                "pitch": -3.87
            },
            "automaticZoomSpeed": 10
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -85.47,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 9.52,
            "hideEasing": "cubic_out",
            "hfov": 2.42,
            "class": "PopupPanoramaOverlay"
        },
        {
            "levels": [
                {
                    "url": "media/popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79_0_0.png",
                    "width": 2652,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79_0_1.png",
                    "width": 1448,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79_0_2.png",
                    "width": 724,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79_0_3.png",
                    "width": 362,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C87F9DC_19BC_C46B_41A6_42F27CA75CF8",
            "class": "ImageResource"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C8029DC_19BC_C46B_41B5_BEF0F2BF6970",
            "class": "ImageResource"
        },
        {
            "duration": 500,
            "id": "FadeOutEffect_AB88EB7B_8BE6_63FE_41DC_81AD65F82DDD",
            "class": "FadeOutEffect",
            "easing": "cubic_out"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -71.64,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 8.6,
            "hideEasing": "cubic_out",
            "hfov": 2.43,
            "class": "PopupPanoramaOverlay"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_0C9FD9E3_19BC_C45D_41B2_8FA2B595B6C2",
            "class": "ImageResource"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 145.74,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_08893BAB_19A7_442E_4195_A0A154CA9323",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_08893BAB_19A7_442E_4195_A0A154CA9323_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 3.94,
            "hideEasing": "cubic_out",
            "hfov": 2.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": 105.8,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79_0_2.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 6.18,
            "hideEasing": "cubic_out",
            "hfov": 2.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "levels": [
                {
                    "url": "media/popup_0915A819_19A3_43EA_41B8_FB3734F1591E_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_0915A819_19A3_43EA_41B8_FB3734F1591E_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_0915A819_19A3_43EA_41B8_FB3734F1591E_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_0915A819_19A3_43EA_41B8_FB3734F1591E_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_353C081E_27F8_D27F_41C0_D38F1CA7C029",
            "class": "ImageResource"
        },
        {
            "label": "IMG_20260414_132053_00_113",
            "id": "panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2",
            "mapLocations": [
                {
                    "map": "this.map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D",
                    "x": 2060.93,
                    "angle": 19.83,
                    "y": 490.59,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_B85F198F_B643_5CDD_41DE_D89FB5A33594",
                "this.overlay_A9102895_BBCA_FC0C_41E5_E66FFF95C401",
                "this.overlay_A9457EE8_BBCD_5404_4193_47B62084FBAA",
                "this.overlay_092B383B_19A3_442D_41AD_E6659A184635",
                "this.overlay_092B283B_19A3_442D_41B7_CD4C5408C31F",
                "this.overlay_092B183B_19A3_442D_4191_2988C2207880",
                "this.overlay_092B783B_19A3_442D_4186_80854219CFE6",
                "this.overlay_092B783B_19A3_442D_4195_024C911B7E3A",
                "this.popup_091B8811_19A3_43FA_417B_860E816A49B1",
                "this.popup_09152819_19A3_43EA_41B8_7696E6AD3203",
                "this.popup_09157819_19A3_43EA_41B3_E078E7E34CB6",
                "this.popup_0915A819_19A3_43EA_41B8_FB3734F1591E",
                "this.popup_0915E81B_19A3_43ED_4192_522F66AE8B97",
                "this.overlay_9F4A9C9E_8EF7_1430_41D8_0A2BF711EDED"
            ],
            "partial": false,
            "adjacentPanoramas": [
                {
                    "panorama": "this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E",
                    "yaw": 164.04,
                    "class": "AdjacentPanorama",
                    "backwardYaw": -5.65,
                    "distance": 1
                }
            ],
            "hfov": 360,
            "class": "Panorama",
            "pitch": 0,
            "cardboardMenu": "this.Menu_9D666230_8EF3_0C70_41D3_EF9BD8BA4832",
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/f/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/f/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/f/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/f/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/l/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/l/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/l/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/l/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/u/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/u/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/u/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/u/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/r/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/r/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/r/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/r/3/{row}_{column}.jpg",
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
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/b/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/b/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/b/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/b/3/{row}_{column}.jpg",
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
                    "thumbnailUrl": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_t.jpg",
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/d/0/{row}_{column}.jpg",
                                "colCount": 8,
                                "rowCount": 8,
                                "width": 4096,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/d/1/{row}_{column}.jpg",
                                "colCount": 4,
                                "rowCount": 4,
                                "width": 2048,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/d/2/{row}_{column}.jpg",
                                "colCount": 2,
                                "rowCount": 2,
                                "width": 1024,
                                "tags": "ondemand",
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0/d/3/{row}_{column}.jpg",
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
            ],
            "thumbnailUrl": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_t.jpg",
            "hfovMax": 130
        },
        {
            "levels": [
                {
                    "url": "media/popup_09157819_19A3_43EA_41B3_E078E7E34CB6_0_0.png",
                    "width": 2651,
                    "class": "ImageResourceLevel",
                    "height": 3750
                },
                {
                    "url": "media/popup_09157819_19A3_43EA_41B3_E078E7E34CB6_0_1.png",
                    "width": 1447,
                    "class": "ImageResourceLevel",
                    "height": 2048
                },
                {
                    "url": "media/popup_09157819_19A3_43EA_41B3_E078E7E34CB6_0_2.png",
                    "width": 723,
                    "class": "ImageResourceLevel",
                    "height": 1024
                },
                {
                    "url": "media/popup_09157819_19A3_43EA_41B3_E078E7E34CB6_0_3.png",
                    "width": 361,
                    "class": "ImageResourceLevel",
                    "height": 512
                }
            ],
            "id": "ImageResource_353F481D_27F8_D242_4191_9DA854A91A21",
            "class": "ImageResource"
        },
        {
            "items": [
                {
                    "media": "this.video_23D2E733_3F31_E3A7_41C4_2258EF58414F",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9D7B7222_8EF3_0C10_41B9_B72CB1D42B4D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9D7B7222_8EF3_0C10_41B9_B72CB1D42B4D, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_9D7B7222_8EF3_0C10_41B9_B72CB1D42B4D",
            "class": "PlayList"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -147.74,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0915A819_19A3_43EA_41B8_FB3734F1591E",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0915A819_19A3_43EA_41B8_FB3734F1591E_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 7.75,
            "hideEasing": "cubic_out",
            "hfov": 3.45,
            "class": "PopupPanoramaOverlay"
        },
        {
            "playbackBarRight": 0,
            "toolTipFontWeight": "normal",
            "left": 0,
            "progressBarBorderSize": 0,
            "playbackBarBackgroundColorDirection": "vertical",
            "id": "MainViewer",
            "playbackBarProgressBorderRadius": 0,
            "toolTipShadowColor": "#333333",
            "width": "100%",
            "playbackBarProgressBorderSize": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBarBorderRadius": 0,
            "paddingLeft": 0,
            "playbackBarBorderRadius": 0,
            "minHeight": 50,
            "toolTipShadowOpacity": 1,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipTextShadowOpacity": 0,
            "transitionDuration": 500,
            "toolTipShadowVerticalLength": 0,
            "minWidth": 100,
            "toolTipFontFamily": "Arial",
            "propagateClick": true,
            "progressLeft": 0,
            "playbackBarBorderSize": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "borderSize": 0,
            "playbackBarBackgroundOpacity": 1,
            "height": "100%",
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "toolTipShadowHorizontalLength": 0,
            "toolTipBackgroundColor": "#F6F6F6",
            "class": "ViewerArea",
            "toolTipFontColor": "#606060",
            "playbackBarHeadShadowColor": "#000000",
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
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
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipPaddingRight": 6,
            "toolTipBorderSize": 1,
            "vrPointerColor": "#FFFFFF",
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "displayTooltipInTouchScreens": true,
            "progressBarOpacity": 1,
            "toolTipDisplayTime": 600,
            "paddingRight": 0,
            "transitionMode": "fade_out_fade_in",
            "progressBorderSize": 0,
            "toolTipBorderRadius": 3,
            "progressBorderRadius": 0,
            "playbackBarBorderColor": "#FFFFFF",
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "borderRadius": 0,
            "top": 0,
            "playbackBarHeadHeight": 15,
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "playbackBarLeft": 0,
            "progressBarBorderColor": "#000000",
            "playbackBarHeadShadowHorizontalLength": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingBottom": 0,
            "playbackBarHeadOpacity": 1,
            "paddingTop": 0,
            "toolTipBorderColor": "#767676",
            "toolTipShadowBlurRadius": 3,
            "progressBorderColor": "#003366",
            "playbackBarBottom": 5,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "toolTipShadowSpread": 0,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "2vmin",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipPaddingBottom": 4,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBackgroundColorDirection": "vertical",
            "data": {
                "name": "Main Viewer"
            },
            "toolTipTextShadowBlurRadius": 3,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10,
            "playbackBarHeadWidth": 6
        },
        {
            "children": [
                "this.Container_B1571269_BF46_B846_41D9_B94D861499DF",
                "this.Container_B1573269_BF46_B846_41AD_E3E55F50C328"
            ],
            "id": "Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "width": 115.05,
            "right": "0%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "verticalAlign": "top",
            "overflow": "scroll",
            "minHeight": 1,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarWidth": 10,
            "propagateClick": true,
            "paddingLeft": 0,
            "layout": "absolute",
            "minWidth": 1,
            "height": 605.05,
            "top": "0.13%",
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "--SETTINGS"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "children": [
                "this.Label_00A17887_1348_DCC0_41B0_641A5088276D",
                "this.Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D"
            ],
            "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "left": "0.29%",
            "width": "85%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "overflow": "visible",
            "verticalAlign": "top",
            "paddingLeft": 0,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "propagateClick": false,
            "layout": "absolute",
            "minWidth": 350,
            "height": "11.004%",
            "top": "1.2%",
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "Tittle"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "shadow": false,
            "children": [
                "this.Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E",
                "this.IconButton_37D64D51_27F9_B2C5_41C0_750BC60520EB"
            ],
            "id": "Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "left": "0%",
            "right": "0%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0.6,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "overflow": "scroll",
            "minHeight": 1,
            "scrollBarVisible": "rollOver",
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "bottom": "0%",
            "backgroundColorRatios": [
                0,
                1
            ],
            "propagateClick": true,
            "layout": "absolute",
            "minWidth": 1,
            "backgroundColor": [
                "#000000",
                "#000000"
            ],
            "top": "0%",
            "borderSize": 0,
            "paddingBottom": 0,
            "gap": 10,
            "creationPolicy": "inAdvance",
            "paddingTop": 0,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "---FLOORPLAN"
            },
            "visible": false,
            "scrollBarColor": "#000000",
            "backgroundColorDirection": "vertical",
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "children": [
                "this.Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
                "this.Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD"
            ],
            "id": "Container_320C1ADD_3F4A_FD16_41B0_FBCDFB126CCF",
            "left": "1.49%",
            "width": 240,
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "overflow": "scroll",
            "verticalAlign": "top",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "bottom": "1.99%",
            "propagateClick": false,
            "layout": "absolute",
            "minWidth": 1,
            "height": 190,
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "Container1772"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "shadow": false,
            "id": "veilPopupPanorama",
            "left": 0,
            "right": 0,
            "backgroundOpacity": 0.55,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "borderRadius": 0,
            "bottom": 0,
            "backgroundColorRatios": [
                0
            ],
            "propagateClick": false,
            "minWidth": 0,
            "backgroundColor": [
                "#000000"
            ],
            "top": 0,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "UIComponent",
            "data": {
                "name": "UIComponent6657"
            },
            "visible": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "backgroundColorDirection": "vertical"
        },
        {
            "shadow": false,
            "id": "zoomImagePopupPanorama",
            "left": 0,
            "right": 0,
            "backgroundOpacity": 1,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "borderRadius": 0,
            "bottom": 0,
            "backgroundColorRatios": [],
            "propagateClick": false,
            "minWidth": 0,
            "backgroundColor": [],
            "top": 0,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "ZoomImage",
            "scaleMode": "custom",
            "data": {
                "name": "ZoomImage6658"
            },
            "visible": false,
            "backgroundColorDirection": "vertical"
        },
        {
            "shadow": false,
            "fontFamily": "Arial",
            "pressedIconColor": "#888888",
            "shadowSpread": 1,
            "textDecoration": "none",
            "id": "closeButtonPopupPanorama",
            "right": 10,
            "verticalAlign": "middle",
            "backgroundOpacity": 0.3,
            "paddingRight": 5,
            "iconColor": "#000000",
            "iconHeight": 20,
            "paddingLeft": 5,
            "minHeight": 0,
            "shadowBlurRadius": 6,
            "iconBeforeLabel": true,
            "borderRadius": 0,
            "rollOverIconColor": "#666666",
            "shadowColor": "#000000",
            "backgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "propagateClick": false,
            "borderColor": "#000000",
            "layout": "horizontal",
            "minWidth": 0,
            "backgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "top": 10,
            "label": "",
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 5,
            "gap": 5,
            "paddingTop": 5,
            "class": "CloseButton",
            "fontSize": "1.29vmin",
            "iconWidth": 20,
            "iconLineWidth": 5,
            "fontStyle": "normal",
            "visible": false,
            "showEffect": {
                "duration": 350,
                "class": "FadeInEffect",
                "easing": "cubic_in_out"
            },
            "data": {
                "name": "CloseButton6659"
            },
            "fontWeight": "normal",
            "backgroundColorDirection": "vertical",
            "cursor": "hand",
            "fontColor": "#FFFFFF",
            "horizontalAlign": "center"
        },
        {
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
            "width": 58,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "borderRadius": 0,
            "propagateClick": true,
            "minWidth": 1,
            "height": 58,
            "mode": "toggle",
            "borderSize": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "paddingBottom": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081.png",
            "data": {
                "name": "IconButton FULLSCREEN"
            },
            "pressedIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "pressedRollOverIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed_rollover.png"
        },
        {
            "id": "IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "left": "10%",
            "width": 32,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "borderRadius": 0,
            "rollOverIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_rollover.png",
            "propagateClick": false,
            "minWidth": 0,
            "height": 32,
            "top": "4.75%",
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140.png",
            "data": {
                "name": "Button37510"
            },
            "pressedIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center"
        },
        {
            "id": "IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "left": "12%",
            "width": 32,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 0,
            "borderRadius": 0,
            "rollOverIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_rollover.png",
            "bottom": "27.18%",
            "propagateClick": false,
            "minWidth": 0,
            "height": 32,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291.png",
            "data": {
                "name": "Button37499"
            },
            "pressedIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center"
        },
        {
            "playbackBarRight": 0,
            "toolTipFontWeight": "normal",
            "id": "MapViewer",
            "left": "0%",
            "progressBarBorderSize": 0,
            "playbackBarBackgroundColorDirection": "vertical",
            "playbackBarProgressBorderRadius": 0,
            "toolTipShadowColor": "#333333",
            "width": "100%",
            "playbackBarProgressBorderSize": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBarBorderRadius": 0,
            "paddingLeft": 0,
            "playbackBarBorderRadius": 0,
            "minHeight": 1,
            "toolTipShadowOpacity": 1,
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "toolTipFontStyle": "normal",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipTextShadowOpacity": 0,
            "transitionDuration": 0,
            "toolTipShadowVerticalLength": 0,
            "minWidth": 1,
            "toolTipFontFamily": "Arial",
            "propagateClick": false,
            "progressLeft": 0,
            "playbackBarBorderSize": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "borderSize": 0,
            "playbackBarBackgroundOpacity": 1,
            "toolTipShadowHorizontalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "toolTipBackgroundColor": "#F6F6F6",
            "class": "ViewerArea",
            "toolTipFontColor": "#606060",
            "playbackBarHeadShadowColor": "#000000",
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
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
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipPaddingRight": 6,
            "toolTipBorderSize": 1,
            "vrPointerColor": "#FFFFFF",
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "displayTooltipInTouchScreens": true,
            "progressBarOpacity": 1,
            "toolTipDisplayTime": 600,
            "paddingRight": 0,
            "transitionMode": "fade_out_fade_in",
            "progressBorderSize": 0,
            "toolTipBorderRadius": 3,
            "progressBorderRadius": 0,
            "playbackBarBorderColor": "#FFFFFF",
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "borderRadius": 0,
            "top": "0%",
            "bottom": "0%",
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadHeight": 15,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "playbackBarLeft": 0,
            "playbackBarHeadShadowHorizontalLength": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingBottom": 0,
            "progressBarBorderColor": "#000000",
            "playbackBarHeadOpacity": 1,
            "paddingTop": 0,
            "toolTipBorderColor": "#767676",
            "toolTipShadowBlurRadius": 3,
            "progressBorderColor": "#003366",
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "toolTipShadowSpread": 0,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "2vmin",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipPaddingBottom": 4,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBackgroundColorDirection": "vertical",
            "data": {
                "name": "Floor Plan mini"
            },
            "toolTipTextShadowBlurRadius": 3,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10,
            "playbackBarHeadWidth": 6
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 6.42,
                    "yaw": -5.65,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -17.27
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2, this.camera_9ABC42BB_8EF3_0C77_41D4_C5472826BB33); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_B04F9FFC_BF49_A83E_41D9_59A0170EDA53",
                    "pitch": -17.27,
                    "hfov": 6.42,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -5.65
                }
            ],
            "id": "overlay_B92B9C69_B63D_B445_41D5_D58A195B1A6E",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 10.99,
                    "yaw": 177.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.4
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
            "areas": [
                {
                    "click": "this.setCameraSameSpotAsMedia(this.camera_9D49D2AC_8EF3_0C10_41DF_442043BC2962, this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E); this.startPanoramaWithCamera(this.panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6, this.camera_9D49D2AC_8EF3_0C10_41DF_442043BC2962); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_B0405FFD_BF49_A83E_41E1_657E15FD5D7B",
                    "pitch": -21.4,
                    "hfov": 10.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 177.73
                }
            ],
            "id": "overlay_B75ACFFF_B9C1_57B0_41E2_D884B55C4532",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 5.42,
                    "yaw": 103.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_2_0_0_map.gif",
                                "width": 31,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 37.35
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Air Condisioner (AC)"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "hfov": 5.42,
                    "distance": 50,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_2_0.png",
                                "width": 225,
                                "class": "ImageResourceLevel",
                                "height": 115
                            }
                        ]
                    },
                    "pitch": 37.35,
                    "yaw": 103.49,
                    "class": "HotspotPanoramaOverlayImage"
                }
            ],
            "id": "overlay_A9C68ACC_BBB5_BC1C_41C9_28DB94073505",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 6.18,
                    "yaw": 31.22,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_3_0_0_map.gif",
                                "width": 31,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 24.88
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Air Condisioner (AC)"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "hfov": 6.18,
                    "distance": 50,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_3_0.png",
                                "width": 225,
                                "class": "ImageResourceLevel",
                                "height": 115
                            }
                        ]
                    },
                    "pitch": 24.88,
                    "yaw": 31.22,
                    "class": "HotspotPanoramaOverlayImage"
                }
            ],
            "id": "overlay_ABEB1951_BBCB_5C07_41D6_E965A4C1E340",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.46,
                    "yaw": -141.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 5.73
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0BE2FE5E_19A4_BC67_41A0_D1179E92BBE1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C9D89E1_19BC_C45D_41B9_574CFF5E7A39, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B29E38_19AD_5C2B_41A2_34A363FA48B2",
                    "pitch": 5.73,
                    "hfov": 3.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -141.21
                }
            ],
            "id": "overlay_094AB12E_19AC_C427_4184_558E15996828",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.44,
                    "yaw": -120.72,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 8.37
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0BC2C0E6_19A5_4427_41A6_B1A45A80BC4D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C8209E1_19BC_C45D_41B6_B979C28EA365, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B3AE38_19AD_5C2B_41A4_BE782B4CBFCF",
                    "pitch": 8.37,
                    "hfov": 3.44,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -120.72
                }
            ],
            "id": "overlay_094AA12E_19AC_C427_41B7_D54BC612F322",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.43,
                    "yaw": -85.47,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 9.52
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_08BF409D_19A5_44E5_41B4_6EB5A39DAB99, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C9CF9E1_19BC_C45D_4184_26F2A7023444, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B3EE38_19AD_5C2B_41B0_D14FF51DE960",
                    "pitch": 9.52,
                    "hfov": 3.43,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -85.47
                }
            ],
            "id": "overlay_094A912E_19AC_C427_41B9_56DCEF9E054C",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.44,
                    "yaw": -71.64,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 8.6
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0825073C_19A5_4C2A_41AB_72FC4D73B79E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C9FD9E3_19BC_C45D_41B2_8FA2B595B6C2, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B3DE38_19AD_5C2B_41A3_E923C4326BC6",
                    "pitch": 8.6,
                    "hfov": 3.44,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -71.64
                }
            ],
            "id": "overlay_094A812E_19AC_C427_4152_907AE9A120B0",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.46,
                    "yaw": -59.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 6.48
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_08A66074_19A4_C43B_41B7_F25C2D91A5EA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C9ED9E3_19BC_C45D_41B9_40645D3DDF2A, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B37E38_19AD_5C2B_41B4_61BE71D5455D",
                    "pitch": 6.48,
                    "hfov": 3.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -59.53
                }
            ],
            "id": "overlay_094A712E_19AC_C427_41B6_2B80DC54BF1D",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -120.72,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0946F10E_19AC_C5E7_41AB_8B05418F03C2",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0946F10E_19AC_C5E7_41AB_8B05418F03C2_0_2.png",
                        "width": 724,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 8.37,
            "hideEasing": "cubic_out",
            "hfov": 3.44,
            "class": "PopupPanoramaOverlay"
        },
        {
            "hideDuration": 500,
            "rotationX": 0,
            "yaw": -85.47,
            "rotationZ": 0,
            "showEasing": "cubic_in",
            "rotationY": 0,
            "showDuration": 500,
            "id": "popup_0946B10E_19AC_C5E7_4177_479386C984F9",
            "popupDistance": 100,
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/popup_0946B10E_19AC_C5E7_4177_479386C984F9_0_2.png",
                        "width": 723,
                        "class": "ImageResourceLevel",
                        "height": 1024
                    }
                ]
            },
            "pitch": 9.52,
            "hideEasing": "cubic_out",
            "hfov": 3.43,
            "class": "PopupPanoramaOverlay"
        },
        {
            "hfov": 13.7,
            "blending": 0,
            "id": "overlay_9DB23AAE_8EF1_3C10_41DF_99F687786B80",
            "loop": false,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_9DB23AAE_8EF1_3C10_41DF_99F687786B80_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 5.45,
            "useHandCursor": true,
            "roll": -1.2,
            "click": "this.overlay_9DB23AAE_8EF1_3C10_41DF_99F687786B80.play()",
            "yaw": -177.7,
            "autoplay": false,
            "class": "VideoPanoramaOverlay",
            "vfov": 8.03,
            "rotationY": -2.08,
            "rotationX": -0.73,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "width": 58,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "borderRadius": 0,
            "propagateClick": true,
            "minWidth": 1,
            "height": 58,
            "mode": "toggle",
            "borderSize": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "paddingBottom": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250.png",
            "data": {
                "name": "IconButton GYRO"
            },
            "pressedIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "pressedRollOverIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed_rollover.png"
        },
        {
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "width": 58,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "borderRadius": 0,
            "propagateClick": true,
            "minWidth": 1,
            "height": 58,
            "mode": "toggle",
            "borderSize": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "paddingBottom": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781.png",
            "data": {
                "name": "IconButton HS "
            },
            "pressedIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "pressedRollOverIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed_rollover.png"
        },
        {
            "maxHeight": 58,
            "maxWidth": 58,
            "id": "IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "width": 58,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "borderRadius": 0,
            "rollOverIconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7_rollover.png",
            "propagateClick": true,
            "minWidth": 1,
            "height": 58,
            "mode": "push",
            "borderSize": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "paddingBottom": 0,
            "class": "IconButton",
            "iconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7.png",
            "data": {
                "name": "IconButton VR"
            },
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 237,
                "x": 1996.73,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 2523.19,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 237,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1994.95,
                "class": "HotspotMapOverlayImage",
                "y": 2523.19,
                "width": 237,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_3.png",
                            "width": 121,
                            "class": "ImageResourceLevel",
                            "height": 121
                        }
                    ]
                },
                "height": 237
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_3F1E8254_1B74_A4A4_4186_00B544CE86B3",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 237,
                "x": 1944.21,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 372.09,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 237,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1942.43,
                "class": "HotspotMapOverlayImage",
                "y": 372.09,
                "width": 237,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_4.png",
                            "width": 121,
                            "class": "ImageResourceLevel",
                            "height": 121
                        }
                    ]
                },
                "height": 237
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_3F5DAABF_1B75_A5E3_4198_0DE31D65A828",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 237,
                "x": 1860.53,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 5327.67,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 237,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1858.75,
                "class": "HotspotMapOverlayImage",
                "y": 5327.67,
                "width": 237,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_9EFAFA30_BEF1_0E4E_41D6_039B090E127D_HS_5.png",
                            "width": 121,
                            "class": "ImageResourceLevel",
                            "height": 121
                        }
                    ]
                },
                "height": 237
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": true,
            "id": "overlay_3F0E1248_1B74_64AD_41B1_18F8BC0B8A32",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 15.83,
                    "yaw": 177.17,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.34
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
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
                    "distance": 50,
                    "image": "this.AnimatedImageResource_9F7F63DA_BE93_1DF2_41E1_A8FD32EDCEF4",
                    "pitch": -21.34,
                    "hfov": 15.83,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 177.17
                }
            ],
            "id": "overlay_BB0B90C6_B63F_4C4C_41E1_0FB32E3B27D6",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.46,
                    "yaw": 105.8,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 6.18
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_09365B1E_19A5_C5E6_41A1_9FBD38EB2B79, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C87F9DC_19BC_C46B_41A6_42F27CA75CF8, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B50E38_19AD_5C2B_41B0_2739558633A9",
                    "pitch": 6.18,
                    "hfov": 3.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 105.8
                }
            ],
            "id": "overlay_09E0DBD2_19A3_447F_41B5_C271E1916B73",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.46,
                    "yaw": 130.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 5.86
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0B86EB71_19A4_C43D_41B5_E9807FC5579D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C8699DC_19BC_C46B_41B2_F4C1E46E9369, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B56E38_19AD_5C2B_41B1_6B90758EB8CB",
                    "pitch": 5.86,
                    "hfov": 3.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 130.53
                }
            ],
            "id": "overlay_093B6D42_19A4_BC5F_41A7_79F27449E737",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.47,
                    "yaw": 145.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 3.94
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_08893BAB_19A7_442E_4195_A0A154CA9323, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C8159DC_19BC_C46B_41A8_907A6B1B95BC, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B4BE38_19AD_5C2B_4184_5F559F1730F0",
                    "pitch": 3.94,
                    "hfov": 3.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 145.74
                }
            ],
            "id": "overlay_09D6A4ED_19A5_4C2A_41B1_3C6E1E4FF76F",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.47,
                    "yaw": 149.9,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 3.25
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0817CDEC_19A7_FC2B_41AB_9B4BBE460925, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C8029DC_19BC_C46B_41B5_BEF0F2BF6970, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B4DE38_19AD_5C2B_41B0_434BE8630A5E",
                    "pitch": 3.25,
                    "hfov": 3.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 149.9
                }
            ],
            "id": "overlay_1666F287_19A5_C4E5_41B5_08D0040AB9C8",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.47,
                    "yaw": 152.8,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 2.72
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_081543AC_19A7_442B_41B2_9138670769D7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0C8329E1_19BC_C45D_4192_AD5D4A36F610, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_08B40E38_19AD_5C2B_41B0_00D9BF1F920A",
                    "pitch": 2.72,
                    "hfov": 3.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 152.8
                }
            ],
            "id": "overlay_09A81BFF_19A5_C426_41A7_1E950753C7B5",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 11.41,
                    "yaw": 85.05,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -3.72
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "click": "this.openLink('../index.htm?media-name=IMG_20260427_121737_00_021', '_self')",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Pintu Keluar"
                }
            ],
            "rollOverDisplay": false,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_907EDC59_87FC_6720_41B1_A97F13807C74",
                    "pitch": -3.72,
                    "hfov": 11.41,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 85.05
                }
            ],
            "id": "overlay_92172FD5_87FD_A121_41BD_47028CDF509C",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "hfov": 62.29,
            "blending": 0,
            "id": "overlay_9CB4CF9E_8EF7_1433_41D3_84543E7BE1A0",
            "loop": false,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_9CB4CF9E_8EF7_1433_41D3_84543E7BE1A0_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 21.23,
            "useHandCursor": true,
            "roll": -8.48,
            "click": "this.overlay_9CB4CF9E_8EF7_1433_41D3_84543E7BE1A0.play()",
            "yaw": 18.84,
            "autoplay": false,
            "class": "VideoPanoramaOverlay",
            "vfov": 37.22,
            "rotationY": 20.39,
            "rotationX": -17.74,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 10.41,
                    "yaw": -26.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 36.08
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9D5F48D7_8EF1_1C31_41CD_DB67AB5139B8, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, true) } else { this.showPopupMedia(this.window_9CC0EA86_8EF1_1C10_41DB_3A2BBFACD097, this.video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E, this.PlayList_9B3734E6_8EF1_1410_41E0_670671A110F5, '95%', '95%', true, true) }",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_9BC3748F_8EF1_1410_41B1_C035C1D25900",
                    "pitch": 36.08,
                    "hfov": 10.41,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -26.99
                }
            ],
            "id": "overlay_9C2BD58E_8EF7_3410_41DC_AEA365714ABC",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "playbackBarRight": 0,
            "toolTipFontWeight": "normal",
            "progressBarBorderSize": 0,
            "playbackBarBackgroundColorDirection": "vertical",
            "id": "viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49",
            "playbackBarProgressBorderRadius": 0,
            "toolTipShadowColor": "#333333",
            "width": "100%",
            "playbackBarProgressBorderSize": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBarBorderRadius": 0,
            "paddingLeft": 0,
            "playbackBarBorderRadius": 0,
            "minHeight": 50,
            "toolTipShadowOpacity": 1,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontStyle": "normal",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "transitionDuration": 500,
            "toolTipShadowVerticalLength": 0,
            "minWidth": 100,
            "toolTipFontFamily": "Arial",
            "progressLeft": 0,
            "playbackBarBorderSize": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "borderSize": 0,
            "playbackBarBackgroundOpacity": 1,
            "height": "100%",
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "toolTipShadowHorizontalLength": 0,
            "toolTipBackgroundColor": "#F6F6F6",
            "class": "ViewerArea",
            "toolTipFontColor": "#606060",
            "playbackBarHeadShadowColor": "#000000",
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
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
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipPaddingRight": 6,
            "toolTipBorderSize": 1,
            "vrPointerColor": "#FFFFFF",
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "displayTooltipInTouchScreens": true,
            "progressBarOpacity": 1,
            "toolTipDisplayTime": 600,
            "paddingRight": 0,
            "transitionMode": "blending",
            "progressBorderSize": 0,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarBorderColor": "#FFFFFF",
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "progressBorderRadius": 0,
            "playbackBarHeadHeight": 15,
            "playbackBarLeft": 0,
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#000000",
            "playbackBarHeadShadowHorizontalLength": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingBottom": 0,
            "playbackBarHeadOpacity": 1,
            "paddingTop": 0,
            "toolTipBorderColor": "#767676",
            "toolTipShadowBlurRadius": 3,
            "progressBorderColor": "#003366",
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "toolTipShadowSpread": 0,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "1.11vmin",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipPaddingBottom": 4,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBackgroundColorDirection": "vertical",
            "data": {
                "name": "ViewerArea6656"
            },
            "toolTipTextShadowBlurRadius": 3,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10,
            "playbackBarHeadWidth": 6
        },
        {
            "playbackBarRight": 0,
            "toolTipFontWeight": "normal",
            "progressBarBorderSize": 0,
            "playbackBarBackgroundColorDirection": "vertical",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "playbackBarProgressBorderRadius": 0,
            "toolTipShadowColor": "#333333",
            "width": "100%",
            "playbackBarProgressBorderSize": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "progressBarBorderRadius": 0,
            "paddingLeft": 0,
            "playbackBarBorderRadius": 0,
            "minHeight": 1,
            "toolTipShadowOpacity": 1,
            "playbackBarProgressBorderColor": "#000000",
            "toolTipFontStyle": "normal",
            "playbackBarHeadBorderColor": "#000000",
            "playbackBarHeadBorderRadius": 0,
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "transitionDuration": 500,
            "toolTipShadowVerticalLength": 0,
            "minWidth": 1,
            "toolTipFontFamily": "Arial",
            "progressLeft": 0,
            "playbackBarBorderSize": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "borderSize": 0,
            "playbackBarBackgroundOpacity": 1,
            "height": "100%",
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "toolTipShadowHorizontalLength": 0,
            "toolTipBackgroundColor": "#F6F6F6",
            "class": "ViewerArea",
            "toolTipFontColor": "#606060",
            "playbackBarHeadShadowColor": "#000000",
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
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
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipPaddingRight": 6,
            "toolTipBorderSize": 1,
            "vrPointerColor": "#FFFFFF",
            "toolTipPaddingLeft": 6,
            "toolTipPaddingTop": 4,
            "displayTooltipInTouchScreens": true,
            "progressBarOpacity": 1,
            "toolTipDisplayTime": 600,
            "paddingRight": 0,
            "transitionMode": "blending",
            "progressBorderSize": 0,
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "playbackBarBorderColor": "#FFFFFF",
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "progressBorderRadius": 0,
            "playbackBarHeadHeight": 15,
            "playbackBarLeft": 0,
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBackgroundColorRatios": [
                0.01
            ],
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "progressBarBorderColor": "#0066FF",
            "playbackBarHeadShadowHorizontalLength": 0,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "paddingBottom": 0,
            "playbackBarHeadOpacity": 1,
            "paddingTop": 0,
            "toolTipBorderColor": "#767676",
            "toolTipShadowBlurRadius": 3,
            "progressBorderColor": "#FFFFFF",
            "playbackBarBottom": 0,
            "toolTipTextShadowColor": "#000000",
            "toolTipOpacity": 1,
            "toolTipShadowSpread": 0,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": 12,
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipPaddingBottom": 4,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBackgroundColorDirection": "vertical",
            "data": {
                "name": "Floor Plan big"
            },
            "toolTipTextShadowBlurRadius": 3,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeight": 10,
            "playbackBarHeadWidth": 6
        },
        {
            "media": "this.panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6",
            "camera": "this.panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9D7A4223_8EF3_0C10_41D2_84327F805886, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9D7A4223_8EF3_0C10_41D2_84327F805886",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E",
            "camera": "this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9D652223_8EF3_0C10_41C9_E023D110CC68, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9D652223_8EF3_0C10_41C9_E023D110CC68",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2",
            "end": "this.trigger('tourEnded')",
            "camera": "this.panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_camera",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9D649229_8EF3_0C10_41DF_A9BAAC72DACA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9D649229_8EF3_0C10_41DF_A9BAAC72DACA",
            "class": "PanoramaPlayListItem"
        },
        {
            "viewerArea": "this.viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49",
            "id": "viewer_uid9D723209_8EF3_0C11_417A_777F8AFD6E49VideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 75.86,
                "x": 638.89,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 807.55,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 75.86,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 638.6,
                "class": "HotspotMapOverlayImage",
                "y": 807.55,
                "width": 75.86,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_0.png",
                            "width": 75,
                            "class": "ImageResourceLevel",
                            "height": 75
                        }
                    ]
                },
                "height": 75.86
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3503EDD9_27FF_ADC5_41A5_B1A247584343",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 75.86,
                "x": 622.08,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 119.09,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 75.86,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 621.79,
                "class": "HotspotMapOverlayImage",
                "y": 119.09,
                "width": 75.86,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_1.png",
                            "width": 75,
                            "class": "ImageResourceLevel",
                            "height": 75
                        }
                    ]
                },
                "height": 75.86
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3503CDD9_27FF_ADC5_41B1_94E3014DF513",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "map": {
                "width": 75.86,
                "x": 595.3,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 16
                        }
                    ]
                },
                "y": 1705.27,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 75.86,
                "offsetX": 0
            },
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 595.01,
                "class": "HotspotMapOverlayImage",
                "y": 1705.27,
                "width": 75.86,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_33F075D6_27F8_DDCF_4164_A44E579042FA_HS_2.png",
                            "width": 75,
                            "class": "ImageResourceLevel",
                            "height": 75
                        }
                    ]
                },
                "height": 75.86
            },
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "id": "overlay_3503DDD9_27FF_ADC5_41BD_5860DB3EC18D",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 8.71,
                    "yaw": 164.04,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -19.79
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_B8976067_B63F_4C4D_41D4_82276E08E98E, this.camera_9A9DB2D8_8EF3_0C3F_41D7_EDA73088254C); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_B0415FFD_BF49_A83E_41E1_CC3BEEF5FF09",
                    "pitch": -19.79,
                    "hfov": 8.71,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 164.04
                }
            ],
            "id": "overlay_B85F198F_B643_5CDD_41DE_D89FB5A33594",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 5.53,
                    "yaw": 89.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_1_0_0_map.gif",
                                "width": 31,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 35.74
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Air Condisioner (AC)"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "hfov": 5.53,
                    "distance": 50,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_1_0.png",
                                "width": 225,
                                "class": "ImageResourceLevel",
                                "height": 115
                            }
                        ]
                    },
                    "pitch": 35.74,
                    "yaw": 89.99,
                    "class": "HotspotPanoramaOverlayImage"
                }
            ],
            "id": "overlay_A9102895_BBCA_FC0C_41E5_E66FFF95C401",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.96,
                    "yaw": 137.29,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_2_0_0_map.gif",
                                "width": 34,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 17.29
                }
            ],
            "data": {
                "label": "Image"
            },
            "areas": [
                {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Air Condisioner (AC)"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "hfov": 3.96,
                    "distance": 50,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_2_0.png",
                                "width": 137,
                                "class": "ImageResourceLevel",
                                "height": 63
                            }
                        ]
                    },
                    "pitch": 17.29,
                    "yaw": 137.29,
                    "class": "HotspotPanoramaOverlayImage"
                }
            ],
            "id": "overlay_A9457EE8_BBCD_5404_4193_47B62084FBAA",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.47,
                    "yaw": -173.85,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 3.45
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_091B8811_19A3_43FA_417B_860E816A49B1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_3539681C_27F8_D242_41BA_C18474E9A32F, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0C8D89DA_19BC_C46F_4188_01D881B4BEE5",
                    "pitch": 3.45,
                    "hfov": 3.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -173.85
                }
            ],
            "id": "overlay_092B383B_19A3_442D_41AD_E6659A184635",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.46,
                    "yaw": -167.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 4.95
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_09152819_19A3_43EA_41B8_7696E6AD3203, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_353E481D_27F8_D242_41C2_463430ED82F6, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0C8D49DA_19BC_C46F_41B6_8258633954A1",
                    "pitch": 4.95,
                    "hfov": 3.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -167.46
                }
            ],
            "id": "overlay_092B283B_19A3_442D_41B7_CD4C5408C31F",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.45,
                    "yaw": -155.59,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_5_0_0_map.gif",
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
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_09157819_19A3_43EA_41B3_E078E7E34CB6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_353F481D_27F8_D242_4191_9DA854A91A21, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0C8D09DA_19BC_C46F_41B9_29D6EF8F6169",
                    "pitch": 6.67,
                    "hfov": 3.45,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -155.59
                }
            ],
            "id": "overlay_092B183B_19A3_442D_4191_2988C2207880",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.45,
                    "yaw": -147.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 7.75
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0915A819_19A3_43EA_41B8_FB3734F1591E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_353C081E_27F8_D27F_41C0_D38F1CA7C029, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0C8CD9DA_19BC_C46F_41B7_F95BA4D57EE6",
                    "pitch": 7.75,
                    "hfov": 3.45,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -147.74
                }
            ],
            "id": "overlay_092B783B_19A3_442D_4186_80854219CFE6",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "useHandCursor": true,
            "maps": [
                {
                    "hfov": 3.45,
                    "yaw": -137.48,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 7.62
                }
            ],
            "data": {
                "label": "Info 02"
            },
            "areas": [
                {
                    "click": "this.showPopupPanoramaOverlay(this.popup_0915E81B_19A3_43ED_4192_522F66AE8B97, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_353D181E_27F8_D27F_41A1_D2F8B066DD39, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
                {
                    "distance": 100,
                    "image": "this.AnimatedImageResource_0C8C99DA_19BC_C46F_4188_A216A9A3A839",
                    "pitch": 7.62,
                    "hfov": 3.45,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -137.48
                }
            ],
            "id": "overlay_092B783B_19A3_442D_4195_024C911B7E3A",
            "class": "HotspotPanoramaOverlay"
        },
        {
            "hfov": 7.99,
            "blending": 0,
            "id": "overlay_9F4A9C9E_8EF7_1430_41D8_0A2BF711EDED",
            "loop": false,
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/overlay_9F4A9C9E_8EF7_1430_41D8_0A2BF711EDED_t.jpg",
                        "width": 2964,
                        "class": "ImageResourceLevel",
                        "height": 1694
                    }
                ]
            },
            "pitch": 3.36,
            "useHandCursor": true,
            "roll": -1.2,
            "click": "this.overlay_9F4A9C9E_8EF7_1430_41D8_0A2BF711EDED.play()",
            "yaw": 166.82,
            "autoplay": false,
            "class": "VideoPanoramaOverlay",
            "vfov": 4.53,
            "rotationY": -8.67,
            "rotationX": 1.04,
            "enabledInCardboard": true,
            "distance": 50,
            "videoVisibleOnStop": false,
            "data": {
                "label": "Video"
            },
            "video": {
                "width": 1270,
                "mp4Url": "media/video_9F7B6566_8EF1_F410_41D5_4EA39488DD2E.mp4",
                "class": "VideoResource",
                "height": 726
            }
        },
        {
            "children": [
                "this.IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8"
            ],
            "id": "Container_B1571269_BF46_B846_41D9_B94D861499DF",
            "width": 110,
            "right": "0%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "overflow": "visible",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "propagateClick": true,
            "paddingLeft": 0,
            "layout": "horizontal",
            "minWidth": 1,
            "height": 110,
            "top": "0%",
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "button menu sup"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5
        },
        {
            "children": [
                "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
                "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
                "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
                "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
                "this.IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6"
            ],
            "id": "Container_B1573269_BF46_B846_41AD_E3E55F50C328",
            "width": "91.265%",
            "right": "0%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "verticalAlign": "top",
            "overflow": "scroll",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "propagateClick": true,
            "layout": "vertical",
            "minWidth": 1,
            "height": "52.475%",
            "top": "14.96%",
            "gap": 3,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "-button set"
            },
            "visible": false,
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5
        },
        {
            "textDecoration": "none",
            "fontFamily": "Yu Gothic UI Semibold",
            "textShadowVerticalLength": 1,
            "textShadowBlurRadius": 3,
            "id": "Label_00A17887_1348_DCC0_41B0_641A5088276D",
            "left": "2.48%",
            "width": "89.752%",
            "textShadowColor": "#000000",
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "textShadowOpacity": 0.7,
            "text": "Laboratorium Komputer",
            "minHeight": 1,
            "borderRadius": 0,
            "propagateClick": false,
            "minWidth": 1,
            "height": "58.75%",
            "top": "0%",
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Label",
            "textShadowHorizontalLength": 1,
            "fontSize": "3vmin",
            "fontColor": "#F5F9F5",
            "fontStyle": "normal",
            "data": {
                "name": "Gedung L lantai 1"
            },
            "fontWeight": "normal",
            "shadow": false,
            "horizontalAlign": "left"
        },
        {
            "textDecoration": "none",
            "fontFamily": "Yu Gothic UI",
            "textShadowVerticalLength": 1,
            "textShadowBlurRadius": 3,
            "id": "Label_AF09C26D_BC56_EC1C_41D6_5ECAF79A7A8D",
            "left": "2.49%",
            "width": "89.75%",
            "textShadowColor": "#000000",
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "textShadowOpacity": 0.7,
            "text": "Gedung L, Lantai 2",
            "minHeight": 1,
            "borderRadius": 0,
            "paddingLeft": 0,
            "bottom": "2.5%",
            "minWidth": 1,
            "propagateClick": false,
            "borderSize": 0,
            "height": "58.75%",
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Label",
            "textShadowHorizontalLength": 1,
            "fontSize": "2.5vmin",
            "fontColor": "#F5F9F5",
            "fontStyle": "normal",
            "data": {
                "name": "Gedung L Judul"
            },
            "fontWeight": "normal",
            "shadow": false,
            "horizontalAlign": "left"
        },
        {
            "children": [
                "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
                "this.Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A"
            ],
            "id": "Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E",
            "left": "15%",
            "right": "15%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "verticalAlign": "top",
            "overflow": "visible",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "bottom": "10%",
            "propagateClick": false,
            "layout": "absolute",
            "minWidth": 1,
            "top": "10%",
            "borderSize": 0,
            "gap": 10,
            "paddingTop": 0,
            "paddingBottom": 0,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "Global"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "center",
            "scrollBarOpacity": 0.5
        },
        {
            "maxHeight": 60,
            "maxWidth": 60,
            "id": "IconButton_37D64D51_27F9_B2C5_41C0_750BC60520EB",
            "left": 911,
            "width": "5.09%",
            "verticalAlign": "top",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 50,
            "borderRadius": 0,
            "top": 82,
            "rollOverIconURL": "skin/IconButton_37D64D51_27F9_B2C5_41C0_750BC60520EB_rollover.jpg",
            "propagateClick": false,
            "minWidth": 50,
            "height": "7.13%",
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "transparencyActive": false,
            "paddingTop": 0,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
            "class": "IconButton",
            "iconURL": "skin/IconButton_37D64D51_27F9_B2C5_41C0_750BC60520EB.jpg",
            "data": {
                "name": "IconButton X"
            },
            "pressedIconURL": "skin/IconButton_37D64D51_27F9_B2C5_41C0_750BC60520EB_pressed.jpg",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "right"
        },
        {
            "shadow": false,
            "children": [
                "this.MapViewer"
            ],
            "id": "Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
            "left": "0%",
            "width": 190,
            "scrollBarMargin": 2,
            "backgroundOpacity": 0.24,
            "paddingRight": 0,
            "overflow": "scroll",
            "verticalAlign": "top",
            "paddingLeft": 0,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "backgroundColorRatios": [
                0,
                1
            ],
            "backgroundColor": [
                "#FFFFFF",
                "#FFFFFF"
            ],
            "layout": "absolute",
            "minWidth": 1,
            "propagateClick": false,
            "top": "0%",
            "gap": 10,
            "borderSize": 0,
            "height": 190,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "minimap"
            },
            "scrollBarColor": "#000000",
            "backgroundColorDirection": "vertical",
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "children": [
                "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
                "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140"
            ],
            "id": "Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD",
            "width": "20.833%",
            "right": "0%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "verticalAlign": "top",
            "overflow": "scroll",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "propagateClick": false,
            "layout": "absolute",
            "minWidth": 1,
            "height": "54.211%",
            "top": "0%",
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "zoom in out"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_B04F9FFC_BF49_A83E_41D9_59A0170EDA53",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_B0405FFD_BF49_A83E_41E1_657E15FD5D7B",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B29E38_19AD_5C2B_41A2_34A363FA48B2",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B3AE38_19AD_5C2B_41A4_BE782B4CBFCF",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B3EE38_19AD_5C2B_41B0_D14FF51DE960",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B3DE38_19AD_5C2B_41A3_E923C4326BC6",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8976067_B63F_4C4D_41D4_82276E08E98E_0_HS_8_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B37E38_19AD_5C2B_41B4_61BE71D5455D",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 33,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_9F7F63DA_BE93_1DF2_41E1_A8FD32EDCEF4",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_3_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B50E38_19AD_5C2B_41B0_2739558633A9",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B56E38_19AD_5C2B_41B1_6B90758EB8CB",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B4BE38_19AD_5C2B_4184_5F559F1730F0",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B4DE38_19AD_5C2B_41B0_434BE8630A5E",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_08B40E38_19AD_5C2B_41B0_00D9BF1F920A",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_8_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "id": "AnimatedImageResource_907EDC59_87FC_6720_41B1_A97F13807C74",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_BD968780_B63D_74C4_41E2_DED4EB51C2A6_0_HS_9_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_9BC3748F_8EF1_1410_41B1_C035C1D25900",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 3,
            "class": "AnimatedImageResource",
            "frameDuration": 62,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "id": "AnimatedImageResource_B0415FFD_BF49_A83E_41E1_CC3BEEF5FF09",
            "rowCount": 3,
            "frameCount": 9
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_3_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_0C8D89DA_19BC_C46F_4188_01D881B4BEE5",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_4_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_0C8D49DA_19BC_C46F_41B6_8258633954A1",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_5_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_0C8D09DA_19BC_C46F_41B9_29D6EF8F6169",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_6_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_0C8CD9DA_19BC_C46F_41B7_F95BA4D57EE6",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "colCount": 4,
            "class": "AnimatedImageResource",
            "frameDuration": 41,
            "levels": [
                {
                    "url": "media/panorama_B8DEEBED_B63D_7C5D_41D7_699072C65FF2_0_HS_7_0.png",
                    "width": 460,
                    "class": "ImageResourceLevel",
                    "height": 690
                }
            ],
            "id": "AnimatedImageResource_0C8C99DA_19BC_C46F_4188_A216A9A3A839",
            "rowCount": 6,
            "frameCount": 24
        },
        {
            "maxHeight": 60,
            "maxWidth": 60,
            "id": "IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8",
            "width": 60,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "borderRadius": 0,
            "propagateClick": true,
            "minWidth": 1,
            "height": 60,
            "mode": "toggle",
            "borderSize": 0,
            "transparencyActive": true,
            "paddingTop": 0,
            "paddingBottom": 0,
            "click": "if(!this.Container_B1573269_BF46_B846_41AD_E3E55F50C328.get('visible')){ this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, false, 0, null, null, false) }",
            "class": "IconButton",
            "iconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8.png",
            "data": {
                "name": "image button menu"
            },
            "pressedIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "pressedRollOverIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed_rollover.png"
        },
        {
            "id": "IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6",
            "width": 40,
            "verticalAlign": "middle",
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "minHeight": 0,
            "borderRadius": 0,
            "rollOverIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_rollover.png",
            "paddingLeft": 0,
            "propagateClick": true,
            "minWidth": 0,
            "height": 40,
            "mode": "push",
            "borderSize": 0,
            "paddingBottom": 0,
            "transparencyActive": false,
            "paddingTop": 0,
            "click": "this.showPopupImage(this.ImageResource_AB888B7B_8BE6_63FE_41C4_CC185248B99F, null, '90%', '90%', this.FadeInEffect_AB889B7B_8BE6_63FE_41E0_FBA1ED7D1692, this.FadeOutEffect_AB88EB7B_8BE6_63FE_41DC_81AD65F82DDD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, null, null, false)",
            "class": "IconButton",
            "iconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6.png",
            "data": {
                "name": "Information"
            },
            "pressedIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_pressed.png",
            "shadow": false,
            "cursor": "hand",
            "horizontalAlign": "center",
            "pressedRollOverIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_pressed_rollover.png"
        },
        {
            "id": "Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A",
            "width": "100%",
            "scrollBarMargin": 2,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "overflow": "scroll",
            "verticalAlign": "top",
            "minHeight": 1,
            "scrollBarWidth": 10,
            "borderRadius": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "propagateClick": false,
            "layout": "absolute",
            "minWidth": 1,
            "height": 140,
            "gap": 10,
            "borderSize": 0,
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "Container",
            "contentOpaque": false,
            "data": {
                "name": "header"
            },
            "scrollBarColor": "#000000",
            "shadow": false,
            "horizontalAlign": "left",
            "scrollBarOpacity": 0.5
        }],
        "desktopMipmappingEnabled": false,
        "propagateClick": false,
        "layout": "absolute",
        "minWidth": 20,
        "backgroundPreloadEnabled": true,
        "borderSize": 0,
        "height": "100%",
        "paddingBottom": 0,
        "mobileMipmappingEnabled": false,
        "gap": 10,
        "paddingTop": 0,
        "vrPolyfillScale": 1,
        "class": "Player",
        "contentOpaque": false,
        "scripts": {
            "setPanoramaCameraWithSpot": function (playListItem, yaw, pitch) { var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
            "getCurrentPlayerWithMedia": function (media) { var playerClass = undefined; var mediaPropertyName = undefined; switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if (playerClass != undefined) { var players = this.getByClassName(playerClass); for (var i = 0; i < players.length; ++i) { var player = players[i]; if (player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
            "getMediaWidth": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxW = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('width') > maxW) maxW = r.get('width'); } return maxW; } else { return r.get('width') } default: return media.get('width'); } },
            "setOverlayBehaviour": function (overlay, media, action) { var executeFunc = function () { switch (action) { case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if (overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if (window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function () { delete window.overlaysDispatched[id]; }, 2000); }; if (window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if (playList != undefined) { var item = this.getPlayListItemByMedia(playList, media); if (playList.get('items').indexOf(item) != playList.get('selectedIndex')) { var beginFunc = function (e) { item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
            "setMapLocation": function (panoramaPlayListItem, mapPlayer) { var resetFunction = function () { panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
            "setEndToItemIndex": function (playList, fromIndex, toIndex) { var endFunction = function () { if (playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
            "loadFromCurrentMediaPlayList": function (playList, delta) { var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while (newIndex < 0) { newIndex = totalItems + newIndex; }; if (currentIndex != newIndex) { playList.set('selectedIndex', newIndex); } },
            "syncPlaylists": function (playLists) { var changeToMedia = function (media, playListDispatched) { for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (playList != playListDispatched) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { if (items[j].get('media') == media) { if (playList.get('selectedIndex') != j) { playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function (event) { var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if (selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function (event) { var panoramaMapLocation = event.source.get('panoramaMapLocation'); if (panoramaMapLocation) { var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for (var i = 0, count = playLists.length; i < count; ++i) { playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for (var i = 0, count = mapPlayers.length; i < count; ++i) { mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
            "setPanoramaCameraWithCurrentSpot": function (playListItem) { var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer == undefined) { return; } var playerClass = currentPlayer.get('class'); if (playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player') { return; } var fromMedia = currentPlayer.get('panorama'); if (fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
            "getCurrentPlayers": function () { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
            "setStartTimeVideo": function (video, time) { var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function () { for (var i = 0; i < items.length; ++i) { var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for (var i = 0; i < items.length; ++i) { var item = items[i]; var player = item.get('player'); if (player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
            "stopAndGoCamera": function (camera, ms) { var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function () { sequence.play(); }; setTimeout(timeoutFunction, ms); },
            "getPlayListItems": function (media, player) { var itemClass = (function () { switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length - 1; i >= 0; --i) { var item = items[i]; if (item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
            "isCardboardViewMode": function () { var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
            "playGlobalAudioWhilePlay": function (playList, index, audio, endCallback) { var changeFunction = function (event) { if (event.data.previousSelectedIndex == index) { this.stopGlobalAudio(audio); if (isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if (endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if (audios && audio.get('id') in audios) { audio = audios[audio.get('id')]; if (audio.get('state') != 'playing') { audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if (isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if (audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for (var i = 0; i < stateChangeFunctions.length; ++i) { var f = stateChangeFunctions[i]; if (typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
            "showPopupMedia": function (w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios) { var self = this; var closeFunction = function () { playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if (stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if (isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function () { w.hide(); }; var resizeFunction = function () { var getWinValue = function (property) { return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if (!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if (parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if (windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if (windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if (autoCloseWhenFinished) { this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if (isVideo) { this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if (stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
            "setMainMediaByName": function (name) { var items = this.mainPlayList.get('items'); for (var i = 0; i < items.length; ++i) { var item = items[i]; if (item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
            "pauseCurrentPlayers": function (onlyPauseCameraIfPanorama) { var players = this.getCurrentPlayers(); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('state') == 'playing') { if (onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
            "triggerOverlay": function (overlay, eventName) { if (overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for (var i = 0; i < areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
            "keepComponentVisibility": function (component, keep) { var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if (value == undefined && keep) { this.registerKey(key, keep); } else if (value != undefined && !keep) { this.unregisterKey(key); } },
            "getKey": function (key) { return window[key]; },
            "autotriggerAtStart": function (playList, callback, once) { var onChange = function (event) { callback(); if (once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
            "historyGoForward": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.forward(); } },
            "getPlayListWithMedia": function (media, onlySelected) { var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (onlySelected && playList.get('selectedIndex') == -1) continue; if (this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
            "getPanoramaOverlayByName": function (panorama, name) { var overlays = this.getOverlays(panorama); for (var i = 0, count = overlays.length; i < count; ++i) { var overlay = overlays[i]; var data = overlay.get('data'); if (data != undefined && data.label == name) { return overlay; } } return undefined; },
            "playGlobalAudio": function (audio, endCallback) { var endFunction = function () { audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if (endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if (!audios) { audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if (audio.get('state') == 'playing') { return audio; } if (!audio.get('loop')) { audio.bind('end', endFunction, this); } audio.play(); return audio; },
            "setStartTimeVideoSync": function (video, player) { this.setStartTimeVideo(video, player.get('currentTime')); },
            "shareFacebook": function (url) { window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
            "getPixels": function (value) { var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch (unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
            "showPopupPanoramaOverlay": function (popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio) { var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if (!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function () { var loadedFunction = function () { if (!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function () { var restoreShowDurationFunction = function () { popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if (popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if (!imageHD) { imageHD = popupPanoramaOverlay.get('image'); } if (!toggleImageHD && toggleImage) { toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function () { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
            "init": function () { if (!Object.hasOwnProperty('values')) { Object.values = function (o) { return Object.keys(o).map(function (e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function (e) { var playList = e.source; var index = playList.get('selectedIndex'); if (index < 0) return; var id = playList.get('id'); if (!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
            "showPopupImage": function (image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback) { var self = this; var closed = false; var playerClickFunction = function () { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function () { zoomImage.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var resizeFunction = function () { setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function () { self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function () { timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if (toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if (loadedCallback) loadedCallback(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); closed = true; if (timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if (autoCloseMilliSeconds) clearAutoClose(); if (hideCallback) hideCallback(); zoomImage.set('visible', false); if (hideEffect && hideEffect.get('duration') > 0) { hideEffect.bind('end', endEffectFunction, this); } else { zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if (toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function () { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function () { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function () { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function () { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if (right < 10) right = 10; if (top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function () { if (timeoutUserInteractionID) { clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else { closeButton.set('visible', false); } }; var userInteractionEndFunction = function () { if (!closed) { timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function () { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function () { self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
            "pauseGlobalAudiosWhilePlayItem": function (playList, index, exclude) { var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function () { if (playList.get('selectedIndex') != index) { if (hasState) { player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function (event) { var state = event.data.state; if (state == 'stopped') { this.resumeGlobalAudios(caller); } else if (state == 'playing') { this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if (hasState) { player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
            "resumePlayers": function (players, onlyResumeCameraIfPanorama) { for (var i = 0; i < players.length; ++i) { var player = players[i]; if (onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.resumeCamera(); } else { player.play(); } } },
            "getMediaHeight": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxH = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('height') > maxH) maxH = r.get('height'); } return maxH; } else { return r.get('height') } default: return media.get('height'); } },
            "getComponentByName": function (name) { var list = this.getByClassName('UIComponent'); for (var i = 0, count = list.length; i < count; ++i) { var component = list[i]; var data = component.get('data'); if (data != undefined && data.name == name) { return component; } } return undefined; },
            "changePlayListWithSameSpot": function (playList, newIndex) { var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
            "showPopupPanoramaVideoOverlay": function (popupPanoramaOverlay, closeButtonProperties, stopAudios) { var self = this; var showEndFunction = function () { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function () { if (!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if (stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function () { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if (stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
            "getOverlays": function (media) { switch (media.get('class')) { case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for (var j = 0; j < frames.length; ++j) { overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
            "shareWhatsapp": function (url) { window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
            "visibleComponentsIfPlayerFlagEnabled": function (components, playerFlag) { var enabled = this.get(playerFlag); for (var i in components) { components[i].set('visible', enabled); } },
            "shareTwitter": function (url) { window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
            "getActivePlayerWithViewer": function (viewerArea) { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if (playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if ((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if (playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if (playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
            "startPanoramaWithCamera": function (media, camera) { if (window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1) { return; } var playLists = this.getByClassName('PlayList'); if (playLists.length == 0) return; var restoreItems = []; for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')) { restoreItems.push({ camera: item.get('camera'), item: item }); item.set('camera', camera); } } } if (restoreItems.length > 0) { if (window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function () { var index = window.currentPanoramasWithCameraChanged.indexOf(media); if (index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
            "setMainMediaByIndex": function (index) { var item = undefined; if (index >= 0 && index < this.mainPlayList.get('items').length) { this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
            "getGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios != undefined && audio.get('id') in audios) { audio = audios[audio.get('id')]; } return audio; },
            "resumeGlobalAudios": function (caller) { if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length - 1; j >= 0; --j) { var a = audiosPaused[j]; if (objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i < count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
            "updateMediaLabelFromPlayList": function (playList, htmlText, playListItemStopToDispose) { var changeFunction = function () { var index = playList.get('selectedIndex'); if (index >= 0) { var beginFunction = function () { playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function (index) { var media = playListItem.get('media'); var text = media.get('data'); if (!text) text = media.get('label'); setHtml(text); }; var setHtml = function (text) { if (text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if (htmlText.get('html')) { setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else { setMediaLabel(index); } } }; var disposeFunction = function () { htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if (playListItemStopToDispose) { playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
            "historyGoBack": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.back(); } },
            "changeBackgroundWhilePlay": function (playList, index, color) { var stopFunction = function (event) { playListItem.unbind('stop', stopFunction, this); if ((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))) { viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if ((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)) { viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
            "updateVideoCues": function (playList, index) { var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if (video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function () { if (playList.get('selectedIndex') != index) { video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function (event) { var activeCues = event.data.activeCues; for (var i = 0, count = cues.length; i < count; ++i) { var cue = cues[i]; if (activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime') + 0.5)) { cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
            "setMediaBehaviour": function (playList, index, mediaDispatcher) { var self = this; var stateChangeFunction = function (event) { if (event.data.state == 'stopped') { dispose.call(this, true); } }; var onBeginFunction = function () { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if (media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)) { player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function () { var index = playListDispatcher.get('selectedIndex'); if (index != -1) { indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function () { dispose.call(this, false); }; var dispose = function (forceDispose) { if (!playListDispatcher) return; var media = item.get('media'); if ((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if (panoramaSequence && panoramaSequenceIndex != -1) { if (panoramaSequence) { if (panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex - 1].get('class') == 'TargetPanoramaCameraMovement') { var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex - 1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function (event) { initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if (player) { item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for (var i = 0; i < buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if (sameViewerArea) { var currentMedia = this.getMediaFromPlayer(player); if (currentMedia == undefined || currentMedia == item.get('media')) { playListDispatcher.set('selectedIndex', indexDispatcher); } if (playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else { viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if (!mediaDispatcher) { var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if (!playListDispatcher) { playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if (playList.get('selectedIndex') == index || indexDispatcher == -1) { return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if (sameViewerArea) { if (playList != playListDispatcher) { playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else { viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if (camera) { panoramaSequence = camera.get('initialSequence'); if (panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function (property) { var value = player.get(property); if (value == undefined) return; if (Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for (var i = 0; i < buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if (player != itemDispatcher.get('player') || !mediaDispatcherByParam) { item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
            "pauseGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; } if (audio.get('state') == 'playing') audio.pause(); },
            "stopGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; if (audio) { delete audios[audio.get('id')]; if (Object.keys(audios).length == 0) { window.currentGlobalAudios = undefined; } } } if (audio) audio.stop(); },
            "registerKey": function (key, value) { window[key] = value; },
            "getPlayListItemByMedia": function (playList, media) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media) return item; } return undefined; },
            "fixTogglePlayPauseButton": function (player) { var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if (typeof buttons !== 'undefined' && player.get('state') == 'playing') { if (!Array.isArray(buttons)) buttons = [buttons]; for (var i = 0; i < buttons.length; ++i) buttons[i].set('pressed', true); } },
            "setCameraSameSpotAsMedia": function (camera, media) { var player = this.getCurrentPlayerWithMedia(media); if (player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
            "showComponentsWhileMouseOver": function (parentComponent, components, durationVisibleWhileOut) { var setVisibility = function (visible) { for (var i = 0, length = components.length; i < length; i++) { var component = components[i]; if (component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true) { setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function () { setVisibility(true); if (timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function () { var timeoutFunction = function () { setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
            "getMediaFromPlayer": function (player) { switch (player.get('class')) { case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
            "initGA": function () { var sendFunc = function (category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for (var i = 0, countI = media.length; i < countI; ++i) { var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for (var j = 0, countJ = overlays.length; j < countJ; ++j) { var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch (overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z < areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for (var i = 0, countI = components.length; i < countI; ++i) { var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for (var i = 0, countI = items.length; i < countI; ++i) { var item = items[i]; var media = item.get('media'); if (!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
            "getMediaByName": function (name) { var list = this.getByClassName('Media'); for (var i = 0, count = list.length; i < count; ++i) { var media = list[i]; if ((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name) { return media; } } return undefined; },
            "executeFunctionWhenChange": function (playList, index, endFunction, changeFunction) { var endObject = undefined; var changePlayListFunction = function (event) { if (event.data.previousSelectedIndex == index) { if (changeFunction) changeFunction.call(this); if (endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if (endFunction) { var playListItem = playList.get('items')[index]; if (playListItem.get('class') == 'PanoramaPlayListItem') { var camera = playListItem.get('camera'); if (camera != undefined) endObject = camera.get('initialSequence'); if (endObject == undefined) endObject = camera.get('idleSequence'); } else { endObject = playListItem.get('media'); } if (endObject) { endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
            "loopAlbum": function (playList, index) { var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function () { player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
            "cloneCamera": function (camera) { var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
            "showWindow": function (w, autoCloseMilliSeconds, containsAudio) { if (w.get('visible') == true) { return; } var closeFunction = function () { clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function () { w.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
            "playAudioList": function (audios) { if (audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function () { if (++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
            "pauseGlobalAudios": function (caller, exclude) { if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = 0; j < objAudios.length; ++j) { var a = objAudios[j]; if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
            "unregisterKey": function (key) { delete window[key]; },
            "setComponentVisibility": function (component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout) { var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if (keepVisibility) return; this.unregisterKey('visibility_' + component.get('id')); var changeVisibility = function () { if (effect && propertyEffect) { component.set(propertyEffect, effect); } component.set('visible', visible); if (component.get('class') == 'ViewerArea') { try { if (visible) component.restart(); else if (component.get('playbackState') == 'playing') component.pause(); } catch (e) { }; } }; var effectTimeoutName = 'effectTimeout_' + component.get('id'); if (!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)) { var effectTimeout = window[effectTimeoutName]; if (effectTimeout instanceof Array) { for (var i = 0; i < effectTimeout.length; i++) { clearTimeout(effectTimeout[i]) } } else { clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if (visible == component.get('visible') && !ignoreClearTimeout) return; if (applyAt && applyAt > 0) { var effectTimeout = setTimeout(function () { if (window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if (arrayTimeoutVal.length == 0) { delete window[effectTimeoutName]; } } else { delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if (window.hasOwnProperty(effectTimeoutName)) { window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; } else { window[effectTimeoutName] = effectTimeout; } } else { changeVisibility(); } },
            "openLink": function (url, name) { if (url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if (extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if (isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
            "existsKey": function (key) { return key in window; }
        },
        "buttonToggleFullscreen": "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
        "data": {
            "name": "Player1268"
        },
        "scrollBarColor": "#000000",
        "mouseWheelEnabled": true,
        "defaultVRPointer": "laser",
        "horizontalAlign": "left",
        "scrollBarOpacity": 0.5
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
