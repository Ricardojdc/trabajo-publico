from peewee import SqliteDatabase, Model, CharField

# Define a SQLite database
db = SqliteDatabase('example.db')

# Define a Peewee model
class Person(Model):
    name = CharField()
    age = CharField()

    class Meta:
        database = db

# Connect to the database
db.connect()

# Create tables
db.create_tables([Person])

# Function for creating a new person
def create_person():
    name = input("Enter the name: ")
    age = input("Enter the age: ")
    try:
        with db.atomic():
            Person.create(name=name, age=age)
        print("Person created successfully!")
    except Exception as e:
        print(f"Error creating person: {e}")

# Function for fetching all persons
def read_persons():
    try:
        persons = Person.select()
        for person in persons:
            print(f"ID: {person.id}, Name: {person.name}, Age: {person.age}")
    except Exception as e:
        print(f"Error reading persons: {e}")

# Function for updating a person's age
def update_person_age():
    person_id = input("Enter the ID of the person to update: ")
    new_age = input("Enter the new age: ")
    try:
        with db.atomic():
            person = Person.get_by_id(person_id)
            person.age = new_age
            person.save()
        print("Person updated successfully!")
    except Exception as e:
        print(f"Error updating person: {e}")

# Function for deleting a person
def delete_person():
    person_id = input("Enter the ID of the person to delete: ")
    try:
        with db.atomic():
            person = Person.get_by_id(person_id)
            person.delete_instance()
        print("Person deleted successfully!")
    except Exception as e:
        print(f"Error deleting person: {e}")

# Menu loop
while True:
    print("\nMenu:")
    print("1. Create Person")
    print("2. Read Persons")
    print("3. Update Person Age")
    print("4. Delete Person")
    print("5. Exit")

    choice = input("Enter your choice (1-5): ")

    if choice == '1':
        create_person()
    elif choice == '2':
        read_persons()
    elif choice == '3':
        update_person_age()
    elif choice == '4':
        delete_person()
    elif choice == '5':
        break
    else:
        print("Invalid choice. Please enter a number between 1 and 5.")

# Close the database connection
db.close()