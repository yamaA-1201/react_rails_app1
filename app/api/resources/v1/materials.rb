module Resources
    module V1
      class Materials < Grape::API
       resource :materials do
          # アドレス→  GET http://localhost:3000/api/v1/materials
        desc 'material all'
        get do
          present Material.all, with: Entities::V1::MaterialEntity
        end

        desc 'material'
        # パラメータ設定
         params do
          # 必須項目
           requires :id, type: Integer, desc: 'material_id'
            end
         get ':id' do
           present Material.find(params[:id]),with: Entities::V1::ProductEntity
         end

         # POST http://localhost:3000/api/v1/material/create
         desc 'create product'
         params do 
          #requires: 必ず取得しないといけないもの
          #optional: nilでも問題ないもの
             requires :product_id,   type:Integer, desc:'index'
             requires :name,        type: String ,  desc:'material_name'
             requires :cost,         type: String,   desc:'float'
             requires :volume,          type:String,     desc:'float'
             optional :note,          type:String,   desc:'note'
         end
         post :create do

          Material.create!(

            product_id: params[:product_id],
            name: params[:name],
            cost: params[:cost],
            volume: params[:volume],
            note: params[:note],
          )
      

       
         end
         
       end
      end
    end
 end