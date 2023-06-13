from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class UpdateReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    star_rating = IntegerField('stars', validators=[DataRequired()])
