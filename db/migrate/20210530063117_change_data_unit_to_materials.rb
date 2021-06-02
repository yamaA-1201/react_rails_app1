class ChangeDataUnitToMaterials < ActiveRecord::Migration[5.2]
  def change
    change_column :materials, :unit, :string
  end
end
