controllers = {}


// * * * * * Dump of controllers.AppController * * * * *


controllers.AppController = {}


// * * * * * Dump of controllers.AppController.form_errors * * * * *


controllers.AppController.form_errors = function (args) {
    $("#form_errors").html(templates.app.form_errors(args))
  }


// * * * * * Dump of controllers.AppController.about * * * * *


controllers.AppController.about = function (args) {
    $("#content").html(templates.app.about(args))
  }


// * * * * * Dump of controllers.AppController.upload * * * * *


controllers.AppController.upload = function (args) {
    $("#content").html(templates.app.upload(args))
  }


// * * * * * Dump of controllers.AppController.show_message * * * * *


controllers.AppController.show_message = function (args) {
    $.gritter.add({
      title: args["title"],
      text: args["msg"],
      sticky: false,
      time: 8000
    })
  }


// * * * * * Dump of controllers.AppController.tempfile * * * * *


controllers.AppController.tempfile = function (args) {
    file_uploads[args['req_id']].set_temp_id(args['id'])
  }


// * * * * * Dump of controllers.AppController.finished_upload * * * * *


controllers.AppController.finished_upload = function (args) {
    file_uploads[args['req_id']].oncomplete()
  }


// * * * * * Dump of controllers.SongController * * * * *


controllers.SongController = {}


// * * * * * Dump of controllers.SongController.index * * * * *


controllers.SongController.index = function (args) {
    $("#content").html(templates.song.index(args))
  }


// * * * * * Dump of controllers.SongController.show * * * * *


controllers.SongController.show = function (args) {
    $("#content").html(templates.song.show(args))
  }


// * * * * * Dump of controllers.SongController.edit * * * * *


controllers.SongController.edit = function (args) {
    $("#content").html(templates.song.edit(args))
  }