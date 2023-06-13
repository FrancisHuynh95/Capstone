from flask import Blueprint, jsonify, redirect, request, session
from app.models import Cart, db, User
from flask_login import login_required

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/')
@login_required
def get_carts():
    userId = session.get('_user_id')
    carts = Cart.query.filter_by(user_id=userId).all()
    cartList = [cart.to_dict() for cart in carts]
    return jsonify(cartList)


@cart_routes.route('/product/<int:productId>/<int:amount>', methods=['POST'])
@login_required
def add_to_cart(productId,amount):
    userId = session.get('_user_id')
    get_item_from_cart = Cart.query.filter(Cart.product_id == productId).filter(Cart.user_id == str(userId)).first()

    if get_item_from_cart is None:
        print('\n\n\n in the if statement')

        newItem = Cart(
            user_id=userId,
            product_id=productId,
            quantity = amount)

        db.session.add(newItem)
        db.session.commit()

        return (newItem.to_dict())

    else:
        return jsonify({"error": "cannot add please check"})
