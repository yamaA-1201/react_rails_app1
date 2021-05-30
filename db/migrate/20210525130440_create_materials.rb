class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.references :product ,foreign_key: true
      t.float :cost
      t.float :volume
      t.float :total_cost
      t.text :note

      t.timestamps
    end
  end
end
