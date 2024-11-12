// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
  id integer [primary key]
  public_uuid integer [unique]
  name varchar
  surname varchar
  role varchar
  email varchar [unique]
  password varchar
  created_at timestamp
}

Table messages {
  id integer [primary key]
  sender_id integer

  body text [note: 'Content of the post']
  user_id integer
  read_status timestamp
  created_at timestamp
}

Table sentTo {
  message_id integer
  receveir_id integer 
  indexes {
    (message_id, receveir_id) [pk]
    }
}

Ref: messages.sender_id > users.id // many-to-one

Ref: sentTo.message_id <> messages.id

Ref: sentTo.receveir_id > users.id