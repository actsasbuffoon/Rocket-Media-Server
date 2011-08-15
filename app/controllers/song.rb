class SongController
  bolt Rocket::Controller
  
  define_action :index do
    songs = Song.all
    current_user.transmit({"Song.index" => {songs: songs}})
  end
  
  define_action :show do
    song = Song.find(params["_id"])
    file = "/" + File.join("media", "#{song._id}.mp3")
    current_user.transmit({"Song.show" => {song: song, file: file}})
  end
  
  define_action :new do
    current_user.transmit "Song.edit" => {id: nil, song: {}, title: "Upload Song", action: "Song.create"}
  end
  
  # For simple upload
  #define_action :create do
  #  file = params["song"].delete "file"
  #  song = Song.new(params["song"])
  #  File.open(File.expand_path(File.join(APP_ROOT, "public", "media", "#{song._id}.mp3")), "wb") {|f| f.write Base64.decode64(file)} if file
  #  if song.save
  #    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The song has been successfully added."}})
  #    redirect({"Song.show" => {"_id" => song._id}})
  #  else
  #    current_user.transmit "App.form_errors" => {errors: song.errors}
  #  end
  #end
  
  # file_first
  define_action :create do
    file = params["song"].delete "file"
    song = Song.new(params["song"])
    FileUtils.mv(File.join(APP_ROOT, "tmp", file), File.join(APP_ROOT, "public", "media", "#{song._id}.mp3"))
    if song.save
      current_user.transmit({"App.show_message" => {title: "Notice", msg: "The song has been successfully added."}})
      redirect({"Song.show" => {"_id" => song._id}})
    else
      current_user.transmit "App.form_errors" => {errors: song.errors}
    end
  end
  
  define_action :edit do
    song = Song.find(params["id"])
    current_user.transmit "Song.edit" => {id: params["id"], song: song, title: "Update Song", action: "Song.update"}
  end
  
  # for simple upload
  #define_action :update do
  #  file = params["song"].delete "file"
  #  File.open(File.expand_path(File.join(APP_ROOT, "public", "media", "#{params["song"]["_id"]}.mp3")), "wb") {|f| f.write Base64.decode64(file)} if file
  #  song = Song.find(params["song"]["_id"])
  #  if song.update_attributes(params["song"])
  #    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The song entry has been successfully updated."}})
  #    redirect({"Song.show" => {"_id" => song._id}})
  #  else
  #    current_user.transmit "App.form_errors" => {errors: song.errors}
  #  end
  #end
  
  # For file_first upload
  define_action :update do
    file = params["song"].delete "file"
    song = Song.find(params["song"]["_id"])
    FileUtils.mv(File.join(APP_ROOT, "tmp", file), File.join(APP_ROOT, "public", "media", "#{song._id}.mp3"))
    if song.update_attributes(params["song"])
      current_user.transmit({"App.show_message" => {title: "Notice", msg: "The song entry has been successfully updated."}})
      redirect({"Song.show" => {"_id" => song._id}})
    else
      current_user.transmit "App.form_errors" => {errors: song.errors}
    end
  end
  
  define_action :delete do
    location = File.join(APP_ROOT, "public", "media", "#{params["id"]}.mp3")
    FileUtils.rm(location) if File.exist?(location)
    Song.find(params["id"]).destroy
    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The entry has been successfully deleted."}})
    redirect({"Song.index" => ""})
  end
  
  file_first :upload_song do |file|
    puts "File upload callback running: #{file.inspect}"
  end
  
end