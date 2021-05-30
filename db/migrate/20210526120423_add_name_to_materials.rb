class AddNameToMaterials < ActiveRecord::Migration[5.2]
  def change
    add_column :materials, :name, :string
  end
end
