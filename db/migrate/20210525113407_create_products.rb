class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.float :material_cost
      t.string :category
      t.string :avatar_path

      t.timestamps
    end
  end
end
