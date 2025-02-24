class EventsController < ApplicationController
  before_action :set_event, only: [:show, :destroy, :update]

  # GET /events
  def index
    @result = EventQueryService.new(params).call
    render json: @result, status: :ok
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

  # POST /events/create
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :ok
    else
      render json: {error: "Failed to create event"}, status: :unprocessable_entity
    end
  rescue => e
    render json: {error: "An error occurred while creating the event", details: e.message}, status: :internal_server_error
  end

  # DESTROY /events/:id
  def destroy
    if @event.destroy
      render json: {message: "Event successfully deleted"}, status: :ok
    else
      render json: {error: "Failed to delete event"}, status: :unprocessable_entity
    end
  rescue => e
    render json: {error: "An error occurred while deleting the event", details: e.message}, status: :internal_server_error
  end

  # PUT /events/edit/:id
  def update
    if @event.update(event_params)
      render json: @event, status: :ok
    else
      render json: {error: "Failed to update event"}, status: :unprocessable_entity
    end
  rescue => e
    render json: {error: "An error occurred while updating the event", details: e.message}, status: :internal_server_error
  end

  private

  def set_event
    @event = Event.find_by(id: params[:id])
    unless @event
      render json: {error: "Event not found"}, status: :not_found
    end
  end

  def event_params
    params.require(:event).permit(
      :image_url, :event_name, :description, :location, :address, :city,
      :state, :country, :ticket_price, :currency, :event_type, :event_category,
      :video_url, :social_media, :website, :booking_url, :notes
    )
  end
end
