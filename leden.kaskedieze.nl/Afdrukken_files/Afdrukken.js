// Created by iWeb 3.0.4 local-build-20170504

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Afdrukken_files/Watercolor_iweb_01.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_02.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_04.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_08.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_16.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_14.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_13.png'),IWCreateImage('Afdrukken_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Afdrukken_files/AfdrukkenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
