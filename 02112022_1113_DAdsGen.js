<div style="text-align: justify;">When it comes to <b>monetizing your website</b>, ads can be an easy option. If you are just getting started, or maybe you're waiting to be approved by adsense(or other ad networks) and you want to <b>display</b> and <b>rotate your banner ads</b> in your website to grab attention and drive traffic to your various affiliate offers, this tool is definitely for you! All you need is your affiliate link(s) and banner image links to generate special code for your website.</div> <br><br>
<style>
body{font-family:Gill Sans MT;}fieldset{border:solid 1px #000;padding:10px;display:block;clear:both;margin:5px 0}legend{padding:0 10px;background:#000;color:#fff}label.numAds{float:left;display:block;margin:5px;}
  label.bType,label.fBSrcs,label.fAffLnk{float:left;display:block;margin:5px;clear:both;}#add{float:left;display:block;margin:15px;clear:left;}
 #gencode{float:right;display:block;margin:15px;clear:right;} input.bType,input.fBSrcs,input.fAffLnk,input.remove,textarea.bType,textarea.fBSrcs,textarea.fAffLnk,select.bType,select.fBSrcs,select.fAffLnk{float:left;display:block;margin:5px;}
  input.fAffLnk,textarea.fBSrcs{width: 95%;}  
  .opcode{float:left;display:block;margin:5px;clear:left;}
  .copytoclipboard{float:right;display:block;margin:5px;clear:right;}
  .outp{margin:5px;clear:both;width: 99%;}
  #middle-post{float:none;clear:both;}  
</style>
<script>
    $(document).ready(function() {
    $("#add").click(function() {
        var lastField = $("#buildyourform div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fAffLnk = $("<label for=\"affLnk" + intId + "\" class=\"fAffLnk\" >Affiliate Link " + intId + ":</label><input type=\"text\" class=\"fAffLnk\"  placeholder=\"Paste Your Affiliate Link Here\" id=\"affLnk" + intId + "\"/>");
        var fBSrcs = $("<label for=\"bSrcs" + intId + "\" class=\"fBSrcs\">Banner Links " + intId + ":</label><textarea class=\"fBSrcs\"   id=\"bSrcs" + intId + "\" rows=\"4\" cols=\"80\" placeholder=\"Paste Banner Links Here (one link per line / remove empty lines)\"></textarea>");
        var bType = $("<label for=\"bType" + intId + "\" class=\"bType\">Banner Shape " + intId + ":</label><select class=\"bType\" id=\"bType" + intId + "\"><option value=\"horizontal\">horizontal</option><option value=\"vertical\">vertical</option><option value=\"square\">square</option></select>");
        var removeButton = $("<input type=\"button\" class=\"remove\"  id=\"remove" + intId + "\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
          	$("#remove" + String(intId - 1)).show();
        });
        fieldWrapper.append(bType);
        fieldWrapper.append(fAffLnk);
        fieldWrapper.append(fBSrcs);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);

        $("#remove" + String(intId - 1)).hide();

      	
    });
    $("#preview").click(function() {
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
        $("#buildyourform div").each(function() {
            var id = "input" + $(this).attr("id").replace("field","");
            var label = $("<label for=\"" + id + "\">" + $(this).find("input.fAffLnk").first().val() + "</label>");
            var input;
            switch ($(this).find("select.bType").first().val()) {
                case "horizontal":
                    input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "vertical":
                    input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "square":
                    input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                    break;    
            }
            fieldSet.append(label);
            fieldSet.append(input);
        });
        $("body").append(fieldSet);
    });
    $("#gencode").click(function() {
      	var numAds_ = $( "#numAds option:selected" ).text();
      	var lastField2 = $("#buildyourform div:last");
        var intId2 = (lastField2 && lastField2.length && lastField2.data("idx")) || 1;
		const newarr_h = [];
        const newarr_v = [];
        const newarr_s = [];
        for(var w=1; w<=intId2; w++) {
            var arr = $("#bSrcs"+w.toString()).val().split(/\n/);
            var affL = $("#affLnk"+w.toString()).val();
          	var bShp = $( "#bType"+w.toString()+" option:selected" ).text();
            arr = jQuery.map( arr, function( n,i ) {
                  return ( "\"" + n + "%%" + affL + "%%" + bShp + "\"" );
                  console.log("\"" + n + "%%" + affL + "\"");
            });
        	 switch (bShp) {
                case "horizontal":
                    newarr_h.push(arr);
                    break;
                case "vertical":
                    newarr_v.push(arr);
                    break;
                case "square":
                    newarr_s.push(arr);
                    break;    
            } 
      const newarrSrc_h = [];
      const newarrSrc_v = [];
      const newarrSrc_s = [];    
      const newarrDiv = [];
      const newarrDivHTML = [];    
      var adH = parseInt($( "#numAds_h option:selected" ).val()),
          adV = parseInt($( "#numAds_v option:selected" ).val()),
          adS = parseInt($( "#numAds_s option:selected" ).val());  
        	 for(var k=0; k<adH; k++) {
               var arrSrcsH = "bSrcH"+k+" = arr_h[rnumH["+k+"]].split(\"%%\")";
        	  	newarrSrc_h.push(arrSrcsH);
               var arrDiv = "$(\"#adhorizontal" + eval(k + 1) + "\").html('<a target=\"_blank\" href=\"'+bSrcH"+k+"[1]+'\"><img src=\"'+bSrcH"+k+"[0]+'\" border=\"0\" alt=\"\" /></a>')";
               newarrDiv.push(arrDiv);
               var arrDivHTML = "<div id=\"adhorizontal" + eval(k + 1) + "\"></div>"
               newarrDivHTML.push(arrDivHTML);
             }

        	 for(var l=0; l<adV; l++) {
               var arrSrcsV = "bSrcV"+l+" = arr_v[rnumV["+l+"]].split(\"%%\")";
        	  	newarrSrc_v.push(arrSrcsV);
               var arrDiv = "$(\"#advertical" + eval(l + 1) + "\").html('<a target=\"_blank\" href=\"'+bSrcV"+l+"[1]+'\"><img src=\"'+bSrcV"+l+"[0]+'\" border=\"0\" alt=\"\" /></a>')";
               newarrDiv.push(arrDiv);
               var arrDivHTML = "<div id=\"advertical" + eval(l + 1) + "\"></div>"
               newarrDivHTML.push(arrDivHTML);
             }     	

        	 for(var m=0; m<adS; m++) {
               var arrSrcsS = "bSrcS"+m+" = arr_s[rnumS["+m+"]].split(\"%%\")";
        	  	newarrSrc_s.push(arrSrcsS);
               var arrDiv = "$(\"#adsquare" + eval(m + 1) + "\").html('<a target=\"_blank\" href=\"'+bSrcS"+m+"[1]+'\"><img src=\"'+bSrcS"+m+"[0]+'\" border=\"0\" alt=\"\" /></a>')";
               newarrDiv.push(arrDiv);
               var arrDivHTML = "<div id=\"adsquare" + eval(m + 1) + "\"></div>"
               newarrDivHTML.push(arrDivHTML);               
             }        	       
            if (newarr_h != "" && newarr_v != "" && newarr_s != ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_h=[" + newarr_h + "],arr_v=[" + newarr_v + "],arr_s=[" + newarr_s + "],rnumH=rnumG("+adH+",0,arr_h.length-1),rnumV=rnumG("+adV+",0,arr_v.length-1),rnumS=rnumG("+adS+",0,arr_s.length-1)," + newarrSrc_h + "," + newarrSrc_v + "," + newarrSrc_s + ";" + newarrDiv+"});\n<\/script>"); 
               $('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h != "" && newarr_v != "" && newarr_s == ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_h=[" + newarr_h + "],arr_v=[" + newarr_v + "],rnumH=rnumG("+adH+",0,arr_h.length-1),rnumV=rnumG("+adV+",0,arr_v.length-1)," + newarrSrc_h + "," + newarrSrc_v + ";" + newarrDiv+"});\n<\/script>"); 
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h != "" && newarr_v == "" && newarr_s != ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_h=[" + newarr_h + "],arr_s=[" + newarr_s + "],rnumH=rnumG("+adH+",0,arr_h.length-1),rnumS=rnumG("+adS+",0,arr_s.length-1)," + newarrSrc_h + "," + newarrSrc_s + ";" + newarrDiv+"});\n<\/script>");
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h == "" && newarr_v != "" && newarr_s != ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_v=[" + newarr_v + "],arr_s=[" + newarr_s + "],rnumV=rnumG("+adV+",0,arr_v.length-1),rnumS=rnumG("+adS+",0,arr_s.length-1)," + newarrSrc_v + "," + newarrSrc_s + ";" + newarrDiv+"});\n<\/script>"); 
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h != "" && newarr_v == "" && newarr_s == ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_h=[" + newarr_h + "],rnumH=rnumG("+adH+",0,arr_h.length-1)," + newarrSrc_h + ";" + newarrDiv+"});\n<\/script>"); 
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h == "" && newarr_v != "" && newarr_s == ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_v=[" + newarr_v + "],rnumV=rnumG("+adV+",0,arr_v.length-1)," + newarrSrc_v + ";" + newarrDiv+"});\n<\/script>"); 
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else if (newarr_h == "" && newarr_v == "" && newarr_s != ""){
                $('#outputjs').text("<script type='text/javascript'>\n/*generated from : \"https://my.digitaldren.com/dynamic-ads-generator\"*/$(window).bind(\"load\",function(){function rnumG(r,n,t){for(var a=r,e=n,o=t,u=new Array;u.length<a;){var f=Math.floor(Math.random()*(o-e)+.5)+e;-1==u.indexOf(f)&&u.push(f)}return u.sort(function(r,n){return r-n}),u}var arr_s=[" + newarr_s + "],rnumS=rnumG("+adS+",0,arr_s.length-1)," + newarrSrc_s + ";" + newarrDiv+"});\n<\/script>"); 
              	$('#outputhtml').text(newarrDivHTML.join("\n"));
            }else{
                alert("PLease double check your input!");
            }          
        }     
	});
});

