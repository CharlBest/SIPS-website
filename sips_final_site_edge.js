/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['didact-gothic, sans-serif']='<script src=\"http://use.edgefonts.net/didact-gothic:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'contact2',
            display:'none',
            type:'image',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"contact.jpg",'0%','0%']
         },
         {
            id:'courses2',
            display:'none',
            type:'image',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"courses.jpg",'0%','0%']
         },
         {
            id:'gallery2',
            display:'none',
            type:'image',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gallery.jpg",'0%','0%']
         },
         {
            id:'home2',
            type:'image',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"home.jpg",'0%','0%']
         },
         {
            id:'travel2',
            display:'none',
            type:'image',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"travel.jpg",'0%','0%','100%','auto']
         },
         {
            id:'main',
            type:'image',
            rect:['448px','41px','1031px','773px','auto','auto'],
            clip:['rect(0px 1031pxpx 773pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"main.png",'0px','0px','100%','100%']
         },
         {
            id:'logo',
            type:'image',
            rect:['461px','17px','237px','109px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"logo1.png",'0px','0px']
         },
         {
            id:'enroll_breath',
            type:'rect',
            rect:['616','302','auto','auto','auto','auto']
         },
         {
            id:'HOME',
            type:'text',
            rect:['513px','337px','51px','77px','auto','auto'],
            cursor:['pointer'],
            text:"HOME",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'The-Institute',
            display:'none',
            type:'image',
            rect:['600px','421px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"The-Institute-0903201329.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Campus--Studio',
            display:'none',
            type:'image',
            rect:['600px','462px','35px','37px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Campus-%26-Studio-0903201334.png",'0px','0px'],
            transform:[]
         },
         {
            id:'ENROLL',
            type:'text',
            rect:['603px','293px','64px','61px','auto','auto'],
            cursor:['pointer'],
            text:"<br><br>ENROLL",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Group3',
            type:'group',
            rect:['643','429','362','262','auto','auto'],
            c:[
            {
               id:'text_background',
               type:'rect',
               rect:['322px','0px','362px','262px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'heading_background',
               type:'rect',
               rect:['108px','-35px','147px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'text',
               type:'text',
               tag:'p',
               rect:['0px','0px','362px','262px','auto','auto'],
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(255,255,255,1.00)","normal","none","normal"],
               transform:[]
            },
            {
               id:'heading',
               type:'text',
               rect:['21px','-35px','324px','24px','auto','auto'],
               text:"Welcome!",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         },
         {
            id:'The-Founder',
            display:'none',
            type:'image',
            rect:['601px','500px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"The-Founder-0903201335.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Lectors',
            display:'none',
            type:'image',
            rect:['601px','541px','35px','38px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Lectors-0903201339.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Current-Students',
            display:'none',
            type:'image',
            rect:['601px','581px','35px','38px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Current-Students-0903201340.png",'0px','0px'],
            transform:[]
         },
         {
            id:'COURSES',
            type:'text',
            rect:['503px','418px','64px','77px','auto','auto'],
            cursor:['pointer'],
            text:"COURSES",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Course-Outline-09031329',
            display:'none',
            type:'image',
            rect:['600px','427px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Course-Outline-09031329.png",'0px','0px']
         },
         {
            id:'Subjects-09031334',
            display:'none',
            type:'image',
            rect:['600px','468px','35px','37px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Subjects-09031334.png",'0px','0px']
         },
         {
            id:'CONTACT',
            type:'text',
            rect:['504px','508px','64px','77px','auto','auto'],
            cursor:['pointer'],
            text:"CONTACT",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Phone-090329',
            display:'none',
            type:'image',
            rect:['600px','430px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Phone-090329.png",'0px','0px']
         },
         {
            id:'Address-090334',
            display:'none',
            type:'image',
            rect:['600px','471px','35px','37px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Address-090334.png",'0px','0px']
         },
         {
            id:'Email-090335',
            display:'none',
            type:'image',
            rect:['600px','508px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Email-090335.png",'0px','0px']
         },
         {
            id:'Location-090340',
            display:'none',
            type:'image',
            rect:['600px','547px','35px','38px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Location-090340.png",'0px','0px']
         },
         {
            id:'QRcode-090339',
            display:'none',
            type:'image',
            rect:['600px','585px','35px','38px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"QRcode-090339.png",'0px','0px']
         },
         {
            id:'GALLERY',
            type:'rect',
            rect:['508px','591px','64px','77px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(100,6,6,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'Images-2013090329',
            display:'none',
            type:'image',
            rect:['600px','424px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Images-2013090329.png",'0px','0px']
         },
         {
            id:'Videos-2013090334',
            display:'none',
            type:'image',
            rect:['600px','463px','35px','37px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Videos-2013090334.png",'0px','0px']
         },
         {
            id:'TRAVEL',
            type:'text',
            rect:['514px','681px','64px','77px','auto','auto'],
            cursor:['pointer'],
            text:"TRAVEL",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Local-13090329',
            display:'none',
            type:'image',
            rect:['600px','424px','35px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Local-13090329.png",'0px','0px']
         },
         {
            id:'Internasional-13090334',
            display:'none',
            type:'image',
            rect:['600px','465px','35px','37px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Internasional-13090334.png",'0px','0px']
         },
         {
            id:'STOCK_LIBRARY',
            type:'text',
            rect:['1101px','243px','169px','54px','auto','auto'],
            cursor:['pointer'],
            text:"STOCK LIBRARY",
            font:['didact-gothic, sans-serif',16,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[],['5']]
         },
         {
            id:'home_hover',
            type:'rect',
            rect:['519','370','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'stock_hover',
            type:'rect',
            rect:['1224px','262px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[[],[],[],['1.02941','1.14706']]
         },
         {
            id:'enroll_hover',
            type:'rect',
            rect:['609px','293px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[[],[],[],['1.02941','1.08824']]
         },
         {
            id:'courses_hover',
            type:'rect',
            rect:['517px','457px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'contact_hover',
            type:'rect',
            rect:['517px','543px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gallery_hover',
            type:'rect',
            rect:['518px','629px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'travel_hover',
            type:'rect',
            rect:['520px','713px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'zoom_out_hover',
            type:'rect',
            rect:['1304px','271px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[[],[],[],['1.32353','1.27574']]
         },
         {
            id:'zoom_in_hover',
            type:'rect',
            rect:['1381px','283px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'center_logo',
            type:'image',
            rect:['707px','505px','237px','109px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"logo1.png",'0px','0px']
         },
         {
            id:'Twitter-2',
            type:'image',
            rect:['1449px','0px','30px','41px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Twitter-2.png",'0px','0px']
         },
         {
            id:'YouTube-3',
            type:'image',
            rect:['1301px','-1px','30px','42px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"YouTube-3.png",'0px','0px']
         },
         {
            id:'Email-6',
            type:'image',
            rect:['1339px','0px','30px','36px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Email-6.png",'0px','0px']
         },
         {
            id:'Facebook-1',
            type:'image',
            rect:['1263px','5px','30px','35px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Facebook-1.png",'0px','0px']
         },
         {
            id:'Flickr-5',
            type:'image',
            rect:['1413px','0px','30px','41px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Flickr-5.png",'0px','0px']
         },
         {
            id:'LinkedIn-4',
            type:'image',
            rect:['1376px','0px','30px','41px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"LinkedIn-4.png",'0px','0px']
         },
         {
            id:'facebook_info',
            display:'none',
            type:'group',
            rect:['1218px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRect',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'Text',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"Facebook",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'facebook_infoCopy',
            type:'group',
            rect:['1253px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRectCopy',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"YouTube",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'facebook_infoCopy2',
            type:'group',
            rect:['1291px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRectCopy2',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy2',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'TextCopy2',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"Email",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'facebook_infoCopy3',
            type:'group',
            rect:['1328px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy3',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'TextCopy3',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"LinkedIn",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'facebook_infoCopy4',
            type:'group',
            rect:['1366px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRectCopy4',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy4',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'TextCopy4',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"Flickr",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'facebook_infoCopy5',
            type:'group',
            rect:['1403px','46px','126','37','auto','auto'],
            clip:['rect(0px 126.06666564941px 0px 0px)'],
            c:[
            {
               id:'RoundRectCopy5',
               type:'rect',
               rect:['0px','13px','126px','24px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy5',
               type:'rect',
               rect:['53px','4px','18px','18px','auto','auto'],
               fill:["rgba(95,95,95,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[[],['45']]
            },
            {
               id:'TextCopy5',
               type:'text',
               rect:['0px','13px','126px','24px','auto','auto'],
               text:"Twitter",
               align:"center",
               font:['didact-gothic, sans-serif',18,"rgba(165,0,33,1)","normal","none","normal"]
            }]
         },
         {
            id:'group2008',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','198px','auto','auto'],
            overflow:'visible',
            clip:['rect(0px 362pxpx 198pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"group2008.jpg",'0px','0px']
         },
         {
            id:'group2009',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','230px','auto','auto'],
            overflow:'visible',
            fill:["rgba(0,0,0,0)",im+"group2009.jpg",'0px','0px']
         },
         {
            id:'group2010',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','193px','auto','auto'],
            overflow:'visible',
            fill:["rgba(0,0,0,0)",im+"group2010.jpg",'0px','0px']
         },
         {
            id:'group2011',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','212px','auto','auto'],
            overflow:'visible',
            fill:["rgba(0,0,0,0)",im+"group2011.jpg",'0px','0px']
         },
         {
            id:'group2012',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','241px','auto','auto'],
            overflow:'visible',
            fill:["rgba(0,0,0,0)",im+"group2012.jpg",'0px','0px']
         },
         {
            id:'group2013',
            display:'none',
            type:'image',
            rect:['643px','429px','362px','242px','auto','auto'],
            overflow:'visible',
            fill:["rgba(0,0,0,0)",im+"group2013.jpg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'contact_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'travel_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'enroll_breath',
            symbolName:'enroll_breath'
         },
         {
            id:'courses_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'zoom_out_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'gallery_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'stock_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'home_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'zoom_in_hover',
            symbolName:'Symbol_1'
         },
         {
            id:'enroll_hover',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "top", '429px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '643px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_gallery2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_courses_hover}": [
            ["style", "top", '457px'],
            ["style", "left", '517px'],
            ["style", "cursor", 'pointer']
         ],
         "${_group2010}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '193px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_home2}": [
            ["style", "top", '0%'],
            ["style", "left", '0%'],
            ["style", "display", 'block']
         ],
         "${_contact_hover}": [
            ["style", "top", '543px'],
            ["style", "left", '517px'],
            ["style", "cursor", 'pointer']
         ],
         "${_facebook_infoCopy4}": [
            ["style", "top", '46px'],
            ["style", "display", 'block'],
            ["style", "left", '1366px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_TextCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_logo}": [
            ["style", "top", '17px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '109px'],
            ["style", "opacity", '0'],
            ["style", "left", '460px'],
            ["style", "width", '237px']
         ],
         "${_Twitter-2}": [
            ["style", "top", '0px'],
            ["style", "left", '1449px'],
            ["style", "cursor", 'pointer']
         ],
         "${_COURSES}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '503px'],
            ["style", "font-size", '16px'],
            ["style", "top", '418px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '77px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '64px'],
            ["style", "cursor", 'pointer']
         ],
         "${_zoom_out_hover}": [
            ["style", "top", '271px'],
            ["transform", "scaleY", '1.27574'],
            ["transform", "scaleX", '1.32353'],
            ["style", "left", '1304px'],
            ["style", "cursor", 'pointer']
         ],
         "${_zoom_in_hover}": [
            ["style", "top", '283px'],
            ["style", "left", '1381px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_group2013}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '242px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_Address-090334}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '465px'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Phone-090329}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '421px'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_group2012}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '241px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_QRcode-090339}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '589px'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Current-Students}": [
            ["style", "top", '589px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '3'],
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_Internasional-13090334}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "top", '463px'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_Course-Outline-09031329}": [
            ["style", "top", '421px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_The-Founder}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '505px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '1920px'],
            ["style", "height", '1080px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRectCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_Facebook-1}": [
            ["style", "top", '5px'],
            ["style", "left", '1263px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Flickr-5}": [
            ["style", "top", '0px'],
            ["style", "left", '1413px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ENROLL}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '603px'],
            ["style", "font-size", '16px'],
            ["style", "top", '293px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '61px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '64px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Location-090340}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '546px'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Local-13090329}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "top", '421px'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_facebook_infoCopy3}": [
            ["style", "top", '46px'],
            ["style", "display", 'block'],
            ["style", "left", '1328px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_RectangleCopy5}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_facebook_info}": [
            ["style", "top", '46px'],
            ["style", "display", 'none'],
            ["style", "left", '1218px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_HOME}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '16px'],
            ["style", "top", '337px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '77px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '51px'],
            ["style", "left", '513px']
         ],
         "${_facebook_infoCopy}": [
            ["style", "top", '46px'],
            ["style", "display", 'block'],
            ["style", "left", '1253px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_TextCopy5}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_travel2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '0px']
         ],
         "${_LinkedIn-4}": [
            ["style", "top", '0px'],
            ["style", "left", '1376px'],
            ["style", "cursor", 'pointer']
         ],
         "${_home_hover}": [
            ["style", "cursor", 'pointer']
         ],
         "${_gallery_hover}": [
            ["style", "top", '629px'],
            ["style", "left", '518px'],
            ["style", "cursor", 'pointer']
         ],
         "${_group2008}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '198px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_group2011}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '212px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_main}": [
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "right", 'auto'],
            ["style", "left", '448px'],
            ["style", "width", '1031px'],
            ["style", "top", '41px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '773px'],
            ["style", "clip", [0,1031,773,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_text}": [
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "right", 'auto'],
            ["style", "left", '0px'],
            ["style", "width", '362px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'auto'],
            ["style", "height", '262px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_group2009}": [
            ["style", "top", '429px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '230px'],
            ["style", "clip", [0,0,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '643px'],
            ["style", "width", '362px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_GALLERY}": [
            ["style", "top", '591px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(100,6,6,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '508px'],
            ["style", "height", '77px']
         ],
         "${_RoundRect}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_contact2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_facebook_infoCopy5}": [
            ["style", "top", '46px'],
            ["style", "display", 'block'],
            ["style", "left", '1403px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_YouTube-3}": [
            ["style", "top", '-1px'],
            ["style", "left", '1301px'],
            ["style", "cursor", 'pointer']
         ],
         "${_CONTACT}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '504px'],
            ["style", "width", '64px'],
            ["style", "top", '508px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '77px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Images-2013090329}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "top", '421px'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_RectangleCopy4}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_Lectors}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '547px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_STOCK_LIBRARY}": [
            ["style", "top", '243px'],
            ["style", "width", '169px'],
            ["style", "left", '1101px'],
            ["transform", "rotateZ", '5deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '54px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '16px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_enroll_hover}": [
            ["style", "top", '293px'],
            ["transform", "scaleY", '1.08824'],
            ["transform", "scaleX", '1.02941'],
            ["style", "left", '609px'],
            ["style", "cursor", 'pointer']
         ],
         "${_center_logo}": [
            ["style", "top", '505px'],
            ["style", "left", '706px'],
            ["style", "height", '109px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '237px']
         ],
         "${_text_background}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${_Subjects-09031334}": [
            ["style", "top", '463px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_RoundRectCopy2}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_TextCopy3}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_Campus--Studio}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '2.98'],
            ["style", "top", '463px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_stock_hover}": [
            ["style", "top", '262px'],
            ["transform", "scaleY", '1.14706'],
            ["transform", "scaleX", '1.02941'],
            ["style", "left", '1224px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Videos-2013090334}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "top", '463px'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle}": [
            ["style", "top", '4px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_courses2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_The-Institute}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "filter.contrast", '1'],
            ["transform", "scaleX", '3'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "top", '421px'],
            ["transform", "scaleY", '3'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_Email-090335}": [
            ["style", "-webkit-transform-origin", [50,-50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,-50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '3'],
            ["style", "top", '505px'],
            ["transform", "scaleX", '3'],
            ["style", "display", 'none'],
            ["style", "left", '600px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_travel_hover}": [
            ["style", "top", '713px'],
            ["style", "left", '520px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy2}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ],
         "${_Email-6}": [
            ["style", "top", '0px'],
            ["style", "left", '1339px'],
            ["style", "cursor", 'pointer']
         ],
         "${_facebook_infoCopy2}": [
            ["style", "top", '46px'],
            ["style", "display", 'block'],
            ["style", "left", '1291px'],
            ["style", "clip", [0,126.06666564941,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_TRAVEL}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '514px'],
            ["style", "width", '64px'],
            ["style", "top", '681px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '77px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["style", "cursor", 'pointer']
         ],
         "${_heading_background}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '108px'],
            ["style", "width", '147px'],
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '22px']
         ],
         "${_RoundRectCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 41500,
         autoPlay: true,
         labels: {
            "home_nav": 5000,
            "home_stop": 6000,
            "home_hover": 6500,
            "courses": 8000,
            "courses_stop": 9000,
            "courses_hover": 9500,
            "contact": 12000,
            "contact_stop": 13000,
            "contact_hover": 13500,
            "gallery": 15000,
            "gallery_stop": 16000,
            "gallery_hover": 16500,
            "travel": 18000,
            "travel_stop": 19000,
            "travel_hover": 19500,
            "zoom_in": 21500,
            "zoom_out": 23000,
            "social_hover_stop": 24000,
            "facebook_hover": 24500,
            "youtube_hover": 25250,
            "email_hover": 26000,
            "linked_hover": 26750,
            "flickr_hover": 27500,
            "twitter_hover": 28250,
            "slideshow": 29000
         },
         timeline: [
            { id: "eid17743", tween: [ "style", "${_group2012}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 37000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid8536", tween: [ "style", "${_center_logo}", "opacity", '0', { fromValue: '1'}], position: 941, duration: 1059, easing: "easeOutQuad" },
            { id: "eid408", tween: [ "transform", "${_The-Institute}", "scaleX", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid17737", tween: [ "style", "${_group2009}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 31000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid2254", tween: [ "subproperty", "${_Subjects-09031334}", "filter.saturate", '2', { fromValue: '1'}], position: 9500, duration: 500, easing: "easeOutQuad" },
            { id: "eid535", tween: [ "transform", "${_QRcode-090339}", "scaleY", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid6735", tween: [ "transform", "${_Group3}", "scaleY", '2', { fromValue: '1'}], position: 21500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid6736", tween: [ "transform", "${_Group3}", "scaleY", '1', { fromValue: '2'}], position: 23000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid17729", tween: [ "style", "${_group2012}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid3559", tween: [ "style", "${_Campus--Studio}", "top", '463px', { fromValue: '463px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid417", tween: [ "transform", "${_The-Founder}", "scaleY", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid208", tween: [ "style", "${_The-Institute}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid213", tween: [ "style", "${_The-Institute}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid217", tween: [ "style", "${_The-Institute}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid13518", tween: [ "style", "${_facebook_info}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 24500, duration: 500, easing: "easeOutQuad" },
            { id: "eid900", tween: [ "subproperty", "${_Campus--Studio}", "filter.saturate", '2', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid899", tween: [ "subproperty", "${_The-Institute}", "filter.saturate", '2', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid6729", tween: [ "style", "${_Group3}", "top", '415px', { fromValue: '429px'}], position: 21500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid6730", tween: [ "style", "${_Group3}", "top", '429px', { fromValue: '415px'}], position: 23000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid3965", tween: [ "style", "${_Images-2013090329}", "top", '421px', { fromValue: '421px'}], position: 16000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17730", tween: [ "style", "${_group2011}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17731", tween: [ "style", "${_group2010}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid4101", tween: [ "style", "${_Videos-2013090334}", "top", '463px', { fromValue: '463px'}], position: 16119, duration: 0, easing: "easeOutQuad" },
            { id: "eid3564", tween: [ "style", "${_Lectors}", "top", '547px', { fromValue: '547px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid13778", tween: [ "style", "${_facebook_infoCopy3}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 26750, duration: 500, easing: "easeOutQuad" },
            { id: "eid3967", tween: [ "style", "${_Internasional-13090334}", "top", '463px', { fromValue: '463px'}], position: 19000, duration: 0, easing: "easeOutQuad" },
            { id: "eid565", tween: [ "transform", "${_Images-2013090329}", "scaleY", '1', { fromValue: '3'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid483", tween: [ "style", "${_Current-Students}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28970", tween: [ "style", "${_Current-Students}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28971", tween: [ "style", "${_Current-Students}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28972", tween: [ "style", "${_Current-Students}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28973", tween: [ "style", "${_Current-Students}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid3555", tween: [ "style", "${_Lectors}", "left", '600px', { fromValue: '600px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2782", tween: [ "subproperty", "${_Images-2013090329}", "filter.saturate", '2', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid14936", tween: [ "style", "${_home2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid14940", tween: [ "style", "${_home2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid15143", tween: [ "style", "${_home2}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid253", tween: [ "style", "${_Images-2013090329}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid255", tween: [ "style", "${_Images-2013090329}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
            { id: "eid24932", tween: [ "style", "${_Images-2013090329}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid226", tween: [ "style", "${_Address-090334}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid231", tween: [ "style", "${_Address-090334}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid14937", tween: [ "style", "${_gallery2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid14945", tween: [ "style", "${_gallery2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid14946", tween: [ "style", "${_gallery2}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid15142", tween: [ "style", "${_gallery2}", "display", 'none', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid563", tween: [ "style", "${_Videos-2013090334}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28974", tween: [ "style", "${_Videos-2013090334}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28975", tween: [ "style", "${_Videos-2013090334}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28976", tween: [ "style", "${_Videos-2013090334}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28977", tween: [ "style", "${_Videos-2013090334}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid524", tween: [ "style", "${_Phone-090329}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28978", tween: [ "style", "${_Phone-090329}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28979", tween: [ "style", "${_Phone-090329}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28980", tween: [ "style", "${_Phone-090329}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28981", tween: [ "style", "${_Phone-090329}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2769", tween: [ "subproperty", "${_Email-090335}", "filter.saturate", '2', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid246", tween: [ "style", "${_Internasional-13090334}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
            { id: "eid249", tween: [ "style", "${_Internasional-13090334}", "display", 'block', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid6002", tween: [ "style", "${_Internasional-13090334}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeOutQuad" },
            { id: "eid416", tween: [ "transform", "${_The-Founder}", "scaleX", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid4103", tween: [ "style", "${_Location-090340}", "top", '546px', { fromValue: '546px'}], position: 13138, duration: 0, easing: "easeOutQuad" },
            { id: "eid572", tween: [ "style", "${_Internasional-13090334}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28982", tween: [ "style", "${_Internasional-13090334}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28983", tween: [ "style", "${_Internasional-13090334}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28984", tween: [ "style", "${_Internasional-13090334}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28985", tween: [ "style", "${_Internasional-13090334}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid4102", tween: [ "style", "${_QRcode-090339}", "top", '587px', { fromValue: '589px'}], position: 13000, duration: 138, easing: "easeOutQuad" },
            { id: "eid4099", tween: [ "style", "${_Address-090334}", "top", '465px', { fromValue: '465px'}], position: 13000, duration: 0, easing: "easeOutQuad" },
            { id: "eid531", tween: [ "transform", "${_Address-090334}", "scaleY", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid228", tween: [ "style", "${_Phone-090329}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid233", tween: [ "style", "${_Phone-090329}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid533", tween: [ "transform", "${_Location-090340}", "scaleY", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid252", tween: [ "style", "${_Videos-2013090334}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid254", tween: [ "style", "${_Videos-2013090334}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
            { id: "eid24931", tween: [ "style", "${_Videos-2013090334}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid410", tween: [ "transform", "${_Lectors}", "scaleX", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid6731", tween: [ "transform", "${_Group3}", "scaleX", '2', { fromValue: '1'}], position: 21500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid6732", tween: [ "transform", "${_Group3}", "scaleX", '1', { fromValue: '2'}], position: 23000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid13777", tween: [ "style", "${_facebook_infoCopy2}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 26000, duration: 500, easing: "easeOutQuad" },
            { id: "eid566", tween: [ "style", "${_Images-2013090329}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28986", tween: [ "style", "${_Images-2013090329}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28987", tween: [ "style", "${_Images-2013090329}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28988", tween: [ "style", "${_Images-2013090329}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28989", tween: [ "style", "${_Images-2013090329}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2770", tween: [ "subproperty", "${_Location-090340}", "filter.saturate", '2', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid17745", tween: [ "style", "${_group2013}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 39000, duration: 2500, easing: "easeOutQuad" },
            { id: "eid17741", tween: [ "style", "${_group2011}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 35000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid17739", tween: [ "style", "${_group2010}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 33000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid17728", tween: [ "style", "${_group2013}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid481", tween: [ "style", "${_The-Founder}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28990", tween: [ "style", "${_The-Founder}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28991", tween: [ "style", "${_The-Founder}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28992", tween: [ "style", "${_The-Founder}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28993", tween: [ "style", "${_The-Founder}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17733", tween: [ "style", "${_group2008}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid14938", tween: [ "style", "${_courses2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid14941", tween: [ "style", "${_courses2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid14942", tween: [ "style", "${_courses2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid15141", tween: [ "style", "${_courses2}", "display", 'none', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid564", tween: [ "transform", "${_Images-2013090329}", "scaleX", '1', { fromValue: '3'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid3554", tween: [ "style", "${_The-Founder}", "left", '600px', { fromValue: '600px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid247", tween: [ "style", "${_Local-13090329}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
            { id: "eid248", tween: [ "style", "${_Local-13090329}", "display", 'block', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid6001", tween: [ "style", "${_Local-13090329}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeOutQuad" },
            { id: "eid411", tween: [ "transform", "${_Lectors}", "scaleY", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid484", tween: [ "style", "${_The-Institute}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28994", tween: [ "style", "${_The-Institute}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28995", tween: [ "style", "${_The-Institute}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28996", tween: [ "style", "${_The-Institute}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28997", tween: [ "style", "${_The-Institute}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid534", tween: [ "transform", "${_Phone-090329}", "scaleY", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid421", tween: [ "transform", "${_Subjects-09031334}", "scaleX", '1', { fromValue: '3'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid414", tween: [ "transform", "${_Campus--Studio}", "scaleX", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid227", tween: [ "style", "${_Email-090335}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Email-090335}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid16944", tween: [ "style", "${_facebook_infoCopy2}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16951", tween: [ "style", "${_facebook_infoCopy2}", "display", 'block', { fromValue: 'none'}], position: 26000, duration: 0, easing: "easeOutQuad" },
            { id: "eid16952", tween: [ "style", "${_facebook_infoCopy2}", "display", 'none', { fromValue: 'block'}], position: 26750, duration: 0, easing: "easeOutQuad" },
            { id: "eid4104", tween: [ "style", "${_Email-090335}", "top", '504px', { fromValue: '505px'}], position: 13000, duration: 138, easing: "easeOutQuad" },
            { id: "eid523", tween: [ "style", "${_Location-090340}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28998", tween: [ "style", "${_Location-090340}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid28999", tween: [ "style", "${_Location-090340}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29000", tween: [ "style", "${_Location-090340}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29001", tween: [ "style", "${_Location-090340}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid561", tween: [ "transform", "${_Videos-2013090334}", "scaleX", '1', { fromValue: '3'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid2253", tween: [ "subproperty", "${_Course-Outline-09031329}", "filter.saturate", '2', { fromValue: '1'}], position: 9500, duration: 500, easing: "easeOutQuad" },
            { id: "eid17736", tween: [ "style", "${_group2008}", "clip", [0,362,198,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,198,0]}], position: 29000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid571", tween: [ "transform", "${_Internasional-13090334}", "scaleY", '1', { fromValue: '3'}], position: 18000, duration: 750, easing: "easeOutQuad" },
            { id: "eid424", tween: [ "transform", "${_Course-Outline-09031329}", "scaleY", '1', { fromValue: '3'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid207", tween: [ "style", "${_Campus--Studio}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_Campus--Studio}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Campus--Studio}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid423", tween: [ "transform", "${_Subjects-09031334}", "scaleY", '1', { fromValue: '3'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid14935", tween: [ "style", "${_travel2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid14947", tween: [ "style", "${_travel2}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17471", tween: [ "style", "${_travel2}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid3569", tween: [ "style", "${_Subjects-09031334}", "top", '463px', { fromValue: '463px'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid3561", tween: [ "style", "${_The-Founder}", "top", '505px', { fromValue: '505px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid485", tween: [ "style", "${_Lectors}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29002", tween: [ "style", "${_Lectors}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29003", tween: [ "style", "${_Lectors}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29004", tween: [ "style", "${_Lectors}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29005", tween: [ "style", "${_Lectors}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid562", tween: [ "transform", "${_Videos-2013090334}", "scaleY", '1', { fromValue: '3'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid529", tween: [ "transform", "${_Phone-090329}", "scaleX", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid526", tween: [ "transform", "${_Address-090334}", "scaleX", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid3565", tween: [ "style", "${_Current-Students}", "top", '589px', { fromValue: '589px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid221", tween: [ "style", "${_Subjects-09031334}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Subjects-09031334}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid412", tween: [ "transform", "${_Current-Students}", "scaleX", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid13779", tween: [ "style", "${_facebook_infoCopy4}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 27500, duration: 500, easing: "easeOutQuad" },
            { id: "eid568", tween: [ "transform", "${_Local-13090329}", "scaleY", '1', { fromValue: '3'}], position: 18000, duration: 750, easing: "easeOutQuad" },
            { id: "eid220", tween: [ "style", "${_Course-Outline-09031329}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid222", tween: [ "style", "${_Course-Outline-09031329}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid901", tween: [ "subproperty", "${_The-Founder}", "filter.saturate", '2', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid2768", tween: [ "subproperty", "${_Address-090334}", "filter.saturate", '2', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid8082", tween: [ "style", "${_heading_background}", "height", '121px', { fromValue: '22px'}], position: 21500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid8340", tween: [ "style", "${_heading_background}", "height", '22px', { fromValue: '121px'}], position: 23000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid224", tween: [ "style", "${_QRcode-090339}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_QRcode-090339}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid409", tween: [ "transform", "${_The-Institute}", "scaleY", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid3573", tween: [ "style", "${_Phone-090329}", "top", '421px', { fromValue: '421px'}], position: 13000, duration: 0, easing: "easeOutQuad" },
            { id: "eid522", tween: [ "style", "${_Email-090335}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29006", tween: [ "style", "${_Email-090335}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29007", tween: [ "style", "${_Email-090335}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29008", tween: [ "style", "${_Email-090335}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29009", tween: [ "style", "${_Email-090335}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2771", tween: [ "subproperty", "${_QRcode-090339}", "filter.saturate", '2', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid209", tween: [ "style", "${_The-Founder}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid214", tween: [ "style", "${_The-Founder}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid218", tween: [ "style", "${_The-Founder}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid528", tween: [ "transform", "${_Location-090340}", "scaleX", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid422", tween: [ "transform", "${_Course-Outline-09031329}", "scaleX", '1', { fromValue: '3'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid16945", tween: [ "style", "${_facebook_infoCopy3}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16953", tween: [ "style", "${_facebook_infoCopy3}", "display", 'block', { fromValue: 'none'}], position: 26750, duration: 0, easing: "easeOutQuad" },
            { id: "eid16954", tween: [ "style", "${_facebook_infoCopy3}", "display", 'none', { fromValue: 'block'}], position: 27500, duration: 0, easing: "easeOutQuad" },
            { id: "eid415", tween: [ "transform", "${_Campus--Studio}", "scaleY", '1', { fromValue: '2.98'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid3556", tween: [ "style", "${_Current-Students}", "left", '600px', { fromValue: '600px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid13776", tween: [ "style", "${_facebook_infoCopy}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 25250, duration: 500, easing: "easeOutQuad" },
            { id: "eid521", tween: [ "style", "${_Address-090334}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29010", tween: [ "style", "${_Address-090334}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29011", tween: [ "style", "${_Address-090334}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29012", tween: [ "style", "${_Address-090334}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29013", tween: [ "style", "${_Address-090334}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid16947", tween: [ "style", "${_facebook_infoCopy5}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16957", tween: [ "style", "${_facebook_infoCopy5}", "display", 'block', { fromValue: 'none'}], position: 28250, duration: 0, easing: "easeOutQuad" },
            { id: "eid16958", tween: [ "style", "${_facebook_infoCopy5}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid569", tween: [ "style", "${_Local-13090329}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29014", tween: [ "style", "${_Local-13090329}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29015", tween: [ "style", "${_Local-13090329}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29016", tween: [ "style", "${_Local-13090329}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29017", tween: [ "style", "${_Local-13090329}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 18000, duration: 0, easing: "easeOutQuad" },
            { id: "eid16946", tween: [ "style", "${_facebook_infoCopy4}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16955", tween: [ "style", "${_facebook_infoCopy4}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16956", tween: [ "style", "${_facebook_infoCopy4}", "display", 'none', { fromValue: 'block'}], position: 28250, duration: 0, easing: "easeOutQuad" },
            { id: "eid3966", tween: [ "style", "${_Local-13090329}", "top", '421px', { fromValue: '421px'}], position: 19000, duration: 0, easing: "easeOutQuad" },
            { id: "eid16943", tween: [ "style", "${_facebook_infoCopy}", "display", 'none', { fromValue: 'block'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16949", tween: [ "style", "${_facebook_infoCopy}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0, easing: "easeOutQuad" },
            { id: "eid16950", tween: [ "style", "${_facebook_infoCopy}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17732", tween: [ "style", "${_group2009}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
            { id: "eid530", tween: [ "transform", "${_QRcode-090339}", "scaleX", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid16942", tween: [ "style", "${_facebook_info}", "display", 'block', { fromValue: 'none'}], position: 24500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16948", tween: [ "style", "${_facebook_info}", "display", 'none', { fromValue: 'block'}], position: 25250, duration: 0, easing: "easeOutQuad" },
            { id: "eid6733", tween: [ "style", "${_Group3}", "left", '755px', { fromValue: '643px'}], position: 21500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid6734", tween: [ "style", "${_Group3}", "left", '643px', { fromValue: '755px'}], position: 23000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid3567", tween: [ "style", "${_Course-Outline-09031329}", "top", '421px', { fromValue: '421px'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2783", tween: [ "subproperty", "${_Videos-2013090334}", "filter.saturate", '2', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid567", tween: [ "transform", "${_Local-13090329}", "scaleX", '1', { fromValue: '3'}], position: 18000, duration: 750, easing: "easeOutQuad" },
            { id: "eid902", tween: [ "subproperty", "${_Lectors}", "filter.saturate", '2', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid14939", tween: [ "style", "${_contact2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid14943", tween: [ "style", "${_contact2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid14944", tween: [ "style", "${_contact2}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid15140", tween: [ "style", "${_contact2}", "display", 'none', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2784", tween: [ "subproperty", "${_Local-13090329}", "filter.saturate", '2', { fromValue: '1'}], position: 19500, duration: 500, easing: "easeOutQuad" },
            { id: "eid525", tween: [ "style", "${_QRcode-090339}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29018", tween: [ "style", "${_QRcode-090339}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29019", tween: [ "style", "${_QRcode-090339}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29020", tween: [ "style", "${_QRcode-090339}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29021", tween: [ "style", "${_QRcode-090339}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid527", tween: [ "transform", "${_Email-090335}", "scaleX", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid205", tween: [ "style", "${_Lectors}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid210", tween: [ "style", "${_Lectors}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid219", tween: [ "style", "${_Lectors}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid480", tween: [ "style", "${_Subjects-09031334}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29022", tween: [ "style", "${_Subjects-09031334}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29023", tween: [ "style", "${_Subjects-09031334}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29024", tween: [ "style", "${_Subjects-09031334}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29025", tween: [ "style", "${_Subjects-09031334}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid532", tween: [ "transform", "${_Email-090335}", "scaleY", '1', { fromValue: '3'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid413", tween: [ "transform", "${_Current-Students}", "scaleY", '1', { fromValue: '3'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid903", tween: [ "subproperty", "${_Current-Students}", "filter.saturate", '2', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid570", tween: [ "transform", "${_Internasional-13090334}", "scaleX", '1', { fromValue: '3'}], position: 18000, duration: 750, easing: "easeOutQuad" },
            { id: "eid479", tween: [ "style", "${_Course-Outline-09031329}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29026", tween: [ "style", "${_Course-Outline-09031329}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29027", tween: [ "style", "${_Course-Outline-09031329}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29028", tween: [ "style", "${_Course-Outline-09031329}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29029", tween: [ "style", "${_Course-Outline-09031329}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid8537", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 3000, easing: "easeOutQuad" },
            { id: "eid482", tween: [ "style", "${_Campus--Studio}", "-webkit-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29030", tween: [ "style", "${_Campus--Studio}", "-moz-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29031", tween: [ "style", "${_Campus--Studio}", "-ms-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29032", tween: [ "style", "${_Campus--Studio}", "msTransformOrigin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid29033", tween: [ "style", "${_Campus--Studio}", "-o-transform-origin", [50,-50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,-50]}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid13780", tween: [ "style", "${_facebook_infoCopy5}", "clip", [0,126.06666564941,37,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126.06666564941,0,0]}], position: 28250, duration: 500, easing: "easeOutQuad" },
            { id: "eid206", tween: [ "style", "${_Current-Students}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Current-Students}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid215", tween: [ "style", "${_Current-Students}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid2785", tween: [ "subproperty", "${_Internasional-13090334}", "filter.saturate", '2', { fromValue: '1'}], position: 19500, duration: 500, easing: "easeOutQuad" },
            { id: "eid225", tween: [ "style", "${_Location-090340}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid230", tween: [ "style", "${_Location-090340}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid2767", tween: [ "subproperty", "${_Phone-090329}", "filter.saturate", '2', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"HOME": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"COURSES": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"CONTACT": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"TRAVEL": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SIPS": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Campus_Studio": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${_TextCopy2}": [
            ["style", "top", '5px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '259px'],
            ["style", "display", 'none'],
            ["style", "left", '39px'],
            ["style", "width", '363px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Founder": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "sips_text": 1000
         },
         timeline: [
         ]
      }
   }
},
"Lectors": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Current_students": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"text": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '259px'],
            ["style", "width", '363px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','34px','34px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'hover_effect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,0.00)',[50,50,'true','farthest-corner',[['rgba(0,0,0,0.10)',46],['rgba(0,0,0,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hover_effect}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(15,15,15,0.00)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         labels: {
            "stop": 0,
            "hover": 500,
            "hover_out": 1000
         },
         timeline: [
            { id: "eid4367", tween: [ "gradient", "${_hover_effect}", "background-image", [50,50,true,'farthest-corner',[['rgba(0,0,0,0.28)',0],['rgba(0,0,0,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(15,15,15,0.00)',0],['rgba(0,0,0,0.00)',100]]]}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid4945", tween: [ "gradient", "${_hover_effect}", "background-image", [50,50,true,'farthest-corner',[['rgba(15,15,15,0.00)',0],['rgba(0,0,0,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(0,0,0,0.28)',0],['rgba(0,0,0,1.00)',100]]]}], position: 1000, duration: 250, easing: "easeOutQuad" }         ]
      }
   }
},
"symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '268px'],
            ["style", "width", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"enroll_breath": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,0.61)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "height", '18px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         labels: {
            "breath": 0
         },
         timeline: [
            { id: "eid365", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(0,0,0,0.61)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 0, duration: 1286 },
            { id: "eid366", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.61)'}], position: 1714, duration: 1286 }         ]
      }
   }
},
"symbol_text": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      rect: ['0px','-3px','147px','23px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'RoundRect3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      clip: ['rect(-17px 150px 23px 0px)'],
      fill: ['rgba(95,95,95,1.00)']
   },
   {
      transform: [[0,0],['45']],
      rect: ['61px','-14px','23px','23px','auto','auto'],
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(95,95,95,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text5',
      text: 'Facebook<br>',
      rect: ['0px','-3px','147px','23px','auto','auto'],
      font: ['didact-gothic, sans-serif',18,'rgba(165,0,33,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "top", '-14px'],
            ["style", "clip", [0,23,23,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '61px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_RoundRect3}": [
            ["color", "background-color", 'rgba(95,95,95,1.00)'],
            ["style", "height", '23px'],
            ["style", "left", '0px'],
            ["style", "clip", [-17,150,23,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '-3px']
         ],
         "${_Text5}": [
            ["style", "top", '-3px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '23px'],
            ["style", "left", '0px'],
            ["style", "clip", [-17,150,23,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '147px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid13504", tween: [ "style", "${_RoundRect3}", "clip", [23,150,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-17,150,23,0]}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid13506", tween: [ "style", "${_Text5}", "clip", [23,150,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-17,150,23,0]}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid13510", tween: [ "style", "${_Rectangle7}", "clip", [23,23,23,23], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,23,23,0]}], position: 0, duration: 2000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-57896338");
