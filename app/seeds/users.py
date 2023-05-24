from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        first_name = 'Demo',
        last_name= 'Lition',
        profile_img = 'test_profile_img_1',
        )
    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        password='password',
        first_name = 'Marnie',
        last_name= 'Lition',
        profile_img = 'test_profile_img_2'
        )
    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        first_name = 'Bobbie',
        last_name= 'Lition',
        profile_img = 'test_profile_img_3'
        )
    andre = User(
        username='andre',
        email='andre@aa.io',
        password='password',
        first_name = 'Andre',
        last_name= 'Hristu',
        profile_img = 'test_profile_img_4'
        )
    bao = User(
        username='bao',
        email='bao@aa.io',
        password='password',
        first_name = 'Bao',
        last_name= 'Zhang',
        profile_img = 'test_profile_img_5'
        )
    dom = User(
        username='Prince',
        email='prince@aa.io',
        password='password',
        first_name = 'Domenik',
        last_name= 'Moody',
        profile_img = 'test_profile_img_6'
        )
    david = User(
        username='david',
        email='david@aa.io',
        password='password',
        first_name = 'David',
        last_name= 'Kim',
        profile_img = 'test_profile_img_7'
        )
    jack = User(
        username='ExcuseMeimJack',
        email='jack@aa.io',
        password='password',
        first_name = 'Jack',
        last_name= 'Roybal',
        profile_img = 'test_profile_img_8'
        )
    malmos = User(
        username='malmos',
        email='ryan@aa.io',
        password='password',
        first_name = 'Ryan',
        last_name= 'Malmos',
        profile_img = 'test_profile_img_9'
        )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(andre)
    db.session.add(bao)
    db.session.add(dom)
    db.session.add(david)
    db.session.add(jack)
    db.session.add(malmos)
    db.session.commit()

    return [demo, marnie, bobbie, andre, bao, dom, david, jack, malmos]


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