</script>
<fieldset id="buildyourform"><legend>Generate Your Dynamic Ads!</legend>Number of Ads to display:<p/><label for="numAds_h">horizontal:</label><select class="numAds" id="numAds_h"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> <label for="numAds_v">vertical: </label><select class="numAds" id="numAds_v"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> <label for="numAds_s">square: </label><select class="numAds" id="numAds_s"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></fieldset><input class="add" id="add" type="button" value="Add Affiliate Link" /><input class="add" id="gencode" type="button" value="Generate Code" /><!--<input type="button" value="Preview form" class="add" id="preview" />--> <br /><div></div><fieldset class="outp" id="opcodediv"><legend>Javascript/HTML Code</legend>
  <label for="outputjs0" class="opcode"><b>Javacript</b> (paste the below code between the <kbd>&lt;head&gt;</kbd> and <kbd>&lt;/head&gt;</kbd> tags of your site):</label>
  <button class="btn btn-sm btn-secondary copytoclipboard" data-clipboard-action="copy" data-clipboard-target="#outputjs0" id="copytoclipboard" type="button"><i class="fa fa-copy"></i></button><textarea class="outp" cols="50" id="outputjs0" rows="1" readonly>&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js'&gt;&lt;/script&gt;</textarea>
  <label for="outputjs0" class="opcode"><b>Javacript</b> (paste the below code just above the <kbd>&lt;/body&gt;</kbd> tag of your site):</label>
  <button class="btn btn-sm btn-secondary copytoclipboard" data-clipboard-action="copy" data-clipboard-target="#outputjs" id="copytoclipboard" type="button"><i class="fa fa-copy"></i></button><textarea class="outp" cols="50" id="outputjs" rows="10" readonly></textarea>  <label for="outputhtml" class="opcode"><b>HTML</b>(paste each line <kbd>&lt;div id="..."&gt;&lt;/div&gt;</kbd> to any parts of your site):</label><button class="btn btn-sm btn-secondary copytoclipboard" data-clipboard-action="copy" data-clipboard-target="#outputhtml" id="copytoclipboard" type="button"><i class="fa fa-copy"></i></button><textarea class="outp" cols="50" id="outputhtml" rows="5" readonly></textarea> </fieldset><br>
