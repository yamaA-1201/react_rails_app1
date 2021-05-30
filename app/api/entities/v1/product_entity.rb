module Entities
  module V1
    class ProductEntity < RootEntity
      # name, email, ageのみ表示する
      expose :id,:name, :price,:material_cost,:category
    end
  end
end