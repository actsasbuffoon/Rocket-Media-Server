class AppController
  bolt Rocket::Controller
  
  define_action :about do
    current_user.transmit({"App.about" => ""})
  end
  
  define_action :upload do
    current_user.transmit({"App.upload" => ""})
  end
  
  define_action :request_tempfile do
    id = Time.now.to_i.to_s + rand(9999999).to_s
    File.open(File.join(APP_ROOT, "tmp", id), "w") {|f| f.write ""}
    current_user.transmit("App.tempfile" => {id: id, req_id: params["req_id"]})
  end
  
  define_action :receive_file do
    File.open(File.join(APP_ROOT, "tmp", params["id"]), "ab") {|f| f.write Base64.decode64(params["chunk"])}
    current_user.transmit({"App.finished_upload" => {id: params["id"], req_id: params["req_id"]}}) if params["complete"]
  end
  
end