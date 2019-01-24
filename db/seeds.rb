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

# -----------------------------

designs = Message.create(
  command: 'cd',
  action: 'designs'
)
greeting.children << designs


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

# -----------------------------

code = Message.create(
  command: 'cd',
  action: 'code'
)
greeting.children << code


react_rails = Message.create(
  command: 'cd',
  action: 'React+Rails'
)
code.children << react_rails

koti = Message.create(
  command: 'open',
  action: 'https://sportspots-production.herokuapp.com/'
)
react_rails.children << koti


rails = Message.create(
  command: 'cd',
  action: 'Rails'
)
code.children << rails

sport_spots = Message.create(
  command: 'open',
  action: 'www.koti.patricknpint.com'
)
rails.children << sport_spots

seabookings = Message.create(
  command: 'open',
  action: 'www.seabookings.com'
)
rails.children << seabookings

# -----------------------------

projects = Message.create(
  command: 'cd',
  action: 'projects'
)
greeting.children << projects


product_management = Message.create(
  command: 'cd',
  action: 'Product Management'
)
projects.children << product_management

growth_hacking = Message.create(
  command: 'cd',
  action: 'Growth Hacking'
)
projects.children << growth_hacking


koti = Message.create(
  command: 'open',
  action: 'www.koti.patricknpinto.com'
)
product_management.children << koti

nomadx = Message.create(
  command: 'open',
  action: 'www.nomdax.com'
)
growth_hacking.children << nomadx


