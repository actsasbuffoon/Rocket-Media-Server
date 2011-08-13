var link_to = function(text, args, attrs) {
  attrs = attrs || {}
  if (attrs.tag_type) {
    tag_type = attrs.tag_type
    delete(attrs.tag_type)
  }
  else {
    tag_type = "a"
  }
  attrs.href = attrs.href || "#"
  attrs.onclick = args.onclick || "rocket(" + JSON.stringify(args) + ")"
  t = []
  for (var k in attrs) {
    t.push(k + "='" + attrs[k].replace("'", "\\'") + "'")
  }
  str = "<" + tag_type + " " + t.join(" ") + ">" + text + "</" + tag_type + ">"
  return str
}

var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {

          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }

          output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

      }

      return output;
  },

  // public method for decoding
  decode : function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

          enc1 = Base64._keyStr.indexOf(input.charAt(i++));
          enc2 = Base64._keyStr.indexOf(input.charAt(i++));
          enc3 = Base64._keyStr.indexOf(input.charAt(i++));
          enc4 = Base64._keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }

      }

      output = Base64._utf8_decode(output);

      return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }

      }

      return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }

      }
      return string;
  }
}

var size_estimator = function(bytes) {
  n = false
  if (bytes < 1024) {
    n = [bytes, "B"]
  }
  else if (bytes < 1024 * 1024) {
    n = [bytes / 1024.0, "KB"]
  }
  else if (bytes < 1024 * 1024 * 1024) {
    n = [bytes / 1024.0 / 1024, "MB"]
  }
  else if (bytes < 1024 * 1024 * 1024 * 1024) {
    n = [bytes / 1024.0 / 1024 / 1024, "GB"]
  }
  else if (bytes < 1024 * 1024 * 1024 * 1024 * 1024) {
    n = [bytes / 1024.0 / 1024 / 1024 / 1024, "TB"]
  }
  else {
    n = [bytes / 1024.0 / 1024 / 1024 / 1024 / 1024, "PB"]
  }
  return "" + (Math.round(n[0]*100)/100) + n[1]
}

var file_uploads = []

//var RocketUploader = function(file, type) {
//  
//  if (type == undefined) {
//    this.type = "simple"
//  }
//  else {
//    this.type = type
//  }
//  
//  this.file_chunk_size = 1024 * 100
//  
//  var upload_files = function(file_info) {
//    $(files).each(function(i, e) {
//      this.file = file
//      if (this.type == "simple") {
//        this.simple_readfile()
//      }
//      else if (this.type == "form_first") {
//        //this.req_id = Math.random() * 9999999
//        //file_uploads[this.req_id] = this
//        //rocket({"App.request_tempfile": {req_id: this.req_id}})
//      }
//      else if (this.type == "file_first") {
//        
//      }
//    })
//  }
//  
//  this.set_temp_id = function(t_id) {
//    this.temp_id = t_id
//    this.readfile()
//  }
//  
//  this.chunk_callback = function(e) {
//    if (this.start + this.file_chunk_size < this.file.fileSize) {
//      console.log("Run the method again")
//      rocket({"App.receive_file": {chunk: btoa(e.target.result), complete: false, index: this.start + this.file_chunk_size, id: this.temp_id, req_id: this.req_id}})
//      this.readfile(this.start + this.file_chunk_size)
//    }
//    else {
//      rocket({"App.receive_file": {chunk: Base64.encode(e.target.result), complete: true, index: this.file.fileSize, id: this.temp_id, req_id: this.req_id}})
//      console.log("Stop the method.")
//    }
//  }
//  
//  this.oncomplete = function() {}
//  
//  this.readfile = function(start) {
//    
//    //document.getElementById('filename').innerHTML = document.getElementById('fileupload').files[0].fileName
//    //document.getElementById('filesize').innerHTML = size_estimator(document.getElementById('fileupload').files[0].fileSize)
//    
//    r = new FileReader()
//    
//    r.file_uploader = this
//    
//    r.onload = function(e) {
//      this.file_uploader.chunk_callback(e)
//    }
//    
//    r.onerror = function(e) {
//      console.log("ERROR")
//      console.log(e)
//    }
//    
//    if (start == undefined) {
//      this.start = 0
//    }
//    else {
//      this.start = start
//    }
//    if (this.start + this.file_chunk_size > this.file.fileSize) {
//      r.readAsBinaryString(this.file.webkitSlice(this.start, this.file.fileSize))
//      console.log("" + this.start + "/" + this.file.fileSize + " FINSIHED!")
//    }
//    else {
//      console.log("more file remaining")
//      r.readAsBinaryString(this.file.webkitSlice(this.start, this.start + this.file_chunk_size))
//      console.log("" + this.start + "/" + (this.start + this.file_chunk_size) + " PROGRESS")
//    }
//  }
//}

