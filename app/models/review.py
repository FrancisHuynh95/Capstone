from .db import db, add_prefix_for_prod, environment, SCHEMA


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    review = db.Column(db.Text, nullable=False)
    star_rating = db.Column(db.Integer, nullable=False)


    user = db.relationship(
        "User",
        back_populates="reviews"
    )
    product = db.relationship(
        "Product",
        back_populates="reviews"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'reviewer': self.user.to_dict_no_review(),
            'review': self.review,
            'star_rating': self.star_rating,
            'product_id': self.product_id
        }
