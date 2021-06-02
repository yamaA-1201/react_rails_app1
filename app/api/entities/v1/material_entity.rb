module Entities
    module V1
      class MaterialEntity < RootEntity
        expose :product_id, :name,:cost,:unit,:volume,:note
      end
    end
  end