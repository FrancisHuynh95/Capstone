from .db import db, add_prefix_for_prod, environment, SCHEMA




class Product(db.Model):
    __tablename__ = 'products'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255))
    product_img1 = db.Column(db.String(255))
    product_img2 = db.Column(db.String(255))
    product_img3 = db.Column(db.String(255))
    product_img4 = db.Column(db.String(255))
    product_img5 = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))


    user = db.relationship(
        "User",
        back_populates="products"
    )
    reviews = db.relationship(
        "Review",
        back_populates="product"
    )
    cartUser = db.relationship(
        "Cart",
        back_populates="products"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'product_img1': self.product_img1,
            'product_img2': self.product_img2,
            'product_img3' : self.product_img3,
            'product_img4': self.product_img4,
            'product_img5' : self.product_img5,
            'user': self.user.to_dict(),
            'reviews': [review.to_dict() for review in self.reviews]
        }
    def to_dict_no_user_no_review(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'product_img1': self.product_img1,
            'product_img2': self.product_img2,
            'product_img3' : self.product_img3,
            'product_img4': self.product_img4,
            'product_img5' : self.product_img5,
        }
