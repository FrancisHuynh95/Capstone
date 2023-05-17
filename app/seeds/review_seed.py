from app.models import db, Review, environment, SCHEMA
from sqlalchemy import text


def seeded_review(seeded_users, seeded_product):
    review1 = Review(
        reviewer_name =  seeded_users[0],
        review = 'Review 1',
        star_rating = 5

    )
    review2 = Review(
        reviewer_name =  seeded_users[1],
        review = 'Review 2',
        star_rating = 5

    )
    review3 = Review(
        reviewer_name =  seeded_users[2],
        review = 'Review 3',
        star_rating = 5
    )

    all_reviews = [review1, review2, review3]
    add_review = [db.session.add(review) for review in all_reviews]
    db.session.commit()

    return all_reviews


def undo_review():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(
            text('DELETE FROM reviews')
        )
    db.session.commit()
