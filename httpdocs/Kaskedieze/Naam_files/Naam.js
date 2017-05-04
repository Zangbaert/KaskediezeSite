// Created by iWeb 3.0.4 local-build-20140404

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Naam_files/Watercolor_iweb_01.png'),IWCreateImage('Naam_files/Watercolor_iweb_02.png'),IWCreateImage('Naam_files/Watercolor_iweb_04.png'),IWCreateImage('Naam_files/Watercolor_iweb_08.png'),IWCreateImage('Naam_files/Watercolor_iweb_16.png'),IWCreateImage('Naam_files/Watercolor_iweb_14.png'),IWCreateImage('Naam_files/Watercolor_iweb_13.png'),IWCreateImage('Naam_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(-0.3420,-0.9397),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Naam_files/NaamMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
