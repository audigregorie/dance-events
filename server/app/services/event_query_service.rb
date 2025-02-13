class EventQueryService
  def initialize(params)
    @per_page = (params[:per_page] || 10).to_i
    @page = (params[:page] || 1).to_i
    @offset = (@page - 1) * @per_page
    @search = params[:search]
  end

  def call
    query = Event.all
    query = apply_search_filter(query) if @search.present?

    total_events = query.count
    events = query.limit(@per_page).offset(@offset)
    next_page = (total_events > @offset + @per_page) ? @page + 1 : nil

    {events: events, nextPage: next_page}
  end

  private

  def apply_search_filter(query)
    search_term = "%#{@search}%"
    query.where("event_name ILIKE :search OR description ILIKE :search", search: search_term)
  end
end
