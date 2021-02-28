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
8. Migrating Database <br>
	To apply the schema changes in Postgres Database whenever models in Django are changed, we need to migrate the database through these instructions.
```
	cd <project_name>
	python manage.py makemigrations
	python manage.py migrate
```
9. Create Super User and Trial Run Django - 127.0.0.1:8000/ <br>
	A superuser allows us to manage the database through admin page. 127.0.0.1:8000/admin
```
	python manage.py createsuperuser
		user - <project>
		email - <project@example.com>
		password - <project12345>
	python manage.py runserver
```
10. Running Backend Server
```
	python manage.py runserver
```
11. Add Django App and change <project_name>/settings.py file

```
	python manage.py startapp <app_name>
```
```
	INSTALLED_APPS = [
			'django.contrib.admin',
			'django.contrib.auth',
			'django.contrib.contenttypes',
			'django.contrib.sessions',
			'django.contrib.messages',
			'django.contrib.staticfiles',
+			'<app_name>',
	]
```
12. Using Graphene
```
	pip install graphene-django
```
13. Create a graphql folder in the app folder <br>
	Inside this folder, create a schema.py file with the similar structure

```
	import graphene

	from .account.mutation import Mutation as AccountMutation
	from .account.query import Query as AccountQuery

	class Mutations(AccountMutation, graphene.ObjectType): pass
	class Queries(AccountQuery, graphene.ObjectType): pass

	schema = graphene.Schema(query=Queries, mutation=Mutations)
```
14. Add graphene-django app in the INSTALLED_APPS in settings.py
```
	INSTALLED_APPS = [
			'django.contrib.admin',
			'django.contrib.auth',
			'django.contrib.contenttypes',
			'django.contrib.sessions',
			'django.contrib.messages',
			'django.contrib.staticfiles',
			'<project_name>',
+			'graphene_django',
	]
``` 