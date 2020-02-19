class AddAttributesToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :suit, :string
    add_column :cards, :value, :string
    add_column :cards, :deck_id, :bigint
    add_foreign_key :cards, :decks
  end
end
