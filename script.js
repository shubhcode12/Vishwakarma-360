(function(){
    var script = {
 "start": "this.playAudioList([this.audio_5CCB82CC_7728_4E99_41DB_816B009149EF]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Image_976C9FCB_811B_1A29_41C6_A09CA5AF4EE5",
  "this.IconButton_8B078EF5_8574_6579_41D0_599C93A02706",
  "this.Label_96D4315D_856D_BCA9_41D6_AC2F4BD3BE0E",
  "this.Container_93F90694_85AC_65BF_41D2_554F192EF5F0",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "propagateClick": true,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_camera",
 "timeToIdle": 5000
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "R0010254_20211130170316",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "R0010255_20211130170538",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "R0010256_20211130171116",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "R0010258_20211130171424",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "R0010259_20211130172046",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "R0010262_20211130173119",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "R0010263_20211130173234",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "R0010264_20211130173412",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "R0010265_20211130173632",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "R0010266_20211130173737",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "R0010267_20211130174034",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "R0010268_20211130174206",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "R0010269_20211130174318",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "R0010270_20211130175458",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "R0010271_20211130175609",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "R0010272_20211130175901",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "R0010273_20211130180140",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020",
 "opacity": 0.4
},
{
 "items": [
  {
   "media": "this.video_69820AD4_7739_BFEF_41D4_784286D13B4D",
   "start": "this.viewer_uid9176AFDC_85AD_E355_41D1_5C26309223EDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96410B08_8596_6CBD_41CE_40306BFD7D02, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96410B08_8596_6CBD_41CE_40306BFD7D02, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9176AFDC_85AD_E355_41D1_5C26309223EDVideoPlayer)",
   "player": "this.viewer_uid9176AFDC_85AD_E355_41D1_5C26309223EDVideoPlayer"
  }
 ],
 "id": "PlayList_96410B08_8596_6CBD_41CE_40306BFD7D02",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_camera"
  },
  {
   "media": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_camera"
  },
  {
   "media": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_camera"
  },
  {
   "media": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_camera"
  },
  {
   "media": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_camera"
  },
  {
   "media": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_camera"
  },
  {
   "media": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_camera"
  },
  {
   "media": "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_camera"
  },
  {
   "media": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_camera"
  },
  {
   "media": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_camera"
  },
  {
   "media": "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_camera"
  },
  {
   "media": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_camera"
  },
  {
   "media": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_camera"
  },
  {
   "media": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_camera"
  },
  {
   "media": "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_camera"
  },
  {
   "media": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_camera"
  },
  {
   "media": "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_camera"
  },
  {
   "media": "this.video_69820AD4_7739_BFEF_41D4_784286D13B4D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_8AB065D6_8575_A7BB_41D2_55399895E472",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedBorderSize": 0,
 "backgroundColorRatios": [],
 "id": "window_8F4E9F0E_8592_A4B5_41AD_83D14FD7F862",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "class": "Window",
 "closeButtonPaddingTop": 5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "modal": true,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "verticalAlign": "middle",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingBottom": 0,
 "backgroundColor": [],
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#666666",
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
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
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "headerPaddingLeft": 10,
 "children": [
  "this.viewer_uid9176AFDC_85AD_E355_41D1_5C26309223ED"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "closeButtonIconHeight": 20,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "closeButtonPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "gap": 10,
 "closeButtonPressedBorderColor": "#000000",
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.5,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconLineWidth": 5,
 "borderRadius": 5,
 "data": {
  "name": "Window590"
 },
 "shadowHorizontalLength": 3,
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "titlePaddingTop": 5,
 "closeButtonIconWidth": 20,
 "scrollBarWidth": 10
},
{
 "duration": 500,
 "id": "effect_6BD0CE13_7C38_ADE8_41CB_5B379B726F6A",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_969960AC_85AD_9DF5_41D2_6922A21CC132",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_969960AC_85AD_9DF5_41D2_6922A21CC132",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_969940AC_85AD_9DF5_41D4_47B6ABB94DA8",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_968CA08A_85AD_9DBD_41D8_99B1A66EC5B4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_968CA08A_85AD_9DBD_41D8_99B1A66EC5B4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_968C908A_85AD_9DBD_41CB_65417048E3A3",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_966851A4_85AD_9FF5_41C3_BD478A209756",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_966851A4_85AD_9FF5_41C3_BD478A209756",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_966BB1A4_85AD_9FF5_41AC_97CBF4CCEBA6",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_91EBF259_85AD_9D5F_41A2_4937ACAA74FF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91EBF259_85AD_9D5F_41A2_4937ACAA74FF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91EBE259_85AD_9D5F_41D1_8CF1D567EF9E",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_camera",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_675430FE_7C58_F61B_41D6_9349DD8A1B2C",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_9168D2ED_85AD_9D77_41E0_289B5B144D1E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9168D2ED_85AD_9D77_41E0_289B5B144D1E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9168C2ED_85AD_9D77_41C4_87971B3ED2C6",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_9186E228_85AD_9CFD_41BB_1E4F9AE5A741",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9186E228_85AD_9CFD_41BB_1E4F9AE5A741",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 131.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9186C228_85AD_9CFD_41B0_C4A589234810",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_91BAE217_85AD_9CD3_41B2_280C4ACF4997",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91BAE217_85AD_9CD3_41B2_280C4ACF4997",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91BAD217_85AD_9CD3_41DF_15B83530542E",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_964221C5_85AD_9FB7_41C9_335249645978",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_964221C5_85AD_9FB7_41C9_335249645978",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_964201C5_85AD_9FB7_41D1_DA178516D120",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_96319151_85AD_9CAF_41A6_C4B35706E966",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96319151_85AD_9CAF_41A6_C4B35706E966",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96318151_85AD_9CAF_41AD_D51D072AEAD7",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6D5875D0_7E99_3B95_41C5_7185FD48CD59",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_camera",
 "timeToIdle": 5000
},
{
 "rotationY": 0,
 "yaw": 89.87,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.86,
 "autoplay": true,
 "id": "popup_690268D9_7737_BB88_41D1_EABA876FB23F",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "75%",
 "class": "PopupPanoramaOverlay",
 "pitch": -20.94,
 "popupMaxWidth": "75%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_69820AD4_7739_BFEF_41D4_784286D13B4D.mp4"
 }
},
{
 "idleSequence": "this.sequence_919EB249_85AD_9CBF_41C0_FADC782501E6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_919EB249_85AD_9CBF_41C0_FADC782501E6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_919EA249_85AD_9CBF_41D4_B7820EE5CF19",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_65BCE016_7C79_D5E8_41D4_45DF1C95BCB5",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_962B5141_85AD_9CAF_41D0_96825A5F6364",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_962B5141_85AD_9CAF_41D0_96825A5F6364",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_962B4141_85AD_9CAF_41CD_9D6E26B4B9D3",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_96C9C10F_85AD_9CB3_41DE_4BEBC3251331",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96C9C10F_85AD_9CB3_41DE_4BEBC3251331",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -22.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96C9310F_85AD_9CB3_41BD_6951273ECFFD",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6B603775_7C38_BA29_41CE_C61E4965709B",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_9688F079_85AD_9D5F_41A6_55D3A0A06ECA",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9688F079_85AD_9D5F_41A6_55D3A0A06ECA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9688E079_85AD_9D5F_41DF_365BFBB942C4",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": -157.17,
   "backwardYaw": -157.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "distance": 1
  },
  {
   "yaw": -87.07,
   "backwardYaw": -101.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "distance": 1
  },
  {
   "yaw": 120.68,
   "backwardYaw": -148.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "distance": 1
  },
  {
   "yaw": -1.66,
   "backwardYaw": 174.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
 "thumbnailUrl": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_t.jpg",
 "label": "R0010259_20211130172046",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_tcap0",
  "this.overlay_64156DC0_76E9_D493_41BB_D568AEEDEFE0",
  "this.overlay_6443B133_76E8_CDF1_41B3_D741D91D414E",
  "this.overlay_51587E99_7729_D6AF_41B0_CE678B3947FC",
  "this.overlay_50084ABA_7728_5EEA_41D0_65F55EB51F8B",
  "this.overlay_785D8FF4_775C_C733_41D9_8A4D760471BD",
  "this.overlay_7992B216_7763_38FE_41DA_8CD7A9A02D4D"
 ]
},
{
 "duration": 500,
 "id": "effect_6564BB2A_7C68_EA38_4193_A30AA5FFBEFC",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_9697009B_85AD_9DD3_41D8_B0D80B359D8F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9697009B_85AD_9DD3_41D8_B0D80B359D8F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9697709B_85AD_9DD3_41D5_1E3BEDF6290C",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_9611A183_85AD_9FB3_419A_B1DFBBB5E60F",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9611A183_85AD_9FB3_419A_B1DFBBB5E60F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -91.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96119183_85AD_9FB3_41DF_FF0CE6162D70",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_65765E1A_7C68_AA18_41D0_8BDB857E66BF",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "label": "Vishawakarma Final High",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_8AB065D6_8575_A7BB_41D2_55399895E472_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_8AB065D6_8575_A7BB_41D2_55399895E472",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_8AB065D6_8575_A7BB_41D2_55399895E472.mp4"
 }
},
{
 "idleSequence": "this.sequence_91AC0207_85AD_9CB3_41CB_BBC3EE99D7F9",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91AC0207_85AD_9CB3_41CB_BBC3EE99D7F9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91AC7207_85AD_9CB3_41BE_F6EFFD7F1203",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_camera",
 "timeToIdle": 5000
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_5CCB82CC_7728_4E99_41DB_816B009149EF.mp3",
  "oggUrl": "media/audio_5CCB82CC_7728_4E99_41DB_816B009149EF.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_5CCB82CC_7728_4E99_41DB_816B009149EF",
 "data": {
  "label": "Corporate-Soft"
 }
},
{
 "idleSequence": "this.sequence_918D1238_85AD_9CDD_41D2_B76CD6B76626",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_918D1238_85AD_9CDD_41D2_B76CD6B76626",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_918D0238_85AD_9CDD_41C6_DA682E97DABA",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": -176.33,
   "backwardYaw": -89.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308",
 "thumbnailUrl": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_t.jpg",
 "label": "R0010264_20211130173412",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_tcap0",
  "this.overlay_6EF4CD8B_76E8_F50C_41D8_09EFF48D343F"
 ]
},
{
 "duration": 500,
 "id": "effect_6616DB90_7C69_6AE8_41D2_E237147BDE26",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "media": "this.video_69820AD4_7739_BFEF_41D4_784286D13B4D",
   "start": "this.viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_96419B08_8596_6CBD_41BA_8CFA80407F14, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_96419B08_8596_6CBD_41BA_8CFA80407F14, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6DVideoPlayer)",
   "player": "this.viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6DVideoPlayer"
  }
 ],
 "id": "PlayList_96419B08_8596_6CBD_41BA_8CFA80407F14",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 3.36,
   "backwardYaw": -164.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0",
   "distance": 1
  },
  {
   "yaw": 147.06,
   "backwardYaw": -48.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "distance": 1
  },
  {
   "yaw": -157.17,
   "backwardYaw": -157.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "distance": 1
  },
  {
   "yaw": -108.68,
   "backwardYaw": 172.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "distance": 1
  },
  {
   "yaw": -170.23,
   "backwardYaw": -172.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
 "thumbnailUrl": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_t.jpg",
 "label": "R0010258_20211130171424",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_tcap0",
  "this.overlay_64BAF8FD_76EB_DC66_41CA_A8EE4C1CBFB9",
  "this.overlay_65328F5E_76E8_B5A6_41D8_A66A1C714622",
  "this.overlay_60DA91CC_76FF_CCE7_41D2_C6B3B1FD0A9C",
  "this.overlay_61AD4059_76F8_4BED_41D7_E4C272C9F80F",
  "this.overlay_6B5F9675_7728_7689_41C8_95BCD8425978",
  "this.overlay_784BB5C7_775D_5B5D_41A6_C4BD25785E14"
 ]
},
{
 "idleSequence": "this.sequence_96E0B0BC_85AD_9DD5_41B9_1ABC41BB9BFF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96E0B0BC_85AD_9DD5_41B9_1ABC41BB9BFF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -32.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96E0A0BC_85AD_9DD5_41E0_87B143BDDF98",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6BC90C3F_7C28_EE19_41DB_BB3FE6A8D517",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_917AA2FE_85AD_9D55_41D6_5E9A9083F7D0",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_917AA2FE_85AD_9D55_41D6_5E9A9083F7D0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_917A92FE_85AD_9D55_41CC_87F3031406EA",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_96F350DD_85AD_9D57_41A4_2E02A52639CF",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96F350DD_85AD_9D57_41A4_2E02A52639CF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96F340DD_85AD_9D57_41C5_B2A03CC4352A",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_64B550A2_7C59_7628_4191_391BE20F1F69",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_6B0723E0_7C29_5A28_41DB_4A2340E5556F",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_6BC48CE8_7C28_AE38_4166_C3AAE400B306",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedBorderSize": 0,
 "backgroundColorRatios": [],
 "id": "window_8F4EEF0E_8592_A4B5_41D0_76398EE60F95",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "class": "Window",
 "closeButtonPaddingTop": 5,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "modal": true,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "verticalAlign": "middle",
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingBottom": 0,
 "backgroundColor": [],
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonBorderColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#666666",
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
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
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "headerPaddingLeft": 10,
 "children": [
  "this.viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6D"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "closeButtonIconHeight": 20,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "closeButtonPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "gap": 10,
 "closeButtonPressedBorderColor": "#000000",
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.5,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconLineWidth": 5,
 "borderRadius": 5,
 "data": {
  "name": "Window591"
 },
 "shadowHorizontalLength": 3,
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "titlePaddingTop": 5,
 "closeButtonIconWidth": 20,
 "scrollBarWidth": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.16,
   "backwardYaw": 179.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "audios": [
  "this.audio_9946EFBD_8125_3A69_41D8_E34B0625D6A0"
 ],
 "id": "panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784",
 "thumbnailUrl": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_t.jpg",
 "label": "R0010254_20211130170316",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0",
  "this.overlay_66D482E4_76E9_CC69_41AC_929C70E4BD30"
 ]
},
{
 "idleSequence": "this.sequence_915AF32B_85AD_9CF3_41D7_C90B4EA2DBD3",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_915AF32B_85AD_9CF3_41D7_C90B4EA2DBD3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 31.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_915AD32B_85AD_9CF3_41D3_EF1D7DFB85DC",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_963FA162_85AD_9F6D_41D7_3A424A5F1FD0",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_963FA162_85AD_9F6D_41D7_3A424A5F1FD0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_963F9162_85AD_9F6D_41B9_406FE1AA84AF",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_666E8038_7C79_7618_41D5_272DEFE58BA6",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_64D378E8_7C38_B638_41B1_3E92CD4FC393",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_96873068_85AD_9D7D_41C6_A618262FD6DD",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96873068_85AD_9D7D_41C6_A618262FD6DD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96872068_85AD_9D7D_41CB_37507CC351CB",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.78,
   "backwardYaw": -8.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787",
 "thumbnailUrl": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_t.jpg",
 "label": "R0010267_20211130174034",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_tcap0",
  "this.overlay_6DFAF5F5_7729_D579_41DC_C2CA36E4F82C"
 ]
},
{
 "idleSequence": "this.sequence_91A001F6_85AD_9F55_41D5_325FA4D9852B",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91A001F6_85AD_9F55_41D5_325FA4D9852B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91A071F6_85AD_9F55_41D3_F54C85DDB8B5",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_964E71D5_85AD_9F57_41DA_1E6C9D5DD1A5",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_964E71D5_85AD_9F57_41DA_1E6C9D5DD1A5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_964E61D5_85AD_9F57_41B0_2CAA67D48926",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_965431E6_85AD_9F75_41DA_E6AEF9C9BB35",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_965431E6_85AD_9F75_41DA_E6AEF9C9BB35",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_965421E6_85AD_9F75_41B5_B8B7831F2CB2",
 "timeToIdle": 5000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "65%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.12,
 "hideDuration": 500,
 "yaw": -29.12,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.31,
 "popupMaxHeight": "65%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "yaw": -89.54,
   "backwardYaw": -176.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308",
   "distance": 1
  },
  {
   "yaw": 0.91,
   "backwardYaw": -177.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "distance": 1
  },
  {
   "yaw": 1.02,
   "backwardYaw": -177.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "distance": 1
  },
  {
   "yaw": -176.27,
   "backwardYaw": 1.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "distance": 1
  },
  {
   "yaw": 88.96,
   "backwardYaw": -174.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
 "thumbnailUrl": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_t.jpg",
 "label": "R0010263_20211130173234",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_tcap0",
  "this.overlay_601040DC_76F8_4CC2_41A6_C9ADEE3256BC",
  "this.overlay_601F0EF9_76E8_54D3_41C0_72C4E50BE483",
  "this.overlay_615B7994_76E8_DD55_41DB_CE809DFCC009",
  "this.overlay_6EA9BF8C_76E8_5514_41D3_2B0A76A90DB3",
  "this.overlay_6E1786FE_76EF_D4F6_41DB_5B29E6D727F6",
  "this.overlay_6E7F0F55_76E8_5502_4174_DCEDC23D603C",
  "this.overlay_6FBBED9D_76E9_B503_4189_41E1BBD4BC4B",
  "this.overlay_613ADCA0_7765_49C6_41D7_4CC1DA9A2A2D",
  "this.overlay_9013A108_812B_2617_41D0_17B7757E93CE",
  "this.overlay_93099F76_8125_1AFB_41D3_8F641443F9C1"
 ]
},
{
 "duration": 500,
 "id": "effect_64551AE3_7C59_AA28_41CE_EA83D7EA8FB8",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_913C22BC_85AD_9DD5_41CA_15E5F9F37829",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_913C22BC_85AD_9DD5_41CA_15E5F9F37829",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_913C12BC_85AD_9DD5_41C4_5EB085E32965",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": 147.3,
   "backwardYaw": 53.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31",
 "thumbnailUrl": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_t.jpg",
 "label": "R0010271_20211130175609",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_tcap0",
  "this.overlay_6B0564BB_772F_CBF2_41D8_B29DF5557C47",
  "this.overlay_6B8DAA66_7728_BE97_41B4_99830FEA911B"
 ]
},
{
 "idleSequence": "this.sequence_914A830E_85AD_9CB5_41B6_2CFE7846AA3E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_914A830E_85AD_9CB5_41B6_2CFE7846AA3E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_914AE30E_85AD_9CB5_41CB_FA6CCDBD80C2",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_65F56B02_7C78_ABE8_41D0_342ADED06048",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "label": "VID20211130180342",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_69820AD4_7739_BFEF_41D4_784286D13B4D_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_69820AD4_7739_BFEF_41D4_784286D13B4D",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_69820AD4_7739_BFEF_41D4_784286D13B4D.mp4"
 }
},
{
 "duration": 500,
 "id": "effect_64122731_7C39_5A28_41D3_01278709A564",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_91F5E26A_85AD_9D7D_41C6_626266007677",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91F5E26A_85AD_9D7D_41C6_626266007677",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -126.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91F5D26A_85AD_9D7D_41DF_4D2ED38284DA",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": 53.6,
   "backwardYaw": 147.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31",
   "distance": 1
  },
  {
   "yaw": -174.5,
   "backwardYaw": 88.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8",
 "thumbnailUrl": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_t.jpg",
 "label": "R0010270_20211130175458",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_tcap0",
  "this.overlay_6E7237D9_76E8_5509_41DA_38EE6F7E2428",
  "this.overlay_6C81F5A7_7728_F59E_41D0_43DC142BFB99",
  "this.overlay_508258E4_7728_FA9D_41D8_539F77141C55",
  "this.popup_5054F6BF_7728_76EC_41DC_A33D87149F7C",
  "this.overlay_51B2CAF9_7738_DE72_41AD_9147BF50C5E7",
  "this.popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368"
 ]
},
{
 "idleSequence": "this.sequence_96F5C0EE_85AD_9D75_41A2_CEFDCD2F364A",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96F5C0EE_85AD_9D75_41A2_CEFDCD2F364A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -81.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96F520EE_85AD_9D75_41E0_54ECB19FD926",
 "timeToIdle": 5000
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [],
 "id": "window_92601705_813F_6A19_41A7_7E555A935ECE",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "class": "Window",
 "paddingLeft": 0,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "width": 400,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "modal": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "height": 600,
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingBottom": 5,
 "title": "Jaquar Washbasin",
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowSpread": 1,
 "veilColorDirection": "horizontal",
 "titlePaddingRight": 5,
 "backgroundOpacity": 1,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonBackgroundColor": [],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "propagateClick": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "headerPaddingRight": 10,
 "veilOpacity": 0.4,
 "headerPaddingLeft": 10,
 "children": [
  "this.htmlText_92662705_813F_6A19_41D7_3A2F0178087A",
  "this.image_uid916E2FD5_85AD_E357_41C0_6A43142B3D88_1"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonIconHeight": 12,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Roboto",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 10,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "closeButtonIconColor": "#000000",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bodyBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "gap": 10,
 "titleTextDecoration": "none",
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadowOpacity": 0.5,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingLeft": 5,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 3,
 "closeButtonIconLineWidth": 2,
 "borderRadius": 5,
 "data": {
  "name": "Window7210"
 },
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "titlePaddingTop": 5,
 "closeButtonIconWidth": 12,
 "scrollBarWidth": 10
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_camera",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6E62F096_7BE8_F6E8_41D6_CE45F783527A",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 174.27,
   "backwardYaw": -115.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "distance": 1
  },
  {
   "yaw": 98.19,
   "backwardYaw": 176.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3",
   "distance": 1
  },
  {
   "yaw": 97.64,
   "backwardYaw": 176.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A",
 "thumbnailUrl": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_t.jpg",
 "label": "R0010268_20211130174206",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_tcap0",
  "this.overlay_6FE3AADC_76D8_5F75_41C9_1E31A5434217",
  "this.overlay_6F6B8117_76D8_CAC9_41DC_261C28647709",
  "this.overlay_6F103FFA_76D8_553A_41D6_8FDBD274CEFC",
  "this.overlay_627A4CE8_7763_4959_41DD_0DA22ADB6159"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_camera"
  },
  {
   "media": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_camera"
  },
  {
   "media": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_camera"
  },
  {
   "media": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_camera"
  },
  {
   "media": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_camera"
  },
  {
   "media": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_camera"
  },
  {
   "media": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_camera"
  },
  {
   "media": "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_camera"
  },
  {
   "media": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_camera"
  },
  {
   "media": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_camera"
  },
  {
   "media": "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_camera"
  },
  {
   "media": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_camera"
  },
  {
   "media": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_camera"
  },
  {
   "media": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_camera"
  },
  {
   "media": "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_camera"
  },
  {
   "media": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_camera"
  },
  {
   "media": "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_camera"
  },
  {
   "media": "this.video_69820AD4_7739_BFEF_41D4_784286D13B4D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_8AB065D6_8575_A7BB_41D2_55399895E472",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 164.89,
   "backwardYaw": 101.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
   "distance": 1
  },
  {
   "yaw": -8.96,
   "backwardYaw": -178.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01",
 "thumbnailUrl": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_t.jpg",
 "label": "R0010266_20211130173737",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_tcap0",
  "this.overlay_6F050F41_76D8_56BA_41C7_828D690A28BF",
  "this.overlay_6DBFAAF2_76D8_FF58_41DB_9B300A282B18"
 ]
},
{
 "duration": 500,
 "id": "effect_64A18308_7C58_DBF8_41DA_B496823F797C",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_6775BEC0_7C69_AA68_41CD_30685C38FE93",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_64A3EE37_7C58_AA28_41DC_403DB115AE04",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "idleSequence": "this.sequence_961DF193_85AD_9FD3_416E_005562716C74",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_961DF193_85AD_9FD3_416E_005562716C74",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_961DE193_85AD_9FD3_41D8_89E428CCD7CB",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_camera",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_65394C8B_7C38_EEF8_41CD_FF83596BA10A",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_66A2F459_7C69_7E18_41CC_C2C75F643B55",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_96D6A120_85AD_9CED_41E0_411D8C5310AA",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96D6A120_85AD_9CED_41E0_411D8C5310AA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96D69120_85AD_9CED_41DA_B5965574EA90",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_641F5DE3_7C29_AE28_41D7_7E6AFD32D715",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonMoveRight": "this.IconButton_8B078EF5_8574_6579_41D0_599C93A02706",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 101.33,
   "backwardYaw": 164.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01",
   "distance": 1
  },
  {
   "yaw": -115.25,
   "backwardYaw": 174.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A",
   "distance": 1
  },
  {
   "yaw": -177.44,
   "backwardYaw": 0.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75",
 "thumbnailUrl": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_t.jpg",
 "label": "R0010265_20211130173632",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_tcap0",
  "this.overlay_6E7ACFB0_76EB_D519_41CD_DA583D71E0F6",
  "this.overlay_6E34E78F_76D8_B5E3_41D1_1D64A5822392",
  "this.overlay_6F5E964E_76DB_D766_41D6_002A9F673882",
  "this.overlay_6CF8D1A2_76D8_4DFD_41AE_E772BA66C875"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.16,
   "backwardYaw": 179.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "distance": 1
  },
  {
   "yaw": 179.72,
   "backwardYaw": -3.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC",
 "thumbnailUrl": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_t.jpg",
 "label": "R0010255_20211130170538",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_tcap0",
  "this.overlay_67E27168_76E8_4C79_41D9_13F31C624BF5",
  "this.overlay_67DDB202_76E8_4FA9_41CC_47EDBABF7631",
  "this.overlay_470B18B6_7728_5A8D_41C5_0ADF54CEE67D"
 ]
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_camera",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6B642D9E_7C29_6E18_41D6_DB0384C7988C",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_6E88B478_7BE8_DE18_41C9_1E674D1521CD",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_9123929B_85AD_9DD3_41BA_CCDE1949F3A6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9123929B_85AD_9DD3_41BA_CCDE1949F3A6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9123F29B_85AD_9DD3_41E0_18DD6516CA10",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6B99FC8B_7C29_6EF8_41D5_58291B434E59",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_91D6528B_85AD_9DB3_41BD_E69476D9736E",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91D6528B_85AD_9DB3_41BD_E69476D9736E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91D1B28B_85AD_9DB3_41DE_54ED6D579DD8",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_910FF2CD_85AD_9DB7_41D7_CF7BFD7DEE31",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_910FF2CD_85AD_9DB7_41D7_CF7BFD7DEE31",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_910FE2CD_85AD_9DB7_41B3_A73B2C9517D2",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_90A4A347_85AD_9CB3_41D1_322DC2E0A025",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_90A4A347_85AD_9CB3_41D1_322DC2E0A025",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_90A48346_85AD_9CB5_41D8_878C9508FAB0",
 "timeToIdle": 5000
},
{
 "id": "ImageResource_50252160_7738_4B90_41DB_0C012BF520BA",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_96FF629A_8125_EA2B_41D7_F1820E0B32DC",
 "class": "PanoramaAudio",
 "id": "audio_9946EFBD_8125_3A69_41D8_E34B0625D6A0",
 "data": {
  "label": "ttsMP3.com_VoiceText_2021-12-3_22_27_26"
 }
},
{
 "idleSequence": "this.sequence_913292AC_85AD_9DF5_41C5_C1FA0CC8F18C",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_913292AC_85AD_9DF5_41C5_C1FA0CC8F18C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_913282AC_85AD_9DF5_41DB_A0B15158D814",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_96C280FE_85AD_9D55_41DB_3783EBE16CA6",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96C280FE_85AD_9D55_41DB_3783EBE16CA6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96C2E0FE_85AD_9D55_41D7_2140DF2155A5",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6BC708A3_7C27_B628_41D7_06EB9CA2913A",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_91C7127B_85AD_9D53_41C0_5A968FDA9793",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_91C7127B_85AD_9D53_41C0_5A968FDA9793",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_91C7027A_85AD_9D5D_41B9_384CA8EA8768",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.video_8AB065D6_8575_A7BB_41D2_55399895E472",
   "start": "this.viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_960B4AD8_8596_6D5D_41B2_ED7DD9D4AC10, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_960B4AD8_8596_6D5D_41B2_ED7DD9D4AC10, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69VideoPlayer)",
   "player": "this.viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69VideoPlayer"
  }
 ],
 "id": "playList_960B4AD8_8596_6D5D_41B2_ED7DD9D4AC10",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_65B63E5A_7C67_AA18_41CD_0912507A1C6E",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_6B3957DE_7C39_7A1B_41B8_80C0EC23567B",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_96DDF130_85AD_9CED_419A_DBE311BDCFD4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96DDF130_85AD_9CED_419A_DBE311BDCFD4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96DDE130_85AD_9CED_41E0_10BD07F24FDB",
 "timeToIdle": 5000
},
{
 "rotationY": 0,
 "yaw": 91.33,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.61,
 "autoplay": true,
 "id": "popup_65D9A3BA_7C59_BA1B_41DC_55CCF191EA57",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "65%",
 "class": "PopupPanoramaOverlay",
 "pitch": -13.38,
 "popupMaxWidth": "65%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_69820AD4_7739_BFEF_41D4_784286D13B4D.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -172.98,
   "backwardYaw": -170.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "distance": 1
  },
  {
   "yaw": 174.21,
   "backwardYaw": -1.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "distance": 1
  },
  {
   "yaw": 157.63,
   "backwardYaw": -117.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
 "thumbnailUrl": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_t.jpg",
 "label": "R0010272_20211130175901",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_tcap0",
  "this.overlay_63094548_76F9_B5D2_41B4_031554C336EF",
  "this.overlay_61995AFB_76F8_FCB2_41B9_78EB43F4C216",
  "this.overlay_78CA1903_7765_48D7_41D6_27196E9D60AA",
  "this.overlay_6E82DD3D_7BD8_AE18_41A7_08B9F2D56FE9"
 ]
},
{
 "idleSequence": "this.sequence_967441B4_85AD_9FD5_41A0_43B7081DEEB4",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_967441B4_85AD_9FD5_41A0_43B7081DEEB4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9677B1B4_85AD_9FD5_41BE_E433F247C6B2",
 "timeToIdle": 5000
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.72,
   "backwardYaw": -3.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC",
   "distance": 1
  },
  {
   "yaw": -48.89,
   "backwardYaw": 147.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "distance": 1
  },
  {
   "yaw": -101.14,
   "backwardYaw": -87.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "distance": 1
  },
  {
   "yaw": -78.28,
   "backwardYaw": -162.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
 "thumbnailUrl": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_t.jpg",
 "label": "R0010256_20211130171116",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_tcap0",
  "this.overlay_6757BB7D_76E8_7C5E_41DB_6E4E6F92CA1C",
  "this.overlay_65C27F3D_76E8_D5E2_41B7_84C48AE746D6",
  "this.overlay_65C96373_76E8_4D8D_41AE_01272792CA81",
  "this.overlay_63823EC6_76F7_B48B_4180_94E21D6CE1FA",
  "this.overlay_62062408_76F8_4B82_41D9_3F5A264A163A",
  "this.overlay_7902D3B5_775C_FF3F_41CA_EC4235F179E8",
  "this.overlay_7A887121_775F_D8D4_41D6_859F68901A01"
 ]
},
{
 "idleSequence": "this.sequence_96EB00CD_85AD_9DB7_41DD_42F931515FF8",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_96EB00CD_85AD_9DB7_41DD_42F931515FF8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_96EB70CC_85AD_9DB6_41D6_4E991C946129",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_camera",
 "timeToIdle": 5000
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [],
 "id": "window_9546FBA4_856C_E39F_41B9_3B96E5F3C1EF",
 "bodyPaddingTop": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "class": "Window",
 "paddingLeft": 0,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBackgroundOpacity": 0,
 "width": 400,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "modal": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "height": 600,
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "minWidth": 20,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingBottom": 0,
 "closeButtonPressedIconLineWidth": 3,
 "title": "",
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowSpread": 1,
 "veilColorDirection": "horizontal",
 "titlePaddingRight": 5,
 "backgroundOpacity": 1,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundColor": [],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "propagateClick": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "headerPaddingLeft": 10,
 "children": [
  "this.viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonIconHeight": 20,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "closeButtonIconColor": "#B2B2B2",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bodyBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "headerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "gap": 10,
 "titleTextDecoration": "none",
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColor": [],
 "shadowOpacity": 0.5,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingLeft": 0,
 "headerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "shadowHorizontalLength": 3,
 "closeButtonIconLineWidth": 2,
 "borderRadius": 5,
 "data": {
  "name": "Window4653"
 },
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "titlePaddingTop": 5,
 "closeButtonIconWidth": 20,
 "scrollBarWidth": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "s-l1600",
 "id": "photo_930775C5_813F_2E19_4172_D56B4412C604",
 "thumbnailUrl": "media/photo_930775C5_813F_2E19_4172_D56B4412C604_t.jpg",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_930775C5_813F_2E19_4172_D56B4412C604.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 995
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75"
  },
  {
   "yaw": 172.41,
   "backwardYaw": -108.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "distance": 1
  },
  {
   "yaw": -117.94,
   "backwardYaw": 157.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C",
   "distance": 1
  },
  {
   "yaw": -162.69,
   "backwardYaw": -78.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49",
   "distance": 1
  },
  {
   "yaw": -148.88,
   "backwardYaw": 120.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC",
   "distance": 1
  },
  {
   "yaw": 1.59,
   "backwardYaw": -176.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34",
 "thumbnailUrl": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_t.jpg",
 "label": "R0010262_20211130173119",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_tcap0",
  "this.overlay_62434B31_76F9_BD9F_41BD_1A81E5992C0A",
  "this.overlay_60EF429F_76F8_CC88_41DC_CEB5B88E1A61",
  "this.overlay_633A8D2D_76FB_B58F_41DB_59470ABB7596",
  "this.overlay_61A821ED_76F8_4CDF_41D8_0CAB34A44472",
  "this.overlay_512AF88E_7728_DAA9_41D2_A41192B4DCDD",
  "this.overlay_62830736_7764_D8CB_4192_B9F0F2A48848",
  "this.overlay_62EFF2A8_7765_39C7_41B0_6414111D7118",
  "this.overlay_610E63F9_7765_3F46_41DD_5F41F7ED889D"
 ]
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_camera",
 "timeToIdle": 5000
},
{
 "idleSequence": "this.sequence_960BF172_85AD_9F6D_41D7_CD1C389D9A76",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_960BF172_85AD_9F6D_41D7_CD1C389D9A76",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -32.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_960BE172_85AD_9F6D_41C3_5667AC32E86F",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_6BCCED54_7C28_AE6F_41A0_63EC039FB73F",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "id": "ImageResource_5E1E7667_7738_499C_41C6_3736E466886A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5054F6BF_7728_76EC_41DC_A33D87149F7C_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_5054F6BF_7728_76EC_41DC_A33D87149F7C_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5054F6BF_7728_76EC_41DC_A33D87149F7C_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5054F6BF_7728_76EC_41DC_A33D87149F7C_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "duration": 500,
 "id": "effect_6515706A_7C6B_F60B_41C8_AB6A70914BA9",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_6BB02EBA_7C28_AA18_419D_5F5C2E6C1714",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_656510BB_7C29_D618_41D9_759DF33A72F6",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_6735A37C_7C78_BA1F_41CD_1A0D8DB9F35E",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 176.45,
   "backwardYaw": 98.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3",
 "thumbnailUrl": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_t.jpg",
 "label": "R0010269_20211130174318",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_tcap0",
  "this.overlay_6F82A3E7_76D9_CD4E_41C8_9BB276AB0656",
  "this.overlay_620C34E0_7764_F94A_41D5_9FE3E6C1FF18"
 ]
},
{
 "duration": 500,
 "id": "effect_6560C349_7C79_7A78_41D5_3E074EB8D380",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "idleSequence": "this.sequence_9119C2DD_85AD_9D57_41D6_9BF124AD06A9",
 "automaticZoomSpeed": 10,
 "initialSequence": "this.sequence_9119C2DD_85AD_9D57_41D6_9BF124AD06A9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_911932DD_85AD_9D57_41D1_01537385F2C3",
 "timeToIdle": 5000
},
{
 "adjacentPanoramas": [
  {
   "yaw": -164.7,
   "backwardYaw": 3.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0",
 "thumbnailUrl": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_t.jpg",
 "label": "R0010273_20211130180140",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_975CE02D_85AD_9CF7_41C3_B54E18AC3DC3",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_tcap0",
  "this.overlay_6BE90759_7728_5684_4192_477D06EA6C30",
  "this.overlay_69954FE4_7728_5584_41D3_413E81B62AFF",
  "this.popup_690268D9_7737_BB88_41D1_EABA876FB23F",
  "this.overlay_655DD7CC_7C58_FA7F_41D1_8B579C0D93C6",
  "this.overlay_65B9AF20_7C58_AA27_4194_B34FC219607F",
  "this.popup_65D9A3BA_7C59_BA1B_41DC_55CCF191EA57"
 ]
},
{
 "duration": 500,
 "id": "effect_648DF9AF_7C5F_D638_41D2_1BD01B0CCB6B",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "id": "effect_67ED3EF4_7C29_EA28_4188_A759D5D791C8",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_camera",
 "timeToIdle": 5000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "65%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.99,
 "hideDuration": 500,
 "yaw": -50,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_5054F6BF_7728_76EC_41DC_A33D87149F7C",
 "class": "PopupPanoramaOverlay",
 "pitch": -3.41,
 "popupMaxHeight": "65%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5054F6BF_7728_76EC_41DC_A33D87149F7C_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100
},
{
 "duration": 500,
 "id": "effect_6BE93A1F_7C28_AA18_41C1_F9CA65467E0E",
 "easing": "quad_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
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
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_camera",
 "timeToIdle": 5000
},
{
 "duration": 500,
 "id": "effect_66442561_7C59_BE28_41D9_9F7B3AEC01CF",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_66DFDBD7_7C69_EA68_41DB_8CB1C728F85C",
 "easing": "quad_in",
 "class": "FadeInEffect"
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "width": "100%",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "paddingTop": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
  "this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405",
  "this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B"
 ],
 "propagateClick": true,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "width": 550,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "top": 34,
 "horizontalAlign": "left",
 "height": 140,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "propagateClick": true,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "0%",
 "horizontalAlign": "left",
 "height": 641,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "propagateClick": false,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "propagateClick": false,
 "id": "Image_976C9FCB_811B_1A29_41C6_A09CA5AF4EE5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "2.59%",
 "url": "skin/Image_976C9FCB_811B_1A29_41C6_A09CA5AF4EE5.png",
 "width": "7.961%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "4.92%",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_93F90694_85AC_65BF_41D2_554F192EF5F0, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "8.743%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image13355"
 },
 "maxWidth": 132
},
{
 "cursor": "hand",
 "propagateClick": false,
 "id": "IconButton_8B078EF5_8574_6579_41D0_599C93A02706",
 "paddingRight": 0,
 "class": "IconButton",
 "right": "5.43%",
 "paddingLeft": 0,
 "transparencyActive": true,
 "width": 28,
 "borderSize": 0,
 "iconURL": "skin/IconButton_8B078EF5_8574_6579_41D0_599C93A02706.png",
 "minHeight": 0,
 "verticalAlign": "middle",
 "bottom": "16.17%",
 "minWidth": 0,
 "mode": "push",
 "click": "this.showPopupMedia(this.window_9546FBA4_856C_E39F_41B9_3B96E5F3C1EF, this.video_8AB065D6_8575_A7BB_41D2_55399895E472, this.playList_960B4AD8_8596_6D5D_41B2_ED7DD9D4AC10, '65%', '65%', false, true)",
 "horizontalAlign": "center",
 "height": 34,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_8B078EF5_8574_6579_41D0_599C93A02706_rollover.png",
 "data": {
  "name": "Button53068"
 },
 "pressedIconURL": "skin/IconButton_8B078EF5_8574_6579_41D0_599C93A02706_pressed.png"
},
{
 "fontFamily": "Arial",
 "propagateClick": false,
 "id": "Label_96D4315D_856D_BCA9_41D6_AC2F4BD3BE0E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "12.726%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "1.2%",
 "minWidth": 1,
 "fontSize": "1.47vmin",
 "click": "this.setComponentVisibility(this.Container_93F90694_85AC_65BF_41D2_554F192EF5F0, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "3.279%",
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "shadow": false,
 "text": "www.vishwakarmabuilders.com",
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "Label5521"
 },
 "fontWeight": "normal"
},
{
 "children": [
  "this.WebFrame_922800AA_85AC_9DEB_41D3_541C47E2497F",
  "this.Container_96256CBF_8596_65D2_41CB_50D1B1E04CAC"
 ],
 "propagateClick": false,
 "id": "Container_93F90694_85AC_65BF_41D2_554F192EF5F0",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "99.891%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "Container11856"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "UIComponent",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "UIComponent14069"
 }
},
{
 "backgroundColorRatios": [],
 "propagateClick": false,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "ZoomImage",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [],
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage14070"
 }
},
{
 "cursor": "hand",
 "fontFamily": "Arial",
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "paddingRight": 5,
 "class": "CloseButton",
 "right": 10,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 20,
 "borderSize": 0,
 "iconColor": "#000000",
 "minHeight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "top": 10,
 "fontSize": "1.29vmin",
 "label": "",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "paddingTop": 5,
 "shadowBlurRadius": 6,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "iconWidth": 20,
 "textDecoration": "none",
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "CloseButton14071"
 },
 "fontWeight": "normal",
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxWidth": 58
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxWidth": 58
},
{
 "viewerArea": "this.viewer_uid9176AFDC_85AD_E355_41D1_5C26309223ED",
 "id": "viewer_uid9176AFDC_85AD_E355_41D1_5C26309223EDVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid9176AFDC_85AD_E355_41D1_5C26309223ED",
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "width": "100%",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "shadow": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ViewerArea14067"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_969960AC_85AD_9DF5_41D2_6922A21CC132",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_968CA08A_85AD_9DBD_41D8_99B1A66EC5B4",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_966851A4_85AD_9FF5_41C3_BD478A209756",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91EBF259_85AD_9D5F_41A2_4937ACAA74FF",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9168D2ED_85AD_9D77_41E0_289B5B144D1E",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9186E228_85AD_9CFD_41BB_1E4F9AE5A741",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91BAE217_85AD_9CD3_41B2_280C4ACF4997",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_964221C5_85AD_9FB7_41C9_335249645978",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96319151_85AD_9CAF_41A6_C4B35706E966",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_919EB249_85AD_9CBF_41C0_FADC782501E6",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_962B5141_85AD_9CAF_41D0_96825A5F6364",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96C9C10F_85AD_9CB3_41DE_4BEBC3251331",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9688F079_85AD_9D5F_41A6_55D3A0A06ECA",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_61650C03_76F8_FB72_41DA_891141D6CB8D",
   "pitch": -30.98,
   "yaw": -157.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F, this.camera_917A92FE_85AD_9D55_41CC_87F3031406EA); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64156DC0_76E9_D493_41BB_D568AEEDEFE0",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -157.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.06,
   "image": "this.AnimatedImageResource_6165EC03_76F8_FB72_41CE_E4F4909AFFEC",
   "pitch": -28.47,
   "yaw": -87.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49, this.camera_914AE30E_85AD_9CB5_41CB_FA6CCDBD80C2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6443B133_76E8_CDF1_41B3_D741D91D414E",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.06,
   "yaw": -87.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.27,
   "image": "this.AnimatedImageResource_5ECA17CD_7728_F6A4_41C1_F34283FDC8D7",
   "pitch": -25.19,
   "yaw": -1.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C, this.camera_90A48346_85AD_9CB5_41D8_878C9508FAB0); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6B99FC8B_7C29_6EF8_41D5_58291B434E59, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_6B99FC8B_7C29_6EF8_41D5_58291B434E59, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_6B0723E0_7C29_5A28_41DB_4A2340E5556F, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_51587E99_7729_D6AF_41B0_CE678B3947FC",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.27,
   "yaw": -1.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.44,
   "image": "this.AnimatedImageResource_5E54C629_7738_4995_41D2_FE17E2B87D37",
   "pitch": -22.18,
   "yaw": 120.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34, this.camera_915AD32B_85AD_9CF3_41D3_EF1D7DFB85DC); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_50084ABA_7728_5EEA_41D0_65F55EB51F8B",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.44,
   "yaw": 120.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "KITCHEN"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_4_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -1.56,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_785D8FF4_775C_C733_41D9_8A4D760471BD",
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_4_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "BEDROOMS"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_5_0.png",
      "width": 229,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ]
   },
   "pitch": -3.37,
   "yaw": 119.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7992B216_7763_38FE_41DA_8CD7A9A02D4D",
 "maps": [
  {
   "hfov": 15.35,
   "yaw": 119.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_5_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9697009B_85AD_9DD3_41D8_B0D80B359D8F",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9611A183_85AD_9FB3_419A_B1DFBBB5E60F",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91AC0207_85AD_9CB3_41CB_BBC3EE99D7F9",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_918D1238_85AD_9CDD_41D2_B76CD6B76626",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.4,
   "image": "this.AnimatedImageResource_6820B222_76D8_4EF6_41D2_CFE3AFEBED6B",
   "pitch": 7.67,
   "yaw": -176.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C, this.camera_91C7027A_85AD_9D5D_41B9_384CA8EA8768); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6EF4CD8B_76E8_F50C_41D8_09EFF48D343F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.4,
   "yaw": -176.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "viewerArea": "this.viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6D",
 "id": "viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6DVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.41,
   "image": "this.AnimatedImageResource_61643C03_76F8_FB72_41BD_4AA0866E8E4F",
   "pitch": -22.69,
   "yaw": 147.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49, this.camera_9186C228_85AD_9CFD_41B0_C4A589234810); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_64BAF8FD_76EB_DC66_41CA_A8EE4C1CBFB9",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.41,
   "yaw": 147.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_61649C03_76F8_FB72_41D7_30B3ACEE3752",
   "pitch": -30.98,
   "yaw": -157.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC, this.camera_918D0238_85AD_9CDD_41C6_DA682E97DABA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_65328F5E_76E8_B5A6_41D8_A66A1C714622",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -157.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.77,
   "image": "this.AnimatedImageResource_61ADAD9E_76E8_5525_41CB_F5EE94045B53",
   "pitch": -14.9,
   "yaw": -170.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C, this.camera_91EBE259_85AD_9D5F_41D1_8CF1D567EF9E); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6BC708A3_7C27_B628_41D7_06EB9CA2913A, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_6BC708A3_7C27_B628_41D7_06EB9CA2913A, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_64D378E8_7C38_B638_41B1_3E92CD4FC393, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_60DA91CC_76FF_CCE7_41D2_C6B3B1FD0A9C",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.77,
   "yaw": -170.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_61ADCD9E_76E8_5525_41C9_AB61B0CA8116",
   "pitch": -25.71,
   "yaw": -108.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34, this.camera_919EA249_85AD_9CBF_41D4_B7820EE5CF19); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_61AD4059_76F8_4BED_41D7_E4C272C9F80F",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": -108.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.9,
   "image": "this.AnimatedImageResource_68CF8436_7738_4AAF_41DB_6C5FB97D7C73",
   "pitch": -10.63,
   "yaw": 3.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0, this.camera_91BAD217_85AD_9CD3_41DF_15B83530542E); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_65B63E5A_7C67_AA18_41CD_0912507A1C6E, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6B5F9675_7728_7689_41C8_95BCD8425978",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.9,
   "yaw": 3.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "KITCHEN"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_5_0.png",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -1.07,
   "yaw": -170.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_784BB5C7_775D_5B5D_41A6_C4BD25785E14",
 "maps": [
  {
   "hfov": 10,
   "yaw": -170.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_5_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96E0B0BC_85AD_9DD5_41B9_1ABC41BB9BFF",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_917AA2FE_85AD_9D55_41D6_5E9A9083F7D0",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96F350DD_85AD_9D57_41A4_2E02A52639CF",
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
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid9177AFDC_85AD_E355_41D5_E8D0CBD87E6D",
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "width": "100%",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "shadow": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ViewerArea14068"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.4,
   "image": "this.AnimatedImageResource_67DE5B09_76E8_DDBB_41C2_77E1E6652F16",
   "pitch": -22.96,
   "yaw": -3.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC, this.camera_91AC7207_85AD_9CB3_41BE_F6EFFD7F1203); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_66D482E4_76E9_CC69_41AC_929C70E4BD30",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.4,
   "yaw": -3.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_915AF32B_85AD_9CF3_41D7_C90B4EA2DBD3",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_963FA162_85AD_9F6D_41D7_3A424A5F1FD0",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96873068_85AD_9D7D_41C6_A618262FD6DD",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.03,
   "image": "this.AnimatedImageResource_68C24436_7738_4AAF_41C4_E20A1ABD8CA7",
   "pitch": -2.85,
   "yaw": -178.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01, this.camera_913C12BC_85AD_9DD5_41C4_5EB085E32965); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_65BCE016_7C79_D5E8_41D4_45DF1C95BCB5, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_65BCE016_7C79_D5E8_41D4_45DF1C95BCB5, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6DFAF5F5_7729_D579_41DC_C2CA36E4F82C",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.03,
   "yaw": -178.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91A001F6_85AD_9F55_41D5_325FA4D9852B",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_964E71D5_85AD_9F57_41DA_1E6C9D5DD1A5",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_965431E6_85AD_9F75_41DA_E6AEF9C9BB35",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.87,
   "image": "this.AnimatedImageResource_6192ED9E_76E8_5525_41D3_FBCC7FD12F04",
   "pitch": -31.23,
   "yaw": -176.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34, this.camera_964201C5_85AD_9FB7_41D1_DA178516D120); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_65765E1A_7C68_AA18_41D0_8BDB857E66BF, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_65765E1A_7C68_AA18_41D0_8BDB857E66BF, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_601040DC_76F8_4CC2_41A6_C9ADEE3256BC",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.87,
   "yaw": -176.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.42,
   "image": "this.AnimatedImageResource_6A55F57F_76E8_D50B_41AB_5B08A4F955B0",
   "pitch": 6.12,
   "yaw": -90.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_601F0EF9_76E8_54D3_41C0_72C4E50BE483",
 "maps": [
  {
   "hfov": 4.42,
   "yaw": -90.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_2_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ]
   },
   "pitch": 9.23,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75, this.camera_966BB1A4_85AD_9FF5_41AC_97CBF4CCEBA6); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_615B7994_76E8_DD55_41DB_CE809DFCC009",
 "data": {
  "label": "BEDROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.58,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.4,
   "image": "this.AnimatedImageResource_6A52757F_76E8_D50B_41D5_FF97FB7A3C02",
   "pitch": 8.17,
   "yaw": 1.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75, this.camera_9677B1B4_85AD_9FD5_41BE_E433F247C6B2); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, this.effect_64551AE3_7C59_AA28_41CE_EA83D7EA8FB8, 'hideEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_64551AE3_7C59_AA28_41CE_EA83D7EA8FB8, 'hideEffect', false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_64A18308_7C58_DBF8_41DA_B496823F797C, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_64A18308_7C58_DBF8_41DA_B496823F797C, 'showEffect', false); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6EA9BF8C_76E8_5514_41D3_2B0A76A90DB3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.4,
   "yaw": 1.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_4_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ]
   },
   "pitch": 5.95,
   "yaw": -89.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308, this.camera_961DE193_85AD_9FD3_41D8_89E428CCD7CB); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E1786FE_76EF_D4F6_41DB_5B29E6D727F6",
 "data": {
  "label": "  TOILLET"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.02,
   "yaw": -89.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.39,
   "image": "this.AnimatedImageResource_6A52F57F_76E8_D50B_41C4_7E0966656753",
   "pitch": 8.59,
   "yaw": 88.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6E7F0F55_76E8_5502_4174_DCEDC23D603C",
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 88.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_6_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ]
   },
   "pitch": 9.78,
   "yaw": 88.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8, this.camera_964E61D5_85AD_9F57_41B0_2CAA67D48926); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6FBBED9D_76E9_B503_4189_41E1BBD4BC4B",
 "data": {
  "label": "BEDROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.56,
   "yaw": 88.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "LIVING ROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_7_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -2.1,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_613ADCA0_7765_49C6_41D7_4CC1DA9A2A2D",
 "maps": [
  {
   "hfov": 15.45,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_7_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "useHandCursor": true,
 "areas": [
  {
   "rollOver": "this.showWindow(this.window_92601705_813F_6A19_41A7_7E555A935ECE, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9013A108_812B_2617_41D0_17B7757E93CE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.9,
   "yaw": -133.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_8_1_0_map.gif",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_9_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "hfov": 4.87,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -56.57,
   "yaw": -52.92
  }
 ],
 "id": "overlay_93099F76_8125_1AFB_41D3_8F641443F9C1",
 "maps": [
  {
   "hfov": 4.87,
   "yaw": -52.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -56.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_9_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_913C22BC_85AD_9DD5_41CA_15E5F9F37829",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_68C7F436_7738_4AAF_41A7_1F36EC4BA19C",
   "pitch": -26.46,
   "yaw": 147.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8, this.camera_91F5D26A_85AD_9D7D_41DF_4D2ED38284DA); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6B0564BB_772F_CBF2_41D8_B29DF5557C47",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 147.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.58,
   "image": "this.AnimatedImageResource_68C71436_7738_4AAF_41C7_0E28AB8DE21A",
   "pitch": 1.89,
   "yaw": 118.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6B8DAA66_7728_BE97_41B4_99830FEA911B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.58,
   "yaw": 118.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_914A830E_85AD_9CB5_41B6_2CFE7846AA3E",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91F5E26A_85AD_9D7D_41C6_626266007677",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.57,
   "image": "this.AnimatedImageResource_681C6231_76D8_4ED2_418B_4B558565172D",
   "pitch": 4.14,
   "yaw": -174.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C, this.camera_96119183_85AD_9FB3_41DF_FF0CE6162D70); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E7237D9_76E8_5509_41DA_38EE6F7E2428",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.57,
   "yaw": -174.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.82,
   "image": "this.AnimatedImageResource_68C07436_7738_4AAF_41C0_F9BDA52F6633",
   "pitch": -31.99,
   "yaw": 53.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31, this.camera_960BE172_85AD_9F6D_41C3_5667AC32E86F); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6C81F5A7_7728_F59E_41D0_43DC142BFB99",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 53.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5054F6BF_7728_76EC_41DC_A33D87149F7C, {'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5E1E7667_7738_499C_41C6_3736E466886A, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_508258E4_7728_FA9D_41D8_539F77141C55",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.39,
   "yaw": -50,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_2_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5FBBCB5C_7738_BFB1_41D5_DC3C7937C368, {'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_50252160_7738_4B90_41DB_0C012BF520BA, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_51B2CAF9_7738_DE72_41AD_9147BF50C5E7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.63,
   "yaw": -29.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_3_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96F5C0EE_85AD_9D75_41A2_CEFDCD2F364A",
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
},
{
 "propagateClick": false,
 "id": "htmlText_92662705_813F_6A19_41D7_3A2F0178087A",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "10%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText7211"
 },
 "scrollBarWidth": 10
},
{
 "propagateClick": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "id": "image_uid916E2FD5_85AD_E357_41C0_6A43142B3D88_1",
 "class": "Image",
 "paddingRight": 0,
 "url": "media/photo_930775C5_813F_2E19_4172_D56B4412C604.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "minWidth": 0,
 "height": "89%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image14066"
 }
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_681D3231_76D8_4ED2_41B8_CA270CA00552",
   "pitch": 15.34,
   "yaw": 174.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75, this.camera_910FE2CD_85AD_9DB7_41B3_A73B2C9517D2); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6FE3AADC_76D8_5F75_41C9_1E31A5434217",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 174.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_1_0.png",
      "width": 262,
      "class": "ImageResourceLevel",
      "height": 255
     }
    ]
   },
   "pitch": 6.01,
   "yaw": 98.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3, this.camera_911932DD_85AD_9D57_41D1_01537385F2C3); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F6B8117_76D8_CAC9_41DC_261C28647709",
 "data": {
  "label": "BATHROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 98.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.67,
   "image": "this.AnimatedImageResource_6A965A4F_772B_BEA4_41D0_262630D1EB96",
   "pitch": 6.05,
   "yaw": 97.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3, this.camera_9168C2ED_85AD_9D77_41C4_87971B3ED2C6); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F103FFA_76D8_553A_41D6_8FDBD274CEFC",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 97.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_3_0.png",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "hfov": 2.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.92,
   "roll": 0,
   "yaw": -0.63
  }
 ],
 "id": "overlay_627A4CE8_7763_4959_41DD_0DA22ADB6159",
 "maps": [
  {
   "hfov": 2.05,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_3_1_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.41,
   "image": "this.AnimatedImageResource_681E5231_76D8_4ED2_419A_7665C7B836EB",
   "pitch": -22.69,
   "yaw": 164.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75, this.camera_96318151_85AD_9CAF_41AD_D51D072AEAD7); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F050F41_76D8_56BA_41C7_828D690A28BF",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.41,
   "yaw": 164.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_681E8231_76D8_4ED2_41D2_B88C6C86C9FD",
   "pitch": -14.15,
   "yaw": -8.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787, this.camera_963F9162_85AD_9F6D_41B9_406FE1AA84AF); this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_65F56B02_7C78_ABE8_41D0_342ADED06048, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6DBFAAF2_76D8_FF58_41DB_9B300A282B18",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -8.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_961DF193_85AD_9FD3_416E_005562716C74",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96D6A120_85AD_9CED_41E0_411D8C5310AA",
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
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "data": {
  "name": "IconButton VR"
 },
 "maxWidth": 58
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton HS "
 },
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxWidth": 58
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxWidth": 58
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_6820E222_76D8_4EF6_419E_A90B86E905A7",
   "pitch": 6.54,
   "yaw": -177.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C, this.camera_968C908A_85AD_9DBD_41CB_65417048E3A3); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_64B550A2_7C59_7628_4191_391BE20F1F69, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E7ACFB0_76EB_D519_41CD_DA583D71E0F6",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.66,
   "yaw": -177.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.63,
   "image": "this.AnimatedImageResource_681F5231_76D8_4ED2_41D1_42D48A6A006D",
   "pitch": 9.05,
   "yaw": -115.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C, this.camera_6BE3B65A_76E8_D715_41AE_2C79716C8460)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E34E78F_76D8_B5E3_41D1_1D64A5822392",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.63,
   "yaw": -115.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_2_0.png",
      "width": 255,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ]
   },
   "pitch": 10.45,
   "yaw": -115.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A, this.camera_9688E079_85AD_9D5F_41DF_365BFBB942C4); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_6564BB2A_7C68_EA38_4193_A30AA5FFBEFC, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F5E964E_76DB_D766_41D6_002A9F673882",
 "data": {
  "label": "BATHROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.83,
   "yaw": -115.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_2_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_681FD231_76D8_4ED2_41BC_A4520C1EB596",
   "pitch": -25.46,
   "yaw": 101.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01, this.camera_96872068_85AD_9D7D_41CB_37507CC351CB); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6CF8D1A2_76D8_4DFD_41AE_E772BA66C875",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 101.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.4,
   "image": "this.AnimatedImageResource_67DEFB09_76E8_DDBB_41DA_7E89A7BD2990",
   "pitch": -22.96,
   "yaw": -3.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49, this.camera_965421E6_85AD_9F75_41B5_B8B7831F2CB2); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6B642D9E_7C29_6E18_41D6_DB0384C7988C, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6B642D9E_7C29_6E18_41D6_DB0384C7988C, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_648DF9AF_7C5F_D638_41D2_1BD01B0CCB6B, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_67E27168_76E8_4C79_41D9_13F31C624BF5",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.4,
   "yaw": -3.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.52,
   "image": "this.AnimatedImageResource_67DD4B09_76E8_DDBB_41D1_FF19EAF9DFB6",
   "pitch": -35.76,
   "yaw": 179.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784, this.camera_91A071F6_85AD_9F55_41D3_F54C85DDB8B5); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, this.effect_6E62F096_7BE8_F6E8_41D6_CE45F783527A, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_67DDB202_76E8_4FA9_41CC_47EDBABF7631",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.52,
   "yaw": 179.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "LIVING ROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0_HS_2_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -2.51,
   "yaw": -1.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_470B18B6_7728_5A8D_41C5_0ADF54CEE67D",
 "maps": [
  {
   "hfov": 13.46,
   "yaw": -1.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_0_HS_2_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9123929B_85AD_9DD3_41BA_CCDE1949F3A6",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91D6528B_85AD_9DB3_41BD_E69476D9736E",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_910FF2CD_85AD_9DB7_41D7_CF7BFD7DEE31",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_90A4A347_85AD_9CB3_41D1_322DC2E0A025",
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
},
{
 "mp3Url": "media/audio_9946EFBD_8125_3A69_41D8_E34B0625D6A0.mp3",
 "id": "audioresource_96FF629A_8125_EA2B_41D7_F1820E0B32DC",
 "oggUrl": "media/audio_9946EFBD_8125_3A69_41D8_E34B0625D6A0.ogg",
 "class": "AudioResource"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_913292AC_85AD_9DF5_41C5_C1FA0CC8F18C",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96C280FE_85AD_9D55_41DB_3783EBE16CA6",
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
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_91C7127B_85AD_9D53_41C0_5A968FDA9793",
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
},
{
 "viewerArea": "this.viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69",
 "id": "viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96DDF130_85AD_9CED_419A_DBE311BDCFD4",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.47,
   "image": "this.AnimatedImageResource_6193FD9E_76E8_5525_41C8_72342332C3DF",
   "pitch": -21.69,
   "yaw": 174.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC, this.camera_9123F29B_85AD_9DD3_41E0_18DD6516CA10); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6BC48CE8_7C28_AE38_4166_C3AAE400B306, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6BC48CE8_7C28_AE38_4166_C3AAE400B306, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, this.effect_6BE93A1F_7C28_AA18_41C1_F9CA65467E0E, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63094548_76F9_B5D2_41B4_031554C336EF",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.47,
   "yaw": 174.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.8,
   "image": "this.AnimatedImageResource_61902D9E_76E8_5525_41D3_6C1AF424E659",
   "pitch": -13.9,
   "yaw": -172.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F, this.camera_91D1B28B_85AD_9DB3_41DE_54ED6D579DD8); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6BB02EBA_7C28_AA18_419D_5F5C2E6C1714, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6BB02EBA_7C28_AA18_419D_5F5C2E6C1714, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, this.effect_641F5DE3_7C29_AE28_41D7_7E6AFD32D715, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_61995AFB_76F8_FCB2_41B9_78EB43F4C216",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.8,
   "yaw": -172.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "LIVING ROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_2_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -2.1,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_78CA1903_7765_48D7_41D6_27196E9D60AA",
 "maps": [
  {
   "hfov": 15.45,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_2_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.36,
   "image": "this.AnimatedImageResource_6E949FFE_7BD9_6A18_41CE_F3C42882A04D",
   "pitch": -23.7,
   "yaw": 157.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34, this.camera_913282AC_85AD_9DF5_41DB_A0B15158D814); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, this.effect_65394C8B_7C38_EEF8_41CD_FF83596BA10A, 'hideEffect', false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6B603775_7C38_BA29_41CE_C61E4965709B, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6B603775_7C38_BA29_41CE_C61E4965709B, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6E82DD3D_7BD8_AE18_41A7_08B9F2D56FE9",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.36,
   "yaw": 157.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_967441B4_85AD_9FD5_41A0_43B7081DEEB4",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_6166EBF4_76F8_FC96_41CB_802FE3CD4640",
   "pitch": -24.2,
   "yaw": 179.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC, this.camera_969940AC_85AD_9DF5_41D4_47B6ABB94DA8); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, this.effect_6E88B478_7BE8_DE18_41C9_1E674D1521CD, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6757BB7D_76E8_7C5E_41DB_6E4E6F92CA1C",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.33,
   "yaw": 179.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.64,
   "image": "this.AnimatedImageResource_6166ABF4_76F8_FC96_41C9_5FC83757E218",
   "pitch": -34.25,
   "yaw": -48.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F, this.camera_96E0A0BC_85AD_9DD5_41E0_87B143BDDF98); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_65C27F3D_76E8_D5E2_41B7_84C48AE746D6",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.64,
   "yaw": -48.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_61672C03_76F8_FB72_41D4_DBB785C0455F",
   "pitch": -25.46,
   "yaw": -101.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC, this.camera_96EB70CC_85AD_9DB6_41D6_4E991C946129); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_65C96373_76E8_4D8D_41AE_01272792CA81",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.26,
   "yaw": -101.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.6,
   "image": "this.AnimatedImageResource_6167CC03_76F8_FB72_41B6_22F9754D55FA",
   "pitch": -18.92,
   "yaw": -134.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_656510BB_7C29_D618_41D9_759DF33A72F6, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_656510BB_7C29_D618_41D9_759DF33A72F6, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_6BC90C3F_7C28_EE19_41DB_BB3FE6A8D517, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63823EC6_76F7_B48B_4180_94E21D6CE1FA",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.6,
   "yaw": -134.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.68,
   "image": "this.AnimatedImageResource_61645C03_76F8_FB72_416C_B601BFB1390F",
   "pitch": -17.17,
   "yaw": -78.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34, this.camera_96F340DD_85AD_9D57_41C5_B2A03CC4352A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62062408_76F8_4B82_41D9_3F5A264A163A",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -78.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "BEDROOMS"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_5_0.png",
      "width": 177,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -2.69,
   "yaw": -79.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7902D3B5_775C_FF3F_41CA_EC4235F179E8",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -79.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_5_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "KITCHEN"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_6_0.png",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -1.33,
   "yaw": -133.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7A887121_775F_D8D4_41D6_859F68901A01",
 "maps": [
  {
   "hfov": 10,
   "yaw": -133.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_6_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_96EB00CD_85AD_9DB7_41DD_42F931515FF8",
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
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid911D4FCC_85AD_E3B5_41B5_E17F45FEDB69",
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "width": "100%",
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "shadow": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ViewerArea14065"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_617A5C03_76F8_FB72_41C4_53671DB13653",
   "pitch": -30.23,
   "yaw": -148.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC, this.camera_96DDE130_85AD_9CED_41E0_10BD07F24FDB); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6BD0CE13_7C38_ADE8_41CB_5B379B726F6A, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6BD0CE13_7C38_ADE8_41CB_5B379B726F6A, 'showEffect', false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62434B31_76F9_BD9F_41BD_1A81E5992C0A",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -148.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.73,
   "image": "this.AnimatedImageResource_617A3C03_76F8_FB72_41DC_A91551EF0940",
   "pitch": -15.91,
   "yaw": -162.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49, this.camera_96D69120_85AD_9CED_41DA_B5965574EA90); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6B3957DE_7C39_7A1B_41B8_80C0EC23567B, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6B3957DE_7C39_7A1B_41B8_80C0EC23567B, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_64A3EE37_7C58_AA28_41DC_403DB115AE04, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_60EF429F_76F8_CC88_41DC_CEB5B88E1A61",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.73,
   "yaw": -162.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.83,
   "image": "this.AnimatedImageResource_617AFC03_76F8_FB72_41D2_CB0B3AA91AAE",
   "pitch": -13.1,
   "yaw": -117.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C, this.camera_96C9310F_85AD_9CB3_41BD_6951273ECFFD); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_66442561_7C59_BE28_41D9_9F7B3AEC01CF, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_66442561_7C59_BE28_41D9_9F7B3AEC01CF, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_675430FE_7C58_F61B_41D6_9349DD8A1B2C, 'hideEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_675430FE_7C58_F61B_41D6_9349DD8A1B2C, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_633A8D2D_76FB_B58F_41DB_59470ABB7596",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.83,
   "yaw": -117.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.35,
   "image": "this.AnimatedImageResource_447D9B17_7728_7F8D_41D6_BB58AB845589",
   "pitch": -37.77,
   "yaw": 1.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C, this.camera_962B4141_85AD_9CAF_41CD_9D6E26B4B9D3); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_6D5875D0_7E99_3B95_41C5_7185FD48CD59, 'hideEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_61A821ED_76F8_4CDF_41D8_0CAB34A44472",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.35,
   "yaw": 1.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_5C9B57C7_7729_F699_41CC_B5D09462A087",
   "pitch": -25.46,
   "yaw": 172.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F, this.camera_96C2E0FE_85AD_9D55_41D7_2140DF2155A5); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6515706A_7C6B_F60B_41C8_AB6A70914BA9, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6515706A_7C6B_F60B_41C8_AB6A70914BA9, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_512AF88E_7728_DAA9_41D2_A41192B4DCDD",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 172.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_5_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 220
     }
    ]
   },
   "pitch": 1.32,
   "yaw": -0.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_67ED3EF4_7C29_EA28_4188_A759D5D791C8, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_67ED3EF4_7C29_EA28_4188_A759D5D791C8, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62830736_7764_D8CB_4192_B9F0F2A48848",
 "data": {
  "label": "BEDROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.14,
   "yaw": -0.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 2.96,
   "image": "this.AnimatedImageResource_608EA90E_7767_48DA_41B7_5844AAED2D09",
   "pitch": 3.66,
   "yaw": -1.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_64122731_7C39_5A28_41D3_01278709A564, 'hideEffect', false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6BCCED54_7C28_AE6F_41A0_63EC039FB73F, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_6BCCED54_7C28_AE6F_41A0_63EC039FB73F, 'showEffect', false); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_62EFF2A8_7765_39C7_41B0_6414111D7118",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.96,
   "yaw": -1.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "LIVING ROOM"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_7_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -2.1,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_610E63F9_7765_3F46_41DD_5F41F7ED889D",
 "maps": [
  {
   "hfov": 15.45,
   "yaw": -172,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_7_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_960BF172_85AD_9F6D_41D7_CD1C389D9A76",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.62,
   "image": "this.AnimatedImageResource_63BF6FE3_7765_C74F_419B_4728F66AC230",
   "pitch": 9.66,
   "yaw": 176.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A, this.camera_96F520EE_85AD_9D75_41E0_54ECB19FD926); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6F82A3E7_76D9_CD4E_41C8_9BB276AB0656",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.62,
   "yaw": 176.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0_HS_1_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ]
   },
   "hfov": 5.52,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.24,
   "roll": 0,
   "yaw": 0.54
  }
 ],
 "id": "overlay_620C34E0_7764_F94A_41D5_9FE3E6C1FF18",
 "maps": [
  {
   "hfov": 5.52,
   "yaw": 0.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0_HS_1_1_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_9119C2DD_85AD_9D57_41D6_9BF124AD06A9",
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
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 24,
 "id": "panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 },
 "inertia": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.02,
   "image": "this.AnimatedImageResource_68C61436_7738_4AAF_4190_12D2840111DC",
   "pitch": -3.6,
   "yaw": -164.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D1AAF75_76D8_746B_41C4_08422925F06F, this.camera_9697709B_85AD_9DD3_41D5_1E3BEDF6290C); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, this.effect_6560C349_7C79_7A78_41D5_3E074EB8D380, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6BE90759_7728_5684_4192_477D06EA6C30",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.02,
   "yaw": -164.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_690268D9_7737_BB88_41D1_EABA876FB23F, {'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_8F4E9F0E_8592_A4B5_41AD_83D14FD7F862, this.video_69820AD4_7739_BFEF_41D4_784286D13B4D, this.PlayList_96410B08_8596_6CBD_41CE_40306BFD7D02, '75%', '75%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_69954FE4_7728_5584_41D3_413E81B62AFF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.88,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_1_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "VIDEO VIEW"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_2_0.png",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "pitch": -9.22,
   "yaw": 89.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_655DD7CC_7C58_FA7F_41D1_8B579C0D93C6",
 "maps": [
  {
   "hfov": 9.22,
   "yaw": 89.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_2_0_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_3_0.png",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ]
   },
   "hfov": 2.61,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.38,
   "yaw": 91.33
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65D9A3BA_7C59_BA1B_41DC_55CCF191EA57, {'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_8F4EEF0E_8592_A4B5_41D0_76398EE60F95, this.video_69820AD4_7739_BFEF_41D4_784286D13B4D, this.PlayList_96419B08_8596_6CBD_41BA_8CFA80407F14, '65%', '65%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_65B9AF20_7C58_AA27_4194_B34FC219607F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.61,
   "yaw": 91.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   }
  }
 ]
},
{
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "width": 366,
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "height": 78,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadowBlurRadius": 7,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "width": 366,
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 86,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "height": 46,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadowBlurRadius": 7,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "fontFamily": "Oswald",
 "propagateClick": true,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#000000",
 "width": 391,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 0,
 "fontSize": 61,
 "horizontalAlign": "left",
 "height": 75,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "LIVING ROOM"
 },
 "propagateClick": true,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "width": 151,
 "borderSize": 0,
 "textShadowOpacity": 0.42,
 "text": "LIVING ROOM",
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 35,
 "fontSize": 28,
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "height": 44,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "textDecoration": "none",
 "borderRadius": 0,
 "textShadowHorizontalLength": -1,
 "fontWeight": "normal",
 "textShadowColor": "#000000"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "KITCHEN"
 },
 "propagateClick": true,
 "id": "Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "width": 151,
 "borderSize": 0,
 "textShadowOpacity": 0.42,
 "text": "KITCHEN",
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "25%",
 "fontSize": 28,
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "height": 44,
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "textDecoration": "none",
 "borderRadius": 0,
 "textShadowHorizontalLength": -1,
 "fontWeight": "normal",
 "textShadowColor": "#000000"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "BEDROOM"
 },
 "propagateClick": true,
 "id": "Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B",
 "left": "0.09%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "width": "32.545%",
 "borderSize": 0,
 "textShadowOpacity": 0.42,
 "text": "BEDROOM",
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "24.29%",
 "fontSize": "28px",
 "textShadowVerticalLength": 0,
 "horizontalAlign": "left",
 "height": "30%",
 "paddingTop": 0,
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "textDecoration": "none",
 "borderRadius": 0,
 "textShadowHorizontalLength": -1,
 "fontWeight": "normal",
 "textShadowColor": "#000000"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "propagateClick": true,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "width": 110,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "0%",
 "horizontalAlign": "center",
 "height": 110,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "button menu sup"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "propagateClick": true,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "91.304%",
 "minHeight": 1,
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "propagateClick": true,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "propagateClick": false,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "width": 330,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "- EXPANDED"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_93518B84_85B4_639F_41D9_2A3245EA4E01"
 ],
 "propagateClick": false,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "propagateClick": true,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "propagateClick": false,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "WebFrame_922800AA_85AC_9DEB_41D3_541C47E2497F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "11.3%",
 "url": "https://www.vishwakarmabuilders.com/",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "75.995%",
 "minHeight": 1,
 "minWidth": 1,
 "bottom": "16.21%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "paddingTop": 0,
 "height": "66.526%",
 "backgroundOpacity": 1,
 "shadow": false,
 "scrollEnabled": true,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame12124"
 }
},
{
 "children": [
  "this.IconButton_97D44B6D_859D_A377_41AA_57A3D52CA711"
 ],
 "propagateClick": false,
 "id": "Container_96256CBF_8596_65D2_41CB_50D1B1E04CAC",
 "left": "12.65%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "11.26%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "17.22%",
 "bottom": "72.78%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61650C03_76F8_FB72_41DA_891141D6CB8D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6165EC03_76F8_FB72_41CE_E4F4909AFFEC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5ECA17CD_7728_F6A4_41C1_F34283FDC8D7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5E54C629_7738_4995_41D2_FE17E2B87D37",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D653A23_76D8_5FEF_41D2_087EAB8895EC_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6820B222_76D8_4EF6_41D2_CFE3AFEBED6B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D17AACA_76D8_DCB9_41CE_8A7AC7AD7308_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61643C03_76F8_FB72_41BD_4AA0866E8E4F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61649C03_76F8_FB72_41D7_30B3ACEE3752",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61ADAD9E_76E8_5525_41CB_F5EE94045B53",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61ADCD9E_76E8_5525_41C9_AB61B0CA8116",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68CF8436_7738_4AAF_41DB_6C5FB97D7C73",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1AAF75_76D8_746B_41C4_08422925F06F_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_67DE5B09_76E8_DDBB_41C2_77E1E6652F16",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7A3E8A3E_76D9_DFD9_41AB_117342A8D784_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68C24436_7738_4AAF_41C4_E20A1ABD8CA7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AAE81_76D8_D4AB_41D5_E7034283B787_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6192ED9E_76E8_5525_41D3_FBCC7FD12F04",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6A55F57F_76E8_D50B_41AB_5B08A4F955B0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6A52757F_76E8_D50B_41D5_FF97FB7A3C02",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6A52F57F_76E8_D50B_41C4_7E0966656753",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D652FFC_76D8_B45A_41DC_280A8AD3E90C_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68C7F436_7738_4AAF_41A7_1F36EC4BA19C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68C71436_7738_4AAF_41C7_0E28AB8DE21A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6A51C7_76D8_4CB6_41B1_12D4024EFB31_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681C6231_76D8_4ED2_418B_4B558565172D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68C07436_7738_4AAF_41C0_F9BDA52F6633",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D194566_76D8_7469_41D7_C0D0B5B654D8_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681D3231_76D8_4ED2_41B8_CA270CA00552",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6A965A4F_772B_BEA4_41D0_262630D1EB96",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D156BA6_76D8_BCE9_41B3_F1D7C619254A_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681E5231_76D8_4ED2_419A_7665C7B836EB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681E8231_76D8_4ED2_41D2_B88C6C86C9FD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D180332_76D8_CDE9_4172_AABC2DABCA01_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6820E222_76D8_4EF6_419E_A90B86E905A7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681F5231_76D8_4ED2_41D1_42D48A6A006D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_681FD231_76D8_4ED2_41BC_A4520C1EB596",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6596E0_76D8_F469_41D3_0DF0A5292D75_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_67DEFB09_76E8_DDBB_41DA_7E89A7BD2990",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_67DD4B09_76E8_DDBB_41D1_FF19EAF9DFB6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1CF95C_76D8_5C5A_41C5_CA94E4024BBC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6193FD9E_76E8_5525_41C8_72342332C3DF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61902D9E_76E8_5525_41D3_6C1AF424E659",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6E949FFE_7BD9_6A18_41CE_F3C42882A04D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D178E34_76D8_57E9_41D2_0C484C43CE0C_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6166EBF4_76F8_FC96_41CB_802FE3CD4640",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6166ABF4_76F8_FC96_41C9_5FC83757E218",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61672C03_76F8_FB72_41D4_DBB785C0455F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6167CC03_76F8_FB72_41B6_22F9754D55FA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_61645C03_76F8_FB72_416C_B601BFB1390F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6AE4A7_76D8_74F7_41D1_38C3EA24EF49_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_617A5C03_76F8_FB72_41C4_53671DB13653",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_617A3C03_76F8_FB72_41DC_A91551EF0940",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_617AFC03_76F8_FB72_41D2_CB0B3AA91AAE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_447D9B17_7728_7F8D_41D6_BB58AB845589",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5C9B57C7_7729_F699_41CC_B5D09462A087",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_608EA90E_7767_48DA_41B7_5844AAED2D09",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D1554D1_76D8_B4AB_41C7_472EFCEDEB34_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_63BF6FE3_7765_C74F_419B_4728F66AC230",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D6A697E_76D8_5C59_41D5_CAB098B3E9A3_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_68C61436_7738_4AAF_4190_12D2840111DC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D65AA14_76DB_BFAA_4124_1E37948EEEC0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 60,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "height": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "image button menu"
 },
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxWidth": 60
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "maxWidth": 58
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 58,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "data": {
  "name": "IconButton FB"
 },
 "maxWidth": 58
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 26,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "0%",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "propagateClick": true,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": "10.61%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": 35,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "top": "44.92%",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 80,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "maxWidth": 80
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "propagateClick": false,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "89.939%",
 "minHeight": 1,
 "verticalAlign": "top",
 "bottom": "36.3%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "27.213%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "propagateClick": true,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 16,
 "width": 35,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "maxWidth": 50
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "85%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "50%",
 "contentOpaque": false,
 "minWidth": 460,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingTop": 20,
 "height": "100%",
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 20,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_93518B84_85B4_639F_41D9_2A3245EA4E01",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_93518B84_85B4_639F_41D9_2A3245EA4E01.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_93518B84_85B4_639F_41D9_2A3245EA4E01_rollover.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_93518B84_85B4_639F_41D9_2A3245EA4E01_pressed.jpg",
 "maxWidth": 60
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "scrollBarWidth": 10,
 "itemMode": "normal",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "class": "ThumbnailGrid",
 "itemLabelHorizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "100%",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Oswald",
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemLabelFontColor": "#04A3E1",
 "height": "92%",
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "bottom": -0.2,
 "itemLabelFontColor": "#666666",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "scrollBarMargin": 2,
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 10,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "minWidth": 1,
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxWidth": 60
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "width": "100%",
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "99.975%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Floor Plan"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "propagateClick": true,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 140,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "55%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "45%",
 "contentOpaque": false,
 "minWidth": 460,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingTop": 20,
 "height": "100%",
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 20,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "maxWidth": 60
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_97D44B6D_859D_A377_41AA_57A3D52CA711",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_97D44B6D_859D_A377_41AA_57A3D52CA711.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_93F90694_85AC_65BF_41D2_554F192EF5F0, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_97D44B6D_859D_A377_41AA_57A3D52CA711_rollover.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_97D44B6D_859D_A377_41AA_57A3D52CA711_pressed.jpg",
 "maxWidth": 60
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Label_55CF1071_7778_CA30_41D4_5E524697D8B9",
  "this.Image_54FEBB74_7768_5E42_41D3_F248B37481EA",
  "this.Image_54D3517B_7768_CA46_41D8_8DE8840F2173",
  "this.Label_531EF5EB_7768_4A41_41D0_BD2EDB8BEC6B",
  "this.Image_50CCB2A3_7768_CEF8_41D2_967A72339594",
  "this.Label_5392AD9A_7768_5ACB_41D9_98EDF90ED71B",
  "this.Image_5259F7FC_7758_F655_41C0_0083A88489D4",
  "this.Label_52F2C4B9_7758_4ADD_41CA_2850F649BFFD"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#66CC33",
 "paddingRight": 40,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 0,
 "top": "0%",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 40,
 "backgroundOpacity": 0.5,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 40,
 "borderRadius": 9,
 "data": {
  "name": "- Buttons set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 5,
 "layout": "absolute"
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "paddingTop": 20,
 "height": 60,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 100,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 30,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "height": 40,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "height": "36.14%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxWidth": 60
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "height": "36.14%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxWidth": 60
},
{
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "width": "100%",
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionMode": "blending",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "top": "0%",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical"
},
{
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "width": "14.22%",
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "width": "14.22%",
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxWidth": 60
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "width": "10%",
 "minHeight": 50,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "height": "10%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image40635"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingTop": 20,
 "height": "5%",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 100,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 30,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "height": 40,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 30,
 "verticalAlign": "top",
 "minWidth": 40,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "25%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "Image Company"
 },
 "maxWidth": 1095
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "propagateClick": true,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 1"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "propagateClick": true,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": 130,
 "gap": 5,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Container footer"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "propagateClick": true,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-1"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "propagateClick": true,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-2"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "propagateClick": true,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-3"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "propagateClick": true,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-4"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "propagateClick": true,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-5"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "propagateClick": true,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-6"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "fontFamily": "Roboto",
 "propagateClick": false,
 "id": "Label_55CF1071_7778_CA30_41D4_5E524697D8B9",
 "left": "15.65%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "width": "36.406%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "text": "BEDROOM",
 "minWidth": 1,
 "top": "31.44%",
 "fontSize": "1.47vmin",
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_666E8038_7C79_7618_41D5_272DEFE58BA6, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_666E8038_7C79_7618_41D5_272DEFE58BA6, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "height": "8.876%",
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "Label40183"
 },
 "fontWeight": "normal"
},
{
 "maxHeight": 512,
 "propagateClick": false,
 "id": "Image_54FEBB74_7768_5E42_41D3_F248B37481EA",
 "left": "20.13%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_54FEBB74_7768_5E42_41D3_F248B37481EA.png",
 "width": "15.668%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_6735A37C_7C78_BA1F_41CD_1A0D8DB9F35E, 'showEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, this.effect_6735A37C_7C78_BA1F_41CD_1A0D8DB9F35E, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "22.485%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image40065"
 },
 "maxWidth": 512
},
{
 "maxHeight": 512,
 "propagateClick": false,
 "id": "Image_54D3517B_7768_CA46_41D8_8DE8840F2173",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "18.56%",
 "url": "skin/Image_54D3517B_7768_CA46_41D8_8DE8840F2173.png",
 "width": "16.129%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0.24%",
 "click": "this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_66A2F459_7C69_7E18_41CC_C2C75F643B55, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_6616DB90_7C69_6AE8_41D2_E237147BDE26, 'hideEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_6616DB90_7C69_6AE8_41D2_E237147BDE26, 'hideEffect', false)",
 "horizontalAlign": "center",
 "height": "23.669%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image43719"
 },
 "maxWidth": 512
},
{
 "fontFamily": "Roboto",
 "propagateClick": false,
 "id": "Label_531EF5EB_7768_4A41_41D0_BD2EDB8BEC6B",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "right": "3.25%",
 "fontColor": "#FFFFFF",
 "width": "36.406%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "text": "KITCHEN",
 "minWidth": 1,
 "top": "31.33%",
 "fontSize": "1.47vmin",
 "click": "this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, this.effect_66DFDBD7_7C69_EA68_41DB_8CB1C728F85C, 'showEffect', false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, this.effect_66DFDBD7_7C69_EA68_41DB_8CB1C728F85C, 'showEffect', false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, this.effect_6775BEC0_7C69_AA68_41CD_30685C38FE93, 'hideEffect', false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, this.effect_6775BEC0_7C69_AA68_41CD_30685C38FE93, 'hideEffect', false)",
 "horizontalAlign": "left",
 "height": "8.876%",
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "Label40183"
 },
 "fontWeight": "normal"
},
{
 "maxHeight": 512,
 "propagateClick": false,
 "id": "Image_50CCB2A3_7768_CEF8_41D2_967A72339594",
 "left": "17.97%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_50CCB2A3_7768_CEF8_41D2_967A72339594.png",
 "width": "17.512%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "28.4%",
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "23.077%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image47695"
 },
 "maxWidth": 512
},
{
 "fontFamily": "Roboto",
 "propagateClick": false,
 "id": "Label_5392AD9A_7768_5ACB_41D9_98EDF90ED71B",
 "left": "11.5%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "width": "39.633%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "12.6%",
 "minWidth": 1,
 "fontSize": "1.47vmin",
 "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, true, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, true, 0, null, null, false); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "height": "8.88%",
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "shadow": false,
 "text": "WASHROOM",
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "Label40183"
 },
 "fontWeight": "normal"
},
{
 "maxHeight": 512,
 "propagateClick": false,
 "id": "Image_5259F7FC_7758_F655_41C0_0083A88489D4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "20.28%",
 "url": "skin/Image_5259F7FC_7758_F655_41C0_0083A88489D4.png",
 "width": "15.207%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "27.22%",
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "28.994%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image50506"
 },
 "maxWidth": 512
},
{
 "fontFamily": "Roboto",
 "propagateClick": false,
 "id": "Label_52F2C4B9_7758_4ADD_41CA_2850F649BFFD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Label",
 "right": "3.15%",
 "fontColor": "#FFFFFF",
 "width": "39.633%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "12.6%",
 "minWidth": 1,
 "fontSize": "1.47vmin",
 "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DCDE3F1_7BDB_5A28_4199_4459F2063405, false, 0, null, null, false); this.setComponentVisibility(this.Label_653F0A69_7C27_6A38_41BF_B89DCD654A4B, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "height": "8.88%",
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "shadow": false,
 "text": "BATHROOM",
 "paddingBottom": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "Label40183"
 },
 "fontWeight": "normal"
},
{
 "propagateClick": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 20,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": 180,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "horizontalAlign": "center",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundOpacity": 0.7,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 50,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "propagateClick": false,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "46%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "height": "75%",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "RECEPTION >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "ROOMS >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Inserdt Text",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "AMENITIES >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "SPORTS AREA >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "SWIMMING POOL >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "RESTAURANTS >",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 40,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "height": 2,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "blue line"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "propagateClick": true,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "propagateClick": false,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 56,
 "gap": 7,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "propagateClick": false,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 44,
 "gap": 7,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Main Entrance",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lobby",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Reception",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Meeting Area 1",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Meeting Area 2",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Bar",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Chill Out",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Terrace",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Garden",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "visible": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "visible": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "fontSize": 18,
 "rollOverFontFamily": "Oswald",
 "label": "BACK",
 "horizontalAlign": "left",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 30,
 "textDecoration": "none",
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": 8,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "absolute"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 10"
 },
 "paddingRight": 0,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "fontStyle": "italic",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "maxHeight": 200,
 "propagateClick": false,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "width": "25%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "propagateClick": false,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "width": "75%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 10,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "data": {
  "name": "IconButton Info"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "data": {
  "name": "IconButton Location"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 44,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "data": {
  "name": "IconButton Video"
 },
 "maxWidth": 101
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "width": 50,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "height": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "maxWidth": 101
}],
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "borderRadius": 0,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "width": "100%",
 "layout": "absolute",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
