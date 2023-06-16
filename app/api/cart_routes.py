from flask import Blueprint, jsonify, redirect, request, session
from app.models import Cart, db, User, Product
from flask_login import login_required
from app.forms import UpdateCartForm

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

        newItem = Cart(
            user_id=userId,
            product_id=productId,
            quantity = amount)

        db.session.add(newItem)
        db.session.commit()

        return (newItem.to_dict())

    else:
        return jsonify({"error": "cannot add please check"})

@cart_routes.route('/product/<int:productId>', methods=['PUT'])
@login_required
def update_cart(productId):
    userId = session.get('_user_id')
    cart = Cart.query.filter(Cart.product_id == productId).filter(Cart.user_id == str(userId)).first()

    form = UpdateCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if form.data['quantity']:
            cart.quantity = form.data['quantity']
        db.session.commit()
        return cart.to_dict()

    else :
        return jsonify({"error": "Cannot update the cart"})

@cart_routes.route('/product/<int:productId>', methods=['DELETE'])
@login_required
def remove_single_product(productId):
    userId = session.get('_user_id')
    cart = Cart.query.filter(Cart.product_id == productId).filter(Cart.user_id == str(userId)).first()


    db.session.delete(cart)
    db.session.commit()

    return jsonify({
        'message': "Item from cart has been removed"
    })

@cart_routes.route('/product/purchase', methods=['DELETE'])
@login_required
def remove_all_products():
    userId = session.get('_user_id')
    cart = Cart.query.filter(Cart.user_id == str(userId)).all()


    [db.session.delete(product) for product in cart]
    db.session.commit()

    return jsonify({
        'message': "Item from cart has been removed"
    })
