class Task < ApplicationRecord
  def as_json
    {
      id: id,
      todo: todo,
      complete: complete
    }
  end
end
