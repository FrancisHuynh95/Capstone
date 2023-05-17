from flask import Blueprint, jsonify, redirect, request
from app.models import Product, db, User
from flask_login import login_required
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3


product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def get_all_products():
    products = Product.query.all()
    product_list = [product.to_dict() for product in products]
    return jsonify(product_list)
