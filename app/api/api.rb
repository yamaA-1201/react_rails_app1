class API < Grape::API
     prefix 'api'
    # http://localhost/api/
   
    # app/api/resources/v1/root.rbをマウント
    mount Resources::V1::Root
  end