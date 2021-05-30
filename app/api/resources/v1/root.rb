module Resources
    module V1
      class Root < Grape::API
        version 'v1'
        format :json
        content_type :json, 'application/json'
  
        # app/api/resources/v1/product.rbをマウント
        mount Resources::V1::Products
        mount Resources::V1::Materials

      end
    end
  end