#! /bin/bash

if [ ! -f db.sqlite3 ]; then
<<<<<<< HEAD
	cat example_db.sql eliza.sql | sqlite3 db.sqlite3
=======
    cp db.sqlite3.example db.sqlite3
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    echo 'db.sqlite3 created'
fi

python manage.py runserver
