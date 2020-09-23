## Recipe(table)
recipe_id int primary_key auto_increment
course_id int foreign_key
food_category_id int foreign_key
recipe_name varchar
recipe_description varchar
cuisine not sure
prep_time time
cook_time time

## Food Category(table)
food_category_id int primary_key auto_increment
food_category_name varchar

## Course(table)
course_id int primary_key auto_increment
course_name varchar
other course properties maybe, such as time of day?

## Ingredients(table)
ingredient_id int primary_key auto_increment
ingredient_name varchar
other ingredient properties maybe?

## Quantity(table)
quantity_id int primary_key auto_increment
recipe_id int foreign_key
ingredient_id int foreign_key
ingredient_measurement_id int foreign_key
ingredient_quantity float

## Measurements(table)
measurement_id int primary_key auto_increment
measurement_name varchar

## Recipe Steps(table) <-here
step_id int primary_key auto_increment
recipe_id int foreign_id
step_number int
step_description varchar