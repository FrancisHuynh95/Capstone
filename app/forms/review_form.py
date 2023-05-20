from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    star_rating = IntegerField('stars', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    product_id = IntegerField('product_id', validators=[DataRequired()])
