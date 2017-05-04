// Created by iWeb 3.0.4 local-build-20170308

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,6,40),url:'Contact_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Contact_files/stroke_1.png'},{rect:new IWRect(3,-3,117,6),url:'Contact_files/stroke_2.png'},{rect:new IWRect(120,-3,6,6),url:'Contact_files/stroke_3.png'},{rect:new IWRect(120,3,6,40),url:'Contact_files/stroke_4.png'},{rect:new IWRect(120,43,6,6),url:'Contact_files/stroke_5.png'},{rect:new IWRect(3,43,117,6),url:'Contact_files/stroke_6.png'},{rect:new IWRect(-3,43,6,6),url:'Contact_files/stroke_7.png'}],new IWSize(123,46)),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.9781,0.2079),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
