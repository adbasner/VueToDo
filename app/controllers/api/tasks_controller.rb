class Api::TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks.as_json
  end

  def create
    task = Task.new(todo: params[:todo], complete: false)
    task.save
    render json: task.as_json
  end

  def show
    task = Task.find_by(id: params[:id])
    render json: task.as_json
  end

  def update
    task = Task.find_by(id: params[:id])
    task.todo = params[:todo] || task.todo
    task.complete = params[:complete] || task.complete
    task.save
    render json: task.as_json
  end

  def destroy
    task = Task.find_by(id: params[:id])
    task.destroy
    render json: {message: "Task successfully destroyed!"}
  end
end
