from django.db import models

class ExposeType(models.TextChoices):
	Hypocrisy = 'H'
	Misinformation = 'M'
	MisleadingHeadling = 'X'
	
class Account(models.Model):
	id = models.AutoField(db_column='ID', primary_key=True)
	username = models.CharField(db_column='username', max_length=100, unique=True)
	fullname = models.CharField(db_column='fullname', max_length=100)

class Tweet(models.Model):
	tweet_id = models.CharField(db_column='tweet_id', max_length=32)
	account_id = models.ForeignKey(Account, on_delete=models.CASCADE)
	expose_type = models.CharField(db_column='expose_type', max_length=1, choices=ExposeType.choices)
	expose_description = models.TextField(db_column='description')

class Profile(models.Model):
	class SEX(models.TextChoices):
		MALE = "M"
		FEMALE = "F"
		OTHER = "O"
	user = models.OneToOneField('auth.User', related_name="profile", on_delete=models.CASCADE, primary_key=True)
	sex = models.CharField(max_length=1, choices = SEX.choices, default = SEX.MALE)
	dob = models.DateField()

	def __str__(self):
	 return self.user.first_name