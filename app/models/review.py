from .db import db, add_prefix_for_prod, environment, SCHEMA


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    reviewer_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')))
    review = db.Column(db.Text, nullable=False)
    star_rating = db.Column(db.Integer, nullable=False)


    reviewer = db.relationship(
        "User",
        back_populates="reviews"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'reviewer_id': self.reviewer_id,
            'review': self.review,
            'star_rating': self.star_rating
        }
