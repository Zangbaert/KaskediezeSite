// Created by iWeb 3.0.4 local-build-20160428

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.kaskedieze.nl/Kaskedieze/Fotoalbums/Fotoalbums_files/rss.xml",true,255,["Nog geen foto's","%d foto","%d foto's"],["","%d fragment","%d fragmenten"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.kaskedieze.nl/Kaskedieze/Fotoalbums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget9'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.kaskedieze.nl/Kaskedieze/Fotoalbums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(258,193),new IWSize(258,44),new IWSize(309,252),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Fotoalbums_files/ul.png'),IWCreateImage('Fotoalbums_files/top.png'),IWCreateImage('Fotoalbums_files/ur.png'),IWCreateImage('Fotoalbums_files/right.png'),IWCreateImage('Fotoalbums_files/lr.png'),IWCreateImage('Fotoalbums_files/bottom.png'),IWCreateImage('Fotoalbums_files/ll.png'),IWCreateImage('Fotoalbums_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget9',null,'widget10',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Fotoalbums_files/FotoalbumsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
