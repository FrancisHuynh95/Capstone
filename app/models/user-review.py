from .db import db, add_prefix_for_prod, environment, SCHEMA


user_reviews = db.Table(
    'user_reviews',
    db.Model.metadata,
    db.Column("reviews", db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), primary_key=True),
    db.Column("users", db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True)
)

if environment == "production":
    user_reviews.schema = SCHEMA
