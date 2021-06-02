class RenameTotalCostColumnToMaterials < ActiveRecord::Migration[5.2]
  def change
    rename_column :materials, :total_cost, :unit

  end
end
