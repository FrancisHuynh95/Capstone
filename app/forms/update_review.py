from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed


class UpdateReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    star_rating = IntegerField('stars', validators=[DataRequired()])

