from .db import db, add_prefix_for_prod, environment, SCHEMA


user_cart = db.Table(
    'product_reviews',
    db.Model.metadata,
    db.Column("users", db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column("products", db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), primary_key=True),
    db.Column("amount", db.Integer)
)

if environment == "production":
    user_cart.schema = SCHEMA
