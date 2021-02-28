import graphene

from .account.mutation import Mutation as AccountMutation
from .account.query import Query as AccountQuery

class Mutations(AccountMutation, graphene.ObjectType): pass
class Queries(AccountQuery, graphene.ObjectType): pass

schema = graphene.Schema(query=Queries, mutation=Mutations)