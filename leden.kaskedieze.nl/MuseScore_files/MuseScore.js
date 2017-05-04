// Created by iWeb 3.0.4 local-build-20170504

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,320),url:'MuseScore_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'MuseScore_files/stroke_1.png'},{rect:new IWRect(3,-3,554,6),url:'MuseScore_files/stroke_2.png'},{rect:new IWRect(557,-3,6,6),url:'MuseScore_files/stroke_3.png'},{rect:new IWRect(557,3,6,320),url:'MuseScore_files/stroke_4.png'},{rect:new IWRect(557,323,6,6),url:'MuseScore_files/stroke_5.png'},{rect:new IWRect(3,323,554,6),url:'MuseScore_files/stroke_6.png'},{rect:new IWRect(-3,323,6,6),url:'MuseScore_files/stroke_7.png'}],new IWSize(560,326))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('MuseScore_files/MuseScoreMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
