SongController = function() {
  this.index = function(args) {
    $("#content").html(templates.song.index(args))
  }
  
  this.show = function(args) {
    $("#content").html(templates.song.show(args))
  }
  
  this.edit = function(args) {
    $("#content").html(templates.song.edit(args))
  }
}