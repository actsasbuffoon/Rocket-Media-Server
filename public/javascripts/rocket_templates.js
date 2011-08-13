templates = {}


// * * * * * Dump of templates.app * * * * *


templates.app = {}


// * * * * * Dump of templates.app.about * * * * *


templates.app.about = function anonymous(locals) {
var __ = { lineno: 1, input: "h1 About\n\np This site tells you about all the crappy movies that have been released.", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
buf.push('About');
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 3;
buf.push('<p>');
buf.push('This site tells you about all the crappy movies that have been released.');
__.lineno = undefined;
buf.push('</p>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app.form_errors * * * * *


templates.app.form_errors = function anonymous(locals) {
var __ = { lineno: 1, input: "h2 There was an error with processing your input\nul\n  - for (var k in errors)\n    li= k + \" \" + errors[k]", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h2>');
buf.push('There was an error with processing your input');
__.lineno = undefined;
buf.push('</h2>');
__.lineno = 3;
buf.push('<ul>');
__.lineno = undefined;
__.lineno = 3;
 for (var k in errors)
{
__.lineno = 4;
__.lineno = 4;
buf.push('<li>');
var __val__ = k + " " + errors[k]
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</li>');
}
buf.push('</ul>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app.layout * * * * *


templates.app.layout = function anonymous(locals) {
var __ = { lineno: 1, input: "#wrapper\n  #header\n    h1 MediaServer\n  .table\n    #main\n      #content\n    #uploads\n  #footer\n    p Don't steal my stuff.", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<div');
buf.push(attrs({ 'id':('wrapper') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 2;
buf.push('<div');
buf.push(attrs({ 'id':('header') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 3;
buf.push('<h1>');
buf.push('MediaServer');
__.lineno = undefined;
buf.push('</h1>');
buf.push('</div>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ "class": ('table') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<div');
buf.push(attrs({ 'id':('main') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 6;
buf.push('<div');
buf.push(attrs({ 'id':('content') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
buf.push('</div>');
__.lineno = 7;
buf.push('<div');
buf.push(attrs({ 'id':('uploads') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
buf.push('</div>');
__.lineno = 8;
buf.push('<div');
buf.push(attrs({ 'id':('footer') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 9;
buf.push('<p>');
buf.push('Don\'t steal my stuff.');
__.lineno = undefined;
buf.push('</p>');
buf.push('</div>');
buf.push('</div>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app.upload * * * * *


templates.app.upload = function anonymous(locals) {
var __ = { lineno: 1, input: "input#fileupload(name='fileupload', type='file')\ninput(type='button', onclick='readfile()', value='Click me!')\n#filename\n#filesize\n#uploadbar\n#filecontent", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<input');
buf.push(attrs({ 'id':('fileupload'), 'name':('fileupload'), 'type':('file') }));
buf.push('/>');
__.lineno = 3;
buf.push('<input');
buf.push(attrs({ 'type':('button'), 'onclick':('readfile()'), 'value':('Click me!') }));
buf.push('/>');
__.lineno = 3;
buf.push('<div');
buf.push(attrs({ 'id':('filename') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ 'id':('filesize') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 5;
buf.push('<div');
buf.push(attrs({ 'id':('uploadbar') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 6;
buf.push('<div');
buf.push(attrs({ 'id':('filecontent') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.song * * * * *


templates.song = {}


// * * * * * Dump of templates.song.edit * * * * *


templates.song.edit = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= title\n#form_errors\nform(action=action, method='POST')\n\n  != hidden_input(\"song._id\", song._id)\n  != text_input(\"song.title\", song.title)\n  != text_input(\"song.artist\", song.artist)\n  != simple_upload('song.file', song.file)\n  \n  input(type='submit')", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = title
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 2;
buf.push('<div');
buf.push(attrs({ 'id':('form_errors') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 4;
buf.push('<form');
buf.push(attrs({ 'action':(action), 'method':('POST') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
var __val__ = hidden_input("song._id", song._id)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 6;
var __val__ = text_input("song.title", song.title)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 7;
var __val__ = text_input("song.artist", song.artist)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 8;
var __val__ = simple_upload('song.file', song.file)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 10;
buf.push('<input');
buf.push(attrs({ 'type':('submit') }));
buf.push('/>');
buf.push('</form>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.song.index * * * * *


templates.song.index = function anonymous(locals) {
var __ = { lineno: 1, input: "- if (songs.length > 0)\n  h1 Listing Songs\n\n  #song-list\n    ul.songs\n      - for (var i in songs)\n        li\n          != link_to(songs[i].title, {\"Song.show\": {_id: songs[i][\"_id\"]}})\n- else\n  h1 No songs have been entered yet\n\n!= link_to(\"Create New Listing\", {\"Song.new\": \"\"}, {class: \"button\"})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
 if (songs.length > 0)
{
__.lineno = 2;
__.lineno = 2;
buf.push('<h1>');
buf.push('Listing Songs');
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ 'id':('song-list') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<ul');
buf.push(attrs({ "class": ('songs') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 6;
 for (var i in songs)
{
__.lineno = 7;
__.lineno = 8;
buf.push('<li>');
__.lineno = undefined;
__.lineno = 8;
var __val__ = link_to(songs[i].title, {"Song.show": {_id: songs[i]["_id"]}})
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
}
buf.push('</ul>');
buf.push('</div>');
}
 else
{
__.lineno = 10;
__.lineno = 10;
buf.push('<h1>');
buf.push('No songs have been entered yet');
__.lineno = undefined;
buf.push('</h1>');
}
__.lineno = 12;
var __val__ = link_to("Create New Listing", {"Song.new": ""}, {class: "button"})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.song.show * * * * *


templates.song.show = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= song.title\nb Artist:\n= song.artist\n\nhr\n!= link_to(\"Back to song list\", {'Song.index': \"\"})\n\\ \\| \n!= link_to(\"Edit\", {'Song.edit': {id: song._id}})\n\\ \\| \n!= link_to(\"Delete\", {\"Song.delete\": {id: song._id}})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = song.title
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 2;
buf.push('<b>');
buf.push('Artist:');
__.lineno = undefined;
buf.push('</b>');
__.lineno = 3;
var __val__ = song.artist
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = 6;
buf.push('<hr');
buf.push(attrs({  }));
buf.push('/>');
__.lineno = 6;
var __val__ = link_to("Back to song list", {'Song.index': ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 7;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 8;
var __val__ = link_to("Edit", {'Song.edit': {id: song._id}})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 9;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 10;
var __val__ = link_to("Delete", {"Song.delete": {id: song._id}})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}