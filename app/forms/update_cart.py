from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class UpdateProductForm(FlaskForm):
    quantitiy = IntegerField('quantity', validators=[DataRequired()])
