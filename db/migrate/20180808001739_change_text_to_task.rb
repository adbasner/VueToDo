class ChangeTextToTask < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :text, :todo
    rename_column :tasks, :completed, :complete
  end
end
