class SongController
  bolt Rocket::Controller
  
  define_action :index do
    songs = Song.all
    current_user.transmit({"Song.index" => {songs: songs}})
  end
  
  define_action :show do
    song = Song.find(params["_id"])
    current_user.transmit({"Song.show" => {song: song}})
  end
  
  define_action :new do
    current_user.transmit "Song.edit" => {id: nil, song: {}, title: "Upload Song", action: "Song.create"}
  end
  
  define_action :create do
    song = Song.new(params["song"])
    if song.save
      current_user.transmit({
        "Song.show" => {song: song},
        "App.show_message" => {title: "Notice", msg: "The song has been successfully added."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: song.errors}
    end
  end
  
  define_action :edit do
    song = Song.find(params["id"])
    current_user.transmit "Song.edit" => {id: params["id"], song: song, title: "Update Song", action: "Song.update"}
  end
  
  define_action :update do
    puts params.inspect
    song = Song.find(params["song"]["_id"])
    if song.update_attributes(params["song"])
      current_user.transmit({
        "Song.show" => {song: song},
        "App.show_message" => {title: "Notice", msg: "The song entry has been successfully updated."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: song.errors}
    end
  end
  
  define_action :delete do
    Song.find(params["id"]).destroy
    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The entry has been successfully deleted."}})
    redirect({"Song.index" => ""})
  end
  
  define_action :attach_file do
    
  end
  
end