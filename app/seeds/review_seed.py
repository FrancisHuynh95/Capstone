from app.models import db, Review, environment, SCHEMA
from sqlalchemy import text


def seeded_review(seeded_users, seeded_product):
    review1 = Review(
        user_id =  seeded_users[0].id,
        review = 'Review 1',
        star_rating = 5,
        product_id = seeded_product[0].id

    )
    review2 = Review(
        user_id =  seeded_users[1].id,
        review = 'Review 2',
        star_rating = 5,
        product_id = seeded_product[0].id

    )
    review3 = Review(
        user_id =  seeded_users[2].id,
        review = 'Review 3',
        star_rating = 5,
        product_id = seeded_product[0].id
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
