import graphene
from graphene_django import DjangoObjectType

from ...models import Account
from .mutation import AccountType

class Query(graphene.ObjectType):
	all_accounts = graphene.List(AccountType)
	def resolve_all_accounts(root, info, **kwargs):
		return Account.objects.all()