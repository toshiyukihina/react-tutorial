class Api::CommentsController < ApplicationController

  def index
    respond_to do |format|
      format.json { render json: Comment.all }
    end
  end

  def create
    Comment.create!(create_params)
    respond_to do |format|
      format.json { render json: Comment.all }
    end
  end

  private

  def create_params
    params.permit(:author, :text)
  end

end
