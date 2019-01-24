json.extract! message, :id, :command, :action, :created_at, :updated_at, :link
json.url message_url(message, format: :json)

json.children message.children
