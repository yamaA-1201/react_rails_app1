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
           requires :product_id, type: Integer, desc: 'material_id'
            end
         get ':id' do
           present Material.where(params[:product_id]).all,with: Entities::V1::ProductEntity
         end

         # POST http://localhost:3000/api/v1/materials/create
         desc 'create material'
         params do 
          #requires: 必ず取得しないといけないもの
          #optional: nilでも問題ないもの
             requires :product_id,   type:Integer, desc:'index'
             requires :name,        type: String ,  desc:'material_name'
             requires :cost,         type: String,   desc:'float'
             requires :volume,          type:String,     desc:'float'
             optional :unit,         type: String,         desc:'unit'
             optional :note,          type:String,   desc:'note'
         end
         post :create do

          Material.create!(
            product_id: params[:product_id],
            name: params[:name],
            cost: params[:cost],
            volume: params[:volume],
            unit: params[:unit],
            note: params[:note],
          )
      

       
         end
          # DELETE http://localhost:3000/api/v1/materials/delete
          desc 'delete material'
          params do 
           #requires: 必ず取得しないといけないもの
           #optional: nilでも問題ないもの
              requires :product_id,   type:Integer, desc:'index'
              requires :name,        type: String ,   desc:'material_name'
              requires :cost,         type: String,     desc:'float'
              requires :volume,          type:String,     desc:'float'
              optional :unit,         type: String,         desc:'unit'
              optional :note,          type:String,           desc:'note'
          end
          delete :delete do
            @Material= Material.find_by(
              product_id: params[:product_id],
              name: params[:name],
              cost: params[:cost],
              volume: params[:volume],
              unit: params[:unit],
              note: params[:note],
            )
              if @Material
              @Material.destroy
              else
                error!(I18n.t('api.errors.authentication'), 401)

              end
        
          end
       end
      end
    end
 end