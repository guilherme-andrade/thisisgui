class AddLinkToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :link, :string
  end
end
