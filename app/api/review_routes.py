from flask import Blueprint, jsonify, redirect, request
from app.models import Review, db, User
from flask_login import login_required
from app.forms import ReviewForm


review_routes = Blueprint('review', __name__)

@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    review_list = [review.to_dict() for review in reviews]
    return jsonify(review_list)

@review_routes.route('/new', methods=['POST'])
@login_required
def create_review():
    print('we is creatin')
    form = ReviewForm()
    print('we is creatin')
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_review = Review(
            review = form.data['review'],
            star_rating = form.data['star_rating'],
            user_id = form.data['user_id'],
            product_id = form.data['product_id']
        )

        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return jsonify({"errors": "Bad Review oopsies"})

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()

    return jsonify({
        'message': "Review has been deleted"
    })
