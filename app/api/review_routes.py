from flask import Blueprint, jsonify, redirect, request
from app.models import Review, db, User
from flask_login import login_required
from app.forms import ProductForm, UpdateProductForm


review_routes = Blueprint('review', __name__)

@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    review_list = [review.to_dict() for review in reviews]
    return jsonify(review_list)
