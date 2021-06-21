/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_HOME}", "click", function(sym, e) {
         sym.play('home_nav');
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Campus--Studio}", "click", function(sym, e) {
         sym.$('text').html('The main campus is situated in Stellenbosch. The Cape Town Institute for Photographic and Multimedia Studies (CIPS) will operate from 2012 at Century City. Both of the campuses offer various courses in Multimedia.');
         sym.play('home_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Institute}", "click", function(sym, e) {
         sym.$('text').html('The Cape Town- and Stellenbosch Institute is a specialized and career orientated Photographic and Multimedia Institute that offers top-of-the-range courses in: <br/>Photography <br/>Video production <br/>Graphic design <br/>Photoshop <br/>Web design <br/>Photo-& TV Make-up <br/>SIPS is the most well established and oldest private Photographic Educational School in the Western Cape. This school has been in existence for 18 years. Students are guaranteed personal attention by personnel.');
         sym.$('heading').html('The Institute');
         sym.play('home_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Founder}", "click", function(sym, e) {
         sym.$('text').html('The Principal, Charl Best, has been a professional photographer for 30 years. His experience includes scientific, documentary, commercial, advertising, fashion, landscape, wedding and art photography. He is accredited with more than 15 One Man national and international photographic exhibitions and is a renowned educator in the business. He is a prominent producer who has made numerous short movies. He also teaches video production at SIPS/CTIPS and is an avid scuba diver, yachtsman and x-pilot.');
         sym.play('home_hover');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Course-Outline-09031329}", "click", function(sym, e) {
         sym.$('text').html('Full-time<br/>Evening Classes<br/>Distance Training<br/>One-on-One<br/>Flexi Course<br/>Workshops');
         sym.play('courses_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Current-Students}", "click", function(sym, e) {
         sym.$('text').html('current students');
         sym.play('home_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lectors}", "click", function(sym, e) {
         sym.$('text').html('lectors');
         sym.play('home_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Subjects-09031334}", "click", function(sym, e) {
         sym.$('text').html('<ol><li>Photography</li><li>Graphic Design</li><li>Video Production</li><li>Studio Lighting</li><li>Make Up</li><li>Visual Communication</li><li>Darkroom</li><li>Computers</li><li>Marketing & Sales</li></ol>');
         sym.play('courses_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_COURSES}", "click", function(sym, e) {
         sym.play('courses');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CONTACT}", "click", function(sym, e) {
         sym.play('contact');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Address-090334}", "click", function(sym, e) {
         sym.$('text').html('<br/><br/>9 Hoflaan<br/>Unipark<br/>Stellenbosch<br/>South Africa');
         sym.play('contact_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-090335}", "click", function(sym, e) {
         sym.$('text').html('<br/><br/><br/><a id="email" href="mailto:bestsips@iafica.com?subject=SIPS Collage enquiry">bestsips@iafrica.com</a>');
         sym.play('contact_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Location-090340}", "click", function(sym, e) {
         sym.$('text').html('<iframe width="362" height="262" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=9+Hof+Ave,+Stellenbosch,+South+Africa&amp;aq=3&amp;oq=9+hoflaan,+&amp;sll=37.0625,-95.677068&amp;sspn=62.870523,135.263672&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=9+Hof+Ave,+Uniepark,+Stellenbosch,+Breede+River+DC,+Western+Cape+7600,+South+Africa&amp;ll=-33.929118,18.885927&amp;spn=0.018659,0.030985&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=9+Hof+Ave,+Stellenbosch,+South+Africa&amp;aq=3&amp;oq=9+hoflaan,+&amp;sll=37.0625,-95.677068&amp;sspn=62.870523,135.263672&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=9+Hof+Ave,+Uniepark,+Stellenbosch,+Breede+River+DC,+Western+Cape+7600,+South+Africa&amp;ll=-33.929118,18.885927&amp;spn=0.018659,0.030985&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>');
         sym.play('contact_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Phone-090329}", "click", function(sym, e) {
         sym.$('text').html('<br/><br/><br/>+27(021) 887 1938<br/>+27(021) 887 4485');
         sym.play('contact_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_QRcode-090339}", "click", function(sym, e) {
         sym.$('text').html('<img src="images/qrcode.png" alt="qrcode">');
         sym.play('contact_hover');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GALLERY}", "click", function(sym, e) {
         sym.play('gallery');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Videos-2013090334}", "click", function(sym, e) {
         sym.$('text').html('<video src="promo.avi" controls="controls" height="269" width="367" preload="auto"></video>');
         sym.play('gallery_hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TRAVEL}", "click", function(sym, e) {
         sym.play('travel');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Internasional-13090334}", "click", function(sym, e) {
         sym.$('text').html('	<ul id="listLeft"><li>Thailand</li><li>Japan</li><li>Maldives</li></ul>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Local-13090329}", "click", function(sym, e) {
         sym.$('text').html('<ul id="listLeft"><li>Mozambique</li><li>Langebaan</li><li>Klein Karoo</li><li>Warmwaterberg</li><li>Saldanna</li><li>Barridale</li><li>Hermanus</li><li>Cape Town</li><li>Muizenberg</li></ul>');
         sym.play('travel_hover');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_hover}", "click", function(sym, e) {
         sym.play('home_nav');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_STOCK_LIBRARY}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.sipsstock.com", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ENROLL}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("enroll.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_enroll_breath}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Institute}", "mouseover", function(sym, e) {
         sym.play('home_hover');
         sym.$('heading').html('The Institute');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Institute}", "mouseout", function(sym, e) {
         sym.play('home_stop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Campus--Studio}", "mouseover", function(sym, e) {
         sym.play('home_hover');
         sym.$('heading').html('Campus and Studio');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Campus--Studio}", "mouseout", function(sym, e) {
         sym.play('home_stop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Founder}", "mouseover", function(sym, e) {
         sym.play('home_hover');
         sym.$('heading').html('The Founder');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_The-Founder}", "mouseout", function(sym, e) {
         sym.play('home_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lectors}", "mouseover", function(sym, e) {
         sym.play('home_hover');
         sym.$('heading').html('Lecturers');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lectors}", "mouseout", function(sym, e) {
         sym.play('home_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Current-Students}", "mouseover", function(sym, e) {
         sym.play('home_hover');
         sym.$('heading').html('Current Students');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Current-Students}", "mouseout", function(sym, e) {
         sym.play('home_stop');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Course-Outline-09031329}", "mouseover", function(sym, e) {
         sym.play('courses_hover');
         sym.$('heading').html('Course Outline');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Course-Outline-09031329}", "mouseout", function(sym, e) {
         sym.play('courses_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Subjects-09031334}", "mouseover", function(sym, e) {
         sym.play('courses_hover');
         sym.$('heading').html('Subjects');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Subjects-09031334}", "mouseout", function(sym, e) {
         sym.play('courses_stop');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Phone-090329}", "mouseover", function(sym, e) {
         sym.play('contact_hover');
         sym.$('heading').html('Telephone');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Phone-090329}", "mouseout", function(sym, e) {
         sym.play('contact_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Address-090334}", "mouseover", function(sym, e) {
         sym.play('contact_hover');
         sym.$('heading').html('Address');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Address-090334}", "mouseout", function(sym, e) {
         sym.play('contact_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-090335}", "mouseover", function(sym, e) {
         sym.play('contact_hover');
         sym.$('heading').html('Email');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-090335}", "mouseout", function(sym, e) {
         sym.play('contact_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Location-090340}", "mouseover", function(sym, e) {
         sym.play('contact_hover');
         sym.$('heading').html('Location');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Location-090340}", "mouseout", function(sym, e) {
         sym.play('contact_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_QRcode-090339}", "mouseover", function(sym, e) {
         sym.play('contact_hover');
         sym.$('heading').html('QR Code');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_QRcode-090339}", "mouseout", function(sym, e) {
         sym.play('contact_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Images-2013090329}", "mouseover", function(sym, e) {
         //sym.play('gallery_hover');
         sym.$('heading').html('Images');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Images-2013090329}", "mouseout", function(sym, e) {
         //sym.play('gallery_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Videos-2013090334}", "mouseover", function(sym, e) {
         //sym.play('gallery_hover');
         sym.$('heading').html('Video');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Videos-2013090334}", "mouseout", function(sym, e) {
         //sym.play('gallery_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Local-13090329}", "mouseover", function(sym, e) {
         sym.play('travel_hover');
         sym.$('heading').html('Local');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Local-13090329}", "mouseout", function(sym, e) {
         sym.play('travel_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Internasional-13090334}", "mouseover", function(sym, e) {
         sym.play('travel_hover');
         sym.$('heading').html('Internasional');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Internasional-13090334}", "mouseout", function(sym, e) {
         sym.play('travel_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_courses_hover}", "click", function(sym, e) {
         sym.play('courses');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contact_hover}", "click", function(sym, e) {
         sym.play('contact');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gallery_hover}", "click", function(sym, e) {
         sym.play('gallery');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_travel_hover}", "click", function(sym, e) {
         sym.play('travel');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_enroll_hover}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("enroll.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stock_hover}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.charlbest.com", "_self");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zoom_out_hover}", "click", function(sym, e) {
         sym.play('zoom_out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zoom_in_hover}", "click", function(sym, e) {
         sym.play('zoom_in');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         sym.$('text').html('The Cape Town- and Stellenbosch Institute is a specialized and career orientated Photographic and Multimedia Institute that offers top-of-the-range courses in: <br/>Photography <br/>Video production <br/>Graphic design <br/>Photoshop <br/>Web design <br/>Photo-& TV Make-up <br/>SIPS is the most well established and oldest private Photographic Educational School in the Western Cape. This school has been in existence for 18 years. Students are guaranteed personal attention by personnel.');
         sym.$('heading').html('The Institute');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Facebook-1}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('facebook_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Facebook-1}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_YouTube-3}", "mouseover", function(sym, e) {
         sym.play('youtube_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_YouTube-3}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-6}", "mouseover", function(sym, e) {
         sym.play('email_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-6}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LinkedIn-4}", "mouseover", function(sym, e) {
         sym.play('linked_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LinkedIn-4}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Flickr-5}", "mouseover", function(sym, e) {
         sym.play('flickr_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Flickr-5}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Twitter-2}", "mouseover", function(sym, e) {
         sym.play('twitter_hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Twitter-2}", "mouseout", function(sym, e) {
         sym.play('social_hover_stop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Facebook-1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.facebook.com/sipsPhotography/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Email-6}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("mailto:bestsips@iafica.com?subject=SIPS Collage enquiry", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Twitter-2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://twitter.com/SIPStudies", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_YouTube-3}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.youtube.com/bestsips", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Flickr-5}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.flickr.com/photos/stellenbosch_school_of_photography/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Images-2013090329}", "click", function(sym, e) {
         sym.play('gallery_hover');
         sym.play('slideshow');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         sym.play('slideshow');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'HOME'
   (function(symbolName) {   
   
      

      

      

   })("HOME");
   //Edge symbol end:'HOME'

   //=========================================================
   
   //Edge symbol: 'COURSES'
   (function(symbolName) {   
   
   })("COURSES");
   //Edge symbol end:'COURSES'

   //=========================================================
   
   //Edge symbol: 'CONTACT'
   (function(symbolName) {   
   
   })("CONTACT");
   //Edge symbol end:'CONTACT'

   //=========================================================
   
   //Edge symbol: 'TRAVEL'
   (function(symbolName) {   
   
   })("TRAVEL");
   //Edge symbol end:'TRAVEL'

   //=========================================================
   
   //Edge symbol: 'SIPS'
   (function(symbolName) {   
   
      

      

      

      

   })("SIPS");
   //Edge symbol end:'SIPS'

   //=========================================================
   
   //Edge symbol: 'Campus_Studio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

   })("Campus_Studio");
   //Edge symbol end:'Campus_Studio'

   //=========================================================
   
   //Edge symbol: 'Founder'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play('sips_text');

      });
      //Edge binding end

   })("Founder");
   //Edge symbol end:'Founder'

   //=========================================================
   
   //Edge symbol: 'Lectors'
   (function(symbolName) {   
   
   })("Lectors");
   //Edge symbol end:'Lectors'

   //=========================================================
   
   //Edge symbol: 'Current_students'
   (function(symbolName) {   
   
   })("Current_students");
   //Edge symbol end:'Current_students'

   //=========================================================
   
   //Edge symbol: 'text'
   (function(symbolName) {   
   
   })("text");
   //Edge symbol end:'text'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hover_effect}", "mouseover", function(sym, e) {
         sym.play('hover');
         // insert code to be run when the mouse hovers over the object

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hover_effect}", "click", function(sym, e) {
         sym.play('hover');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hover_effect}", "mouseout", function(sym, e) {
         sym.play('hover_out');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'symbol'
   (function(symbolName) {   
   
   })("symbol");
   //Edge symbol end:'symbol'

   //=========================================================
   
   //Edge symbol: 'enroll_breath'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play('breath');

      });
      //Edge binding end

   })("enroll_breath");
   //Edge symbol end:'enroll_breath'

   //=========================================================
   
   //Edge symbol: 'symbol_text'
   (function(symbolName) {   
   
   })("symbol_text");
   //Edge symbol end:'symbol_text'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

})(jQuery, AdobeEdge, "EDGE-57896338");