module ApplicationHelper
  def render_if(condition, record)
    render record if condition
  end
end
