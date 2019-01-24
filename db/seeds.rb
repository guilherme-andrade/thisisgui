# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
puts "EMPTIED DATABASE"
puts "----------"

greeting = Message.create()


option1 = Message.create(
  command: 'cd',
  action: 'designs'
)


greeting.children << option1



option2 = Message.create(
  command: 'cd',
  action: 'code'
)

greeting.children << option2



option3 = Message.create(
  command: 'cd',
  action: 'projects'
)

greeting.children << option3

