from .db import db, add_prefix_for_prod, environment, SCHEMA


product_reviews = db.Table(
    'product_reviews',
    db.Model.metadata,
    db.Column("reviews", db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), primary_key=True),
    db.Column("products", db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), primary_key=True)
)

if environment == "production":
    product_reviews.schema = SCHEMA
