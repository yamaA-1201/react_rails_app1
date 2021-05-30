module Resources
  module V1
    class Products < Grape::API
      resource :products do
        # アドレス→  GET http://localhost:3000/api/v1/products
        desc 'product all'
         get do
           present Product.all, with: Entities::V1::ProductEntity
         end

        # http://localhost:3000/api/v1/products/{:id}
        desc 'product'
        # パラメータ設定
         params do
          # 必須項目
           requires :id, type: Integer, desc: 'product id'

         end
         get ':id' do
           present Product.find(params[:id]),with: Entities::V1::ProductEntity

         end

         # POST http://localhost:3000/api/v1/products/create
         desc 'create product'
         params do 
          #requires: 必ず取得しないといけないもの
          #optional: nilでも問題ないもの
             requires :name,        type: String ,  desc:'product_name'
             requires :price,         type: String,   desc:'price'
             requires :material_cost,   type:String,     desc:'cost'
             optional :category,          type:String,   desc:'category'
             optional :avatar_path,       type:String,    desc:'carrierwave'
         end
         post :create do
          Product.create(
            name: params[:name],
            price: params[:price],
            material_cost: params[:material_cost],
            category: params[:category],
          )
        
         end

                  # POST http://localhost:3000/api/v1/products/search?
                  desc 'search product'
                  params do 
                    requires :id, type: Integer, desc: 'product id'
                      requires :name,        type: String ,  desc:'product_name'
                      requires :price,         type: String,   desc:'price'
                      requires :material_cost,   type:String,     desc:'float'
                      optional :category,          type:String,   desc:'category'
                      optional :avatar_path,       type:String,    desc:'carrierwave'
                  end
                  get :search do
                  present Product.find_by(
        
                     name: params[:name],
                     price: params[:price],
                     material_cost: params[:material_cost],
                     category: params[:category],
                   ),with: Entities::V1::ProductEntity
                 
                  end
        # PUT http://localhost:3000/api/v1/products/create
         desc "edit product"
          put ':id' do
            @product = Product.find_by(id: params[:id])
            Product.update(product_params)
              if @product.save!
    
                present @product, with: Entities::V1::ProductEntity
              else
                error!(I18n.t('api.errors.authentication'), 401)

              end
          end

          desc "delete product"
          delete ':id' do
            @product = Product.find_by(id: params[:id])
            @Product
              if @product.save!
    
                present @product, with: Entities::V1::ProductEntity
              else
                error!(I18n.t('api.errors.authentication'), 401)

              end
          end
        
          
          
      end
    end
  end
end