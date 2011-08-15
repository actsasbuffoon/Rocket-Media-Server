$(".my_uploader").live("uploaded_chunk", function(e) {
  el = $(e.target)
  uploader = eval(el.attr("data-rocket-upload"))
  console.log("From progressbar callback")
  console.log(uploader)
  if (el.next(".progressbar").length == 0) {
    el.after("<div class='progressbar'></div><div class='time_remaining'></div><div class='speed'></div><div class='chunk'></div><div class='eta'></div>")
  }
  $(".progressbar").progressbar({
    value: (uploader.start / uploader.file.fileSize) * 100
  })
  time = (uploader.history[uploader.history.length - 1].time - uploader.history[0].time) / 1000
  bytes = 0
  for (i = 0; i < uploader.history.length; i++) {
    bytes += uploader.history[i].size
  }
  avg_rate = bytes / time
  
  $(".time_remaining").html("Time remaining: " + (Math.round((uploader.file.fileSize - uploader.start) / avg_rate)) + " seconds")
  $(".speed").html("Avg Speed: " + Math.round(avg_rate / 1024) + "KBps")
  $(".chunk").html("Last Chunk: " + uploader.history[uploader.history.length - 1].size + "B")
  
})

Rocket.first_connect = function() {
  $("body").html(templates.app.layout())
  rocket({"Song.index": ""})
}