var RocketUploader = function(elem, form) {
  
  var RocketUpload = function(uploader, file, type, action, real_input) {
    
    this.simple_read = function() {
      this.id = Math.random()
      this.form.wait_for(this.id)
      r = new FileReader()
      r.rocket_upload = this
      r.onload = function(e) {
        real_input.val(btoa(e.target.result))
        this.rocket_upload.form.finished_with(this.rocket_upload.id)
      }
      r.onerror = function(e) {
        console.log(e)
      }
      r.readAsBinaryString(this.file)
    }
    
    this.uploader = uploader
    this.form = this.uploader.form
    this.file = file
    this.type = type
    this.real_input = real_input
    this.action = action
    if (this.type == "simple") {
      this.simple_read()
    }
  }
  
  this.form = form
  type = $(elem).children(".upload_type").val()
  action = $(elem).children(".upload_action").val()
  real_input = $(elem).children(".rocket_real_file_input")
  file_input = $(elem).children("input[type='file']")[0]
  console.log("Files:")
  for (i = 0; i < file_input.files.length; i++) {
    console.log(file_input.files[i])
    new RocketUpload(this, file_input.files[i], type, action, real_input)
  }
}

// We need to keep the form from submitting until all uploader callbacks have completed. How to handle that?
submit_callback = function(evnt) {
  evnt.preventDefault()
  new RocketForm(evnt)
}

// Represents the form data that needs to be sent. Supports callback registration to delay form submission.
var RocketForm = function(evnt) {
  
  this.waiting = []
  
  this.wait_for = function(key) {
    console.log("Waiting for " + key)
    this.waiting.push(key)
  }
  
  this.finished_with = function(key) {
    console.log("No longer waiting for " + key)
    console.log(key)
    for (i = 0; i < this.waiting.length; i++) {
      if (this.waiting[i] == key) {
        console.log(this.waiting[i])
        this.waiting.splice(key, 1)
      }
    }
    this.check_submission()
  }
  
  this.check_submission = function() {
    console.log("Checking submission")
    if (this.waiting.length == 0) {
      console.log("Ready!")
      this.submit()
    }
    else {
      console.log("Not ready.")
      console.log(this.waiting)
      return false
    }
  }
  
  this.submit = function() {
    console.log("Called submit!")
    var frm = this
    this.frm.find("input, textarea, select").each(function(i, e) {
      el = $(e)
      if (el.attr("type") == "file") {
        console.log("Found a file uploader")
        if (el.parent().children(".upload_type").val() == "simple") {
          frm.vals[el.parent().children(".rocket_real_file_input").attr("name")] = el.parent().children(".rocket_real_file_input").val()
        }
      }
      else if (el.parent().hasClass("rocket_file_upload")) {
        // Do nothing
      }
      else {
        if (el.val()) {
          frm.vals[el.attr("name")] = el.val()
        }
        else {
          if (el.attr("type") == "submit") {
            frm.vals["submit"] = null
          }
        }
      }
    })
    console.log(this.vals)
    //rocket(obj)
  }
  
  this.elem = $(evnt.target)
  this.frm = $(this.elem.parents("form"))
  this.vals = {}
  this.vals["_method"] = this.frm.attr("method") || "POST"
  var ul = this
  this.frm.find("input, textarea, select").each(function(i, e) {
    el = $(e)
    if (el.attr("type") == "file") {
      console.log("Found a file uploader")
      new RocketUploader(el.parent(), ul)
    }
  })
  this.check_submission()
}