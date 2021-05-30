module Entities
    module V1
      class MaterialEntity < RootEntity
        # name, email, ageのみ表示する
        expose :name, :cost,:total_cost,:volume,:note
      end
    end
  end