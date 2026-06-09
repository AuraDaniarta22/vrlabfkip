(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7,this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250], 'cardboardAvailable'); this.playList_E1ECDB4A_AAF5_6499_41E3_35BA747A847F.set('selectedIndex', 0); this.playList_E1EC9B48_AAF5_649A_4193_CFE7D1789772.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
  "this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
  "this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1",
  "this.Container_320C1ADD_3F4A_FD16_41B0_FBCDFB126CCF",
  "this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "class": "Player",
 "data": {
  "name": "Player1268"
 },
 "overflow": "visible",
 "definitions": [{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D07C94_A5A4_5E14_41C3_EB30AFDA1D68",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "id": "FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802",
 "easing": "cubic_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.52,
   "backwardYaw": 86.69,
   "distance": 1,
   "panorama": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF"
  }
 ],
 "hfov": 360,
 "label": "IMG_20260427_113852_00_004",
 "id": "panorama_18D01CC6_1348_3440_41A2_BD2321889440",
 "thumbnailUrl": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
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
   "class": "PanoramaMapLocation",
   "angle": 89.08,
   "y": 2012.81,
   "x": 791.57
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_03CD4A96_1358_5CC0_41AD_D9548CF79F9A",
  "this.overlay_B30620F7_A5A4_E613_41DF_912F2E83F5F9",
  "this.overlay_82333FC0_A6B5_FB8A_41DA_E653BA62BF4A",
  "this.overlay_82DDFCC9_A6B5_BD9B_41BF_D11AA728D48E",
  "this.overlay_8F275BCC_A6BD_9B99_41BB_570C4111AC46",
  "this.popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6",
  "this.overlay_8F655E39_A6DB_9CFA_41B5_6E2848EDDAA4",
  "this.overlay_80689B47_A6D5_6496_41D9_558CB37D55E3",
  "this.overlay_8279BD78_A6CB_BF79_41C5_145A9809E9C2",
  "this.overlay_8161687C_A6F5_6579_41E4_C82C4CAE7C75",
  "this.overlay_803CA8F4_A6BC_A589_41E0_922831E71F81"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D47C90_A5A4_5EED_41AF_D5EBD2AE7615",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D65C92_A5A4_5EED_41DD_C8A10345FAF6",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D0FC94_A5A4_5E14_41DB_17F3DD38431B",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D5DC90_A5A4_5EED_41AD_BDAF394A08F7",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D59C91_A5A4_5EEF_41DF_1CEDB4F5CA60",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E2201CC1_AAF5_7D8A_41C9_8AAD50B19ADC"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
   "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
  }
 ],
 "id": "playList_E1EC9B48_AAF5_649A_4193_CFE7D1789772"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_E1EB3B4A_AAF5_6499_415A_2DB32637C0D1",
  "this.PanoramaPlayListItem_E1EADB4C_AAF5_649A_41DB_6E17C3E9F62C",
  "this.PanoramaPlayListItem_E1EA5B4E_AAF5_6499_41E3_7C5307F08DA5",
  "this.PanoramaPlayListItem_E1E90B4E_AAF5_6499_41D0_2B6B4EC36DCA",
  "this.PanoramaPlayListItem_E1E8BB4F_AAF5_6497_41CB_3018AFD7A0CE",
  "this.PanoramaPlayListItem_E1E83B4F_AAF5_6496_41DE_9EF2F27735F7",
  "this.PanoramaPlayListItem_E197CB4F_AAF5_6496_41D7_90BBB534463B",
  "this.PanoramaPlayListItem_E1969B4F_AAF5_6496_41C0_15BC5C906BC6"
 ],
 "id": "mainPlayList"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D7BC94_A5A4_5E14_41D9_C71B3B268653",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D5FC91_A5A4_5EEF_41D9_7C3A0A15D0C8",
 "easing": "cubic_in_out"
},
{
 "class": "MapPlayer",
 "viewerArea": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
 "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E2678C3E_AAF5_7CF9_41AB_8E2A1B898DB4"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D60C92_A5A4_5EED_41CA_322CCB28E377",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D0AC94_A5A4_5E14_41E1_C976603C7103",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.04,
  "pitch": -3.59
 },
 "id": "panorama_18D0788B_1348_5CC7_4191_217370E98EAE_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D68C92_A5A4_5EED_41E0_8D3E8D1E6DA6",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D72C92_A5A4_5EED_41E1_525D83C18BC8",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.68,
   "backwardYaw": 46.46,
   "distance": 1,
   "panorama": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0"
  }
 ],
 "hfov": 360,
 "label": "IMG_20260427_114030_00_005",
 "id": "panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA",
 "thumbnailUrl": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
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
   "class": "PanoramaMapLocation",
   "angle": -85.7,
   "y": 1204.93,
   "x": 1316.86
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_80D50356_A6F5_A489_41C8_92B6172C1117",
  "this.overlay_8E03C53C_A6F5_6CFA_41D0_780CB96FDDDD"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D41C91_A5A4_5EEF_41D6_5CC73C694B5E",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D78C92_A5A4_5EED_41C3_10FFA0E3EE4D",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
   "player": "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4MapPlayer"
  }
 ],
 "id": "playList_E1EC2B4A_AAF5_6499_41D8_1FCBEBE634D0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E25AFBF9_AAF5_7B7A_41C3_D8ABDAD72C9C"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D5FC91_A5A4_5EEF_41D4_23A05265552B",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C",
 "levels": [
  {
   "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1748,
   "height": 1240
  },
  {
   "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_1.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 726
  },
  {
   "url": "media/zoomImage_9DD2C9C1_8B9A_6852_41B9_C5A9E56C7FB9_0_2.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 363
  }
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D66C92_A5A4_5EED_41E3_43370C97EB97",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E21E8C6D_AAF5_7C9B_41E1_0EA431EF7DBA"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -162.62,
   "backwardYaw": 0,
   "distance": 1,
   "panorama": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 111.63,
   "backwardYaw": -85.18,
   "distance": 1,
   "panorama": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 46.46,
   "backwardYaw": -15.68,
   "distance": 1,
   "panorama": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA"
  }
 ],
 "hfov": 360,
 "label": "IMG_20260427_113710_00_002",
 "id": "panorama_18D5F0D5_1349_CC43_414C_531D97C056B0",
 "thumbnailUrl": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
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
   "class": "PanoramaMapLocation",
   "angle": 88.87,
   "y": 1191.4,
   "x": 792.29
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_849C3F49_A67D_9C9A_41E1_8FD94536211F",
  "this.overlay_8330B47B_A677_6D7E_41D0_7661F675535D",
  "this.overlay_812B1E83_A674_9D8F_41E4_9FC55CCDB7CE",
  "this.overlay_83BE67B5_A64B_AB8B_418F_D50BB9FB73B9",
  "this.overlay_82D9D76D_A64D_EC9A_41B7_C3682516990B",
  "this.overlay_8159377D_A64D_AB7B_41C3_AA26CFC8B822",
  "this.overlay_82A180AA_A654_A59E_41D2_0D6EB0052B2E",
  "this.overlay_83385661_A655_EC8A_41CC_00DD78F35CCE",
  "this.overlay_830815C4_A65D_AF89_41C6_DED740C5D2E8",
  "this.overlay_82321A0C_A65F_649A_41CB_EFB9F583E6F9",
  "this.overlay_81B7FD45_A6CB_9C8B_41D3_98901F1014E0",
  "this.overlay_81A6D461_A6CB_6C8A_41DF_BB7A691F3527",
  "this.overlay_81457F0C_A6F4_BC9A_41B1_E5049EF2A302",
  "this.overlay_EE22D3C5_AAF5_AB8B_41B7_1CF698C83BE9",
  "this.overlay_EE2123C5_AAF5_AB8B_41E1_27A66E9DF28A"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D57C91_A5A4_5EEF_41DE_F1E687D202EF",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_B03CABD4_A5A4_5A15_41D8_979EE39A80FC",
 "levels": [
  {
   "url": "media/zoomImage_B28B490D_A5A4_A7F7_41E0_C5A70A921172_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1748,
   "height": 1240
  },
  {
   "url": "media/zoomImage_B28B490D_A5A4_A7F7_41E0_C5A70A921172_0_1.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 726
  },
  {
   "url": "media/zoomImage_B28B490D_A5A4_A7F7_41E0_C5A70A921172_0_2.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 363
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D70C94_A5A4_5E14_41C4_FA6A58355F59",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D58C91_A5A4_5EEF_41DC_F2925CD97BCF",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E1ECFB4A_AAF5_6499_41E2_BB63C0DC25CF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E1ECFB4A_AAF5_6499_41E2_BB63C0DC25CF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E1ECFB4A_AAF5_6499_41E2_BB63C0DC25CF"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D70C92_A5A4_5EED_4181_BDF87938A527",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D75C94_A5A4_5E14_41C1_1089E808AA69",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E203DC82_AAF5_7D8E_41DC_41749386E7D2"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D51C91_A5A4_5EEF_41C2_E93F5593D28A",
 "easing": "cubic_in_out"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 4.34,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.34,
  "pitch": 0.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 50.62,
    "class": "TargetPanoramaCameraMovement",
    "end": "this.showPopupImage(this.ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C, null, '90%', '90%', this.FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D, this.FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'paddingRight':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
    "path": "shortest",
    "targetPitch": 4.25,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0.94,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ]
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "minimap",
 "id": "map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_t.png",
 "width": 1667,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463.png",
    "class": "ImageResourceLevel",
    "width": 1667,
    "height": 2500
   },
   {
    "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_lq.png",
    "class": "ImageResourceLevel",
    "width": 209,
    "height": 314,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.16,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 4,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_to_height",
 "initialZoomFactor": 3,
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
 "class": "ImageResource",
 "id": "ImageResource_8098297B_A6F5_A77F_41DB_B3E45FBEF4AA",
 "levels": [
  {
   "url": "media/popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 1536
  },
  {
   "url": "media/popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6_0_1.png",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6_0_2.png",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D61C92_A5A4_5EED_41DC_7875F3D654D0",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E26BFC53_AAF5_7C8E_41DF_ABF747158636"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 51.28,
   "backwardYaw": 179.62,
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
 "hfovMax": 130,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "class": "PanoramaMapLocation",
   "angle": 31.23,
   "y": 1193.36,
   "x": 62.94
  }
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_3406C851_3A90_C762_41C0_9923C335D3DA",
  "this.overlay_280092E2_3A90_4B26_41B8_849A626A36B8",
  "this.overlay_81F77F44_A6CC_BC8A_41C2_5A1FFAEEEAA3"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D03C94_A5A4_5E14_41E2_4B380C4ECC34",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D51C91_A5A4_5EEF_41C8_53BFFDB80376",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Lantai 2 (1) - Copy",
 "id": "map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_t.png",
 "width": 2500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14.png",
    "class": "ImageResourceLevel",
    "width": 2500,
    "height": 1667
   },
   {
    "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_lq.png",
    "class": "ImageResourceLevel",
    "width": 313,
    "height": 209,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "initialZoomFactor": 1,
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
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D7BC92_A5A4_5EED_41D7_BE6C605EF077",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D60C92_A5A4_5EED_41E2_FC693C134BB9",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D7FC92_A5A4_5EED_41D4_4C8FFCE5C0EB",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D62C92_A5A4_5EED_41D7_2EF607B123F3",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D5AC91_A5A4_5EEF_41DB_D4047327BCC6",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D1DC94_A5A4_5E14_41DE_8002643BB427",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 86.69,
   "backwardYaw": -96.52,
   "distance": 1,
   "panorama": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.18,
   "backwardYaw": 111.63,
   "distance": 1,
   "panorama": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0"
  }
 ],
 "hfov": 360,
 "label": "IMG_20260427_113743_00_003",
 "id": "panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF",
 "thumbnailUrl": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
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
   "class": "PanoramaMapLocation",
   "angle": 86.13,
   "y": 1656.86,
   "x": 805.64
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_023878E1_1358_FC40_41B1_61AED61DED92",
  "this.overlay_B3BF056D_A5A4_AE34_41BA_41BBE1DBA020",
  "this.overlay_8160B648_A65D_AC99_41A7_32209B948706",
  "this.overlay_83CD99EC_A65B_E79A_41CA_94332AC5604E",
  "this.overlay_823F0070_A655_E48A_41B6_E5F9E26AB2F3",
  "this.overlay_826782AF_A657_6596_41E3_FF1B0C862F42",
  "this.overlay_8E9FD260_A655_648A_41E3_C9A0D8BE2727",
  "this.overlay_8E956AB5_A64F_A58A_4189_473DDF75B33E",
  "this.overlay_8220521D_A64B_A4BA_41D1_AC23B7254F1C",
  "this.overlay_829C99CD_A6CD_E79A_41E3_B79C8F667C5D",
  "this.overlay_80C891A4_A6CD_678A_41BE_0425CA4DEEA7"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D6DC91_A5A4_5EEF_41E1_353B52D89CE8",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.07,
  "pitch": -3.4
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D1FC94_A5A4_5E14_41D7_EAADDD9AE89D",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D71C94_A5A4_5E14_41BB_DF32683A789C",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D0FC92_A5A4_5EED_41C9_FD52A5E9C12E",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
   "class": "MapPlayListItem",
   "media": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E1EC8B48_AAF5_649A_41D7_256918CCDC65"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D73C94_A5A4_5E14_41D7_C4573E985F86",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D1AC94_A5A4_5E14_41C4_FDBBFF1716DB",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D76C92_A5A4_5EED_41DE_D9D143976466",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D57C91_A5A4_5EEF_41E3_2066C4CEC116",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "id": "FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D",
 "easing": "cubic_in"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D53C91_A5A4_5EEF_41E3_6A5CCCF1FF08",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D06C94_A5A4_5E14_41CE_9C268C54CE54",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D46C91_A5A4_5EEF_41DB_8689912F9C31",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.02,
 "id": "popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6_0_1.png",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 4.25,
 "yaw": 43.76,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D0DC94_A5A4_5E14_41D7_B55F06645924",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 500,
 "id": "FadeInEffect_B03C5BD4_A5A4_5A15_41E1_00C6B5377B09",
 "easing": "cubic_in"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.99,
   "backwardYaw": -6.99,
   "distance": 1,
   "panorama": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.62,
   "backwardYaw": 51.28,
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
 "hfovMax": 130,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "class": "PanoramaMapLocation",
   "angle": 85.32,
   "y": 1218.11,
   "x": 275.9
  }
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_2811B2EA_3A9F_CB26_41CC_41A189179DF0",
  "this.overlay_812745FF_A6CF_6F77_41D1_B3B0601270D6",
  "this.overlay_8F6DB907_A6CF_A495_41BB_743B4C40B4AE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 177.36,
   "backwardYaw": 176.6,
   "distance": 1,
   "panorama": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0,
   "backwardYaw": -162.62,
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
 "hfovMax": 130,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "class": "PanoramaMapLocation",
   "angle": 83.84,
   "y": 1195.5,
   "x": 658.03
  }
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_850D0129_A654_A49B_41E0_47641C1D17B4",
  "this.overlay_84535071_A654_E48B_41E4_CA0083CF7895",
  "this.overlay_84019564_A65F_6C89_41DF_3A7A64F17D4E",
  "this.overlay_84F0807F_A65C_A576_41E2_A508969AE5E9",
  "this.overlay_859535D8_A65B_6FB9_41DB_AC8828A838EB",
  "this.overlay_848CA6DF_A655_6DB6_4194_F8838F17485B",
  "this.overlay_84BD6459_A654_ECBB_41D1_1141152DAA51",
  "this.overlay_848E56D6_A64C_AD89_41E3_EF2350427A26",
  "this.overlay_81767B91_A6CC_BB8A_41D7_652F73F66D09",
  "this.overlay_82150FC2_A6CC_9B8E_41DC_3D6253010306",
  "this.overlay_8E570427_A6CD_AC96_41C1_CF43028E66BF",
  "this.overlay_EE9820CC_AAF5_A599_41E1_4E7D2DC3400B",
  "this.overlay_E0DC042E_AAF5_6C99_41E3_4CD8C97006CE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 176.6,
   "backwardYaw": 177.36,
   "distance": 1,
   "panorama": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.99,
   "backwardYaw": -6.99,
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
 "hfovMax": 130,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "class": "PanoramaMapLocation",
   "angle": -84.96,
   "y": 1204.93,
   "x": 404.47
  }
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_814C5679_A6CF_AD7A_41E2_3BC2EA75E59C",
  "this.overlay_800094C3_A6CF_6D8F_41E0_E5B42B8C7C3D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E24FDC10_AAF5_7C8A_41D3_8CC6FB31CFA5"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
   "class": "MapPlayListItem",
   "media": "this.map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E1ECDB4A_AAF5_6499_41E3_35BA747A847F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -6.04,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_E18A9B88_AAF5_7B9A_41D1_C91DB655C94B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.37,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E2D3ACDA_AAF5_7DBE_41D6_A2A018516F57"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -6.04,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_E1B9EBB6_AAF5_7BF6_41C1_5BDBCFD9788C"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D54C91_A5A4_5EEF_41E0_3F49599ECA96",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
 "buttonToggleHotspots": "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D63C92_A5A4_5EED_41C1_595623F48705",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.64,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E1836B72_AAF5_648E_41DF_44D12C99D39C"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D6DC91_A5A4_5EEF_41C3_B61C4E101F94",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.32,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E2736C28_AAF5_7C9A_4174_BDC221FC5471"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D43C90_A5A4_5EED_41D8_81A155CD02FE",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D62C92_A5A4_5EED_41D8_87CBB4EAC67D",
 "easing": "cubic_in_out"
},
{
 "class": "Video",
 "label": "Virtual Reality (1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81_t.jpg",
 "width": 2240,
 "loop": false,
 "id": "video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81",
 "height": 2240,
 "video": {
  "width": 2240,
  "class": "VideoResource",
  "height": 2240,
  "mp4Url": "media/video_2B1BE67A_2531_BF07_41A6_E8D19C7D1C81.mp4"
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_B3D0CC92_A5A4_5EED_41E4_82C9E6E38728",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_18D01CC6_1348_3440_41A2_BD2321889440_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.72,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 4.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.94,
    "yawSpeed": 93.5,
    "easing": "cubic_in_out",
    "pitchSpeed": 47.04
   },
   {
    "targetYaw": 50.62,
    "class": "TargetPanoramaCameraMovement",
    "end": "this.showPopupImage(this.ImageResource_926983B7_8B97_B83D_41B5_1275CE58E49C, null, '90%', '90%', this.FadeInEffect_9269A3B7_8B97_B83D_41BA_1A11D11D545D, this.FadeOutEffect_9269D3B8_8B97_B833_4197_9413C588D802, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'paddingRight':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
    "path": "shortest",
    "targetPitch": 4.25,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_E2374C97_AAF5_7DB7_41E4_383723D60B78"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_E2559BE2_AAF5_7B8E_41CF_B8F19F6C0E1C"
},
{
 "class": "FadeOutEffect",
 "duration": 500,
 "id": "FadeOutEffect_B03C4BD4_A5A4_5A15_41DE_789AFB980BD3",
 "easing": "cubic_out"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "MapPlayer",
 "buttonZoomIn": "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_B3D18C94_A5A4_5E14_41D8_FCB3FFFC3339",
 "easing": "cubic_in_out"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#003366",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipFontSize": "1.65vmin",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_B156A269_BF46_B846_41CC_86CDE6B7F756",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_B1571269_BF46_B846_41D9_B94D861499DF",
  "this.Container_B1573269_BF46_B846_41AD_E3E55F50C328"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 113.55,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 588.15,
 "top": "0.12%",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "19.601%",
 "width": "84.975%",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "gdl1"
 },
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "3%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "19.67%",
 "width": "84.975%",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "gdl"
 },
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_320C1ADD_3F4A_FD16_41B0_FBCDFB126CCF",
 "left": "1.49%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 240,
 "children": [
  "this.Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
  "this.Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "bottom": "1.99%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 190,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container1772"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "---FLOORPLAN"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "minWidth": 0,
 "top": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "visible": false,
 "class": "UIComponent",
 "data": {
  "name": "UIComponent131556"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "bottom": 0,
 "minWidth": 0,
 "top": 0,
 "backgroundColor": [],
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scaleMode": "custom",
 "borderRadius": 0,
 "visible": false,
 "class": "ZoomImage",
 "data": {
  "name": "ZoomImage131557"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton131558"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 20,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "iconColor": "#000000",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "top": 10,
 "gap": 5,
 "layout": "horizontal",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "paddingTop": 5,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "visible": false,
 "class": "CloseButton",
 "iconBeforeLabel": true,
 "iconWidth": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "id": "IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "toolTip": "Layar Penuh",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081.png",
 "pressedRollOverIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed_rollover.png",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "toolTipTextShadowBlurRadius": 3,
 "height": 58,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "toolTipTextShadowOpacity": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.42,
   "image": "this.AnimatedImageResource_B9C65B92_A5BB_BAED_41D5_588C62A32F96",
   "pitch": 2.8,
   "yaw": -4.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
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
 "data": {
  "label": "Pintu Labmat"
 },
 "maps": [
  {
   "hfov": 17.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 59.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1005,
      "height": 151
     }
    ]
   },
   "pitch": -14.72,
   "yaw": 2.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Laboratorium Pembelajaran Matematika",
   "click": "this.openLink('../Labmath/index.htm', '_self')"
  }
 ],
 "id": "overlay_B30620F7_A5A4_E613_41DF_912F2E83F5F9",
 "data": {
  "label": "Laboratorium Pembelajaran Fisika"
 },
 "maps": [
  {
   "hfov": 59.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 16
     }
    ]
   },
   "pitch": -14.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 21.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 358,
      "height": 1170
     }
    ]
   },
   "pitch": -10.48,
   "yaw": -68.75
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Rak Sepatu"
  }
 ],
 "id": "overlay_82333FC0_A6B5_FB8A_41DA_E653BA62BF4A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 21.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 200
     }
    ]
   },
   "pitch": -10.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 6.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 346
     }
    ]
   },
   "pitch": -4.63,
   "yaw": -84.81
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Alat Pelindung Diri (APD)"
  }
 ],
 "id": "overlay_82DDFCC9_A6B5_BD9B_41BF_D11AA728D48E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 6.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 50,
      "height": 173
     }
    ]
   },
   "pitch": -4.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_807CC53C_A6DB_6CF9_41D1_1D3F37446BD6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'paddingRight':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_8098297B_A6F5_A77F_41DB_B3E45FBEF4AA, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.6,
   "image": "this.AnimatedImageResource_80E8796E_A6F5_A496_41E0_1107B6D5DC8B",
   "pitch": 4.25,
   "yaw": 43.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8F275BCC_A6BD_9B99_41BB_570C4111AC46",
 "maps": [
  {
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_6_0_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 11.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 182,
      "height": 840
     }
    ]
   },
   "pitch": -7.46,
   "yaw": 122.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Ruang Dosen"
  }
 ],
 "id": "overlay_8F655E39_A6DB_9CFA_41B5_6E2848EDDAA4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 11.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_7_1_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 43,
      "height": 200
     }
    ]
   },
   "pitch": -7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 12.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 224
     }
    ]
   },
   "pitch": -13.13,
   "yaw": -108.42
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_80689B47_A6D5_6496_41D9_558CB37D55E3",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_8_1_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 112
     }
    ]
   },
   "pitch": -13.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 6.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 110,
      "height": 189
     }
    ]
   },
   "pitch": -22.69,
   "yaw": -121.69
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kotak Sampah"
  }
 ],
 "id": "overlay_8279BD78_A6CB_BF79_41C5_145A9809E9C2",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 94
     }
    ]
   },
   "pitch": -22.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF, this.camera_E2559BE2_AAF5_7B8E_41CF_B8F19F6C0E1C); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.55,
   "image": "this.AnimatedImageResource_8097496F_A6F5_A496_41A4_56EACB79B6ED",
   "pitch": -20.68,
   "yaw": -96.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8161687C_A6F5_6579_41E4_C82C4CAE7C75",
 "maps": [
  {
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_11_0_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -20.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 5.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 559
     }
    ]
   },
   "pitch": -4.89,
   "yaw": -120.08
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_803CA8F4_A6BC_A589_41E0_922831E71F81",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_13_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 200
     }
    ]
   },
   "pitch": -4.89
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D43C90_A5A4_5EED_41D8_81A155CD02FE, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D5FC91_A5A4_5EEF_41D4_23A05265552B, 'showEffect', false)",
 "camera": "this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1EB3B4A_AAF5_6499_415A_2DB32637C0D1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D47C90_A5A4_5EED_41AF_D5EBD2AE7615, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D5DC90_A5A4_5EED_41AD_BDAF394A08F7, 'showEffect', false)",
 "media": "this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1EB3B4A_AAF5_6499_415A_2DB32637C0D1",
 "start": "this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D57C91_A5A4_5EEF_41E3_2066C4CEC116, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D6DC91_A5A4_5EEF_41E1_353B52D89CE8, 'showEffect', false)",
 "camera": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1EADB4C_AAF5_649A_41DB_6E17C3E9F62C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D54C91_A5A4_5EEF_41E0_3F49599ECA96, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D51C91_A5A4_5EEF_41C8_53BFFDB80376, 'showEffect', false)",
 "media": "this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1EADB4C_AAF5_649A_41DB_6E17C3E9F62C",
 "start": "this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D41C91_A5A4_5EEF_41D6_5CC73C694B5E, 'showEffect', false)",
 "camera": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1EA5B4E_AAF5_6499_41E3_7C5307F08DA5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true, -1, this.effect_B3D46C91_A5A4_5EEF_41DB_8689912F9C31, 'showEffect', false)",
 "media": "this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1EA5B4E_AAF5_6499_41E3_7C5307F08DA5",
 "start": "this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D59C91_A5A4_5EEF_41DF_1CEDB4F5CA60, 'showEffect', false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D5AC91_A5A4_5EEF_41DB_D4047327BCC6, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D51C91_A5A4_5EEF_41C2_E93F5593D28A, 'hideEffect', false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D6DC91_A5A4_5EEF_41C3_B61C4E101F94, 'hideEffect', false)",
 "camera": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1E90B4E_AAF5_6499_41D0_2B6B4EC36DCA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D5FC91_A5A4_5EEF_41D9_7C3A0A15D0C8, 'showEffect', false); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D58C91_A5A4_5EEF_41DC_F2925CD97BCF, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D57C91_A5A4_5EEF_41DE_F1E687D202EF, 'hideEffect', false); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D53C91_A5A4_5EEF_41E3_6A5CCCF1FF08, 'hideEffect', false)",
 "media": "this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1E90B4E_AAF5_6499_41D0_2B6B4EC36DCA",
 "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D65C92_A5A4_5EED_41DD_C8A10345FAF6, 'showEffect', false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D60C92_A5A4_5EED_41CA_322CCB28E377, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D62C92_A5A4_5EED_41D8_87CBB4EAC67D, 'hideEffect', false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D7BC92_A5A4_5EED_41D7_BE6C605EF077, 'hideEffect', false)",
 "camera": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1E8BB4F_AAF5_6497_41CB_3018AFD7A0CE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D68C92_A5A4_5EED_41E0_8D3E8D1E6DA6, 'showEffect', false); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D66C92_A5A4_5EED_41E3_43370C97EB97, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D63C92_A5A4_5EED_41C1_595623F48705, 'hideEffect', false); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D7FC92_A5A4_5EED_41D4_4C8FFCE5C0EB, 'hideEffect', false)",
 "media": "this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1E8BB4F_AAF5_6497_41CB_3018AFD7A0CE",
 "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D70C92_A5A4_5EED_4181_BDF87938A527, 'showEffect', false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D0CC92_A5A4_5EED_41E4_82C9E6E38728, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D61C92_A5A4_5EED_41DC_7875F3D654D0, 'hideEffect', false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D62C92_A5A4_5EED_41D7_2EF607B123F3, 'hideEffect', false)",
 "camera": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1E83B4F_AAF5_6496_41DE_9EF2F27735F7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D76C92_A5A4_5EED_41DE_D9D143976466, 'showEffect', false); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D72C92_A5A4_5EED_41E1_525D83C18BC8, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D0FC92_A5A4_5EED_41C9_FD52A5E9C12E, 'hideEffect', false); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D60C92_A5A4_5EED_41E2_FC693C134BB9, 'hideEffect', false)",
 "media": "this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1E83B4F_AAF5_6496_41DE_9EF2F27735F7",
 "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D7BC94_A5A4_5E14_41D9_C71B3B268653, 'showEffect', false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D71C94_A5A4_5E14_41BB_DF32683A789C, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D73C94_A5A4_5E14_41D7_C4573E985F86, 'hideEffect', false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D0FC94_A5A4_5E14_41DB_17F3DD38431B, 'hideEffect', false)",
 "camera": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E197CB4F_AAF5_6496_41D7_90BBB534463B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D78C92_A5A4_5EED_41C3_10FFA0E3EE4D, 'showEffect', false); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D75C94_A5A4_5E14_41C1_1089E808AA69, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D70C94_A5A4_5E14_41C4_FA6A58355F59, 'hideEffect', false); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D0DC94_A5A4_5E14_41D7_B55F06645924, 'hideEffect', false)",
 "media": "this.panorama_18D01CC6_1348_3440_41A2_BD2321889440",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E197CB4F_AAF5_6496_41D7_90BBB534463B",
 "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, true)"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D07C94_A5A4_5E14_41C3_EB30AFDA1D68, 'showEffect', false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D03C94_A5A4_5E14_41E2_4B380C4ECC34, 'showEffect', false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D1FC94_A5A4_5E14_41D7_EAADDD9AE89D, 'hideEffect', false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D1AC94_A5A4_5E14_41C4_FDBBFF1716DB, 'hideEffect', false); this.trigger('tourEnded')",
 "camera": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E1969B4F_AAF5_6496_41C0_15BC5C906BC6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0); this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, false); this.setComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true, -1, this.effect_B3D0AC94_A5A4_5E14_41E1_C976603C7103, 'showEffect', false); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, false); this.setComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true, -1, this.effect_B3D06C94_A5A4_5E14_41CE_9C268C54CE54, 'showEffect', false); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false); this.setComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, false, -1, this.effect_B3D1DC94_A5A4_5E14_41DE_8002643BB427, 'hideEffect', false); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false); this.setComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, false, -1, this.effect_B3D18C94_A5A4_5E14_41D8_FCB3FFFC3339, 'hideEffect', false)",
 "media": "this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E1969B4F_AAF5_6496_41C0_15BC5C906BC6",
 "start": "this.keepComponentVisibility(this.Container_3DF0FE9C_1B6B_FDA4_41A2_73E9F65BFA2C, true); this.keepComponentVisibility(this.Image_B654614C_A5AC_A675_41C4_6D473AA17B3D, true); this.keepComponentVisibility(this.Container_B1A4ED6C_A5A4_7E35_41E3_56759BA589E1, true); this.keepComponentVisibility(this.Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06, true)"
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "Floor Plan big"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_37D66D51_27F9_B2C5_4192_CC495446A0D4",
 "left": "15%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "15%",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "top": "10%",
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "bottom": "10%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, false, 0, null, null, false)",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "progressBackgroundColorRatios": [
  0.01
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lantai 1",
   "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_E2678C3E_AAF5_7CF9_41AB_8E2A1B898DB4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.1,
   "image": "this.AnimatedImageResource_8097E96F_A6F5_A496_41C8_2FFB4159A707",
   "pitch": -39.19,
   "yaw": -15.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_80D50356_A6F5_A489_41C8_92B6172C1117",
 "maps": [
  {
   "hfov": 16.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -39.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.56,
   "image": "this.AnimatedImageResource_8097996F_A6F5_A496_41D8_DFF9A13E8728",
   "pitch": -8.22,
   "yaw": 20.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lantai 2",
   "click": "this.openLink('../Lantai 2/index.htm', '_self')"
  }
 ],
 "id": "overlay_8E03C53C_A6F5_6CFA_41D0_780CB96FDDDD",
 "data": {
  "label": "Lantai 2"
 },
 "maps": [
  {
   "hfov": 20.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -8.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 58.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1044,
      "height": 1135
     }
    ]
   },
   "pitch": -17.28,
   "yaw": 59.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Tangga ke Lantai 2"
  }
 ],
 "id": "overlay_849C3F49_A67D_9C9A_41E1_8FD94536211F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 58.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 184,
      "height": 200
     }
    ]
   },
   "pitch": -17.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 27.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 454,
      "height": 905
     }
    ]
   },
   "pitch": -12.2,
   "yaw": -39.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_8330B47B_A677_6D7E_41D0_7661F675535D",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 27.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -12.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 15.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 248,
      "height": 524
     }
    ]
   },
   "pitch": -7.4,
   "yaw": -98.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_812B1E83_A674_9D8F_41E4_9FC55CCDB7CE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 15.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 94,
      "height": 200
     }
    ]
   },
   "pitch": -7.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 18.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 304,
      "height": 442
     }
    ]
   },
   "pitch": -6.62,
   "yaw": -114.16
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_83BE67B5_A64B_AB8B_418F_D50BB9FB73B9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 18.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 137,
      "height": 200
     }
    ]
   },
   "pitch": -6.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 3.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 173
     }
    ]
   },
   "pitch": -14.6,
   "yaw": -82.46
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kotak Sampah"
  }
 ],
 "id": "overlay_82D9D76D_A64D_EC9A_41B7_C3682516990B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 3.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 86
     }
    ]
   },
   "pitch": -14.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 8.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 140,
      "height": 217
     }
    ]
   },
   "pitch": -13.33,
   "yaw": -56.49
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kursi Tunggu"
  }
 ],
 "id": "overlay_8159377D_A64D_AB7B_41C3_AA26CFC8B822",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 70,
      "height": 108
     }
    ]
   },
   "pitch": -13.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 11.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 186,
      "height": 534
     }
    ]
   },
   "pitch": -6.55,
   "yaw": 95.4
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Alat Pelindung Diri (APD)"
  }
 ],
 "id": "overlay_82A180AA_A654_A59E_41D2_0D6EB0052B2E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 11.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 200
     }
    ]
   },
   "pitch": -6.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 14.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 230,
      "height": 214
     }
    ]
   },
   "pitch": -12.94,
   "yaw": -136.54
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_83385661_A655_EC8A_41CC_00DD78F35CCE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 14.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 107
     }
    ]
   },
   "pitch": -12.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 12.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 230
     }
    ]
   },
   "pitch": -13.32,
   "yaw": 125.04
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kursi Tunggu"
  }
 ],
 "id": "overlay_830815C4_A65D_AF89_41C6_DED740C5D2E8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_11_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 115
     }
    ]
   },
   "pitch": -13.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 5.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 85,
      "height": 292
     }
    ]
   },
   "pitch": -3.31,
   "yaw": 102.88
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Rak Sepatu"
  }
 ],
 "id": "overlay_82321A0C_A65F_649A_41CB_EFB9F583E6F9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 5.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_12_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 42,
      "height": 146
     }
    ]
   },
   "pitch": -3.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA, this.camera_E2736C28_AAF5_7C9A_4174_BDC221FC5471); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.68,
   "image": "this.AnimatedImageResource_80ED896D_A6F5_A49B_41A0_F2D472E9818D",
   "pitch": 5.57,
   "yaw": 46.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81B7FD45_A6CB_9C8B_41D3_98901F1014E0",
 "maps": [
  {
   "hfov": 20.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 5.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF, this.camera_E24FDC10_AAF5_7C8A_41D3_8CC6FB31CFA5); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.9,
   "image": "this.AnimatedImageResource_80EC396D_A6F5_A49B_41D8_D036956A7B2C",
   "pitch": -16.9,
   "yaw": 111.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81A6D461_A6CB_6C8A_41DF_BB7A691F3527",
 "maps": [
  {
   "hfov": 15.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -16.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69, this.camera_E25AFBF9_AAF5_7B7A_41C3_D8ABDAD72C9C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.32,
   "image": "this.AnimatedImageResource_80ECD96D_A6F5_A49B_41E1_725D74AFC74C",
   "pitch": -30.5,
   "yaw": -162.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81457F0C_A6F4_BC9A_41B1_E5049EF2A302",
 "maps": [
  {
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -30.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 2.87,
   "image": "this.AnimatedImageResource_E1E4DB42_AAF5_6489_41E4_0611B4108A3E",
   "pitch": 4.47,
   "yaw": 15.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE22D3C5_AAF5_AB8B_41B7_1CF698C83BE9",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "hfov": 2.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 176,
      "height": 72
     }
    ]
   },
   "pitch": 4.24,
   "yaw": 22.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE2123C5_AAF5_AB8B_41E1_27A66E9DF28A",
 "data": {
  "label": "Toilet"
 },
 "maps": [
  {
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_17_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 4.24
  }
 ]
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1159.37,
  "x": 36.15,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1159.37,
  "width": 53.59,
  "x": 36.15,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "id": "overlay_1AE9A4DF_17EB_EDA4_41AF_434A923CD2CA",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1184.12,
  "x": 249.11,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1184.12,
  "width": 53.59,
  "x": 249.11,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "id": "overlay_19B73809_17F4_64AF_4198_BFE07171FADA",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1170.94,
  "x": 377.67,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1170.94,
  "width": 53.59,
  "x": 377.67,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "id": "overlay_190D6D4A_17F4_9CAD_41AD_AE676A1F0D78",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1161.5,
  "x": 631.23,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1161.5,
  "width": 53.59,
  "x": 631.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "id": "overlay_1A05496D_17F4_E767_4199_0CFF1F628473",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1157.41,
  "x": 765.49,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1157.41,
  "width": 53.59,
  "x": 765.49,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "id": "overlay_1A6BE89E_17F4_E5A5_41AC_778EF90968F6",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1170.94,
  "x": 1290.06,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1170.94,
  "width": 53.59,
  "x": 1290.06,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "id": "overlay_19D36A30_17F4_A4FC_41B2_FB1697C0EC8D",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1622.86,
  "x": 778.85,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1622.86,
  "width": 53.59,
  "x": 778.85,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "id": "overlay_1A0A66F8_17F4_6D6C_41A6_0AB491743C39",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 53.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1978.81,
  "x": 764.78,
  "offsetY": 0,
  "height": 67.99,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": true,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 67.99,
  "y": 1978.81,
  "width": 53.59,
  "x": 764.78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_1B0E5F5C_17EC_9CA5_41B4_240F73C6E463_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 53,
     "height": 67
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "id": "overlay_19F9CBD6_17F5_9BA5_4197_FFC573153A72",
 "data": {
  "label": "Image"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 59.21,
 "id": "overlay_3406C851_3A90_C762_41C0_9923C335D3DA",
 "yaw": 55.15,
 "bleachingDistance": 0.58
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1154,
      "height": 1039
     }
    ]
   },
   "pitch": 2.04,
   "yaw": 50.57
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_280092E2_3A90_4B26_41B8_849A626A36B8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 2.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE, this.camera_E1B9EBB6_AAF5_7BF6_41C1_5BDBCFD9788C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.75,
   "image": "this.AnimatedImageResource_80E2E96A_A6F5_A499_41C5_A95FF1B7FF6D",
   "pitch": -19.64,
   "yaw": 51.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81F77F44_A6CC_BC8A_41C2_5A1FFAEEEAA3",
 "maps": [
  {
   "hfov": 19.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ]
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1591.24,
  "x": 1116.43,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 1591.1,
  "width": 43.62,
  "x": 1116.16,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "id": "overlay_02595D63_2A24_1369_4184_974001AFE141",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1361.87,
  "x": 1132.37,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 1361.74,
  "width": 43.62,
  "x": 1132.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "id": "overlay_0FAC13D2_2A24_17AB_41B0_EE0012666144",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 1245.85,
  "x": 1162.92,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 1245.71,
  "width": 43.62,
  "x": 1162.65,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "id": "overlay_0E84F714_2A27_F0AF_41B1_E0EE4AA39B58",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 982.85,
  "x": 1184.35,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 982.72,
  "width": 43.62,
  "x": 1184.22,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "id": "overlay_0C2A42E0_2A24_3167_418D_00F498BB8F5A",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 806.67,
  "x": 1189.98,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 806.54,
  "width": 43.62,
  "x": 1189.84,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "id": "overlay_0039477D_2A24_7F59_41B0_4AC7AC68A709",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 827.44,
  "x": 1622.72,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 827.3,
  "width": 43.62,
  "x": 1622.45,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "id": "overlay_0D15C41D_2A24_10D9_41B2_AAA56CEB7B6C",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 830.92,
  "x": 1989.55,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 830.79,
  "width": 43.62,
  "x": 1989.42,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "id": "overlay_0D481E59_2A24_3159_4196_9F2BF3543B3E",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 43.62,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 20
    }
   ]
  },
  "y": 349.54,
  "x": 1200.29,
  "offsetY": 0,
  "height": 55.06,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "height": 55.06,
  "y": 349.41,
  "width": 43.62,
  "x": 1200.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0EA0810D_2A24_30B9_41A7_BE6E28AD0F14_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 43,
     "height": 55
    }
   ]
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "id": "overlay_02F28305_2A24_F0A9_41A5_35A6DFFC3541",
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.12,
   "image": "this.AnimatedImageResource_80EC996D_A6F5_A49B_41E1_547CF3DE0D54",
   "pitch": 3.8,
   "yaw": -2.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
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
 "data": {
  "label": "pintu labfis"
 },
 "maps": [
  {
   "hfov": 14.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 59.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 989,
      "height": 150
     }
    ]
   },
   "pitch": -9.02,
   "yaw": -1.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Laboratorium Pembelajaran Matematika",
   "click": "this.openLink('../Labmath/index.htm', '_self')"
  }
 ],
 "id": "overlay_B3BF056D_A5A4_AE34_41BA_41BBE1DBA020",
 "data": {
  "label": "Laboratorium Pembelajaran Matematika"
 },
 "maps": [
  {
   "hfov": 59.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 105,
      "height": 16
     }
    ]
   },
   "pitch": -9.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 27.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 457,
      "height": 999
     }
    ]
   },
   "pitch": -9.92,
   "yaw": -52.7
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Alat Pelindung Diri (APD)"
  }
 ],
 "id": "overlay_8160B648_A65D_AC99_41A7_32209B948706",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 27.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 91,
      "height": 200
     }
    ]
   },
   "pitch": -9.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 40.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 682,
      "height": 1239
     }
    ]
   },
   "pitch": -9.92,
   "yaw": 49.3
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Rak Sepatu"
  }
 ],
 "id": "overlay_83CD99EC_A65B_E79A_41CA_94332AC5604E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 40.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 110,
      "height": 200
     }
    ]
   },
   "pitch": -9.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 9.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 217
     }
    ]
   },
   "pitch": -17.28,
   "yaw": 101.99
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Sofa Tunggu"
  }
 ],
 "id": "overlay_823F0070_A655_E48A_41B6_E5F9E26AB2F3",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 108
     }
    ]
   },
   "pitch": -17.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 10.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 169,
      "height": 263
     }
    ]
   },
   "pitch": -32.01,
   "yaw": 122.01
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kotak Sampah"
  }
 ],
 "id": "overlay_826782AF_A657_6596_41E3_FF1B0C862F42",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 84,
      "height": 131
     }
    ]
   },
   "pitch": -32.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 25.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 430,
      "height": 1406
     }
    ]
   },
   "pitch": -10.67,
   "yaw": 142.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Ruang Dosen"
  }
 ],
 "id": "overlay_8E9FD260_A655_648A_41E3_C9A0D8BE2727",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 25.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 200
     }
    ]
   },
   "pitch": -10.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 7.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 760
     }
    ]
   },
   "pitch": -7.27,
   "yaw": -113.89
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Ruang Dosen"
  }
 ],
 "id": "overlay_8E956AB5_A64F_A58A_4189_473DDF75B33E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 7.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 33,
      "height": 200
     }
    ]
   },
   "pitch": -7.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 83.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 1681,
      "height": 1117
     }
    ]
   },
   "pitch": -42.21,
   "yaw": -151.86
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kursi Tunggu"
  }
 ],
 "id": "overlay_8220521D_A64B_A4BA_41D1_AC23B7254F1C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 83.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 132
     }
    ]
   },
   "pitch": -42.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_E2D3ACDA_AAF5_7DBE_41D6_A2A018516F57); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.43,
   "image": "this.AnimatedImageResource_80EA096D_A6F5_A49B_41E4_54AD89A16751",
   "pitch": -21.82,
   "yaw": -85.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_829C99CD_A6CD_E79A_41E3_B79C8F667C5D",
 "maps": [
  {
   "hfov": 15.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -21.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D01CC6_1348_3440_41A2_BD2321889440, this.camera_E2201CC1_AAF5_7D8A_41C9_8AAD50B19ADC); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.7,
   "image": "this.AnimatedImageResource_80EAB96D_A6F5_A49B_41DB_4215F811116C",
   "pitch": -19.17,
   "yaw": 86.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_80C891A4_A6CD_678A_41BE_0425CA4DEEA7",
 "maps": [
  {
   "hfov": 15.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 296,
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
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2811B2EA_3A9F_CB26_41CC_41A189179DF0",
 "data": {
  "label": "L"
 },
 "maps": [
  {
   "hfov": 8.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 13.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7, this.camera_E203DC82_AAF5_7D8E_41DC_41749386E7D2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.39,
   "image": "this.AnimatedImageResource_80E1596A_A6F5_A49E_41A3_DD67463CDD61",
   "pitch": -22.19,
   "yaw": -6.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_812745FF_A6CF_6F77_41D1_B3B0601270D6",
 "maps": [
  {
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC, this.camera_E2374C97_AAF5_7DB7_41E4_383723D60B78); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.05,
   "image": "this.AnimatedImageResource_80E1196B_A6F5_A49F_41B6_79C09971D0D0",
   "pitch": -15.02,
   "yaw": 179.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8F6DB907_A6CF_A495_41BB_743B4C40B4AE",
 "maps": [
  {
   "hfov": 16.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -15.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 15.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 253,
      "height": 475
     }
    ]
   },
   "pitch": -5.57,
   "yaw": 39.85
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Alat Pelindung Diri (APD)"
  }
 ],
 "id": "overlay_850D0129_A654_A49B_41E0_47641C1D17B4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 200
     }
    ]
   },
   "pitch": -5.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 8.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 288
     }
    ]
   },
   "pitch": -3.12,
   "yaw": 55.63
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Rak Sepatu"
  }
 ],
 "id": "overlay_84535071_A654_E48B_41E4_CA0083CF7895",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 144
     }
    ]
   },
   "pitch": -3.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 34.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 587,
      "height": 551
     }
    ]
   },
   "pitch": 0.22,
   "yaw": 110.75
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Majalah Dinding"
  }
 ],
 "id": "overlay_84019564_A65F_6C89_41DF_3A7A64F17D4E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 34.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 187
     }
    ]
   },
   "pitch": 0.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 25.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 423,
      "height": 576
     }
    ]
   },
   "pitch": -8.77,
   "yaw": -57.78
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_84F0807F_A65C_A576_41E2_A508969AE5E9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 25.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 146,
      "height": 200
     }
    ]
   },
   "pitch": -8.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 16.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 273,
      "height": 553
     }
    ]
   },
   "pitch": -7.81,
   "yaw": -110.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_859535D8_A65B_6FB9_41DB_AC8828A838EB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 16.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 200
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 25.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 417,
      "height": 532
     }
    ]
   },
   "pitch": -7.97,
   "yaw": -133.43
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Lemari Barang"
  }
 ],
 "id": "overlay_848CA6DF_A655_6DB6_4194_F8838F17485B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 25.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 156,
      "height": 200
     }
    ]
   },
   "pitch": -7.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 13.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 214,
      "height": 187
     }
    ]
   },
   "pitch": -11.96,
   "yaw": -77.26
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kursi Tunggu"
  }
 ],
 "id": "overlay_84BD6459_A654_ECBB_41D1_1141152DAA51",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 107,
      "height": 93
     }
    ]
   },
   "pitch": -11.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 36.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 613,
      "height": 669
     }
    ]
   },
   "pitch": -9.35,
   "yaw": 7.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Tangga ke Lantai 2"
  }
 ],
 "id": "overlay_848E56D6_A64C_AD89_41E3_EF2350427A26",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 36.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 199
     }
    ]
   },
   "pitch": -9.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7, this.camera_E26BFC53_AAF5_7C8E_41DF_ABF747158636); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.17,
   "image": "this.AnimatedImageResource_80EFA96C_A6F5_A499_41D6_BA2E77535428",
   "pitch": -24.08,
   "yaw": 177.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81767B91_A6CC_BB8A_41D7_652F73F66D09",
 "maps": [
  {
   "hfov": 15.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -24.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 21.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 350,
      "height": 301
     }
    ]
   },
   "pitch": -17.71,
   "yaw": -160.91
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Meja Tunggu"
  }
 ],
 "id": "overlay_82150FC2_A6CC_9B8E_41DC_3D6253010306",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 21.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_13_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 175,
      "height": 150
     }
    ]
   },
   "pitch": -17.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D5F0D5_1349_CC43_414C_531D97C056B0, this.camera_E21E8C6D_AAF5_7C9B_41E1_0EA431EF7DBA); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.3,
   "image": "this.AnimatedImageResource_8EE9E612_A6CD_EC8E_41D3_E39485DFE053",
   "pitch": -42.59,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E570427_A6CD_AC96_41C1_CF43028E66BF",
 "maps": [
  {
   "hfov": 15.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -42.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 2.87,
   "image": "this.AnimatedImageResource_E1E72B40_AAF5_648A_41B6_931548A8CE26",
   "pitch": 3.66,
   "yaw": -20.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE9820CC_AAF5_A599_41E1_4E7D2DC3400B",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "hfov": 2.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 176,
      "height": 73
     }
    ]
   },
   "pitch": 3.6,
   "yaw": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E0DC042E_AAF5_6C99_41E3_4CD8C97006CE",
 "data": {
  "label": "Toilet"
 },
 "maps": [
  {
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_16_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": 3.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18D0788B_1348_5CC7_4191_217370E98EAE, this.camera_E18A9B88_AAF5_7B9A_41D1_C91DB655C94B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.39,
   "image": "this.AnimatedImageResource_80E1C96B_A6F5_A49F_41CC_92E89B62D266",
   "pitch": -22.19,
   "yaw": -6.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_814C5679_A6CF_AD7A_41E2_3BC2EA75E59C",
 "maps": [
  {
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -22.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3A89CE_1349_DC40_4197_496928E9DA69, this.camera_E1836B72_AAF5_648E_41DF_44D12C99D39C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.13,
   "image": "this.AnimatedImageResource_80E1896B_A6F5_A49F_419E_CADE79741898",
   "pitch": -24.46,
   "yaw": 176.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_800094C3_A6CF_6D8F_41E0_E5B42B8C7C3D",
 "maps": [
  {
   "hfov": 15.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -24.46
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": true,
 "id": "IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "toolTip": "VR Mode",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7.png",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "push",
 "toolTipTextShadowBlurRadius": 3,
 "height": 58,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "rollOverIconURL": "skin/IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7_rollover.png",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 },
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "id": "IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "toolTip": "Nonaktifkan Hotspot",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781.png",
 "pressedRollOverIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed_rollover.png",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "toolTipTextShadowBlurRadius": 3,
 "height": 58,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 },
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": true,
 "id": "IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "toolTip": "Gyroscope",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250.png",
 "pressedRollOverIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed_rollover.png",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "toolTipTextShadowBlurRadius": 3,
 "height": 58,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_B156C269_BF46_B846_41B6_1BAAE2858250_pressed.png",
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A7361280_BCBD_AC04_41C9_358137CF7140",
 "left": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 32,
 "horizontalAlign": "center",
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "4.75%",
 "iconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A7361280_BCBD_AC04_41C9_358137CF7140_pressed.png",
 "cursor": "hand",
 "data": {
  "name": "Button37510"
 }
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
 "left": "12%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 32,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "bottom": "27.18%",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "iconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291.png",
 "rollOverIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291_pressed.png",
 "cursor": "hand",
 "data": {
  "name": "Button37499"
 }
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Floor Plan mini"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": "0%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#003366",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipFontSize": "1.65vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "fade_out_fade_in",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "bottom": "0%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.setComponentVisibility(this.Container_37D6AD51_27F9_B2C5_41A2_C4C8DEAB890B, true, 0, null, null, false)",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 0,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_B1571269_BF46_B846_41D9_B94D861499DF",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 110,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "gap": 10,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "button menu sup"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_B1573269_BF46_B846_41AD_E3E55F50C328",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.IconButton_B156D269_BF46_B846_41E3_844E5B5A8AE7",
  "this.IconButton_B156C269_BF46_B846_41B6_1BAAE2858250",
  "this.IconButton_B156E269_BF46_B846_41E0_1BA0FC1CC781",
  "this.IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0",
  "this.IconButton_B1569269_BF46_B846_41C8_6F2DFDD9F081",
  "this.IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "59.417%",
 "width": "91.265%",
 "top": "14.96%",
 "gap": 3,
 "layout": "vertical",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll"
},
{
 "maxHeight": 222,
 "propagateClick": false,
 "id": "Image_B654614C_A5AC_A675_41C4_6D473AA17B3D",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_B654614C_A5AC_A675_41C4_6D473AA17B3D.png",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "width": "78%",
 "minWidth": 1,
 "height": "58%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "class": "Image",
 "data": {
  "name": "gdl1"
 },
 "maxWidth": 2000
},
{
 "maxHeight": 222,
 "propagateClick": false,
 "id": "Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_B6F4E51B_A5AB_EE13_41D8_CEFDFEB53C06.png",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "width": "78%",
 "minWidth": 1,
 "height": "58%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "class": "Image",
 "data": {
  "name": "gdl"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_B0DBDFD9_BF4E_E879_41D9_B737EF8BC042",
 "left": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 190,
 "children": [
  "this.MapViewer"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 190,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.24,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "minimap"
 },
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_0458057F_17F5_EF63_41B5_2CE2DF0373FD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.IconButton_A2D1C7F9_BCBB_B404_41D2_ED3736EBD291",
  "this.IconButton_A7361280_BCBD_AC04_41C9_358137CF7140"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "54.211%",
 "width": "20.833%",
 "top": "0%",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "zoom in out"
 },
 "overflow": "scroll"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_B9C65B92_A5BB_BAED_41D5_588C62A32F96",
 "levels": [
  {
   "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E8796E_A6F5_A496_41E0_1107B6D5DC8B",
 "levels": [
  {
   "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_8097496F_A6F5_A496_41A4_56EACB79B6ED",
 "levels": [
  {
   "url": "media/panorama_18D01CC6_1348_3440_41A2_BD2321889440_0_HS_11_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_8097E96F_A6F5_A496_41C8_2FFB4159A707",
 "levels": [
  {
   "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_8097996F_A6F5_A496_41D8_DFF9A13E8728",
 "levels": [
  {
   "url": "media/panorama_18D002C8_1348_4C40_418B_91BB3F0E51DA_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80ED896D_A6F5_A49B_41A0_F2D472E9818D",
 "levels": [
  {
   "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_13_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80EC396D_A6F5_A49B_41D8_D036956A7B2C",
 "levels": [
  {
   "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_14_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80ECD96D_A6F5_A49B_41E1_725D74AFC74C",
 "levels": [
  {
   "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_15_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E1E4DB42_AAF5_6489_41E4_0611B4108A3E",
 "levels": [
  {
   "url": "media/panorama_18D5F0D5_1349_CC43_414C_531D97C056B0_0_HS_16_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E2E96A_A6F5_A499_41C5_A95FF1B7FF6D",
 "levels": [
  {
   "url": "media/panorama_18D0E997_1348_5CC0_41AC_A55305EE68DC_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80EC996D_A6F5_A49B_41E1_547CF3DE0D54",
 "levels": [
  {
   "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80EA096D_A6F5_A49B_41E4_54AD89A16751",
 "levels": [
  {
   "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_11_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80EAB96D_A6F5_A49B_41DB_4215F811116C",
 "levels": [
  {
   "url": "media/panorama_18D1E6D0_1348_3440_41B1_0006B0CFE8CF_0_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E1596A_A6F5_A49E_41A3_DD67463CDD61",
 "levels": [
  {
   "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E1196B_A6F5_A49F_41B6_79C09971D0D0",
 "levels": [
  {
   "url": "media/panorama_18D0788B_1348_5CC7_4191_217370E98EAE_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80EFA96C_A6F5_A499_41D6_BA2E77535428",
 "levels": [
  {
   "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_8EE9E612_A6CD_EC8E_41D3_E39485DFE053",
 "levels": [
  {
   "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_14_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E1E72B40_AAF5_648A_41B6_931548A8CE26",
 "levels": [
  {
   "url": "media/panorama_1F3A89CE_1349_DC40_4197_496928E9DA69_0_HS_15_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E1C96B_A6F5_A49F_41CC_92E89B62D266",
 "levels": [
  {
   "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_80E1896B_A6F5_A49F_419E_CADE79741898",
 "levels": [
  {
   "url": "media/panorama_18D06EBD_1348_74C3_41AE_5ACF451956E7_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "id": "IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 60,
 "minHeight": 1,
 "toolTip": "Pilihan",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8.png",
 "pressedRollOverIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed_rollover.png",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "toolTipTextShadowBlurRadius": 3,
 "click": "if(!this.Container_B1573269_BF46_B846_41AD_E3E55F50C328.get('visible')){ this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_B1573269_BF46_B846_41AD_E3E55F50C328, false, 0, null, null, false) }",
 "height": 60,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_B1570269_BF46_B846_41E5_85A4CDAA64C8_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 },
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "id": "IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 45.5,
 "minHeight": 0,
 "toolTip": "Ruangan",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0.png",
 "pressedRollOverIconURL": "skin/IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0_pressed_rollover.png",
 "minWidth": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "toolTipTextShadowBlurRadius": 3,
 "height": 51.5,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "rollOverIconURL": "skin/IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0_rollover.png",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_81807A14_A3D3_C8C2_41D2_2FB04763F4E0_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Button1170"
 },
 "click": "document.getElementById('roomModal').style.display='flex'",
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": false,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "id": "IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 44,
 "minHeight": 0,
 "toolTip": "Panduan",
 "horizontalAlign": "center",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.65vmin",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6.png",
 "pressedRollOverIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_pressed_rollover.png",
 "minWidth": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "push",
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.showPopupImage(this.ImageResource_B03CABD4_A5A4_5A15_41D8_979EE39A80FC, null, '90%', '90%', this.FadeInEffect_B03C5BD4_A5A4_5A15_41E1_00C6B5377B09, this.FadeOutEffect_B03C4BD4_A5A4_5A15_41DE_789AFB980BD3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'pressedBorderSize':0,'paddingRight':5,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "height": 50,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "rollOverIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_rollover.png",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_94F08154_8BFA_FF0A_41A0_A685D9FB33B6_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "data": {
  "name": "Information"
 },
 "toolTipTextShadowOpacity": 0
}],
 "width": "100%"
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
