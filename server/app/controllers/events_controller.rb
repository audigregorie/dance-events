class EventsController < ApplicationController
  # GET /events
  def index
    @events = if params[:search].present?
      search_term = "%#{params[:search]}%"
      Event.where("event_name ILIKE :search OR description ILIKE :search", search: search_term)
    else
      Event.all
    end

    render json: @events, status: :ok
  rescue => e
    render json: {error: "An error occurred while fetching events", details: e.message}, status: :internal_server_error
  end

  # GET /events/:id
  def show
    @event = Event.find_by(id: params[:id])

    if @event
      render json: @event, status: :ok
    else
      render json: {error: "Event not found"}, status: :not_found
    end
  rescue => e
    render json: {error: "An error occurred while fetching the event", details: e.message}, status: :internal_server_error
  end
end
