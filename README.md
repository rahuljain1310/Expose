OS - Ubuntu 18.04 \
Python 3.6.9

Installations
-----------------------------------------
1. git, npm, python3
2. Install virtualenv
```
	pip3 install virtualenv
```
3. Install postgresSQL
```
	sudo apt install postgresql postgresql-contrib
	sudo apt-get install libpq-dev
```

Setup
----------------------------------------
1. Create Git Repo
2. Setup React Frontend
```
	npx create-react-app frontend
```
3. Open PSQL and Create Postgres User, Database and Grant Privileges
```
	sudo -u postgres psql
	CREATE USER <project> WITH PASSWORD '<project123>';
	CREATE DATABASE <projectdb> WITH OWNER <project>;
	GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO <project>;
```
4. Setup Virtual Environment For Backend
```
	mkdir backend
	cd backend
	virtualenv -p /usr/bin/python3 venv
```
5. Activate Environment and Install Django, Psycopg2
```
	source venv/bin/activate
	python -m pip install Django
	python -m pip install psycopg2
```
6. Create Django Project in Backend Folder
```
	django-admin startproject <project_name>
```

7. To Setup Django with PostgresSQL - Change the DB Engine in settings.py
```
	DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.postgresql_psycopg2',
			'NAME': '<projectdb>',
			'USER': '<project>',
			'PASSWORD': '<project123>',
			'HOST': 'localhost',
			'PORT': '5432', 
		}
	}
```
8. Migrate Database
```
	cd <project_name>
	python manage.py makemigrations
	python manage.py migrate
```
9. Create Super User and Trial Run Django - 127.0.0.1:8000/
```
	python manage.py createsuperuser
		user - <project>
		email - <project@example.com>
		password - <project12345>
	python manage.py runserver
```
10. Run Backend
```
	python manage.py runserver
```
