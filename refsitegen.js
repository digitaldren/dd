<script>
//<![CDATA[  
  /**
   * Sample JavaScript code for blogger.posts.insert
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/blogger"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
function loadClient() {
    gapi.client.setApiKey("AIzaSyDlz12rnh6x74XamZzsAZbRnvj5LoLP4lo");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/blogger/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.

function execute() {
  function slugify(content) {
	return content.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
	}
  function month2digits(month)
    { 
        return (month < 10 ? '0' : '') + month;
    }      
  var aa = $('#txarea1').val(),
      bb = $('#txarea2').val(),
      cc = $('#txarea3').val(),
      dd = $('#txarea4').val(),
      ee = $('#type').val();

  if (aa.includes("youtube.com/") || aa.includes("youtu.be/")){
      var aaSplit= aa.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/)[3];
      iFrm = `<iframe width='560' height='315' src='https://www.youtube.com/embed/${aaSplit}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
    }
  let stps0;
  switch(ee){
      case 'site':
          stps0 = `<li>Watch the video for steps/tutorial and register/sign up using this link: <a id='cId' href='${cc}' rel='nofollow' target='_blank'>${cc} </a></li><li>Login to your account/dashboard and look for your referral link.</li><li>In the box below, place YOUR referral Link.</li><input id='txarea3'  type='text' required/>`; 
          break;
      case 'site|app':
          stps0 = `<li>Watch the video for steps/tutorial and go to the app/site using this link: <a id='cId' href='${cc}' rel='nofollow' target='_blank'>${cc} </a></li><li>Login to the app/site and look for your referral link.</li><li>In the box below, place YOUR link.</li><input id='txarea3'  type='text' required/>`;   
          break;
      case 'app|auto':
          stps0 = `<li>Watch the video for steps/tutorial and download the app using this link: <a id='cId' href='${cc}' rel='nofollow' target='_blank'>${cc} </a></li><li>Login to the app and look for your referral link.</li><li>In the box below, place YOUR link.</li><input id='txarea3'  type='text' required/>`; 
          break;
      case 'app|manual':
          stps0 = `<li>Watch the video for steps/tutorial and download the app using this link: <a id='cId' href='${cc}' rel='nofollow' target='_blank'>${cc} </a></li><li>Login to the app and enter this referral/invite code: <b><span id='codeId'>${dd}</span></b></li><li>Find your OWN referral <em style='background-color:#6c757d;color:#fff;font-style:normal;'>CODE</em> and place YOUR <em style='background-color:#6c757d;color:#fff;font-style:normal;'>CODE</em> in the box below.</li><input id='txarea4'  type='text' required/>`; 
          break;
  };//switch statement

  var slug_ = slugify(bb);
  var date = new Date(); // date object
  var month2digits = month2digits(date.getMonth()+1); 
  var getCurrentYear = date.getFullYear(); 
//  var b_url = `https://my.digitaldren.com/${getCurrentYear.toString()}/${month2digits.toString()}/${slug_}.html`;

  var postJson = JSON.parse(`{
      "content": "<style>.form-style-7{max-width:600px;display:block;margin:auto;}.form-style-7 input[type='text']{box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;width: 90%;display: block;border-style: inset;height: 25px;line-height: 25px;font-size: 16px!important;padding: 0;font-family: Georgia, 'Times New Roman', Times, serif;margin:auto;}.form-style-7 li{display: list-item;padding: 9px;border:none;margin-top: 10px;margin-bottom: 5px;border-radius: 3px;}}</style><form class='form-style-7' id='form-convert'><div id='vidYt' style='text-align: center;'>${iFrm}</div><p></p><p style='text-align: center;'><span style='text-align: left;'><i>This is a Done-For-You Referral Site, feel free to use this website to gain more referrals from the above App/Site.</i></span><i style='text-align: left;'>.</i></p><!--more--><p></p><h2 style='text-align: center;'><span style='font-family: arial;'><marquee bgcolor='#fcf8e3'><mark>Duplicate This Website For Free And Earn From Referrals with the Program in this Page!</mark></marquee></span></h2><p></p><h4><strong>Follow these EASY steps:</strong></h4><ol><div id='steps123'>${stps0}</div><li>Duplicate this website NOW by generating your CUSTOM link below:</li><input id='txarea1' style='display: none;' value='' /><input id='txarea2' style='display: none;' value='' />  <input id='txarea4' style='display: none;' value='' /><input id='type' style='display: none;' value='' /><input id='subd' style='display: none;' value='' /><input id='feedurl' style='display: none;' type='text' /><input id='generateurl' style='display: none;' type='text' /><center><div class='input-group-append'><button class='btn btn-info' id='btngenerate' type='button'>GENERATE YOUR CUSTOM URL</button> </div></center></ol></form><br /><div id='spinner'><div class='d-flex justify-content-center pb-4'><div class='spinner-border text-info' role='status'><span class='sr-only'>Loading...</span></div></div></div><!-- Modal Generated --><div aria-hidden='true' aria-labelledby='generated-modal' class='modal fade' id='generated' role='dialog' tabindex='-1'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content rounded-0 border-info shadow'><div class='modal-header bg-info text-white rounded-0'><h5 class='modal-title' id='generated-modal'>You're ready to go!</h5><button aria-label='Close' class='close' data-dismiss='modal' type='button'><span aria-hidden='true' class='text-white'><i class='fa fa-times'></i></span></button></div><div class='modal-body'><div class='alert alert-success mb-3' id='msg'><strong>Well done!</strong> link has been generated.</div><div class='form-group'><div class='input-group input-group-sm'><input class='form-control form-control-sm' id='resulturl' onclick='this.focus();this.select()' readonly='readonly' type='url'/><div class='input-group-append'><button class='btn btn-sm btn-secondary copytoclipboard' data-clipboard-action='copy' data-clipboard-target='#resulturl' id='copytoclipboard' type='button'><i class='fa fa-copy'></i></button></div></div></div><div class='alert alert-success mb-3' id='msgfb'><strong>Well done!</strong> link has been generated.</div><center><iframe id='fb-share-button' src='' width='77' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe> </center><div class='form-group' id='formgroup2'><div class='input-group input-group-sm'><input class='form-control form-control-sm' id='resulturlfb' onclick='this.focus();this.select()' readonly='readonly' type='url'/><div class='input-group-append'><button class='btn btn-sm btn-secondary copytoclipboard2' data-clipboard-action='copy' data-clipboard-target='#resulturlfb' id='copytoclipboard2' type='button'><i class='fa fa-copy'></i></button></div></div></div></div></div></div></div><section id="fb-comments"></section>",
      "title": "${bb}"
    }`);
console.log(JSON.stringify(postJson));
  return gapi.client.blogger.posts.insert({
    "blogId": "214301367973054481",
    "fetchBody": true,
    "fetchImages": true,
    "isDraft": false,
    "resource":JSON.stringify(postJson)
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              var parsed = JSON.parse(response.body)
              return gapi.client.blogger.posts.get({
                "blogId": "214301367973054481",
                "postId": parsed.id
                  })
                  .then(function(response) {
                          // Handle the results here (response.result has the parsed body).
                          console.log("Response", response);
                          var parsed2 = JSON.parse(response.body)
                          $('#generateurl').val(parsed2.url);
						  let y = parsed2.url;
                          //post2fb(bb,y);
                          console.log("generate url value: "+$('#generateurl').val());	
                        },
                        function(err) { console.error("Execute error", err); });

            },
            function(err) { console.error("Execute error", err); });

}
function post2fb(){
var deferred = $.Deferred();
console.log("running post2fb");
console.log(window.location.href);
var generateurl = $("#generateurl"),
	url_ = generateurl.val(),
	bb = $('#txarea2').val(),
	resulturlfb = $('#resulturlfb'); 
	console.log(url_);
	console.log(bb);
	console.log(resulturlfb.val());
  $.ajax('https://graph.facebook.com/105764488641382/feed', {
      type: 'POST',  // http method
      data: { message: bb, access_token : 'EAAEc2579Gw4BAPdf6jUlGv4YiWf799pffXcIYvc5qwd0WOZAVEGOgGPs8Wv9lZAeRealyrIscPL5ObswLKErbuHRZCWkJnyJlFanW46b7EqMfDwmz6ibz0231VPjpbyqD8Qxe1L9UezlaehW3kCSMtcgdJkIoh3xw4nCKon9S90QyonZBpij', link: url_ },  // data to submit
      success: function (data, status, response, xhr) { 
                  if (response && !response.error) {
                      var parsed_ = JSON.parse(response.responseText),
                          parsedId = parsed_.id,
                          parsedSplit = parsedId.split("_")[1]; 
						  deferred.resolve(parsedSplit);
                     //     resulturlfb.val('https://www.facebook.com/fb_digitaldren/posts/' + parsedSplit);
console.log(resulturlfb.val());
                     //   localStorage.setItem('pstIdFb', parsedSplit);
                     //   window.location.replace('https://www.facebook.com/fb_digitaldren/posts/' + parsedSplit);
                     //     var x_ = 'https://www.facebook.com/fb_digitaldren/posts/' + parsedSplit;
                     //     return x_
                     // alert(parsedSplit);
                      console.log( parsedSplit );
                  } else {
                      console.log('Oops!');
                  }
          //$('p').append('status: ' + status + ', data: ' + JSON.stringify(data));
			console.log('status: ' + status + ', data: ' + JSON.stringify(data));
      },
      error: function (jqXhr, textStatus, errorMessage) {
            console.error('Error' + errorMessage);
      }
  });
return deferred.promise();
} 
function convertlink2(){
var promise = post2fb();
promise.then(function(result){
  console.log("running convertlink2");
  console.log(window.location.href);
          var generateurl = $("#generateurl"),
              generate = $("#generate"),
              //generated = $("#generated"),	
              generate = $("#generate"),
              spinner = $("#spinner"),
              resulturl = $('#resulturl'),
              resulturlfb = $('#resulturlfb');
  console.log("resulturlfb = " + resulturlfb);
          console.log ("generateurl.val() : " + generateurl.val())
          if (generateurl.val() == "") {
            generateurl.focus();
            return false;
          }
  //        spinner.slideDown();
          $.ajax({
            url : '/feeds/posts/summary?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(data) {
              var link = '',
                  content = data.feed.entry,
                  links =new Array();	
              if (content !== undefined) {
                for (var i = 0; i < content.length; i++) {
                  for (var j = 0; j < content[i].link.length; j++) {
                    if (content[i].link[j].rel == "alternate") {
                      link = content[i].link[j].href;
                      break;
                    }
                  }
                  links[i] = link;
                  var randindex = Math.random() * links.length; 
                  randindex = parseInt(randindex);
                }
				var combined = generateurl.val() + "%%" + result;
                aes = aesCrypto.encrypt(convertstr(combined),convertstr('root'));
                resultgenerate = links[randindex] + "#?o=" + aes;				
                resulturl.val(resultgenerate);
				resulturlfb.val("https://www.facebook.com/fb_digitaldren/posts/" + result);
              }else {
                resulturl.val('No result!');
              }
              spinner.slideUp();
              window.open(resultgenerate, '_blank');
              spinner.hide();
			  $(".input-group-append").show();
            },
            error: function() {
              resulturl.val('Error loading feed!');
            }
          });
});  	
}
async function convertlink0(){
	var spinner = $("#spinner");
	spinner.slideDown();
	console.log("generate url value: "+$('#generateurl').val());
	if (gapi.auth2.getAuthInstance().isSignedIn.get() == true){
//		authenticate().then(loadClient).then(execute).then(convertlink2);
		authenticate().then(loadClient).then(execute).then(post2fb).then(convertlink2);
	}
	await execute();
	await post2fb();
	await convertlink2();
	console.log("generate url value 2: "+$('#generateurl').val());
}
window.onLoadCallback = function(){
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "600473664923-s0374163sm24dp8s46m4din1fi7ibc9c.apps.googleusercontent.com"});
  });
}
  $(document).ready(function(){
      $("#formgroup2").hide();
      $("#spinner").hide();
      clipboard.on('success', function(e) {
        $('#msg').html('<b>Copied!</b> Link has been copied to clipboard.');
      });
      clipboard2.on('success', function(e) {
        $('#msgfb').html('<b>Copied!</b> Link has been copied to clipboard.');
      });
      $("#btngenerate0").on("click",function(){
		$(".input-group-append").hide();
        convertlink0();

      });
      $('form#form-convert0').on('submit', function(e){
        e.preventDefault();
        convertlink0();
     });
  });


//]]>;   
</script>
