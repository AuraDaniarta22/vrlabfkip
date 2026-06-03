(function () {
    var script = {
        "definitions": [{
            "viewerArea": "this.MapViewer",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "movementMode": "constrained",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "id": "MapViewerMapPlayer",
            "class": "MapPlayer"
        },
        {
            "id": "ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C",
            "class": "ImageResource",
            "levels": [
                {
                    "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ]
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 46.46,
                    "yaw": -10.39,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0"
                }
            ],
            "hfovMin": "150%",
            "hfov": 360,
            "label": "IMG_20260427_114030_00_005",
            "id": "panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA",
            "thumbnailUrl": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_t.jpg"
                }
            ],
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 1316.86,
                    "angle": -85.7,
                    "y": 1204.93,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_0091B580_1348_54C1_41A1_9043FD8B624A",
                "this.overlay_0741B2BA_1348_4CC1_4194_0D4B2FB1CCD6"
            ]
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 86.69,
                    "yaw": -96.52,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF"
                }
            ],
            "hfovMin": "150%",
            "hfov": 360,
            "label": "IMG_20260427_113852_00_004",
            "id": "panorama_18D01CC6_1348_3440_41A2_BD2321889440",
            "thumbnailUrl": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_t.jpg"
                }
            ],
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 791.57,
                    "angle": 89.08,
                    "y": 2012.81,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_03CD4A96_1358_5CC0_41AD_D9548CF79F9A",
                "this.overlay_038C1767_1358_544F_4185_6A17F20F4E0E"
            ]
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 179.62,
                    "yaw": 51.28,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE"
                }
            ],
            "hfov": 360,
            "label": "IMG_20260427_132730_00_053",
            "id": "panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC",
            "thumbnailUrl": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 62.94,
                    "angle": 31.23,
                    "y": 1193.36,
                    "class": "PanoramaMapLocation"
                }
            ],
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_t.jpg"
                }
            ],
            "overlays": [
                "this.overlay_1D52FB1B_1348_5DC0_41A8_D138328BE960",
                "this.overlay_3406C851_3A90_C762_41C0_9923C335D3DA",
                "this.overlay_280092E2_3A90_4B26_41B8_849A626A36B8"
            ]
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 83.48,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96BD6E7D_8BAE_682D_41BD_7F7C8BF07337",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_out",
            "id": "FadeOutEffect_926BF3B1_8B97_B835_41C2_8A32AC3448E8",
            "class": "FadeOutEffect",
            "duration": 500
        },
        {
            "viewerArea": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "movementMode": "constrained",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
            "class": "MapPlayer"
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC67F48_2A64_10A7_41B6_213DD49ED75F",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96053ECE_8BAE_686F_41D0_0174CFC4634F",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "displayOriginPosition": {
                "hfov": 165,
                "stereographicFactor": 1,
                "yaw": 4.34,
                "class": "RotationalCameraDisplayPosition",
                "pitch": -90
            },
            "automaticZoomSpeed": 10,
            "displayMovements": [
                {
                    "easing": "linear",
                    "class": "TargetRotationalCameraDisplayMovement",
                    "duration": 1000
                },
                {
                    "targetPitch": 0.94,
                    "targetStereographicFactor": 0,
                    "easing": "cubic_in_out",
                    "class": "TargetRotationalCameraDisplayMovement",
                    "duration": 3000
                }
            ],
            "initialPosition": {
                "yaw": 4.34,
                "class": "PanoramaCameraPosition",
                "pitch": 0.94
            },
            "id": "panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "movements": [
                    {
                        "targetYaw": 50.62,
                        "end": "this.showPopupImage(this.ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C, null, '90%', '90%', this.FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D, this.FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
                        "pitchSpeed": 17.05,
                        "path": "shortest",
                        "targetPitch": 4.25,
                        "yawSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "class": "TargetPanoramaCameraMovement"
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 176.6,
                    "yaw": 177.36,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7"
                },
                {
                    "backwardYaw": -162.62,
                    "yaw": 0,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0"
                }
            ],
            "hfov": 360,
            "label": "IMG_20260427_113632_00_001",
            "id": "panorama_1F3A89CE_1349_DC40_4197_496928E9DA69",
            "thumbnailUrl": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 658.03,
                    "angle": 83.84,
                    "y": 1195.5,
                    "class": "PanoramaMapLocation"
                }
            ],
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_t.jpg"
                }
            ],
            "overlays": [
                "this.overlay_1C1C6181_1348_4CC3_418F_B3E7E7F5F6CA",
                "this.overlay_0980D9B3_2A7C_13E9_41B0_10AA672F37CF"
            ]
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC69F48_2A64_10A7_41C4_6102B47ADD05",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC4FF4D_2A64_10B9_41C3_D872384E5454",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96071ECD_8BAE_686D_41DF_6A1B076F98D9",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "panorama_18D01CC6_1348_3440_41A2_BD2321889440_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "items": [
                "this.PanoramaPlayListItem_970FCDF1_8BAE_6835_41C8_4853F361E642",
                "this.PanoramaPlayListItem_970E3DF1_8BAE_6835_41E1_6FE775297834",
                "this.PanoramaPlayListItem_970EADF6_8BAE_683F_41CD_4199F9F0E877",
                "this.PanoramaPlayListItem_970DEDF7_8BAE_683D_41D7_90A54353FE8D",
                "this.PanoramaPlayListItem_970C4DF7_8BAE_683D_41C4_079C41AA9154",
                "this.PanoramaPlayListItem_970CCDF7_8BAE_683D_41BC_63E6FB555893",
                "this.PanoramaPlayListItem_97135DF7_8BAE_683D_41DC_5A8D51C379DF",
                "this.PanoramaPlayListItem_9713BDFD_8BAE_682D_41DC_B4DCFA567D09"
            ],
            "id": "mainPlayList",
            "class": "PlayList"
        },
        {
            "id": "ImageResource_926BD3B1_8B97_B835_41E0_4118D3EE74E1",
            "class": "ImageResource",
            "levels": [
                {
                    "url": "media/zoomImage_9921C0C4_8B97_F853_41DC_EA760EDABFA7_0_0.png",
                    "width": 1748,
                    "class": "ImageResourceLevel",
                    "height": 1240
                },
                {
                    "url": "media/zoomImage_9921C0C4_8B97_F853_41DC_EA760EDABFA7_0_1.png",
                    "width": 1024,
                    "class": "ImageResourceLevel",
                    "height": 726
                },
                {
                    "url": "media/zoomImage_9921C0C4_8B97_F853_41DC_EA760EDABFA7_0_2.png",
                    "width": 512,
                    "class": "ImageResourceLevel",
                    "height": 363
                }
            ]
        },
        {
            "easing": "cubic_out",
            "id": "FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802",
            "class": "FadeOutEffect",
            "duration": 500
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC56F4B_2A64_10B9_4198_EA95DD1F9A68",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -133.54,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96E19E2F_8BAE_682D_41D2_47194E9B9E59",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_9606EECE_8BAE_686F_41D5_ACF1FCC8091E",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC63F48_2A64_10A7_41C0_A121DEB1A5D2",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in",
            "id": "FadeInEffect_926BC3B1_8B97_B835_41C8_01F4716D71B2",
            "class": "FadeInEffect",
            "duration": 500
        },
        {
            "easing": "cubic_in",
            "id": "FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D",
            "class": "FadeInEffect",
            "duration": 500
        },
        {
            "items": [
                {
                    "media": "this.video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81",
                    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9708FDF1_8BAE_6835_41CF_2A51374562F8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9708FDF1_8BAE_6835_41CF_2A51374562F8, 0)",
                    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                    "player": "this.MainViewerVideoPlayer",
                    "class": "VideoPlayListItem"
                }
            ],
            "id": "playList_9708FDF1_8BAE_6835_41CF_2A51374562F8",
            "class": "PlayList"
        },
        {
            "buttonCardboardView": "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "buttonToggleHotspots": "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "displayPlaybackBar": true,
            "viewerArea": "this.MainViewer",
            "id": "MainViewerPanoramaPlayer",
            "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "touchControlMode": "drag_rotation",
            "gyroscopeVerticalDraggingEnabled": true,
            "class": "PanoramaPlayer",
            "buttonToggleGyroscope": "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "mouseControlMode": "drag_acceleration"
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -93.31,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_9601CECC_8BAE_6853_41CC_F17EC374C6A2",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -180,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96266EBB_8BAE_6835_41DB_50AC5636070E",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_97080DF1_8BAE_6835_4194_9448BF1F0485",
            "class": "PlayList"
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -6.04,
                "class": "PanoramaCameraPosition",
                "pitch": -3.59
            },
            "id": "panorama_18D0788B_1348_5CC7_4191_217370E98EAE_camera",
            "class": "PanoramaCamera"
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_9606AECE_8BAE_686F_41C9_5CFD61777139",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 169.61,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96562EB3_8BAE_6835_41B9_527695100819",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96074ECD_8BAE_686D_419B_612DC13EB387",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": -6.99,
                    "yaw": -6.99,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7"
                },
                {
                    "backwardYaw": 51.28,
                    "yaw": 179.62,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC"
                }
            ],
            "hfov": 360,
            "partial": false,
            "id": "panorama_18D0788B_1348_5CC7_4191_217370E98EAE",
            "thumbnailUrl": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_t.jpg",
            "label": "IMG_20260427_124701_00_039",
            "pitch": 0,
            "class": "Panorama",
            "hfovMax": 130,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 275.9,
                    "angle": 85.32,
                    "y": 1218.11,
                    "class": "PanoramaMapLocation"
                }
            ],
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_t.jpg"
                }
            ],
            "overlays": [
                "this.overlay_1CF32901_1348_5DC3_41AC_5241CC695EB9",
                "this.overlay_033FEAC4_1349_DC40_4195_DD1F38A612D8",
                "this.overlay_2811B2EA_3A9F_CB26_41CC_41A189179DF0"
            ]
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -68.37,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96ADEE74_8BAE_6833_41BF_1A319A93A1CC",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 111.63,
                    "yaw": -85.18,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0"
                },
                {
                    "backwardYaw": -96.52,
                    "yaw": 86.69,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440"
                }
            ],
            "hfovMin": "150%",
            "hfov": 360,
            "label": "IMG_20260427_113743_00_003",
            "id": "panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF",
            "thumbnailUrl": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_t.jpg"
                }
            ],
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 805.64,
                    "angle": 86.13,
                    "y": 1656.86,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_037AAE1F_1358_37FF_4188_D0C82693F305",
                "this.overlay_037A9E20_1358_37C1_41AD_16101058DA02",
                "this.overlay_023878E1_1358_FC40_41B1_61AED61DED92"
            ]
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_97084DF1_8BAE_6835_41B4_A050DA4BCDDF",
            "class": "PlayList"
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": -10.39,
                    "yaw": 46.46,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA"
                },
                {
                    "backwardYaw": 0,
                    "yaw": -162.62,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69"
                },
                {
                    "backwardYaw": -85.18,
                    "yaw": 111.63,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF"
                }
            ],
            "hfovMin": "150%",
            "hfov": 360,
            "label": "IMG_20260427_113710_00_002",
            "id": "panorama_18D5F0D5_1349_CC43_414C_531D97C056B0",
            "thumbnailUrl": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_t.jpg",
            "pitch": 0,
            "partial": false,
            "class": "Panorama",
            "hfovMax": 130,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/0/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/1/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/2/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_t.jpg"
                }
            ],
            "vfov": 180,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 792.29,
                    "angle": 88.87,
                    "y": 1191.4,
                    "class": "PanoramaMapLocation"
                }
            ],
            "overlays": [
                "this.overlay_1CBBAB05_1348_3DC3_4199_FD8B310AD322",
                "this.overlay_033DB51D_1357_D5C0_41B0_195A91016D6D",
                "this.overlay_0B83212A_2A7C_10FB_41B6_ED63E3D5A199"
            ]
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC54F49_2A64_10B9_41C2_E77620213A1E",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96052ECE_8BAE_686F_41A1_F6FC60920A4C",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC69F4B_2A64_10B9_41C0_D31F7BB08BC1",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 173.01,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96EF8E47_8BAE_685E_41DA_603370E798E5",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "viewerArea": "this.MainViewer",
            "id": "MainViewerVideoPlayer",
            "class": "VideoPlayer",
            "displayPlaybackBar": true
        },
        {
            "fieldOfViewOverlayOutsideOpacity": 0,
            "label": "minimap",
            "id": "map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
            "minimumZoomFactor": 0.5,
            "thumbnailUrl": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_t.png",
            "width": 1667,
            "fieldOfViewOverlayOutsideColor": "#000000",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463.png",
                        "width": 1667,
                        "class": "ImageResourceLevel",
                        "height": 2500
                    },
                    {
                        "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_lq.png",
                        "width": 209,
                        "class": "ImageResourceLevel",
                        "height": 314,
                        "tags": "preload"
                    }
                ]
            },
            "fieldOfViewOverlayRadiusScale": 0.16,
            "maximumZoomFactor": 4,
            "class": "Map",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "initialZoomFactor": 3,
            "scaleMode": "fit_to_height",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "height": 2500,
            "overlays": [
                "this.overlay_1AE9A4DF_17EB_EDA4_41AF_434A923CD2CA",
                "this.overlay_19B73809_17F4_64AF_4198_BFE07171FADA",
                "this.overlay_190D6D4A_17F4_9CAD_41AD_AE676A1F0D78",
                "this.overlay_1A05496D_17F4_E767_4199_0CFF1F628473",
                "this.overlay_1A6BE89E_17F4_E5A5_41AC_778EF90968F6",
                "this.overlay_19D36A30_17F4_A4FC_41B2_FB1697C0EC8D",
                "this.overlay_1A0A66F8_17F4_6D6C_41A6_0AB491743C39",
                "this.overlay_19F9CBD6_17F5_9BA5_4197_FFC573153A72"
            ]
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC41F4D_2A64_10B9_41C4_AE1B1ABE2FCB",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96009ECD_8BAE_686D_41CA_2AD63AB097E3",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_9607FECD_8BAE_686D_41B3_F1A7EE0CF85C",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -9.07,
                "class": "PanoramaCameraPosition",
                "pitch": -3.4
            },
            "id": "panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -2.64,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_966A0E98_8BAE_68F2_41D6_69A63EACACA2",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "adjacentPanoramas": [
                {
                    "backwardYaw": 177.36,
                    "yaw": 176.6,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69"
                },
                {
                    "backwardYaw": -6.99,
                    "yaw": -6.99,
                    "class": "AdjacentPanorama",
                    "distance": 1,
                    "panorama": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE"
                }
            ],
            "hfov": 360,
            "partial": false,
            "id": "panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7",
            "thumbnailUrl": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_t.jpg",
            "label": "IMG_20260427_125400_00_042",
            "pitch": 0,
            "class": "Panorama",
            "hfovMax": 130,
            "mapLocations": [
                {
                    "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "x": 404.47,
                    "angle": -84.96,
                    "y": 1204.93,
                    "class": "PanoramaMapLocation"
                }
            ],
            "vfov": 180,
            "frames": [
                {
                    "front": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "class": "CubicPanoramaFrame",
                    "top": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "right": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "back": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "bottom": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "left": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/0/{row}_{column}.jpg",
                                "rowCount": 8,
                                "tags": "ondemand",
                                "width": 4096,
                                "colCount": 8,
                                "class": "TiledImageResourceLevel",
                                "height": 4096
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/1/{row}_{column}.jpg",
                                "rowCount": 4,
                                "tags": "ondemand",
                                "width": 2048,
                                "colCount": 4,
                                "class": "TiledImageResourceLevel",
                                "height": 2048
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/2/{row}_{column}.jpg",
                                "rowCount": 2,
                                "tags": "ondemand",
                                "width": 1024,
                                "colCount": 2,
                                "class": "TiledImageResourceLevel",
                                "height": 1024
                            },
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/3/{row}_{column}.jpg",
                                "rowCount": 1,
                                "tags": [
                                    "ondemand",
                                    "preload"
                                ],
                                "width": 512,
                                "colCount": 1,
                                "class": "TiledImageResourceLevel",
                                "height": 512
                            }
                        ]
                    },
                    "thumbnailUrl": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_t.jpg"
                }
            ],
            "overlays": [
                "this.overlay_1C44BD50_1348_D440_41AC_E83A7F19EE9A",
                "this.overlay_1C448D50_1348_D440_4199_CE58F9D97DC2"
            ]
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -128.72,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96FA1E50_8BAE_6872_41E0_AB67AC33FF38",
            "class": "PanoramaCamera",
            "initialSequence": {
                "movements": [
                    {
                        "targetYaw": 4.34,
                        "pitchSpeed": 47.04,
                        "path": "shortest",
                        "targetPitch": 0.94,
                        "yawSpeed": 93.5,
                        "easing": "cubic_in_out",
                        "class": "TargetPanoramaCameraMovement"
                    },
                    {
                        "targetYaw": 50.62,
                        "end": "this.showPopupImage(this.ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C, null, '90%', '90%', this.FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D, this.FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
                        "pitchSpeed": 17.05,
                        "path": "shortest",
                        "targetPitch": 4.25,
                        "yawSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "class": "TargetPanoramaCameraMovement"
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 173.01,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_967BCEA2_8BAE_68D7_41C8_2D3E3CA048C2",
            "class": "PanoramaCamera",
            "initialSequence": {
                "movements": [
                    {
                        "targetYaw": -6.04,
                        "pitchSpeed": 17.05,
                        "path": "shortest",
                        "targetPitch": -3.59,
                        "yawSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "class": "TargetPanoramaCameraMovement"
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96062ECD_8BAE_686D_41C6_0719A784DF90",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC74F46_2A64_10A8_418A_2C73D14D91B2",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_9600FECC_8BAE_6853_41DE_4B6AD4C8B10F",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC7DF46_2A64_10A8_41C4_2B357A30C3D3",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -3.4,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96D27E62_8BAE_6857_41E0_4D9A47C6DB48",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "items": [
                {
                    "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
                    "media": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
                    "class": "MapPlayListItem",
                    "player": "this.MapViewerMapPlayer"
                }
            ],
            "id": "playList_97086DF1_8BAE_6835_41DD_DB8B3F88F72A",
            "class": "PlayList"
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC63F4A_2A64_10BB_41B3_B1600B3C0382",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 0,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_camera",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96000ECC_8BAE_6853_41D4_FE229B1CBEEF",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": -0.38,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_968E4E86_8BAE_68DF_41DE_D7D38BEC9E5B",
            "class": "PanoramaCamera",
            "initialSequence": {
                "movements": [
                    {
                        "targetYaw": -6.04,
                        "pitchSpeed": 17.05,
                        "path": "shortest",
                        "targetPitch": -3.59,
                        "yawSpeed": 33.25,
                        "easing": "cubic_in_out",
                        "class": "TargetPanoramaCameraMovement"
                    }
                ],
                "restartMovementOnUserInteraction": false,
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "label": "Virtual Reality (1)",
            "scaleMode": "fit_inside",
            "thumbnailUrl": "media/video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81_t.jpg",
            "width": 2240,
            "loop": false,
            "id": "video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81",
            "class": "Video",
            "height": 2240,
            "video": {
                "width": 2240,
                "class": "VideoResource",
                "height": 2240,
                "mp4Url": "media/video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81.mp4"
            }
        },
        {
            "fieldOfViewOverlayOutsideOpacity": 0,
            "label": "Lantai 2 (1) - Copy",
            "id": "map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
            "minimumZoomFactor": 0.5,
            "thumbnailUrl": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_t.png",
            "width": 2500,
            "fieldOfViewOverlayOutsideColor": "#000000",
            "image": {
                "class": "ImageResource",
                "levels": [
                    {
                        "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14.png",
                        "width": 2500,
                        "class": "ImageResourceLevel",
                        "height": 1667
                    },
                    {
                        "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_lq.png",
                        "width": 313,
                        "class": "ImageResourceLevel",
                        "height": 209,
                        "tags": "preload"
                    }
                ]
            },
            "fieldOfViewOverlayRadiusScale": 0.3,
            "maximumZoomFactor": 1.2,
            "class": "Map",
            "fieldOfViewOverlayInsideOpacity": 0.4,
            "initialZoomFactor": 1,
            "scaleMode": "fit_inside",
            "fieldOfViewOverlayInsideColor": "#FFFFFF",
            "height": 1667,
            "overlays": [
                "this.overlay_02595D63_2A24_1369_4184_974001AFE141",
                "this.overlay_0FAC13D2_2A24_17AB_41B0_EE0012666144",
                "this.overlay_0E84F714_2A27_F0AF_41B1_E0EE4AA39B58",
                "this.overlay_0C2A42E0_2A24_3167_418D_00F498BB8F5A",
                "this.overlay_0039477D_2A24_7F59_41B0_4AC7AC68A709",
                "this.overlay_0D15C41D_2A24_10D9_41B2_AAA56CEB7B6C",
                "this.overlay_0D481E59_2A24_3159_4196_9F2BF3543B3E",
                "this.overlay_02F28305_2A24_F0A9_41A5_35A6DFFC3541"
            ]
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_96066ECD_8BAE_686D_41C3_7B61E2711281",
            "class": "FadeOutEffect",
            "duration": 1000
        },
        {
            "easing": "cubic_in_out",
            "id": "effect_0DC67F4A_2A64_10BB_4178_C244C18D245D",
            "class": "FadeInEffect",
            "duration": 1000
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 17.38,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_96A31E6B_8BAE_6855_41DF_46CD508AD275",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "automaticZoomSpeed": 10,
            "initialPosition": {
                "yaw": 94.82,
                "class": "PanoramaCameraPosition",
                "pitch": 0
            },
            "id": "camera_9637CEC3_8BAE_6855_41DD_D879D4E97069",
            "class": "PanoramaCamera",
            "initialSequence": {
                "restartMovementOnUserInteraction": false,
                "movements": [
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_in",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 323,
                        "yawSpeed": 7.96,
                        "easing": "linear",
                        "class": "DistancePanoramaCameraMovement"
                    },
                    {
                        "yawDelta": 18.5,
                        "yawSpeed": 7.96,
                        "easing": "cubic_out",
                        "class": "DistancePanoramaCameraMovement"
                    }
                ],
                "class": "PanoramaCameraSequence"
            }
        },
        {
            "items": [
                {
                    "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
                    "media": "this.map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
                    "class": "MapPlayListItem",
                    "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
                }
            ],
            "id": "playList_9708ADF1_8BAE_6835_41D3_400CAB2CB9E5",
            "class": "PlayList"
        },
        {
            "playbackBarHeadOpacity": 1,
            "playbackBarBottom": 5,
            "toolTipShadowSpread": 0,
            "progressBorderColor": "#003366",
            "id": "MainViewer",
            "left": 0,
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "minHeight": 50,
            "width": "100%",
            "toolTipOpacity": 1,
            "shadow": false,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "2vmin",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeadWidth": 6,
            "toolTipShadowBlurRadius": 3,
            "playbackBarHeight": 10,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipTextShadowColor": "#000000",
            "playbackBarRight": 0,
            "toolTipTextShadowBlurRadius": 3,
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "toolTipPaddingBottom": 4,
            "paddingRight": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "toolTipShadowColor": "#333333",
            "playbackBarProgressBorderRadius": 0,
            "playbackBarBorderRadius": 0,
            "height": "100%",
            "playbackBarHeadBorderRadius": 0,
            "class": "ViewerArea",
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipFontStyle": "normal",
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderSize": 0,
            "transitionMode": "fade_out_fade_in",
            "toolTipShadowHorizontalLength": 0,
            "propagateClick": true,
            "toolTipTextShadowOpacity": 0,
            "toolTipFontFamily": "Arial",
            "toolTipShadowVerticalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "playbackBarHeadShadowColor": "#000000",
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "progressBarBackgroundColorDirection": "vertical",
            "playbackBarHeadShadow": true,
            "progressBottom": 0,
            "toolTipBackgroundColor": "#F6F6F6",
            "toolTipFontColor": "#606060",
            "borderSize": 0,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "minWidth": 100,
            "playbackBarOpacity": 1,
            "progressHeight": 10,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "vrPointerColor": "#FFFFFF",
            "progressBarOpacity": 1,
            "top": 0,
            "paddingLeft": 0,
            "displayTooltipInTouchScreens": true,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "playbackBarHeadShadowOpacity": 0.7,
            "toolTipBorderSize": 1,
            "toolTipPaddingTop": 4,
            "toolTipPaddingLeft": 6,
            "progressBorderRadius": 0,
            "toolTipPaddingRight": 6,
            "toolTipDisplayTime": 600,
            "paddingTop": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "playbackBarLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "paddingBottom": 0,
            "playbackBarHeadHeight": 15,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "progressBarBorderColor": "#000000",
            "transitionDuration": 500,
            "data": {
                "name": "Main Viewer"
            }
        },
        {
            "data": {
                "name": "--SETTINGS"
            },
            "children": [
                "this.Container_B1571269_BF46_B846_41D9_B94D861499DF",
                "this.Container_B1573269_BF46_B846_41AD_E3E55F50C328"
            ],
            "layout": "absolute",
            "width": 115.05,
            "scrollBarColor": "#000000",
            "id": "Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "borderSize": 0,
            "right": "0%",
            "minWidth": 1,
            "top": "0.13%",
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 605.05,
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": true,
            "overflow": "scroll"
        },
        {
            "data": {
                "name": "Tittle luar"
            },
            "children": [
                "this.Label_00A17887_1348_DCC0_41B0_641A5088276D"
            ],
            "layout": "absolute",
            "left": "0.29%",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "width": "27.334%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": "10.935%",
            "top": "1.2%",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "visible": false,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        },
        {
            "backgroundColorRatios": [
                0,
                1
            ],
            "data": {
                "name": "---FLOORPLAN"
            },
            "children": [
                "this.Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E"
            ],
            "layout": "absolute",
            "id": "Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "left": "0%",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "backgroundColorDirection": "vertical",
            "right": "0%",
            "borderSize": 0,
            "minWidth": 1,
            "creationPolicy": "inAdvance",
            "bottom": "0%",
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "backgroundColor": [
                "#000000",
                "#000000"
            ],
            "top": "0%",
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0.6,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "visible": false,
            "scrollBarWidth": 10,
            "propagateClick": true,
            "overflow": "scroll"
        },
        {
            "data": {
                "name": "tiitle dalem"
            },
            "children": [
                "this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8"
            ],
            "layout": "absolute",
            "left": "0.29%",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "width": "27.334%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": "10.935%",
            "top": "1.2%",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "visible": false,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        },
        {
            "data": {
                "name": "Container2974"
            },
            "children": [
                "this.Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
                "this.Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD"
            ],
            "layout": "absolute",
            "left": "1.66%",
            "width": 220,
            "scrollBarColor": "#000000",
            "id": "Container_35E0944F_3B5E_CBD8_41B9_928C53D2E16B",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "bottom": "2.41%",
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "height": 200,
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        },
        {
            "backgroundColorRatios": [
                0
            ],
            "id": "veilPopupPanorama",
            "left": 0,
            "showEffect": {
                "easing": "cubic_in_out",
                "class": "FadeInEffect",
                "duration": 350
            },
            "minHeight": 0,
            "shadow": false,
            "backgroundColorDirection": "vertical",
            "right": 0,
            "borderSize": 0,
            "minWidth": 0,
            "bottom": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "backgroundColor": [
                "#000000"
            ],
            "top": 0,
            "paddingTop": 0,
            "class": "UIComponent",
            "backgroundOpacity": 0.55,
            "borderRadius": 0,
            "paddingBottom": 0,
            "visible": false,
            "propagateClick": false,
            "data": {
                "name": "UIComponent12955"
            }
        },
        {
            "backgroundColorRatios": [],
            "id": "zoomImagePopupPanorama",
            "left": 0,
            "minHeight": 0,
            "shadow": false,
            "backgroundColorDirection": "vertical",
            "right": 0,
            "borderSize": 0,
            "minWidth": 0,
            "bottom": 0,
            "paddingRight": 0,
            "paddingLeft": 0,
            "backgroundColor": [],
            "top": 0,
            "paddingTop": 0,
            "class": "ZoomImage",
            "backgroundOpacity": 1,
            "borderRadius": 0,
            "paddingBottom": 0,
            "scaleMode": "custom",
            "visible": false,
            "propagateClick": false,
            "data": {
                "name": "ZoomImage12956"
            }
        },
        {
            "fontFamily": "Arial",
            "backgroundColorRatios": [
                0,
                0.1,
                1
            ],
            "data": {
                "name": "CloseButton12957"
            },
            "layout": "horizontal",
            "id": "closeButtonPopupPanorama",
            "rollOverIconColor": "#666666",
            "showEffect": {
                "easing": "cubic_in_out",
                "class": "FadeInEffect",
                "duration": 350
            },
            "horizontalAlign": "center",
            "fontSize": "1.29vmin",
            "minHeight": 0,
            "shadow": false,
            "backgroundColorDirection": "vertical",
            "right": 10,
            "borderSize": 0,
            "fontColor": "#FFFFFF",
            "iconColor": "#000000",
            "minWidth": 0,
            "borderColor": "#000000",
            "top": 10,
            "shadowColor": "#000000",
            "verticalAlign": "middle",
            "paddingRight": 5,
            "paddingLeft": 5,
            "iconLineWidth": 5,
            "mode": "push",
            "backgroundColor": [
                "#DDDDDD",
                "#EEEEEE",
                "#FFFFFF"
            ],
            "label": "",
            "iconHeight": 20,
            "shadowBlurRadius": 6,
            "paddingTop": 5,
            "class": "CloseButton",
            "pressedIconColor": "#888888",
            "backgroundOpacity": 0.3,
            "iconBeforeLabel": true,
            "borderRadius": 0,
            "gap": 5,
            "paddingBottom": 5,
            "textDecoration": "none",
            "visible": false,
            "fontStyle": "normal",
            "shadowSpread": 1,
            "cursor": "hand",
            "propagateClick": false,
            "fontWeight": "normal",
            "iconWidth": 20
        },
        {
            "width": 58,
            "id": "IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
            "transparencyActive": true,
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "maxWidth": 58,
            "iconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081.png",
            "maxHeight": 58,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "toggle",
            "height": 58,
            "paddingTop": 0,
            "pressedRollOverIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed_rollover.png",
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "IconButton FULLSCREEN"
            }
        },
        {
            "playbackBarHeadOpacity": 1,
            "playbackBarBottom": 0,
            "toolTipShadowSpread": 0,
            "progressBorderColor": "#003366",
            "id": "MapViewer",
            "left": "0%",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "minHeight": 1,
            "width": "100%",
            "toolTipOpacity": 1,
            "shadow": false,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": "2vmin",
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeadWidth": 6,
            "toolTipShadowBlurRadius": 3,
            "playbackBarHeight": 10,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipTextShadowColor": "#000000",
            "playbackBarRight": 0,
            "toolTipTextShadowBlurRadius": 3,
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "toolTipPaddingBottom": 4,
            "paddingRight": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "toolTipShadowColor": "#333333",
            "playbackBarProgressBorderRadius": 0,
            "playbackBarBorderRadius": 0,
            "height": "100%",
            "playbackBarHeadBorderRadius": 0,
            "class": "ViewerArea",
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipFontStyle": "normal",
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderSize": 0,
            "transitionMode": "fade_out_fade_in",
            "toolTipShadowHorizontalLength": 0,
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "toolTipFontFamily": "Arial",
            "toolTipShadowVerticalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "playbackBarHeadShadowColor": "#000000",
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "progressBarBackgroundColorDirection": "vertical",
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "toolTipBackgroundColor": "#F6F6F6",
            "toolTipFontColor": "#606060",
            "borderSize": 0,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "minWidth": 1,
            "playbackBarOpacity": 1,
            "progressHeight": 10,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "vrPointerColor": "#FFFFFF",
            "progressBarOpacity": 1,
            "top": "0%",
            "paddingLeft": 0,
            "displayTooltipInTouchScreens": true,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "playbackBarHeadShadowOpacity": 0.7,
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "toolTipBorderSize": 1,
            "toolTipPaddingTop": 4,
            "toolTipPaddingLeft": 6,
            "progressBorderRadius": 0,
            "toolTipPaddingRight": 6,
            "toolTipDisplayTime": 600,
            "paddingTop": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "playbackBarLeft": 0,
            "progressBackgroundColorRatios": [
                0
            ],
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "paddingBottom": 0,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "playbackBarHeadShadowBlurRadius": 3,
            "playbackBarHeadHeight": 15,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "progressBarBorderColor": "#000000",
            "transitionDuration": 0,
            "data": {
                "name": "Floor Plan mini"
            }
        },
        {
            "left": "10%",
            "width": 32,
            "id": "IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
            "transparencyActive": true,
            "minHeight": 0,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 0,
            "top": "4.75%",
            "iconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "push",
            "height": 32,
            "paddingTop": 0,
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "rollOverIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_rollover.png",
            "pressedIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_pressed.png",
            "cursor": "hand",
            "propagateClick": false,
            "data": {
                "name": "Button37510"
            }
        },
        {
            "cursor": "hand",
            "left": "12%",
            "width": 32,
            "id": "IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
            "transparencyActive": true,
            "minHeight": 0,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 0,
            "iconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291.png",
            "bottom": "27.18%",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "push",
            "height": 32,
            "paddingTop": 0,
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "rollOverIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_rollover.png",
            "pressedIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_pressed.png",
            "propagateClick": false,
            "data": {
                "name": "Button37499"
            }
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_96E19E2F_8BAE_682D_41D2_47194E9B9E59); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "Lantai 1"
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 13,
                    "image": "this.AnimatedImageResource_066FEB7D_17FB_9B67_41B3_FBB306A29F0E",
                    "pitch": -51.28,
                    "yaw": -10.39,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_0091B580_1348_54C1_41A1_9043FD8B624A",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 13,
                    "yaw": -10.39,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -51.28
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "data": {
                "label": "Lantai 2"
            },
            "items": [
                {
                    "hfov": 13.52,
                    "image": "this.AnimatedImageResource_066F5B7D_17FB_9B67_41B2_6BA4F9E374DA",
                    "pitch": -49.39,
                    "yaw": 18.7,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "Lantai 2",
                    "click": "this.openLink('../Lantai 2/index.htm', '_self')"
                }
            ],
            "id": "overlay_0741B2BA_1348_4CC1_4194_0D4B2FB1CCD6",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 13.52,
                    "yaw": 18.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -49.39
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "data": {
                "label": "Pintu Labmat"
            },
            "items": [
                {
                    "hfov": 33,
                    "image": "this.AnimatedImageResource_056FEB42_1358_7C40_415F_74C69D61C7EE",
                    "pitch": -0.45,
                    "yaw": -3.33,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "Laboratorium Pembelajaran Fisika",
                    "click": "this.openLink('../Labfis/index.htm', '_self')"
                }
            ],
            "id": "overlay_03CD4A96_1358_5CC0_41AD_D9548CF79F9A",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 33,
                    "yaw": -3.33,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_1_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -0.45
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF, this.camera_9601CECC_8BAE_6853_41CC_F17EC374C6A2); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.55,
                    "image": "this.AnimatedImageResource_056FBB42_1358_7C40_4198_EB54DCE6E25D",
                    "pitch": -20.68,
                    "yaw": -96.52,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_038C1767_1358_544F_4185_6A17F20F4E0E",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.55,
                    "yaw": -96.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -20.68
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE, this.camera_968E4E86_8BAE_68DF_41DE_D7D38BEC9E5B); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 19.75,
                    "image": "this.AnimatedImageResource_05638B40_1358_7C40_41AD_537D14593014",
                    "pitch": -19.64,
                    "yaw": 51.28,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1D52FB1B_1348_5DC0_41A8_D138328BE960",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 19.75,
                    "yaw": 51.28,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -19.64
                }
            ]
        },
        {
            "id": "overlay_3406C851_3A90_C762_41C0_9923C335D3DA",
            "bleaching": 0.7,
            "pitch": 59.21,
            "yaw": 55.15,
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.58
        },
        {
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "items": [
                {
                    "hfov": 34.88,
                    "distance": 50,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_2_0.png",
                                "width": 1154,
                                "class": "ImageResourceLevel",
                                "height": 1039
                            }
                        ]
                    },
                    "pitch": 2.04,
                    "yaw": 50.57,
                    "class": "HotspotPanoramaOverlayImage"
                }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_280092E2_3A90_4B26_41B8_849A626A36B8",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 34.88,
                    "yaw": 50.57,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_2_0_0_map.gif",
                                "width": 17,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 2.04
                }
            ]
        },
        {
            "playbackBarHeadOpacity": 1,
            "playbackBarBottom": 0,
            "toolTipShadowSpread": 0,
            "progressBorderColor": "#FFFFFF",
            "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
            "playbackBarHeadShadowHorizontalLength": 0,
            "playbackBarProgressBackgroundColorDirection": "vertical",
            "progressBarBackgroundColor": [
                "#3399FF"
            ],
            "toolTipBorderColor": "#767676",
            "minHeight": 1,
            "width": "100%",
            "toolTipOpacity": 1,
            "shadow": false,
            "progressBackgroundColor": [
                "#FFFFFF"
            ],
            "toolTipFontSize": 12,
            "playbackBarBackgroundColor": [
                "#FFFFFF"
            ],
            "playbackBarHeadWidth": 6,
            "toolTipShadowBlurRadius": 3,
            "playbackBarHeight": 10,
            "playbackBarBackgroundColorDirection": "vertical",
            "toolTipTextShadowColor": "#000000",
            "playbackBarRight": 0,
            "toolTipTextShadowBlurRadius": 3,
            "toolTipFontWeight": "normal",
            "playbackBarProgressBorderSize": 0,
            "toolTipPaddingBottom": 4,
            "paddingRight": 0,
            "progressBarBorderRadius": 0,
            "progressBarBorderSize": 0,
            "toolTipShadowColor": "#333333",
            "playbackBarProgressBorderRadius": 0,
            "playbackBarBorderRadius": 0,
            "height": "100%",
            "playbackBarHeadBorderRadius": 0,
            "class": "ViewerArea",
            "playbackBarProgressBorderColor": "#000000",
            "playbackBarHeadBorderColor": "#000000",
            "toolTipFontStyle": "normal",
            "progressLeft": 0,
            "playbackBarHeadBorderSize": 0,
            "playbackBarProgressOpacity": 1,
            "toolTipShadowOpacity": 1,
            "playbackBarBorderSize": 0,
            "transitionMode": "blending",
            "toolTipShadowHorizontalLength": 0,
            "propagateClick": false,
            "toolTipTextShadowOpacity": 0,
            "toolTipFontFamily": "Arial",
            "toolTipShadowVerticalLength": 0,
            "vrPointerSelectionColor": "#FF6600",
            "playbackBarBackgroundOpacity": 1,
            "playbackBarHeadBackgroundColor": [
                "#111111",
                "#666666"
            ],
            "playbackBarHeadShadowColor": "#000000",
            "vrPointerSelectionTime": 2000,
            "progressRight": 0,
            "firstTransitionDuration": 0,
            "progressOpacity": 1,
            "progressBarBackgroundColorDirection": "vertical",
            "playbackBarHeadShadow": true,
            "progressBottom": 2,
            "toolTipBackgroundColor": "#F6F6F6",
            "toolTipFontColor": "#606060",
            "borderSize": 0,
            "playbackBarHeadBackgroundColorDirection": "vertical",
            "progressBackgroundOpacity": 1,
            "minWidth": 1,
            "playbackBarOpacity": 1,
            "progressHeight": 10,
            "playbackBarProgressBackgroundColor": [
                "#3399FF"
            ],
            "vrPointerColor": "#FFFFFF",
            "progressBarOpacity": 1,
            "playbackBarHeadShadowOpacity": 0.7,
            "paddingLeft": 0,
            "displayTooltipInTouchScreens": true,
            "playbackBarBorderColor": "#FFFFFF",
            "progressBorderSize": 0,
            "toolTipBorderSize": 1,
            "toolTipPaddingTop": 4,
            "toolTipPaddingLeft": 6,
            "progressBorderRadius": 0,
            "toolTipPaddingRight": 6,
            "toolTipDisplayTime": 600,
            "paddingTop": 0,
            "playbackBarHeadShadowVerticalLength": 0,
            "playbackBarLeft": 0,
            "progressBackgroundColorRatios": [
                0.01
            ],
            "playbackBarProgressBackgroundColorRatios": [
                0
            ],
            "toolTipBorderRadius": 3,
            "borderRadius": 0,
            "paddingBottom": 0,
            "playbackBarHeadHeight": 15,
            "playbackBarHeadBackgroundColorRatios": [
                0,
                1
            ],
            "playbackBarHeadShadowBlurRadius": 3,
            "progressBarBackgroundColorRatios": [
                0
            ],
            "progressBackgroundColorDirection": "vertical",
            "progressBarBorderColor": "#0066FF",
            "transitionDuration": 500,
            "data": {
                "name": "Floor Plan big"
            }
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7, this.camera_96D27E62_8BAE_6857_41E0_4D9A47C6DB48); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.17,
                    "image": "this.AnimatedImageResource_056D8B41_1358_7C40_418B_8C96898D539C",
                    "pitch": -24.08,
                    "yaw": 177.36,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1C1C6181_1348_4CC3_418F_B3E7E7F5F6CA",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.17,
                    "yaw": 177.36,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -24.08
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_96A31E6B_8BAE_6855_41DF_46CD508AD275); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01b"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.3,
                    "image": "this.AnimatedImageResource_09614319_2A7C_10D9_4183_68E8B46707CC",
                    "pitch": -42.59,
                    "yaw": 0,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_0980D9B3_2A7C_13E9_41B0_10AA672F37CF",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.3,
                    "yaw": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -42.59
                }
            ]
        },
        {
            "media": "this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC",
            "end": "if(this.existsKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')){ if(this.getKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')) { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC74F46_2A64_10A8_418A_2C73D14D91B2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false, -1, this.effect_96000ECC_8BAE_6853_41D4_FE229B1CBEEF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C'); if(this.existsKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')){ if(this.getKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')) { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC7DF46_2A64_10A8_41C4_2B357A30C3D3, 'showEffect', false); } else { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false, -1, this.effect_9600FECC_8BAE_6853_41DE_4B6AD4C8B10F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')",
            "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true)",
            "begin": "this.registerKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D', this.Label_00A17887_1348_DCC0_41B0_641A5088276D.get('visible')); this.registerKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C', this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_970FCDF1_8BAE_6835_41C8_4853F361E642, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC74F46_2A64_10A8_418A_2C73D14D91B2, 'showEffect', false); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false); this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC7DF46_2A64_10A8_41C4_2B357A30C3D3, 'showEffect', false)",
            "camera": "this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970FCDF1_8BAE_6835_41C8_4853F361E642",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE",
            "end": "if(this.existsKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')){ if(this.getKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')) { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC67F48_2A64_10A7_41B6_213DD49ED75F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false, -1, this.effect_96009ECD_8BAE_686D_41CA_2AD63AB097E3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C'); if(this.existsKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')){ if(this.getKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')) { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC63F48_2A64_10A7_41C0_A121DEB1A5D2, 'showEffect', false); } else { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false, -1, this.effect_96074ECD_8BAE_686D_419B_612DC13EB387, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D'); if(this.existsKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')){ if(this.getKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')) { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true, -1, this.effect_96071ECD_8BAE_686D_41DF_6A1B076F98D9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false, -1, this.effect_0DC69F48_2A64_10A7_41C4_6102B47ADD05, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6'); if(this.existsKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')){ if(this.getKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')) { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true, -1, this.effect_9607FECD_8BAE_686D_41B3_F1A7EE0CF85C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false, -1, this.effect_0DC54F49_2A64_10B9_41C2_E77620213A1E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')",
            "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true); this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true)",
            "begin": "this.registerKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8', this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8.get('visible')); this.registerKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6', this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6.get('visible')); this.registerKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D', this.Label_00A17887_1348_DCC0_41B0_641A5088276D.get('visible')); this.registerKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C', this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_970E3DF1_8BAE_6835_41E1_6FE775297834, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC67F48_2A64_10A7_41B6_213DD49ED75F, 'showEffect', false); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false); this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC63F48_2A64_10A7_41C0_A121DEB1A5D2, 'showEffect', false); this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false); this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false, -1, this.effect_0DC69F48_2A64_10A7_41C4_6102B47ADD05, 'hideEffect', false); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false); this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false, -1, this.effect_0DC54F49_2A64_10B9_41C2_E77620213A1E, 'hideEffect', false)",
            "camera": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970E3DF1_8BAE_6835_41E1_6FE775297834",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7",
            "end": "if(this.existsKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')){ if(this.getKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C')) { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC67F4A_2A64_10BB_4178_C244C18D245D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false, -1, this.effect_96066ECD_8BAE_686D_41C3_7B61E2711281, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C'); if(this.existsKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')){ if(this.getKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D')) { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC63F4A_2A64_10BB_41B3_B1600B3C0382, 'showEffect', false); } else { this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false, -1, this.effect_96062ECD_8BAE_686D_41C6_0719A784DF90, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D'); if(this.existsKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')){ if(this.getKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')) { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true, -1, this.effect_9606EECE_8BAE_686F_41D5_ACF1FCC8091E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false, -1, this.effect_0DC69F4B_2A64_10B9_41C0_D31F7BB08BC1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6'); if(this.existsKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')){ if(this.getKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')) { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true, -1, this.effect_9606AECE_8BAE_686F_41C9_5CFD61777139, 'showEffect', false); } else { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false, -1, this.effect_0DC56F4B_2A64_10B9_4198_EA95DD1F9A68, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')",
            "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true); this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true)",
            "begin": "this.registerKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8', this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8.get('visible')); this.registerKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6', this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6.get('visible')); this.registerKey('visibility_Label_00A17887_1348_DCC0_41B0_641A5088276D', this.Label_00A17887_1348_DCC0_41B0_641A5088276D.get('visible')); this.registerKey('visibility_Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C', this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_970EADF6_8BAE_683F_41CD_4199F9F0E877, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_0DC67F4A_2A64_10BB_4178_C244C18D245D, 'showEffect', false); this.keepComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, false); this.setComponentVisibility(this.Label_00A17887_1348_DCC0_41B0_641A5088276D, true, -1, this.effect_0DC63F4A_2A64_10BB_41B3_B1600B3C0382, 'showEffect', false); this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false); this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false, -1, this.effect_0DC69F4B_2A64_10B9_41C0_D31F7BB08BC1, 'hideEffect', false); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false); this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false, -1, this.effect_0DC56F4B_2A64_10B9_4198_EA95DD1F9A68, 'hideEffect', false)",
            "camera": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970EADF6_8BAE_683F_41CD_4199F9F0E877",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69",
            "end": "if(this.existsKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')){ if(this.getKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6')) { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true, -1, this.effect_0DC41F4D_2A64_10B9_41C4_AE1B1ABE2FCB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false, -1, this.effect_96052ECE_8BAE_686F_41A1_F6FC60920A4C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6'); if(this.existsKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')){ if(this.getKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')) { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true, -1, this.effect_0DC4FF4D_2A64_10B9_41C3_D872384E5454, 'showEffect', false); } else { this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false, -1, this.effect_96053ECE_8BAE_686F_41D0_0174CFC4634F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8')",
            "start": "this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true)",
            "begin": "this.registerKey('visibility_Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8', this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8.get('visible')); this.registerKey('visibility_Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6', this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_970DEDF7_8BAE_683D_41D7_90A54353FE8D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, false); this.setComponentVisibility(this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6, true, -1, this.effect_0DC41F4D_2A64_10B9_41C4_AE1B1ABE2FCB, 'showEffect', false); this.keepComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, false); this.setComponentVisibility(this.Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8, true, -1, this.effect_0DC4FF4D_2A64_10B9_41C3_D872384E5454, 'showEffect', false)",
            "camera": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970DEDF7_8BAE_683D_41D7_90A54353FE8D",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_970C4DF7_8BAE_683D_41C4_079C41AA9154, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
            "camera": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970C4DF7_8BAE_683D_41C4_079C41AA9154",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_970CCDF7_8BAE_683D_41BC_63E6FB555893, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
            "camera": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_970CCDF7_8BAE_683D_41BC_63E6FB555893",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_97135DF7_8BAE_683D_41DC_5A8D51C379DF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
            "camera": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_97135DF7_8BAE_683D_41DC_5A8D51C379DF",
            "class": "PanoramaPlayListItem"
        },
        {
            "media": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA",
            "end": "this.trigger('tourEnded')",
            "begin": "this.setMapLocation(this.PanoramaPlayListItem_9713BDFD_8BAE_682D_41DC_B4DCFA567D09, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
            "camera": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_camera",
            "player": "this.MainViewerPanoramaPlayer",
            "id": "PanoramaPlayListItem_9713BDFD_8BAE_682D_41DC_B4DCFA567D09",
            "class": "PanoramaPlayListItem"
        },
        {
            "width": 58,
            "id": "IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
            "transparencyActive": true,
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "maxWidth": 58,
            "iconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7.png",
            "maxHeight": 58,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "push",
            "height": 58,
            "paddingTop": 0,
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "rollOverIconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7_rollover.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "IconButton VR"
            }
        },
        {
            "width": 58,
            "id": "IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
            "transparencyActive": true,
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "maxWidth": 58,
            "iconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781.png",
            "maxHeight": 58,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "toggle",
            "height": 58,
            "paddingTop": 0,
            "pressedRollOverIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed_rollover.png",
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "IconButton HS "
            }
        },
        {
            "width": 58,
            "id": "IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
            "transparencyActive": true,
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "maxWidth": 58,
            "iconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250.png",
            "maxHeight": 58,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "toggle",
            "height": 58,
            "paddingTop": 0,
            "pressedRollOverIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed_rollover.png",
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "IconButton GYRO"
            }
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7, this.camera_96EF8E47_8BAE_685E_41DA_603370E798E5); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.39,
                    "image": "this.AnimatedImageResource_05630B41_1358_7C40_41AD_780A23038D72",
                    "pitch": -22.19,
                    "yaw": -6.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1CF32901_1348_5DC3_41AC_5241CC695EB9",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.39,
                    "yaw": -6.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -22.19
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC, this.camera_96FA1E50_8BAE_6872_41E0_AB67AC33FF38); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 16.05,
                    "image": "this.AnimatedImageResource_0562FB41_1358_7C40_4176_F3DD67216BFD",
                    "pitch": -15.02,
                    "yaw": 179.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_033FEAC4_1349_DC40_4195_DD1F38A612D8",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 16.05,
                    "yaw": 179.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -15.02
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "data": {
                "label": "L"
            },
            "items": [
                {
                    "hfov": 8.71,
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_2_0.png",
                                "width": 296,
                                "class": "ImageResourceLevel",
                                "height": 415
                            }
                        ]
                    },
                    "pitch": 13.32,
                    "yaw": 1.71,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50
                }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_2811B2EA_3A9F_CB26_41CC_41A189179DF0",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 8.71,
                    "yaw": 1.71,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_2_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 22
                            }
                        ]
                    },
                    "pitch": 13.32
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_96ADEE74_8BAE_6833_41BF_1A319A93A1CC); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.43,
                    "image": "this.AnimatedImageResource_056C8B42_1358_7C40_419B_1BDC7D951BE1",
                    "pitch": -21.82,
                    "yaw": -85.18,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_037AAE1F_1358_37FF_4188_D0C82693F305",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.43,
                    "yaw": -85.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -21.82
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D01CC6_1348_3440_41A2_BD2321889440, this.camera_96BD6E7D_8BAE_682D_41BD_7F7C8BF07337); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.7,
                    "image": "this.AnimatedImageResource_056C4B42_1358_7C40_4192_02452EB42873",
                    "pitch": -19.17,
                    "yaw": 86.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_037A9E20_1358_37C1_41AD_16101058DA02",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.7,
                    "yaw": 86.69,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -19.17
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "data": {
                "label": "pintu labfis"
            },
            "items": [
                {
                    "hfov": 33,
                    "image": "this.AnimatedImageResource_056C2B42_1358_7C40_41B1_E0EB07A187E3",
                    "pitch": -0.45,
                    "yaw": -3.33,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
                {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "Laboratorium Pembelajaran Matematika",
                    "click": "this.openLink('../Labmath/index.htm', '_self')"
                }
            ],
            "id": "overlay_023878E1_1358_FC40_41B1_61AED61DED92",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 33,
                    "yaw": -3.33,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -0.45
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF, this.camera_9637CEC3_8BAE_6855_41DD_D879D4E97069); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.9,
                    "image": "this.AnimatedImageResource_056D7B41_1358_7C40_419A_C4F57D2C8222",
                    "pitch": -16.9,
                    "yaw": 111.63,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1CBBAB05_1348_3DC3_4199_FD8B310AD322",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.9,
                    "yaw": 111.63,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -16.9
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA, this.camera_96562EB3_8BAE_6835_41B9_527695100819); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01a"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 20.68,
                    "image": "this.AnimatedImageResource_056D2B42_1358_7C40_41B2_67577E3A8CA6",
                    "pitch": 5.57,
                    "yaw": 46.46,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_033DB51D_1357_D5C0_41B0_195A91016D6D",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 20.68,
                    "yaw": 46.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": 5.57
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69, this.camera_96266EBB_8BAE_6835_41DB_50AC5636070E); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 14.32,
                    "image": "this.AnimatedImageResource_0960831A_2A7C_10DB_41A6_F640F55CC5D9",
                    "pitch": -30.5,
                    "yaw": -162.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_0B83212A_2A7C_10FB_41B6_ED63E3D5A199",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 14.32,
                    "yaw": -162.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_2_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -30.5
                }
            ]
        },
        {
            "map": {
                "width": 53.59,
                "x": 36.15,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1159.37,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 36.15,
                "height": 67.99,
                "y": 1159.37,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_0.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_1AE9A4DF_17EB_EDA4_41AF_434A923CD2CA",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 249.11,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1184.12,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 249.11,
                "height": 67.99,
                "y": 1184.12,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_1.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_19B73809_17F4_64AF_4198_BFE07171FADA",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 377.67,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1170.94,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 377.67,
                "height": 67.99,
                "y": 1170.94,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_2.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_190D6D4A_17F4_9CAD_41AD_AE676A1F0D78",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 631.23,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1161.5,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 631.23,
                "height": 67.99,
                "y": 1161.5,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_3.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_1A05496D_17F4_E767_4199_0CFF1F628473",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 765.49,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1157.41,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 765.49,
                "height": 67.99,
                "y": 1157.41,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_4.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_1A6BE89E_17F4_E5A5_41AC_778EF90968F6",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 1290.06,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1170.94,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1290.06,
                "height": 67.99,
                "y": 1170.94,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_5.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_19D36A30_17F4_A4FC_41B2_FB1697C0EC8D",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 778.85,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1622.86,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 778.85,
                "height": 67.99,
                "y": 1622.86,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_6.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_1A0A66F8_17F4_6D6C_41A6_0AB491743C39",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 53.59,
                "x": 764.78,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1978.81,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 67.99,
                "offsetX": 0
            },
            "rollOverDisplay": true,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 764.78,
                "height": 67.99,
                "y": 1978.81,
                "width": 53.59,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_7.png",
                            "width": 53,
                            "class": "ImageResourceLevel",
                            "height": 67
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_19F9CBD6_17F5_9BA5_4197_FFC573153A72",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE, this.camera_967BCEA2_8BAE_68D7_41C8_2D3E3CA048C2); this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.39,
                    "image": "this.AnimatedImageResource_0562BB41_1358_7C40_41AF_639C860F04A7",
                    "pitch": -22.19,
                    "yaw": -6.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1C44BD50_1348_D440_41AC_E83A7F19EE9A",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.39,
                    "yaw": -6.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_1_HS_0_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -22.19
                }
            ]
        },
        {
            "rollOverDisplay": false,
            "areas": [
                {
                    "click": "this.startPanoramaWithCamera(this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69, this.camera_966A0E98_8BAE_68F2_41D6_69A63EACACA2); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "data": {
                "label": "Arrow 01c"
            },
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
                {
                    "hfov": 15.13,
                    "image": "this.AnimatedImageResource_05626B41_1358_7C40_41A0_7D048B3E9980",
                    "pitch": -24.46,
                    "yaw": 176.6,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                }
            ],
            "id": "overlay_1C448D50_1348_D440_4199_CE58F9D97DC2",
            "class": "HotspotPanoramaOverlay",
            "maps": [
                {
                    "hfov": 15.13,
                    "yaw": 176.6,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                        "class": "ImageResource",
                        "levels": [
                            {
                                "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_1_HS_1_0_0_map.gif",
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "height": 16
                            }
                        ]
                    },
                    "pitch": -24.46
                }
            ]
        },
        {
            "map": {
                "width": 43.62,
                "x": 1116.43,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_0_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1591.24,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1116.16,
                "height": 55.06,
                "y": 1591.1,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_0.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_02595D63_2A24_1369_4184_974001AFE141",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1132.37,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_1_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1361.87,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1132.23,
                "height": 55.06,
                "y": 1361.74,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_1.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0FAC13D2_2A24_17AB_41B0_EE0012666144",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1162.92,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_2_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 1245.85,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1162.65,
                "height": 55.06,
                "y": 1245.71,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_2.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0E84F714_2A27_F0AF_41B1_E0EE4AA39B58",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1184.35,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_3_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 982.85,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1184.22,
                "height": 55.06,
                "y": 982.72,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_3.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0C2A42E0_2A24_3167_418D_00F498BB8F5A",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1189.98,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_4_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 806.67,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1189.84,
                "height": 55.06,
                "y": 806.54,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_4.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0039477D_2A24_7F59_41B0_4AC7AC68A709",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1622.72,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_5_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 827.44,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1622.45,
                "height": 55.06,
                "y": 827.3,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_5.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0D15C41D_2A24_10D9_41B2_AAA56CEB7B6C",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1989.55,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_6_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 830.92,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1989.42,
                "height": 55.06,
                "y": 830.79,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_6.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_0D481E59_2A24_3159_4196_9F2BF3543B3E",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "map": {
                "width": 43.62,
                "x": 1200.29,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_7_map.gif",
                            "width": 16,
                            "class": "ImageResourceLevel",
                            "height": 20
                        }
                    ]
                },
                "y": 349.54,
                "offsetY": 0,
                "class": "HotspotMapOverlayMap",
                "height": 55.06,
                "offsetX": 0
            },
            "rollOverDisplay": false,
            "data": {
                "label": "Image"
            },
            "image": {
                "x": 1200.03,
                "height": 55.06,
                "y": 349.41,
                "width": 43.62,
                "image": {
                    "class": "ImageResource",
                    "levels": [
                        {
                            "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_7.png",
                            "width": 43,
                            "class": "ImageResourceLevel",
                            "height": 55
                        }
                    ]
                },
                "class": "HotspotMapOverlayImage"
            },
            "useHandCursor": true,
            "areas": [
                {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotMapOverlayArea",
                    "mapColor": "#FF0000"
                }
            ],
            "id": "overlay_02F28305_2A24_F0A9_41A5_35A6DFFC3541",
            "class": "AreaHotspotMapOverlay"
        },
        {
            "data": {
                "name": "button menu sup"
            },
            "children": [
                "this.IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8"
            ],
            "layout": "horizontal",
            "width": 110,
            "scrollBarColor": "#000000",
            "id": "Container_B1571269_BF46_B846_41D9_B94D861499DF",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "borderSize": 0,
            "right": "0%",
            "minWidth": 1,
            "top": "0%",
            "horizontalAlign": "center",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle",
            "height": 110,
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": true,
            "overflow": "visible"
        },
        {
            "data": {
                "name": "-button set"
            },
            "children": [
                "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
                "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
                "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
                "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
                "this.IconButton_9B39973B_8B99_F835_41D3_E73F23299D88"
            ],
            "layout": "vertical",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_B1573269_BF46_B846_41AD_E3E55F50C328",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "right": "0%",
            "minWidth": 1,
            "width": "91.265%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": "58.094%",
            "top": "14.96%",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 3,
            "paddingBottom": 0,
            "visible": false,
            "scrollBarWidth": 10,
            "propagateClick": true,
            "overflow": "scroll"
        },
        {
            "fontFamily": "Yu Gothic UI Semibold",
            "data": {
                "name": "Tittle luar"
            },
            "left": "2.48%",
            "horizontalAlign": "left",
            "id": "Label_00A17887_1348_DCC0_41B0_641A5088276D",
            "minHeight": 1,
            "width": "89.752%",
            "shadow": false,
            "borderSize": 0,
            "textShadowColor": "#000000",
            "text": "Gedung L",
            "fontColor": "#F5F9F5",
            "textShadowVerticalLength": 1,
            "minWidth": 1,
            "textShadowOpacity": 0.7,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "58.75%",
            "top": "0%",
            "fontSize": "2.84vh",
            "paddingTop": 0,
            "class": "Label",
            "textShadowBlurRadius": 3,
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "textDecoration": "none",
            "fontStyle": "normal",
            "propagateClick": false,
            "fontWeight": "normal",
            "textShadowHorizontalLength": 1
        },
        {
            "data": {
                "name": "Global"
            },
            "children": [
                "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
                "this.Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A"
            ],
            "layout": "absolute",
            "left": "15%",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_37D67D50_27F9_B2C3_41B6_C7A7E207B09E",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "right": "15%",
            "minWidth": 1,
            "bottom": "10%",
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "top": "10%",
            "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "visible"
        },
        {
            "fontFamily": "Yu Gothic UI Semibold",
            "data": {
                "name": "tittle dalem"
            },
            "left": "2.48%",
            "horizontalAlign": "left",
            "id": "Label_34E73008_2A64_F0A7_41B1_93E82C39B1A8",
            "minHeight": 1,
            "width": "89.752%",
            "shadow": false,
            "borderSize": 0,
            "textShadowColor": "#000000",
            "text": "Gedung L, Lantai 1",
            "fontColor": "#F5F9F5",
            "textShadowVerticalLength": 1,
            "minWidth": 1,
            "textShadowOpacity": 0.7,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "58.75%",
            "top": "0%",
            "fontSize": "2.84vh",
            "paddingTop": 0,
            "class": "Label",
            "textShadowBlurRadius": 3,
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "textDecoration": "none",
            "fontStyle": "normal",
            "propagateClick": false,
            "fontWeight": "normal",
            "textShadowHorizontalLength": 1
        },
        {
            "backgroundColorRatios": [
                0,
                1
            ],
            "data": {
                "name": "minimap"
            },
            "children": [
                "this.MapViewer"
            ],
            "layout": "absolute",
            "id": "Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "backgroundColorDirection": "vertical",
            "right": "20%",
            "borderSize": 0,
            "minWidth": 1,
            "width": "99.95%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "backgroundColor": [
                "#FFFFFF",
                "#FFFFFF"
            ],
            "top": "0%",
            "height": "95%",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0.24,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        },
        {
            "data": {
                "name": "zoom in out"
            },
            "children": [
                "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
                "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140"
            ],
            "layout": "absolute",
            "left": "80%",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "width": "21.39%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": "51.5%",
            "top": "0%",
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_066FEB7D_17FB_9B67_41B3_FBB306A29F0E",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_066F5B7D_17FB_9B67_41B2_6BA4F9E374DA",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 6,
            "frameCount": 24,
            "levels": [
                {
                    "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_1_HS_0_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "colCount": 4,
            "id": "AnimatedImageResource_056FEB42_1358_7C40_415F_74C69D61C7EE",
            "class": "AnimatedImageResource",
            "frameDuration": 41
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056FBB42_1358_7C40_4198_EB54DCE6E25D",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_05638B40_1358_7C40_41AD_537D14593014",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056D8B41_1358_7C40_418B_8C96898D539C",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_09614319_2A7C_10D9_4183_68E8B46707CC",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_05630B41_1358_7C40_41AD_780A23038D72",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_0562FB41_1358_7C40_4176_F3DD67216BFD",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056C8B42_1358_7C40_419B_1BDC7D951BE1",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056C4B42_1358_7C40_4192_02452EB42873",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 6,
            "frameCount": 24,
            "levels": [
                {
                    "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_1_HS_2_0.png",
                    "width": 800,
                    "class": "ImageResourceLevel",
                    "height": 1200
                }
            ],
            "colCount": 4,
            "id": "AnimatedImageResource_056C2B42_1358_7C40_41B1_E0EB07A187E3",
            "class": "AnimatedImageResource",
            "frameDuration": 41
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056D7B41_1358_7C40_419A_C4F57D2C8222",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_056D2B42_1358_7C40_41B2_67577E3A8CA6",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_2_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_0960831A_2A7C_10DB_41A6_F640F55CC5D9",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_1_HS_0_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_0562BB41_1358_7C40_41AF_639C860F04A7",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "rowCount": 3,
            "frameCount": 9,
            "levels": [
                {
                    "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_1_HS_1_0.png",
                    "width": 330,
                    "class": "ImageResourceLevel",
                    "height": 180
                }
            ],
            "colCount": 3,
            "id": "AnimatedImageResource_05626B41_1358_7C40_41A0_7D048B3E9980",
            "class": "AnimatedImageResource",
            "frameDuration": 62
        },
        {
            "width": 60,
            "id": "IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8",
            "transparencyActive": true,
            "minHeight": 1,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "maxWidth": 60,
            "iconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8.png",
            "maxHeight": 60,
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "toggle",
            "height": 60,
            "click": "if(!this.Container_B1573269_BF46_B846_41AD_E3E55F50C328.get('visible')){ this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, false, 0, null, null, false) }",
            "paddingTop": 0,
            "pressedRollOverIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed_rollover.png",
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "pressedIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "image button menu"
            }
        },
        {
            "width": 40,
            "id": "IconButton_9B39973B_8B99_F835_41D3_E73F23299D88",
            "transparencyActive": false,
            "minHeight": 0,
            "horizontalAlign": "center",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 0,
            "iconURL": "skin/IconButton_9B39973B_8B99_F835_41D3_E73F23299D88.png",
            "verticalAlign": "middle",
            "paddingRight": 0,
            "paddingLeft": 0,
            "mode": "push",
            "height": 40,
            "click": "this.showPopupImage(this.ImageResource_926BD3B1_8B97_B835_41E0_4118D3EE74E1, null, '90%', '90%', this.FadeInEffect_926BC3B1_8B97_B835_41C8_01F4716D71B2, this.FadeOutEffect_926BF3B1_8B97_B835_41C2_8A32AC3448E8, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
            "paddingTop": 0,
            "pressedRollOverIconURL": "skin/IconButton_9B39973B_8B99_F835_41D3_E73F23299D88_pressed_rollover.png",
            "class": "IconButton",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "paddingBottom": 0,
            "rollOverIconURL": "skin/IconButton_9B39973B_8B99_F835_41D3_E73F23299D88_rollover.png",
            "pressedIconURL": "skin/IconButton_9B39973B_8B99_F835_41D3_E73F23299D88_pressed.png",
            "cursor": "hand",
            "propagateClick": true,
            "data": {
                "name": "Information"
            }
        },
        {
            "data": {
                "name": "header"
            },
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "scrollBarColor": "#000000",
            "id": "Container_37D65D51_27F9_B2C5_41C2_1B81C049EC2A",
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "borderSize": 0,
            "minWidth": 1,
            "width": "100%",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 140,
            "paddingTop": 0,
            "class": "Container",
            "backgroundOpacity": 0,
            "borderRadius": 0,
            "gap": 10,
            "paddingBottom": 0,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "overflow": "scroll"
        }],
        "start": "this.init(); this.playList_97080DF1_8BAE_6835_4194_9448BF1F0485.set('selectedIndex', 0); this.playList_97084DF1_8BAE_6835_41B4_A050DA4BCDDF.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
        "data": {
            "name": "Player1268"
        },
        "children": [
            "this.MainViewer",
            "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
            "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
            "this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
            "this.Container_34F71046_2A64_F0AB_41AA_8FB8801FD4C6",
            "this.Container_35E0944F_3B5E_CBD8_41B9_928C53D2E16B",
            "this.veilPopupPanorama",
            "this.zoomImagePopupPanorama",
            "this.closeButtonPopupPanorama"
        ],
        "layout": "absolute",
        "id": "rootPlayer",
        "mobileMipmappingEnabled": false,
        "vrPolyfillScale": 1,
        "scrollBarOpacity": 0.5,
        "scrollBarColor": "#000000",
        "scrollBarVisible": "rollOver",
        "minHeight": 20,
        "horizontalAlign": "left",
        "shadow": false,
        "borderSize": 0,
        "backgroundPreloadEnabled": true,
        "minWidth": 20,
        "defaultVRPointer": "laser",
        "buttonToggleFullscreen": "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
        "scripts": {
            "isCardboardViewMode": function () { var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
            "executeFunctionWhenChange": function (playList, index, endFunction, changeFunction) { var endObject = undefined; var changePlayListFunction = function (event) { if (event.data.previousSelectedIndex == index) { if (changeFunction) changeFunction.call(this); if (endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if (endFunction) { var playListItem = playList.get('items')[index]; if (playListItem.get('class') == 'PanoramaPlayListItem') { var camera = playListItem.get('camera'); if (camera != undefined) endObject = camera.get('initialSequence'); if (endObject == undefined) endObject = camera.get('idleSequence'); } else { endObject = playListItem.get('media'); } if (endObject) { endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
            "setPanoramaCameraWithSpot": function (playListItem, yaw, pitch) { var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
            "setMainMediaByName": function (name) { var items = this.mainPlayList.get('items'); for (var i = 0; i < items.length; ++i) { var item = items[i]; if (item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
            "setMainMediaByIndex": function (index) { var item = undefined; if (index >= 0 && index < this.mainPlayList.get('items').length) { this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
            "getActivePlayerWithViewer": function (viewerArea) { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if (playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if ((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if (playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if (playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
            "getPlayListItems": function (media, player) { var itemClass = (function () { switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length - 1; i >= 0; --i) { var item = items[i]; if (item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
            "setPanoramaCameraWithCurrentSpot": function (playListItem) { var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer == undefined) { return; } var playerClass = currentPlayer.get('class'); if (playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player') { return; } var fromMedia = currentPlayer.get('panorama'); if (fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
            "keepComponentVisibility": function (component, keep) { var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if (value == undefined && keep) { this.registerKey(key, keep); } else if (value != undefined && !keep) { this.unregisterKey(key); } },
            "autotriggerAtStart": function (playList, callback, once) { var onChange = function (event) { callback(); if (once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
            "getComponentByName": function (name) { var list = this.getByClassName('UIComponent'); for (var i = 0, count = list.length; i < count; ++i) { var component = list[i]; var data = component.get('data'); if (data != undefined && data.name == name) { return component; } } return undefined; },
            "openLink": function (url, name) { if (url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if (extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if (isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
            "getMediaFromPlayer": function (player) { switch (player.get('class')) { case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
            "resumeGlobalAudios": function (caller) { if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length - 1; j >= 0; --j) { var a = audiosPaused[j]; if (objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i < count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
            "getMediaWidth": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxW = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('width') > maxW) maxW = r.get('width'); } return maxW; } else { return r.get('width') } default: return media.get('width'); } },
            "resumePlayers": function (players, onlyResumeCameraIfPanorama) { for (var i = 0; i < players.length; ++i) { var player = players[i]; if (onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.resumeCamera(); } else { player.play(); } } },
            "showPopupImage": function (image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback) { var self = this; var closed = false; var playerClickFunction = function () { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function () { zoomImage.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var resizeFunction = function () { setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function () { self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function () { timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if (toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if (loadedCallback) loadedCallback(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); closed = true; if (timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if (autoCloseMilliSeconds) clearAutoClose(); if (hideCallback) hideCallback(); zoomImage.set('visible', false); if (hideEffect && hideEffect.get('duration') > 0) { hideEffect.bind('end', endEffectFunction, this); } else { zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if (toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function () { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function () { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function () { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function () { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if (right < 10) right = 10; if (top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function () { if (timeoutUserInteractionID) { clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else { closeButton.set('visible', false); } }; var userInteractionEndFunction = function () { if (!closed) { timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function () { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function () { self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
            "stopGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; if (audio) { delete audios[audio.get('id')]; if (Object.keys(audios).length == 0) { window.currentGlobalAudios = undefined; } } } if (audio) audio.stop(); },
            "updateVideoCues": function (playList, index) { var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if (video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function () { if (playList.get('selectedIndex') != index) { video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function (event) { var activeCues = event.data.activeCues; for (var i = 0, count = cues.length; i < count; ++i) { var cue = cues[i]; if (activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime') + 0.5)) { cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
            "setMediaBehaviour": function (playList, index, mediaDispatcher) { var self = this; var stateChangeFunction = function (event) { if (event.data.state == 'stopped') { dispose.call(this, true); } }; var onBeginFunction = function () { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if (media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)) { player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function () { var index = playListDispatcher.get('selectedIndex'); if (index != -1) { indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function () { dispose.call(this, false); }; var dispose = function (forceDispose) { if (!playListDispatcher) return; var media = item.get('media'); if ((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if (panoramaSequence && panoramaSequenceIndex != -1) { if (panoramaSequence) { if (panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex - 1].get('class') == 'TargetPanoramaCameraMovement') { var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex - 1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function (event) { initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if (player) { item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for (var i = 0; i < buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if (sameViewerArea) { var currentMedia = this.getMediaFromPlayer(player); if (currentMedia == undefined || currentMedia == item.get('media')) { playListDispatcher.set('selectedIndex', indexDispatcher); } if (playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else { viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if (!mediaDispatcher) { var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if (currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if (!playListDispatcher) { playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if (playList.get('selectedIndex') == index || indexDispatcher == -1) { return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if (sameViewerArea) { if (playList != playListDispatcher) { playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else { viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if (camera) { panoramaSequence = camera.get('initialSequence'); if (panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function (property) { var value = player.get(property); if (value == undefined) return; if (Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for (var i = 0; i < buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if (player != itemDispatcher.get('player') || !mediaDispatcherByParam) { item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
            "shareWhatsapp": function (url) { window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
            "getPixels": function (value) { var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch (unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
            "getPlayListItemByMedia": function (playList, media) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media) return item; } return undefined; },
            "setMapLocation": function (panoramaPlayListItem, mapPlayer) { var resetFunction = function () { panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
            "getMediaHeight": function (media) { switch (media.get('class')) { case 'Video360': var res = media.get('video'); if (res instanceof Array) { var maxH = 0; for (var i = 0; i < res.length; i++) { var r = res[i]; if (r.get('height') > maxH) maxH = r.get('height'); } return maxH; } else { return r.get('height') } default: return media.get('height'); } },
            "changePlayListWithSameSpot": function (playList, newIndex) { var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
            "visibleComponentsIfPlayerFlagEnabled": function (components, playerFlag) { var enabled = this.get(playerFlag); for (var i in components) { components[i].set('visible', enabled); } },
            "changeBackgroundWhilePlay": function (playList, index, color) { var stopFunction = function (event) { playListItem.unbind('stop', stopFunction, this); if ((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))) { viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if ((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)) { viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
            "playGlobalAudio": function (audio, endCallback) { var endFunction = function () { audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if (endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if (!audios) { audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if (audio.get('state') == 'playing') { return audio; } if (!audio.get('loop')) { audio.bind('end', endFunction, this); } audio.play(); return audio; },
            "setCameraSameSpotAsMedia": function (camera, media) { var player = this.getCurrentPlayerWithMedia(media); if (player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
            "setComponentVisibility": function (component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout) { var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if (keepVisibility) return; this.unregisterKey('visibility_' + component.get('id')); var changeVisibility = function () { if (effect && propertyEffect) { component.set(propertyEffect, effect); } component.set('visible', visible); if (component.get('class') == 'ViewerArea') { try { if (visible) component.restart(); else if (component.get('playbackState') == 'playing') component.pause(); } catch (e) { }; } }; var effectTimeoutName = 'effectTimeout_' + component.get('id'); if (!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)) { var effectTimeout = window[effectTimeoutName]; if (effectTimeout instanceof Array) { for (var i = 0; i < effectTimeout.length; i++) { clearTimeout(effectTimeout[i]) } } else { clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if (visible == component.get('visible') && !ignoreClearTimeout) return; if (applyAt && applyAt > 0) { var effectTimeout = setTimeout(function () { if (window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if (arrayTimeoutVal.length == 0) { delete window[effectTimeoutName]; } } else { delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if (window.hasOwnProperty(effectTimeoutName)) { window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; } else { window[effectTimeoutName] = effectTimeout; } } else { changeVisibility(); } },
            "getCurrentPlayerWithMedia": function (media) { var playerClass = undefined; var mediaPropertyName = undefined; switch (media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if (playerClass != undefined) { var players = this.getByClassName(playerClass); for (var i = 0; i < players.length; ++i) { var player = players[i]; if (player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
            "init": function () { if (!Object.hasOwnProperty('values')) { Object.values = function (o) { return Object.keys(o).map(function (e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function (e) { var playList = e.source; var index = playList.get('selectedIndex'); if (index < 0) return; var id = playList.get('id'); if (!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
            "setStartTimeVideo": function (video, time) { var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function () { for (var i = 0; i < items.length; ++i) { var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for (var i = 0; i < items.length; ++i) { var item = items[i]; var player = item.get('player'); if (player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
            "historyGoBack": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.back(); } },
            "getOverlays": function (media) { switch (media.get('class')) { case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for (var j = 0; j < frames.length; ++j) { overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
            "updateMediaLabelFromPlayList": function (playList, htmlText, playListItemStopToDispose) { var changeFunction = function () { var index = playList.get('selectedIndex'); if (index >= 0) { var beginFunction = function () { playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function (index) { var media = playListItem.get('media'); var text = media.get('data'); if (!text) text = media.get('label'); setHtml(text); }; var setHtml = function (text) { if (text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if (htmlText.get('html')) { setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else { setMediaLabel(index); } } }; var disposeFunction = function () { htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if (playListItemStopToDispose) { playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
            "setStartTimeVideoSync": function (video, player) { this.setStartTimeVideo(video, player.get('currentTime')); },
            "shareFacebook": function (url) { window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
            "playAudioList": function (audios) { if (audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function () { if (++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
            "cloneCamera": function (camera) { var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
            "showPopupMedia": function (w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios) { var self = this; var closeFunction = function () { playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if (stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if (isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function () { w.hide(); }; var resizeFunction = function () { var getWinValue = function (property) { return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if (!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if (parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if (windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if (windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if (autoCloseWhenFinished) { this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if (isVideo) { this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if (stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
            "getPanoramaOverlayByName": function (panorama, name) { var overlays = this.getOverlays(panorama); for (var i = 0, count = overlays.length; i < count; ++i) { var overlay = overlays[i]; var data = overlay.get('data'); if (data != undefined && data.label == name) { return overlay; } } return undefined; },
            "setEndToItemIndex": function (playList, fromIndex, toIndex) { var endFunction = function () { if (playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
            "getCurrentPlayers": function () { var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
            "existsKey": function (key) { return key in window; },
            "pauseGlobalAudios": function (caller, exclude) { if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i < count; ++i) { var objAudios = values[i]; for (var j = 0; j < objAudios.length; ++j) { var a = objAudios[j]; if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
            "startPanoramaWithCamera": function (media, camera) { if (window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1) { return; } var playLists = this.getByClassName('PlayList'); if (playLists.length == 0) return; var restoreItems = []; for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { var item = items[j]; if (item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')) { restoreItems.push({ camera: item.get('camera'), item: item }); item.set('camera', camera); } } } if (restoreItems.length > 0) { if (window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function () { var index = window.currentPanoramasWithCameraChanged.indexOf(media); if (index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
            "historyGoForward": function (playList) { var history = this.get('data')['history'][playList.get('id')]; if (history != undefined) { history.forward(); } },
            "pauseGlobalAudiosWhilePlayItem": function (playList, index, exclude) { var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function () { if (playList.get('selectedIndex') != index) { if (hasState) { player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function (event) { var state = event.data.state; if (state == 'stopped') { this.resumeGlobalAudios(caller); } else if (state == 'playing') { this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if (hasState) { player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
            "showPopupPanoramaVideoOverlay": function (popupPanoramaOverlay, closeButtonProperties, stopAudios) { var self = this; var showEndFunction = function () { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function () { if (!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function () { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if (stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function () { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if (closeButtonProperties) { for (var key in closeButtonProperties) { closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if (stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
            "showPopupPanoramaOverlay": function (popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio) { var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if (!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function () { var loadedFunction = function () { if (!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function () { var restoreShowDurationFunction = function () { popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if (popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if (!imageHD) { imageHD = popupPanoramaOverlay.get('image'); } if (!toggleImageHD && toggleImage) { toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function () { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if (audio) { if (stopBackgroundAudio) { this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
            "syncPlaylists": function (playLists) { var changeToMedia = function (media, playListDispatched) { for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (playList != playListDispatched) { var items = playList.get('items'); for (var j = 0, countJ = items.length; j < countJ; ++j) { if (items[j].get('media') == media) { if (playList.get('selectedIndex') != j) { playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function (event) { var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if (selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function (event) { var panoramaMapLocation = event.source.get('panoramaMapLocation'); if (panoramaMapLocation) { var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for (var i = 0, count = playLists.length; i < count; ++i) { playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for (var i = 0, count = mapPlayers.length; i < count; ++i) { mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
            "playGlobalAudioWhilePlay": function (playList, index, audio, endCallback) { var changeFunction = function (event) { if (event.data.previousSelectedIndex == index) { this.stopGlobalAudio(audio); if (isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if (endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if (audios && audio.get('id') in audios) { audio = audios[audio.get('id')]; if (audio.get('state') != 'playing') { audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if (isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if (audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for (var i = 0; i < stateChangeFunctions.length; ++i) { var f = stateChangeFunctions[i]; if (typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
            "loadFromCurrentMediaPlayList": function (playList, delta) { var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while (newIndex < 0) { newIndex = totalItems + newIndex; }; if (currentIndex != newIndex) { playList.set('selectedIndex', newIndex); } },
            "getPlayListWithMedia": function (media, onlySelected) { var playLists = this.getByClassName('PlayList'); for (var i = 0, count = playLists.length; i < count; ++i) { var playList = playLists[i]; if (onlySelected && playList.get('selectedIndex') == -1) continue; if (this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
            "pauseCurrentPlayers": function (onlyPauseCameraIfPanorama) { var players = this.getCurrentPlayers(); var i = players.length; while (i-- > 0) { var player = players[i]; if (player.get('state') == 'playing') { if (onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined') { player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
            "triggerOverlay": function (overlay, eventName) { if (overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for (var i = 0; i < areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
            "unregisterKey": function (key) { delete window[key]; },
            "pauseGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios) { audio = audios[audio.get('id')]; } if (audio.get('state') == 'playing') audio.pause(); },
            "showWindow": function (w, autoCloseMilliSeconds, containsAudio) { if (w.get('visible') == true) { return; } var closeFunction = function () { clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function () { w.unbind('click', clearAutoClose, this); if (timeoutID != undefined) { clearTimeout(timeoutID); } }; var timeoutID = undefined; if (autoCloseMilliSeconds) { var autoCloseFunction = function () { w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
            "getGlobalAudio": function (audio) { var audios = window.currentGlobalAudios; if (audios != undefined && audio.get('id') in audios) { audio = audios[audio.get('id')]; } return audio; },
            "setOverlayBehaviour": function (overlay, media, action) { var executeFunc = function () { switch (action) { case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if (overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if (window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function () { delete window.overlaysDispatched[id]; }, 2000); }; if (window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if (playList != undefined) { var item = this.getPlayListItemByMedia(playList, media); if (playList.get('items').indexOf(item) != playList.get('selectedIndex')) { var beginFunc = function (e) { item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
            "initGA": function () { var sendFunc = function (category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for (var i = 0, countI = media.length; i < countI; ++i) { var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for (var j = 0, countJ = overlays.length; j < countJ; ++j) { var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch (overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z < areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for (var i = 0, countI = components.length; i < countI; ++i) { var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for (var i = 0, countI = items.length; i < countI; ++i) { var item = items[i]; var media = item.get('media'); if (!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
            "getMediaByName": function (name) { var list = this.getByClassName('Media'); for (var i = 0, count = list.length; i < count; ++i) { var media = list[i]; if ((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name) { return media; } } return undefined; },
            "registerKey": function (key, value) { window[key] = value; },
            "showComponentsWhileMouseOver": function (parentComponent, components, durationVisibleWhileOut) { var setVisibility = function (visible) { for (var i = 0, length = components.length; i < length; i++) { var component = components[i]; if (component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true) { setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function () { setVisibility(true); if (timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function () { var timeoutFunction = function () { setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
            "loopAlbum": function (playList, index) { var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function () { player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
            "fixTogglePlayPauseButton": function (player) { var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if (typeof buttons !== 'undefined' && player.get('state') == 'playing') { if (!Array.isArray(buttons)) buttons = [buttons]; for (var i = 0; i < buttons.length; ++i) buttons[i].set('pressed', true); } },
            "shareTwitter": function (url) { window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
            "stopAndGoCamera": function (camera, ms) { var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function () { sequence.play(); }; setTimeout(timeoutFunction, ms); },
            "getKey": function (key) { return window[key]; }
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "paddingRight": 0,
        "downloadEnabled": false,
        "paddingLeft": 0,
        "verticalAlign": "top",
        "height": "100%",
        "paddingTop": 0,
        "class": "Player",
        "borderRadius": 0,
        "gap": 10,
        "paddingBottom": 0,
        "mouseWheelEnabled": true,
        "scrollBarWidth": 10,
        "propagateClick": false,
        "overflow": "visible",
        "desktopMipmappingEnabled": false
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
