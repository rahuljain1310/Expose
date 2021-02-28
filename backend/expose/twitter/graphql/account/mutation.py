import graphene
from graphene_django import DjangoObjectType

from ...models import Account

class AccountType(DjangoObjectType):
	class Meta: model = Account

class CreateAccountMutation(graphene.Mutation):
	
	account = graphene.Field(AccountType)
	
	class Arguments:
		data = graphene.JSONString(required=True)
	
	def mutate(self, info, data):
		try:
			account = Account(username = data['username'], fullname = data['fullname'])
			account.save()
			return CreateAccountMutation(account)
		except Exception as exception:
			print("Error in Account Mutation")
			print(exception)
			return None

class Mutation(graphene.ObjectType):
	create_account = CreateAccountMutation.Field()
