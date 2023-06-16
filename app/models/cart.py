from .db import db, add_prefix_for_prod, environment, SCHEMA

class Cart(db.Model):
    __tablename__ = 'carts'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    quantity = db.Column(db.Integer, nullable=False)


    user = db.relationship(
        "User",
        back_populates="userCart"
    )
    products = db.relationship(
        "Product",
        back_populates="cartUser"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }
