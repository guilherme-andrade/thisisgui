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

greeting = Message.create(
  command: 'cd'
)


designs = Message.create(
  command: 'cd',
  action: 'designs'
)
greeting.children << designs



code = Message.create(
  command: 'cd',
  action: 'code'
)
greeting.children << code



projects = Message.create(
  command: 'cd',
  action: 'projects'
)
greeting.children << projects


sport_spots = Message.create(
  command: 'cd',
  action: 'Sport Spots'
)
designs.children << sport_spots

file = Message.create(
  command: 'open',
  action: 'sport_spots.xd',
  link: 'https://xd.adobe.com/spec/0bdd8e8b-12ac-4a90-70fc-d281da373059-7dec/'
)
sport_spots.children << file

reco = Message.create(
  command: 'cd',
  action: 'ReCo'
)
designs.children << reco


file = Message.create(
  command: 'open',
  action: 'reco.xd',
  link: 'https://xd.adobe.com/spec/8dd7c78e-6cc1-47d7-70f8-bc2eed82dd7a-fbe6/'
)
reco.children << file
