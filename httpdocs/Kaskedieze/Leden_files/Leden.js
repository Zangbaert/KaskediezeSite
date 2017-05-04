// Created by iWeb 3.0.4 local-build-20161027

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-1.0000),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-1.0000),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Leden_files/LedenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
